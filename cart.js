// Initialize Firebase
var config = {
    apiKey: "AIzaSyBXFkecTMS63pTQIgu4Q9Xf83vByxd1eHI",
    authDomain: "organicstore-265fa.firebaseapp.com",
    databaseURL: "https://organicstore-265fa.firebaseio.com",
    projectId: "organicstore-265fa",
    storageBucket: "organicstore-265fa.appspot.com",
    messagingSenderId: "140562411338"
  };
  firebase.initializeApp(config);

//GLOBAL
var products= JSON.parse(localStorage.getItem('cart'));
var cartItems=[];
var cart_n = document.getElementById('cart_n');
var table = document.getElementById("table");
var total=0;
//HTML
function tableHTML(i){
    return `
                <tr>
                <th scope="row">${i+1}</th>
                <td><img style="width:90px;" src="${products[i].url} ">
    `;
}
//RENDER
function render(){

}