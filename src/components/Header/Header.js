import {useSelector} from "react-redux";

export const Header = () => {

	const {currentUser} = useSelector(state => state.userReducer);

	return (
		<div>
			<h1>{currentUser && currentUser.name}</h1>
		</div>
	);
};
