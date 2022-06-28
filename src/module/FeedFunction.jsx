import { useState } from "react";

const FeedFunction = ({offFeedFunction}) => {


      return(
            <div className="feedFunctionBack" onClick={offFeedFunction}>
                  <div className="feedFunction" onClick={(event) => {event.stopPropagation()}}>
                        <button className="feedFunctionBtn feedFunctionBtnRed">신고</button>
                        <button className="feedFunctionBtn feedFunctionBtnRed">팔로우 취소</button>
                        <button className="feedFunctionBtn">게시물로 이동</button>
                        <button className="feedFunctionBtn">공유 대상...</button>
                        <button className="feedFunctionBtn">링크 복사</button>
                        <button className="feedFunctionBtn">퍼가기</button>
                        <button className="feedFunctionBtn" onClick={offFeedFunction}>취소</button>
                  </div>
            </div>
            
      )
}

export default FeedFunction;