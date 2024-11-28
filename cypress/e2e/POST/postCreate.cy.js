describe("ReqresAPI ", () => {
  it("POST create user", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        name: "gorot",
        job: "striker",
      },
    }).then((response) => {
      const jsonData = response.body;

      expect(response.status).to.equal(201);

      expect(response.duration).to.be.lessThan(1000);

      expect(jsonData.id).to.be.exist;

      expect(jsonData.name).to.equal("gorot");

      expect(jsonData.job).to.equal("striker");
    });
  });
});
