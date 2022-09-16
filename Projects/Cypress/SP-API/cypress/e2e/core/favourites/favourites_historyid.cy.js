describe('Favourites API Test', function () {
    it('Verifies that API returns favourites info of user', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/favourites/',
            method: "POST",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b",
                "history_id": 572
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('content-type', 'application/json')

                // Verify body 
                console.log(response);
                expect(response.body).to.eq(true)

            }
        )
    })
})