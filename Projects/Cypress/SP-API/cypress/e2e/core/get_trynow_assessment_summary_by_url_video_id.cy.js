describe('GET trynow assessment summary API Test', function () {
    it('Verifies that API returns trynow assessment summary', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/trynow_assessment_summary/53733187-cfdd-4f0f-a193-e796f3f54535/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                
                // Verify body 
                console.log(response);
                expect(response.body).has.property('visual')
                expect(response.body).has.property('voice')
                expect(response.body).has.property('verbal')

            }
        )

    })
})