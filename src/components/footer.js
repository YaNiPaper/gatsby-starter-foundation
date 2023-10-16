/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        Un blog soportado en Gatsby-GitHub-Netlify y gestionado por Hector Pina con{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <Link to="/">https://yanipaper.netlify.app/</Link>
      </p>
    </div>
  </footer>
)

export default Footer
