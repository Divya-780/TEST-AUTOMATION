describe('Fetch lessons of user speech API Test', function () {
    it('Verifies that API returns list of lessons for student', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/lessons/lesson_plan/621/',
            method: "DELETE",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
            failOnStatusCode: false,
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(400)
                
                // // Verify body 
                expect(response.body).contains("Can't delete as lesson plan is already in use.")


            }
        )
    })
})