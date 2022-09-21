describe('POST custom template API Test', function () {
    it('Verifies that API returns the custom template', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/assessmentcriteria/custom_template/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                
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
                templateTitle: "custom4",
                assessmentCriteriaLevel: "Intermediate"
                
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                    expect(response.body).has.property('id')
                    expect(response.body).has.property('templateTitle')
                    expect(response.body).has.property('assessmentCriteriaLevel')
                    expect(response.body).has.property('templateJson')
                    expect(response.body).has.property('coachId',4354)


                }
            )
        })
    })

