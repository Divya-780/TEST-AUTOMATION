describe('POST student token API', function () {
    it('Verifies that API allows for student_token by hitting change to coach view', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/auth/student_token/',
            // headers: {
            //   Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            // },
            body:{
                "email":"gayathri+api_test_student1@applines.com"
            }

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)
                    expect(response.body).has.property('email')
                    expect(response.body).has.property('firstName')
                    expect(response.body).has.property('lastName')
                    expect(response.body).has.property('isActive')
                    expect(response.body).has.property('isAdmin')
                    expect(response.body).has.property('token')
                    expect(response.body).has.property('profile')
                    expect(response.body).has.property('group')
                }
            )
        })
    })

