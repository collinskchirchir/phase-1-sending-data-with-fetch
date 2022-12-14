function submitData(username, mail)
{
  const credentials = {
    name: username,
    email: mail};
  console.log(credentials)
  const configurationObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(credentials)
  }
  console.log(configurationObject)
  return fetch(`http://localhost:3000/users`, configurationObject)
    .then(response => response.json())
    .then(data => renderData(data))
    .catch(error => renderError(error))
  
}

function renderData(data){
  const body = document.querySelector('body');
  const responseId = document.createElement('h1');
  responseId.textContent = data.id;
  body.appendChild(responseId);
}
function renderError(error)
{
  const errorMessage = document.createElement('p');
  errorMessage.textContent = error.message;
  const body = document.querySelector('body')
  body.append(errorMessage);
}

document.addEventListener('DOMContentLoaded',()=> {
  submitData("kevin", "kevin@gmail.com")
})