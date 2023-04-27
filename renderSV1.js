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
let tableElement = document.getElementById("table")
let heading = `<tr>
<th>ID</th>
<th>Tên Sinh Viên</th>
<th>Lớp</th>
<th>Chức năng</th>
</tr>`
let htmls = ""
function renderSV(students) {
    htmls = ''
    students.forEach(function (student) {
        const className = classList.find(cls => student.classId === cls.id)
        htmls += `<tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${className.name}</td>
        <td colspan="2"><button onclick = "edit(${student.id})">Sửa<button  onclick="remove(${student.id})">Xóa</td>
        </tr>`
    }
    )
    tableElement.innerHTML = heading + htmls
}
renderSV(students)
function add() {
    let newName = document.getElementById('name').value
    let e = document.getElementById("class");
    let giaTri = e.selectedIndex;
    let newStudent = {
        id: students.length + 1,
        name: newName,
        classId: giaTri
    }
    students.push(newStudent)
    document.getElementById('name').value = ''
    document.getElementById('class').value = e.options[0].value;
    renderSV(students)
}
function edit(id) {
    let index = students.findIndex(function (std) {
        return std.id == id
    })
    var editStudent = students.find(function (st) {
        return st.id == id;
    })
    document.getElementById('name').value = editStudent.name
    let e = document.getElementById("class");
    document.getElementById('class').value = e.options[editStudent.classId].value
    let upDateBtn = document.getElementById('update')
    let createBtn = document.getElementById('add')
    upDateBtn.style.display = "block"
    createBtn.style.display = "none"
    upDateBtn.onclick = function () {
        let newName = document.getElementById('name').value
        let e = document.getElementById("class");
        let giaTri = e.selectedIndex;

        editStudent = {
            id: id,
            name: newName,
            classId: giaTri
        }
        console.log(editStudent)
        students[index] = editStudent;
        renderSV(students)
        upDateBtn.style.display = "none"
        createBtn.style.display = "block"
        document.getElementById('class').value = e.options[0].value
        document.getElementById('name').value = ''
    }


}
function remove(id) {
    console.log(id);
    let confirm = window.confirm("Bạn có muốn xóa ? ")
    let index = students.findIndex(function (std) {
        return std.id == id
    })
    if (confirm === true) {
        students.splice(index, 1)
    }
    renderSV(students)
}