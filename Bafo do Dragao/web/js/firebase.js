
//---------------------------------------------------------------------------Initialize Firebase
var config = {
    apiKey: "AIzaSyC-GQ3tuW86HrSnsM2KK8G-3PahazEZ0vk",
    authDomain: "bafo-do-dragao.firebaseapp.com",
    databaseURL: "https://bafo-do-dragao.firebaseio.com",
    projectId: "bafo-do-dragao",
    storageBucket: "bafo-do-dragao.appspot.com",
    messagingSenderId: "816735082939"
};
firebase.initializeApp(config);

//---------------------------------------------------------------------------Função Firebase Para Login
var uiConfig = {
    signInSuccessUrl: './diversao.html', //Aqui colocamos a URL da página de ele deve redirecionar depois do login
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
};

/* Use isso se precisar usar o login.
 //Initialize the FirebaseUI Widget using Firebase.
 var ui = new firebaseui.auth.AuthUI(firebase.auth());
 // The start method will wait until the DOM is loaded.
 ui.start('#firebaseui-auth-container', uiConfig);
 */
//---------------------------------------------------------------------------Script que consome os dados do Json-->

initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // Usuário Logado, você pode consumir essas informações
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            user.getIdToken().then(function (accessToken) {
                $('#nome').html(displayName);//Exemplo de consumo do nome
                $("#oi").attr("src", photoURL);//Exemplo de Consumo da Foto
                $("#sair").click(function () {
                    firebase.auth().signOut().then(function () {
                        //Função que faz logoff da conta logada
                    }).catch(function (error) {
                        // An error happened.
                    });
                });//Exemplo de Consumo da Foto

            });
        } else {//Caso ele esteja deslogado você pode exibir alguma coisa pra ele
            // User is signed out.
            window.location = "./login.html";//Página que será aberta após deslogar            
        }
    }, function (error) {//Em caso de erro ao conectar vc pode exibir o erro ou uma outra mensagem                    
        console.log(error);
    });
};
/*Use isso se precisar puxar dados do Json de Login
 window.addEventListener('load', function () {//Essa função starta o APP automaticamente ao carregar a pagina
 initApp();
 });
 */




