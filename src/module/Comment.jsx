import Close from "../components/base/Close";

const Comment = (props) => {
      return(
            <div className="backContainer">

                  <Close commentOff={props.commentOff}/>
            </div>
      )
}

export default Comment;