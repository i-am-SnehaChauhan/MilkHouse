import React from 'react'
import cross from "../assets/cross.png"

const Cancel = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
<div class="card" style={{ width: "18rem", alignItems: "center", boxShadow:"3px 3px #ececec" }}>
  <img class="card-img-top"  style={{ width: "30%", margin: "20px" }}src={cross} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title"  style={{ alignItems: "center", textDecoration:"bold" }}>Payment Canceled</h4>
    <p class="card-text">Your Payment was canceled.</p>
    <a href="/dairy" class="btn btn-danger"  style={{ alignItems: "center", display:"grid",borderRadius:"20px"}}>Return to Home</a>
  </div>
</div>
</div>
  )
}

export default Cancel