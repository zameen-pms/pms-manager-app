import { StyledTab, TabOption } from "./Tab.styled";

const Tab = ({ options, tab, setTab }) => {
	return (
		<StyledTab>
			{options?.map((option, index) => (
				<TabOption
					$selected={option === tab}
					key={index}
					onClick={() => setTab(option)}
				>
					{option}
				</TabOption>
			))}
		</StyledTab>
	);
};

export default Tab;
