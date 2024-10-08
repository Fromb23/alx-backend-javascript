namespace Subjects {
	// Declaration merging to add experienceTeachingC to Teacher interface
	export interface Teacher {
		experienceTeachingC?: number;
	}

	export class Cpp extends Subjects {
		getRequirements(): string {
			return 'Here is the list of requirements for Cpp';
		}
		getAvailableTeacher(): string {
			if (this.teacher.experienceTeachingC) {
				return `Available Teacher: ${this.teacher.firstName}` ; 
			} else {
				return 'No available teacher';
			}
		}
	}
}
