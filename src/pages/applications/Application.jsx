import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import { PDFViewer } from "@react-pdf/renderer";
import getApplicationById from "../../features/api/applications/getApplicationById";
import { getUser } from "../../features/app/authSlice";
import ApplicationPdf from "../../features/applications/ApplicationPdf";
import ApplicationIncomeFiles from "../../features/applications/ApplicationIncomeFiles";

const Application = () => {
	const { applicationId } = useParams();
	const { accessToken } = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [application, setApplication] = useState(null);

	const fetchApp = async () => {
		try {
			const { data } = await getApplicationById(
				accessToken,
				applicationId
			);
			setApplication(data);
		} catch (err) {
			alert("Unable to fetch application");
			console.log(err.message);
			navigate("/applications");
		}
	};

	useEffect(() => {
		fetchApp();
	}, []);

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center gap-05">
					<MdArrowBack
						className="back-arrow"
						onClick={() => navigate(-1)}
					/>
					{application ? (
						<h3>
							Application:{" "}
							{`${application?.applicant?.firstName} ${application?.applicant?.lastName}`}
						</h3>
					) : (
						<h3>Application</h3>
					)}
				</div>
			)
		);
	}, [application]);

	if (!application) return <p>Retrieving Application...</p>;

	return (
		<div className="column gap-2">
			<div className="column gap-1">
				<h4>Payment Status:</h4>
				<p>Has paid: {application?.hasPaid ? "YES" : "NO"}</p>
			</div>
			<div className="column gap-1">
				<h4>Income Files:</h4>
				<ApplicationIncomeFiles
					files={application?.incomeFiles || []}
				/>
			</div>
			<div className="column gap-1">
				<h4>Application:</h4>
				<PDFViewer style={{ height: "90vh", width: "auto" }}>
					<ApplicationPdf app={application} />
				</PDFViewer>
			</div>
		</div>
	);
};

export default Application;
