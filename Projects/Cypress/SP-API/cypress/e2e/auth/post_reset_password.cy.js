describe('POST rest password API', function () {
    it('Verifies that API allows a user to reset password', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/auth/reset_password/',
            // headers: {
            //   Authorization: 'Token 9107e0ebb09126e987aec733aee556f9c71e1d13',
            // },
            body:{
                "email": "gayathri+api_test_coach1@applines.com"
            },
            failOnStatusCode: false,

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)

                }
            )
        })
    })

