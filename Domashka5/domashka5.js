
alert("Задание №1");
let animal = ["кот", "собака", 5, 6, "Попугай"];
alert(animal);
animal.splice(2, 2, "Рыба");
alert(animal);



alert("Задание №2")
let number = [1,2,3,4,5];
let arrae = ["один", "Два"];
let number1 = number.slice(-3);
let arr = arrae.concat(number1);
alert(arr);



alert("Задание №3");
let arr3 = [1, 2, 3];
alert(arr3);
arr3.reverse();
alert(arr3);



alert("Задание №4");
function compare(a, b) {
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}
let arr4 = [3, 4, 1, 2, 7];
alert(arr4);
arr4.sort(compare);
alert(arr4);


 
alert("Задание №5");

let str5 = "my-short-string";

function changing_a_line(str5){
    let line = str5;
    let arr_line = line.split('-');
    let final_line = arr_line.join('');
    alert(final_line);
}
alert(str5);
changing_a_line(str5);



alert("Задание №6");
function compare(a, b) {
    if(a > b) return -1;
    if(a == b) return 0;
    if(a < b) return 1;
}
let arr6 = [3, 4, 1, 2, 7];
alert(arr6);
arr4.sort(compare);
alert(arr6);

