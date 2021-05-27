//1. 
/*
const str_input = prompt ("Input string"); 
let str_output = [] ; 
for (let i =0; i<str_input.length; i ++) 
{ 
    str_output.unshift(str_input[i]); 
};
console.log(str_output.join(""));
 */
//2.
 /*
   const str_input = prompt("Input string");
   function toUpper(str)
    {
        return str.toLowerCase().split(' ').map(function(Word) {

            return Word[0].toUpperCase() + Word.substr(1);
        })
        .join(' ');
   }
   console.log(toUpper(str_input))
   */
   
//3.
/*
const arr_input = prompt("Nhập dãy");
function unique(arr) {
    var formArr = arr.sort()
    var newArr = [formArr[0]]
    for (let i = 1; i < formArr.length; i++) {
      if (formArr[i] !== formArr[i - 1]) {
        newArr.push(formArr[i])
      }
    }
    return newArr
  }
  console.log(unique(arr_input))
  */
 //4.
 let mindX = [{
    name: "Quynh",
    age: 22,
    salary: 1,
    regency: "sinh vien",
}, {
    name: "Ngu",
    age: 21,
    salary: 1,
    regency: "Tu do",
}, {
    name: "Lam",
    age: 20,
    salary: 1,
    regency: "sinh vien",
}]
for (let i = 0; i <= mindX.index; i++) {
    console.log(i + 1 + ". " + mindX[i].name);
    console.log("Complete: ", mindX[i].Complete);
}


let command = prompt("Enter your command(Create, Delete, Update,Delete)");
if (command === "create") {
    let tao = {
        name: prompt("Nhập tên "),
        age: Number(prompt("Nhập tuổi")),
        salary: Number(prompt("Nhập mức lương")),
        regency: prompt("Chức vụ")
    };
    mindX.push(tao);
    alert("Thêm mới thành công");
    for (let i = 0; i < mindX.length; i++) {
        console.log(i + 1 + ". " + mindX[i].name);
    }
} else if (command === "update") {
    let position = Number(prompt("Nhập vị trí")) - 1;
    for (let i = 0; i < mindX.length; i++) {
        if (position === i) {
            mindX[position].name = prompt("Nhập tên");
            mindX[position].age = Number(prompt("Nhập tuổi"));
            mindX[position].salary = Number(prompt("Nhập mức lương"));
            mindX[position].regency = prompt("Chức vụ");

        }
    }
    for (let i = 0; i < mindX.length; i++) {
        console.log(i + 1 + ". " + mindX[i].name);
    }
    alert("Cập nhật thành công");

} else if (command === "delete") {
    let position = Number(prompt("Nhập vị trí")) - 1;
    for (let i = 0; i < mindX.length; i++) {
        if (position === i) {
            mindX.splice(position, 1);
        }
    }
    for (let i = 0; i < mindX.length; i++) {
        console.log(i + 1 + ". " + mindX[i].name);
    }
    alert("Xóa thành công");
} else if (command === "read") {
    for (let i = 0; i < mindX.length; i++) {
        console.log(mindX[i]);
    }
}
