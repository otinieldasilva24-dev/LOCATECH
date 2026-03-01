import { Outlet } from "react-router-dom";
import { NavBar } from "./header";
import img from '@/assets/bg.jpeg'

export function AuthLayoutPacient() {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${img})` }} 
    >
      <div className="absolute inset-0 bg-[#001140]/50 backdrop-brightness-75" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
         <NavBar />
         <main className="flex-1 flex items-center justify-center p-4">
            <Outlet></Outlet>
         </main>
         <footer className="w-full bg-[#001140] py-4 text-center text-white text-[10px] uppercase tracking-widest">
            @ 2026 LOCATECH - INFORMAÇÃO CERTA COMBUSTÍVEL E GÁS SEM STRESS
         </footer>
      </div>
    </div>
  )
}