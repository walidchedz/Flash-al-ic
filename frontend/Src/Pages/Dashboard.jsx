import { useEffect, useState } from "react";
import { dashboard } from "../api";

export default function Dashboard(){

  const [data,setData]=useState({});

  useEffect(()=>{
    dashboard().then(setData);
  },[]);

  return (
    <div>
      <h2>📊 Dashboard</h2>

      <div style={{background:"#111",padding:20,borderRadius:10}}>
        <p>Users: {data.users}</p>
        <p>Status: {data.status}</p>
      </div>
    </div>
  )
}
