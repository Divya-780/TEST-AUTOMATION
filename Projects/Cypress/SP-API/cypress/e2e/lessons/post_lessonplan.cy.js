describe('POST lesson plan API', function () {
    it('Verifies that API post the lesson plan details', function () {

        cy.request('POST', 'https://dev02.speechpundit.com/api/lessons/lesson_plan/', {

            "id": null,
            "title": "speech1",
            "level": "Beginner",
            "speechTime": 2,
            "intro": "<p>dsfcds</p>",
            "keypoints": [
                {
                    "description": "<p>sdsf</p>",
                    "id": null,
                    "isDeleted": false
                }
            ],
            "closing": "<p>dsfsdf</p>"
            
            
        }).then(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.eq(true)
                console.log(response);
            }
        )
    })
})