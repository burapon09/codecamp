// function checkAge(num)
// {
//     return (num>=18)? true : confirm("let Permission?");
// }

// let age = prompt("อายุ",18);
// if(checkAge(age)){
//     alert("อนุ")

// }else{
//     alert("ห้าม");
// }

// function showMovie(num){
//     if (!checkAge(num)){
//         return "อายุไม่ถึง";
//     }else{
//         alert ("ok")
//     }
// }


let key = prompt("Enter Key") ;

let obj = {};

while(key !=="stop"){
    let value = prompt("Enter value");
    if(value > 1 ) key += "s";
    obj[key] = value ;
    key = prompt("Enter key");

}


