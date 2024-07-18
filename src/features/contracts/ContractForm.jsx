import { useEffect, useState } from "react";
import Button from "../ui/button/Button";
import FileUpload from "../ui/fileUpload/FileUpload";
import Input from "../ui/input/Input";
import { useSelector } from "react-redux";
import { getUser } from "../app/authSlice";
import getUsers from "../api/users/getUsers";
import UserSearchDropdown from "./UserSearchDropdown";

const ContractForm = ({
	contract,
	setContract,
	files,
	setSelectedFiles,
	canEdit,
	handleSave,
}) => {
	const { accessToken } = useSelector(getUser);
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState("");

	const fetchUsers = async () => {
		try {
			const { data } = await getUsers(accessToken);
			setUsers(data);
		} catch (err) {
			alert("Unable to fetch users.");
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const handleDropdown = (selected) => {
		setContract({ ...contract, parties: selected });
	};

	return (
		<form onSubmit={handleSave} className="column gap-2">
			<div className="grid">
				<FileUpload
					allowedTypes={["application/pdf"]}
					setSelectedFiles={setSelectedFiles}
					multiple={false}
					text={
						files?.length > 0
							? `Uploaded: ${files[0].name}`
							: "Upload PDF Document"
					}
				/>
			</div>
			<div className="grid">
				<Input
					label="Contract Title"
					value={contract?.title || ""}
					onChange={(e) =>
						setContract({ ...contract, title: e.target.value })
					}
					required
				/>
				<div className="column gap-05">
					<Input
						label="Parties"
						placeholder="Search Users..."
						value={search || ""}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<UserSearchDropdown
						options={users}
						onChange={handleDropdown}
						search={search}
					/>
				</div>
			</div>
			{canEdit && <Button type="submit">Save</Button>}
		</form>
	);
};

export default ContractForm;
