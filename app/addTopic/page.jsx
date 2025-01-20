"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";







export default function AddTopic(){


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(!title || !description){
            alert("Title and description are missing")
        }

        try{
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers:{
                    "Content-type": "application/json",
                },
                body: JSON.stringify({title, description})
              });
          
              if (res.ok) {
                router.push('/')
              }else{
                throw new Error("Failed to create a topic");
              }
          
              
            } catch (error) {
              console.log("Error loading topics: ", error);
            }

    }



    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Topic Title"
                class="input input-bordered input-accent  max-xs px-8" />

            <input
            onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="What to Do!"
                class="input input-bordered input-accent w-full max-xs px-8" />


            <button type="submit" class="btn btn-outline btn-success w-fit">Success</button>
        </form>
    )
}