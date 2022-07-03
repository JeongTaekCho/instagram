import ProfileName from "../base/ProfileName";
import Button from "../base/Button";
import CommentWrite from "../../module/CommentWrite";
import Like from "../base/svg/Like";
import NoLike from "../base/svg/NoLike";
import Comt from "../base/svg/Comt";
import Msg from "../base/svg/Msg";
import { useState } from "react";



const Feed = ({onToggleFeedModal, feedList, onUpdateFeed, onDeleteFeed, onToggleFeedUtilModal, onToggleCommentModal, findSelectedFeed}) => {



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
     

      const getIsLikedUsername = () => {
            const randomIndex = Math.floor(Math.random() * (friends.length - 0) + 0)
            return friends[randomIndex].username;
      }//친구 이름 랜덤 값


      return(
            <>
                  {feedList.map((feed) => {
                        return(
                              <div className="feedBox" key={feed.id}>
                              <div className="feedHead">
                                    <ProfileName profile={feed.user}/>
                                    {/* <Button onClickButton = {() => onUpdateFeed(feed.id)}/> */}
                                    <Button onToogleUtilModal={() => findSelectedFeed(feed.id)}/>
                              </div>   
                              <div className="feedBody">
                                    <img src={"/images/sub/feedBody.jpeg"} />
                              </div>
                              <div className="feedFoot">
                                    <div className="feedBtn">
                                          <div>
                                                <button>
                                                      {
                                                            feed.isLiked === false ? <NoLike /> :  <Like />
                                                      }
                                                </button>
                                                <button onClick={onToggleCommentModal}>
                                                     <Comt />
                                                </button>
                                                <button>
                                                     <Msg />
                                                </button>
                                          </div>
                                          <button>
                                                <svg aria-label="저장" className="_ab6-" color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                                          </button>
                                    </div>
                                    <div className="feedLike">
                                          {!!feed.like && <p><span>{getIsLikedUsername()}</span>님 외 <span>{feed.like}</span>명이 좋아합니다.</p>}
                                    </div>
                                    <div className="feedCon">
                                          <p><span>{feed.user.username}</span> {feed.content}</p>
                                    </div>
                                    <div className="feedCommentMore">
                                          {!!feed.comments.length && <p>댓글 <span>{feed.comments.length}</span>개 보기</p>}
                                    </div>
                                    <div className="feedTime">
                                          <p><span>5</span>시간 전</p>
                                    </div>
                                    <CommentWrite />
                              </div>
                        </div> 
                        )
                  })}
            </>
      )
}

export default Feed;