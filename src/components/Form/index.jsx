import React from "react";
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

const setValue = (obj, key, value) => {
    return {
        ...obj,
        [key]: value
    }
}



const UserForm = ({ isShowModal, toggleModal, addUser }) => {
    const [form, setForm] = React.useState({
        id: null,
        name: "",
        surname: "",
        email: ""
    })

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
                        addUser();
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