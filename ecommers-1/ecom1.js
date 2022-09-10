
function productFunction(pro,c,i,pri,g,sol){

    this.Product_name=pro
    this.Category=c
    this.Image_url=i
    this.Price=pri
    this.Gender=g
    this.soldOrNot=sol
}


var arr=JSON.parse(localStorage.getItem("Products")) || []



function adminPanel(e){
e.preventDefault();

let form=document.getElementById("product")

let Product_name=form.name.value

let Category=form.category.value

let Image_url=form.image.value

let Price=form.price.value

let Gender=form.gender.value

let sol=form.sold.value

var p1=new  productFunction(Product_name,Category,Image_url,Price,Gender,sol)

arr.push(p1)

localStorage.setItem("Products",JSON.stringify(arr))

console.log(arr)

}




// function  removeitem(elem,index){
//     arr.splice(index,1)

// }
