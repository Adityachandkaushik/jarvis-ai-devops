from fastapi import APIRouter

router = APIRouter(
    prefix="/health",
    tags=["Health"]
)

@router.get("/")
async def health():
    return {
        "status": "healthy",
        "service": "JARVIS AI DevOps",
        "version": "0.1.0"
    }