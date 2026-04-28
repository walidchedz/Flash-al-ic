from fastapi import FastAPI
from app.routes import auth, dashboard, market

app = FastAPI()

app.include_router(auth.router)
app.include_router(dashboard.router)
app.include_router(market.router)
