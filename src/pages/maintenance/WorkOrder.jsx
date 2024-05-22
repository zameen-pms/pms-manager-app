import { useParams } from "react-router-dom";

const WorkOrder = () => {
	const { id } = useParams();
	return <div>Work Order {id}</div>;
};

export default WorkOrder;
