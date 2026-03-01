
import logo from '@/assets/logo.png'

export function NavBar(){
    return(
        <nav className="bg-[#001140] py-6 px-10 flex justify-between items-center">
  <img src={logo} className="h-12" alt="Locatech" />
  <div className="flex gap-12 text-white font-bold text-xs uppercase tracking-widest">
    <a href="#" className="hover:text-slate-300">Início</a>
    <a href="#" className="hover:text-slate-300">Sobre</a>
    <a href="#" className="hover:text-slate-300">Como Funciona</a>
    <a href="#" className="hover:text-slate-300">Contactos</a>
  </div>
</nav>
    )
}