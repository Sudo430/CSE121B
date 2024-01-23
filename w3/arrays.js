let list = ['one', 'two', 'three']

let htmllist = list.map((item) => `<li>${item}</li>`).join("")

console.log(htmllist)

document.getElementById("myList").innerHTML = htmllist;

let lettGrade = ['A', 'B', 'A']

function gpac(grade){
    switch(grade){
        case "A":
            return 4
        case "B":
            return 3
        case "c":
            return 2
        case "D":
            return 1
        case "f":
            return 0
    }
}

let gpalist = lettGrade.map(gpac)

let gpa = lettGrade.reduce((total, grade) => gpac(grade) + parseInt(total), 0) / lettGrade.length
console.log(gpa)

let fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

let longfruit = fruit.filter((word) => word.length > 6)

console.log(longfruit)


let nums = [12, 34, 21, 54]

let luckNumber = 21;
console.log(nums.indexOf(luckNumber))