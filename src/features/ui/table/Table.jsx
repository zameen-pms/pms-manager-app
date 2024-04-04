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
			{rows ? (
				<DataGrid
					className="custom-data-grid"
					autoHeight
					rows={rows}
					columns={columns}
					initialState={initialState}
					pageSizeOptions={[10, 25, 50]}
					{...tableOptions}
				/>
			) : (
				<h4>Loading...</h4>
			)}
		</StyledTable>
	);
};

export default Table;
