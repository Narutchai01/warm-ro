"use server"

import axios from "axios";

export const addCounter = async () => {
  await axios.post("http://localhost:3000/api").then(()=>{
        console.log("success");
    }).catch((err)=>{
        console.log(err);
    });
};
