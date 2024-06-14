import { NavLink } from "react-router-dom"
import { Button } from "./ui/button"

const Banner = () => {
  return (
    <div className="w-full h-[400px] bg-gradient-to-b from-orange-200 to-white flex items-center justify-center gap-5 flex-col mb-10">
        <h1 className="text-center font-semibold text-4xl text-slate-700">Your Task Management App</h1>
        <NavLink to={'/tasks'}>
            <Button variant={"ghost"} className="border-[1.5px] border-orange-500 hover:bg-white/45 transition-all font-medium">View Your Tasks</Button>
        </NavLink>
    </div>
  )
}

export default Banner