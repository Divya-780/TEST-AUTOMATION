describe('Single Recorded video API Test', function () {
    it('Verifies that API returns info about a particular recorded video.', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/recorded_video/2875/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c",
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)

                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('videoUrl')
                expect(response.body).to.have.property('mp4VideoUrl')
                expect(response.body).to.have.property('duration')
                expect(response.body).to.have.property('thumbnailUrl')
                expect(response.body).to.have.property('createdAt')
                expect(response.body).to.have.property('title')

            }
        )

    })
})