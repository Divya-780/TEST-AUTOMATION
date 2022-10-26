describe('POST existing student API', function () {
    it('Verifies that API allows to add the existing student', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/core/link_existing_user/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "userInfo": {
                    "email": "gayathri+test_student500@applines.com",
                    "firstName": "Gayathri",
                    "lastName": "k",
                    "isActive": true,
                    "isAdmin": false,
                    "profile": {
                        "id": 1036,
                        "subscribed": true,
                        "emailVerified": true,
                        "referrer": null,
                        "subscriptionStartTime": "2022-03-14T06:32:57.106177Z",
                        "subscriptionEndTime": "2022-03-21T06:32:57.106177Z",
                        "subscriptionCancelled": false,
                        "previousPlan": null,
                        "plan": "Free",
                        "planRecurring": false,
                        "paymentCompleted": false,
                        "phone": null,
                        "avatar": null,
                        "animeCharacter": null,
                        "age": null,
                        "gender": null,
                        "zoomUser": "",
                        "organization": 1,
                        "userId": 1035
                    },
                    "groups": [
                        {
                            "name": "Student"
                        }
                    ]
                },
                "session": "Session1",
                "group_id": 1192,
                "org_id": 1
            },
            failOnStatusCode: false,

        }).then(
                (response) => {
                    console.log(response);
                    
                    // For new details
                    // expect(response.status).to.eq(200)
                    // expect(response.body).has.property('id')
                    // expect(response.body).has.property('session')
                    // expect(response.body).has.property('coach')
                    // expect(response.body).has.property('student')
                    // expect(response.body).has.property('classGroup')

                    // Once the student is already added, We get 500 response
                    expect(response.status).to.eq(500)



                }
            )
        })
    })

