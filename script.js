const popDisplayLogin = document.querySelector(".popupdisplay");

const botaoLogin = document.querySelector("#botaoLogin");
const botaoCadastrar = document.querySelector("#botaoCadastrar");
const createAccount = document.querySelector(".createAccountLink");
const modalCadastroDisplay = document.querySelector(".modalCadastroDisplay");
const backgroundModals = document.querySelector(".background-modals");
const bemvindo = document.querySelector(".bemvindo");
const tonarJornalista = document.querySelector(".tonarJornalista");
const destaqueNomeBemVindo = document.querySelector(".destaque-verde");
const loginButton = document.querySelector(".login-button");
const btnTornarJornalista = document.querySelector(".btnTornarJornalista");
const modalJornalistaDisplay = document.querySelector(
  ".modalJornalistaDisplay"
);
const feedbackJornalista = document.querySelector(".feedbackJornalist");
const closePage = document.querySelectorAll(".closePage");

function handleCloseModal() {
  popDisplayLogin.style.display = "none";
  modalCadastroDisplay.style.display = "none";
  modalJornalistaDisplay.style.display = "none";
  backgroundModals.style.display = "none";
}

function handleClick(event) {
  if (event.target.value == "Login") {
    popDisplayLogin.style.display = "block";
    backgroundModals.style.display = "block";
  }
  if (event.target.innerText == "Criar conta") {
    popDisplayLogin.style.display = "none";
    modalCadastroDisplay.style.display = "block";
  }
  if (event.target.innerText == "Tornar-se jornalista") {
    modalJornalistaDisplay.style.display = "block";
    backgroundModals.style.display = "block";
  }
}

function handleClickLogin(event) {
  const valorEmailLogin = document.querySelector("#email").value;
  const valorEmailCadastro = document.querySelector("#emailCadastro").value;

  event.preventDefault();
  if (valorEmailLogin) {
    let newString = valorEmailLogin.slice(0, valorEmailLogin.indexOf("@"));
    popDisplayLogin.style.display = "none";
    backgroundModals.style.display = "none";
    botaoLogin.style.display = "none";
    bemvindo.style.display = "flex";
    tonarJornalista.style.display = "block";
    destaqueNomeBemVindo.innerText = newString;
  }
  if (valorEmailCadastro) {
    let newString = valorEmailCadastro.slice(
      0,
      valorEmailCadastro.indexOf("@")
    );
    popDisplayLogin.style.display = "none";
    backgroundModals.style.display = "none";
    modalCadastroDisplay.style.display = "none";
    botaoLogin.style.display = "none";
    bemvindo.style.display = "flex";
    tonarJornalista.style.display = "block";
    destaqueNomeBemVindo.innerText = newString;
  }
}

function verificarTemperatura() {
  let temperaturaAtual = document.querySelector(".temperaturaAtualPrevisao");
  let temperaturaSensacao = document.querySelector(".temperaturaSensacao");
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=-9.647&lon=-35.73&appid=81f7309983fa729c8c98fe4a5d5f6de3"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      temperaturaAtual.textContent = Math.floor(data.main.temp - 273.15);
      temperaturaSensacao.textContent = Math.floor(data.main.feels_like - 273.15);
      console.log(temperaturaAtual);
    });
  //temperatura vem como padrão em kelvin, converter em celsius!!!
}
verificarTemperatura();
loginButton.addEventListener("click", handleClickLogin);
botaoCadastrar.addEventListener("click", handleClickLogin);

botaoLogin.addEventListener("click", handleClick);

createAccount.addEventListener("click", handleClick);
btnTornarJornalista.addEventListener("click", handleClick);

closePage.forEach((tag) => tag.addEventListener("click", handleCloseModal));
feedbackJornalista.addEventListener("click", (event) => {
  event.preventDefault();
  alert(
    "Agradecemos por se inscrever para se tornar um jornalista em eNewsTech. Sua inscrição foi recebida com sucesso e está sendo avaliada por nossa equipe editorial."
  );
  btnTornarJornalista.style.display = "none";
});
