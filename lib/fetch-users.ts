import { REQRES_API_KEY, REQRES_API_URL } from "@/config/config";
import { UserData } from "@/types/types";

export async function fetchUserData(): Promise<UserData> {
  const response = await fetch(`${REQRES_API_URL}/users/2`, {
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
