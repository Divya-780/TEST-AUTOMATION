describe('Fetch lessons of coach goal API Test', function () {
    it('Verifies that API returns list of lessons of coach goal', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/lessons/coach/goal/',
            method: "GET",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                // expect(response.headers).to.have.property('content-type', 'application/json')
                
                // // Verify body 
                // console.log(response);
                // var num_lessons = response.body.length
                // var last_lesson_index = (num_lessons - 1)
                // expect(cy.wrap(num_lessons).should('be.gte', 10))

                // // Verify the presence of properties for each history entry
                // expect(response.body[last_lesson_index]).to.have.property('id')
                // expect(response.body[last_lesson_index]).to.have.property('category')
                // expect(response.body[last_lesson_index]).to.have.property('topic')
                // expect(response.body[last_lesson_index]).to.have.property('createdAt')
                // expect(response.body[last_lesson_index]).to.have.property('updatedAt')

            }
        )
    })
})