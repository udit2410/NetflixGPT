export const Validate=(Email,Password)=>{
    
      
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(Email);
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);

    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "A minimum 8 characters password contains a combination of uppercase and lowercase letter and number."

     return null


}