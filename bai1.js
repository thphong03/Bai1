let diem1 = "Toan";
let student = {
    ten : 'phuong',
    diem:{
        [diem1] : 10,
        diem2 : 11,
    },

}

function Student( ten, tuoi, diem1,diem2){
    this.ten = ten;
    this.tuoi = tuoi;
    this.diem1 = diem1;
    this.diem2 = diem2;
}

let xeploai = function (diem1, diem2){
    let diemtb = (diem1 + diem2)/2;
    let xeploaidiemtb = "";
    if(diemtb>= 8){
        xeploaidiemtb = "Gioi";
    }
    else if(diemtb>=7){
        xeploaidiemtb = "Kha";
    }else{
        xeploaidiemtb = "TB";
    }
    return xeploaidiemtb;
}

let student1 = new Student("Nguyen Van A", 20,9,9);
let student2 = new Student("Nguyen Van B", 21,8,8);
let student3 = new Student("Nguyen Van C", 22,7,7);
let student4 = new Student("Nguyen Van D", 23,1,6);

let students = [student1, student2, student3, student4];

let sum1=0;
for( const student of students ){
   sum1 += student.tuoi;
}

let sum = students.reduce(function(sum, student){
    return sum += student.tuoi;
},0);


let quamon = students.filter(function(student){
    let tbc  = (student.diem1 + student.diem2)/2;
    return tbc>=4;
});

let kiemtra = false;
for(const student of students){
    if(student.diem1<4 || student.diem2<4){
        check = true;
    }
}

let checksome = students.some(function(student){
    return student.diem1<4 || student.diem2<4
});

let checkevery = students.every(function(student){
    return student.diem1<4 || student.diem2<4
});



// sử dụng map để in ra sếp loại của từng sinh viên
const classifications = students.map(student => {
    return {
       classification: xeploai(student.diem1, student.diem2)
    };
});

// sử dung reduce để tính điểm tb sinh viên trong lớp

const totalScore = students.reduce((accumulator, student) => {
    return accumulator + (student.diem1 + student.diem2)/2;
}, 0);

const averageScore = totalScore / students.length;
// sử dụng some để kiểm tra sinh viên dưới 18 hay không

let checktuoi = students.some(function(student){
    return student.tuoi<18
});
// sử dụng every để kiểm tra lớp có đầy đủ tên hay không
let checkTen = students.every(function(student) {
    return student.ten && student.ten.trim() !== '';
});

//Trương Ngọc Thanh Phong - 2180605924