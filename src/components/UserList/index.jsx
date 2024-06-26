import React, { Component } from "react";
import { Table } from "reactstrap";
import { DeleteBtn, EditBtn } from "../Buttons";
import CRUD from "../../actions/crud";

export default class UserList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Table
                bordered
                borderless
                dark
                hover
                responsive
                striped
            >
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th className="d-flex justify-content-center">
                            <span>Operation...</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.userList.map(({ id, name, surname, email }) => {
                        return (
                            <tr key={id}>
                                <th scope="row">
                                    {id}
                                </th>
                                <td>
                                    {name}
                                </td>
                                <td>
                                    {surname}
                                </td>
                                <td>
                                    {email}
                                </td>
                                <td data-id={id} className="d-flex justify-content-around">
                                    <EditBtn
                                        id={id}
                                        handleSetId={this.props.handleSetId}
                                        actionType={() => { this.props.changeActionType(CRUD.updated) }}
                                        command={() => { this.props.toggleModal() }} />
                                    <DeleteBtn command={() => this.props.deleteUserById(id)} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        )
    }
}
