from fastapi import APIRouter
import subprocess
import json

router = APIRouter(
    prefix="/docker",
    tags=["Docker"]
)

# ==========================
# Get All Running Containers
# ==========================
@router.get("/containers")
def get_containers():
    result = subprocess.run(
        [
            "docker",
            "ps",
            "--format",
            "{{json .}}"
        ],
        capture_output=True,
        text=True
    )

    if result.returncode != 0:
        return {
            "status": "error",
            "message": result.stderr
        }

    containers = []

    for line in result.stdout.splitlines():
        containers.append(json.loads(line))

    return {
        "status": "success",
        "count": len(containers),
        "containers": containers
    }


# ==========================
# Start Container
# ========================== 
@router.post("/start/{container_name}")
def start_container(container_name: str):
    result = subprocess.run(
        ["docker", "start", container_name],
        capture_output=True,
        text=True
    )

    if result.returncode != 0:
        return {
            "status": "error",
            "message": result.stderr
        }

    return {
        "status": "success",
        "message": f"{container_name} started successfully"
    }


# ==========================
# Stop Container
# ==========================
@router.post("/stop/{container_name}")
def stop_container(container_name: str):
    result = subprocess.run(
        ["docker", "stop", container_name],
        capture_output=True,
        text=True
    )

    if result.returncode != 0:
        return {
            "status": "error",
            "message": result.stderr
        }

    return {
        "status": "success",
        "message": f"{container_name} stopped successfully"
    }


# ==========================
# Restart Container
# ==========================
@router.post("/restart/{container_name}")
def restart_container(container_name: str):
    result = subprocess.run(
        ["docker", "restart", container_name],
        capture_output=True,
        text=True
    )

    if result.returncode != 0:
        return {
            "status": "error",
            "message": result.stderr
        }

    return {
        "status": "success",
        "message": f"{container_name} restarted successfully"
    }