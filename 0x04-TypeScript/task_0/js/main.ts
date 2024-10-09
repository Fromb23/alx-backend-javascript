interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {firstName: 'John', lastName: 'Doe', age: 20, location: "New York"};
const Student2: Student = {firstName: 'Jane', lastName: 'Smith', age: 22, location: 'Los Angeles'};

const studentList: Student[] = [student1, student2];
