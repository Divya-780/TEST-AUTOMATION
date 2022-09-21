describe('POST coach goal API', function () {
    it('Verifies that API post the coach goal', function () {

        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/lessons/coach/goal/',
            // failOnStatusCode: false,
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "currentGoal": 0,
                "currentGoalEnabled": true,
                "nextGoal": 0,
                "nextGoalEnabled": false
            },
            
            
        }).then(
            (response) => {
                expect(response.status).to.eq(200)


                // Verify body 
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('coach')
                expect(response.body).to.have.property('currentWeek')
                expect(response.body).to.have.property('currentGoal',0)
                expect(response.body).to.have.property('nextWeek')
                expect(response.body).to.have.property('currentGoalEnabled',true)
                expect(response.body).to.have.property('nextGoalEnabled',false)



            }
        )
    })
})