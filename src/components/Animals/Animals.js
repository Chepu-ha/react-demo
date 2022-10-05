import {useReducer} from "react";
import {useForm} from "react-hook-form";

import AnimalsStyle from "./Animals.module.css";

const init = (initialValue) => {
	return {...initialValue, dogNames: [], catNames: []};
};

const reducer = (state, action) => {
	switch (action.type) {
		case "DOG":
			return {...state, dogNames: [...state.dogNames, action.payload]};
		case "CAT":
			return {...state, catNames: [...state.catNames, action.payload]};
		case "DEL-DOG":
			return {...state, dogNames: state.dogNames.filter(dog => dog !== action.payload)};
		case "DEL-CAT":
			return {...state, catNames: state.catNames.filter(cat => cat !== action.payload)};
		default:
			console.log("Error");
			return {...state};
	}
};

export function Animals() {

	const [state, dispatch] = useReducer(reducer, {}, init);

	const {register, handleSubmit} = useForm({mode: "all"});

	const dogFormSubmit = (data) => {
		dispatch({type: "DOG", payload: data.dogInput});
	};

	const catFormSubmit = (data) => {
		dispatch({type: "CAT", payload: data.catInput});
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
					{state.dogNames.map((dogName, index) =>
						<div className={AnimalsStyle.SubAnimal} key={index}>
							<div>{dogName}</div>
							<button onClick={() => {
								dispatch({type: "DEL-DOG", payload: dogName});
							}}>Delete dog
							</button>
						</div>)}
				</div>
				<div className={AnimalsStyle.Animal}>
					{state.catNames.map((catName, index) =>
						<div className={AnimalsStyle.SubAnimal} key={index}>
							<div>{catName}</div>
							<button onClick={() => {
								dispatch({type: "DEL-CAT", payload: catName});
							}}>Delete cat
							</button>
						</div>)}
				</div>
			</div>
		</div>
	);
}