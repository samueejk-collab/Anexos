import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      try {
        setCargando(true);
        setError(null);
        
        const respuesta = await fetch(url);
        
        if (!respuesta.ok) {
          throw new Error(`Error HTTP ${respuesta.status}`);
        }
        
        const json = await respuesta.json();
        setDatos(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    fetchData();
  }, [url]); 
  
  return { datos, cargando, error };
}