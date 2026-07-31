from fastapi import FastAPI

app = FastAPI(
    title="JARVIS AI DevOps API",
    description="AI Powered DevOps Assistant Backend",
    version="0.1.0"
)

@app.get("/")
async def root():
    return {
        "message": "Welcome to JARVIS AI DevOps 🚀"
    }

@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "service": "Jarvis Backend",
        "version": "0.1.0"
    }