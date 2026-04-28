from fastapi import APIRouter

router = APIRouter()

@router.get("/market")
def market():
    return [
        {"name":"BIOS Pack","price":"5$"},
        {"name":"Router Pack","price":"3$"}
    ]
