from fastapi import Request
from fastapi.responses import JSONResponse
from app.core.exceptions import DataLoadError, DataFormatError


def data_load_exception_handler(request: Request, exc: DataLoadError):
    return JSONResponse(
        status_code=500,
        content={"detail": "Failed to load data file"},
    )


def data_format_exception_handler(request: Request, exc: DataFormatError):
    return JSONResponse(
        status_code=400,
        content={"detail": "Invalid data format"},
    )