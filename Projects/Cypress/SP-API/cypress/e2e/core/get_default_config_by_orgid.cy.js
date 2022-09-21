describe('GET default config API Test', function () {
    it('Verifies that API returns the default config for settings in org admin', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/default_config/189/',
            method: "GET",
            headers: {
                "Authorization": "Token 8b4d889de82266ae1cfad6537813d4856e5b5cec"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property("addCoaches")
                expect(response.body).to.have.property("allowAssessmentTemplate")
                expect(response.body).to.have.property("allowCoachesToChangeOrgDefaultTemplate")
                expect(response.body).to.have.property("allowCoachesToGiveCustomFeedback")
                expect(response.body).to.have.property("allowCoachesToPickTextToSpeechForCustomFeedback")
                expect(response.body).to.have.property("basicPlanMaxRecordingTimeInMinutes")
                expect(response.body).to.have.property("basicPlanMaxVideos")
                expect(response.body).to.have.property("freePlanMaxRecordingTimeInMinutes")
                expect(response.body).to.have.property("freePlanMaxVideos")
                expect(response.body).to.have.property("id")
                expect(response.body).to.have.property("organization")
                expect(response.body).to.have.property("premiumPlanMaxRecordingTimeInMinutes")
                expect(response.body).to.have.property("premiumPlanMaxVideos")
                expect(response.body).to.have.property("tryNowMaxRecordingTimeInMinutes")
                expect(response.body).to.have.property("tryNowMaxTimesToPoll")
                expect(response.body).to.have.property("tryNowPollIntervalInSeconds")
                expect(response.body).to.have.property("tryNowPreparationTimeInSeconds")
            }
        )
    })
})