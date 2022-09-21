describe('GET User history API Test', function () {
    it('Verifies that API returns history data', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/history/',
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
                var num_hist_entries = response.body.length
                var last_hist_index = (num_hist_entries - 1)
                expect(cy.wrap(num_hist_entries).should('be.gte', 0))

                // Verify the presence of properties for each history entry
                expect(response.body[last_hist_index]).to.have.property('createdAt')
                expect(response.body[last_hist_index]).to.have.property('duration',30)
                expect(response.body[last_hist_index]).to.have.property('favourite')
                expect(response.body[last_hist_index]).to.have.property('feedback')
                expect(response.body[last_hist_index]).to.have.property('historyId')
                expect(response.body[last_hist_index]).to.have.property('id')
                expect(response.body[last_hist_index]).to.have.property('mp4VideoUrl')
                expect(response.body[last_hist_index]).to.have.property('plottedVideoUrl')
                expect(response.body[last_hist_index]).to.have.property('thumbnailUrl')
                expect(response.body[last_hist_index]).to.have.property('title')
                expect(response.body[last_hist_index]).to.have.property('verbalScore')
                expect(response.body[last_hist_index]).to.have.property('videoUrl')
                expect(response.body[last_hist_index]).to.have.property('visualScore')
                expect(response.body[last_hist_index]).to.have.property('voiceScore')
                expect(response.body[last_hist_index]).to.have.property('userId',4354)


            }
        )
    })
})