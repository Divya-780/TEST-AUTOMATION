describe('Update feedback point API', function () {
    it('Verifies that API used to update the keypoints of the particular feedback', function () {
        cy.request({
            method: 'PUT',
            url: 'https://dev02.speechpundit.com/api/core/feedback/point/474/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "id": 474,
                "description": "Project your voice to the front of the room.kjljkl",
                "time": 11,
                "createdAt": "2022-09-20T07:27:49.397792Z",
                "updatedAt": "2022-09-20T07:27:49.397840Z",
                "isGrow": true
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)

                }
            )
        })
    })

