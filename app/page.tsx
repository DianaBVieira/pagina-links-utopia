import {
  ArrowUpRight,
  Download,
  Globe2,
  Landmark,
  Sparkles,
} from "lucide-react";

const solutions = [
  {
    name: "FinançasPro",
    description: "Planeje o ano, organize despesas e acompanhe cartões em um só lugar.",
    href: "https://financaspro.web.app/",
    action: "Conhecer o FinançasPro",
    image: "/financaspro-logo.png",
    icon: Landmark,
    tone: "finance",
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
            return (
              <a
                key={solution.name}
                className={`solution-card ${solution.tone}`}
                href={solution.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="solution-art">
                  <span className="solution-glow" />
                  <img src={solution.image} alt="" />
                </div>
                <div className="solution-copy">
                  <h3>{solution.name}</h3>
                  <p>{solution.description}</p>
                  <span className="solution-action">
                    <Icon size={16} /> {solution.action}
                  </span>
                </div>
                <span className="arrow"><ArrowUpRight size={20} /></span>
              </a>
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
