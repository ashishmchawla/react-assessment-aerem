import React from "react";
import type { User } from "../types/user";

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <li style={{padding: "12px", borderRadius: '8px', background: "#f3f3f3", marginBottom: "12px", listStyle: "none"}}>
      <img src={user.picture.thumbnail} width={40} />
      <div>
        <strong>
          {user.name.first} {user.name.last}
        </strong>
        <div>{user.email}</div>
      </div>
    </li>
  );
};

export default React.memo(UserItem);
