'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { loginUser } from '@/lib/login-user';
import { AUTH_COOKIE_NAME } from '@/config/config';
import { LoginActionState, LoginData } from '@/types/types';
import { loginSchema } from '@/types/schema';

export async function loginAction(
    prevState: unknown,
    formData: FormData
) {
    const validated = loginSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });


    if (!validated.success) {
        return { error: 'Invalid email or password' };
    }

    try {
        // const loginData: LoginData = await loginUser(validated.data.email, validated.data.password);
        // TODO: Remove below and uncomment above in production
        const loginData: LoginData = { token: 'QpwL5tke4Pnpja7X4' }
        
        const cookieStore = await cookies();
        // Set secure HttpOnly cookie (server-side, XSS-proof)
        cookieStore.set(AUTH_COOKIE_NAME, loginData.token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 60 * 60 * 24, // 1 day
        });        
        
    } catch (error) {
        console.error(error);
        return { error: 'Login failed. Check credentials.' };
    }

    redirect('/dashboard');
}
