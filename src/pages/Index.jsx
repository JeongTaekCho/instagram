import Header from "../components/layout/Header";
import FriendStory from "../components/layout/FriendStory";
import Feed from "../components/layout/Feed";

const Index = () => {

      return(
            <>
                  <Header />
                  <div className="mainInner">
                        <FriendStory />
                        <Feed />
                  </div>
            </>
      )

}
export default Index;