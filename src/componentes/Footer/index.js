import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">

      <div className="social-links">
        <a href="https://www.facebook.com/">
          <img src="/imagens/fb.png" alt="link do facebook " />
        </a>
        <a href="https://www.instagram.com/">
          <img src="/imagens/ig.png" alt="link do instagram" />
        </a>
        <a href="https://twitter.com/home">
          <img src="/imagens/tw.png" alt="link do twitter" />
        </a>
      </div>

      <div className="logo-footer">
        <a href="/">
          <img src="/imagens/logo.png" alt="logo do footer" />
        </a>
        
      </div>
      <div className="text-footer">
        <p>Desenvolvido por Victor Henrique</p>
      </div>
    </footer>
  );
}

export default Footer