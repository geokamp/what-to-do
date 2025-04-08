"use client"

import Link from "next/link";

import {HiPencilAlt} from 'react-icons/hi';
import RemoveBtn from "../removeBtn/RemoveBtn";
import { useEffect, useState } from "react";

const getTopics = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };


export default  function TopicsLists(){


    const [topics, setTopics] =  useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const res = await getTopics();
            setTopics(res.topics);
        }

        fetchData();
    },[])

    return(
        <>
        {topics?.map(t=>(
        <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
            <div>
                <h2 className="font-bold text-2xl text-black ">{t.title}</h2>
                <div className="text-black">{t.description}</div>
            </div>

            <div className="flex gap-2 ">
                <RemoveBtn id={t._id}/>
                <Link href={`/editTopic/${t._id}`} className="text-black" >
                    <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>
        ))}
        </>
    )
}