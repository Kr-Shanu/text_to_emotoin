myHeaders.append("apikey", "OuiE0N2WtdoTCWzpQhmETou0XFrF3lsQ");

var raw = "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep";

var requestOptions = {
    method: 'POST',
    redirect: 'follow',
    headers: myHeaders,
    body: raw
};

fetch("https://api.apilayer.com/text_to_emotion", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));