describe('Profiles API Test', function () {
    it('Verifies that API to post the status whether the profile information is successfully saved or not', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/profiles',
            method: "POST",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('content-type', 'application/json')

                expect(response.body).eq('true')

            }
        )

    })
})