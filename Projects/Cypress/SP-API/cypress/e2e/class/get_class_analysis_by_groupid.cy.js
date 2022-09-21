describe('analysis API Test', function () {
    it('Get analysis of all the students of a group', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/class/analysis/1151/',
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