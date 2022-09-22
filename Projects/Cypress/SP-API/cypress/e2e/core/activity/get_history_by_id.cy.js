describe('History of video API Test', function () {
    it('Verifies that API returns history of video', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/history/560',
            method: "GET",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b",
                "video_id": 560
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)  
            }
        )

    })
})