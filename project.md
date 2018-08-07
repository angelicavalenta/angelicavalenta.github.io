

- accounts UI is good for the dropdown  
- accounts entry had a little more freedom for pages

packages

iron:router

twbs: bootstrap (this will only give you Bootstrap 3 — so I havent been using)



folders

client

server

public

lib

- create 2 layouts for this project
  - the custom css includes body, but we have 2 templates, so assign an ID to your body
  - then on signing css specify the ID for body
- form-layout.html: use bootstrap 4 signin template
- router.js:
  - Router.configure — define the base template (form_layout)
  - map the URLs: Router.map
    - This is the old way — now you must use Router.route per iron-router guide
- Take out the FORM from form layout template
  - put YIELD

  Make the form function
  - in register.js, create the helper function



Configure the EMAIL verification for emails

https://docs.meteor.com/api/passwords.html#Accounts-emailTemplates

RESET your Mongo DB collection in a project

- meteor reset

  on html you are have REQUIRE for fields
  - test this out with the validation functions to make sure your validation functions are actually working
- Meteor.userId()
  - you can see if a user is logged in you get id or NULL

ACCESS CONTROL

- you can LOGOUT, and you get redirected. However, you can still go to /dashboard and view the info (not good)
- in router define a onBefore — USE ONE OF THE HOOKS
- before youre taken to this route … check something
