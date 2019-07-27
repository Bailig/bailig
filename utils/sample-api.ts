import { IDialogContent, IHomePage, INormalizedData, IUser } from "../interfaces";

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

const DIALOG_CONTENTS: INormalizedData<IDialogContent> = {
  about: {
    id: "about",
    name: "About",
    number: 3,
    sections: {
      section1: {
        id: "section1",
        imageUrl: "https://images.unsplash.com/photo-1564162586277-e6239808f8d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        number: 1,
        type: "image",
      },
      section2: {
        id: "section2",
        number: 2,
        text: "N,ostrud c,ulpa p,roident pariatur ipsum commodo ad exercitation anim sunt anim veniam Lorem commodo cupidatat. Sit anim dolor laboris sit aute quis esse irure laboris dolor ad aliquip est est. In officia occaecat labore ipsum reprehenderit laboris ex laborum ipsum deserunt. Ipsum eu excepteur minim deserunt ex anim aliqua aliquip veniam Lorem occaecat sint laborum in.",
        type: "text",
      },
    },
  },
  contact: {
    id: "contact",
    name: "Contact",
    number: 4,
    sections: {
      section1: {
        id: "section1",
        imageUrl: "https://images.unsplash.com/photo-1564162586277-e6239808f8d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        number: 1,
        type: "image",
      },
      section2: {
        id: "section2",
        number: 2,
        text: "N,ostrud c,ulpa p,roident pariatur ipsum commodo ad exercitation anim sunt anim veniam Lorem commodo cupidatat. Sit anim dolor laboris sit aute quis esse irure laboris dolor ad aliquip est est. In officia occaecat labore ipsum reprehenderit laboris ex laborum ipsum deserunt. Ipsum eu excepteur minim deserunt ex anim aliqua aliquip veniam Lorem occaecat sint laborum in.",
        type: "text",
      },
    },
  },
  info: {
    id: "info",
    name: "Info",
    number: 1,
    sections: {
      section1: {
        id: "section1",
        imageUrl: "https://images.unsplash.com/photo-1564162586277-e6239808f8d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        number: 1,
        type: "image",
      },
      section2: {
        id: "section2",
        number: 2,
        text: "N,ostrud c,ulpa p,roident pariatur ipsum commodo ad exercitation anim sunt anim veniam Lorem commodo cupidatat. Sit anim dolor laboris sit aute quis esse irure laboris dolor ad aliquip est est. In officia occaecat labore ipsum reprehenderit laboris ex laborum ipsum deserunt. Ipsum eu excepteur minim deserunt ex anim aliqua aliquip veniam Lorem occaecat sint laborum in.",
        type: "text",
      },
    },
  },
  work: {
    id: "work",
    name: "Work",
    number: 2,
    sections: {
      section1: {
        id: "section1",
        imageUrl: "https://images.unsplash.com/photo-1564162586277-e6239808f8d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        number: 1,
        type: "image",
      },
      section2: {
        id: "section2",
        number: 2,
        text: "N,ostrud c,ulpa p,roident pariatur ipsum commodo ad exercitation anim sunt anim veniam Lorem commodo cupidatat. Sit anim dolor laboris sit aute quis esse irure laboris dolor ad aliquip est est. In officia occaecat labore ipsum reprehenderit laboris ex laborum ipsum deserunt. Ipsum eu excepteur minim deserunt ex anim aliqua aliquip veniam Lorem occaecat sint laborum in.",
        type: "text",
      },
    },
  },
};

export const fetchDialogContents = async () => {
  return DIALOG_CONTENTS;
};
