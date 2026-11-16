export default function App() {
  return (
    <main className="shell" data-github-sync="test">
      <header className="topbar">
        <a className="wordmark" href="/" aria-label="Sinth Health início">sinth<span>.</span></a>
        <span className="topbar-label">HEALTH / PLATAFORMA</span>
      </header>

      <section className="hero">
        <p className="eyebrow">TECNOLOGIA COM PROPÓSITO</p>
        <h1>Saúde conectada.<br /><em>Cuidado com sentido.</em></h1>
        <p className="intro">
          A Sinth Health é um ecossistema em desenvolvimento para aproximar
          pessoas, profissionais e tecnologia em saúde.
        </p>
        <div className="status"><span /> Projeto em desenvolvimento</div>
      </section>

      <footer>© {new Date().getFullYear()} SINTH HEALTH</footer>
    </main>
  );
}
