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
            users: []
        }
        this.deleteUserById = this.deleteUserById.bind(this);
        this.editUserById = this.editUserById.bind(this)
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
        this.setState(prevState => ({
            users: prevState.users.filter(user => user.id !== id)
        }));
    }

    editUserById(id) {
        const { users } = this.state;
        const user = users.find(user => user.id === id);
        console.log(user);

    }



    render() {
        return <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12 ">
                    <AddBtn command={this.toggleModal} />
                    <UserForm isShowModal={this.state.isShowModal} toggleModal={this.toggleModal} addUser={this.addUser} />
                </div>
                <div className="col-sm-12 mt-3">
                    {this.state.users.length <= 0 ?
                        <AlertEmptyUserList
                            text={"Empty user list !"}
                        /> :
                        <UserList
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