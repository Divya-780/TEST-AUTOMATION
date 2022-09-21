describe('Delete particular class in the group', function () {
    it('Verifies that API deletes the class', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/class/1194/',
            // id's from 1194
            method: "DELETE",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                expect(response.status).to.eq(200)

            }
        )
    })
})