import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  // useEffect is a good place to fetch data
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            setError("Not able to fetch data for that resource");
            setIsPending(false);
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            console.log(err.message);
            setError("Not able to fetch data for that resource");
            setIsPending(false);
          }
        });
    }, 800);
    return () => abortCont.abort();
  });
  return { data, isPending, error };
};

export default useFetch;
