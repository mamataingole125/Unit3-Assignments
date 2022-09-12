var obj={
    Pizza:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    Samosa:"https://b.zmtcdn.com/data/dish_photos/327/7f1cf2ddc51dc3347c32988aaedca327.jpg?output-format=webp",
    Icecream:"https://b.zmtcdn.com/data/pictures/chains/4/19058604/ab34579de32327dcec8fc86723e974db_o2_featured_v2.jpg?output-format=webp",
    Kachori:"https://b.zmtcdn.com/data/dish_photos/bec/f24c20551d2fc67b1065b8cbd6a7abec.jpg?output-format=webp",
    Dosa:"https://b.zmtcdn.com/data/pictures/2/19968232/51edd95041e99b28db7fe07d1d854be9_featured_v2.jpg?output-format=webp",
    Burger:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    GulabJamun:"https://b.zmtcdn.com/data/dish_photos/c68/a87e3f6dc816464ef53b24ccc8c8cc68.jpg",
};

document.getElementById("submit").addEventListener("click",myfunction)
function myfunction(e){
    e.preventDefault();
    // document.getElementById("_food").innerHTML=""
   
    let checkbox=document.querySelectorAll('input[type="checkbox"]:checked');
    console.log(checkbox)
    let arrvalue=[];
    checkbox.forEach(function(e){
        arrvalue.push(e.value);
        console.log(e)
    })

    for(let i=0; i<arrvalue.length; i++){
        orderdata(arrvalue[i]);
    }
};


function orderdata(food){
    let status="open"
    let promise=new Promise(function(resolve,reject){
        let time=Math.round(Math.random()*4000);
        var h3=document.createElement("h3");
        h3.innerHTML=`please wait ${Math.ceil(time/1000)}'sec to ready your ${food}`;
        document.getElementById("show_time").append(h3)
        if(status=="closed"){
            reject("sorry,restaurant is closed")
            h3.innerHTML=null
        }else{
            setTimeout(function(){
                resolve(`Your order for ${food} is ready`)
            },time)
        }
    })
      .then(function(res){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=obj[food];
    div.append(img);
    document.getElementById("_food").append(div);
    document.getElementById("show_time").innerText="";
    document.getElementById("form").reset();
    // console.log(res)

}).catch(function(err){
    alert(err);
})

document.getElementById("_food").innerText="";


}


