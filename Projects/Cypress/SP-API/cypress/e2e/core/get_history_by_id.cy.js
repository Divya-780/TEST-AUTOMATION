// describe('History of video API Test', function () {
//     it('Verifies that API returns history of video', function () {

//         cy.request({
//             url: 'https://dev02.speechpundit.com/api/core/history/560',
//             method: "GET",
//             headers: {
//                 "Authorization": "Token d2d18ead55ad95e28548267f482483c59becc94b",
//                 "video_id": 560
//             },
//         }).then(
//             (response) => {
//                 // Verify response - status, header values
//                 expect(response.status).to.eq(200)
//                 expect(response.headers).to.have.property('content-type', 'application/json')
                
//                 // Verify body 
//                 console.log(response);
//                 // var num_hist_entries = response.body.length
//                 // expect(cy.wrap(num_hist_entries).should('be.eql', 1))
//                 expect(cy.wrap(response.body.length).should('be.eql', 1))

//                 // Verify the presence of properties for video entry
//                 expect(response.body[0]).to.have.property('id')
//                 expect(response.body[0]).to.have.property('videoUrl')
//                 expect(response.body[0]).to.have.property('mp4VideoUrl')
//                 expect(response.body[0]).to.have.property('plottedVideoUrl')
//                 expect(response.body[0]).to.have.property('thumbnailUrl')
//                 expect(response.body[0]).to.have.property('duration')
//                 expect(response.body[0]).to.have.property('visualScore')
//                 expect(response.body[0]).to.have.property('voiceScore')
//                 expect(response.body[0]).to.have.property('verbalScore')
//                 expect(response.body[0]).to.have.property('createdAt')
//                 expect(response.body[0]).to.have.property('title')
//                 expect(response.body[0]).to.have.property('favourite')
//                 expect(response.body[0]).to.have.property('historyId')
//                 expect(response.body[0]).to.have.property('feedback')
                
//             }
//         )

//     })
// })