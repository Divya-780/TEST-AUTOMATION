describe('POST add new student API', function () {
    it('Verifies that API allows to add new student', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/auth/add_new_student/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                
                firstName: "Gayathri",
                lastName: "Kaki",
                email: "gayathri+api_test_new_student3@applines.com",
                age: null,
                gender: null,
                role: "Student",
                acceptTerms: null,
                classGroupId: 1151,
                org_id: 1
                
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)

                }
            )
        })
    })

