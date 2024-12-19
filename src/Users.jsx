import {useRef, useState, } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUser, updateUser, deleteUser } from "./app/updateSlice.jsx";


function Users() {
	const [show, setShow] = useState(false);
	const [id, setId] = useState();
	const nom = useRef('');
	const dispatch = useDispatch();
	const data = useSelector((state) => state.update.value);
	
	const ajout = (e) => {
		let id = null;
		if (data.length === 0){
			id = 1;
		}
		else {
			id = data[data.length - 1].id + 1;
		}
		console.log(id);
		e.preventDefault();
		if(nom.current.value.length >= 3){
			dispatch(createUser({id: id, nom: nom.current.value}));
			nom.current.value = "";
		}
	}
	
	const edit = (id, name) => {
		nom.current.value = name;
		setId(id);
		console.log(id);
		setShow(true);
	}
	
	const update = () => {
		dispatch(updateUser({id: id, nom: nom.current.value}));
		setId();
		nom.current.value = "";
		setShow(false);
	}
	
	return (
		<>
			<h1 className="px-3">User Managment System</h1>
			<form className="m-3">
				<div className="mb-3">
					<input type="text" id="user" placeholder="Enter name" ref={nom} className="form-control" />
				</div>
				{!show && <input type="submit" value="Add User" className="btn btn-primary" onClick={(e) => ajout(e)}/>}
				{show && <input type="button" value="Update User" className="btn btn-primary" onClick={() => update()}/>}
			</form>
				{
					data.map(user => {
						return (
							<div key={user.id} className="border border-secondary rounded mx-3 mb-2 p-2 d-flex align-items-center justify-content-between">
								<p>{user.nom}</p>
								<div className="">
									<button onClick={() => edit(user.id, user.nom)} className="btn btn-warning">Edit</button>
									<button onClick={() => dispatch(deleteUser({ id: user.id, nom: user.nom }))} className="btn btn-danger ms-1">Delete</button>
								</div>
							</div>
						)
					})
				}
		</>
	)
}
export default Users;  
