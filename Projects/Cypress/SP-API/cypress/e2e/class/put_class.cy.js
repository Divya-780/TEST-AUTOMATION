describe('PUT group card API test ', function () {
    it('Verifies that API allows to archive the group card', function () {
        cy.request({
            method: 'PUT',
            url: 'https://dev02.speechpundit.com/api/auth/reset_password/confirm/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "id": 1350
            },
            // failOnStatusCode: false,

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                    expect(response.status).to.eq(true)


                }
            )
        })
    })

