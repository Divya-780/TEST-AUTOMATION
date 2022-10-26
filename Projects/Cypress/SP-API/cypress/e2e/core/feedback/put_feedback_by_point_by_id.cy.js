describe('Update feedback point API', function () {
    it('Verifies that API used to update the keypoints of the particular feedback', function () {
        cy.request({
            method: 'PUT',
            url: 'https://dev02.speechpundit.com/api/core/feedback/point/495/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "id": 495,
                "description": "Make eye contact. update-update",
                "time": 10,
                "createdAt": "2022-09-22T09:15:02.131924Z",
                "updatedAt": "2022-09-22T09:15:02.131980Z",
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

