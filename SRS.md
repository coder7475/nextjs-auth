## Software Requirements Specification (SRS)

### Project Title

Authenticated Dashboard with Next.js App Router

### Purpose

To develop a secure web application with authentication, using Next.js App Router. The application will have login, protected dashboard, and logout features with token-based authentication stored in HttpOnly cookies.

### Scope

The project will implement:
- User login with email and password.
- Middleware-protected dashboard route.
- Fetching and displaying authenticated user data.
- Logout feature to clear authentication.

### Functional Requirements

1. **Login Page**
   - Provide a user interface with email and password input fields.
   - On form submission, call mock API `https://reqres.in/api/login` with provided credentials.
   - On successful login, store the returned token in an HttpOnly cookie.
   - Redirect the user to the dashboard page upon successful login.

2. **Middleware Protection**
   - Middleware file (`middleware.ts`) to be added in the app directory.
   - Middleware checks for the existence of the token in HttpOnly cookies.
   - If token does not exist, redirect user to login page.
   - Protect only the dashboard route; other routes remain public.

3. **Dashboard Page**
   - Fetch mock user data from `https://reqres.in/api/users/2`.
   - Use the token from the HttpOnly cookie to simulate an authenticated API call.
   - Display user details: Name, Email, and Avatar Profile Image.
   - If no valid token is present, redirect user to login page.

4. **Logout Feature**
   - Provide a logout button on the dashboard page.
   - On logout, clear the cookie containing the token.
   - Redirect the user to the login page after logout.

### Non-functional Requirements

- Use Next.js App Router for routing.
- Use middleware for route protection.
- Use HttpOnly cookies to store authentication tokens securely.
- No need for a custom backend; mock APIs from `reqres.in` will be used.
- Security: Ensure tokens are stored and transmitted securely via HttpOnly cookies.
- Usability: Provide clear navigation between login, dashboard, and logout.

### Technology Stack

- Next.js (App Router)
- Middleware (Next.js `middleware.ts`)
- HttpOnly Cookies for token storage
- Mock API service (https://reqres.in)
