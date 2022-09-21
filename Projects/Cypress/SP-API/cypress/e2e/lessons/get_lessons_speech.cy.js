describe('Fetch lessons of speech API Test', function () {
    it('Verifies that API returns list of lessons for speech', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/lessons/speech/',
            method: "GET",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)

            }
        )
    })
})