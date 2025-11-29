import { AUTH_COOKIE_NAME, REQRES_API_KEY, REQRES_API_URL } from "@/config/config";
import { UserData } from "@/types/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function fetchUserData(): Promise<UserData> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    redirect('/login');
  }

  const res = await fetch(`${REQRES_API_URL}/users/2`, {
    headers: {
      'X-API-Key': REQRES_API_KEY,
    },
    cache: 'no-store',
  });  

  if (!res.ok) {
    redirect('/login');
  }

  const data: UserData = await res.json();

  return data;
}
