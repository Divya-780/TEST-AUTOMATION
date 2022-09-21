describe('PUT custom template API test', function () {
    it('Verifies that API allows to update the custom tempalte', function () {
        cy.request({
            method: 'PUT',
            url: 'https://dev02.speechpundit.com/api/assessmentcriteria/update_custom_template/1336/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                
                id: 1336,
                templateTitle: "custom-test",
                assessmentCriteriaLevel: "Advanced",
                templateJson: [
                    {
                        id: 2,
                        category: "CONTENT",
                        subcategory: "Speech Development",
                        areaOfFocus: "Structure",
                        microFocusArea: "Opening",
                        autoGraded: false,
                        isAdminSelected: false,
                        isCoachSelected: true,
                        maxScore: 100,
                        customWeight: 0,
                        customScore: 0
                    }
                ],
                "coachId": 4354
                },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                    expect(response.body).has.property('id',1336)
                    expect(response.body).has.property('templateTitle','custom-test')
                    expect(response.body).has.property('assessmentCriteriaLevel','Advanced')
                    expect(response.body).has.property('templateJson')
                    expect(response.body).has.property('coachId',4354)

                }
            )
        })
    })

