let xhr = new XMLHttpRequest()
console.log(xhr);
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function() {
    const data = JSON.parse(xhr.response)
    console.log(data);
    console.log(xhr.status);
 for(let i=0;i< data.length;i++)
 {
    console.log("countyFlags",data[i].flag)  
    
 }for(let j=0;j< data.length;j++)
 {
    console.log(`
    Counties Name:${data[j].name.common}
    Region :${data[j].region}
    Sub-region: ${data[j].subregion}
    population :${data[j].population}
    `);
    
    
 }
}
        
        