
//create account button
// document.getElementById('create-acct').addEventListener('click', function(event) {
//   event.preventDefault();
//   window.location.href = 'create-acct.html';
// });

//modal
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('loginModal');
  const openModalBtn = document.getElementById('login');
  const closeModalSpan = document.querySelector('.close');
  const cancelButton = document.getElementById('cancelButton');

  openModalBtn.onclick = function(event) {
      event.preventDefault();
      modal.style.display = 'block';
  };

  closeModalSpan.onclick = function() {
      modal.style.display = 'none';
  };

  cancelButton.onclick = function() {
      modal.style.display = 'none';
  };

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  };

  document.getElementById('signInForm').onsubmit = function(event) {
      event.preventDefault();
      // Add sign-in logic here
      alert('Sign-In form submitted');
      modal.style.display = 'none';
  };
});
