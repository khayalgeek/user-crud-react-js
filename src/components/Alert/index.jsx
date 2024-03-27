import { Alert } from "reactstrap"

export const AlertEmptyUserList = ({text}) => {
    return (
        <Alert color="warning">
            {text}
        </Alert>
    )
}