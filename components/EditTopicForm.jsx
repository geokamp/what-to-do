"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";





export default function EditTopic({ id, title, description }){

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

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };




    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
                type="text"
                placeholder="Topic Title"
                class="input input-bordered input-accent  max-xs px-8" />

            <input
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
                type="text"
                placeholder="What to do!"
                class="input input-bordered input-accent w-full max-xs px-8" />


            <button class="btn btn-outline btn-success w-fit">Update Topic</button>
        </form>
    )
}