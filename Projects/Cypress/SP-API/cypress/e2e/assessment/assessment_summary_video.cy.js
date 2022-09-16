describe('Assessment summary report of video', function () {
    it('Verifies that API returns assessment summary report of video', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/assessment/summary/',
            method: "GET",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b",
                "video_id": 1404
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                // expect(response.headers).to.have.property('content-type', 'application/json')
                
                // // Verify body 
                console.log(response);
                // var num_rpt_entries = response.body.length
                // var last_rpt_index = (num_rpt_entries - 1)
                // expect(cy.wrap(num_rpt_entries).should('be.gte', 3))

                // // Verify the presence of properties for each user entry
                // expect(response.body["video"]).to.have.property('id')
                // expect(response.body[0]).to.have.property('id')
                // expect(response.body[last_rpt_index]).to.have.property('userId')
                // expect(response.body[last_rpt_index]).to.have.property('email')
                // expect(response.body[last_rpt_index]).to.have.property('videoId')
                // expect(response.body[last_rpt_index]).to.have.property('createdAt')
                // expect(response.body[last_rpt_index]).to.have.property('duration')
                // expect(response.body[last_rpt_index]).to.have.property('visualAssessmentScore')
                // expect(response.body[last_rpt_index]).to.have.property('visualAssessmentCreatedAt')
                // expect(response.body[last_rpt_index]).to.have.property('voiceAssessmentScore')
                // expect(response.body[last_rpt_index]).to.have.property('voiceAssessmentCreatedAt')
                // expect(response.body[last_rpt_index]).to.have.property('verbalAssessmentScore')
                // expect(response.body[last_rpt_index]).to.have.property('verbalAssessmentCreatedAt')

            }
        )
    })
})