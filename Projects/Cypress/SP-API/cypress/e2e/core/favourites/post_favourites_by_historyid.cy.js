describe('POST favourites API', function () {
    it('Verifies that API allows to post favourite video', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/core/favourites/2704/',
            headers: {
              Authorization: 'Token 9e5e838f600e7876606ab2ac04be85e6b1320756',
            }
            

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)

                }
            )
        })
    })

