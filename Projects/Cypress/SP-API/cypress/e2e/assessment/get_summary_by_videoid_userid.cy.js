describe('GET assessment summary API', function () {
    it('Verifies that API returns assessment summary report of particular user video', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/assessment/summary/2828/4313/',
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
                expect(response.body).to.have.property('video')
                expect(response.body).to.have.property('visual')
                expect(response.body).to.have.property('voice')
                expect(response.body).to.have.property('verbal')

            }
        )
    })
})