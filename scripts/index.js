// Store the wallet amount to your local storage with key "amount"
let showBalance=(localStorage.getItem("amount")) || 0;

document.getElementById("wallet").innerText=showBalance;

function addAmount(){
    let userBalance=(localStorage.getItem("amount")) || 0;


    let userAmount=document.getElementById("amount").value;
    console.log(userBalance);

    let totalBalance=Number(userAmount)+Number(userBalance);
    localStorage.setItem("amount", (totalBalance));

    document.getElementById("wallet").innerText=totalBalance;
}