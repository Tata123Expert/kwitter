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
roomName = localStorage.getItem("roomName");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(roomName).push
   ({
    name:userName,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function () /* Chamar a função getData */
          { firebase.database().ref("/"+roomName).on('value', function(snapshot) 
            { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
               { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") 
               {
          = childKey; /* Escreva a variável firebaseMessageId para conter todas as Ids únicas, das mensagens, geradas pelo firebase */
          = childData; /* Escreva a variável messageData para conter todas as mensagens, likes e nomes de usuário para todas as mensagens */
//Início do código
          console.log(); /* Escreva a variável firebaseMessageId para ser verificada no console */
          console.log(); /* Escreva a variável messageData para ser verificada no console */

          nome = messageData[]; /* Escreva a chave 'name' que irá buscar o valore do nome */ 
          message = messageData[]; /* Escreva a chave 'message' que irá buscar o valore da mensagem */ 
          like = messageData[];  /* Escreva a chave 'like' que irá buscar o número de likes para a mensagem */

          nameWithTag = "<h4> "+ nome +"<img class='user_tick' src='tick.png'></h4>";
          messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
          like_button ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
          spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = ; /* Coloque todas as variáveis acima dentro da variável row */      
        document.getElementById("").innerHTML += row; /* Chamar o id output */

//Fim do código
      } });  }); }
getData();

function (messageId) /* Chamar a função updateLike. *Importante: o messageId é a identificação única da mensagem no banco de dados. */
{
  console.log("botão de like pressionado - " + messageId);
	buttonId = ; /* Atribua o valor messageId a nova variável buttonId */
	likes = document.getElementById().value; /* Chamar a variável buttonId */
	updatedLikes = Number(likes) ; /* Incrementar em + 1 o número de likes e armazenar na variável updatedLikes. */
	console.log(); /* Adicionar a variável updatedLikes que armazena o valor de likes incrementado */

	firebase.database().ref().child().update({ /* Chamar o roomName para a ref e o messageId para o child */
		like :  /* Chamar a variável updatedLikes (que é o valor incrementade de like) na chave like. */ 
	 });

}

/* Adicionar a função logout que será a mesma presente no arquivo kwitterRomm.js */