describe('User signup auth API Test', function () {
    it('Verifies that API allows a user to signup with valid credentials', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/auth/signup/',
            method: "POST",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
            body:{
                email: "gayathri+test1@applines.com",
                firstName: "Gayathri",
                lastName: "k",
                password: "Gayathri@547",
                acceptTerms: true,
                role: "Student",
                session: null,

            },
            failOnStatusCode: false
        }).then(
            (response) => {
                console.log(response);
                // for already existed user, the status should be 500
                expect(response.status).to.eq(500)
            }
        )
    })
})

// describe('User signup auth API Test', function () {
//     it('Verifies that API allows a user to signup with valid credentials', function () {

//         cy.request('POST', 'https://dev02.speechpundit.com/api/auth/signup/', {
//             "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c",
//             "email": "gayathri+test1@applines.com",
//             "firstName": "Gayathri",
//             "lastName": "k",
//             "password": "Gayathri@547",
//             "acceptTerms": true,
//             "role": "Student",
//             "session": null,
//             // failOnStatusCode: false
//         }).then(
//             (response) => {
//                 // for already existed user, the status should be 500
//                 expect(response.status).to.eq(500)
//                 expect(response.body).to.eq(false)
//                 console.log(response);
//             }
//         )
//     })
// })