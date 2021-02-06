class PersonGenderError extends Error {
    constructor(message = "Invalid Gender, 1 - man. 2 - woman") {
        super(message);
    }
}

module.exports = {PersonGenderError}