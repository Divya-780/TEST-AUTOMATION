describe('GET lessons API Test', function () {
    it('Verifies that API returns list of lessons for student', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/class/lessons/',
            method: "GET",
            headers: {
                "Authorization": "Token 1c35f9ebce3d5e7e99287e552775f502c43c0be2"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                
                // // Verify body 
                // console.log(response);
                // var num_lessons = response.body.length
                // var last_lesson_index = (num_lessons - 1)
                // expect(cy.wrap(num_lessons).should('be.gte', 10))

                // // Verify the presence of properties for each history entry
                // expect(response.body[last_lesson_index]).to.have.property('id')
                // expect(response.body[last_lesson_index]).to.have.property('coach')
                // expect(response.body[last_lesson_index]).to.have.property('student')
                // expect(response.body[last_lesson_index]).to.have.property('lesson')
                // expect(response.body[last_lesson_index]).to.have.property('assignedDate')
                // expect(response.body[last_lesson_index]).to.have.property('dueDate')
                // expect(response.body[last_lesson_index]).to.have.property('completionDate')
                // expect(response.body[last_lesson_index]).to.have.property('group')
                // expect(response.body[last_lesson_index]).to.have.property('recordedVideo')
                // expect(response.body[last_lesson_index]).to.have.property('score')


            }
        )
    })
})