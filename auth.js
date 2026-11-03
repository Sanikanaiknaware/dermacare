(() => {
  const SESSION_KEY = 'dermacare_demo_user';
  const USERS_KEY = 'dermacare_demo_users';
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const isAuthPage = currentPage === 'login.html' || currentPage === 'register.html';
  const getUser = () => { try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); } catch { return null; } };
  const getUsers = () => { try { return JSON.parse(localStorage.getItem(USERS_KEY) || '[]'); } catch { return []; } };

  if (!isAuthPage && !getUser()) {
    location.replace('login.html');
    return;
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (isAuthPage && getUser()) {
      location.replace('index.html');
      return;
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim().toLowerCase();
        const password = document.getElementById('registerPassword').value;
        const confirm = document.getElementById('confirmPassword').value;
        const error = document.getElementById('registerError');
        error.textContent = '';
        if (password.length < 6) { error.textContent = 'Password must contain at least 6 characters.'; return; }
        if (password !== confirm) { error.textContent = 'Passwords do not match.'; return; }
        const users = getUsers();
        if (users.some(user => user.email === email)) { error.textContent = 'This email is already registered. Please log in.'; return; }
        users.push({ name, email, password });
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
        localStorage.setItem(SESSION_KEY, JSON.stringify({ name, email, signedInAt: new Date().toISOString() }));
        location.replace('index.html');
      });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', event => {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value.trim().toLowerCase();
        const password = document.getElementById('loginPassword').value;
        const error = document.getElementById('loginError');
        const account = getUsers().find(user => user.email === email && user.password === password);
        if (!account) { error.textContent = 'Invalid email or password. Please register first or check your details.'; return; }
        localStorage.setItem(SESSION_KEY, JSON.stringify({ name: account.name, email: account.email, signedInAt: new Date().toISOString() }));
        location.replace('index.html');
      });
    }

    const logout = document.getElementById('logoutBtn');
    if (logout) logout.addEventListener('click', () => {
      localStorage.removeItem(SESSION_KEY);
      location.replace('login.html');
    });
  });
})();
