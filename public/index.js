const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();

  request.open("GET", url);

  request.addEventListener("load", callback);

  request.send();
};

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
  debugger;
  populateList(beers);
}

const populateList = function(beers){

  const select = document.getElementById("beers-list")
  for (let beer of beers){
    const li = document.createElement("li");
    li.innerText = beer.name;
    select.appendChild(li);
  };
};

var app = function(){

  const url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);

}

window.addEventListener('load', app);
