import { useNavigate } from "react-router-dom";

export function SelectAccountType() {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-[800px] bg-white/10 backdrop-blur-lg rounded-[60px] p-16 shadow-2xl border border-white/10 flex flex-col items-center text-white">
      
      <h2 className="text-3xl font-black uppercase mb-4 tracking-tight">
        Que tipo de conta deseja criar?
      </h2>
      
      <p className="text-2xl font-medium mb-12">Selecione:</p>

      <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
        {/* Botão Cliente - Azul Marinho #001140 */}
        <button 
          onClick={() => navigate('/auth/sign-up-cliente')}
          className="w-64 h-20 bg-[#001140] hover:bg-[#000a26] transition-all rounded-[40px] text-white font-black text-2xl shadow-xl uppercase tracking-wider"
        >
          Cliente
        </button>

        {/* Botão Gestor - Vermelho #F13324 */}
        <button 
          onClick={() => navigate('/auth/sign-up-gestor')}
          className="w-64 h-20 bg-[#F13324] hover:bg-[#d12a1d] transition-all rounded-[40px] text-white font-black text-2xl shadow-xl uppercase tracking-wider"
        >
          Gestor
        </button>
      </div>
    </div>
  );
}