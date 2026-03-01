import { Outlet } from "react-router-dom";
import img from '@/assets/bg.jpeg'
import { NavBar } from "./header"; // Certifique-se de que o NavBar tenha o fundo #001140

export function AppLayoutAdmin() {
  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative flex flex-col antialiased"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay azulado idêntico às fotos */}
      <div className="absolute inset-0 bg-[#001140]/40 backdrop-brightness-90" />
      
      {/* Conteúdo Superior (Z-10 para ficar acima do overlay) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />
        
        <main className="flex-1 flex items-center justify-center p-4">
          <Outlet />
        </main>

        {/* Footer "Xato" e Fiel */}
        <footer className="w-full bg-[#001140] py-4 text-center">
          <p className="text-white text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase">
            @ 2026 LOCATECH - INFORMAÇÃO CERTA COMBUSTÍVEL E GÁS SEM STRESS
          </p>
        </footer>
      </div>
    </div>
  )
}