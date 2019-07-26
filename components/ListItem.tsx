import Link from "next/link";
import * as React from "react";

import { IUser } from "../interfaces";

interface IProps {
  data: IUser;
}

const ListItem: React.FunctionComponent<IProps> = ({ data }) => (
  <Link href={`/detail?id=${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
);

export default ListItem;
