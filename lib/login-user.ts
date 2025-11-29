import { REQRES_API_KEY, REQRES_API_URL } from "@/config/config";
import { LoginResponse } from "@/types/types";

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
  const response = await fetch(`${REQRES_API_URL}/login`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      "x-api-key": REQRES_API_KEY
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Login failed');
  }

  return data as LoginResponse;
}
