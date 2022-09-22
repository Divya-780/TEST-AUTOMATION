describe('GET associated students list API Test', function () {
    it('Verifies that API returns the associated students list', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/associated_students_list/1151/',
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
                var num_hist_entries = response.body.length
                var last_hist_index = (num_hist_entries - 1)
                expect(cy.wrap(num_hist_entries).should('be.gte', 0))

                expect(response.body[last_hist_index]).to.have.property('coach',4354)
                
            }
        )
    })
})