import Dropdown from "../ui/dropdown/Dropdown";
import Input from "../ui/input/Input";
import { getAddress } from "../utils/getAddress";

const ApplicationOverview = ({ canEdit, application, setApplication }) => {
	return (
		<div className="column gap-1">
			<Input
				label="Property"
				value={getAddress(application?.property?.address) || ""}
				readOnly
				disabled
			/>
			<Dropdown
				label="Application Status"
				options={[
					{ value: "In-Progress" },
					{ value: "Approved" },
					{ value: "Rejected" },
				]}
				value={application?.status || ""}
				onChange={(e) =>
					setApplication({ ...application, status: e.value })
				}
				disabled={!canEdit}
			/>
			<Dropdown
				label="Payment Status"
				options={[
					{ value: "Paid", val: true },
					{ value: "Has Not Paid", val: false },
				]}
				value={application?.hasPaid ? "Paid" : "Has not paid"}
				onChange={(e) =>
					setApplication({ ...application, hasPaid: e.val })
				}
				disabled={!canEdit}
			/>
			<div className="row gap-1">
				<Input
					label="Signature"
					value={application?.signature?.name || ""}
					readOnly
					disabled
				/>
				<Input
					label="Signature Date"
					value={application?.signature?.date || ""}
					type="text"
					readOnly
					disabled
				/>
			</div>
		</div>
	);
};

export default ApplicationOverview;
