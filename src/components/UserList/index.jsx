import { Component } from "react";
import { AddBtn } from "../Buttons";
const addBtnStyle = "className='btn'"

export default class UserContainer extends Component{
    render(){
        return <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12 ">
                    <AddBtn args={addBtnStyle} />
                </div>
            </div>
        </div>
    }
}