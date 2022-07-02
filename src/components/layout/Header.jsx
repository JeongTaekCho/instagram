import Search from "../base/Search";
import SubMenu from "../../module/SubMenu";
import { Link } from "react-router-dom";

const Header = ({onAddFeedModal, onFeedWriteModal}) => {

      //비구조화할당(구조분해할당)
      //객체 내부의 데이터(키)를 접근과 동시에 변수화 할 수 있음.

      // const {test1, test2} = props;

      
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
                        <SubMenu onAddFeedModal={onAddFeedModal} onFeedWriteModal={onFeedWriteModal}/>
                  </header>
            </div>
      </>
      )
}

export default Header;