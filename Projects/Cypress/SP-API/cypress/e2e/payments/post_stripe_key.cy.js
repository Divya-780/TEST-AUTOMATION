// describe('User signin auth API Test', function () {
//     it('Verifies that API allows a user to signin with valid credentials', function () {

//         cy.request('POST', 'https://dev02.speechpundit.com/api/payments/stripe_key/', {
//             "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c",
//             "pk_test_51J33kPCTvjB6dEtGTVAuHN3XHgbZ6ZmkaLU0z2sSayL1QksfwRoAdZrVbGrFmSuRdXKkyo2qh1pBhcdXJNuGClfg00AekBy3j1"

//         }).then(
//             (response) => {
//                 expect(response.status).to.eq(200)
//                 // expect(response.body).to.eq(true)
//                 console.log(response);
//             }
//         )
//     })
// })