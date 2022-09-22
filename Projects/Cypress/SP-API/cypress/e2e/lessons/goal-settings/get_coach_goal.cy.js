describe('GET goal API Test', function () {
    it('Verifies that API to fetch the details of the goal set by the coach', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/lessons/coach/goal/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)

                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('coach')
                expect(response.body).to.have.property('currentWeek')
                expect(response.body).to.have.property('currentGoal')
                expect(response.body).to.have.property('nextWeek')
                expect(response.body).to.have.property('nextGoal')
                expect(response.body).to.have.property('currentGoalEnabled')
                expect(response.body).to.have.property('nextGoalEnabled')
            }
        )
    })
})