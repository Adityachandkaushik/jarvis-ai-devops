from fastapi import APIRouter
import psutil
import platform
import socket

router = APIRouter(
    prefix="/system",
    tags=["System"]
)

@router.get("/")
def system_info():
    return {
        "cpu": psutil.cpu_percent(interval=1),
        "memory": psutil.virtual_memory().percent,
        "disk": psutil.disk_usage("/").percent,
        "hostname": socket.gethostname(),
        "platform": platform.system(),
    }