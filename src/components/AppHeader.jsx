import "../styles/app-header.css"

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="app-header__logo-container">
        <h1 className="app-header__logo">
          <span className="app-header__logo--borded">R-API</span>
          <span className="app-header__logo--bottom">DOLAR</span>
        </h1>
      </div>
      {/* <nav>menu</nav> */}
    </header>
  );
};

export default AppHeader;
