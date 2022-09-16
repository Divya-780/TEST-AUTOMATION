describe('Count of recorded videos API Test', function () {
    it('Verifies that API count of recorded videos.', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/recorded_video/count',
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
                var num_vdo_entries = response.body
                expect(cy.wrap(num_vdo_entries).should('be.gte', 10))

            }
        )

    })
})