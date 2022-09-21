describe('GET client config API Test', function () {
    it('Verifies that API returns the client config data.', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/client_config/1/',
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

                expect(response.body).to.have.property("id",1)
                expect(response.body).to.have.property("organization",1)
                expect(response.body).to.have.property("freePlanMaxVideos",2)
                expect(response.body).to.have.property("basicPlanMaxVideos",5)
                expect(response.body).to.have.property("premiumPlanMaxVideos",10)
                expect(response.body).to.have.property("freePlanMaxRecordingTimeInMinutes",3)
                expect(response.body).to.have.property("basicPlanMaxRecordingTimeInMinutes",3)
                expect(response.body).to.have.property("premiumPlanMaxRecordingTimeInMinutes",5)
                expect(response.body).to.have.property("tryNowMaxTimesToPoll",6)
                expect(response.body).to.have.property("tryNowPollIntervalInSeconds",10)
                expect(response.body).to.have.property("tryNowMaxRecordingTimeInMinutes",1)
                expect(response.body).to.have.property("tryNowPreparationTimeInSeconds",30)
                expect(response.body).to.have.property("allowAssessmentTemplate",false)
                expect(response.body).to.have.property("allowCoachesToChangeOrgDefaultTemplate",false)
                expect(response.body).to.have.property("allowCoachesToGiveCustomFeedback",false)
                expect(response.body).to.have.property("allowCoachesToPickTextToSpeechForCustomFeedback",false)
                expect(response.body).to.have.property("addCoaches",false)
            }
        )

    })
})