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


const comments = [
      {
            userProfile : null,
            userName : "땅오",
            comment : "존맛탱",
            isLike : false,
            likeNum : 0,
            atCreate : "10시간 전",
            reComment : [
                  {
                        userProfile : null,
                        userName : "땅오",
                        comment : "댓글이 달렸습니다.",
                        isLike : false,
                        likeNum : 0,
                        atCreate : "10시간 전",
                  }
            ]
      },
      {
            userProfile : null,
            userName : "땅오2",
            comment : "댓글이 달렸습니다.",
            isLike : false,
            likeNum : 0,
            atCreate : "8시간 전",
            reComment : [
                  {
                        userProfile : null,
                        userName : "땅오",
                        comment : "댓글이 달렸습니다.",
                        isLike : false,
                        likeNum : 0,
                        atCreate : "10시간 전",
                  }
            ]
      },
      {
            userProfile : null,
            userName : "땅오3",
            comment : "카페미뇽 손님 되게 많음.",
            isLike : false,
            likeNum : 0,
            atCreate : "6시간 전",
            reComment : [
                  {
                        userProfile : null,
                        userName : "땅오",
                        comment : "댓글이 달렸습니다.",
                        isLike : false,
                        likeNum : 0,
                        atCreate : "10시간 전",
                  }
            ]
      }
];

const initialComment = 
      {
            userProfile : null,
            userName : "댓글테스트",
            comment : "",
            isLike : false,
            likeNum : 0,
            atCreate : "n시간 전",
            reComment : [
                  {
                        userProfile : null,
                        userName : "땅오",
                        comment : "댓글이 달렸습니다.",
                        isLike : false,
                        likeNum : 0,
                        atCreate : "10시간 전",
                  }
            ]
      }



const Comment = ({onAddFeed, onToggleCommentModal, profile, selectedFeed, onToggleFeedUtilModal}) => {



      const [commentValue, setCommentValue] = useState("");

      const onChangeComment = (e) => {
            const {value} = e.target
            setCommentValue(value);
      };


      const [commentList, setCommentList] = useState(comments)

      const submitComment = (event) => {
            event.preventDefault();
            const newComment = {
                  ...initialComment,
                  comment : commentValue
            }
            const newCommentList = [newComment, ...commentList]
            setCommentList(newCommentList)
            setCommentValue("");
            
      }
      // useEffect(() => {
      //       console.log('content >', content);
      // },[content]);

      // lifecycle(생명주기)

      // 1. 렌더링(mount) > 2.상태변화 감지 > 3. 해제
      useEffect(() => {
            console.log(commentValue)
      },[commentValue])


      return(
            <div className="backContainer" onClick={onToggleCommentModal}>
                  <div className="commentContent" onClick={(e) => e.stopPropagation()}>
                        <div className="feedImageBox">

                        </div>
                        <div className="feedCommentContent">
                              <div className="feedAdminBox">
                                    <div className="feedAdmin">
                                          <div className="profileImg">
                                                <img src="/images/sub/noImg.jpeg" alt="" />
                                          </div>
                                          <div className="adminName">
                                                <p className="profileAdminName">프로필이름 <span className="lineCircle"></span> <button>팔로잉</button></p>
                                                <p className="adminPlace">콰드로파크</p>
                                          </div>
                                    </div>
                                    <Button onToogleUtilModal={onToggleFeedUtilModal}/>
                              </div>
                              <div className="feedMainContent">
                                    <div className="feedWrite">
                                          <div className="feedAdmin">
                                                <div className="profileImg">
                                                      <img src="/images/sub/noImg.jpeg" alt="" />
                                                </div>
                                          </div>
                                          <p className="feedCon"><span>프로필 이름</span>##게시글 내용이 들어갑니다. 게시글 내용이 들어갑니다. 게시글 내용이 들어갑니다. 게시글 내용이 들어갑니다. 게시글 내용이 들어갑니다.
                                          <span className="feedTime">10시간</span>
                                          </p>
                                    </div>
                                    {
                                          commentList.map((comments, index) => {
                                                return <div className="feedWrite feedCommentView" key={index}>
                                                <div className="feedAdmin">
                                                      <div className="profileImg">
                                                            <img src="/images/sub/noImg.jpeg" alt="" />
                                                      </div>
                                                </div>
                                                <div className="feedCon"><span>{comments.userName}</span>{comments.comment}
                                                <div className="feedCommentInfo">
                                                      <span className="feedTime">{comments.atCreate}</span>
                                                      <span className="commentLikeNum">좋아요 : {comments.likeNum}개</span>
                                                      <button>답글달기</button>
                                                </div>
                                                <div className="recommentShow">
                                                      <button>답글보기</button>
                                                </div>
                                                {/* {
                                                      comments.recomment.map((recomment) => {
                                                            return <div className="feedWrite feedCommentView feedReommentView">
                                                            <div className="feedAdmin">
                                                                  <div className="profileImg">
                                                                        <img src="/images/sub/noImg.jpeg" alt="" />
                                                                  </div>
                                                            </div>
                                                            <div className="feedCon"><span>{recomment.userName}</span>{recomment.comment}
                                                                  <div className="feedCommentInfo">
                                                                        <span className="feedTime">{recomment.atCreate}</span>
                                                                        <span className="commentLikeNum">좋아요 : {recomment.likeNum}개</span>
                                                                        <button>답글달기</button>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      })
                                                } */}
                                                
                                                </div>
                                          </div>
                                          })
                                    }
                                    
                                          
                                    
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
                                    <CommentWrite commentValue={commentValue} onChangeComment={onChangeComment} commentValue={commentValue} submitComment={submitComment}/>
                              </div>
                        </div>
                  </div>
                  <Close onCloseModal={onToggleCommentModal}/>
            </div>
      )
}

export default Comment;