import React from "react";
import UserItem from "./UsersItem";
import "./UsersList.css";

const UserList = props => {
    if(props.items.length===0){
        return(
            <div>
                <h3> No Users Found Yet...!!! </h3>
            </div>
        )
    }
    return(
        <ul>
            {props.items.map((users)=> {
                return <UserItem 
                key={users.id} 
                id={users.id} 
                image={users.image} 
                name={users.name} 
                placeCount={users.placeCount}
                />
            })}
        </ul>
    )
}

export default UserList;
