export const AddBtn = ({ command }) => {
    return <button
        className="btn btn-primary"
        onClick={() => command}
    >Add user</button>
}