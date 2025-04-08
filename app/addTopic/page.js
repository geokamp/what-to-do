"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import TextField from '@mui/material/TextField';
import Button  from "@mui/material/Button";
import toast from "react-hot-toast";




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
                toast.success("Task Created!")
                router.push("/")
              }else{
                throw new Error("Failed to create a topic");
              }
          
              
            } catch (error) {
              toast.error(error?.message);
              console.log("Error loading topics: ", error);
            }

    }

    console.log(title);
    return(
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4 w-[500px] justify-center items">
                <h1 className="font-bold text-3xl">CREATE YOUR TASK</h1>
                <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e) => setTitle(e.target.value)} />

                <TextField id="outlined-basic" multiline rows={5} label="What to do!" variant="outlined" onChange={(e) => setDescription(e.target.value)} />

                <Button variant="contained" type="submit">Success!</Button>
            </form>
        </div>
    )
}