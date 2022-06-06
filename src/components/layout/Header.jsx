import Search from "../base/Search";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";

const Header = () => {
      return (
      <>
            <div className="headerContainer">
                  <header className="header">
                        <div className="logoBox">
                              <Link to="/">
                                    <img src={"/images/common/logo.png"} />
                              </Link>
                        </div>
                        <Search />
                        <SubMenu />
                  </header>
            </div>
      </>
      )
}

export default Header;