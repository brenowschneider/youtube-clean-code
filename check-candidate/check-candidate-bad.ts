// Based on the candidate curriculum, decide if the candidate is accepted for first interview for angular developer
// Candidate should have a valid name (first name and last name must have at least 2 characters)
// Candidate must be experienced with Typescript and Angular
// Candidate must reside in USA (no visa sponsorship available)

interface Candidate {
    firstName: string;
    lastName: string;
    experiencedWith: string[]
    country: string;
}

const check = (candidate: Candidate) => {

    //Check if first name is valid
    if (candidate.firstName === '' || candidate.firstName.length <= 2) {
        return false;
    }

    //Check if last name is valid
    if (candidate.lastName === '' || candidate.lastName.length <= 2) {
        return false
    }

    //Check if candidate is experienced with Angular and Typescript
    if (!(candidate.experiencedWith.includes('Angular') && candidate.experiencedWith.includes('Typescript'))) {
        return false;
    }

    // Candidate must reside in USA
    if (!(candidate.country === 'USA')) {
        return false;
    }

    //All conditions were satisfied, returning true...
    return true;
}

console.log(check({
    firstName: 'Breno',
    lastName: 'Schneider',
    country: 'USA',
    experiencedWith: ['Javascript', 'Angular', 'Typescript']
}))



