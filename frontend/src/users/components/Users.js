import React from "react";
import UserList from "./UsersList";

const User =() => {
    const USERS = [
        {
            id:"User1",
            name:"Umair Butt",
            image:"https://picsum.photos/200/300?grayscale",
            placeCount:"3"
        }
    ];
    return (
        <UserList items={USERS}/>
    )
}

export default User;