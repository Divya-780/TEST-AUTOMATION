describe('GET Assignment by groupid API Test', function () {
    it('Verifies that API returns Fetch all the assignments assigned to students in a group', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/class/assignment/1151/',
            method: "GET",
            headers: {
                Authorization: "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                expect(response.status).to.eq(200)
                // Verify body 
                console.log(response);
            }
        )
    })
})