import { APIError } from "../utils/apiError";

const API_BASE = process.env.REACT_APP_API_URL;

export const fetchEffectiveMass = async () => {
  try {
    const response = await fetch(`${API_BASE}/api/effective-mass`);

    if (!response.ok) {
      // Try to read backend error message
      let errorMessage = "Failed to fetch data";

      try {
        const errorData = await response.json();
        errorMessage = errorData.detail || errorMessage;
      } catch {
        // ignore JSON parse errors
      }

      throw new APIError(errorMessage, response.status);
    }

    return await response.json();

  } catch (error) {
    // Network errors (backend down, CORS, etc.)
    if (error instanceof APIError) {
      throw error;
    }

    throw new APIError("Network error. Please check your connection.", 500);
  }
};