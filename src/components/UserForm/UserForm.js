import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import FormStyle from "./UserForm.module.css";
import {usersService} from "../../services";
import {userValidator} from "../../validators";

export default function UserForm({setUsers, usersUpdate, setUsersUpdate}) {
	const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
		resolver: joiResolver(userValidator),
		mode: "all"
	});

	useEffect(() => {
		if (usersUpdate) {
			setValue("name", usersUpdate.name, {shouldValidate: true});
			setValue("username", usersUpdate.username, {shouldValidate: true});
		}
	}, [usersUpdate]);

	const submit = async (user) => {
		if (usersUpdate) {
			const {data} = await usersService.update(usersUpdate.id, user);
			setUsers((users) => {
				let findUsers = users.find(value => value.id === usersUpdate.id);
				Object.assign(findUsers, data);
				reset();
				return [...users];
			});
		} else {
			const {data} = await usersService.create(user);
			setUsers(users => [...users, data]);
		}
		reset();
	};

	return (
		<form className={FormStyle.UserForm} onSubmit={handleSubmit(submit)}>
			<input type="text" placeholder="name" {...register("name")}/>
			{errors.name && <span>{errors.name.message}</span>}
			<input type="text" placeholder="username" {...register("username")}/>
			<button disabled={!isValid}>{usersUpdate ? "update" : "Save"}</button>
		</form>
	);
}