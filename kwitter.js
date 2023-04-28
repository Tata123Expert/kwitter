
function addUser()
{
  userName = document.getElementById("userName").value;
  
  localStorage.setItem("userName", userName);
  
    window.location = "kwitterRoom.html"; /* Escreva o nome da página para onde seremos redirecionados. */
}

