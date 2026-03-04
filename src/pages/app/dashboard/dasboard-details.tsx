// ─────────────────────────────────────────────────────────────────────────────
// Mock data — substituir por dados reais da API
// ─────────────────────────────────────────────────────────────────────────────

const ambiente = {
  temperatura: 35,
  humidade: 80,
  vazamentoGas: "None",
  vazamentoFogo: "Activo",
};

const stockSensores = [
  { id: 1, label: "Stock Laranja 6kg",  temperatura: 35, humidade: 80, vazamentoGas: "None", vazamentoFogo: "Activo" },
  { id: 2, label: "Stock Laranja 13kg", temperatura: 35, humidade: 80, vazamentoGas: "None", vazamentoFogo: "Activo" },
  { id: 3, label: "Stock Laranja 51kg", temperatura: 35, humidade: 80, vazamentoGas: "None", vazamentoFogo: "Activo" },
];

const stockUnidades = [
  { id: 1, label: "Stock Laranja 6kg",  unidades: 250, nivel: "alto"   }, // verde
  { id: 2, label: "Stock Laranja 13kg", unidades: 100, nivel: "medio"  }, // laranja
  { id: 3, label: "Stock Laranja 51kg", unidades: 30,  nivel: "baixo"  }, // vermelho
];

// ─────────────────────────────────────────────────────────────────────────────
// Icons
// ─────────────────────────────────────────────────────────────────────────────

function ITherm({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  );
}

function IHumidity({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6 9 4 13.5 4 16a8 8 0 0 0 16 0c0-2.5-2-7-8-14z" />
    </svg>
  );
}

function IGas({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="17" rx="7" ry="4" />
      <path d="M5 17V7l7-4 7 4v10" />
      <path d="M12 13V3" />
    </svg>
  );
}

function IFire({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.38 0 2.5-1.12 2.5-2.5 0-1.5-1.5-3-2.5-4.5C9 11.5 8.5 13 8.5 14.5z" />
      <path d="M12 22c4.42 0 8-3.58 8-8 0-3.5-2.5-6.5-5-9-1 2-2 3.5-3 4.5C10 8 8 5.5 7 3c-2.5 2.5-5 5.5-5 11 0 4.42 3.58 8 8 8z" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function StatusValue({ value }: { value: string }) {
  const isNone   = value === "None";
  const isActivo = value === "Activo";
  const color = isNone ? "text-green-500" : isActivo ? "text-red-500" : "text-amber-500";
  return <span className={`font-bold ${color}`}>{value}</span>;
}

function ValueColored({ value, unit }: { value: number; unit: string }) {
  return <span className="font-bold text-amber-500">{value}{unit}</span>;
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function SensorRow({
  icon: Icon,
  label,
  value,
  unit,
  isStatus = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  unit?: string;
  isStatus?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 text-[13.5px] font-semibold text-slate-700">
      <Icon className="w-4 h-4 shrink-0 text-slate-500" />
      <span>{label}:&nbsp;</span>
      {isStatus
        ? <StatusValue value={value as string} />
        : <ValueColored value={value as number} unit={unit ?? ""} />
      }
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function DefinicoesDashPage() {
  return (
    <div className="min-h-full bg-[#edf0f4] flex flex-col">

      {/* ── Main content ── */}
      <div className="flex-1 px-8 py-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col gap-7">

          {/* ── Ambiente Local ── */}
          <div className="bg-[#dde1e7] rounded-2xl px-10 py-7">
            <h2 className="text-center font-black text-2xl text-slate-900 mb-6 tracking-tight">
              Ambiente Local
            </h2>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3 max-w-2xl mx-auto">
              <SensorRow icon={ITherm}    label="Temperatura"    value={ambiente.temperatura} unit="ºC" />
              <SensorRow icon={IGas}      label="Vazamento de gás"  value={ambiente.vazamentoGas}  isStatus />
              <SensorRow icon={IHumidity} label="Humidade"       value={ambiente.humidade}    unit="%" />
              <SensorRow icon={IFire}     label="Vazamento de fogo" value={ambiente.vazamentoFogo} isStatus />
            </div>
          </div>

          {/* ── Stock Sensores ── */}
          <div className="grid grid-cols-3 gap-5">
            {stockSensores.map((s) => (
              <div key={s.id} className="bg-[#dde1e7] rounded-2xl px-6 py-5">
                <h3 className="font-black text-center text-[17px] text-slate-900 mb-4 tracking-tight">
                  {s.label}
                </h3>
                <div className="flex flex-col gap-2">
                  <SensorRow icon={ITherm}    label="Temperatura"       value={s.temperatura} unit="ºC" />
                  <SensorRow icon={IHumidity} label="Humidade"          value={s.humidade}    unit="%" />
                  <SensorRow icon={IGas}      label="Vazamento de gás"  value={s.vazamentoGas}  isStatus />
                  <SensorRow icon={IFire}     label="Vazamento de fogo" value={s.vazamentoFogo} isStatus />
                </div>
              </div>
            ))}
          </div>

          {/* ── Stock Unidades ── */}
          <div className="grid grid-cols-3 gap-5">
            {stockUnidades.map((s) => {
              const btnColor =
                s.nivel === "alto"  ? "bg-green-500  hover:bg-green-600  shadow-green-500/30"  :
                s.nivel === "medio" ? "bg-amber-500  hover:bg-amber-600  shadow-amber-500/30"  :
                                      "bg-red-500    hover:bg-red-600    shadow-red-500/30";
              return (
                <div key={s.id}
                     className="bg-[#dde1e7] rounded-2xl px-6 py-6 flex flex-col items-center justify-center gap-5">
                  <h3 className="font-black text-center text-[18px] text-slate-900 tracking-tight leading-tight">
                    {s.label}
                  </h3>
                  <button
                    className={`${btnColor} text-white text-[13px] font-bold
                                px-7 py-2.5 rounded-full shadow-md
                                transition-all duration-150 hover:-translate-y-0.5 active:scale-95`}
                  >
                    {s.unidades} unidades
                  </button>
                </div>
              );
            })}
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