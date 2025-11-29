export interface UserData {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}

export interface LoginResponse {
  token: string;
}

export interface LoginError {
  error: string;
}

export interface LoginData {
    token: string;
}
