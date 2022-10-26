describe('PUT lesson plan API', function () {
    it('Verifies that API allows to update particular lesson plan', function () {
        cy.request({
            method: 'PUT',
            url: 'https://dev02.speechpundit.com/api/lessons/lesson_plan/621/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                
                id: 621,
                title: "speech-update",
                level: "Beginner",
                speechTime: 6,
                intro: "<p>dsdf</p>",
                keypoints: [
                    {
                        "description": "<p>sdf</p>",
                        "id": 677,
                        "isDeleted": false
                    }
                ],
                closing: "<p>sdf</p>"
                
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(201)
                    expect(response.body).has.property('id',621)
                    expect(response.body).has.property('title','speech-update')
                    expect(response.body).has.property('level','Beginner')
                    expect(response.body).has.property('speechTime',6)
                    expect(response.body).has.property('intro',)
                    expect(response.body).has.property('keypoints')
                    expect(response.body).has.property('closing')
                }
            )
        })
    })

