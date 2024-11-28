describe("ReqresAPI", () => {
    it("POST login success", () => {
  
      cy.request({
        method: "POST",
        url: "https://reqres.in/api/login",
        body: {
          email: "eve.holt@reqres.in", 
          password: "cityslicka",
        },
      }).then((response) => {
  
        expect(response.status).to.equal(200);
  
        expect(response.duration).to.be.lessThan(1000);
  
        expect(response.body).to.have.property("token");
      });
    });
  });
  