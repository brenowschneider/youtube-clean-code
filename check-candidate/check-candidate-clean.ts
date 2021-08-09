// Based on the candidate curriculum, decide if the candidate is accepted for first interview for angular developer
// Candidate should have a valid name (first name and last name must have at least 2)
// Candidate must be experienced with at least Typescript and Angular
// Candidate must reside in USA

interface Candidate {
    firstName: string;
    lastName: string;
    experiencedWith: string[]
    country: string;
}

const isCandidateNameValid = (name: string) => {
    return name != '' && name.length > 2;
}

const isCandidateFullNameValid = (candidate: Candidate) => {
    return isCandidateNameValid(candidate.firstName) && isCandidateNameValid(candidate.lastName);
}

const isCandidateExperiencedWithAngularAndTypescript = (candidate: Candidate) => {
    const mustHaveExperiences = ['Javascript', 'Typescript'];
    return mustHaveExperiences.every((mustHaveExperience) => candidate.experiencedWith.includes(mustHaveExperience));
}

const candidateResidesInUSA = (candidate: Candidate) => {
    return candidate.country === 'USA';
}

const checkIfCandidateIsAcceptableForFirstInterview = (candidate: Candidate) => {
    return isCandidateFullNameValid(candidate) && isCandidateExperiencedWithAngularAndTypescript(candidate) && candidateResidesInUSA(candidate);
}

console.log(checkIfCandidateIsAcceptableForFirstInterview({
    firstName: 'Breno',
    lastName: 'Schneider',
    country: 'USA',
    experiencedWith: ['Javascript', 'Angular', 'Typescript']
}))



