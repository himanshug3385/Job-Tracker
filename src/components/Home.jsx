import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import JobSection from "./JobSection";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const body = JSON.stringify({
    "limit": 10,
    "offset": 0
   });
   
   const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body
   };
    const res = await fetch(
      `https://api.weekday.technology/adhoc/getSampleJdJSON`,requestOptions
    );
    const data = await res.json();
    console.log(data);
    setCard((prev) => [...prev, ...data.jdList]);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <JobSection jobs={card} />
      {loading && <Loading />}
    </>
  );
};

export default Home;