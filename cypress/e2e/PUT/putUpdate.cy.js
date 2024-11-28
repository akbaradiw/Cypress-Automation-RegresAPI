describe("ReqresAPI", () => {
  it("PUT update user", () => {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      body: {
        name: "jarwo",
        job: "crusader",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);

      expect(response.duration).to.be.lessThan(1000);

      const jsonData = response.body;

      expect(jsonData.name).to.equal("jarwo");

      expect(jsonData.job).to.equal("crusader")
    });
  });
});
