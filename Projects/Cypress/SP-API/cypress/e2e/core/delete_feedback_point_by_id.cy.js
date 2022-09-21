describe('Delete feedback point API Test', function () {
    it('Verifies that API used to delete the keypoints of the particular feedback', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/feedback/point/474/',
            method: "DELETE",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)

            }
        )

    })
})