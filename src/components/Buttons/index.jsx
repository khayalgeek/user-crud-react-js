export const AddBtn = ({ command }) => {
    return <button
        className="btn btn-primary"
        onClick={() => command()}
    >Add user</button>
}

export const EditBtn = ({id, command }) => {
    return <button
        className="btn btn-success"
        onClick={() => command(id)}
    >Edit user</button>
}

export const DeleteBtn = ({id, command }) => {
    return <button
        className="btn btn-danger"
        onClick={() => command(id)}
    >Delete user</button>
}