import Link from "next/link";


export default function Navigation(){
    return(
        <div className="flex w-[70%] h-[90px] bg-dark-bg items-center justify-evenly sticky top-0">
            <h1 className="text-transparent bg-clip-text bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700 text-3xl font-extrabold">C-GPrompT</h1>

            <input  type="search" className="bg-transparent border-[0.5px] p-2 rounded-md w-[270px] focus:outline-none text-white focus:w-[280px] transition-all" placeholder="Prompts..."/>
            

            <ul className="text-white">
                <li className="">
                    <Link href="Add Prompt" className="hover:text-slate-400 transition-all ease-in">Add Prompt</Link>

                </li>
            </ul>


        </div>
    )
}