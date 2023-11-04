import mongoose from "mongoose";


const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    countryCode:{
      type: String,
      required: true,
    },
    contactNumber:{
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
);

// userSchema.virtual('password')
//   .set(function(password) {
//     console.log('Setting password:', password);
//     if (!password) {
//       throw new Error('Password is required.');
//     }
//     this.hash_password = bcrypt.hashSync(password, 10);
//   });

// userSchema.methods = {
//   authenticate: function (password) {
//     return bcrypt.compareSync(password, this.hash_password);
//   },
// };

const User = mongoose.model("User", userSchema);

export default User;
