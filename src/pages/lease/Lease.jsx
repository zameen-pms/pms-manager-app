import { useParams } from "react-router-dom";

const Lease = () => {
	const { leaseId } = useParams();

	return <div>Lease</div>;
};

export default Lease;
