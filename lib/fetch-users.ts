const REQRES_API_URL = process.env.REQRES_API_URL || 'https://reqres.in/api/users/2';
const REQRES_API_KEY = process.env.REQRES_API_KEY || '****';

export interface UserData {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}

export async function fetchUserData(): Promise<UserData> {
  const response = await fetch(REQRES_API_URL, {
    headers: {
      'X-API-Key': REQRES_API_KEY,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch user data: ${response.statusText}`);
  }

  const data: UserData = await response.json();
  return data;
}
