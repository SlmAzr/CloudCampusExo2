const form = document.querySelector(".formulaire");
const label = document.createElement("label");
const hehe = document.querySelectorAll("input , textarea , select");

// fonction de validation
function validation(field, classToTarget) {
  if (!field.value) {
    field.classList.add("input-error");
    document.querySelector(classToTarget).innerHTML =
      "Ce champ est obligatoire";
  }
}

// Pour chaque élément
hehe.forEach((element) => {
  element.addEventListener("input", function () {
    if (element.validity.tooShort) {
      element.classList.add("input-error");
      document.querySelector(`.required` + "-" + `${element.id}`).innerHTML ="Ce champ est trop court" +" (" +`${element.minLength}` +" caractères minimum)";
    } else if (!element.validity.valid) {
      element.classList.add("input-error");
      document.querySelector(`.required` + "-" + `${element.id}`).innerHTML =
        "Ce champ est obligatoire";
    } else {
      element.classList.remove("input-error");
      document.querySelector(`.required` + "-" + `${element.id}`).innerHTML =
        "";
    }
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    // verfication des champs
    validation(nom, ".required-nom");
    validation(email, ".required-email");
    validation(message, ".required-message");
    validation(note, ".required-note");

    return;
  }

  alert(
    `Nom: ${nom.value} \nEmail: ${email.value} \nMessage: ${message.value} \nNote: ${note.value}`
  );
});
