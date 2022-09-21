describe('GET org dashboard cards API', function () {
    it('Verifies that API returns the student signups, class sessions, recordings cards in orgadmin page', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/orgdashboard/org_dashboard_cards/189/',
            method: "GET",
            headers: {
                "Authorization": "Token 8b4d889de82266ae1cfad6537813d4856e5b5cec"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('lastWeeknumberOfStudentSignups')
                expect(response.body).to.have.property('thisWeeknumberOfStudentSignups')
                expect(response.body).to.have.property('changePercentageOfStudenSignups')
                expect(response.body).to.have.property('lastWeekClassSessionsCount')
                expect(response.body).to.have.property('thisWeekClassSessionsCount')
                expect(response.body).to.have.property('changePercentageOfClassSessions')
                expect(response.body).to.have.property('lastWeeknumberOfRecordings')
                expect(response.body).to.have.property('thisWeeknumberOfRecordings')
                expect(response.body).to.have.property('changePercentageOfRecordings')
            }
        )
    })
})