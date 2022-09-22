describe('Delete feedback annotation API', function () {
    it('Verifies that API used to delete the paticular annotation', function () {
        cy.request({
            method: 'DELETE',
            url: 'https://dev02.speechpundit.com/api/core/feedback/annotation/338/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            failOnStatusCode: false,

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(404)


                }
            )
        })
    })

