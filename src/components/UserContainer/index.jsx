import { Component } from "react";
import { AddBtn } from "../Buttons";
import UserForm from "../Form";

export default class UserContainer extends Component {
   
     constructor(props) {
        super(props)
        this.state = {
            isShowModal: false
        }
    }
    toggleModal = () => {
        this.setState({
            isShowModal: !this.state.isShowModal
        });
    }

    render() {
        return <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12 ">
                    <AddBtn command={this.toggleModal} />
                    <UserForm isShowModal={this.state.isShowModal} toggleModal={this.toggleModal}/>
                </div>
                <div className="col-sm-12 mt-3">
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}