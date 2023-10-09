import { createContext, Dispatch, SetStateAction } from "react";
import { TSetState, TUser } from "../types/others";

type TUsersContext = {
  users: TUser[];
  setUsers: Dispatch<SetStateAction<TUser[]>>;
  setIsAuthorized: TSetState<boolean>;
};

export const UsersContext = createContext<TUsersContext>({} as TUsersContext);
