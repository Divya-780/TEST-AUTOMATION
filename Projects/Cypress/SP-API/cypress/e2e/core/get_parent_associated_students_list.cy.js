describe('GET parent associated students list API Test', function () {
    it('Verifies that API returns list of parent associated students', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/parent_associated_students_list/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                // expect(response.headers).to.have.property('content-type', 'application/json')

                    // Verify body 
                    console.log(response);
                    var num_rpt_entries = response.body.length
                    var last_rpt_index = (num_rpt_entries - 1)
                    // expect(cy.wrap(num_rpt_entries).should('be.gte', 1))


            }
        )
    })
})