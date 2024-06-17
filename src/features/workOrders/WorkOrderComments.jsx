import { useState } from "react";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import { StyledWorkOrderComments } from "./WorkOrders.styled";
import WorkOrderComment from "./WorkOrderComment";
import createComment from "../api/comments/createComment";
import { useSelector } from "react-redux";
import { getUser } from "../app/authSlice";

const WorkOrderComments = ({ comments, addComment, removeComment }) => {
	const { accessToken, _id: id } = useSelector(getUser);
	const [comment, setComment] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const body = {
				user: id,
				text: comment,
			};
			const { data } = await createComment(accessToken, body);
			await addComment(data);
			setComment("");
		} catch (err) {
			alert("Unable to add comment.");
			console.log(err.message);
		}
	};

	if (!comments) {
		return <p>Loading comments...</p>;
	}

	return (
		<StyledWorkOrderComments>
			<h4>Comments</h4>
			<div className="comments-body">
				{comments.map((comment, index) => (
					<WorkOrderComment
						key={index}
						comment={comment}
						removeComment={removeComment}
					/>
				))}
			</div>
			<form onSubmit={handleSubmit} className="comments-input">
				<Input
					label="Add Comment"
					placeholder="Write a comment here..."
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					required
				/>
				<Button>Add Comment</Button>
			</form>
		</StyledWorkOrderComments>
	);
};

export default WorkOrderComments;
