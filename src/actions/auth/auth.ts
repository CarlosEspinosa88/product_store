import {tesloApi} from '../../config/api/teslo-api';
import type {AuthResponse} from '../../infrastructure/interfaces/auth.responses';
import type {User} from '../../domain/entities/user';

const userToken = (data: AuthResponse) => {
  const user: User = {
    id: data.id,
    email: data.email,
    fullName: data.fullName,
    isActive: data.isActive,
    roles: data.isActive,
  };

  return {
    user: user,
    token: data.token,
  };
};

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();

  try {
    const {data} = await tesloApi.post<AuthResponse>('/auth/login', {
      email,
      password,
    });
    return userToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
