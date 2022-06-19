const ProfileName = (props) => {
      console.log(props.profile.username);
      return(
            <>
                  <div className="profileName">
                        <div className="profileImg">
                              <img src="/images/sub/noImg.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                              <p className="pName">{props.profile.username}</p>
                              <p className="pInfo"></p>
                        </div>
                  </div>
            </>
      )
}

export default ProfileName;
