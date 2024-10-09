namespace Subjects {
	export interface Teacher {
		experienceTeachingReact?: number;
	}
	export class React extends Subject {
		getRequirements(): string {
			return 'Here is the list of requirements for React';
		}

		getAvailabeTeacher(): string {
			if (this.teacher.experienceTeachingReact) {
				return `Available teacher: ${this.teacher.firstName}`;
			} else {
				return 'No available teacher';
			}
		}
	}
}
