import { useEffect, useState } from "react";
import Input from "../ui/input/Input";
import { getAddress } from "../utils/getAddress";
import { getDollarAmount } from "../utils/getDollarAmount";
import { getTextDate } from "../utils/getTextDate";
import { useSelector } from "react-redux";
import { getUser } from "../app/authSlice";
import getAsset from "../api/assets/getAsset";
import PdfViewer from "../ui/pdfViewer/PdfViewer";

const ViewLease = ({ lease }) => {
	const { accessToken } = useSelector(getUser);
	const [url, setUrl] = useState(null);

	const fetchUrl = async () => {
		try {
			const { data } = await getAsset(accessToken, lease.contract.file);
			setUrl(data);
		} catch (err) {
			alert("Unable to fetch document.");
		}
	};

	useEffect(() => {
		if (lease?.contract?.file) {
			fetchUrl();
		}
	}, [lease]);

	return (
		<div className="column gap-2">
			<div className="grid">
				<Input
					label="Status"
					value={lease?.status || ""}
					readOnly
					disabled
				/>
				<Input
					label="Property"
					value={getAddress(lease?.property?.address) || ""}
					readOnly
					disabled
				/>
				<Input
					label="Lease Start Date"
					value={getTextDate(lease?.startDate.split("T")[0]) || ""}
					readOnly
					disabled
				/>
				<Input
					label="Lease End Date"
					value={getTextDate(lease?.endDate.split("T")[0]) || ""}
					readOnly
					disabled
				/>
				<Input
					label="Rent Amount"
					value={getDollarAmount(lease?.rent) || ""}
					readOnly
					disabled
				/>
				<Input
					label="Rent Due Date"
					value={`${lease?.rentDate || 0} of the month`}
					readOnly
					disabled
				/>
				<Input
					label="Tenants"
					value={
						lease?.tenants
							?.map(
								(tenant) =>
									`${tenant?.firstName} ${tenant?.lastName}`
							)
							.join(", ") || ""
					}
					readOnly
					disabled
				/>
			</div>
			{url && <PdfViewer url={url} />}
		</div>
	);
};

export default ViewLease;
