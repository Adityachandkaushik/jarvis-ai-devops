from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.health import router as health_router
from app.api.system import router as system_router
from app.api.docker import router as docker_router

app = FastAPI(
    title="JARVIS AI DevOps API",
    description="AI Powered DevOps Assistant Backend",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://[::1]:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health_router)
app.include_router(system_router)
app.include_router(docker_router)

@app.get("/")
async def root():
    return {
        "message": "Welcome to JARVIS AI DevOps 🚀"
    }