import { useState, useEffect } from "react";

export const useFetch = (options) => {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    if (options.url) {
      fetch(options.url)
        .then((res) => res.json())
        .then((json) => setDatas(json));
    }
  }, [options.url]);

  return {
    datas,
  };
};
