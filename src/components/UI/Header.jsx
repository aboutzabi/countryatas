import { NavLink } from "react-router-dom";
import NavLinks from './NavLinks';
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
            <div>
                <div className="logo">
                    <NavLink to={"/"}><h1>CountryAtlas</h1></NavLink>
                </div>
                <NavLinks />
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;
