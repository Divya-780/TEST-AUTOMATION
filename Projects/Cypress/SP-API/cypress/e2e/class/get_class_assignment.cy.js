describe('GET Assignments API Test', function () {
    it('Verifies that API returns all the assignments ', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/class/assignment',
            method: "GET",
            headers: {
                Authorization: "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                expect(response.status).to.eq(200)
                console.log(response);

            }
        )
    })
})