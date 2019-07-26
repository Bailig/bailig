import * as React from "react";
import { IUser } from "../interfaces";
import ListItem from "./ListItem";

interface IProps {
  items: IUser[];
}

const List: React.FunctionComponent<IProps> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
