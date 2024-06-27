import { getUserByEmail } from '../models/userModel';

export const login = async (email) => {
  return await getUserByEmail(email);
};
