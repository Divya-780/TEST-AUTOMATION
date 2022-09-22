describe('Single Recorded video API Test', function () {
    it('Verifies that API returns info about a particular recorded video.', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/recorded_video',
            method: "GET",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b",
                "video_id": "1404"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('content-type', 'application/json')
                
                // Verify body 
                console.log(response);
                var num_vdo_entries = response.body.length
                var last_vdo_index = (num_vdo_entries - 1)
                expect(cy.wrap(num_vdo_entries).should('be.eql', 1))

                // Verify the presence of properties for each video entry
                expect(response.body[last_vdo_index]).to.have.property('id')
                expect(response.body[last_vdo_index]).to.have.property('videoUrl')
                expect(response.body[last_vdo_index]).to.have.property('mp4VideoUrl')
                expect(response.body[last_vdo_index]).to.have.property('duration')
                expect(response.body[last_vdo_index]).to.have.property('thumbnailUrl')
                expect(response.body[last_vdo_index]).to.have.property('createdAt')
                expect(response.body[last_vdo_index]).to.have.property('title')

            }
        )

    })
})