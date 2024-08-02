let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1000}],
        internals: [{name: 'Jack', salary: 1300}]
    }
}
function calculateTotalSalary(department) {
    let totalSalary = 0;
    if (Array.isArray(department)) {
        for (let employee of department) {
            totalSalary += employee.salary;
        }
    } else {
        for (let subDepartment of Object.values(department)) {
            totalSalary += calculateTotalSalary(subDepartment);
        }
    }
    return totalSalary;
}
let total = calculateTotalSalary(company);
console.log(total);
