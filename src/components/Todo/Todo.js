export default function Todo({todo}) {
    return (
        <div>
            <p>Todo {todo.id} -- {JSON.stringify(todo)}</p>
        </div>
    );
}