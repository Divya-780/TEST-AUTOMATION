describe('POST dashboard_list API', function () {
    it('Verifies that API returns dashboard list', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/orgdashboard/dashboard_list/189/',
            headers: {
              Authorization: 'Token 8b4d889de82266ae1cfad6537813d4856e5b5cec',
            },
            body:{
                "period": "thisWeek"
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                    expect(response.body).has.property('studentRecordings')
                    expect(response.body).has.property('classSessions')
                    expect(response.body).has.property('topCoachesData')
                }
            )
        })
    })

