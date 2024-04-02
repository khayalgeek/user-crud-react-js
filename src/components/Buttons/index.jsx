export const AddBtn = ({ command }) => {
    return <button
        className="btn btn-primary"
        onClick={() => command()}
    >Add user</button>
}

export const EditBtn = ({command }) => {
    return <button
        className="btn btn-success"
        onClick={() => command()}
    >Edit user</button>
}

export const DeleteBtn = ({command }) => {
    return <button
        className="btn btn-danger"
        onClick={() => command()}
    >Delete user</button>
}