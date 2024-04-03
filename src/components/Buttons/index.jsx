import { CRUD } from "../../actions/crud";

export const AddBtn = ({ command, actionType }) => {
    return <button
        className="btn btn-primary"
        onClick={() => {
            command();
            actionType(CRUD.created)
        }}
    >Add user</button>
}

export const EditBtn = ({ command }) => {
    return <button
        className="btn btn-success"
        onClick={() => command()}
    >Edit user</button>
}

export const DeleteBtn = ({ command }) => {
    return <button
        className="btn btn-danger"
        onClick={() => command()}
    >Delete user</button>
}