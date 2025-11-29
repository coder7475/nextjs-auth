import { fetchUserData } from '@/lib/fetch-users';
import { logout } from '@/lib/logout';
import Image from 'next/image';

export default async function DashboardPage() {
  const userData = await fetchUserData();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-indigo-600 tracking-wide uppercase">
                  Auth Dashboard
                </span>
                <h1 className="text-xl font-bold text-gray-900">
                  Welcome back
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <form action={logout}>
                <button
                  type="submit"
                  className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm font-medium transition-colors"
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white overflow-hidden shadow rounded-lg">
          <div className="p-8 text-center">
            <p className="text-xs font-semibold text-indigo-600 tracking-wide uppercase mb-2">
              Profile Overview
            </p>

            <div className="mx-auto h-24 w-24 mb-6 relative">
              <Image
                src={userData?.data.avatar || ''}
                alt={
                  userData
                    ? `${userData.data.first_name} ${userData.data.last_name}`
                    : 'User avatar'
                }
                fill
                className="rounded-full object-cover ring-4 ring-white shadow-md"
                sizes="96px"
                priority
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {userData
                ? `${userData.data.first_name} ${userData.data.last_name}`
                : 'Guest User'}
            </h2>

            <p className="text-sm text-gray-500 mb-6">
              {userData?.data.email || 'No email available'}
            </p>

            <div className="inline-flex items-center px-4 py-2 border border-green-300 rounded-full bg-green-50">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-xs font-medium text-green-800">
                Authenticated session
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
