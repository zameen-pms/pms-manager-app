import { MdDelete } from "react-icons/md";
import { StyledWorkComment } from "./WorkOrders.styled";

const WorkOrderComment = ({ comment, removeComment }) => {
	const { user } = comment;

	return (
		<StyledWorkComment $color={`#${comment.user._id.slice(-6)}`}>
			<div className="comment-profile">
				{user?.profile || `${user.firstName[0]}${user.lastName[0]}`}
			</div>
			<div className="comment-body">
				<div className="comment-header">
					<h5>{`${user.firstName} ${user.lastName}`}</h5>
					<p>{comment.createdAt}</p>
					<MdDelete onClick={() => removeComment(comment)} />
				</div>
				<p className="comment-content">{comment.text}</p>
			</div>
		</StyledWorkComment>
	);
};

export default WorkOrderComment;
