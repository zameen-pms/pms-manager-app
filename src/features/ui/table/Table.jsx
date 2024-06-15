import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({ rows, columns, onClick }) => {
	return (
		<Box>
			{rows?.length === 0 ? (
				<Typography variant="h6" align="center" color="textSecondary">
					No data available
				</Typography>
			) : (
				<DataGrid
					rows={rows}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 10,
							},
						},
					}}
					pageSizeOptions={[10, 25, 50]}
					onRowClick={(params) => onClick && onClick(params)}
					getRowClassName={() => "data-grid-row"}
				/>
			)}
		</Box>
	);
};

export default Table;
