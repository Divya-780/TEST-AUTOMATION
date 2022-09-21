describe('GET streak API', function () {
    it('Verifies that API to fetch the details of the lessonplan list', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/lessons/student/streak/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                console.log(response);
                expect(response.body).has.property('studentGoal')
                expect(response.body).has.property('streak')
                expect(response.body).has.property('coachGoal')

                
      
            }
        )
    })
})