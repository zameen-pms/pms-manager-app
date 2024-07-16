import Input from "../ui/input/Input";
import { getDollarAmount } from "../utils/getDollarAmount";
import {
	ApplicationGrid,
	ApplicationSection,
	StyledApplicationForm,
} from "./Applications.styled";
import { formatSSN } from "../utils/formatSSN";
import { useSelector } from "react-redux";
import { getUser } from "../app/authSlice";
import { downloadAsset } from "../utils/downloadAsset";
import { getTextDate } from "../utils/getTextDate";
import { getImageUrl } from "../utils/getImageUrl";

const ApplicationForm = ({ application }) => {
	const { accessToken } = useSelector(getUser);

	const downloadFile = async (file) => {
		try {
			await downloadAsset(accessToken, file);
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
			<ApplicationSection>
				<h4>Personal Information</h4>
				<ApplicationGrid>
					<Input
						label="First Name"
						value={application?.personal?.firstName || ""}
						readOnly
						disabled
					/>
					<Input
						label="Last Name"
						value={application?.personal?.lastName || ""}
						readOnly
						disabled
					/>
					<Input
						label="Date of Birth"
						value={getTextDate(application?.personal?.dob) || ""}
						readOnly
						disabled
					/>
					<Input
						label="SSN"
						value={formatSSN(application?.personal?.ssn) || ""}
						readOnly
						disabled
					/>
					<Input
						label="Phone Number"
						value={application?.personal?.phoneNumber || ""}
						readOnly
						disabled
					/>
					<Input
						label="Email Address"
						value={application?.personal?.email || ""}
						readOnly
						disabled
					/>
					<Input
						label="Driver's License"
						value={application?.personal?.driversLicense || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</ApplicationSection>

			<ApplicationSection>
				<h4>Rental History</h4>
				<div className="column gap-2">
					{application?.addresses?.map((address, index) => (
						<ApplicationGrid key={index}>
							<Input
								label="Street"
								value={address?.street || ""}
								readOnly
								disabled
							/>
							<Input
								label="City"
								value={address?.city || ""}
								readOnly
								disabled
							/>
							<Input
								label="State"
								value={address?.state || ""}
								readOnly
								disabled
							/>
							<Input
								label="Zip Code"
								value={address?.zip || ""}
								readOnly
								disabled
							/>
							<Input
								label="Start Date"
								value={getTextDate(address?.fromDate) || ""}
								readOnly
								disabled
							/>
							<Input
								label="End Date"
								value={
									getTextDate(address?.toDate) || "Current"
								}
								readOnly
								disabled
							/>
							<Input
								label="Reason For Leaving"
								value={address?.leavingReason || ""}
								readOnly
								disabled
							/>
							<Input
								label="Landord Name"
								value={address?.landlordName || ""}
								readOnly
								disabled
							/>
							<Input
								label="Landlord Contact Info"
								value={address?.landlordContactInfo || ""}
								readOnly
								disabled
							/>
						</ApplicationGrid>
					))}
				</div>
			</ApplicationSection>

			<ApplicationSection>
				<h4>Work History</h4>
				<div className="column gap-2">
					{application?.employers?.map((employer, index) => (
						<ApplicationGrid key={index}>
							<Input
								label="Employer Name"
								value={employer?.name || ""}
								readOnly
								disabled
							/>
							<Input
								label="Job Title"
								value={employer?.title || ""}
								readOnly
								disabled
							/>
							<Input
								label="Employer Address"
								value={employer?.address || ""}
								readOnly
								disabled
							/>
							<Input
								label="Start Date"
								value={getTextDate(employer?.fromDate) || ""}
								readOnly
								disabled
							/>
							<Input
								label="End Date"
								value={
									getTextDate(employer?.toDate) || "Current"
								}
								readOnly
								disabled
							/>
							<Input
								label="Monthly Income"
								value={
									getDollarAmount(employer?.monthlyIncome) ||
									""
								}
								readOnly
								disabled
							/>
						</ApplicationGrid>
					))}
				</div>
			</ApplicationSection>

			<ApplicationSection>
				<h4>Finances</h4>
				<div className="column gap-2">
					{application?.finances?.map((finance, index) => (
						<ApplicationGrid key={index}>
							<Input
								label="Institution/Account Name"
								value={finance?.name || ""}
								readOnly
								disabled
							/>
							<Input
								label="Balance"
								value={getDollarAmount(finance?.amount) || ""}
								readOnly
								disabled
							/>
						</ApplicationGrid>
					))}
				</div>
			</ApplicationSection>

			<ApplicationSection>
				<h4>References</h4>
				<div className="column gap-2">
					{application?.references?.map((reference, index) => (
						<ApplicationGrid key={index}>
							<Input
								label="Name"
								value={reference?.name || ""}
								readOnly
								disabled
							/>
							<Input
								label="Phone Number"
								value={reference?.phoneNumber || ""}
								readOnly
								disabled
							/>
							<Input
								label="Relation to Applicant"
								value={reference?.relationship || ""}
								readOnly
								disabled
							/>
						</ApplicationGrid>
					))}
				</div>
			</ApplicationSection>

			<ApplicationSection>
				<h4>General Questions</h4>
				<div className="column gap-2">
					{application?.questions?.map((question, index) => (
						<ApplicationGrid key={index}>
							<Input
								label={question?.question || ""}
								value={question?.response || ""}
								readOnly
								disabled
							/>
							{question?.reason && (
								<Input
									label="Reasoning"
									value={question?.reason || ""}
									readOnly
									disabled
								/>
							)}
						</ApplicationGrid>
					))}
				</div>
			</ApplicationSection>

			<ApplicationSection>
				<h4>Dependents & Co-Applicants</h4>
				<div className="column gap-2">
					{application?.members?.map((member, index) => (
						<ApplicationGrid key={index}>
							<Input
								label="Member Type"
								value={member?.type || ""}
								readOnly
								disabled
							/>
							<Input
								label="Name"
								value={member?.name || ""}
								readOnly
								disabled
							/>
							{member?.type === "Dependent" && (
								<Input
									label="Date of Birth"
									value={getTextDate(member?.dob) || ""}
									readOnly
									disabled
								/>
							)}
							<Input
								label="Relation to Applicant"
								value={member?.relationship || ""}
								readOnly
								disabled
							/>
						</ApplicationGrid>
					))}
				</div>
			</ApplicationSection>

			<ApplicationSection>
				<h4>Supporting Documents</h4>
				<ApplicationGrid>
					{application?.documents?.map((document, index) => (
						<div key={index} className="img-container">
							<img src={getImageUrl(document)} alt="Document" />
							<p onClick={() => downloadFile(document)}>
								{document}
							</p>
						</div>
					))}
				</ApplicationGrid>
			</ApplicationSection>

			<ApplicationSection>
				<h4>Authorization & Consent</h4>
				<ApplicationGrid>
					<Input
						label="Consents to background check"
						value={
							application?.authorization?.backgroundCheck || ""
						}
						readOnly
						disabled
					/>
					<Input
						label="Consents to credit check"
						value={application?.authorization?.creditCheck || ""}
						readOnly
						disabled
					/>
					<Input
						label="Consents to reference check"
						value={application?.authorization?.referenceCheck || ""}
						readOnly
						disabled
					/>
					<Input
						label="Consents to employer check"
						value={application?.authorization?.employerCheck || ""}
						readOnly
						disabled
					/>
				</ApplicationGrid>
			</ApplicationSection>
		</StyledApplicationForm>
	);
};

export default ApplicationForm;
