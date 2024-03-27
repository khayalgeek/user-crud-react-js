import React from "react";
import { Table } from "reactstrap";
import { DeleteBtn, EditBtn } from "../Buttons";

const editUserById = () => {
    alert('edit action');
};

const deleteUserById = (id) => {
    alert(`delete action: ${id}`);
};



const UserList = ({ userList }) => {
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
                {userList.map(({ id, name, surname, email }) => {
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
                            <td className="d-flex justify-content-around">
                                <EditBtn id={id} command={editUserById} />
                                <DeleteBtn id={id} command={deleteUserById} />
                            </td>
                        </tr>
                    );
                })}

            </tbody>
        </Table>
    )
}

export default UserList;