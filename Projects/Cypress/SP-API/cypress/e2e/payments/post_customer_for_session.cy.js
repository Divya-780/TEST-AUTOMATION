describe('POST customer for session API', function () {
    it('Verifies that API allows for payments customer for session', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/payments/customer_for_session/',
            headers: {
              Authorization: 'Token 9107e0ebb09126e987aec733aee556f9c71e1d13',
            },
            body:{
                "sessionId": "cs_test_a1jsUEAi5DYdnTGvNfTzWVKj2BJg6D7jR37KUVMvewwQ6kr5FCKNTaaxgv"
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)

                }
            )
        })
    })

