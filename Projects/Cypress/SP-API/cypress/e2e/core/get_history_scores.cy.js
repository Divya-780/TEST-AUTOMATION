// describe('History of video scores API Test', function () {
//     it('Verifies that API returns history of scores of video', function () {

//         cy.request({
//             url: 'https://dev02.speechpundit.com/api/core/history/scores/',
//             method: "GET",
//             headers: {
//                 "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b"
//             },
//         }).then(
//             (response) => {
//                 // Verify response - status, header values
//                 expect(response.status).to.eq(200)
                
//                 // Verify body 
//                 console.log(response);
//                 var num_hist_entries = response.body.length
//                 var last_hist_index = (num_hist_entries - 1)
//                 expect(cy.wrap(num_hist_entries).should('be.gte', 10))
//                 // expect(cy.wrap(num_hist_entries).should('be.eql', 1))
//                 // expect(cy.wrap(response.body.length).should('be.eql', 1))

//                 // Verify the presence of properties for each history entry
//                 // expect(response.body[last_hist_index]).to.have.property('id')
//                 // expect(response.body[last_hist_index]).to.have.property('verbalScore')
//                 // expect(response.body[last_hist_index]).to.have.property('visualScore')
//                 // expect(response.body[last_hist_index]).to.have.property('voiceScore')


//             }
//         )

//     })
// })