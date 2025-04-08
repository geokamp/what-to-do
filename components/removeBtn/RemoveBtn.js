
import {HiOutlineTrash} from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';





export default function RemoveBtn({id})  {
    const router = useRouter();

    const removeTopic = async() =>{
        const confirmed = confirm('Are you sure?')


        if(confirmed){
            const res = await fetch(`/api/topics?id=${id}`, {
                method:"DELETE",
            });
            if(res.ok){
                
                router.push("/addTopic");
                toast.success("Task Deleted!");
            }
        }
    };

    return(
        <button  onClick={removeTopic}  className='text-red-800 bg-red'>
            <HiOutlineTrash size={24}/>
        </button>
    )
}