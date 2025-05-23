export type UserType = {
  fullname: string;
  email: string;
  username: string;
  isAdmin: boolean;
  roles: {
    name: string;
  }[];
};

export type GlobalStateType = {
  searchQuery: string;
  user: UserType | null;
  isAdmin: boolean;
};
