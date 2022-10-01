import {useReducer} from "react";
import {useForm} from "react-hook-form";

import AnimalsStyle from "./Animals.module.css";

const init = (initialValue) => {
	return {...initialValue, dogNames: [], catNames: []};
};

const reducer = (state, action) => {
	switch (action.type) {
		case "DOG":
			if (action.dog) {
				state.dogNames.push(action.dog);
			}
			return {...state};
		case "CAT":
			if (action.cat) {
				state.catNames.push(action.cat);
			}
			return {...state};
		default:
			return {...state};
	}
};

export function Animals() {

	const [state, dispatch] = useReducer(reducer, {}, init);

	const {register, handleSubmit} = useForm({mode: "all"});

	const dogFormSubmit = (data) => {
		dispatch({type: "DOG", dog: data.dogInput})
	};

	const catFormSubmit = (data) => {
		dispatch({type: "CAT", cat: data.catInput})
	};

	return (
		<div>
			<div className={AnimalsStyle.AnimalsForm}>
				<form onSubmit={handleSubmit(dogFormSubmit)}>
					<input type="text" placeholder={"Enter new dog"} {...register("dogInput")}/>
					<button>Dog</button>
				</form>
				<form onSubmit={handleSubmit(catFormSubmit)}>
					<input type="text" placeholder={"Enter new cat"} {...register("catInput")}/>
					<button>Cat</button>
				</form>
			</div>
			<hr/>
			<div className={AnimalsStyle.Animals}>
				<div className={AnimalsStyle.Animal}>
					{state.dogNames.map((dogName, index) => <div key={index}><div>{dogName}</div></div>)}
				</div>
				<div className={AnimalsStyle.Animal}>
					{state.catNames.map((catName, index) => <div key={index}>{catName}</div>)}
				</div>
			</div>
		</div>
	);
}