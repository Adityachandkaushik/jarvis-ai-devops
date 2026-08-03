from fastapi import APIRouter
import subprocess
import json

router = APIRouter(
    prefix="/docker",
    tags=["Docker"]
)

@router.get("/containers")
def get_containers():
    result = subprocess.run(
        [
            "docker",
            "ps",
            "-a",
            "--format",
            "{{json .}}"
        ],
        capture_output=True,
        text=True,
    )

    containers = []

    for line in result.stdout.splitlines():
        containers.append(json.loads(line))

    return containers