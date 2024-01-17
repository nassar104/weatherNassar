let finshMyHttp;



httpeRquest("cairo")

document.getElementById("ctySearch").addEventListener("keyup", f => { httpeRquest(f.target.value) });








// Http Rquestfunction

function httpeRquest(sty){
let myHttp = new XMLHttpRequest();
myHttp.open( 'GET' , `https://api.weatherapi.com/v1/forecast.json?key=30d4047040ae45239e481607241601&q=${sty}&days=3`)
myHttp.send();
myHttp.addEventListener('readystatechange', function() {
    if (myHttp.readyState == 4) {
        
        finshMyHttp = JSON.parse(myHttp.response)

        if(!finshMyHttp.error){

            document.getElementById("sty").innerHTML=`<h1>${finshMyHttp.location.name}</h1>`
            let forEyseUsehtt = finshMyHttp.forecast.forecastday
            addCard(forEyseUsehtt);
            
        }

    
    }

})
}




// function add card from weather in html
function addCard(showMyHttp) {

    document.getElementById('dadta').innerHTML=''

    for(i=0 ; i<showMyHttp.length ; i++){
    let date = getdat(showMyHttp[i]);
    document.getElementById('dadta').innerHTML += `

    <div class="col-md-8 col-lg-6 col-xl-4">
        <div class="card" style="color: #4B515D; border-radius: 35px;">
            <div class="card-body p-4">
                <div class="d-flex">
                  <h4 class="flex-grow-1">${date[0]}</h4>
                  <h6>${date[1]},${date[2]}</h6>
                </div>
                <div class="d-flex flex-column text-center mt-5 mb-4">
                  <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${showMyHttp[i].day.avgtemp_c}°C </h6>
                  <span class="small" style="color: #868B94">${showMyHttp[i].day.condition.text}</span>
                </div>
                <div class="d-flex align-items-center">
                  <div class="flex-grow-1" style="font-size: 1rem;">
                    <div><i class="fas fa-wind" style="color: #868B94;"></i> <span class="ms-1"> ${showMyHttp[i].day.avgvis_km} km/h
                    </span></div>
                    <div><i class="fas fa-tint" style="color: #868B94;"></i> <span class="ms-1"> ${showMyHttp[i].day.avghumidity}% </span>
                    </div>
                    <div><i class="fa-solid fa-cloud-rain" style="color: #868B94;"></i> <span class="ms-1"> ${showMyHttp[i].day.daily_chance_of_rain}  </span>
                    </div>
                  </div>
                  <div>
                  <img src="https:${showMyHttp[i].day.condition.icon}" alt="" width=90>
                    
                  </div>
                </div>
    
            </div>
        </div>
    
            </div>`
}

}

// function to add date in arry

function getdat(day) {
        let d = new Date(day.date);
       let aryd =d.toDateString('')   
        return aryd.split(" "); 
        
}
    
