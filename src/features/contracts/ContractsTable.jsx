import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../ui/table/Table";
import { getTextDate } from "../utils/getTextDate";

const columns = [
	{
		field: "title",
		headerName: "Document Title",
		width: 150,
	},
	{
		field: "parties",
		headerName: "Parties",
		width: 450,
	},
	{
		field: "createdAt",
		headerName: "Creation Date",
		width: 150,
	},
];

const ContractsTable = ({ loading, contracts }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setData(
			contracts.map((contract) => ({
				...contract,
				id: contract._id,
				parties: contract.parties.map(
					(party) => `${party.firstName} ${party.lastName}`
				),
				createdAt: getTextDate(contract.createdAt.split("T")[0]),
			}))
		);
	}, [contracts]);

	const handleRowClick = (row) => {
		const { id } = row;
		navigate(`/contracts/${id}`);
	};

	if (loading) return <p>Loading...</p>;

	return <Table rows={data} columns={columns} onClick={handleRowClick} />;
};

export default ContractsTable;
