interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearOfExperience?: number;
	location: string;
	[key: string]: any;
}

class TeacherClass implements Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	location: string;
	[key: string]: any;

	constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.fullTimeEmployee = fullTimeEmployee;
		this.location = location;
	}
}

interface Director extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction(firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`
};

interface StudentConstructor {
	new (firstName: string,lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
	workOnHomework: string;
	displayName: string;
}

class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;

	constructor(public firstName, public lastName) {}

	workOnHomework: string {
		return "Currently working"
	}
	displayName: string {
		return this.firstName;
	}
}
