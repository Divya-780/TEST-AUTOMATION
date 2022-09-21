describe('Authenticate token provided in the reset url', function () {
    it('Verifies that API allows to validate token', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/auth/reset_password/validate_token/',
            // headers: {
            //   Authorization: 'Token 9107e0ebb09126e987aec733aee556f9c71e1d13',
            // },
            body:{
                "token": "9c663478163e44e8007"
            },
            failOnStatusCode: false,

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(404)

                }
            )
        })
    })

