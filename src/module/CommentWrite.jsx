const CommentWrite = ({onChangeComment, submitComment, commentValue}) => {
      return(
            <>
                  <div className="commentWrite">
                        <div className="emoBtn">
                              <svg aria-label="이모티콘" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                        </div>
                        <form action="" method="post">
                              <input placeholder="댓글달기.." value={commentValue} onChange={onChangeComment}/>
                              <button type="submit" className="commentSubmit" onClick={submitComment}>게시</button>
                        </form>
                  </div>
            </>
      )
}

export default CommentWrite;