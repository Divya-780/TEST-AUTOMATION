describe('POST assessment report API', function () {
    it('Verifies that API to fetch overall assessment of recorded videos of all the users. Will fetch visual, verbal, voice scores including date time of video created and assessment completed.', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/assessment/assessment_report/1/10/',
            method: "POST",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('content-type', 'application/json')
                
                expect(response.body).to.have.property('assessments')
                expect(response.body).to.have.property('totalRecords')
            }
        )
    })
})