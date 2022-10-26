describe('DELETE assignment from group API Test', function () {
    it('Verifies that API to delete the assignment from group', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/remove_assignment_from_group/861/',
            method: "DELETE",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
            failOnStatusCode: false,
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(404)
                // Verify body 
                console.log(response);

            }
        )
    })
})