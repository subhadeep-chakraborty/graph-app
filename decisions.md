# DECISIONS.md

## Overview

This project implements a small full-stack application to visualize **Effective Mass vs Frequency** using a FastAPI backend and a React frontend. The focus was on building a clean, modular, and production-inspired architecture while keeping the implementation simple and maintainable.

---

##  Backend Design (FastAPI)

### 1. Separation of Concerns

The backend is structured into clear layers:

- **API Layer (`routes.py`)**  
  Handles HTTP requests and responses only.

- **Service Layer (`data_service.py`)**  
  Responsible for:
  - Reading CSV data
  - Validating schema
  - Transforming data into API format

- **Core Layer (`core/`)**  
  Contains:
  - Configuration (`config.py`)
  - Custom exceptions (`exceptions.py`)
  - Centralized error handlers (`error_handlers.py`)

- **Schema Layer (`schemas.py`)**  
  Defines response models using Pydantic.

This separation ensures maintainability, testability, and scalability.

---

### 2. CSV Handling Strategy

- The CSV file is read **only in the backend**, not in the frontend.
- Data is transformed into a consistent JSON structure:
  - `frequency`
  - `em_x`, `em_y`, `em_z`
- Column normalization ensures decoupling from raw CSV format.

---

### 3. Data Validation

- Added validation for required columns:
  - `frequency_hz`, `x`, `y`, `z`
- Invalid or missing data is handled using custom exceptions.

This prevents silent failures and ensures API reliability.

---

### 4. Error Handling

- Implemented **custom exceptions**:
  - `DataLoadError`
  - `DataFormatError`

- Centralized exception handling ensures:
  - Consistent API responses
  - Clean route logic
  - Better debugging

---

### 5. Logging

- Added structured logging using Python’s `logging` module.
- Errors in data loading and processing are logged with context.

This improves observability and debugging.

---

### 6. API Design

- Endpoint: `/api/effective-mass`
- Response modeled using Pydantic:
  - Ensures type safety
  - Auto-generates API documentation

- Added `/api/health` endpoint for service monitoring.

---

### 7. Configuration

- Used environment variables (`.env`) for:
  - CSV file path
- Avoided hardcoded values for flexibility.

---

##  Frontend Design (React)

### 1. Data Fetching

- Data is fetched from the backend API using a custom hook:
  - `useEffectiveMass`

- The frontend does **not access the CSV directly**, ensuring proper separation of concerns.

---

### 2. Component Structure

- `EMChart.jsx` → main chart container
- Modularized into smaller components:
  - `ChartLines`
  - `ModeIndicator`
  - `ChartContainer`

This improves readability and reusability.

---

### 3. Charting Approach

- Used **Recharts** for visualization.
- Features:
  - Three lines: EM-X, EM-Y, EM-Z
  - Numeric X-axis for non-uniform frequency values
  - Tooltip, legend, and grid
  - Vertical indicator for Mode 1 (43.9 Hz)

---

### 4. Configuration-Driven UI

- Chart lines are driven by a config file:
  - `LINE_CONFIG`

This avoids hardcoding and improves scalability.

---

### 5. UX Enhancements

- Added:
  - Loading and error states
  - Data point count display
  - Responsive chart container
  - Mode indicator highlighting

---

##  Improvements After Initial Implementation

After the initial working version, the following improvements were made:

- Refactored backend into layered architecture
- Introduced service layer for data processing
- Added schema validation using Pydantic
- Implemented centralized error handling
- Added logging for better debugging
- Modularized frontend components
- Introduced configuration-driven chart rendering
- Improved UI responsiveness and clarity

---

##  Future Improvements

Given more time, the following enhancements could be added:

- Caching CSV data to avoid repeated file reads
- Unit tests for backend services and API endpoints
- Integration tests for API
- TypeScript for frontend type safety
- Dockerization for easy deployment
- Pagination or filtering for large datasets
- UI controls for toggling chart lines dynamically

---

Tried my best not just to make the application work, but to structure it in a way that reflects real-world engineering practices.
Thank you for reading !!