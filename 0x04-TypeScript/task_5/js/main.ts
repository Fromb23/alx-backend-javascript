interface majorCredits {
	credits: number;
	brand: 'major';
}

interface minorCredits {
	credits: number;
	brand: 'minor';
}

function sumMajorCredits(subject1: majorCredits, subject2: majorCredits): majorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		brand: 'major'
	};
}

function sumMinorCredits(subject1: minorCredits, subject2: minorCredits): minorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		brand: 'minor'
	};
}
