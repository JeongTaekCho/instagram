import FriendProfile from "../components/base/FriendProfile";

// function test () {
      //...
// }

const test2 = (x) => {
      const y = 2;
      //...

      return x + y;
};
test2();

// const a = 1;

const FriendStory = () => {
      
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

      console.log(friends)

      return (
            <>
                  <div className="friendStory">
                        {friends.map((friend) => {
                              return <FriendProfile friend={friend}/>
                        })}
                  </div>
            </>
      )
};

export default FriendStory;