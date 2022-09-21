describe('GET impromptu questions API', function () {
    it('Verifies that API returns the impromptu questions', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/lessons/impromptu_questions/',
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
                    expect(cy.wrap(num_rpt_entries).should('be.gte', 1))
    
             
                    // Verify the presence of properties for each user entry
                    expect(response.body[last_rpt_index]).to.have.property('id')
                    expect(response.body[last_rpt_index]).to.have.property('category')
                    expect(response.body[last_rpt_index]).to.have.property('topic')
                    expect(response.body[last_rpt_index]).to.have.property('createdAt')                    
                    expect(response.body[last_rpt_index]).to.have.property('updatedAt')
                    expect(response.body[last_rpt_index]).to.have.property('coach')
                    expect(response.body[last_rpt_index]).to.have.property('organization')
                    expect(response.body[last_rpt_index]).to.have.property('defaultQuestionId')
                    expect(response.body[last_rpt_index]).to.have.property('isActive')

            }
        )
    })
})