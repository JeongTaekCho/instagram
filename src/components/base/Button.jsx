const Button = ({onToogleUtilModal}) => {
      return(
            <div className="threeBtn" onClick={onToogleUtilModal}>
                  <svg aria-label="옵션 더 보기" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
            </div>
      )
}

export default Button;