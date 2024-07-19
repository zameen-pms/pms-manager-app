import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../ui/table/Table";
import { getAddress } from "../utils/getAddress";
import { getTextDate } from "../utils/getTextDate";
import { getDollarAmount } from "../utils/getDollarAmount";

const columns = [
	{
		field: "status",
		headerName: "Status",
		width: 100,
	},
	{
		field: "property",
		headerName: "Property",
		width: 350,
	},
	{
		field: "startDate",
		headerName: "Start Date",
		width: 150,
	},
	{
		field: "endDate",
		headerName: "End Date",
		width: 150,
	},
	{
		field: "rentDate",
		headerName: "Rent Due",
		width: 150,
	},
	{
		field: "rent",
		headerName: "Rent Amount",
		width: 150,
	},
	{
		field: "tenants",
		headerName: "Tenant(s)",
		width: 250,
	},
	{
		field: "contract",
		headerName: "Contract",
		width: 400,
	},
];

const LeasesTable = ({ loading, leases }) => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setData(
			leases.map((lease) => ({
				...lease,
				id: lease._id,
				property: getAddress(lease?.property?.address),
				startDate: getTextDate(lease?.startDate?.split("T")[0]) || "",
				endDate: getTextDate(lease?.endDate?.split("T")[0]) || "",
				rentDate: `${lease?.rentDate} of the month`,
				rent: getDollarAmount(lease?.rent || 0),
				tenants: lease.tenants
					?.map(
						(tenant) => `${tenant?.firstName} ${tenant?.lastName}`
					)
					.join(", "),
				contract: lease.contract?.title || "",
			}))
		);
	}, [leases]);

	const handleRowClick = ({ id }) => {
		navigate(`/leases/${id}`);
	};

	if (loading) return <p>Loading...</p>;

	return <Table rows={data} columns={columns} onClick={handleRowClick} />;
};

export default LeasesTable;
