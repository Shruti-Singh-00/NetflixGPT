export const checkValidData = (name,email,password) => {

    const IsNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const IsEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email); 
    const IsPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!IsNameValid) return "Name is not valid";
    if (!IsEmailValid) return "Email Id is not valid";
    if (!IsPasswordValid) return "Password is not valid";

    return null;
}