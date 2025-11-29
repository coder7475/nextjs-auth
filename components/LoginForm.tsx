"use client";
import { useFormStatus } from 'react-dom';
import { loginAction } from '@/app/actions/auth';
import { useActionState } from 'react';

export default function LoginForm() {
  const [state, formAction] = useActionState(loginAction, { 
    error: '' 
  });

  const { pending } = useFormStatus();

  return (
    <form className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md" action={formAction}>
      {/* inputs unchanged */}
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input 
            id="email"
            name="email" 
            type="email" 
            required 
            defaultValue="eve.holt@reqres.in"
            className="mt-1 appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:opacity-50"
            disabled={pending}
            placeholder="eve.holt@reqres.in"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input 
            id="password"
            name="password" 
            type="password" 
            required 
            defaultValue="cityslicka"
            className="mt-1 appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:opacity-50"
            disabled={pending}
            placeholder="cityslicka"
          />
        </div>
      </div>

      {state.error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-800">{state.error}</p>
        </div>
      )}


      <button 
        type="submit" 
        disabled={pending}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Signing in...
          </>
        ) : (
          'Sign in'
        )}
      </button>
    </form>
  );
}
