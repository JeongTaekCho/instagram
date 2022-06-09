import Header from "../components/layout/Header";
import FriendStory from "../components/layout/FriendStory";
import Feed from "../components/layout/Feed";
import Recommend from "../components/layout/Recommend";
import Footer from "../components/layout/Footer";

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
                              <Footer />
                        </div>
                  </div>
            </>
      )

}
export default Index;