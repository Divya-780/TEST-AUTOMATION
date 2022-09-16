describe('Teleprompter settings API Test', function () {
    it('Verifies that API returns the teleprompter settings.', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/teleprompter_settings',
            method: "GET",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('content-type', 'application/json')
                
                // Verify body 
                console.log(response);
                // var num_telprompt_setting_entries = response.body.length
                // expect(cy.wrap(num_telprompt_setting_entries).should('be.eql', 1))

                // Verify the presence of properties for each video entry
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('fontColor')
                expect(response.body).to.have.property('backgroundColor')
                expect(response.body).to.have.property('fontSize')
                expect(response.body).to.have.property('speed')
                expect(response.body).to.have.property('direction')
                expect(response.body).to.have.property('videoPosition')

            }
        )

    })
})