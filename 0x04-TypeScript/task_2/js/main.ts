interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}
	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}
	workDirectorTasks(): string {
		return 'Getting to director tasks'
	}
}

function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher ();
	} else {
		return new Director ();
	}
}

interface Employee {
	role: string;
}

function isDirector(employee: Employee): employee is Director {
	return employee.role === 'Director';
}

function executeWork(employee: Employee) {
	if (isDirector(employee)) {
	       	employee.workDirectorTasks();
	} else {
		employee.workTeacherTasks();
	}
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') {
		return 'Teaching Math';
	} else {
		return 'Teaching History';
	}
}
