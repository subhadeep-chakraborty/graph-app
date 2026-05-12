
from fastapi import APIRouter
from typing import List

from app.services.data_service import load_data, process_data
from app.core.config import settings
from app.schemas import EffectiveMass
router = APIRouter()



@router.get("/health")
def health_check():
    return {"status": "ok"}

@router.get("/effective-mass", response_model=List[EffectiveMass])
def get_effective_mass():
    df = load_data(settings.DATA_PATH) # Step 1: read file
    data = process_data(df) # Step 2: transform
    return data