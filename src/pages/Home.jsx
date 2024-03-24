import { Component } from "react";
import Navbars from "../components/Navbar";
import UserContainer from "../components/UserList";

export default class Home extends Component{
    

    render(){
       return <>
        <Navbars />
        <UserContainer/>
       </>
    }
}