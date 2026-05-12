from pydantic import BaseModel


class EffectiveMass(BaseModel):
    frequency: float
    em_x: float
    em_y: float
    em_z: float