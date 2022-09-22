describe('GET Video history API Test', function () {
    it('Verifies that API returns history of archive video', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/history/archive/2327/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('content-type', 'application/json')
                
                // Verify body 
                console.log(response);

            }
        )
    })
})