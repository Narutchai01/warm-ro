"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowCounterpage() {
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    const res = await axios.get("/api");
    setCount(res.data.length);
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 500);

    // Cleanup function
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <h1>{count != 0 ? count : 0}</h1>
    </div>
  );
};
