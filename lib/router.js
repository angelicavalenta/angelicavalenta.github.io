Router.configure({
  layoutTemplate: 'form_layout'
});


Router.route('/', function () {
  this.render('login');
});



Router.route('/posts', function () {
  this.render('posts');
});


Router.route('/register');
Router.route('/home');
Router.route('/strategy');



Router.route('/dashboard', {
  // this.render('dashboard');
  onBeforeAction: function () {
    // all properties available in the route function
    // are also available here such as this.params
    if (!Meteor.userId()) {
      // if the user is not logged in, render the Login template
      this.render('/login');
      this.layout('form_layout')
    } else {
      // otherwise don't hold up the rest of hooks or our route/action function
      // from running
      this.next();
    }
  },
  template: 'dashboard',
  layoutTemplate:'dashboard_layout'
});
