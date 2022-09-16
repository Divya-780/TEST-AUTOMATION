describe('History of archive video API Test', function () {
    it('Verifies that API returns history of archive video', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/archive/',
            method: "GET",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b",
                "video_id": 24
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                console.log(response)
                expect(response.isOkStatusCode).to.eq(true)
                
            }
        )

    })
})