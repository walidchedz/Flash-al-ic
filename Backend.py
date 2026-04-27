from fastapi import FastAPI
from pydantic import BaseModel
import hashlib, jwt, datetime

app = FastAPI()

SECRET = "release-final-key"

DB = {
    "users": {}
}

CHIPS = {
    "25Q64": {"type": "SPI NOR", "size": "8MB"},
    "25Q32": {"type": "SPI NOR", "size": "4MB"}
}

def hashp(p): return hashlib.sha256(p.encode()).hexdigest()

def token(user):
    return jwt.encode({
        "user": user,
        "exp": datetime.datetime.utcnow() + datetime.timedelta(days=7)
    }, SECRET, algorithm="HS256")

class Auth(BaseModel):
    username: str
    password: str

@app.post("/register")
def register(a: Auth):
    DB["users"][a.username] = {
        "password": hashp(a.password),
        "plan": "free",
        "devices": []
    }
    return {"status": "ok"}

@app.post("/login")
def login(a: Auth):
    u = DB["users"].get(a.username)
    if not u or u["password"] != hashp(a.password):
        return {"error": "invalid"}

    return {
        "token": token(a.username),
        "plan": u["plan"]
    }

@app.get("/dashboard")
def dashboard():
    return {
        "users": len(DB["users"]),
        "status": "LIVE"
    }

@app.get("/market")
def market():
    return [
        {"name": "BIOS Pack", "price": "5$"},
        {"name": "Router Pack", "price": "3$"}
    ]
