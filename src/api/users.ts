import axios from "axios";
import type { UsersApiResponse } from "../types/user";

export const fetchUsers = async (
  page: number
): Promise<UsersApiResponse> => {
  const response = await axios.get<UsersApiResponse>(
    `https://randomuser.me/api/?page=${page}&results=5`
  );
  return response.data;
};
