import { Component } from "react";
import { AddBtn } from "../Buttons";

const addUser = () =>{
    alert('add user')
}

export default class UserContainer extends Component{
    render(){
        return <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12 ">
                    <AddBtn command={addUser}/>
                </div>
                <div className="col-sm-12 mt-3">
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}