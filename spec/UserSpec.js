describe("A User", function() {

  var user;

  beforeEach(function(){
    user = new app.models.User({
      firstName: 'Corey',
      lastName: 'Trombley',
      imageUrl: 'uploads/me.jpg',
      bio: "Well ard coder from NYC",
      mission: 'some more text here'
    });
  });

  it("should know how to print the entire name", function(){
    expect(user.fullName()).toEqual("Corey Trombley");
  }),

  it("should know how to print the bio", function(){
    expect(user.attributes.bio).toEqual("Well ard coder from NYC");
  });
});