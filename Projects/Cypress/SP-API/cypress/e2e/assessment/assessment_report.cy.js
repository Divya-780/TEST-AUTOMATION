describe('Assessment report API Test', function () {
    it('Verifies that API returns assessment report for users', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/assessment/assessment-report/',
            method: "GET",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                // expect(response.headers).to.have.property('content-type', 'application/json')
                
                // Verify body 
                console.log(response);
                var num_user_entries = response.body.length
                var last_user_index = (num_user_entries - 1)
                expect(cy.wrap(num_user_entries).should('be.gte', 10))

                // Verify the presence of properties for each user entry
                expect(response.body[last_user_index]).to.have.property('userId')
                expect(response.body[last_user_index]).to.have.property('email')
                expect(response.body[last_user_index]).to.have.property('videoId')
                expect(response.body[last_user_index]).to.have.property('createdAt')
                expect(response.body[last_user_index]).to.have.property('duration')
                expect(response.body[last_user_index]).to.have.property('visualAssessmentScore')
                expect(response.body[last_user_index]).to.have.property('visualAssessmentCreatedAt')
                expect(response.body[last_user_index]).to.have.property('voiceAssessmentScore')
                expect(response.body[last_user_index]).to.have.property('voiceAssessmentCreatedAt')
                expect(response.body[last_user_index]).to.have.property('verbalAssessmentScore')
                expect(response.body[last_user_index]).to.have.property('verbalAssessmentCreatedAt')

            }
        )
    })
})