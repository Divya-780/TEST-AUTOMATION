describe('POST new org API', function () {
    it('Verifies that API to add the new organization by', function () {

        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/auth/new_org/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "firstName": "api",
                "lastName": "test",
                "email": "gayathri+api_test_org1@applines.com",
                "orgName": "API Organization",
                "orgDescription": "this is for api testing"
            },

        })
        .then(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.status).to.eq(true)
            }
        )
    })
})