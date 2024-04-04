import { useEffect, useState } from "react";
import PageTitle from "../../ui/pageTitle/PageTitle";
import UnitForm from "./unit/UnitForm";

const UnitsModule = ({ property, canEdit }) => {
	const [unit, setUnit] = useState({});

	useEffect(() => {
		if (
			property?.type === "Single-Family" &&
			property?.units?.length === 1
		) {
			setUnit(property.units[0]);
		}
	}, [property]);

	const handleSave = async (e) => {
		e?.preventDefault();
		try {
			// save unit
		} catch (err) {
			alert("Unable to save property details.");
			console.log(err);
		}
	};

	return property?.type === "Single-Family" ? (
		property?.units?.length === 0 ? (
			<h3>Error: Missing Unit</h3>
		) : (
			<>
				<PageTitle showBack>Details</PageTitle>
				<UnitForm
					unit={unit}
					setUnit={setUnit}
					canEdit={canEdit}
					handleSave={handleSave}
				/>
			</>
		)
	) : (
		<>{/* TODO: Implement when we have multi-family */}</>
	);
};

export default UnitsModule;
