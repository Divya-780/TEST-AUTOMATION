describe('DELETE custom template API Test', function () {
    it('Verifies that API delete the custom template', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/assessmentcriteria/remove_custom_template/1336/',
            method: "DELETE",
            headers: {
                Authorization: "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                expect(response.status).to.eq(200)
                // Verify body 
                console.log(response);
                expect(response.body).to.eq(false)

            }
        )
    })
})