import { useEffect, useState } from "react";
import Table from "../../ui/table/Table";
import { useNavigate } from "react-router-dom";

const columns = [
	{
		field: "type",
		headerName: "Type",
		width: 300,
	},
	{
		field: "createdAt",
		headerName: "Created At",
		width: 200,
	},
];

const PropertyDocumentsTable = ({ loading, documents }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		console.log(documents);
		setData(
			documents.map((document) => ({
				...document,
				id: document._id,
				createdAt: document.createdAt.split("T")[0],
			}))
		);
	}, [documents]);

	const handleRowClick = (row) => {
		const { id } = row;
		navigate(`${id}`);
	};

	return (
		<>
			{loading ? (
				<p>Loading...</p>
			) : (
				<Table rows={data} columns={columns} onClick={handleRowClick} />
			)}
		</>
	);
};

export default PropertyDocumentsTable;
