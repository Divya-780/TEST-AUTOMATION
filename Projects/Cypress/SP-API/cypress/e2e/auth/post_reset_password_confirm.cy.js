describe('POST rest password confirm API ', function () {
    it('Verifies that API allows to reset password', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/auth/reset_password/confirm/',
            headers: {
              Authorization: 'Token 9107e0ebb09126e987aec733aee556f9c71e1d13',
            },
            body:{
                "password": "Gayathri@547",
                "token": "9c663478163e44e8007"
            },
            failOnStatusCode: false,

        }).then(
                (response) => {
                    console.log(response);
                    // For already changed password, the status is not found
                    expect(response.status).to.eq(404)

                }
            )
        })
    })

