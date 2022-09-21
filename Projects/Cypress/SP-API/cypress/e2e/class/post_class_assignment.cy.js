describe('Post a assignment', function () {
    it('Verifies that API allows to assign assignment to a student in the group', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/class/assignment/',
            failOnStatusCode: false,
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
            
                "lessonId": 621,
                "assignedDate": "2022-09-16",
                "dueDate": "2022-09-30",
                "completionDate": null,
                "groupId": 1151,
                "students": [
                    4336
                ],
                "level": "Intermediate",
                "templateId": "1336"
                
            },

        }).then(
                (response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body).to.eq(true)

                }
            )
        })
    })
