describe('PUT teleprompter settings API', function () {
    it('Verifies that API allows to update the teleprompter settings', function () {
        cy.request({
            method: 'PUT',
            url: 'https://dev02.speechpundit.com/api/core/teleprompter_settings/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                    "backgroundColor": "#ffffff",
                    "direction": "bottom-up",
                    "fontColor": "#000000",
                    "fontSize": "5rem",
                    "id": 3242,
                    "speed": 140,
                    "videoPosition": "top-left"  
            },
            
        }).then(
                (response) => {
                    expect(response.status).to.eq(200)

                    expect(response.body).to.have.property('fontColor')
                    expect(response.body).has.property('backgroundColor')
                    expect(response.body).has.property('fontSize')
                    expect(response.body).has.property('speed')
                    expect(response.body).has.property('direction')
                    expect(response.body).has.property('videoPosition')
                }
            )
        })
    })

