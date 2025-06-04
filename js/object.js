const objectLiteral = {};
const objectConstructor = new Object();
const student = {
    name: "evondev",
    age: 27,
    male: true,
    "last-name": "tuan",
    hi: function () {
        console.log("hello evondev");
    },
};

// dot notation
console.log(student.name);
// bracket notation ["key"]
console.log(student["age"]);
console.log(student["last-name"]);
// thay doi gia tri cua Object
student.age = 20;
student.male = "male";
student.isDeveloper = true;
student["is-developer"] = false;
student.hello = function() {
    console.log("hello");
}
console.log(student);
// cach xoa gia tri trong Object
delete student["last-name"];

// for in
for (let key in student) {
    if (key === "name") {
        console.log("hello name");
    }
    const value = student[key];
    console.log(`${key}:${value}`);
}

// object.keys() -> tra ve 1 mang chua tat ca keys cua object
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);

// Object.values(object) -> tra ve 1 mang chua tat ca gia tri cua object
const values = Object.values(student);
console.log(values);

// Object.entries(object) -> tra ve 1 mang nested gom co key va value
const entries = Object.entries(student);
console.log(entries);

// Object.assign()
const a = {
    firstName: "tuan",
};
const b = {
    lastName: "tran",
};
const c = Object.assign(a, b);
console.log(c);
const d = { ...a, ...b };
console.log(d);

// Object.freeze(object) -> ngan chan chinh sua key va value của object
const car = {
    brand: "BMW"
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
console.log(newCar);

// Object.seal(object) -> cho phep chinh sua key value nhung khong them key value moi
const user = {
    userName: "evondev",
    school: {
        name: "Cao Thang",
        room: {
            name: "IT",
        },
    },
};
// const newUser = Object.seal(user);
// newUser.userName = "tran anh tuan";
// console.log(newUser);

const newUser = { ...user };
newUser.userName = "trananhtuan";
// console.log(user);

// Object.assign
console.log(newUser);
const newUser2 = Object.assign({}, user);
console.log(newUser2);
// clone nested object
const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = "Designer";
console.log("New User3");
console.log(newUser3);

// this keyword
const student2 = {
    name: "evondev",
    age: 27,
    male: true,
    "last-name": "tuan",
    hi: function () {
        console.log(`my name is ${this.name} and i am ${this.age} years old`);
    },
    fullname: {
        name: "Tran Anh Tuan",
    },
};
student2.hi();

// obtional chaining
console.log(student2.fullname.name);
if (student2.fullname) {
    if (student2.fullname.name) {
        console.log(student2.fullname.name);
    }
}
console.log(student2.fullname?.name);

// destructuring object
// const { name, age, male, ...rest } = student2;
// console.log(rest);
function whatYourInfo(obj) {
    console.log(obj.name, obj.age, obj.school);
}
const newObj = {
    name: "evondev",
    age: 27,
    school: "Cao thang",
};
whatYourInfo(newObj);
// object destructuring parameter 
function whatYourInfo2({ name, age, school }) {
    console.log(name, age, school);
}
whatYourInfo2({
    name: "Tuan",
    age: 28,
    school: "Cao Thang",
});