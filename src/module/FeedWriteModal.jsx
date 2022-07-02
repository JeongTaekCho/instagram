import Return from "../components/base/svg/Return";
import Close from "../components/base/Close";
import { useEffect } from "react";


const FeedWriteModal = ({commentOff, offFeedWriteModal, onHandleFeedWrite}) => {


    return (
        <div className="feedFunctionBack">
            <div className="feedWriteContainer">
                <div className="feedWriteHead">
                    <div className="feedWriteTitle">
                        <button><Return /></button>
                        <h1 className="feedMoreTitle">새 게시물 만들기</h1>
                        <button className="feedMore">공유하기</button>
                    </div>
                </div>
                <div className="feedWriteBody">
                    <div className="feedPhoto">

                    </div>
                    <div className="feedWriteCon">
                        <div className="feedMyProfile">
                            <div className="feedMyProfileBox">
                                <div className="feedMyProfileImg">
                                    <img src="/images/sub/profile.jpeg" alt="" />
                                </div>
                                <div className="feedMyProfileName">
                                    <span>my-profile</span>
                                </div>
                            </div>
                        </div>
                        <div className="feedTexxArea">
                            <textarea name="feedWrite" id="feedWrite" placeholder="문구 입력..." onChange={onHandleFeedWrite} />
                        </div>
                    </div>
                </div>
            </div>
            <Close commentOff={offFeedWriteModal}/>
        </div>
    )
}

export default FeedWriteModal;