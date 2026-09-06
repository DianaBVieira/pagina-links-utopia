import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  CalendarClock,
  Clock3,
  Download,
  Dumbbell,
  Flower2,
  Globe2,
  Headphones,
  Landmark,
  Sparkles,
} from "lucide-react";

type Solution = {
  name: string;
  description: string;
  action: string;
  icon: LucideIcon;
  tone: string;
  href?: string;
  image?: string;
  wide?: boolean;
  soon?: boolean;
};

const solutions: Solution[] = [
  {
    name: "FinançasPro",
    description: "Planeje o ano, organize despesas e acompanhe cartões em um só lugar.",
    href: "https://financaspro.web.app/",
    action: "Conhecer o FinançasPro",
    image: "/financaspro-logo.png",
    icon: Landmark,
    tone: "finance",
    wide: true,
  },
  {
    name: "VemPraPista",
    description: "Encontre corridas, organize inscrições e acompanhe sua jornada nas pistas.",
    href: "https://www.vemprapista.app.br/",
    action: "Acessar o site",
    image: "/vemprapista-icon.png",
    icon: Globe2,
    tone: "run",
  },
  {
    name: "Pulso Utopia",
    description: "Sua rotina, agenda, documentos e cuidados organizados no seu ritmo.",
    href: "https://pulso-utopia-desenvolvimento.web.app/",
    action: "Acessar o aplicativo",
    image: "/pulso-utopia-logo.png",
    icon: Download,
    tone: "pulse",
  },
  {
    name: "AudioFy",
    description: "Histórias em áudio para ouvir quando e onde você quiser.",
    href: "https://contosaudiofy.com.br",
    action: "Ouvir agora",
    icon: Headphones,
    tone: "audio",
  },
  {
    name: "DentalFlow",
    description: "Agendamento de consultas odontológicas direto pelo WhatsApp.",
    href: "https://dentalflow.utopiadesenvolvimentos.com.br",
    action: "Em breve",
    image: "/dentalflow-logo.png",
    icon: CalendarClock,
    tone: "dental",
    soon: true,
  },
  {
    name: "Memorial Eterno",
    description: "Um memorial digital de homenagem, acessível por QR Code na placa física.",
    href: "https://vendasmemorialeterno.utopiadesenvolvimentos.com.br",
    action: "Em breve",
    icon: Flower2,
    tone: "memorial",
    soon: true,
  },
  {
    name: "Gestão para Academias",
    description: "Matrículas, mensalidades, treinos e frequência dos alunos em um só painel.",
    href: "https://dianabvieira.github.io/Site_Academia_Modelo01/",
    action: "Ver demonstração",
    icon: Dumbbell,
    tone: "gym",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-light" />

      <section className="link-hub" aria-labelledby="page-title">
        <header className="brand-intro">
          <div className="brand-mark-wrap">
            <div className="brand-orbit" />
            <img className="brand-mark" src="/utopia-logo.png" alt="Utopia Desenvolvimentos" />
          </div>

          <div className="online-pill">
            <span /> Soluções digitais Utopia
          </div>

          <h1 id="page-title">Tecnologia para deixar o seu dia mais simples.</h1>
          <p>
            Conheça nossas soluções prontas para você — produtos digitais criados para
            organizar rotinas, facilitar escolhas e transformar ideias em resultados.
          </p>

          <a
            className="primary-link"
            href="https://utopiadesenvolvimentos.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="primary-icon"><Globe2 size={22} /></span>
            <span>
              <small>VISITE NOSSO SITE</small>
              Utopia Desenvolvimentos
            </span>
            <ArrowUpRight size={23} />
          </a>
        </header>

        <div className="section-heading">
          <span><Sparkles size={16} /> ECOSSISTEMA UTOPIA</span>
          <h2>Soluções prontas para você</h2>
        </div>

        <div className="solutions-list">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            const className = [
              "solution-card",
              solution.tone,
              solution.wide ? "wide" : "",
              solution.soon ? "is-soon" : "",
            ]
              .filter(Boolean)
              .join(" ");

            const content = (
              <>
                <div className="solution-art">
                  <span className="solution-glow" />
                  {solution.image ? (
                    <img src={solution.image} alt="" />
                  ) : (
                    <span className="solution-icon">
                      <Icon size={34} strokeWidth={1.6} />
                    </span>
                  )}
                </div>
                <div className="solution-copy">
                  <h3>{solution.name}</h3>
                  <p>{solution.description}</p>
                  <span className="solution-action">
                    <Icon size={16} /> {solution.action}
                  </span>
                </div>
                <span className="arrow">
                  {solution.soon ? <Clock3 size={17} /> : <ArrowUpRight size={20} />}
                </span>
              </>
            );

            return solution.href && !solution.soon ? (
              <a
                key={solution.name}
                className={className}
                href={solution.href}
                target="_blank"
                rel="noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={solution.name} className={className} aria-disabled="true">
                {content}
              </div>
            );
          })}
        </div>

        <footer>
          <p>Novas soluções estão a caminho.</p>
          <a href="https://instagram.com/utopiadesenvolvimentos" target="_blank" rel="noreferrer">
            <span className="instagram-glyph" aria-hidden="true">◎</span> @utopiadesenvolvimentos
          </a>
          <span>© 2026 Utopia Desenvolvimentos</span>
        </footer>
      </section>
    </main>
  );
}
