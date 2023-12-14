document.addEventListener('DOMContentLoaded', (event) => {
    initializePage();
  
    // Add event listeners
    document.getElementById('loginButton').addEventListener('click', loginUser);
    document.getElementById('registerButton').addEventListener('click', createUser);
  });
  
  function initializePage() {
    const userName = localStorage.getItem('username');
    if (userName) {
      // Assuming you want to hide the login form if the user is already logged in
      setDisplay('loginForm', 'none');
      document.getElementById("isntloggedin").style.display = "none";
      document.getElementById("isloggedin").style.display = 'block';
      document.getElementById("logoutButton").style.display = 'block';

      const logoutButton = document.getElementById('logoutButton');
      if (logoutButton) {
        logoutButton.addEventListener('click', logout);
      }

      // You might want to show some other elements or perform other actions here
    } else {
      setDisplay('loginForm', 'block');
      // Hide or reset other elements as necessary
    }
  }
  
  async function loginUser() {
    await loginOrCreate(`/api/auth/login`);
  }
  
  async function createUser() {
    await loginOrCreate(`/api/auth/create`);
  }
  
  async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#username')?.value;
    const password = document.querySelector('#password')?.value;
      
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ uname: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response.ok) {
      localStorage.setItem('username', userName);
      window.location.href = 'play.html';

    } else {
      const body = await response.json();
      alert(`⚠ Error: ${body.msg}`); // Using alert for simplicity
      // Implement modal or other error handling as needed
    }
  }
  
  function setDisplay(controlId, display) {
    const element = document.querySelector(`#${controlId}`);
    if (element) {
      element.style.display = display;
    }
  }
  
  function logout() {
    localStorage.removeItem('username');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  }  