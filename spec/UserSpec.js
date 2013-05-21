describe("A User", function() {

  var user;

  beforeEach(function(){
    user = new app.models.User({
      firstName: 'Corey',
      lastName: 'Trombley',
      imageUrl: 'uploads/me.jpg',
      bio: "some text goes here",
      mission: 'some more text here'
    });
  });

  it("should know how to print the entire name", function(){
    expect(user.fullName()).toEqual("Corey Trombley");
  });
});