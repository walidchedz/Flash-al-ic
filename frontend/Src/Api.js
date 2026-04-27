const API = "https://your-backend.onrender.com";

export async function login(u,p){
  let r = await fetch(API+"/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({username:u,password:p})
  });
  return r.json();
}

export async function dashboard(){
  let r = await fetch(API+"/dashboard");
  return r.json();
}

export async function market(){
  let r = await fetch(API+"/market");
  return r.json();
}
