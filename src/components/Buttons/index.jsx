import CRUD from "../../actions/crud";

export const AddBtn = ({ command, actionType }) => {
    return <button
        className="btn btn-primary"
        onClick={() => {
            command();
            actionType(CRUD.created)
        }}
    >Add user</button>
}

export const EditBtn = ({ command, actionType,id, handleSetId }) => {
    console.log(id);
    return <button
        className="btn btn-success"
        onClick={() => {
            handleSetId(id);
            command();
            actionType()
        }}
    >Edit user</button>
}

export const DeleteBtn = ({ command }) => {
    return <button
        className="btn btn-danger"
        onClick={() => command()}
    >Delete user</button>
}