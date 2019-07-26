import * as React from "react";

import { IUser } from "../interfaces";

interface IListDetailProps {
  item: IUser;
}

const ListDetail: React.FunctionComponent<IListDetailProps> = ({
  item: user,
}) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
);

export default ListDetail;
