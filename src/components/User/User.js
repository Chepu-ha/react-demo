export function User({user}) {
    return (
        <div>
			  <h2 key={user.id}>User {user.id}: {user.name}</h2>
        </div>
    );
}