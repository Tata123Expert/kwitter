const firebaseConfig = 
{
  apiKey: "AIzaSyCHHUCQlfJ532a_LZKfaSUmb_KZrLngoTk",
  authDomain: "projeto-42-2b993.firebaseapp.com",
  databaseURL: "https://projeto-42-2b993-default-rtdb.firebaseio.com",
  projectId: "projeto-42-2b993",
  storageBucket: "projeto-42-2b993.appspot.com",
  messagingSenderId: "321970097754",
  appId: "1:321970097754:web:e7bdf2612ebde88cc0d263"
};

firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update
  (
    { 
     purpose : "adicionar nome de sala"
    }
  );

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot)
       { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
          { childKey  = childSnapshot.key;
                roomNames = childKey;

       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";

      document.getElementById("output").innerHTML += row; 
      /* Importante: Se apenas escrevermos "=" apenas o nome da sala será exibido. No entanto, quando temos muitos nomes
        de salas, e queremos exibir todos dentro de um único elemento HTML, utilizamos "+=" e em seguida escrevemos a variável row para enfileirar. */
       });
      });

}

getData();

function redirectToRoomName(name)
{
  console.log(name); 
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}
 
function logout()
   {
     localStorage.removeItem("userName");
     localStorage.removeItem("roomName");
      window.location = ("index.html");
   }
