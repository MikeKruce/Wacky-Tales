const createAcctFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#user-name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/stories');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('#create-account-form')
  .addEventListener('submit', createAcctFormHandler);