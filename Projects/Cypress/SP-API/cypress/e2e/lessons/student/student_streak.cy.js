describe('Student Streak API Test', function () {
    it('Verifies that API returns the lessons for student streak.', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/lessons/student/streak/',
            method: "GET",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('content-type', 'application/json')
                
                // Verify body 
                console.log(response);
                // var num_telprompt_setting_entries = response.body.length
                // expect(cy.wrap(num_telprompt_setting_entries).should('be.eql', 1))

                // Verify the presence of properties for each video entry
                expect(response.body).to.have.property('studentGoal')
                expect(response.body).to.have.property('streak')
                expect(response.body.coachGoal).to.have.property('id')
                expect(response.body.coachGoal).to.have.property('coach')
                expect(response.body.coachGoal).to.have.property('currentWeek')
                expect(response.body.coachGoal).to.have.property('currentGoal')
                expect(response.body.coachGoal).to.have.property('nextWeek')
                expect(response.body.coachGoal).to.have.property('nextGoal')
                expect(response.body.coachGoal).to.have.property('currentGoalEnabled')
                expect(response.body.coachGoal).to.have.property('nextGoalEnabled')

            }
        )

    })
})