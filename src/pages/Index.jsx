import Header from "../components/layout/Header";
import FriendStory from "../components/layout/FriendStory";
import Feed from "../components/layout/Feed";
import Recommend from "../components/layout/Recommend";

const Index = () => {

      return(
            <>
                  <Header />
                  <div className="mainInner">
                        <div className="feedLeft">
                              <FriendStory />
                              <Feed />
                        </div>
                        <div className="feedRight">
                              <Recommend />
                        </div>
                  </div>
            </>
      )

}
export default Index;