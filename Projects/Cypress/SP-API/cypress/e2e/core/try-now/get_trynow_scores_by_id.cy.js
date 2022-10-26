describe('GET trynow scores API Test', function () {
    it('Verifies that API returns trynow scores', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/trynow_scores/2898/',
            method: "GET",
            headers: {
                "Authorization": "Token b64bcc08d91e3e69e24cb951aee5dfc13a784def"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                
                // Verify body 
                console.log(response);
                expect(response.body).has.property('id')
                expect(response.body).has.property('visualScore')
                expect(response.body).has.property('voiceScore')
                expect(response.body).has.property('verbalScore')
                expect(response.body).has.property('fillerWords')

            }
        )

    })
})