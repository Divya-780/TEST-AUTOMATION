describe('POST modify subscription API', function () {
    it('Verifies that API allows to modify subscription', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/payments/modify_subscription/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "priceId": "price_1J3MAyCTvjB6dEtG0LkQ5vVX"
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)

                }
            )
        })
    })

