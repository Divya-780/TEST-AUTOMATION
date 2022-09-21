describe('POST analytics API test', function () {
    it('Verifies that API returns the analytics', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/core/analytics/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "period": "lastMonth"
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)

                }
            )
        })
    })

