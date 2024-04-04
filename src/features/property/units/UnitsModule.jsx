import PageTitle from "../../ui/pageTitle/PageTitle";
import UnitForm from "./unit/UnitForm";

const UnitsModule = ({ property, canEdit }) => {
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
