import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setContent } from "../../features/app/globalSlice";
import { MdArrowBack } from "react-icons/md";
import getApplicationById from "../../features/api/applications/getApplicationById";
import { getUser } from "../../features/app/authSlice";
import Tab from "../../features/ui/tab/Tab";
import ApplicationOverview from "../../features/applications/ApplicationOverview";
import ApplicationForm from "../../features/applications/ApplicationForm";
import Button from "../../features/ui/button/Button";
import updateApplicationById from "../../features/api/applications/updateApplicationById";

const Application = () => {
	const { applicationId } = useParams();
	const { accessToken } = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [application, setApplication] = useState(null);
	const [tab, setTab] = useState("Overview");
	const [render, setRender] = useState(null);
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

	const handleEditClick = async () => {
		try {
			if (canEdit) {
				await fetchApp();
				setCanEdit(false);
			} else {
				setCanEdit(true);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleSave = async () => {
		try {
			await updateApplicationById(
				accessToken,
				applicationId,
				application
			);
			handleEditClick();
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		dispatch(
			setContent(
				<div className="row align-center justify-sb">
					<div className="row align-center gap-05">
						<MdArrowBack
							className="back-arrow"
							onClick={() => navigate(-1)}
						/>
						{application ? (
							<h3>
								Application:{" "}
								{`${application?.personal?.firstName} ${application?.personal?.lastName}`}
							</h3>
						) : (
							<h3>Application</h3>
						)}
					</div>
					<div className="row gap-05">
						{canEdit && <Button onClick={handleSave}>Save</Button>}
						<Button onClick={handleEditClick}>
							{canEdit ? "Cancel" : "Edit"}
						</Button>
					</div>
				</div>
			)
		);
	}, [application, canEdit]);

	useEffect(() => {
		if (tab === "Overview") {
			setRender(
				<ApplicationOverview
					canEdit={canEdit}
					application={application}
					setApplication={setApplication}
				/>
			);
		} else {
			setRender(<ApplicationForm application={application} />);
		}
	}, [tab, application, canEdit]);

	if (!application) return <p>Retrieving Application...</p>;

	return (
		<>
			<Tab
				options={["Overview", "Application"]}
				tab={tab}
				setTab={setTab}
			/>
			{render}
		</>
	);
};

export default Application;
