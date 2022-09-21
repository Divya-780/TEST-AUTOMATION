describe('POST save_org_config API', function () {
    it('Verifies that API save the organization settings', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/core/trynow_send_assessment_report/',
            headers: {
              Authorization: 'Token 8b4d889de82266ae1cfad6537813d4856e5b5cec',
            },
            body:{
                "id": 2898,
                "email": "gayathri+api_test_coach1@applines.com"
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                    expect(response.body).to.have.property('success',true)

                }
            )
        })
    })

