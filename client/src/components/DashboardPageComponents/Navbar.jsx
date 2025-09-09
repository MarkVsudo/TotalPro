import NavLogoImg from "../../assets/nav-logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex w-full p-6 items-center justify-center">
      <Link to="/">
        <span className="sr-only">TotalPro</span>
        <img alt="Nav logo" src={NavLogoImg} className="h-10 w-auto" />
      </Link>
    </div>
  );
};

export default Navbar;
