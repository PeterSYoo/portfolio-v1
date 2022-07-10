import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <section className="header-logo">
        <Link to="/">
          <img src="https://i.imgur.com/2NOaXQD.png" alt="logo" />
        </Link>
      </section>
      <section className="header-icons">
        <section className="header-icons--github">
          <a href="https://github.com/PeterSYoo" target="_blank"><img src="https://i.imgur.com/wBDZDho.png" alt="github" /></a>
        </section>
        <section className="header-icons--linkedin">
          <a href="https://www.linkedin.com/in/petersyoo/" target="_blank"><img src="https://i.imgur.com/e2CyB9f.png" alt="linkedin" /></a>
        </section>
      </section>
    </div>
  )
}

export default Header