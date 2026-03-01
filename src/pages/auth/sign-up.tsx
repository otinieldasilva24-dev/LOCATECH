import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Importando as ferramentas de animação

export function SignUpGestor() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Configuração da animação para reaproveitar
  const variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="w-full max-w-[500px] bg-white/10 backdrop-blur-md rounded-[50px] p-12 shadow-2xl border border-white/10 text-white relative flex flex-col items-center overflow-hidden">
      
      {step > 1 && (
        <button 
          onClick={prevStep}
          className="absolute left-10 top-12 text-[#F13324] text-4xl hover:scale-110 transition-transform z-20"
        >
          <span className="leading-none">←</span>
        </button>
      )}

      <h2 className="text-2xl font-black text-center mb-8 leading-tight">
        Crie uma conta <br /> 
        <span className="font-bold">(Gestor)</span>
      </h2>

      <div className="w-full min-h-[300px] relative">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <input type="text" placeholder="Nome da Empresa" className="w-full h-14 px-6 rounded-xl bg-[#D9D9D9] text-slate-800 placeholder:text-slate-600 focus:outline-none" />
              <input type="email" placeholder="E-mail Institucional" className="w-full h-14 px-6 rounded-xl bg-[#D9D9D9] text-slate-800 placeholder:text-slate-600 focus:outline-none" />
              <div className="relative">
                <select className="w-full h-14 px-6 rounded-xl bg-[#D9D9D9] text-slate-800 appearance-none focus:outline-none cursor-pointer">
                  <option>Tipo de Empresa</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-800 text-[10px]">▲</div>
              </div>
              <input type="text" placeholder="NIF" className="w-full h-14 px-6 rounded-xl bg-[#D9D9D9] text-slate-800 placeholder:text-slate-600 focus:outline-none" />
              <div className="relative">
                <select className="w-full h-14 px-6 rounded-xl bg-[#D9D9D9] text-slate-800 appearance-none focus:outline-none cursor-pointer">
                  <option>Localização</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-800 text-[10px]">▲</div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <div className="relative">
                <select className="w-full h-14 px-6 rounded-xl bg-[#D9D9D9] text-slate-800 appearance-none focus:outline-none cursor-pointer">
                  <option>Produtos Geridos</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-800 text-[10px]">▲</div>
              </div>
              <input type="text" placeholder="Preço Atual do Produto" className="w-full h-14 px-6 rounded-xl bg-[#D9D9D9] text-slate-800 placeholder:text-slate-600 focus:outline-none" />
              <input type="text" placeholder="Horário de Funcionamento" className="w-full h-14 px-6 rounded-xl bg-[#D9D9D9] text-slate-800 placeholder:text-slate-600 focus:outline-none" />
              <div className="relative">
                <select className="w-full h-14 px-6 rounded-xl bg-[#D9D9D9] text-slate-800 appearance-none focus:outline-none cursor-pointer">
                  <option>Upload do Alvará</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-800 text-[10px]">▲</div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              <input type="text" placeholder="Nome Completo" className="w-full h-14 px-6 rounded-xl bg-[#D9D9D9] text-slate-800 placeholder:text-slate-600 focus:outline-none" />
              <input type="email" placeholder="E-mail" className="w-full h-14 px-6 rounded-xl bg-[#D9D9D9] text-slate-800 placeholder:text-slate-600 focus:outline-none" />
              <input type="password" placeholder="Palavra-Passe" className="w-full h-14 px-6 rounded-xl bg-[#D9D9D9] text-slate-800 placeholder:text-slate-600 focus:outline-none" />
              <input type="password" placeholder="Confirmar Palavra-Passe" className="w-full h-14 px-6 rounded-xl bg-[#D9D9D9] text-slate-800 placeholder:text-slate-600 focus:outline-none" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-10 flex justify-center z-20">
        <button 
          onClick={step === 3 ? () => navigate('/auth/success') : nextStep}
          className="px-12 h-14 bg-[#21A301] hover:bg-[#1a8201] transition-all rounded-full text-white font-black text-xl shadow-xl uppercase active:scale-95"
        >
          {step === 3 ? "Criar Conta" : "Seguinte"}
        </button>
      </div>
    </div>
  );
}