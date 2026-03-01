import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function SuccessAccount() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-[600px] bg-white/10 backdrop-blur-md rounded-[50px] p-16 shadow-2xl border border-white/10 flex flex-col items-center text-center"
    >
      <h2 className="text-white text-2xl font-black mb-10">
        Bem-Vindo Otiniel Da Silva
      </h2>

      {/* Botão Verde de Sucesso */}
      <button className="w-full max-w-[350px] py-8 bg-[#21A301] rounded-[40px] text-white font-black text-xl shadow-lg cursor-default mb-8 leading-tight">
        Conta criada com <br /> Sucesso
      </button>

      <button 
        onClick={() => navigate('/dashboard')} 
        className="text-white/80 hover:text-white text-lg font-medium transition-colors"
      >
        Continuar
      </button>
    </motion.div>
  );
}