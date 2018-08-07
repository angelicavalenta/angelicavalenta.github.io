Template.login.events({
  "submit .form-signin": function(event) {
    let email = event.target.email.value;
    let password = event.target.password.value;

    Meteor.loginWithPassword(email, password, function(err) {
      if(err){
        //don't let the form clear
        event.target.email.value = email;
        event.target.password.value = password;
        sAlert.error(err.reason);
      } else {
        Router.go('/home')
      }
    })

    //prevent submit
    return false;
  }
});
