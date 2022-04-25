// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let selectedMovie=JSON.parse(localStorage.getItem("movie"));

let movie=document.getElementById("movie");

// console.log(selectedMovie);

let div=document.createElement("div")

let title=document.createElement("h2");
title.innerText=selectedMovie.Title;
let img=document.createElement("img")
img.src=selectedMovie.Poster;

div.append(title, img);

movie.append(div);


function submit(){
    let userName=document.getElementById("user_name").value;
    let userSeat=document.getElementById("number_of_seats").value;
    console.log(userSeat);

    let userBalaced=localStorage.getItem("amount");
    // console.log(userBalaced);

    let bookAmount=userSeat*100;
    console.log(bookAmount);
    if(userBalaced>=bookAmount){
        dedetectedAmount=userBalaced-bookAmount;
        alert('Booking successful!');
        localStorage.setItem("amount", dedetectedAmount);


        document.getElementById("wallet").innerText=dedetectedAmount;
    }else{
        alert('Insufficient Balance!');
    }
}
