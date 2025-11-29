import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">
          Auth Demo
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Welcome to Auth Dashboard
        </h1>
        <p className="text-gray-600 mb-8">
          Securely log in, view your profile data from a mock API, and manage your session using HttpOnly cookies.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/login"
            className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm"
          >
            Go to Login
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-100"
          >
            View Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
