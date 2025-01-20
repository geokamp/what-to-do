import Link from "next/link";



export default function Navbar(){
    return(
        
        
        <div class="navbar bg-primary">
            <div class="flex-1">
               <Link href={"/"}  class="btn btn-ghost text-xl">what TO-DO</Link>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li><Link href={"/addTopic"}><button class="btn btn-ghost">Add +</button></Link></li>
                </ul>
            </div>
        </div>
        
    )
}