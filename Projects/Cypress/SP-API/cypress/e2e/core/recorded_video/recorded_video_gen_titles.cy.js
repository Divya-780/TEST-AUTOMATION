describe('Generate titles of recorded videos API Test', function () {
    it('Verifies that titles are generated for recorded videos.', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/recorded_video/generate_titles',
            method: "GET",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b"
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