import Header from "../components/layout/Header";
import FriendStory from "../module/FriendStory";
import Feed from "../components/layout/Feed";
import Recommend from "../components/layout/Recommend";
import Footer from "../components/layout/Footer";
import Comment from "../module/Comment";
import { useState } from "react";

const Index = () => {

      const [commentShow, setCommentShow] = useState(false);

      const commentOn = () => {
            setCommentShow(true);
      }
      const commentOff = () => {
            setCommentShow(false);
      }

      return(
            <>
                  <Header />
                  <div className="mainInner">
                        <div className="feedLeft">
                              <FriendStory />
                              <Feed commentOn = {commentOn} />
                        </div>
                        <div className="feedRight">
                              <Recommend />
                              <Footer />
                        </div>
                  </div>
                  {commentShow === true 
                  ? <Comment commentOff = {commentOff}/> 
                  : null}
                  
            </>
      )

}
export default Index;