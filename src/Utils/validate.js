export const checkValidData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (!isEmailValid) return 'Invalid email address. Please enter a valid one.';

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if (!isPasswordValid) return 'Invalid password. Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character.';

    return null;
};
 