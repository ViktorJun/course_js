class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.spec = specialization;
        this.rating = rating;
    }
    displayInfo(){
        console.log(`Coach: ${this.name}, Specialization: ${this.spec}, Rating: ${this.rating}`);
    }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo();
coach2.displayInfo();

