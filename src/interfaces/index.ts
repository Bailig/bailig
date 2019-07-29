// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export interface IUser {
  id: number;
  name: string;
}

export interface IHomePage {
  name: string;
  backgroundImageUrl: string;
  avatarImageUrl: string;
  introductionText: string;
}

export interface IDialogContent {
  id: string;
  name: string;
  number: number;
  sections?: INormalizedData<ISection>;
}

export interface ISection {
  id: string;
  imageUrl?: string;
  number: number;
  text?: string;
  type: string;
}

export interface INormalizedData<T> {
  [id: string]: T;
}
