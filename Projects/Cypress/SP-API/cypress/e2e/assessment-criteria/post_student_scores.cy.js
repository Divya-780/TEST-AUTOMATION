describe('POST student scores API Test', function () {
    it('Verifies that API allows to give the cusotm scores', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/assessmentcriteria/student_scores/',
            headers: {
              Authorization: 'Token 9107e0ebb09126e987aec733aee556f9c71e1d13',
            },
            body:{
                "overallContentScore": 60,
                "overallDeliveryScore": 0,
                "overallLanguageScore": 0,
                "overallContentWeight": 100,
                "overallDeliveryWeight": 0,
                "overallLanguageWeight": 0,
                "overallStudentScore": 60,
                "templateJson": [
                    {
                        "id": 2,
                        "category": "CONTENT",
                        "subcategory": "Speech Development",
                        "areaOfFocus": "Structure",
                        "microFocusArea": "Opening",
                        "autoGraded": false,
                        "isAdminSelected": false,
                        "isCoachSelected": true,
                        "maxScore": 100,
                        "customWeight": 0,
                        "customScore": 60
                    }
                ],
                "videoId": 2873,
                "templateId": 1469
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

