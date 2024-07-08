import Input from "../ui/input/Input";

const ApplicationOverview = ({ application }) => {
	return (
		<div className="column gap-1">
			<Input
				label="Application Status"
				value={application?.status || ""}
				readOnly
				disabled
			/>
			<Input
				label="Payment Status"
				value={application?.hasPaid ? "Paid" : "Has not paid"}
				readOnly
				disabled
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
