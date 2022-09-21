describe('GET metric score API', function () {
    it('Verifies that API Fetch the AuditoryMetric scores for last month and current month by metric name and metric type', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/assessment/metric_score/duration/voice/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c",
            },
        }).then(
            (response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('lastMonthMetricInfo')
                expect(response.body).to.have.property('currentMonthMetricInfo')

        
            }
        )
    })
})