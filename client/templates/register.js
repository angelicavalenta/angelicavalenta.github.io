Template.register.events({
  "submit .form-signup": function(event){
    let full_name = event.target.full_name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    // let password2 = event.target.password2.value;

    //https://docs.meteor.com/api/passwords.html#Accounts-createUser
    //the options we have available are username // email // password // profile
    //we didnt need to include isValidPassword because its already included

    // if(isValidPasswordMatch(password, password2)) {
    Accounts.createUser({
      email: email,
      password: password,
      profile: {
        full_name: full_name,
        // last_name: last_name
      }
    }, function(err){
      if (err) {
        sAlert.error(err.reason);

      } else {
        Router.go('/home');
      }
    });
    // }
    //prevents the form from actually submitting
    return false;

  }

});

//Validation Rules
isValidPassword = function(password) {
  if (password.length<6) {
    sAlert.error('Password must be at least 6 characters');
    return false;
  }
  return true;
};

//not the variable fields in the parameter
// isValidPasswordMatch = function(password, confirm) {
//   if(!isValidPassword(password)) {
//     return false;
//   }
//   if(password !== confirm) {
//     sAlert.error('Passwords do not match');
//     return false;
//   }
//   return true;
// };
