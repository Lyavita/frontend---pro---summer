function Student(name, arrMarks) {
    this.name = name;
    this.arrMarks = arrMarks;
    this.sayHi = function () {
        console.log(`Hi, bro. I'm ${this.name}`);
    };
    this.averageMark = function () {
        console.log(this.arrMarks.reduce((total, mark) => total + mark) / this.arrMarks.length);
    };
}

const students = [
    new Student('Student 1', [10, 9, 8, 0, 10]),
    new Student('Student 12', [10, 0, 8, 0, 3, 4])
];

students[1].sayHi();
students[1].averageMark();
