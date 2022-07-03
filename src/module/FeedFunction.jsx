import { useState } from "react";

const FeedFunction = ({onToggleFeedUtilModal, onHandleFeedModal}) => {


      return(
            <div className="feedFunctionBack" onClick={onToggleFeedUtilModal}>
                  <div className="feedFunction" onClick={(event) => {event.stopPropagation()}}>
                        <button className="feedFunctionBtn feedFunctionBtnRed">신고</button>
                        <button className="feedFunctionBtn feedFunctionBtnRed">팔로우 취소</button>
                        <button className="feedFunctionBtn">게시물로 이동</button>
                        <button className="feedFunctionBtn">링크 복사</button>
                        <button className="feedFunctionBtn" onClick={onHandleFeedModal}>수정</button>
                        <button className="feedFunctionBtn" onClick={onToggleFeedUtilModal}>취소</button>
                  </div>
            </div>
            
      )
}

export default FeedFunction;