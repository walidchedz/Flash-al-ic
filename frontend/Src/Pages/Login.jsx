import { useState } from "react";
import { login } from "../api";

export default function Login(){

  const [user,setUser]=useState("");
  const [pass,setPass]=useState("");
  const [res,setRes]=useState("");

  async function handleLogin(){
    const data = await login(user,pass);
    setRes(JSON.stringify(data));
  }

  return (
    <div>
      <h2>🔐 Login</h2>

      <input placeholder="user" onChange={e=>setUser(e.target.value)} />
      <br/>
      <input placeholder="pass" onChange={e=>setPass(e.target.value)} />
      <br/>

      <button onClick={handleLogin}>Login</button>

      <pre>{res}</pre>
    </div>
  )
}
