const text = document.querySelector("#text");
const textError = document.querySelector(".text-error");
const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
text.addEventListener("input", function () {
  if (nameRegex.test(text.value)) textError.textContent = "";
  else textError.textContent = "Name is Incorrect !";
});

const mobileNo = document.querySelector("#tel");
const mobileNoError = document.querySelector(".mobno-error");
const mobNoRegex = RegExp("^[0-9]{2,3}\\s+[0-9]{10}$");
mobileNo.addEventListener("input", function () {
  if (mobNoRegex.test(mobileNo.value)) mobileNoError.textContent = "";
  else mobileNoError.textContent = "Mobile No is Incorrect !";
});

const password = document.querySelector("#pwd");
const passwordError = document.querySelector(".password-error");
const passwordRegex = RegExp(
  "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.*\\W\\w*\\W)(?!.*\\s).{8,}$"
);
password.addEventListener("input", function () {
  if (passwordRegex.test(password.value)) passwordError.textContent = "";
  else passwordError.textContent = "Password is Incorrect !";
});

const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
const emailRegex = RegExp(
  "^[a-z][0-9a-z_+-]*\\.?[0-9a-z_+-]+@\\w+(\\.[a-z]{2,}){1,2}$"
);
email.addEventListener("input", function () {
  if (emailRegex.test(email.value)) emailError.textContent = "";
  else emailError.textContent = "Email is Incorrect !";
});

const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener("input", function () {
  output.textContent = salary.value;
});
