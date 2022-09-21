describe('Activate signed up user ', function () {
    it('Verifies that API allows a user to activate email', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/auth/activate_email/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },

        })
        .then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                }
            )
        })
    })
