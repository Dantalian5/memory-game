import "@styles/components/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__info">
        Gamemory is a free game.
        <br /> Enjoy it!
      </p>
      <p className="footer__info">
        Made with <span>❤️</span> by <a href="https://valenzuela.dev">MV</a>
      </p>
      <a href="https://github.com/Dantalian5/memory-game">View on GitHub</a>
    </footer>
  );
}
export default Footer;
