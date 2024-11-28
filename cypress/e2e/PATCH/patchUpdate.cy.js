describe("ReqresAPI", () => {
    it("PATCH update user", () => {
      cy.request({
        method: "PATCH",
        url: "https://reqres.in/api/users/2",
        body: {
          name: "yanto",
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
  
        expect(response.duration).to.be.lessThan(1000);
  
        const jsonData = response.body;
  
        expect(jsonData.name).to.equal("yanto");
  
      });
    });
  });
  