export function Comment({comment}) {
    return (
        <div>
			  <h2>Comment {comment.id}: {comment.name}</h2>
        </div>
    );
}