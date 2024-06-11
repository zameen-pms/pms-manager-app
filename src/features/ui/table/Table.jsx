import { DataGrid } from "@mui/x-data-grid";

const Table = ({ rows, columns, onClick }) => {
	return (
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
	);
};

export default Table;
