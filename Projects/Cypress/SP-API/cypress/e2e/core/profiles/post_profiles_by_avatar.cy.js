describe('POST save API', function () {
    it('Verifies that API allows to save the profile information', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/core/profiles/save/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "avatar": "binary"
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                    expect(response.body).to.eq(true)

                }
            )
        })
    })

