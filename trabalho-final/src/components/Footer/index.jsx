import "../Footer/style.css";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const index = () => {
  return (
    <footer>
      <p>Serragram</p>
      <p>Alguns direitos reservados.</p>
      <div>
        <ul className="lista-emoji">
          <li>
            <FaInstagram />
          </li>
          <li>
            <CiTwitter />
          </li>
          <li>
            <CiLinkedin />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default index;
