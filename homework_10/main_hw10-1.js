const users = [
    {name: 'Viktor', surname: 'Bulash', age: 20, city: 'Chernigiv'}
]
function getInfo(user) {
    return `Name: ${user.name}\nSurname: ${user.surname}\nAge: ${user.age}\nCity: ${user.city}`
}
console.log(getInfo(users[0]))

const user = {
    name: 'Viktor',
    surname: 'Bulash',
    age: 20,
    city: 'Chernigiv',
    getInfo: function() {
        return `Name: ${this.name}\nSurname: ${this.surname}\nAge: ${this.age}\nCity: ${this.city}`;
    }
};
console.log(user.getInfo());
