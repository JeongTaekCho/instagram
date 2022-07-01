import Header from "../components/layout/Header";
import FriendStory from "../module/FriendStory";
import Feed from "../components/layout/Feed";
import Recommend from "../components/layout/Recommend";
import Footer from "../components/layout/Footer";
import Comment from "../module/Comment";
import { useState } from "react";
import FeedFunction from "../module/FeedFunction";
import FeedWriteModal from "../module/FeedWriteModal";

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
            content: "asdsadsad",
            like: 0,
            isLiked: true,
            createAt: new Date(2022, 7, 31),
            comments: [],
      }
];

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


const Index = () => {

      const [feedList, setFeedList] = useState(feeds); //피드리스트 상태관리
      const [selectedFeed, setSelectedFeed] = useState(initialFeed); //피드수정 상태관리
      const [isShowFeedModal, setIsShowFeedModal] = useState(false); //피드모달 상태관리
      const [commentShow, setCommentShow] = useState(false); //댓글모달 상태관리

      const [isFeedFunctionShow, setIsFeedFunctionShow] = useState(false); //피드기능모달 상태관리


      const onAddFeedModal = (feedId) => {

            if(feedId === 0 || feedId) {
                  const selectedItem = feedList.find((feed) => feed.id === feedId);
                  console.log(selectedItem)
                  setSelectedFeed(selectedItem);
            }

            setIsShowFeedModal(true);

      }; //아이디 값이 존재하는 피드 찾기

      const onAddFeed = (content) => {
            console.log(content)
            const newFeed = {
                  ...initialFeed, //스프레드 문법 피드 기본데이터 복사
                  id: feedList.length + 1,
                  user: {
                        username : 'my',
                        profileImage: '',
                  },
                  content: content,
                  createAt: new Date(),
            } // 피드 기본데이터 복사 후 덮어쓰기
            const reversedFeed = feedList.reverse(); //
            const newFeedList = [newFeed, ...reversedFeed];
            setFeedList(newFeedList); // 피드 최신 글 가장 상단으로
            setIsShowFeedModal(false); // 피드 등록 후 모달 닫기
      };

      const onFeedFunction = () => {
            setIsFeedFunctionShow(true)
      }
      const offFeedFunction = () => {
            setIsFeedFunctionShow(false)
      }

      //상태관리를 통한 모달 on/off
      const commentOn = () => {
            setCommentShow(true);
      };
      const commentOff = () => {
            setCommentShow(false);
      };


      const onUpdateFeed = () => {
            
      }

      const onDeleteFeed = () => {

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

      return(
            <>
                  <Header />
                  <div className="mainInner">
                        <div className="feedLeft">
                              <FriendStory />
                              <Feed commentOn = {commentOn} feedList = {feedList} onUpdateFeed={onAddFeedModal} onDeleteFeed={onDeleteFeed} onFeedFunction={onFeedFunction}/>
                        </div>
                        <div className="feedRight">
                              <Recommend />
                              <Footer />
                        </div>
                  </div>

                  {/* 댓글 모달 */}
                  {commentShow === true
                  ? <Comment commentOff = {commentOff} profile = {friends}/> 
                  : null} 

                  {/* 게시글 작성 모달 */}
                  {isShowFeedModal === true ? <Comment selectedFeed={selectedFeed} onAddFeed = {onAddFeed} commentOff = {commentOff}  profile = {friends}/> : null}

                  {/* 피드기능 모달 */}
                  {isFeedFunctionShow === true ? <FeedFunction offFeedFunction={offFeedFunction} /> : null}
                  
                  <FeedWriteModal />
               
                  
                  
            </>
      )

}
export default Index;