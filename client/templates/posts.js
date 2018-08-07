
Template.posts.events({
  'submit .post-form': function(event) {
    let message = event.target.message.value;
    let date = new Date();

    Posts.insert({
      message: message,
      full_name: Meteor.user().profile.full_name,
      date: date.toLocaleString(),
      createdAt: date
    }, function(err){
      if(err) {
        sAlert.error(err.reason)
      }
    });
    $('#exampleModal').modal('hide');
    event.target.message.value = "";

    return false;
  }
});


Template.posts.helpers({
  posts: function(){
    return Posts.find({}, {sort: {createdAt: -1}})
  }
})
