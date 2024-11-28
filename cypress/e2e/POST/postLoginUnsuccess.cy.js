describe("ReqresAPI ", () => {
    it("POST register unsuccess", () => {
      cy.request({
        method: "POST",
        url: "https://reqres.in/api/register",
        body: {
            "email": "peter@klaven",
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.equal(400);
  
        expect(response.duration).to.be.lessThan(1000);
  
        expect(response.body).to.have.property("error", "Missing password");
      });
    });
  });
  