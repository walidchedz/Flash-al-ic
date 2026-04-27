import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Market from "./pages/Market";

export default function App(){
  const [page,setPage] = useState("login");

  return (
    <div style={{fontFamily:"Arial",background:"#0b0f14",color:"#0f0",minHeight:"100vh"}}>
      
      <nav style={{padding:20,background:"#111"}}>
        <button onClick={()=>setPage("login")}>Login</button>
        <button onClick={()=>setPage("dashboard")}>Dashboard</button>
        <button onClick={()=>setPage("market")}>Market</button>
      </nav>

      <div style={{padding:20}}>
        {page==="login" && <Login/>}
        {page==="dashboard" && <Dashboard/>}
        {page==="market" && <Market/>}
      </div>

    </div>
  )
}
