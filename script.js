function validateForm(event) {
  event.preventDefault();

  const U_name = document.querySelector('.U_name');
  const F_name = document.querySelector('.f_name');
  const L_name = document.querySelector('.l_name');
  const email = document.querySelector('.email');
  const password = document.querySelector('.Password');
  const password_1 = document.querySelector('.password_2');

  if (U_name.value.length < 3 || F_name.value.length < 3 || L_name.value.length < 3) {
    alert('Минимальная длина поля User Name, First Name и Last Name - 3 символа.');
    return;
  }

  if (password.value !== password_1.value || password.value.length > 8 || password_1.value.length > 8) {
    alert('Пароли не совпадают или превышают максимальную длину в 8 символов.');
    return;
  }

  let result = 'User Name: ' + U_name.value + '\nFirst Name: ' + F_name.value + '\nLast Name: ' + L_name.value +
    '\nEmail: ' + email.value + '\nPassword: ' + password.value;
  alert(result);
}

function myFunction() {
  let x = document.getElementById("myInput");
  let c = document.getElementById("myInput_1");
  if (x.type === "password" || c.type === "password") {
    x.type = "text", c.type = "text";
  } else {
    x.type = "password", c.type = "password";
  }
}
