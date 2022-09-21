describe('GET one custom template API Test', function () {
    it('Verifies that API returns particular custom template', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/assessmentcriteria/custom_templateview/1305/',
            method: "GET",
            headers: {
                Authorization: "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                expect(response.status).to.eq(200)
                console.log(response)
                expect(response.body[0]).to.have.property('id')
                expect(response.body[0]).to.have.property('templateTitle')
                expect(response.body[0]).to.have.property('assessmentCriteriaLevel')
                expect(response.body[0]).to.have.property('templateJson')
                expect(response.body[0]).to.have.property('coachId')

            }
        )
    })
})