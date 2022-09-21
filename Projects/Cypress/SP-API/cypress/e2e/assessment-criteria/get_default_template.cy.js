describe('GET default template API Test', function () {
    it('Verifies that API returns the default template', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/assessmentcriteria/default_template/',
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

                expect(response.body[last_rpt_index]).to.have.property('id',24)
                expect(response.body[last_rpt_index]).to.have.property('category','LANGUAGE')
                expect(response.body[last_rpt_index]).to.have.property('subcategory','Correctness')
                expect(response.body[last_rpt_index]).to.have.property('areaOfFocus','Word Selection')
                expect(response.body[last_rpt_index]).to.have.property('microFocusArea','Textstat py library - Reading level of Key Words')
                expect(response.body[last_rpt_index]).to.have.property('autoGraded',false)
                expect(response.body[last_rpt_index]).to.have.property('isAdminSelected',false)
                expect(response.body[last_rpt_index]).to.have.property('isCoachSelected',false)
                expect(response.body[last_rpt_index]).to.have.property('maxScore',5)
                expect(response.body[last_rpt_index]).to.have.property('customWeight',0)
                expect(response.body[last_rpt_index]).to.have.property('customScore',0)

            }
        )
    })
})