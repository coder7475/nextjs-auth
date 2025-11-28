async function loginUser(email: string, password: string) {
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Login failed');
  }

  return data.token;
}

// Usage
loginUser('eve.holt@reqres.in', 'cityslicka')
  .then(token => console.log('Logged in token:', token))
  .catch(err => console.error('Login error:', err.message));
