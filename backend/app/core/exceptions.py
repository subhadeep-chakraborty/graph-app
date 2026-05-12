class DataLoadError(Exception):
    """Raised when CSV cannot be loaded"""
    pass


class DataFormatError(Exception):
    """Raised when data format is invalid"""
    pass