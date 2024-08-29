import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Grid,
  styled,
  Divider,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { auth, db } from "../../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import Loader from "../../templates/Loader";

const LeftComponent = styled(Card)(({ theme }) => ({
  paddingRight: 15,
  marginTop: 16,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const Cost = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Component = styled(Card)`
  border-top: 1px solid #f0f0f0;
  border-radius: 0px;
  display: flex;
`;

const OrderComponent = styled(Box)`
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const UserProfile = () => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedPhone, setEditedPhone] = useState("");
  const fassured =
    "https://res.cloudinary.com/dx0dgujbj/image/upload/v1690433349/Products/ASSURED-logo_tfge0s.jpg";

    useEffect(() => {
      const unsubscribeAuth = auth.onAuthStateChanged((user) => {
        if (user) {
          const userRef = doc(db, "users", user.uid);
          const unsubscribeData = onSnapshot(userRef, (doc) => {
            if (doc.exists()) {
              const userData = doc.data();
              setUser(userData);
              setOrders(userData.orders || []);
              setEditedName(userData.name);
              setEditedPhone(userData.phone);
            }
            setLoading(false);
          });
    
          return () => unsubscribeData();
        } else {
          setLoading(false);
        }
      });
    
      return () => unsubscribeAuth();
    }, []);
    

  if (loading) {
    return <Loader />;
  }
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (auth.currentUser) {
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, {
        name: editedName,
        phone: editedPhone,
      });
      setIsEditing(false);
    }
  };
  const handleCancel = () => {
    setIsEditing(false);
    setEditedName(user?.name);
    setEditedPhone(user?.phone);
  };

  // Extract unique products from orders
  const uniqueProducts = [];
  orders.forEach((order) => {
    const products = Array.isArray(order.products)
      ? order.products
      : [order.products];
    products.forEach((product) => {
      if (!uniqueProducts.some((p) => p.id === product.id)) {
        uniqueProducts.push(product);
      }
    });
  });

  return (
    <Box sx={{ p: 5, bgcolor: "#f0f4f7", height: "auto" }}>
      <Grid container spacing={2}>
        {/* Left section with avatar and user info */}
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <Avatar
              alt="John Doe"
              src="/path-to-avatar.jpg"
              sx={{ width: 100, height: 100, margin: "0 auto" }}
            />
            <Typography variant="h5" sx={{ mt: 2 }}>
              {user?.name}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                onClick={() => (window.location.href = `mailto:${user.email}`)}
              >
                Message
              </Button>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Grid container alignItems="center">
                <Grid item xs={4}>
                  <Typography variant="h6">Full Name</Typography>
                </Grid>
                <Grid item xs={8}>
                  {isEditing ? (
                    <TextField
                      fullWidth
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    <Typography>{user?.name}</Typography>
                  )}
                </Grid>
                <Divider />
              </Grid>
              <Divider sx={{ my: 2 }} />

              <Grid container alignItems="center">
                <Grid item xs={4}>
                  <Typography variant="h6">Email</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography>{user?.email}</Typography>
                </Grid>
                <Divider />
              </Grid>
              <Divider sx={{ my: 2 }} />

              <Grid container alignItems="center">
                <Grid item xs={4}>
                  <Typography variant="h6">Phone</Typography>
                </Grid>
                <Grid item xs={8}>
                  {isEditing ? (
                    <TextField
                      fullWidth
                      value={editedPhone}
                      onChange={(e) => setEditedPhone(e.target.value)}
                    />
                  ) : (
                    <Typography>{user?.phone}</Typography>
                  )}
                </Grid>
                <Divider />
              </Grid>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ mt: 3, textAlign: "right" }}>
                {isEditing ? (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<SaveIcon />}
                      onClick={handleSave}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<CancelIcon />}
                      onClick={handleCancel}
                      sx={{ ml: 2 }}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EditIcon />}
                    onClick={handleEdit}
                  >
                    Edit
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Card to show the products that the user ordered */}
      {loading ? (
        <Loader />
      ) : (
        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
          <Header>
            <Typography style={{ fontWeight: 600, fontSize: 18 }}>
              My Orders ({uniqueProducts.length})
            </Typography>
          </Header>
          {uniqueProducts.map((product, index) => (
            <Component key={index}>
              <OrderComponent>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ height: 110, width: 110 }}
                />
              </OrderComponent>
              <Box style={{ margin: 20 }}>
                <Typography>{product.title}</Typography>
                <SmallText>
                  High Quality
                  <span>
                    <img
                      src={fassured}
                      alt="Assured"
                      style={{ width: 50, marginLeft: 10 }}
                    />
                  </span>
                </SmallText>
                <Typography style={{ margin: "20px 0" }}>
                  <Cost component="span">₹{product.mrp}</Cost>
                </Typography>
              </Box>
            </Component>
          ))}
        </LeftComponent>
      )}
    </Box>
  );
};

export default UserProfile;
