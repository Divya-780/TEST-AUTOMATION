describe('POST save_org_config API', function () {
    it('Verifies that API save the organization settings', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/core/save_org_config/189/',
            headers: {
              Authorization: 'Token 8b4d889de82266ae1cfad6537813d4856e5b5cec',
            },
            body:{
                "freePlanMaxVideos": 2,
                "basicPlanMaxVideos": 6,
                "premiumPlanMaxVideos": 11,
                "freePlanMaxRecordingTimeInMinutes": 3,
                "basicPlanMaxRecordingTimeInMinutes": 3,
                "premiumPlanMaxRecordingTimeInMinutes": 5,
                "tryNowMaxTimesToPoll": 6,
                "tryNowPollIntervalInSeconds": 10,
                "tryNowMaxRecordingTimeInMinutes": 1,
                "tryNowPreparationTimeInSeconds": 30,
                "allowAssessmentTemplate": false,
                "allowCoachesToChangeOrgDefaultTemplate": false,
                "allowCoachesToGiveCustomFeedback": false,
                "allowCoachesToPickTextToSpeechForCustomFeedback": false,
                "addCoaches": false,
                "organization": 189
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                    expect(response.body).to.eq(true)
                }
            )
        })
    })

