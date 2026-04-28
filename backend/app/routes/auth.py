from fastapi import APIRouter
import hashlib, jwt, datetime

router = APIRouter()

SECRET = "secret"

DB = {}

def hashp(p): return hashlib.sha256(p.encode()).hexdigest()

def token(user):
    return jwt.encode({
        "user": user,
        "exp": datetime.datetime.utcnow() + datetime.timedelta(days=7)
    }, SECRET, algorithm="HS256")

@router.post("/login")
def login(data: dict):
    user = data["username"]
    pw = data["password"]

    if user not in DB:
        DB[user] = hashp(pw)

    if DB[user] != hashp(pw):
        return {"error":"wrong"}

    return {"token": token(user)}
