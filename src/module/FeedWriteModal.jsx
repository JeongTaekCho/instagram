import Return from "../components/base/svg/Return";
import Close from "../components/base/Close";
import { useState, useEffect } from "react";


const FeedWriteModal = ({onToggleFeedModal, onAddFeed, selectedFeed, onUpdateFeed}) => {

      //피드 글쓰기 value값
    const [feedWriteValue, setFeedWriteValue] = useState("");

    const selectedId = selectedFeed.id === 0 || selectedFeed.id;

    const onSubmitFeed = (e) => {
        e.preventDefault();

        if(selectedId) {
            onUpdateFeed(feedWriteValue);
        }else{
            onAddFeed(feedWriteValue);
        }
    }
    //피드 글쓰기 value값 받아오기
    const onHandleFeedWrite = (e) => {
        setFeedWriteValue(e.target.value);
    }

    useEffect(() => {
        if (selectedId){
            setFeedWriteValue(selectedFeed.content);
        }
    },[])


    return (
        <div className="feedFunctionBack" onClick={onToggleFeedModal}>
            <form className="feedWriteContainer" onSubmit={onSubmitFeed} onClick={(e) => e.stopPropagation()}>
                <div className="feedWriteHead">
                    <div className="feedWriteTitle">
                        <button><Return /></button>
                        <h1 className="feedMoreTitle">새 게시물 만들기</h1>
                        <button type="submit" className="feedMore">공유하기</button>
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
                            <textarea name="feedWrite" id="feedWrite" value={feedWriteValue} placeholder="문구 입력..." onChange={onHandleFeedWrite} />
                        </div>
                    </div>
                </div>
            </form>
            <Close onCloseModal={onToggleFeedModal}/>
        </div>
    )
}

export default FeedWriteModal;