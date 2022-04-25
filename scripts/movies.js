// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id;

function searchMovies(){
    
    let search=document.getElementById("search").value;
    
    const url=`https://www.omdbapi.com/?apikey=b4fdb7b7&s=${search}`;
    // console.log(search);

    fetch(url)
    .then((res) => {
        return res.json();
    })

    .then((res) => {
        // console.log(res);
        appendData(res);
    })

    .catch((err) =>{
        console.log(err);
    })

}

function debounce(time){
    if(id){
        clearTimeout(id);
    }

    id=setTimeout(() =>{
        searchMovies();
    }, time);
}

function appendData(res){
    let data=res.Search;
 console.log(data);

 data.map((ele) => {

    console.log(ele.Title);

     let movies=document.querySelector("#movies");
    
     let div=document.createElement("div");
    
     let img=document.createElement("img");
     img.src=ele.Poster;
     let name=document.createElement("p");
     name.innerText=ele.Title;

     let btn=document.createElement("button");
     btn.innerText="Book Now";
     btn.addEventListener("click", () =>{
         nextTab(ele);
     })

     div.append(img, name, btn);

     movies.append(div);
 }) 
}

function nextTab(data){
    console.log(data);
    localStorage.setItem("movie", JSON.stringify(data));
    window.location.href="checkout.html";
}