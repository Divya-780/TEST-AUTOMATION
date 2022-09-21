describe('Refresh user token', function () {
    it('Verifies that API allows to refresh user token', function () {

        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/auth/refresh_user/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "token": "0150c05cc0323cd6d5cde15f345ebeb7bdbf64a7"
            },

        })
        .then(
            (response) => {
                expect(response.status).to.eq(200)
                console.log(response);
                expect(response.body).has.property('email')
                expect(response.body).has.property('firstName')
                expect(response.body).has.property('group')
                expect(response.body).has.property('isActive')
                expect(response.body).has.property('isAdmin')
                expect(response.body).has.property('isAnonymous')
                expect(response.body).has.property('lastName')
                expect(response.body).has.property('profile')

            }
        )
    })
})