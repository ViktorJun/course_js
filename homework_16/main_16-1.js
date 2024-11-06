function CreateStudent(firstName, lastName, birthYear, grades = []) {
    const attendance = new Array(25).fill(null);

    return {
        firstName: firstName,
        lastName: lastName,
        birthYear: birthYear,
        grades: grades,
        attendance: attendance,

        getAge: function() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.birthYear;
        },

        getAverageGrade: function() {
            if (this.grades.length === 0) return 0;
            const sum = this.grades.reduce((total, grade) => total + grade, 0);
            return sum / this.grades.length;
        },

        present: function() {
            const emptyIndex = this.attendance.indexOf(null);
            if (emptyIndex !== -1) {
                this.attendance[emptyIndex] = true;
            } else {
                console.log("Масив відвідуваності заповнений.");
            }
        },

        absent: function() {
            const emptyIndex = this.attendance.indexOf(null);
            if (emptyIndex !== -1) {
                this.attendance[emptyIndex] = false;
            } else {
                console.log("Масив відвідуваності заповнений.");
            }
        },

        getAverageAttendance: function() {
            const attended = this.attendance.filter(status => status === true).length;
            const totalClasses = this.attendance.filter(status => status !== null).length;
            return totalClasses ? attended / totalClasses : 0;
        },

        summary: function() {
            const avgGrade = this.getAverageGrade();
            const avgAttendance = this.getAverageAttendance();

            if (avgGrade > 90 && avgAttendance > 0.9) {
                return "Молодець!";
            } else if (avgGrade > 90 || avgAttendance > 0.9) {
                return "Добре, але можна краще";
            } else {
                return "Редиска!";
            }
        }
    };
}

const student1 = CreateStudent("Іван", "Іваненко", 2003, [95, 90, 100, 85]);
const student2 = CreateStudent("Марія", "Петренко", 2004, [80, 85, 70, 75]);
const student3 = CreateStudent("Олег", "Коваленко", 2002, [100, 95, 98, 99]);

student1.present();
student1.present();
student1.absent();

student2.present();
student2.absent();
student2.present();

student3.present();
student3.present();
student3.present();

console.log(`${student1.firstName} ${student1.lastName}, вік: ${student1.getAge()}`);
console.log(`Середній бал: ${student1.getAverageGrade()}`);
console.log(`Відвідуваність: ${student1.getAverageAttendance()}`);
console.log(student1.summary());

console.log(`${student2.firstName} ${student2.lastName}, вік: ${student2.getAge()}`);
console.log(`Середній бал: ${student2.getAverageGrade()}`);
console.log(`Відвідуваність: ${student2.getAverageAttendance()}`);
console.log(student2.summary());

console.log(`${student3.firstName} ${student3.lastName}, вік: ${student3.getAge()}`);
console.log(`Середній бал: ${student3.getAverageGrade()}`);
console.log(`Відвідуваність: ${student3.getAverageAttendance()}`);
console.log(student3.summary());
