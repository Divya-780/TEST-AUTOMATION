describe('Profiles avatar API Test', function () {
    it('Verifies that API returns the profile avatar.', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/profiles/avatar/',
            method: "GET",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('content-type', 'application/json')
                
                // Verify body, presence of properties 
                console.log(response);
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('avatar')
                
            }
        )

    })
})