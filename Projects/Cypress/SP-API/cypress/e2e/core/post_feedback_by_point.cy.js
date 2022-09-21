describe('Feedback point API', function () {
    it('Verifies that API allows to post all the details about the feedback keypoints ', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/core/feedback/point/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "feedbackPoint": {
                    "description": "Project your voice to the front of the room.",
                    "isGrow": true,
                    "id": 3,
                    "time": 11
                },
                "feedbackId": 220,
                "historyId": 2840
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                    expect(response.body).has.property('id')
                    expect(response.body).has.property('createdAt')
                    expect(response.body).has.property('updatedAt')
                    expect(response.body).has.property('points')
                    expect(response.body).has.property('voiceType')
                    expect(response.body).has.property('annotations')

                }
            )
        })
    })

