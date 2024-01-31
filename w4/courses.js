// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    section: [{sectionNum: 1, roomNum: '501', enrolled: 26, days: "TTH", instructor: "somebody"}, 
              {sectionNum: 2, roomNum: '404', enrolled: 28, days: "TTH", instructor: "somebodyelse"}],
    
    enrollStudent: function(x){
        this.section.forEach(element => {
            if(element.sectionNum == x){
                element.enrolled += 1
                populateTable(this)
            }
        })
    },

    dropStudent(x){
        this.section.forEach(element => {
            if(element.sectionNum == x){
                element.enrolled -= 1
                populateTable(this)
            }
        })
    }
};

function setCourseNameNum(course){
    document.querySelector("#courseName").innerHTML = course.name
    document.querySelector("#courseCode").innerHTML = course.code
}

function populateTable(course){
    let table = document.querySelector("#sections")
    table.innerHTML = ""
    course.section.forEach(element => {
        table.innerHTML += `<tr>
        <td>${element.sectionNum}</td>
        <td>${element.roomNum}</td>
        <td>${element.enrolled}</td>
        <td>${element.days}</td>
        <td>${element.instructor}</td>
        </tr>`
    });
}

setCourseNameNum(aCourse)
populateTable(aCourse)

document.querySelector("#enrollStudent").addEventListener('click',function () {aCourse.enrollStudent(document.querySelector("#sectionNumber").value)})
document.querySelector("#dropStudent").addEventListener('click',function () {aCourse.dropStudent(document.querySelector("#sectionNumber").value)})