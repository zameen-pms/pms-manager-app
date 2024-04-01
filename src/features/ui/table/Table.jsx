import { DataGrid } from "@mui/x-data-grid";
import { StyledTable } from "./Table.styled";

const initialState = {
	pagination: {
		paginationModel: { page: 0, pageSize: 10 },
	},
};

const Table = ({ rows, columns, tableOptions }) => {
	return (
		<StyledTable>
			<DataGrid
				className="custom-data-grid"
				autoHeight
				rows={rows}
				columns={columns}
				initialState={initialState}
				pageSizeOptions={[10, 25, 50]}
				{...tableOptions}
			/>
		</StyledTable>
	);
};

export default Table;
