const email = document.querySelector('.email')
const L_name = document.querySelector('.L_name')
const F_name = document.querySelector('.F_name')
const U_name = document.querySelector('.U_name')
const password = document.querySelector('.password')
const password_1 = document.querySelector('.password_1')









function myFunction() {
    let x = document.getElementById("myInput");
    let c = document.getElementById("myInput_1");
    if (x.type === "password" || c.type === "password") {
      x.type = "text", c.type = "text"
    } else {
      x.type = "password", c.type = "password";
    }
  }

