describe('POST payment completed API', function () {
    it('Verifies that API returns when the payment is completed', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/payments/payment_completed/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            failOnStatusCode: false

        }).then(
                (response) => {
                    console.log(response);
                    
                    // Payment can be completed only for one time. So the status is 404
                    expect(response.status).to.eq(404)
                }
            )
        })
    })

