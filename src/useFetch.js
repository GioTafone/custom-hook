import { useState, useEffect } from "react";

export const useFetch = (datas) => {
  const [contacts, setContacts] = useState(null);

  console.log(datas);

  useEffect(() => {
    fetch(datas.url)
    .then((res) => res.json())
    .then((json) => setContacts(json))
  }, [datas.url])


  return {
    contacts,
  };
};
