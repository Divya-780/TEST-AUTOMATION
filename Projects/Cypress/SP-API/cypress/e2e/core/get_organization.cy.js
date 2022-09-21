describe('GET Organization API', function () {
    it('Verifies that API the organization', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/organization/',
            method: "GET",
            headers: {
                "Authorization": "Token 8b4d889de82266ae1cfad6537813d4856e5b5cec"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('content-type', 'application/json')
                
                // Verify body 
                console.log(response);
                expect(response.body).to.have.property("id",1)
                expect(response.body).to.have.property("name")
                expect(response.body).to.have.property("description")



            }
        )
    })
})