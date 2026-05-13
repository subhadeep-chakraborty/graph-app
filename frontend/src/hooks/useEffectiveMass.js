import { useEffect, useState } from "react";
import { fetchEffectiveMass } from "../api/client";

export const useEffectiveMass = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEffectiveMass()
      .then((data) => {
        // create a copy before sorting
        const sorted = [...data].sort(
          (a, b) => a.frequency - b.frequency
        );
        setData(sorted);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};