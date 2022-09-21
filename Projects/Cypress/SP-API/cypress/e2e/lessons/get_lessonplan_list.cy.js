describe('GET lessonplan list API', function () {
    it('Verifies that API returns the details of the lessonplan list', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/lessons/lesson_plan_list/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                // expect(response.body.data).has.property('id')
                
                // Verify body 
                var num_lessons = response.body.length
                var last_lesson_index = (num_lessons - 1)
                expect(cy.wrap(num_lessons).should('be.gte', 2))

                expect(response.body[last_lesson_index]).to.have.property('id')
                expect(response.body[last_lesson_index]).to.have.property('title')
                expect(response.body[last_lesson_index]).to.have.property('level')
                expect(response.body[last_lesson_index]).to.have.property('intro')
                expect(response.body[last_lesson_index]).to.have.property('closing')
                expect(response.body[last_lesson_index]).to.have.property('speechTime')
                expect(response.body[last_lesson_index]).to.have.property('createdAt')
                expect(response.body[last_lesson_index]).to.have.property('updatedAt')
                expect(response.body[last_lesson_index]).to.have.property('keypoints')



            }
        )
    })
})