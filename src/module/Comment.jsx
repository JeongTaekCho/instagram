import Close from "../components/base/Close";
import ProfileName from "../components/base/ProfileName";
import Button from "../components/base/Button";
import Like from "../components/base/svg/Like";
import Comt from "../components/base/svg/Comt";
import Msg from "../components/base/svg/Msg";
import Save from "../components/base/svg/Save";
import CommentWrite from "./CommentWrite";
import { useState } from "react";
import { useEffect } from "react";

const Comment = ({onAddFeed, commentOff, profile, selectedFeed}) => {

      const [content, setContent] = useState('');

      const onHandleContent = (e) =>{
            const {value} = e.target;
            setContent(value);
      }

      // useEffect(() => {
      //       console.log('content >', content);
      // },[content]);

      // lifecycle(생명주기)

      // 1. 렌더링(mount) > 2.상태변화 감지 > 3. 해제


      return(
            <div className="backContainer" onClick={commentOff}>
                  <div className="commentContent" onClick={(e) => e.stopPropagation()}>
                        <div className="feedImageBox">

                        </div>
                        <div className="feedCommentContent">
                              <div className="feedAdminBox">
                                    <div className="feedAdmin">
                                          <ProfileName profile={profile[0]}/>
                                          <span></span>
                                          <button>팔로잉</button>
                                    </div>
                                    <Button />
                              </div>
                              <div className="feedMainContent">
                                    <ProfileName profile={profile[0]}/>
                                    <span>#게시글 내용이 들어갑니다. 게시글 내용이 들어갑니다. 게시글 내용이 들어갑니다. 게시글 내용이 들어갑니다. 게시글 내용이 들어갑니다.</span>
                              </div>
                              <div className="feedInfoContent">
                                    <div className="feedIconList">
                                          <div className="feedIconLeft">
                                                <button className="feedIcon"><Like /></button>
                                                <button className="feedIcon"><Comt /></button>
                                                <button className="feedIcon"><Msg /></button>
                                          </div>
                                          <div className="feedIconRight">
                                                <button className="feedIcon"><Save /></button>
                                          </div>
                                    </div>
                                    <div className="feedLikeNum">
                                          <p>좋아요 : <span>18</span>개</p>
                                    </div>
                                    <div className="feedDate">
                                          <p>17시간 전</p>
                                    </div>
                                    <CommentWrite />
                                    {/* <textarea name="" id="" cols="30" rows="10" onChange={onHandleContent} value={selectedFeed.content}></textarea>
                                    <button type="button" onClick={() => onAddFeed(content)}>ADD</button> */}
                              </div>
                        </div>
                  </div>
                  <Close commentOff={commentOff}/>
            </div>
      )
}

export default Comment;