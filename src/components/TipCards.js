import React from "react";
import './icons.css'

function TipCards({text1,text2,text3,text4,icon, }) {
  return <div className="icon">
  <p>{icon}</p>
  <p><solid>{text1}</solid></p>
  <p>{text2}</p>
  <p>{text3}</p>
  <p>{text4}</p>
  </div>
}

export default TipCards;
