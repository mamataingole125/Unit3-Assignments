

var arr=[];

function product(n,p,b){
    this.name=n;
    this.price=p;
    this.brand=b
}


function storeProduct(e){
e.preventDefault();
let form=document.getElementById("product");

let name=form.name.value;

let price=form.price.value;

let brand=form.brand.value;

let p1=new product(name,price,brand)

arr.push(p1)

console.log("arr:",arr)


}