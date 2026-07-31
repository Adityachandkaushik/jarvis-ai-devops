from fastapi import FastAPI
from app.api.health import router as health_router

app = FastAPI(
    title="JARVIS AI DevOps API",
    description="AI Powered DevOps Assistant",
    version="0.1.0"
)

app.include_router(health_router)


@app.get("/")
async def root():
    return {
        "message": "Welcome to JARVIS AI DevOps 🚀"
    }