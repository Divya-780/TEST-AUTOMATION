describe('Generate titles of recorded videos API Test', function () {
    it('Verifies that titles are generated for recorded videos.', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/recorded_video/generate_titles',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('content-type', 'application/json')
                
                // Verify body 
                console.log(response);
                expect(response.body).to.eq(true)

            }
        )

    })
})