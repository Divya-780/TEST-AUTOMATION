describe('Coupon API Test', function () {
    it('Verifies that API allows user should enter Coupon code for basic plan', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/core/coupon/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "couponCode": "SPEECHPUNDIT2022"
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                    expect(response.body).to.eq(false)

                }
            )
        })
    })

