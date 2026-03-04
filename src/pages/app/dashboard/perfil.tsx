import { useRef, useState } from "react";

// ── Icon ─────────────────────────────────────────────────────────────────────
function IUser({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function PerfilPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    contactos: "",
    password: "",
  });

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="min-h-full bg-[#edf0f4] flex flex-col">

      {/* ── Sair da conta ── */}
      <div className="flex justify-end px-8 pt-6">
        <button
          className="bg-red-500 hover:bg-red-600 active:scale-95 text-white
                     font-bold text-[13px] px-6 py-2.5 rounded-full
                     shadow-md shadow-red-500/30 transition-all duration-150
                     hover:-translate-y-0.5"
        >
          Sair da conta
        </button>
      </div>

      {/* ── Content ── */}
      <div className="flex-1 px-8 pb-8 pt-4 flex flex-col gap-5">

        {/* Card – Foto ── */}
        <div className="bg-[#dde1e7] rounded-2xl px-8 py-6 flex items-center gap-6 shadow-sm">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center
                          overflow-hidden shrink-0 text-white">
            {preview
              ? <img src={preview} alt="avatar" className="w-full h-full object-cover" />
              : <IUser className="w-12 h-12" />
            }
          </div>

          <span className="font-black text-xl text-slate-900 tracking-tight flex-1">
            Atualizar uma Nova Foto
          </span>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFile}
          />
          <button
            onClick={() => fileRef.current?.click()}
            className="bg-[#0d1b3e] hover:bg-[#162251] text-white font-bold text-[13px]
                       px-7 py-2.5 rounded-xl transition-all duration-150
                       hover:-translate-y-0.5 active:scale-95 shadow-md"
          >
            Actualizar
          </button>
        </div>

        {/* Card – Formulário ── */}
        <div className="bg-[#dde1e7] rounded-2xl px-10 py-8 shadow-sm flex flex-col gap-6">
          <h2 className="font-black text-[20px] text-slate-900 tracking-tight text-center">
            Trocar as informações do usuário aqui:
          </h2>

          {/* Grid de inputs */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "nome",      placeholder: "Nome Completo" },
              { name: "email",     placeholder: "E-mail"        },
              { name: "contactos", placeholder: "Contactos"     },
              { name: "password",  placeholder: "Palavra-Passe", type: "password" },
            ].map(({ name, placeholder, type = "text" }) => (
              <input
                key={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={form[name as keyof typeof form]}
                onChange={handleChange}
                className="bg-white border border-slate-200 rounded-xl px-4 py-3
                           text-[13.5px] text-slate-700 placeholder-slate-400
                           outline-none focus:border-[#0d1b3e] focus:ring-2
                           focus:ring-[#0d1b3e]/10 transition-all duration-150"
              />
            ))}
          </div>

          {/* Actualizar */}
          <button
            className="w-full bg-[#2d3d6b] hover:bg-[#354880] text-white/80 hover:text-white
                       font-semibold text-[14px] py-3.5 rounded-xl
                       transition-all duration-150 active:scale-[0.99]"
          >
            Actualizar as Informações
          </button>

          {/* Excluir */}
          <div className="flex justify-center">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold text-[14px]
                         px-10 py-2.5 rounded-full shadow-md shadow-red-500/30
                         transition-all duration-150 hover:-translate-y-0.5 active:scale-95"
            >
              Excluir Conta
            </button>
          </div>
        </div>

      </div>

      {/* ── Footer ── */}
      <footer className="bg-[#0d1b3e] h-11 flex items-center justify-center mt-auto">
        <p className="text-white/40 text-[11px] font-semibold tracking-widest uppercase">
          © 2026 LocaTech – Informação Certa Combustível e Gás Sem Stress
        </p>
      </footer>

    </div>
  );
}