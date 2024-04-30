import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPropertyById from "../../../features/api/properties/getPropertyById";
import { useSelector } from "react-redux";
import { getUser } from "../../../features/app/authSlice";
import Button from "../../../features/ui/button/Button";
import ControlBar from "../../../features/ui/controlBar/ControlBar";
import Tab from "../../../features/ui/tab/Tab";
import Input from "../../../features/ui/input/Input";
import updatePropertyDataById from "../../../features/api/propertyData/updatePropertyDataById";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
										?.numberBeds || "0"
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
										?.numberBaths?.full || "0"
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
										?.numberBaths?.half || "0"
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
			case "Features":
				setRender(
					<>
						<div className="container">
							<Input
								label="Interior Features"
								value={
									propertyData?.features?.interiorFeatures ||
									""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											interiorFeatures: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Exterior Features"
								value={
									propertyData?.features?.exteriorFeatures ||
									""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											exteriorFeatures: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
						<div className="container">
							<Input
								label="Appliances"
								value={propertyData?.features?.appliances || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											appliances: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Style"
								value={propertyData?.features?.style || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											style: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Basement"
								value={propertyData?.features?.basement || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											basement: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
						<div className="container">
							<Input
								label="Foundation"
								value={propertyData?.features?.foundation || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											foundation: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Garage Parking"
								value={
									propertyData?.features?.garageParking || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											garageParking: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Heating"
								value={propertyData?.features?.heating || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											heating: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
						<div className="container">
							<Input
								label="Cooling"
								value={propertyData?.features?.cooling || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											cooling: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Flooring"
								value={propertyData?.features?.flooring || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											flooring: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Fencing"
								value={propertyData?.features?.fencing || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											fencing: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
						<div className="container">
							<Input
								label="Financing"
								value={propertyData?.features?.financing || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											financing: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>

							<Input
								label="Roof"
								value={propertyData?.features?.roof || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											roof: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>

							<Input
								label="Exterior Finish"
								value={
									propertyData?.features?.exteriorFinish || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											exteriorFinish: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
						<div className="container">
							<Input
								label="Utilities"
								value={propertyData?.features?.utilities || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											utilities: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>

							<Input
								label="Porch/Patio/Deck"
								value={
									propertyData?.features?.porchPatioDeck || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											porchPatioDeck: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>

							<Input
								label="Attic"
								value={propertyData?.features?.attic || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											attic: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
						<div className="container">
							<Input
								label="Possession"
								value={propertyData?.features?.possession || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											possession: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Fireplace"
								value={propertyData?.features?.fireplace || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											fireplace: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Lot Description"
								value={
									propertyData?.features?.lotDescription || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											lotDescription: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
						<div className="container">
							<Input
								label="Lockbox Location"
								value={
									propertyData?.features?.lockboxLocation ||
									""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											lockboxLocation: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Levels"
								value={propertyData?.features?.levels || ""}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										features: {
											...propertyData.features,
											levels: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
					</>
				);
				break;
			case "Purchase Data":
				setRender(
					<>
						<div className="container">
							<Input
								label="Listing Date"
								value={
									propertyData?.purchaseData?.listingDate.split(
										"T"
									)[0] || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										purchaseData: {
											...propertyData.purchaseData,
											listingDate: e.target.value,
										},
									})
								}
								disabled={!canEdit}
								type="date"
							/>
							<Input
								label="Sold Date"
								value={
									propertyData?.purchaseData?.soldDate.split(
										"T"
									)[0] || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										purchaseData: {
											...propertyData.purchaseData,
											soldDate: e.target.value,
										},
									})
								}
								disabled={!canEdit}
								type="date"
							/>
							<Input
								label="Status Change Date"
								value={
									propertyData?.purchaseData?.statusChangeDate.split(
										"T"
									)[0] || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										purchaseData: {
											...propertyData.purchaseData,
											statusChangeDate: e.target.value,
										},
									})
								}
								disabled={!canEdit}
								type="date"
							/>
							<Input
								label="Pending Date"
								value={
									propertyData?.purchaseData?.pendingDate.split(
										"T"
									)[0] || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										purchaseData: {
											...propertyData.purchaseData,
											pendingDate: e.target.value,
										},
									})
								}
								disabled={!canEdit}
								type="date"
							/>
						</div>
						<div className="container">
							<Input
								label="Original List Price"
								value={
									propertyData?.purchaseData
										?.originalListPrice || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										purchaseData: {
											...propertyData.purchaseData,
											originalListPrice: e.target.value,
										},
									})
								}
								disabled={!canEdit}
								type="number"
							/>
							<Input
								label="Sold Price"
								value={
									propertyData?.purchaseData?.soldPrice || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										purchaseData: {
											...propertyData.purchaseData,
											soldPrice: e.target.value,
										},
									})
								}
								disabled={!canEdit}
								type="number"
							/>
						</div>
						<div className="container">
							<Input
								label="How Sold"
								value={
									propertyData?.purchaseData?.howSold || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										purchaseData: {
											...propertyData.purchaseData,
											howSold: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Closing Costs"
								value={
									propertyData?.purchaseData?.closingCosts ||
									""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										purchaseData: {
											...propertyData.purchaseData,
											closingCosts: e.target.value,
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
					</>
				);
				break;
			case "Rooms":
				setRender(
					<>
						<div className="container">
							{canEdit ? (
								<ReactQuill
									theme="snow"
									value={propertyData?.rooms}
									style={{
										width: "100%",
										height: "400px",
										marginBottom: "40px",
									}}
									onChange={(content) =>
										setPropertyData({
											...propertyData,
											rooms: content,
										})
									}
								/>
							) : (
								<div
									style={{ padding: "1rem 2rem" }}
									dangerouslySetInnerHTML={{
										__html:
											propertyData?.rooms ||
											"<h4>No rooms yet.</h4>",
									}}
								/>
							)}
						</div>
					</>
				);
				break;
			case "Provider Info":
				setRender(
					<>
						<div className="container">
							<Input
								label="Listing Office - Name"
								value={
									propertyData?.provider?.listingOffice
										?.name || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										provider: {
											...propertyData.provider,
											listingOffice: {
												...propertyData.provider
													.listingOffice,
												name: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Listing Office - Phone Number"
								value={
									propertyData?.provider?.listingOffice
										?.phoneNumber || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										provider: {
											...propertyData.provider,
											listingOffice: {
												...propertyData.provider
													.listingOffice,
												phoneNumber: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
						<div className="container">
							<Input
								label="Listing Member - Name"
								value={
									propertyData?.provider?.listingMember
										?.name || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										provider: {
											...propertyData.provider,
											listingMember: {
												...propertyData.provider
													.listingMember,
												name: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Listing Member - Phone Number"
								value={
									propertyData?.provider?.listingMember
										?.phoneNumber || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										provider: {
											...propertyData.provider,
											listingMember: {
												...propertyData.provider
													.listingMember,
												phoneNumber: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
						<div className="container">
							<Input
								label="Selling Member - Name"
								value={
									propertyData?.provider?.sellingMember
										?.name || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										provider: {
											...propertyData.provider,
											sellingMember: {
												...propertyData.provider
													.sellingMember,
												name: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
							/>
							<Input
								label="Selling Member - Phone Number"
								value={
									propertyData?.provider?.sellingMember
										?.phoneNumber || ""
								}
								onChange={(e) =>
									setPropertyData({
										...propertyData,
										provider: {
											...propertyData.provider,
											sellingMember: {
												...propertyData.provider
													.sellingMember,
												phoneNumber: e.target.value,
											},
										},
									})
								}
								disabled={!canEdit}
							/>
						</div>
					</>
				);
				break;
			case "Additional Notes":
				setRender(
					<>
						<div className="container">
							{canEdit ? (
								<ReactQuill
									theme="snow"
									value={propertyData?.notes}
									style={{
										width: "100%",
										height: "400px",
										marginBottom: "40px",
									}}
									onChange={(content) =>
										setPropertyData({
											...propertyData,
											notes: content,
										})
									}
								/>
							) : (
								<div
									style={{ padding: "1rem 2rem" }}
									dangerouslySetInnerHTML={{
										__html: propertyData?.notes || "",
									}}
								/>
							)}
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
					"Additional Notes",
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
