describe('GET lesson plan keypoints API test ', function () {
    it('Verifies that API allows to get the particular lesson plan keypoints', function () {
        cy.request({
            method: 'GET',
            url: 'https://dev02.speechpundit.com/api/lessons/lesson_plan/keypoints/611/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                    // expect(response.body).to.have.property('id')
                    // expect(response.body).to.have.property('description')
                }
            )
        })
    })

