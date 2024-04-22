import { useParams } from "react-router-dom";
import PageTitle from "../../features/ui/pageTitle/PageTitle";

const Property = () => {
	const { propertyId } = useParams();

	return (
		<section className="column gap-3">
			<div className="row justify-sb align-center">
				<PageTitle showBack>Property Information</PageTitle>
			</div>
		</section>
	);
};

export default Property;
