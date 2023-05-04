let response = await fetch(`https://restcountries.com/v3.1/all`);
let json
if (response.ok) {
  json = await response.json();
} else {
  alert("Ошибка HTTP: " + response.status);
}

export default json