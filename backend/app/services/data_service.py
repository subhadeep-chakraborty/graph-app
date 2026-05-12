import pandas as pd
import logging
from app.core.exceptions import DataLoadError, DataFormatError

logger = logging.getLogger(__name__)   

def load_data(file_path: str) -> pd.DataFrame:
    """Load CSV file into DataFrame"""
    try:
        df = pd.read_csv(file_path)
        return df
    except Exception as e:
        logger.error(f"Failed to load CSV: {e}")
        raise DataLoadError()
    



def process_data(df: pd.DataFrame) -> list:
    """Transform and clean data for API response"""
    try:

        required_cols = ["frequency_hz", "x", "y", "z"]
        if not all(col in df.columns for col in required_cols):
            raise DataFormatError()
        
        # Normalize column names
        df = df.rename(columns={
            "frequency_hz": "frequency",
            "x": "em_x",
            "y": "em_y",
            "z": "em_z"
        })

        # Ensure numeric values
        df["frequency"] = pd.to_numeric(df["frequency"], errors="coerce")
        df["em_x"] = pd.to_numeric(df["em_x"], errors="coerce")
        df["em_y"] = pd.to_numeric(df["em_y"], errors="coerce")
        df["em_z"] = pd.to_numeric(df["em_z"], errors="coerce")

        # Drop invalid rows
        df = df.dropna()

        # Sort for correct plotting
        df = df.sort_values(by="frequency")

        # Return only required fields
        return df[["frequency", "em_x", "em_y", "em_z"]].to_dict(orient="records")

    except Exception as e:
        logger.error(f"Data format err: {e}")
        raise DataFormatError()