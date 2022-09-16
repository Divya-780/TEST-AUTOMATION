describe('Profiles API Test', function () {
    it('Verifies that API returns all the profiles.', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/profiles',
            method: "GET",
            headers: {
                "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('content-type', 'application/json')
                
                // Verify body 
                console.log(response);
                var num_hist_entries = response.body.length
                var last_hist_index = (num_hist_entries - 1)
                expect(cy.wrap(num_hist_entries).should('be.gte', 10))

                // Verify the presence of properties for each history entry
                expect(response.body[last_hist_index]).to.have.property('id')
                expect(response.body[last_hist_index]).to.have.property('subscribed')
                expect(response.body[last_hist_index]).to.have.property('emailVerified')
                expect(response.body[last_hist_index]).to.have.property('referrer')
                expect(response.body[last_hist_index]).to.have.property('subscriptionStartTime')
                expect(response.body[last_hist_index]).to.have.property('subscriptionEndTime')
                expect(response.body[last_hist_index]).to.have.property('subscriptionCancelled')
                expect(response.body[last_hist_index]).to.have.property('previousPlan')
                expect(response.body[last_hist_index]).to.have.property('plan')
                expect(response.body[last_hist_index]).to.have.property('planRecurring')
                expect(response.body[last_hist_index]).to.have.property('paymentCompleted')
                expect(response.body[last_hist_index]).to.have.property('phone')
                expect(response.body[last_hist_index]).to.have.property('avatar')
                expect(response.body[last_hist_index]).to.have.property('animeCharacter')
                expect(response.body[last_hist_index]).to.have.property('age')
                expect(response.body[last_hist_index]).to.have.property('gender')
                expect(response.body[last_hist_index]).to.have.property('zoomUser')

            }
        )

    })
})