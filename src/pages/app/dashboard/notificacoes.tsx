const notifications = [
  {
    id: 1,
    posto: "Posto Sonangol",
    localizacao: "Via Avenida Deolinda Rodrigues / Luanda / Angola",
    mensagem: "Estabelecimento em Chama, afaste-se o mais rápido possível",
    tipo: "perigo",
    verificar: false,
  },
  {
    id: 2,
    posto: "Posto Etu",
    localizacao: "Centralidade do Sequele / Luanda / Angola",
    mensagem: "Vazamento de gás inflamável, afaste-se o mais rápido possível",
    tipo: "perigo",
    verificar: false,
  },
  {
    id: 3,
    posto: "Posto Sonangol",
    localizacao: "Via Catete, Bom Jesus / Luanda / Angola",
    mensagem: "Foi alterado os preços dos combustíveis, recentemente.",
    tipo: "info",
    verificar: true,
  },
  {
    id: 4,
    posto: "Posto Sonagalp",
    localizacao: "Benfica / Luanda / Angola",
    mensagem: "Foi alterado os preços dos combustíveis, recentemente.",
    tipo: "info",
    verificar: true,
  },
];

function AlertIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-12 h-12 text-slate-700 shrink-0"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export default function NotificacoesPage() {
  return (
    <div className="min-h-full bg-[#edf0f4] flex flex-col">

      {/* Conteúdo */}
      <div className="flex-1 px-10 py-8 flex flex-col gap-5">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="flex items-center gap-6 bg-[#dde1e7] rounded-2xl px-8 py-6
                       shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Ícone */}
            <div className="shrink-0">
              <AlertIcon />
            </div>

            {/* Texto */}
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-900 text-[15px] leading-snug">
                {n.posto}
              </p>
              <p className="text-slate-500 text-[13px] mt-0.5">
                Localização – {n.localizacao}
              </p>
              <p className="font-bold text-slate-800 text-[13px] mt-1.5">
                {n.mensagem}
              </p>
            </div>

            {/* Botão verificar (apenas em algumas notificações) */}
            {n.verificar && (
              <button
                className="shrink-0 bg-red-500 hover:bg-red-600 active:scale-95
                           text-white text-[13px] font-bold px-6 py-2.5 rounded-full
                           shadow-md shadow-red-500/30 transition-all duration-150
                           hover:shadow-red-500/40 hover:-translate-y-0.5"
              >
                Verificar
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-[#0d1b3e] h-11 flex items-center justify-center mt-auto">
        <p className="text-white/40 text-[11px] font-semibold tracking-widest uppercase">
          © 2026 LocaTech – Informação Certa Combustível e Gás Sem Stress
        </p>
      </footer>

    </div>
  );
}