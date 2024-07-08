import Input from "../ui/input/Input";
import { getDollarAmount } from "../utils/getDollarAmount";
import { ApplicationGrid, StyledApplicationForm } from "./Applications.styled";
import { formatSSN } from "../utils/formatSSN";
import getAssetByKey from "../api/assets/getAssetByKey";
import { useSelector } from "react-redux";
import { getUser } from "../app/authSlice";
import Button from "../ui/button/Button";

const ApplicationForm = ({ application }) => {
	const { accessToken } = useSelector(getUser);

	const downloadFile = async (file) => {
		try {
			const response = await getAssetByKey(accessToken, file);
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", file);
			document.body.appendChild(link);
			link.click();
			link.parentNode.removeChild(link);
		} catch (err) {
			alert("Unable to download file.");
			console.log(err.message);
		}
	};

	return (
		<StyledApplicationForm
			className="column gap-2"
			onSubmit={(e) => e.preventDefault()}
		>
			<div className="column">
				<h4>Applicant Information</h4>
				<ApplicationGrid>
					<Input
						label="First Name"
						value={application?.applicant?.firstName || ""}
						readOnly
						disabled
					/>
					<Input
						label="Middle Name"
						value={application?.applicant?.middleName || ""}
						readOnly
						disabled
					/>
					<Input
						label="Last Name"
						value={application?.applicant?.lastName || ""}
						readOnly
						disabled
					/>
					<Input
						label="Birth Date"
						value={application?.applicant?.dob || ""}
						readOnly
						disabled
					/>
					<Input
						label="SSN"
						value={formatSSN(application?.applicant?.ssn) || ""}
						readOnly
						disabled
					/>
					<Input
						label="Email Address"
						value={application?.applicant?.email || ""}
						readOnly
						disabled
					/>
					<Input
						label="Cell Phone"
						value={application?.applicant?.cellPhone || ""}
						readOnly
						disabled
					/>
					<Input
						label="Home Phone"
						value={application?.applicant?.homePhone || ""}
						readOnly
						disabled
					/>
					<Input
						label="Driver's License"
						value={application?.applicant?.driversLicense || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<h5>All Other Occupants (18+)</h5>
				<ApplicationGrid>
					<Input
						label="Name"
						value={application?.occupantA?.name || ""}
						readOnly
						disabled
					/>
					<Input
						label="Birth Date"
						value={application?.occupantA?.dob || ""}
						readOnly
						disabled
					/>
					<Input
						label="Relation to Applicant"
						value={application?.occupantA?.relation || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
				<ApplicationGrid>
					<Input
						label="Name"
						value={application?.occupantB?.name || ""}
						readOnly
						disabled
					/>
					<Input
						label="Birth Date"
						value={application?.occupantB?.dob || ""}
						readOnly
						disabled
					/>
					<Input
						label="Relation to Applicant"
						value={application?.occupantB?.relation || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
				<ApplicationGrid>
					<Input
						label="Name"
						value={application?.occupantC?.name || ""}
						readOnly
						disabled
					/>
					<Input
						label="Birth Date"
						value={application?.occupantC?.dob || ""}
						readOnly
						disabled
					/>
					<Input
						label="Relation to Applicant"
						value={application?.occupantC?.relation || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<h4>Rental History</h4>
				<h5>Current Residence</h5>
				<ApplicationGrid>
					<Input
						label="Address"
						value={application?.currentResidence?.address || ""}
						readOnly
						disabled
					/>
					<Input
						label="City"
						value={application?.currentResidence?.city || ""}
						readOnly
						disabled
					/>
					<Input
						label="State"
						value={application?.currentResidence?.state || ""}
						readOnly
						disabled
					/>
					<Input
						label="Zip Code"
						value={application?.currentResidence?.zip || ""}
						readOnly
						disabled
					/>
					<Input
						label="Monthly Rent"
						value={application?.currentResidence?.monthlyRent || ""}
						readOnly
						disabled
					/>
					<Input
						label="Dates of Residency"
						value={application?.currentResidence?.dates || ""}
						readOnly
						disabled
					/>
					<Input
						label="Reason for Moving"
						value={
							application?.currentResidence?.movingReason || ""
						}
						readOnly
						disabled
					/>
					<Input
						label="Manager's Name"
						value={application?.currentResidence?.managerName || ""}
						readOnly
						disabled
					/>
					<Input
						label="Manager's Number"
						value={
							application?.currentResidence?.managerNumber || ""
						}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<h5>Previous Residence</h5>
				<ApplicationGrid>
					<Input
						label="Address"
						value={application?.previousResidence?.address || ""}
						readOnly
						disabled
					/>
					<Input
						label="City"
						value={application?.previousResidence?.city || ""}
						readOnly
						disabled
					/>
					<Input
						label="State"
						value={application?.previousResidence?.state || ""}
						readOnly
						disabled
					/>
					<Input
						label="Zip Code"
						value={application?.previousResidence?.zip || ""}
						readOnly
						disabled
					/>
					<Input
						label="Monthly Rent"
						value={
							application?.previousResidence?.monthlyRent || ""
						}
						readOnly
						disabled
					/>
					<Input
						label="Dates of Residency"
						value={application?.previousResidence?.dates || ""}
						readOnly
						disabled
					/>
					<Input
						label="Reason for Moving"
						value={
							application?.previousResidence?.movingReason || ""
						}
						readOnly
						disabled
					/>
					<Input
						label="Manager's Name"
						value={
							application?.previousResidence?.managerName || ""
						}
						readOnly
						disabled
					/>
					<Input
						label="Manager's Number"
						value={
							application?.previousResidence?.managerNumber || ""
						}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<h4>Employment History</h4>
				<h5>Current Employer</h5>
				<ApplicationGrid>
					<Input
						label="Employer Name"
						value={application?.currentEmployer?.name || ""}
						readOnly
						disabled
					/>
					<Input
						label="Occupation"
						value={application?.currentEmployer?.occupation || ""}
						readOnly
						disabled
					/>
					<Input
						label="Employer Address"
						value={application?.currentEmployer?.address || ""}
						readOnly
						disabled
					/>
					<Input
						label="Employer Phone Number"
						value={application?.currentEmployer?.phone || ""}
						readOnly
						disabled
					/>
					<Input
						label="Dates of Employment"
						value={application?.currentEmployer?.dates || ""}
						readOnly
						disabled
					/>
					<Input
						label="Supervisor Name"
						value={
							application?.currentEmployer?.supervisorName || ""
						}
						readOnly
						disabled
					/>
					<Input
						label="Monthly Pay"
						value={getDollarAmount(
							application?.currentEmployer?.monthlyPay || 0
						)}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<h5>Previous Employer</h5>
				<ApplicationGrid>
					<Input
						label="Employer Name"
						value={application?.previousEmployer?.name || ""}
						readOnly
						disabled
					/>
					<Input
						label="Occupation"
						value={application?.previousEmployer?.occupation || ""}
						readOnly
						disabled
					/>
					<Input
						label="Employer Address"
						value={application?.previousEmployer?.address || ""}
						readOnly
						disabled
					/>
					<Input
						label="Employer Phone Number"
						value={application?.previousEmployer?.phone || ""}
						readOnly
						disabled
					/>
					<Input
						label="Dates of Employment"
						value={application?.previousEmployer?.dates || ""}
						readOnly
						disabled
					/>
					<Input
						label="Supervisor Name"
						value={
							application?.previousEmployer?.supervisorName || ""
						}
						readOnly
						disabled
					/>
					<Input
						label="Monthly Pay"
						value={getDollarAmount(
							application?.previousEmployer?.monthlyPay || 0
						)}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<h4>Credit History</h4>
				<h5>Checkings Account</h5>
				<ApplicationGrid>
					<Input
						label="Bank/Institution"
						value={application?.checkings?.bank || ""}
						readOnly
						disabled
					/>
					<Input
						label="Balance / Balance Owed"
						value={getDollarAmount(
							application?.checkings?.balance || 0
						)}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<h5>Savings Account</h5>
				<ApplicationGrid>
					<Input
						label="Bank/Institution"
						value={application?.savings?.bank || ""}
						readOnly
						disabled
					/>
					<Input
						label="Balance / Balance Owed"
						value={getDollarAmount(
							application?.savings?.balance || 0
						)}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<h5>Credit Card(s)</h5>
				<ApplicationGrid>
					<Input
						label="Bank/Institution"
						value={application?.creditCard?.bank || ""}
						readOnly
						disabled
					/>
					<Input
						label="Balance / Balance Owed"
						value={getDollarAmount(
							application?.creditCard?.balance || 0
						)}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<h5>Auto Loan(s)</h5>
				<ApplicationGrid>
					<Input
						label="Bank/Institution"
						value={application?.autoLoan?.bank || ""}
						readOnly
						disabled
					/>
					<Input
						label="Balance / Balance Owed"
						value={getDollarAmount(
							application?.autoLoan?.balance || 0
						)}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<h5>Additional Debt</h5>
				<ApplicationGrid>
					<Input
						label="Bank/Institution"
						value={application?.otherDebt?.bank || ""}
						readOnly
						disabled
					/>
					<Input
						label="Balance / Balance Owed"
						value={getDollarAmount(
							application?.otherDebt?.balance || 0
						)}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<h4>References</h4>
				<ApplicationGrid>
					<Input
						label="Name"
						value={application?.reference?.name || ""}
						readOnly
						disabled
					/>
					<Input
						label="Phone Number"
						value={application?.reference?.number || ""}
						readOnly
						disabled
					/>
					<Input
						label="Relationship"
						value={application?.reference?.relationship || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<ApplicationGrid>
					<Input
						label="Name"
						value={application?.otherReference?.name || ""}
						readOnly
						disabled
					/>
					<Input
						label="Phone Number"
						value={application?.otherReference?.number || ""}
						readOnly
						disabled
					/>
					<Input
						label="Relationship"
						value={application?.otherReference?.relationship || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<h4>General Info</h4>
				<ApplicationGrid>
					<Input
						label="Have you ever been late on rent?"
						value={application?.lateOnRent?.response || ""}
						readOnly
						disabled
					/>
					<Input
						label="If so, please explain why."
						value={application?.lateOnRent?.reason || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<ApplicationGrid>
					<Input
						label="Have you ever been party to a lawsuit?"
						value={application?.partyToLawsuit?.response || ""}
						readOnly
						disabled
					/>
					<Input
						label="If so, please explain why."
						value={application?.partyToLawsuit?.reason || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<ApplicationGrid>
					<Input
						label="Do you smoke?"
						value={application?.doesSmoke || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<ApplicationGrid>
					<Input
						label="Do you have any pets?"
						value={application?.hasPets?.response || ""}
						readOnly
						disabled
					/>
					<Input
						label="If yes, please list breed, weight, and age."
						value={application?.hasPets?.info || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<ApplicationGrid>
					<Input
						label="Why are you moving from your current address?"
						value={application?.reasonForMoving || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<ApplicationGrid>
					<Input
						label="Are there items on credit/background check you would like to comment on?"
						value={application?.additionalComments || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column">
				<ApplicationGrid>
					<Input
						label="Additional Questions"
						value={application?.questions || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</div>

			<div className="column gap-1">
				{application?.incomeFiles?.map((file, index) => (
					<Button onClick={() => downloadFile(file)} key={file}>
						{`Download file #${index + 1}`}
					</Button>
				))}
			</div>
		</StyledApplicationForm>
	);
};

export default ApplicationForm;
