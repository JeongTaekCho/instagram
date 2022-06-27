import ProfileName from "../base/ProfileName";
import { Link } from "react-router-dom";

const Recommend = () =>{
      const subAccouts = [
            {
                  id: 0,
                  username : "my",
                  profileImage: "" 
            },
      ];
      const friends = [
            {
                  id: 0,
                  username : "people1",
                  profileImage: "" 
            },
            {
                  id: 1,
                  username : "people2",
                  profileImage: "" 
            },
            {
                  id: 2,
                  username : "people3",
                  profileImage: "" 
            }
      ]; 
      return(
            <aside>
                  <div className="changeId">
                        <Link to="/profile">
                              {subAccouts.map((account) => {
                                    return  <ProfileName profile={account} key={account.id}/>
                              })}
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
                        {friends.map((friend) => {
                              return (
                              <div className="changeId" key={friend.id}>
                                    <ProfileName profile={friend} />
                                    <button className="changeBtn">팔로우</button>
                              </div>
                              )
                        })}
                        
                  </div>
            </aside>
      )
}

export default Recommend;