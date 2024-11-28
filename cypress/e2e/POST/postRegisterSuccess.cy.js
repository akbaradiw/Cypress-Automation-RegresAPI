describe("ReqresAPI", () => {
  const expectedResponse = {
    id: 4,
    token: "QpwL5tke4Pnpja7X4",
  };

  it("POST register success", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/register",
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);

      expect(response.duration).to.be.lessThan(1000);

      expect(response.body).to.have.property("id", expectedResponse.id);
      expect(response.body).to.have.property("token", expectedResponse.token);
    });
  });
});
