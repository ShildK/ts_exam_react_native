import { TUser } from "../types/others";

export const normalizeUser = (users: any): TUser[] => {
    return users.data.map((user: any) => {
      user.id = `${user.id}`;
      return user;
    });
  };