export type UserType = {
  fullname: string;
  email: string;
  username: string;
  isAdmin: boolean;
  roles: string;
};

export type GlobalStateType = {
  searchQuery: string;
  user: UserType | null;
  isAdmin: boolean;
};
