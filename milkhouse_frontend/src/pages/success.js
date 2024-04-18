import React from 'react'
import check from "../assets/check.png"

const Sucess = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
    <div className="card" style={{ width: "18rem", alignItems: "center", boxShadow:"3px 3px #ececec" }}>
      <img className="card-img-top"  style={{ width: "30%", margin: "20px" }}src={check} alt="Card image cap"/>
      <div className="card-body">
        <h4 className="card-title"  style={{ alignItems: "center", textDecoration:"bold" }}>Payment Successful</h4>
        <p className="card-text">Thank you for your payment!</p>
        <a href="/dairy" className="btn btn-success"  style={{ alignItems: "center", display:"grid",borderRadius:"20px"}}>Continue Shopping</a>
      </div>
    </div>
    </div>
  )
}

export default Sucess