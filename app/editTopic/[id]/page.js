
import EditTopicForm from "@/components/EditTopicForm/EditTopicForm";

const getTopicById = async (id) => {
  console.log("Fetching topic with id:", id); 
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/topics/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }

      const data = await res.json();
    console.log("API Response:", data); // Log the response to see the structure

    return data;
    } catch (error) {
      console.log(error);
    }

}

export default async function EditTopic({ params }) {
    const { id } = await params;
    const { topic } = await getTopicById(id);
    console.log(topic);
    
    const { title, description } = topic;
  
    return <EditTopicForm id={id} title={title} description={description} />;
  }