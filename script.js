const complaintForm = document.getElementById('complaintForm');

complaintForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const complaint = document.getElementById('complaint').value;

  if (name === '' || email === '' || complaint === '') {
    alert('Please fill out all required fields.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = ${name} - ${email}: ${complaint};
  const complaintList = document.getElementById('complaintList');
  complaintList.appendChild(li);

  complaintForm.reset();
});
