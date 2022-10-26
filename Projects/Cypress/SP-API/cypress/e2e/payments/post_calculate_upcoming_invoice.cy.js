describe('POST calculate upcoming invoice API', function () {
    it('Verifies that API allows to calculate the upcoming invoice', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/payments/calculate_upcoming_invoice/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "priceId": "price_1J3MAQCTvjB6dEtGAySFM3N7"
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)

                }
            )
        })
    })

