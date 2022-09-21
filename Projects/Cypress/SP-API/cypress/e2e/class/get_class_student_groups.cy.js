describe('GET Class student groups API Test', function () {
    it('Verifies that API returns student groups of class', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/class/student_groups/',
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
                var num_rpt_entries = response.body.length
                var last_rpt_index = (num_rpt_entries - 1)
                expect(cy.wrap(num_rpt_entries).should('be.eql', 1))

                // Verify the presence of properties for each user entry
                // expect(response.body[last_rpt_index]).to.have.property('id')
                // expect(response.body[last_rpt_index]).to.have.property('name')
                // expect(response.body[last_rpt_index]).to.have.property('level')
                // expect(response.body[last_rpt_index]).to.have.property('startTime')
                // expect(response.body[last_rpt_index]).to.have.property('endTime')
                // expect(response.body[last_rpt_index]).to.have.property('duration')
                // expect(response.body[last_rpt_index]).to.have.property('recurrence')
                // expect(response.body[last_rpt_index]).to.have.property('startDate')
                // expect(response.body[last_rpt_index]).to.have.property('endDate')
                // expect(response.body[last_rpt_index]).to.have.property('archived')
                // expect(response.body[last_rpt_index]).to.have.property('meetingId')
                // expect(response.body[last_rpt_index]).to.have.property('rawZoomJson')
                // expect(response.body[last_rpt_index]).to.have.property('coach')
            }
        )
    })
})