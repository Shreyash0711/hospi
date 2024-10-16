const firebaseConfig = {
  apiKey: "AIzaSyAHIxZEQ_UFYIT3lNBUzZYKC-1gc36pmbE",
  authDomain: "contactform-138b3.firebaseapp.com",
  databaseURL: "https://contactform-138b3-default-rtdb.firebaseio.com",
  projectId: "contactform-138b3",
  storageBucket: "contactform-138b3.appspot.com",
  messagingSenderId: "1001966578189",
  appId: "1:1001966578189:web:dd97b2a8fc076e4603c344"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Reference to the "appointments" node in the database
const appointmentsRef = database.ref('appointments');

// Get the form element
const form = document.getElementById('contactForm');
const alertBox = document.querySelector('.alert');

// Form submission event listener
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting the normal way

  // Get form values
  const name = document.getElementById('name').value;
  const pnum = document.getElementById('pnum').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gen').value;
  const issue = document.getElementById('issue').value;
  const date = document.getElementById('date').value;

  // Save the appointment to the database
  const newAppointmentRef = appointmentsRef.push();
  newAppointmentRef.set({
      name: name,
      phone: pnum,
      email: email,
      gender: gender,
      issue: issue,
      date: date
  }).then(() => {
      // Show success alert and reset form
      alertBox.style.display = 'block';
      form.reset();
  }).catch((error) => {
      console.error("Error saving appointment: ", error);
  });
});
