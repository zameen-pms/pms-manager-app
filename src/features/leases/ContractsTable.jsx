import { useEffect, useState } from "react";
import Table from "../ui/table/Table";
import { getTextDate } from "../utils/getTextDate";

const columns = [
	{
		field: "title",
		headerName: "Document Title",
		width: 450,
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

const ContractsTable = ({ contracts, loading, onClick, search }) => {
	const [data, setData] = useState([]);
	const [parsedData, setParsedData] = useState([]);

	useEffect(() => {
		setParsedData(
			contracts.map((contract) => ({
				...contract,
				id: contract._id,
				parties: contract.parties
					.map(
						(party) =>
							`${party.firstName} ${party.lastName} (${party.role})`
					)
					.join(", "),
				createdAt: getTextDate(contract.createdAt.split("T")[0]),
			}))
		);
	}, [contracts]);

	useEffect(() => {
		if (!search || search === "") {
			setData(parsedData);
		} else {
			setData(
				parsedData.filter(
					(row) =>
						row?.title
							?.toLowerCase()
							?.includes(search.toLowerCase()) ||
						row?.parties
							?.toLowerCase()
							.includes(search.toLowerCase()) ||
						row?.createdAt
							?.toLowerCase()
							?.includes(search.toLowerCase())
				)
			);
		}
	}, [search, parsedData]);

	const handleRowClick = (row) => {
		onClick && onClick(row);
	};

	if (loading) return <p>Loading...</p>;

	return <Table rows={data} columns={columns} onClick={handleRowClick} />;
};

export default ContractsTable;
