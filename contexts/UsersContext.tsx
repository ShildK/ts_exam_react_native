import { createContext, Dispatch, SetStateAction } from "react";
import { TSetBoolean, TUser } from "../types/others";

type TUsersContext = {
  users: TUser[];
  setUsers: Dispatch<SetStateAction<TUser[]>>;
  setIsAuthorized: TSetBoolean;
};

export const UsersContext = createContext<TUsersContext>({} as TUsersContext);
