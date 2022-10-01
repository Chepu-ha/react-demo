import {useReducer} from "react";
import {useForm} from "react-hook-form";

import AnimalsStyle from "./Animals.module.css";

const init = (initialValue) => {
	return {...initialValue, dogNames: [], catNames: []};
};

const reducer = (state, action) => {
	switch (action.type) {
		case "DOG":
			state.dogNames.push("Dog from input");
			return {...state};
		case "CAT":
			state.catNames.push("Cat from input");
			return {...state};
		default:
			return {...state};
	}
};

export function Animals() {

	const [state, dispatch] = useReducer(reducer, {}, init);

	const {register, handleSubmit} = useForm({mode: "all"});

	const formSubmit = (data) => {
		console.log(data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(formSubmit)} className={AnimalsStyle.AnimalsForm}>
				<input type="text" placeholder={"Enter new dog"} {...register("dogInput")}/>
				<button onClick={() => {
					dispatch({type: "DOG"});
				}}>Dog
				</button>
				<input type="text" placeholder={"Enter new cat"} {...register("catInput")}/>
				<button onClick={() => {
					dispatch({type: "CAT"});
				}}>Cat
				</button>
			</form>
			<hr/>
			<div className={AnimalsStyle.Animals}>
				<div className={AnimalsStyle.Animal}>
					{state.dogNames.map((dogName, index) => <div key={index}>{dogName}</div>)}
				</div>
				<div className={AnimalsStyle.Animal}>
					{state.catNames.map((catName, index) => <div key={index}>{catName}</div>)}
				</div>
			</div>
		</div>
	);
}