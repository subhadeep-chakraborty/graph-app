const API_BASE = process.env.REACT_APP_API_URL;

export const fetchEffectiveMass = async () => {
  const response = await fetch(`${API_BASE}/api/effective-mass`);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};