import { useState } from "react";
import { Link } from "react-router-dom";

// ── Data ──────────────────────────────────────────────────────────────────────
const stations = [
  {
    id: 1,
    name: "Posto Sonangol",
    open: true,
    address: "Via Avenida Deolinda Rodrigues / Luanda / Angola",
    rating: 3.5,
    reviews: 113,
    tipo: "Gas station",
    horario: "Open 24 hours",
    dist: "0.8 km",
    produtos: ["Gasolina", "Gasoleo"],
    precos: [{ produto: "Gasolina", valor: 300 }, { produto: "Gasoleo", valor: 200 }],
    tanques: [
      { nome: "Tanque 1", volume: 250, nivel: "alto" },
      { nome: "Tanque 2", volume: 150, nivel: "medio" },
      { nome: "Tanque 3", volume: 20, nivel: "baixo" },
    ],
  },
  {
    id: 2,
    name: "Total Energies EPSi",
    open: true,
    address: "Cacuaco / Luanda / Angola",
    rating: 4.2,
    reviews: 87,
    tipo: "Gas station",
    horario: "06h – 22h",
    dist: "2.1 km",
    produtos: ["Gasolina", "Gasoleo", "Gás Butano"],
    precos: [{ produto: "Gasolina", valor: 310 }, { produto: "Gasoleo", valor: 210 }],
    tanques: [
      { nome: "Tanque 1", volume: 400, nivel: "alto" },
      { nome: "Tanque 2", volume: 90, nivel: "medio" },
    ],
  },
  {
    id: 3,
    name: "Sonangol Gas Station",
    open: false,
    address: "Rocha Pinto / Luanda / Angola",
    rating: 3.8,
    reviews: 54,
    tipo: "Gas station",
    horario: "07h – 21h",
    dist: "3.4 km",
    produtos: ["Gasolina", "Gasoleo"],
    precos: [{ produto: "Gasolina", valor: 295 }, { produto: "Gasoleo", valor: 195 }],
    tanques: [
      { nome: "Tanque 1", volume: 180, nivel: "alto" },
      { nome: "Tanque 2", volume: 60, nivel: "baixo" },
    ],
  },
];

const navLinks = ["Início", "Sobre", "Como Funciona", "Contactos"];

const sidebarItems = [
  { id: "perfil", label: "Perfil", Icon: IUser },
  { id: "dashboard", label: "Dashboard", Icon: IGrid },
  { id: "notificacoes", label: "Notificações", Icon: IBell },
  { id: "salvos", label: "Salvos", Icon: ISave },
  { id: "definicoes", label: "Definições", Icon: ISettings },
];

// ── Icons ─────────────────────────────────────────────────────────────────────
function IUser({ className = "w-5 h-5" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>;
}
function IGrid({ className = "w-5 h-5" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>;
}
function IBell({ className = "w-5 h-5" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>;
}
function ISave({ className = "w-5 h-5" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>;
}
function ISettings({ className = "w-5 h-5" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
}
function IFuel({ className = "w-5 h-5" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="15" y2="22"/><line x1="4" y1="9" x2="14" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/></svg>;
}
function INavigate({ className = "w-4 h-4" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>;
}
function IChevron({ className = "w-3.5 h-3.5" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
}
function ICheck({ className = "w-4 h-4" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
}
function IPin({ className = "w-3.5 h-3.5" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}
function IClock({ className = "w-3.5 h-3.5" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}
function IBookmark({ className = "w-4 h-4", filled = false }) {
  return <svg className={className} viewBox="0 0 24 24" fill={filled ? "#f59e0b" : "none"} stroke={filled ? "#f59e0b" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>;
}
function IBarChart({ className = "w-5 h-5" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;
}
function IBag({ className = "w-5 h-5" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;
}
function IMoney({ className = "w-5 h-5" }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>;
}

// ── Logo ──────────────────────────────────────────────────────────────────────
function LocaLogo({ size = 42 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="38" fill="#0d1b3e" stroke="#f59e0b" strokeWidth="3"/>
      <circle cx="40" cy="40" r="14" fill="none" stroke="#ef4444" strokeWidth="3"/>
      <circle cx="40" cy="40" r="5" fill="#ef4444"/>
      <line x1="40" y1="18" x2="40" y2="26" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="62" y1="40" x2="54" y2="40" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="40" y1="62" x2="40" y2="54" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="18" y1="40" x2="26" y2="40" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="30" y="44" width="20" height="16" rx="3" fill="#f59e0b"/>
      <rect x="34" y="40" width="12" height="6" rx="2" fill="#fbbf24"/>
      <circle cx="35" cy="62" r="3" fill="#0d1b3e"/>
      <circle cx="45" cy="62" r="3" fill="#0d1b3e"/>
    </svg>
  );
}

// ── Stars ─────────────────────────────────────────────────────────────────────
function Stars({ rating, size = 13 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const full = i <= Math.floor(rating);
        const half = !full && i - 0.5 <= rating;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24">
            <defs>
              {half && (
                <linearGradient id={`g${i}`}>
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#d1d5db" />
                </linearGradient>
              )}
            </defs>
            <polygon
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              fill={full ? "#f59e0b" : half ? `url(#g${i})` : "#d1d5db"}
              stroke="none"
            />
          </svg>
        );
      })}
    </div>
  );
}

// ── Tank Row ─────────────────────────────────────────────────────────────────
function TankRow({ tanque }) {
  const cfg = {
    alto:  { bar: "bg-green-500",  w: "w-full", text: "text-green-500"  },
    medio: { bar: "bg-orange-400", w: "w-1/2",  text: "text-orange-400" },
    baixo: { bar: "bg-red-500",    w: "w-1/5",  text: "text-red-500"    },
  }[tanque.nivel];

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-medium text-slate-500 w-16 shrink-0">{tanque.nome}</span>
      <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-500 ${cfg.bar} ${cfg.w}`} />
      </div>
      <span className={`text-xs font-bold w-12 text-right ${cfg.text}`}>{tanque.volume}L</span>
    </div>
  );
}

// ── Map Popup ─────────────────────────────────────────────────────────────────
function MapPopup({ station }) {
  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10
                    bg-white rounded-2xl px-4 py-3 min-w-[240px]
                    shadow-2xl border border-slate-100">
      <p className="font-bold text-slate-900 text-sm">{station.name}</p>
      <div className="flex items-center gap-1.5 mt-1.5">
        <span className="text-amber-500 font-bold text-sm">{station.rating}</span>
        <Stars rating={station.rating} />
        <span className="text-slate-400 text-xs">({station.reviews})</span>
      </div>
      <p className="text-xs text-slate-500 mt-0.5">{station.tipo}</p>
      <p className="text-xs text-green-600 font-semibold mt-0.5">{station.horario}</p>
      <div className="flex gap-2 mt-3">
        <button className="flex items-center gap-1.5 bg-[#0d1b3e] hover:bg-[#162251]
                           text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-colors">
          <INavigate className="w-3 h-3" /> Ir
        </button>
        <button className="flex items-center justify-center border border-slate-200 text-slate-500
                           px-3 py-1.5 rounded-full hover:bg-slate-50 transition-colors">
          <IBookmark className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

// ── Card Header ───────────────────────────────────────────────────────────────
function CardHeader({ Icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-slate-300/70 flex items-center justify-center text-slate-600 shrink-0">
        <Icon />
      </div>
      <span className="font-bold text-slate-900 text-[15px]">{title}</span>
    </div>
  );
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
export default function LocaTechDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [activePage, setActivePage] = useState("início");
  const [selected, setSelected] = useState(stations[0]);
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#edf0f4] font-sans">
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto flex flex-col">
          <div className="relative h-[370px] shrink-0">
            <iframe
              title="mapa"
              className="w-full h-full border-0 block"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31572.58!2d13.2543!3d-8.8368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt!2sao!4v1"
            />
            <MapPopup station={selected} />
          </div>
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="bg-[#e4e7ec] rounded-2xl p-5 shadow-sm
                            hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-300/70 flex items-center
                                  justify-center text-slate-600 shrink-0 mt-0.5">
                    <IFuel />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[15px] text-slate-900 truncate">{selected.name}</span>
                      <span className={`w-2 h-2 rounded-full shrink-0 ${selected.open ? "bg-green-500" : "bg-red-500"}`} />
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-snug">
                      Localização – {selected.address}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1.5 text-slate-400 text-[11px]">
                      <IClock className="w-3 h-3" />{selected.horario}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <button
                    onClick={() => setSaved(!saved)}
                    className={`p-1.5 rounded-lg transition-colors hover:bg-slate-200
                                ${saved ? "text-amber-400" : "text-slate-400"}`}
                  >
                    <IBookmark filled={saved} />
                  </button>
                  <button className="flex items-center gap-1.5 bg-red-500 hover:bg-red-600
                                     text-white text-[13px] font-bold px-5 py-2 rounded-full
                                     shadow-md shadow-red-500/30 transition-all
                                     hover:-translate-y-0.5 hover:shadow-red-500/40">
                    <INavigate /> Iniciar
                  </button>
                </div>
              </div>

              <div className="h-px bg-slate-300/60 my-4" />

              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                  Postos próximos
                </p>
                <div className="flex flex-col gap-1.5">
                  {stations.map((s) => (
               <Link to={`/detail/${s.id}`} className="w-full"> 
  <button
    key={s.id}
    onClick={() => setSelected(s)}
    className={`flex items-center justify-between px-3 py-2 rounded-xl text-[13px]
                font-semibold text-left transition-all w-full cursor-pointer border-none
                ${selected.id === s.id
                  ? "bg-[#0d1b3e] text-white"
                  : "bg-slate-200/60 text-slate-700 hover:bg-slate-300/60"}`}
  >
    <div className="flex flex-col">
      <span>{s.name}</span>
      <span className="text-[10px] font-normal opacity-60">{s.dist}</span>
    </div>
    <div className="flex items-center gap-1.5">
      <span className={`w-1.5 h-1.5 rounded-full ${s.open ? "bg-green-400" : "bg-red-400"}`} />
      <IChevron />
    </div>
  </button>
</Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 – Preço */}
            <div className="bg-[#e4e7ec] rounded-2xl p-5 shadow-sm
                            hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <CardHeader Icon={IMoney} title="Preço" />
              <div className="flex flex-col gap-2.5">
                {selected.precos.map((p) => (
                  <div key={p.produto}
                       className="flex items-center justify-between bg-white/60 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <IFuel className="w-4 h-4 text-slate-500" />
                      <span className="text-[13px] font-semibold text-slate-700">{p.produto}</span>
                    </div>
                    <span className="bg-[#0d1b3e]/10 text-[#0d1b3e] font-bold text-[13px]
                                     px-3 py-1 rounded-lg">
                      {p.valor} Kz
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-px bg-slate-300/60 my-4" />
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                <IPin />
                <span className="truncate">{selected.address}</span>
              </div>
            </div>

            {/* Card 3 – Produtos */}
            <div className="bg-[#e4e7ec] rounded-2xl p-5 shadow-sm
                            hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <CardHeader Icon={IBag} title="Produtos" />
              <div className="flex flex-col gap-2">
                {selected.produtos.map((prod) => (
                  <div key={prod}
                       className="flex items-center gap-3 bg-white/60 rounded-xl px-4 py-2.5">
                    <ICheck className="text-slate-500" />
                    <span className="text-[13px] font-semibold text-slate-700">{prod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 4 – Quantidade */}
            <div className="bg-[#e4e7ec] rounded-2xl p-5 shadow-sm
                            hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <CardHeader Icon={IBarChart} title="Quantidade" />
              <div className="flex flex-col gap-3">
                {selected.tanques.map((t) => <TankRow key={t.nome} tanque={t} />)}
              </div>
              <div className="h-px bg-slate-300/60 my-4" />
              <div className="flex items-center gap-5 text-xs text-slate-500">
                {[["bg-green-500","Alto"],["bg-orange-400","Médio"],["bg-red-500","Baixo"]].map(([c,l]) => (
                  <div key={l} className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${c}`} />{l}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0d1b3e] h-11 flex items-center justify-center shrink-0">
        <p className="text-white/40 text-[11px] font-semibold tracking-widest uppercase">
          © 2026 LocaTech – Informação Certa Combustível e Gás Sem Stress
        </p>
      </footer>
    </div>
  );
}