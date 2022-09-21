describe('POST add new coach API', function () {
    it('Verifies that API allows to add coach in organization', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/auth/add_new_coach/',
            headers: {
              Authorization: 'Token 8b4d889de82266ae1cfad6537813d4856e5b5cec',
            },
            body:{
                "firstName": "Gayathri",
                "lastName": "Kaki",
                "email": "gayathri+api_test_org_coach1@applines.com",
                "age": 22,
                "gender": "female",
                "org_id": 189
            },

        }).then(
                (response) => {
                    console.log(response);
                    expect(response.status).to.eq(200)
                }
            )
        })
    })

