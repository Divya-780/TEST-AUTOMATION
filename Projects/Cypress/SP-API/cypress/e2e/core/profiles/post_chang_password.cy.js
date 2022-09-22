describe('Change password API', function () {
    it('Verifies that API allows to post the status whether the old password is successfully changed or not', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/core/profiles/changepassword/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                    oldPassword: "camarillo",
                    newPassword: "Gayathri@547",
                    confirmPassword: "Gayathri@547"
                },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)

                }
            )
        })
    })

