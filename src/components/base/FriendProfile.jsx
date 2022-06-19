const FriendProfile = (props) => {
      return(
            <>
                  <div className="friendProfile">
                        <div className="profileImg">
                              <img src="/images/sub/noImg.jpeg" alt="" />
                        </div>
                        <p>{props.friend.username}</p>
                  </div>
            </>
      )
}

export default FriendProfile;