describe("A Project", function() {

  var project;

  beforeEach(function() {
    project = new app.models.Project({
      title: "My amazing test project",
      url: "http://localhost.com"
    });
  });

  it("should be able to retreive the title", function() {
    expect(project.get("title")).toEqual("My amazing test project");
  });

  it("should not have an id because its not persisted", function(){
    expect(project.id).toBeUndefined();
  });

  it("should have an cid", function(){
      expect(project.cid).not.toBe(null);
  });

  describe("Persistance in local storage", function(){
    beforeEach(function(){
      var projectList = new app.collections.ProjectsList();
      projectList.add(project);
      projectList.sync();
    });

  });

  describe("Setting an attribute", function(){
    beforeEach(function(){
      project.set({
        "title": "Cool Beans"
      });
    });

    it("should update the title", function() {
      expect(project.get("title")).toEqual("Cool Beans Changed");
    });
  });

});