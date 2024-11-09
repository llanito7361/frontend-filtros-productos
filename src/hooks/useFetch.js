import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
           const fetcheadora = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);  // Verifica qué devuelve la API

    // const {products} = data
    setProducts(data.products || ['vacio'])

      } catch (error) {
        setError(error.message);
        console.log(`El error fue: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetcheadora();
    },[])
    return{error,loading, products}
}