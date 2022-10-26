describe('POST random impromptu API', function () {
    it('Verifies that API post the random topic from selected category', function () {

        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/lessons/impromptu_speech/randomtopicfromselectedcategory/',
            // failOnStatusCode: false,
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "category": "sports & events"
            },
            
        }).then(
            (response) => {
                expect(response.status).to.eq(200)


                // Verify body 
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('category','sports & events')
                expect(response.body).to.have.property('topic')
                expect(response.body).to.have.property('createdAt')
                expect(response.body).to.have.property('topicMedia')
                expect(response.body).to.have.property('updatedAt')
                expect(response.body).to.have.property('coach')
                expect(response.body).to.have.property('organization')
                expect(response.body).to.have.property('defaultQuestionId')
                expect(response.body).to.have.property('isActive')




            }
        )
    })
})