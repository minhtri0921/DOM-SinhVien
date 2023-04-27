const students = [
    {
        id: 1,
        name: 'Nguyen Van Teo',
        classId: 1
    },
    {
        id: 2,
        name: 'Nguyen Van Ti',
        classId: 2
    },
    {
        id: 3,
        name: 'Tran Van Tun',
        classId: 3
    },
    {
        id: 4,
        name: 'Nguyen Thi Heo',
        classId: 1
    },
    {
        id: 5,
        name: 'Le Thi Be',
        classId: 1
    }
]

const classList = [
    {
        id: 1,
        name: "CNTT"
    },
    {
        id: 2,
        name: 'DTVT'
    },
    {
        id: 3,
        name: 'THXD'
    },
    {
        id: 4,
        name: 'XDDD'
    }
]
let tableElement = $("table#table")
const heading = `<tr>
<th>ID</th>
<th>Tên Sinh Viên</th>
<th>Lớp</th>
<th>Chức năng</th>
</tr>`

let htmls = ''
function render(students) {
    htmls = ''
    students.forEach(function (student) {
        let className = classList.find(cls => student.classId === cls.id)
        htmls += `<tr>
<td>${student.id}</td>
<td>${student.name}</td>
<td>${className.name}</td>
<td colspan="2"><button onclick = "edit(${student.id})">Sửa<button  onclick="remove(${student.id})">Xóa</td>
</tr>`
    })
    tableElement.html(heading + htmls)
}
render(students)
$("button#add").click(function () {
    let newName = $("input#name").val()
    let e = document.getElementById("class");
    let giaTri = e.selectedIndex;
    let newSV = {
        id: students.length + 1,
        name: newName,
        classId: giaTri
    }
    students.push(newSV)
    render(students)
})
function edit(id) {
    let editStudent = students.find(function (st) {
        return st.id === id
    })
    let index = students.findIndex(function (st) {
        return st.id === id
    })
    console.log(editStudent);
    $("input#name").val(editStudent.name)
    let e = document.getElementById("class");
    document.getElementById('class').value = e.options[editStudent.classId].value
}