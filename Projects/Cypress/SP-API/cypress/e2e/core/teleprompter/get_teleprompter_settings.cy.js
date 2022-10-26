describe('Teleprompter settings API Test', function () {
    it('Verifies that API returns to fetch the details of the teleprompter settings', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/teleprompter_settings/',
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
                expect(response.body).has.property('id')
                expect(response.body).has.property('fontColor',"#000000")
                expect(response.body).has.property('backgroundColor',"#ffffff")
                expect(response.body).has.property('fontSize',"5rem")
                expect(response.body).has.property('speed')
                expect(response.body).has.property('direction',"bottom-up")
                expect(response.body).has.property('videoPosition',"top-left")

            }
        )

    })
})