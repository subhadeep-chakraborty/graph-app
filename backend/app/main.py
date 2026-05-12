from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router
from app.core.error_handlers import (
    data_load_exception_handler,
    data_format_exception_handler,
)
from app.core.exceptions import DataLoadError, DataFormatError
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(name)s - %(message)s",
)

app = FastAPI(title="Effective Mass API")

app.add_exception_handler(DataLoadError, data_load_exception_handler)
app.add_exception_handler(DataFormatError, data_format_exception_handler)

# Enable CORS (required)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api")