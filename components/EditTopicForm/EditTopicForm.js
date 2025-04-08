"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import TextField from '@mui/material/TextField';
import Button  from "@mui/material/Button";
import toast from "react-hot-toast";



export default function EditTopicForm({ id, title, description }){

    const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      toast.success("Task Updated!")
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };




    return(
        
            <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4 w-[500px] justify-center items">
                    <h1 className="font-bold text-3xl">CREATE YOUR TASK</h1>
                    <TextField 
                    id="outlined-basic" 
                    label="Title" 
                    variant="outlined" 
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
                    />
            
                    <TextField id="outlined-basic" multiline rows={5} label="What to do!" variant="outlined" onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription} />
            
                    <Button variant="contained" type="submit">Update Topic</Button>
                </form>
            </div>
        
    )
}