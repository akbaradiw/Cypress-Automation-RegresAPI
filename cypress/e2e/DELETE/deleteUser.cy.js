describe("ReqresAPI Testing ", () => {
  it("DELETE User", () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/user/2",
    }).then((response) => {
      expect(response.status).to.equal(204);

      expect(response.duration).to.be.lessThan(700);

      expect(response.headers).to.not.have.property("content-type");
    });
  });
});
