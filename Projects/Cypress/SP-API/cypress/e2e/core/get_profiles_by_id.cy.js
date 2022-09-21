describe('GET Profile API', function () {
    it('Verifies that API returns profile by id', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/profiles/1/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('subscribed')
                expect(response.body).to.have.property('emailVerified')
                expect(response.body).to.have.property('referrer')
                expect(response.body).to.have.property('subscriptionStartTime')
                expect(response.body).to.have.property('subscriptionEndTime')
                expect(response.body).to.have.property('subscriptionCancelled')
                expect(response.body).to.have.property('previousPlan')
                expect(response.body).to.have.property('plan')
                expect(response.body).to.have.property('planRecurring')
                expect(response.body).to.have.property('paymentCompleted')
                expect(response.body).to.have.property('phone')
                expect(response.body).to.have.property('avatar')
                expect(response.body).to.have.property('animeCharacter')
                expect(response.body).to.have.property('age')
                expect(response.body).to.have.property('gender')
                expect(response.body).to.have.property('zoomUser')

                

            }
        )
    })
})
