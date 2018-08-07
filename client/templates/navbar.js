Template.navbar.events({
  "click .logout-btn": function(event){
    Meteor.logout(function(err){
      if(err) {
        sAlert.error(err.reason);
      } else {
        Router.go('/');
      }
    });
  }
});
