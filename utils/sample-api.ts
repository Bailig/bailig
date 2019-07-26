import { IHomePage, IUser } from "../interfaces";

/** Dummy user data. */
export const dataArray: IUser[] = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Caroline" },
  { id: 104, name: "Dave" },
];

/**
 * Calls a mock API which finds a user by ID from the list above.
 *
 * Throws an error if not found.
 */
export async function findData(id: number | string) {
  const selected = dataArray.find((data) => data.id === Number(id));

  if (!selected) {
    throw new Error("Cannot find user");
  }

  return selected;
}

/** Calls a mock API which returns the above array to simulate "get all". */
export async function findAll() {
  // Throw an error, just for example.
  if (!Array.isArray(dataArray)) {
    throw new Error("Cannot find users");
  }

  return dataArray;
}

const HOME_PAGE: IHomePage = {
  avatarImageUrl: "https://firebasestorage.googleapis.com/v0/b/bailig.appspot.com/o/images%2Favatar.png?alt=media&token=d4742c9a-62ba-4db1-9e97-1b9e67899640",
  backgroundImageUrl: "https://firebasestorage.googleapis.com/v0/b/bailig.appspot.com/o/images%2Fbackground-image.png?alt=media&token=d4f752d8-b63c-4bf2-84aa-ad71d5434646",
  introductionText: "I have a passion for web development and love to create for web and mobile devices.",
  name: "Bailig Abhanar",
};
export const fetchHomePage = async () => {
  return HOME_PAGE;
};
