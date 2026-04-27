import { useEffect, useState } from "react";
import { market } from "../api";

export default function Market(){

  const [items,setItems]=useState([]);

  useEffect(()=>{
    market().then(setItems);
  },[]);

  return (
    <div>
      <h2>🛒 Market</h2>

      {items.map((i,idx)=>(
        <div key={idx} style={{background:"#111",margin:10,padding:10}}>
          <h3>{i.name}</h3>
          <p>{i.price}</p>
        </div>
      ))}
    </div>
  )
}
