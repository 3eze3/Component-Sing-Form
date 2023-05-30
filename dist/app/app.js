document.addEventListener("DOMContentLoaded", () => {
  const $button = document.querySelector(".login__submit");
  const $icons = document.querySelectorAll(".login__error--icon");
  const $messages = document.querySelectorAll(".login__error--message");
  const $inputs = document.querySelectorAll("input");

  function showError() {
    $inputs.forEach((input, index) => {
      const isEmpty = input.value.trim() === "";
      const isEmailInput = input.id === "email";
      const isValidEmail =
        isEmailInput && !isEmpty && !isValidEmailFormat(input.value);

      $messages[index].classList.toggle(
        "active--message",
        isEmpty || isValidEmail
      );
      $icons[index].classList.toggle("active--icon", isEmpty || isValidEmail);
    });
  }

  function isValidEmailFormat(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  $button.addEventListener("click", event => {
    event.preventDefault();
    showError();
  });
});
