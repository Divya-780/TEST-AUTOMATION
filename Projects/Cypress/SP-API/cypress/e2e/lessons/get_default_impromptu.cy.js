describe('Default impromptu speech API Test', function () {
    it('Verifies that API returns the default impromptu', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/lessons/default_impromptu/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('content-type', 'application/json')
                
                // Verify body 
                console.log(response);
                var num_lessons = response.body.length
                var last_lesson_index = (num_lessons - 1)
                expect(cy.wrap(num_lessons).should('be.gte', 10))

                // Verify the presence of properties for each history entry
                expect(response.body[last_lesson_index]).to.have.property('id',114)
                expect(response.body[last_lesson_index]).to.have.property('category',"fictional & fantasy")
                expect(response.body[last_lesson_index]).to.have.property('topic',"Imagine that you are the president of your country for 1 day. What would you do?")
                expect(response.body[last_lesson_index]).to.have.property('createdAt',"2022-04-05T18:48:52.688394Z")
                expect(response.body[last_lesson_index]).to.have.property('updatedAt',null)
                expect(response.body[last_lesson_index]).to.have.property('coach',null)
                expect(response.body[last_lesson_index]).to.have.property('organization',null)
                expect(response.body[last_lesson_index]).to.have.property('defaultQuestionId',0)
                expect(response.body[last_lesson_index]).to.have.property('isActive',false)


            }
        )
    })
})