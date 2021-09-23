var al_archivo=""
var TXT=""


// Function to handle the search criteria via button click
function handleClickSearch() {

   linkscoto=TXT.split("\n");
 

   if (TXT == "") {
   document.getElementById("file").innerHTML ="No ha ingresado un archivo";
   } else
   
   if (links[1].substring(0,24) == "https://www.cotodigital3") {
       document.getElementById("file").innerHTML ="Bajando Coto";
       al_archivo="";
       api_callcoto();
 
   } else
   if (links[1].substring(0,16) == "https://www.vea") {
        document.getElementById("file").innerHTML ="Bajando VEA";
       //al_archivo="";
       //api_callvea();
 } else
   document.getElementById("file").innerHTML ="El archivo no es válido";

}


document.getElementById('inputfile')
            .addEventListener('change', function() {
              
            var fr=new FileReader();
            fr.onload=function(){
                TXT=fr.result;
            }
              
            fr.readAsText(this.files[0]);
        })

function handlepruebacoto() {
    al_archivo=""
    api_callpruebacoto();   
}

// Attach an event to listen for the buttons
d3.select("#search-btn").on("click", handleClickSearch);



function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


async function api_call(){
for (var i = 0; i < links.length; i++) {
       
       document.getElementById("file").innerHTML = i + 1 + ": "+ links[i];
       var url = "https://scrapers-caravaggio.herokuapp.com/vea/search/";
       var updated_url = url + links[i];
             
        await fetch(updated_url)
          .then(function (response) {
            return response.text();
          })
          .then(function (data) {
                  
           al_archivo = al_archivo + links[i] + ";" + data + "\n" ;
           
          
          })
          .catch(function (err) {
            console.log(err);
          });    
    }

document.getElementById("file").innerHTML = "Listo!"
    
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

download(year + "-" + month + "-" + date + "-" + hours + "-" + minutes + "-" + seconds+".csv",al_archivo);    
}


document.getElementById("file").innerHTML = "Listo!"
    
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

download(year + "-" + month + "-" + date + "-" + hours + "-" + minutes + "-" + seconds+".csv",al_archivo);    
}



async function api_callcoto(){

linkscoto=TXT.split("\n");


for (var i = 0; i < linkscoto.length; i++) {
  document.getElementById("file").innerHTML = i + 1 + ": "+ linkscoto[i];     
  
       var url = "https://scrapers-caravaggio.herokuapp.com/coto/search/";
       var ult= linkscoto[i];
       
       ult=ult.substring(54);
       ult=ult.replace("/_/","");
       var updated_url = url + ult;
                    
        await fetch(updated_url)
          .then(function (response) {
            return response.text();
          })
          .then(function (data) {
                  
           al_archivo = al_archivo + linkscoto[i].replace(/(\r\n|\n|\r)/gm, "") + ";" + data + "\n" ;
           
          
          })
          .catch(function (err) {
            console.log(err);
          });    
    }

document.getElementById("file").innerHTML = "Listo!"
    
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

download(year + "-" + month + "-" + date + "-" + hours + "-" + minutes + "-" + seconds+".csv",al_archivo);    
}
