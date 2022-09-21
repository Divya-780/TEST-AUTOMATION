describe('POST user from coach list API', function () {
    it('Verifies that API to delete user from coach list', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/core/remove_user_from_coach_list/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "email": "gayathri+api_test_new_student3@applines.com"
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                    expect(response.body).to.eq(true)
                }
            )
        })
    })

