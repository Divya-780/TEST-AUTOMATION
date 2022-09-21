describe('GET Class lessons API Test', function () {
    it('Verifies that API returns lessons of class', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/class/lessons/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('content-type', 'application/json')
                  
            }
        )
    })
})