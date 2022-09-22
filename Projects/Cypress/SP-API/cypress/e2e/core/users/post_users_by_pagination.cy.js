describe('POST users API', function () {
    it('Verifies that API allows to post the users', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/core/users/1/10/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },

        }).then(
                (response) => {
                    console.log(response);
                    expect(response.status).to.eq(200)
                }
            )
        })
    })
