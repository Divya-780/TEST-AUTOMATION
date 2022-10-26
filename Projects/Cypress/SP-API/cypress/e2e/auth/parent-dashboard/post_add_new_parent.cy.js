describe('POST add new parent API', function () {
    it('Verifies that API allows to add parent', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/auth/add_new_parent/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                firstName: "Gayathri",
                lastName: "test",
                email: "gayathri+api_test_parent1@applines.com",
                gender: null,
                role: "Parent",
                acceptTerms: null,
                org_id: 1,
                student_id: 2484,
                user_role: "Student"                
            },
            failOnStatusCode: false

        }).then(
                (response) => {
                    console.log(response);
                    // parent can be added for one or more students
                    expect(response.status).to.eq(200)
                }
            )
        })
    })

