// Truong Ngoc Thanh Phong 2180605924
class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }

    // Phương thức tính điểm trung bình
    getAverage() {
        return (this.score1 + this.score2) / 2;
    }

    // Phương thức xếp loại
    getRank() {
        const avg = this.getAverage();
        if (avg >= 8) return "Giỏi";
        if (avg >= 6.5) return "Khá";
        if (avg >= 5) return "Trung Bình";
        return "Yếu";
    }
}

// Tạo mảng 4 sinh viên
const students = [
    new Student("Nguyễn Văn A", 20, 9, 9),
    new Student("Nguyễn Văn B", 21, 8, 8),
    new Student("Nguyễn Văn C", 22, 8, 6),
    new Student("Nguyễn Văn D", 23, 3, 6)
];
// Promise 1: Random số từ 0-10, nếu là số chẵn sau 2s trả về student, nếu lẻ reject
const promise1 = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 11);
    console.log("Promise 1 - Random number:", randomNum);
    setTimeout(() => {
        if (randomNum % 2 === 0) {
            resolve(students[0]);
        } else {
            reject("Dữ liệu lỗi");
        }
    }, 2000);
});

// Promise 2: Random số từ 0-10, nếu là số chẵn sau 4s trả về student, nếu lẻ reject
const promise2 = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 11);
    console.log("Promise 2 - Random number:", randomNum);
    setTimeout(() => {
        if (randomNum % 2 === 0) {
            resolve(students[1]);
        } else {
            reject("Dữ liệu lỗi");
        }
    }, 4000);
});

// Sử dụng Promise.all
Promise.all([promise1, promise2])
    .then(results => {
        console.log("Lấy dữ liệu hoàn thành", results);
    })
    .catch(error => {
        console.log("Lỗi xảy ra trong Promise.all:", error);
    });

// Sử dụng Promise.race
Promise.race([promise1, promise2])
    .then(result => {
        console.log("Đã lấy được dữ liệu", result);
    })
    .catch(error => {
        console.log("Lỗi xảy ra trong Promise.race:", error);
    });
