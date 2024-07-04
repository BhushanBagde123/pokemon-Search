


let image =document.querySelector("#pokeImage");
document.querySelector("#stat2").style.display = 'none';
let names =document.querySelector("#name");
let status =document.querySelector("#stats");
let moves =document.querySelector("#moves");
let button =document.querySelector("#button2");
button.style.display = 'block';
let button1=document.querySelector("#button1");
let input =document.querySelector("#search");
let serachButton=document.querySelector("#searchButton");

let id=1;
let n=400;
let x=0;
function nextButton(){
    document.querySelector("#stat").style.display=`block`;

    if(id<0){
        alert("Not found");
    }
    else if(id<=n){
    document.querySelector("#stat2").style.display=`none`;

        id+=1;
        document.querySelector("#types").innerHTML = '';
    // console.log(id);
    let url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    getData(url);
}
}
button.addEventListener("click",nextButton);

function priviousButton(){
     if(id>=x){
        id-=1;
        document.querySelector("#types").innerHTML = '';
    
    // console.log(id);
    let url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    getData(url);
}

}
button1.addEventListener("click",priviousButton);

// console.log(id);
// const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
const getData=async(url)=>{
    let response=await fetch(url);
    // console.log('response is:',response);
    if(response.status == 404){
        document.querySelector("#stat").style.display=`none`;
document.querySelector("#stat2").style.display = 'block';


       
button.style.display="block";
        // alert("Error!!!!");
    }else{
    let data=await response.json();
    // console.log(data);
    image.src=data.sprites.front_default;
    image.innerText=image.src;
    names.innerHTML=`<p id="name">name=${data.name}</p>`;
    document.querySelector("#weight").innerHTML=`<p  id="weight">weight=${data.weight} KG</p>`;
    document.querySelector("#height").innerHTML=`<p id="height"> height= ${data.height*10}cm</p>`;
    // const newData=(data.types[0].type.url);
    // console.log(newData);
    let type=(data.types);
    // console.log(newData);
    for(x in type){
        let typesOne=(type[x].type.name);
       
        // console.log("type=" +typesOne);
        // document.querySelector("#types").innerHTML = '';
        document.querySelector("#types").innerHTML+=` <p id="types">type=${typesOne}</p>`
        // document.querySelector("#types").innerHTML = '';
    }
   
}}

function searchPokemon() {
    const searchTerm = input.value.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;
    document.querySelector("#types").innerHTML = '';
    getData(url);
}

serachButton.addEventListener("click", function () {
    
    searchPokemon();
});   
let initialUrl=`https://pokeapi.co/api/v2/pokemon/${id}`;
getData(initialUrl);
