import { Component } from "react";
import { AddBtn } from "../Buttons";
import UserForm from "../Form";
import { AlertEmptyUserList } from "../Alert";
import UserList from "../UserList";
import Swal from "sweetalert2";
import CRUD from "../../actions/crud";

export default class UserContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isShowModal: false,
            actionType: "",
            users: [],
            id: ""
        }
        this.deleteUserById = this.deleteUserById.bind(this);
        this.editUserById = this.editUserById.bind(this);
        this.changeActionType = this.changeActionType.bind(this);
        this.handleSetId = this.handleSetId.bind(this)
    }

    toggleModal = () => {
        this.setState({
            isShowModal: !this.state.isShowModal
        });
    }

    addUser = (user) => {
        this.setState({
            users: [...this.state.users, user]
        })
    }

    deleteUserById(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                this.setState(prevState => ({
                    users: prevState.users.filter(user => user.id !== id)
                }));
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    editUserById(id, payload) {
        const { users } = this.state;
        const userIndex = users.findIndex(user => user.id === id);
        let usersList = this.state.users;
        usersList[userIndex] ={id:id,...payload};
        this.setState(users => ({
            users: [...usersList]
        }))
    }

    changeActionType(type) {
        this.setState({ actionType: type })
    }


    handleSetId(id) {
        this.setState({
            id: id
        })
    }

    render() {
        return <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12 ">
                    <AddBtn command={this.toggleModal} actionType={this.changeActionType} />
                    <UserForm
                        userId={this.state.id}
                        actionType={this.state.actionType}
                        isShowModal={this.state.isShowModal}
                        toggleModal={this.toggleModal}
                        addUser={this.addUser}
                        editUser={this.editUserById}
                    />

                </div>
                <div className="col-sm-12 mt-3">
                    {this.state.users.length <= 0 ?
                        <AlertEmptyUserList
                            text={"Empty user list !"}
                        /> :
                        <UserList
                            handleSetId={this.handleSetId}
                            toggleModal={this.toggleModal}
                            deleteUserById={this.deleteUserById}
                            changeActionType={this.changeActionType}
                            userList={this.state.users}
                        />
                    }
                </div>
            </div>
        </div>
    }
}