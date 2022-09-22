describe('GET associated students list API Test', function () {
    it('Verifies that API returns the associated students list in organization', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/org_students_list/189/',
            method: "GET",
            headers: {
                "Authorization": "Token 8b4d889de82266ae1cfad6537813d4856e5b5cec"
            },
        }).then(
            (response) => {
                expect(response.status).to.eq(200)

                // expect(response.body).to.have.property('email')
                // expect(response.body).to.have.property('firstName')
                // expect(response.body).to.have.property('lastName')
                // expect(response.body).to.have.property('isActive')
                // expect(response.body).to.have.property('isAdmin')
                // expect(response.body).to.have.property('profile')
                // expect(response.body).to.have.property('groups')
                // expect(response.body).to.have.property('coach')
            }
        )
    })
})