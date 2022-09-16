describe('Verbal assessment of video API Test', function () {
    it('Verifies that API returns verbal assessment of video', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/assessment/verbal/680',
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
                // console.log(response);
                // var num_rpt_entries = response.body.length
                // var last_rpt_index = (num_rpt_entries - 1)
                // expect(cy.wrap(num_rpt_entries).should('be.gte', 10))

                // Verify the presence of properties for each user entry
                // expect(response.body[0]).to.have.property('score')
                // expect(response.body[last_rpt_index]).to.have.property('summary')
                // expect(response.body[last_rpt_index]).to.have.property('sentences')
                // expect(response.body[last_rpt_index]).to.have.property('createdAt')

            }
        )
    })
})