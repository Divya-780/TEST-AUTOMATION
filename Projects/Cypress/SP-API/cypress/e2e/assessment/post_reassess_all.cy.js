describe('POST reassess all API', function () {
    it('Verifies that API reassess for all videos', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/assessment/reassess/all/',
            method: "POST",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
            body:{
                "videoId": 2828
            },

        }).then(
            (response) => {
                expect(response.status).to.eq(200)
            }
        )
    })
})