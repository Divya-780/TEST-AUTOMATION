describe('GET Emotion metrice API test', function () {
    it('Verifies that API returns assessment summary report of video', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/assessment/emotion_metrics/2828/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c",
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                
                // // Verify body 
                console.log(response);
                expect(response.body).to.have.property('metrics')
                expect(response.body).to.have.property('assessment')
                expect(response.body).to.have.property('recordedVideo')                

            }
        )
    })
})