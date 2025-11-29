import LoginForm from '@/components/LoginForm';
import { AUTH_COOKIE_NAME } from '@/config/config';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  if (token) {
    redirect('/dashboard');
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
            Auth Dashboard
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Use the demo credentials or your test account to access the dashboard.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <Link
              href="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              go back home
            </Link>
            .
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
