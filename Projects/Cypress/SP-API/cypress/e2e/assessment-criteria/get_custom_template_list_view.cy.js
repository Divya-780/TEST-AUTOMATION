describe('GET custom template API Test', function () {
    it('Verifies that API returns the custom template', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/assessmentcriteria/custom_template_listview/',
            method: "GET",
            headers: {
                Authorization: "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                expect(response.status).to.eq(200)

                // Verify body 
                console.log(response);
                var num_rpt_entries = response.body.length
                var last_rpt_index = (num_rpt_entries - 1)
                expect(cy.wrap(num_rpt_entries).should('be.gte', 1))

        
                // Verify the presence of properties for each entry
                expect(response.body[last_rpt_index]).to.have.property('id')
                expect(response.body[last_rpt_index]).to.have.property('templateTitle')
                expect(response.body[last_rpt_index]).to.have.property('assessmentCriteriaLevel')
                expect(response.body[last_rpt_index]).to.have.property('templateJson')
            }
        )
    })
})