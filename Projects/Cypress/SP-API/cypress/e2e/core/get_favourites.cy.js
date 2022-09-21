describe('GET Favourites API Test', function () {
    it('Verifies that API returns favourites info of user', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/favourites/',
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
                var num_fvrt_entries = response.body.length
                var last_fvrt_index = (num_fvrt_entries - 1)
                // expect(cy.wrap(num_fvrt_entries).should('be.eql', 0))

            }
        )
    })
})