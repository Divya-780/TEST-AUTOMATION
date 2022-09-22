describe('POST lesson plan API', function () {
    it('Verifies that API post the lesson plan details', function () { 
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/lessons/lesson_plan/',
            headers: {
                Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "id": null,
                "title": "speech3",
                "level": "Intermediate",
                "speechTime": 4,
                "intro": "<p>gserf</p>",
                "keypoints": [
                    {
                        "description": "<p>gdfg</p>",
                        "id": null,
                        "isDeleted": false
                    }
                ],
                "closing": "<p>rtgrf</p>"
            },

        }).then(
                (response) => {
                    expect(response.status).to.eq(201)
                    expect(response.body).to.have.property('id')
                    expect(response.body).to.have.property('title')
                    expect(response.body).to.have.property('level')
                    expect(response.body).to.have.property('intro')
                    expect(response.body).to.have.property('closing')
                    expect(response.body).to.have.property('speechTime')
                    expect(response.body).to.have.property('createdAt')
                    expect(response.body).to.have.property('updatedAt')
                    expect(response.body).to.have.property('keypoints')

                }
            )
        })
    })
