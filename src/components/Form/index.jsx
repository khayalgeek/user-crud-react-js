import React from "react";
import { v4 as uuidv } from 'uuid';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap"
import CRUD from "../../actions/crud";

const setValue = (obj, key, value) => {
    return {
        ...obj,
        [key]: value
    }
}



const UserForm = ({userId, isShowModal, toggleModal, addUser, editUser,actionType }) => {


    const [form, setForm] = React.useState({
        name: "",
        surname: "",
        email: ""
    })

    const handleSubmitUserForm = () => {
        switch (actionType) {
            case CRUD.created:
                const id = generateUserId();
                addUser({ ...form, id: id });
                break;
            case CRUD.updated:
                editUser(userId, form)
                break;
            default:
                break;
        }

    }


    const generateUserId = () => uuidv().slice(0, 4);

    return (
        <div>

            <Modal isOpen={isShowModal} toggle={toggleModal} >
                <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder=""
                                type="text"
                                onChange={(e) => setForm(
                                    setValue(form, e.target.name, e.target.value)
                                )}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Surname
                            </Label>
                            <Input
                                id="surname"
                                name="surname"
                                placeholder=""
                                type="text"
                                onChange={(e) => setForm(
                                    setValue(form, e.target.name, e.target.value)
                                )}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                placeholder=""
                                type="email"
                                onChange={(e) => setForm(
                                    setValue(form, e.target.name, e.target.value)
                                )}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        handleSubmitUserForm();
                        toggleModal();
                    }}>
                        Add
                    </Button>{' '}
                    <Button color="secondary" onClick={toggleModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>

    )
}


export default UserForm;