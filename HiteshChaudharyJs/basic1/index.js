const uid = 123;
var firstName = "Mansi";
var lastName = "Sehgal";
var email = "mansisehgal22@gmail.com";
var password = "mansi123@";
var confirmPassword = "mansi123@";
var country = "India";
var state = "Rajasthan";
var city = "Jaipur";
var pinCode = 302019;
var courseCount = 0;
var isLoggedInFromGoogle = false;

console.log(
  `
  With unique Id: ${uid}
  User Name: ${firstName + lastName}
  user Email is: ${email}
  password is: ${password}
  country is: ${country}
  state is: ${state}
  city is: ${city}
  pincode is: ${pinCode}
  courseCount is: ${courseCount}
  is user logged in from google: ${isLoggedInFromGoogle}
  `
);
