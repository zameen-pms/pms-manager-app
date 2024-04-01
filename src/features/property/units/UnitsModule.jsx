import { useNavigate } from "react-router-dom";
import Button from "../../ui/button/Button";
import { StyledUnitsModule } from "./UnitsModule.styled";
import Unit from "./unit/Unit";
import PageTitle from "../../ui/pageTitle/PageTitle";

const UnitsModule = ({ property }) => {
	const navigate = useNavigate();

	const handleRowClick = ({ row }) => navigate(`units/${row._id}`);

	return property?.type === "Single-Family" &&
		property?.units?.length === 1 ? (
		<>
			<PageTitle showBack>Unit Details</PageTitle>
			<Unit unitId={property.units[0]} />
		</>
	) : (
		<StyledUnitsModule>
			<div className="row justify-sb align-center">
				<h3>Units</h3>
				<Button
					onClick={() => navigate(`/properties/${property._id}/add`)}
				>
					Add Unit
				</Button>
			</div>
		</StyledUnitsModule>
	);
};

export default UnitsModule;
