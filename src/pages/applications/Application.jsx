import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../features/ui/button/Button";
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
	const [canEdit, setCanEdit] = useState(false);

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
				<div className="row align-center justify-sb">
					<div className="row align-center gap-05">
						<MdArrowBack
							className="back-arrow"
							onClick={() => navigate(-1)}
						/>
						<h3>Application</h3>
					</div>
					<div className="row align-center gap-05">
						{canEdit && <Button>Save</Button>}
						<Button onClick={() => setCanEdit(!canEdit)}>
							{canEdit ? "Cancel" : "Edit Application"}
						</Button>
					</div>
				</div>
			)
		);
	}, [canEdit]);

	if (!application) return <p>Retrieving Application...</p>;

	return (
		<div className="column gap-2">
			<div className="column gap-1">
				<h3>Income Files:</h3>
				<ApplicationIncomeFiles
					files={application?.incomeFiles || []}
				/>
			</div>
			<div className="column gap-1">
				<h3>Application:</h3>
				<PDFViewer style={{ height: "90vh", width: "auto" }}>
					<ApplicationPdf app={application} />
				</PDFViewer>
			</div>
		</div>
	);
};

export default Application;
