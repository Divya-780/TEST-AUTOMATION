describe('POST recorded_video API', function () {
    it('Verifies that API allows to post the recorded video', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/core/recorded_video/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "video": "binary",
                "thumbnail": "binary",
                "duration": 30,
                "topic": "undefined",
                "speechType": "Speech"
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                    expect(response.body).has.property('id')
                    expect(response.body).has.property('success')



                }
            )
        })
    })

