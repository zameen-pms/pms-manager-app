import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPropertyById from "../../features/api/properties/getPropertyById";
import { useSelector } from "react-redux";
import { getUser } from "../../features/app/authSlice";
import Button from "../../features/ui/button/Button";
import ControlBar from "../../features/ui/controlBar/ControlBar";
import Tab from "../../features/ui/tab/Tab";
import Input from "../../features/ui/input/Input";
import updatePropertyDataById from "../../features/api/propertyData/updatePropertyDataById";

const Property = () => {
	const { propertyId } = useParams();
	const user = useSelector(getUser);
	const [property, setProperty] = useState(null);
	const [propertyData, setPropertyData] = useState(null);
	const [canEdit, setCanEdit] = useState(false);
	const [tab, setTab] = useState("General Info");
	const [render, setRender] = useState(null);

	const fetchProperty = async () => {
		try {
			const { data } = await getPropertyById(
				user.accessToken,
				propertyId
			);
			setProperty(data);
			setPropertyData(data?.propertyData || null);
		} catch (err) {
			alert("Unable to fetch property.");
			console.log(err.message);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	useEffect(() => {
		switch (tab) {
			case "General Info":
				setRender(
					<>
						<div className="container">
							<Input
								label="County"
								value={
									propertyData?.generalInformation?.county ||
									""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											county: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Residential Type"
								value={
									propertyData?.generalInformation
										?.residentialType || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											residentialType: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
						<div className="container">
							<Input
								label="List Price (Amount)"
								value={
									propertyData?.generalInformation?.listPrice
										?.amount || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											listPrice: {
												...propertyData
													.generalInformation
													.listPrice,
												amount: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
								type="number"
							/>
							<Input
								label="List Price (Per Sqft)"
								value={
									propertyData?.generalInformation?.listPrice
										?.perSqft || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											listPrice: {
												...propertyData
													.generalInformation
													.listPrice,
												perSqft: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
								type="number"
							/>
						</div>
						<div className="container">
							<Input
								label="Sale Price (Amount)"
								value={
									propertyData?.generalInformation?.salePrice
										?.amount || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											salePrice: {
												...propertyData
													.generalInformation
													.salePrice,
												amount: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
								type="number"
							/>
							<Input
								label="Sale Price (Per Sqft)"
								value={
									propertyData?.generalInformation?.salePrice
										?.perSqft || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											salePrice: {
												...propertyData
													.generalInformation
													.salePrice,
												perSqft: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
								type="number"
							/>
						</div>
						<div className="container">
							<Input
								label="Number of Beds"
								value={
									propertyData?.generalInformation
										?.numberBeds || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											numberBeds: e.target.value,
										},
									})
								}
								disabled={!canEdit}
								type="number"
							/>
							<Input
								label="Number of Full Baths"
								value={
									propertyData?.generalInformation
										?.numberBaths?.full || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											numberBaths: {
												...propertyData
													.generalInformation
													.numberBaths,
												full: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
								type="number"
							/>
							<Input
								label="Number of Half Baths"
								value={
									propertyData?.generalInformation
										?.numberBaths?.half || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											numberBaths: {
												...propertyData
													.generalInformation
													.numberBaths,
												half: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
								type="number"
							/>
						</div>
						<div className="container">
							<Input
								label="Subdivision"
								value={
									propertyData?.generalInformation
										?.subdivision || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											subdivision: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Year Built"
								value={
									propertyData?.generalInformation
										?.yearBuilt || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											yearBuilt: e.target.value,
										},
									})
								}
								disabled={!canEdit}
								type="number"
							/>
							<Input
								label="Total Acres"
								value={
									propertyData?.generalInformation
										?.totalAcres || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											totalAcres: e.target.value,
										},
									})
								}
								disabled={!canEdit}
								type="number"
							/>
							<Input
								label="Variable Acres"
								value={
									propertyData?.generalInformation
										?.variableAcres || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											variableAcres: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
						<div className="container">
							<Input
								label="In City Limits"
								value={
									propertyData?.generalInformation
										?.inCityLimits || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											inCityLimits: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Road Frontage"
								value={
									propertyData?.generalInformation
										?.roadFrontage || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											roadFrontage: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Zoning"
								value={
									propertyData?.generalInformation?.zoning ||
									""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											zoning: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Parcel Number"
								value={
									propertyData?.generalInformation
										?.parcelNumber || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											parcelNumber: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
						<div className="container">
							<Input
								label="Taxes (Assessed)"
								value={
									propertyData?.generalInformation?.taxes
										?.assessed || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											taxes: {
												...propertyData
													.generalInformation.taxes,
												assessed: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Taxes (Type)"
								value={
									propertyData?.generalInformation?.taxes
										?.type || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											taxes: {
												...propertyData
													.generalInformation.taxes,
												type: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Taxes (Total)"
								value={
									propertyData?.generalInformation?.taxes
										?.total || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										generalInformation: {
											...propertyData.generalInformation,
											taxes: {
												...propertyData
													.generalInformation.taxes,
												total: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
								type="number"
							/>
						</div>
					</>
				);
				break;
			default:
				setRender(<p>{`Unknown tab: ${tab}`}</p>);
		}
	}, [tab, canEdit, propertyData]);

	const handleSubmit = async (e) => {
		e?.preventDefault();
		try {
			await updatePropertyDataById(
				user.accessToken,
				propertyData._id,
				propertyData
			);
			handleEditClick();
			alert("Property has been updated.");
		} catch (err) {
			alert("Unable to save property data.");
			console.log(err.message);
		}
	};

	const handleEditClick = () => {
		if (canEdit) {
			setCanEdit(false);
			fetchProperty();
		} else {
			setCanEdit(true);
		}
	};

	return (
		<section className="column gap-1">
			<div className="row justify-sb align-center">
				<ControlBar text="Back to Properties">
					<h4>{property?.address?.street || "Property Data"}</h4>
					<div className="row align-center gap-05">
						<Button onClick={handleEditClick}>
							{canEdit ? "Cancel" : "Edit"}
						</Button>
						{canEdit && (
							<Button onClick={handleSubmit}>Save</Button>
						)}
					</div>
				</ControlBar>
			</div>
			<Tab
				options={[
					"General Info",
					"Features",
					"Purchase Data",
					"Rooms",
					"Provider Info",
				]}
				tab={tab}
				setTab={setTab}
			/>
			<form className="column gap-1">
				{propertyData ? render : <h4>Loading Property Data...</h4>}
			</form>
		</section>
	);
};

export default Property;
