import ProfileName from "../base/ProfileName";
import { Link } from "react-router-dom";

const Recommend = () =>{
      return(
            <>
                  <div className="changeId">
                        <Link to="/profile">
                              <ProfileName />
                        </Link>
                        <button className="changeBtn">전환</button>
                  </div>
                  <div className="recommendTitle">
                        <h4>회원님을 위한 추천</h4>
                        <Link to="">
                              <p>모두 보기</p>
                        </Link>
                  </div>
                  <div className="recommendBox">
                        <div className="changeId">
                              <ProfileName />
                              <button className="changeBtn">팔로우</button>
                        </div>
                        <div className="changeId">
                              <ProfileName />
                              <button className="changeBtn">팔로우</button>
                        </div>
                        <div className="changeId">
                              <ProfileName />
                              <button className="changeBtn">팔로우</button>
                        </div>
                        <div className="changeId">
                              <ProfileName />
                              <button className="changeBtn">팔로우</button>
                        </div>
                        <div className="changeId">
                              <ProfileName />
                              <button className="changeBtn">팔로우</button>
                        </div>
                  </div>
            </>
      )
}

export default Recommend;