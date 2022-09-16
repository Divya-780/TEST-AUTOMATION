describe('Lessons impromptu speech API Test', function () {
    it('Verifies that API returns list of lessons for impromptu speech', function () {

        // Fetch existing lesson details before adding new lesson
        var num_lessons
        var num_lessons_after_addition

        cy.request({
            url: 'https://dev02.speechpundit.com/api/lessons/impromptu_speech/',
            method: "GET",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b"
            },
        }).then(
            (response) => {
                num_lessons = response.body.length
            }
        )

        // Add a new lesson
        cy.request({
            url: 'https://dev02.speechpundit.com/api/lessons/impromptu_speech/',
            method: "POST",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b",
                "category": "Quality",
                "topic": "Benefits of test automation."
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(201)
                
            }
        )

        cy.request({
            url: 'https://dev02.speechpundit.com/api/lessons/impromptu_speech/',
            method: "GET",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b"
            },
        }).then(
            (response) => {
                // Verify body 
                console.log(response);
                num_lessons_after_addition = response.body.length
                var last_lesson_index = (num_lessons_after_addition - 1)
                expect(cy.wrap(num_lessons_after_addition - num_lessons).should('eql', 1))

                // Verify the presence of properties for each history entry
                expect(response.body[last_lesson_index]).to.have.property('id')
                expect(response.body[last_lesson_index]).to.have.property('category')
                expect(response.body[last_lesson_index]).to.have.property('topic')
                expect(response.body[last_lesson_index]).to.have.property('createdAt')
                expect(response.body[last_lesson_index]).to.have.property('updatedAt')

                // expect(cy.wrap(response.body[last_lesson_index].category)).to.eq("Quality")
                expect(response.body[last_lesson_index].category).to.eq("Quality")
                expect(cy.wrap(response.body[last_lesson_index].topic)).to.eq("Benefits of test automation.")
            }
        )
    })
})