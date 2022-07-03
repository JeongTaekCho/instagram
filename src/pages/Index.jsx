import Header from "../components/layout/Header";
import FriendStory from "../module/FriendStory";
import Feed from "../components/layout/Feed";
import Recommend from "../components/layout/Recommend";
import Footer from "../components/layout/Footer";
import Comment from "../module/Comment";
import { useState, useEffect } from "react";
import FeedFunction from "../module/FeedFunction";
import FeedWriteModal from "../module/FeedWriteModal";

//피드 더미데이터
const feeds = [
      {
            id: 0,
            user: {
                  username : "people1",
                  profileImage: "",
            },
            feedImages: [],
            content: "first feed",
            like: 123,
            isLiked: true,
            createAt: new Date(2022, 11, 11),     
            comments: [
                  {
                        id:0,
                        content: "",
                        user: {
                              username : "people1",
                              profileImage: "",
                        },
                        createAt: new Date(2022, 11, 11),     
                        isLiked: true,
                  }
            ],
      },
      {
            id: 1,
            user: {
                  username : "people2",
                  profileImage: "",
            },
            feedImages: [],
            content: "second feed",
            like: 456,
            isLiked: false,
            createAt: new Date(2022, 5, 9),
            comments: [
                  {
                        id:0,
                        content: "",
                        user: {
                              username : "people1",
                              profileImage: "",
                        },
                        createAt: new Date(2022, 11, 11),     
                        isLiked: true,
                  }
            ],
      },
      {
            id: 2,
            user: {
                  username : "people3",
                  profileImage: "",
            },
            feedImages: [],
            content: "three",
            like: 0,
            isLiked: true,
            createAt: new Date(2022, 7, 31),
            comments: [],
      }
];

//새로운 피드 생성
const initialFeed = {
      id: null,
      user: {
            username : '',
            profileImage: '',
      },
      feedImages: [],
      content: '',
      like: 0,
      isLiked: false,
      createAt: null,
      comments: [],
}

//친구추천 더미데이터
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


const Index = () => {

      const [feedList, setFeedList] = useState(feeds); //피드리스트 상태관리
      const [selectedFeed, setSelectedFeed] = useState(initialFeed); //피드수정 상태관리
      const [commentShow, setCommentShow] = useState(false); //댓글모달 상태관리
      const [isFeedFunctionShow, setIsFeedFunctionShow] = useState(false); //피드기능모달 상태관리
      const [isFeedWriteModalShow, setIsFeedWriteModalShow] = useState(false); //피드생성 모달 on/off 상태관리


      //피드 기능 모달 on/off
      const onToggleFeedUtilModal = () => {
            setIsFeedFunctionShow((state) => !state);
      }

      //댓글 모달 on/off
      const onToggleCommentModal = () => {
            setCommentShow((state) => !state);
      };

      //피드생성 모달 on/off
      const onToggleFeedModal = () => {
            setIsFeedWriteModalShow((state) => !state)
      }
      
      const onHandleFeedModal = (feedId) => {
            // onAddFeedModal(feedId)

            onToggleFeedModal();
            onToggleFeedUtilModal();
      }

      //피드 수정 모달 on
      const onAddFeedModal = (feedId) => {

            if(feedId === 0 || feedId) {
                  const selectedItem = feedList.find((feed) => feed.id === feedId);
                  console.log(selectedItem)
                  setSelectedFeed(selectedItem);
            }


      }; //아이디 값이 존재하는 피드 찾기

      //피드 추가
      const onAddFeed = (content) => {
            const newFeed = {
                  ...initialFeed, //스프레드 문법 피드 기본데이터 복사
                  id: feedList.length + 1,
                  user: {
                        username : 'my',
                        profileImage: '',
                  },
                  content,
                  createAt: new Date(),
            } // 피드 기본데이터 복사 후 덮어쓰기
            const newFeedList = [...feedList, newFeed];
            setFeedList(newFeedList); // 피드 최신 글 가장 상단으로
            setIsFeedWriteModalShow(false);
      };

      const findSelectedFeed = (feedId) => {
            onToggleFeedUtilModal();
            onAddFeedModal(feedId);
      }

      //피드수정
      const onUpdateFeed = (content) => {
            const updatedFeed = {
                  ...selectedFeed,
                  content : content
            };
            

            const updatedFeedList = feedList.map((feed) => {
                  if(feed.id === selectedFeed.id) {
                        return updatedFeed;
                  }else{
                        return feed;
                  }
            })
            setFeedList(updatedFeedList);

            onToggleFeedModal();

            console.log(updatedFeedList);
      }

      //피드삭제
      const onDeleteFeed = () => {

      }

      useEffect(()=> {
            console.log(selectedFeed);
      },[selectedFeed])


      return(
            <>
                  <Header onToggleFeedModal={onToggleFeedModal}/>
                  <div className="mainInner">
                        <div className="feedLeft">
                              <FriendStory />
                              <Feed findSelectedFeed={findSelectedFeed} onToggleFeedUtilModal={onToggleFeedUtilModal} feedList={feedList} onDeleteFeed={onDeleteFeed} onToggleCommentModal={onToggleCommentModal}/>
                        </div>
                        <div className="feedRight">
                              <Recommend />
                              <Footer />
                        </div>
                  </div>

                  {/* 댓글 모달 */}
                  {commentShow && <Comment onToggleCommentModal={onToggleCommentModal} profile={friends} onToggleFeedUtilModal={onToggleFeedUtilModal}/>} 

                  {/* 게시글 작성 모달 */}
                  {isFeedWriteModalShow && <FeedWriteModal onUpdateFeed={onUpdateFeed} selectedFeed={selectedFeed} onAddFeed={onAddFeed} onToggleFeedModal={onToggleFeedModal}/>}

                  {/* 피드기능 모달 */}
                  {isFeedFunctionShow && <FeedFunction onHandleFeedModal={onHandleFeedModal} onToggleFeedUtilModal={onToggleFeedUtilModal} />}
                  


                  
                  
            </>
      )

}
export default Index;