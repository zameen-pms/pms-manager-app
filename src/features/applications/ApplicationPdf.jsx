import {
	Document,
	Font,
	Page,
	StyleSheet,
	Text,
	View,
} from "@react-pdf/renderer";

Font.register({
	family: "Roboto",
	src: "http://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf",
});

const AppInput = (props) => {
	if (!props?.title || !props?.content) return <></>;

	const styles = StyleSheet.create({
		input: {
			width: "100%",
		},
		title: {
			fontSize: 10,
			color: "#636e72",
			marginBottom: 4,
		},
		content: {
			fontSize: 10,
			color: "#000",
		},
	});

	return (
		<View style={styles.input}>
			<Text style={styles.title}>{props.title}</Text>
			<Text style={styles.content}>{props.content}</Text>
		</View>
	);
};

const ApplicationPdf = ({ app }) => {
	const styles = StyleSheet.create({
		body: {
			padding: 32,
		},
		h1: {
			fontSize: 20,
			fontFamily: "Roboto",
			textAlign: "center",
			marginBottom: 16,
		},
		h2: {
			fontSize: 16,
			fontFamily: "Roboto",
			color: "#3498db",
			marginBottom: 6,
		},
		h3: {
			fontSize: 8,
			fontFamily: "Roboto",
		},
		p: {
			fontSize: 10,
			color: "#000",
			marginBottom: 8,
		},
		section: {
			marginBottom: 16,
		},
		row: {
			display: "flex",
			flexDirection: "row",
			marginBottom: 8,
		},
	});

	return (
		<Document>
			<Page size="A4" style={styles.body}>
				<Text style={styles.h1}>
					Rental Application: {app.property?.address?.street || ""}
				</Text>

				<View style={styles.section}>
					<Text style={styles.h2}>Applicant Information</Text>
					<View style={styles.row}>
						<AppInput
							title="Name: First"
							content={app?.applicant?.firstName}
						/>
						<AppInput
							title="Middle"
							content={app?.applicant?.middleName}
						/>
						<AppInput
							title="Last"
							content={app?.applicant?.lastName}
						/>
						<AppInput
							title="Birth Date"
							content={app?.applicant?.dob}
						/>
						<AppInput title="SSN" content={app?.applicant?.ssn} />
					</View>
					<View style={styles.row}>
						<AppInput
							title="Email Address"
							content={app?.applicant?.email}
						/>
						<AppInput
							title="Home Phone"
							content={app?.applicant?.homePhone}
						/>
						<AppInput
							title="Cell Phone"
							content={app?.applicant?.cellPhone}
						/>
						<AppInput
							title="Driver's License"
							content={app?.applicant?.driversLicense}
						/>
					</View>
					<Text style={styles.h3}>Other Occupants Under 18:</Text>
					{app?.occupantA?.name && (
						<View style={styles.row}>
							<AppInput
								title="Name"
								content={app?.occupantA?.name}
							/>
							<AppInput
								title="Birth Date"
								content={app?.occupantA?.dob}
							/>
							<AppInput
								title="Relationship to Applicant"
								content={app?.occupantA?.relation}
							/>
						</View>
					)}
					{app?.occupantB?.name && (
						<View style={styles.row}>
							<AppInput
								title="Name"
								content={app?.occupantB?.name}
							/>
							<AppInput
								title="Birth Date"
								content={app?.occupantB?.dob}
							/>
							<AppInput
								title="Relationship to Applicant"
								content={app?.occupantB?.relation}
							/>
						</View>
					)}
					{app?.occupantC?.name && (
						<View style={styles.row}>
							<AppInput
								title="Name"
								content={app?.occupantC?.name}
							/>
							<AppInput
								title="Birth Date"
								content={app?.occupantC?.dob}
							/>
							<AppInput
								title="Relationship to Applicant"
								content={app?.occupantC?.relation}
							/>
						</View>
					)}
				</View>

				<View style={styles.section}>
					<Text style={styles.h2}>Rental History</Text>
					<Text style={styles.h3}>Current Residence</Text>
					<View style={styles.row}>
						<AppInput
							title="Address"
							content={app?.currentResidence?.address}
						/>
						<AppInput
							title="City"
							content={app?.currentResidence?.city}
						/>
						<AppInput
							title="State"
							content={app?.currentResidence?.state}
						/>
						<AppInput
							title="Zip"
							content={app?.currentResidence?.zip}
						/>
					</View>
					<View style={styles.row}>
						<AppInput
							title="Monthly Rent"
							content={app?.currentResidence?.montlyRent}
						/>
						<AppInput
							title="Date of Residency"
							content={app?.currentResidence?.dates}
						/>
						<AppInput
							title="Reason for Moving"
							content={app?.currentResidence?.movingReason}
						/>
					</View>
					<View style={styles.row}>
						<AppInput
							title="Manager/Owner's Name"
							content={app?.currentResidence?.managerName}
						/>
						<AppInput
							title="Manager/Owner's Number"
							content={app?.currentResidence?.managerNumber}
						/>
					</View>

					<Text style={styles.h3}>Previous Residence</Text>
					<View style={styles.row}>
						<AppInput
							title="Address"
							content={app?.previousResidence?.address}
						/>
						<AppInput
							title="City"
							content={app?.previousResidence?.city}
						/>
						<AppInput
							title="State"
							content={app?.previousResidence?.state}
						/>
						<AppInput
							title="Zip"
							content={app?.previousResidence?.zip}
						/>
					</View>
					<View style={styles.row}>
						<AppInput
							title="Monthly Rent"
							content={app?.previousResidence?.montlyRent}
						/>
						<AppInput
							title="Date of Residency"
							content={app?.previousResidence?.dates}
						/>
						<AppInput
							title="Reason for Moving"
							content={app?.previousResidence?.movingReason}
						/>
					</View>
					<View style={styles.row}>
						<AppInput
							title="Manager/Owner's Name"
							content={app?.previousResidence?.managerName}
						/>
						<AppInput
							title="Manager/Owner's Number"
							content={app?.previousResidence?.managerNumber}
						/>
					</View>
				</View>

				<View style={styles.section}>
					<Text style={styles.h2}>Employment History</Text>
					<Text style={styles.h3}>Current Employer</Text>
					<View style={styles.row}>
						<AppInput
							title="Name"
							content={app?.currentEmployer?.name}
						/>
						<AppInput
							title="Occupation"
							content={app?.currentEmployer?.occupation}
						/>
					</View>
					<View style={styles.row}>
						<AppInput
							title="Address"
							content={app?.currentEmployer?.address}
						/>
						<AppInput
							title="Phone"
							content={app?.currentEmployer?.phone}
						/>
						<AppInput
							title="Dates of Employment"
							content={app?.currentEmployer?.dates}
						/>
					</View>
					<View style={styles.row}>
						<AppInput
							title="Name of Supervisor"
							content={app?.currentEmployer?.supervisorName}
						/>
						<AppInput
							title="Monthly Pay"
							content={app?.currentEmployer?.monthlyPay}
						/>
					</View>

					<Text style={styles.h3}>Previous Employer</Text>
					<View style={styles.row}>
						<AppInput
							title="Name"
							content={app?.previousEmployer?.name}
						/>
						<AppInput
							title="Occupation"
							content={app?.previousEmployer?.occupation}
						/>
					</View>
					<View style={styles.row}>
						<AppInput
							title="Address"
							content={app?.previousEmployer?.address}
						/>
						<AppInput
							title="Phone"
							content={app?.previousEmployer?.phone}
						/>
						<AppInput
							title="Dates of Employment"
							content={app?.previousEmployer?.dates}
						/>
					</View>
					<View style={styles.row}>
						<AppInput
							title="Name of Supervisor"
							content={app?.previousEmployer?.supervisorName}
						/>
						<AppInput
							title="Monthly Pay"
							content={app?.previousEmployer?.monthlyPay}
						/>
					</View>
				</View>

				<View style={styles.section}>
					<Text style={styles.h2}>Credit History</Text>

					<Text style={styles.h3}>Checkings Account</Text>
					<View style={styles.row}>
						<AppInput
							title="Bank/Institution"
							content={app?.checkings?.bank}
						/>
						<AppInput
							title="Deposit Balance / Balance Owed"
							content={app?.checkings?.balance}
						/>
					</View>

					<Text style={styles.h3}>Savings Account</Text>
					<View style={styles.row}>
						<AppInput
							title="Bank/Institution"
							content={app?.savings?.bank}
						/>
						<AppInput
							title="Deposit Balance / Balance Owed"
							content={app?.savings?.balance}
						/>
					</View>

					<Text style={styles.h3}>Credit Card</Text>
					<View style={styles.row}>
						<AppInput
							title="Bank/Institution"
							content={app?.creditCard?.bank}
						/>
						<AppInput
							title="Deposit Balance / Balance Owed"
							content={app?.creditCard?.balance}
						/>
					</View>

					<Text style={styles.h3}>Auto Loan</Text>
					<View style={styles.row}>
						<AppInput
							title="Bank/Institution"
							content={app?.autoLoan?.bank}
						/>
						<AppInput
							title="Deposit Balance / Balance Owed"
							content={app?.autoLoan?.balance}
						/>
					</View>

					<Text style={styles.h3}>Additional Debt</Text>
					<View style={styles.row}>
						<AppInput
							title="Bank/Institution"
							content={app?.otherDebt?.bank}
						/>
						<AppInput
							title="Deposit Balance / Balance Owed"
							content={app?.otherDebt?.balance}
						/>
					</View>
				</View>

				<View style={styles.section}>
					<Text style={styles.h2}>References</Text>
					<View style={styles.row}>
						<AppInput title="Name" content={app?.reference?.name} />
						<AppInput
							title="Phone Number"
							content={app?.reference?.number}
						/>
						<AppInput
							title="Relationship"
							content={app?.reference?.relationship}
						/>
					</View>
					<View style={styles.row}>
						<AppInput
							title="Name"
							content={app?.otherReference?.name}
						/>
						<AppInput
							title="Phone Number"
							content={app?.otherReference?.number}
						/>
						<AppInput
							title="Relationship"
							content={app?.otherReference?.relationship}
						/>
					</View>
				</View>

				<View style={styles.section}>
					<Text style={styles.h2}>General Information</Text>
					<Text style={styles.p}>
						Have you ever been late or delinquent on rent?{" "}
						{app?.lateOnRent?.response || ""}
						{"-"}
						{app?.lateOnRent?.reason || ""}
					</Text>
					<Text style={styles.p}>
						Have you ever been party to a lawsuit?{" "}
						{app?.partyToLawsuit?.response || ""}
						{"-"}
						{app?.partyToLawsuit?.reason || ""}
					</Text>
					<Text style={styles.p}>
						Do you smoke? {app?.doesSmoke || "N/A"}
					</Text>
					<Text style={styles.p}>
						Do you have pets? {app?.hasPets?.response || ""}
						{"-"}
						{app?.hasPets?.info || ""}
					</Text>
					<Text style={styles.p}>
						Why are you moving from your current address?{" "}
						{app?.reasonForMoving || "N/A"}
					</Text>
					<Text style={styles.p}>
						Is there anything negative in your credit or background
						check you want to comment on?{" "}
						{app?.additionalComments || "N/A"}
					</Text>
					<Text style={styles.p}>
						Has application fee been paid?{" "}
						{app?.hasPaid ? "Yes" : "No"}
					</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.h2}>Additional Questions</Text>
					<Text style={styles.p}>
						Additional Questions? {app?.questions || "N/A"}
					</Text>
				</View>

				<View style={styles.section}>
					<Text style={styles.h2}>Agreement & Authorization</Text>
					<View style={styles.row}>
						<AppInput
							title="Applicant Signature"
							content={app?.signature?.name}
						/>
						<AppInput title="Date" content={app?.signature?.date} />
					</View>
				</View>
			</Page>
		</Document>
	);
};

export default ApplicationPdf;
