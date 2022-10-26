describe('POST zoom API', function () {
    it('Verifies that API allows to post the zoom', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/core/zoom/signature/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "meetingNumber": "86222434351",
                "role": 1
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                    expect(response.body).to.have.property('signature')
                    expect(response.body).to.have.property('apiKey')
                }
            )
        })
    })

