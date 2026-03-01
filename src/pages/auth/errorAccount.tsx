import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function ErrorAccount() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-[600px] bg-white/10 backdrop-blur-md rounded-[50px] p-16 shadow-2xl border border-white/10 flex flex-col items-center text-center"
    >
      <h2 className="text-white text-2xl font-black mb-10">
        Ops... Algo aconteceu (Erro)
      </h2>

      {/* Botão Vermelho de Erro */}
      <button className="w-full max-w-[350px] py-8 bg-[#FF0000] rounded-[40px] text-white font-black text-xl shadow-lg cursor-default mb-8 leading-tight">
        Conta não criada <br /> Tente novamente
      </button>

      <button 
        onClick={() => navigate(-1)} 
        className="text-white/80 hover:text-white text-lg font-medium transition-colors"
      >
        Voltar
      </button>
    </motion.div>
  );
}