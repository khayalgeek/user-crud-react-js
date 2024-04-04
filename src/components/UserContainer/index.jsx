import { Component } from "react";
import { AddBtn } from "../Buttons";
import UserForm from "../Form";
import { AlertEmptyUserList } from "../Alert";
import UserList from "../UserList";

export default class UserContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isShowModal: false,
            actionType: "",
            users: []
        }
        this.deleteUserById = this.deleteUserById.bind(this);
        this.editUserById = this.editUserById.bind(this);
        this.changeActionType = this.changeActionType.bind(this);
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
        const response = confirm("Silmək istədiyinizə əminsiniz ?");
        if (response) {
            this.setState(prevState => ({
                users: prevState.users.filter(user => user.id !== id)
            }));
        }
        
    }

    editUserById(id, payload) {
        const { users } = this.state;
        const userId = users.findIndex(user => user.id === id);
        this.setState(users => ({
            users: users[userId] = payload
        }))
    }

    changeActionType(type) {
        this.setState({ actionType: type })
    }


    render() {
        return <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12 ">
                    <AddBtn command={this.toggleModal} actionType={this.changeActionType} />
                    <UserForm isShowModal={this.state.isShowModal} toggleModal={this.toggleModal} addUser={this.addUser} />
                </div>
                <div className="col-sm-12 mt-3">
                    {this.state.users.length <= 0 ?
                        <AlertEmptyUserList
                            text={"Empty user list !"}
                        /> :
                        <UserList
                            toggleModal={this.toggleModal}
                            deleteUserById={this.deleteUserById}
                            editUserById={this.editUserById}
                            userList={this.state.users}
                        />
                    }
                </div>
            </div>
        </div>
    }
}