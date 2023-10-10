import axios from "axios";
import { useEffect, useState } from "react"

export const useRequestData = (initialState, url) => {
    const [data, setData] = useState(initialState)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setIsLoading(true)
        axios
          .get(url)
          .then((response) => {
            setIsLoading(false)
            setData(response.data);
          })
          .catch((error) => {
            setIsLoading(false)
            setError(true)
            console.log(error);
          });
      }, [url]);

      return [data, error, isLoading]
}