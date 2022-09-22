// describe('Create new scheduled class', function () {
//     it('Verifies that API allows a user to create a new group', function () {
//         cy.request({
//             method: 'POST',
//             url: 'https://dev02.speechpundit.com/api/class/',
//             headers: {
//               Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
//             },
//             body:{
//                 name: "API GROUP",
//                 level: "Intermediate",
//                 startTime: "11:00",
//                 endTime: "11:30",
//                 duration: 30,
//                 recurrence: "1110000",
//                 startDate: "2022-09-15",
//                 endDate: "2022-09-30",
//                 id: null,
//                 timeZone: "Asia/Calcutta"
//             },

//         }).then(
//                 (response) => {
//                     console.log(response);
                    
//                     expect(response.status).to.eq(200)
//                     expect(response.body).has.property('archived')
//                     expect(response.body).has.property('coach')
//                     expect(response.body).has.property('duration',30)
//                     expect(response.body).has.property('endDate',"2022-09-30")
//                     expect(response.body).has.property('endTime','11:30')
//                     expect(response.body).has.property('id')
//                     expect(response.body).has.property('level','Intermediate')
//                     expect(response.body).has.property('meetingId')
//                     expect(response.body).has.property('name','API GROUP')
//                     expect(response.body).has.property('organizationId')
//                     expect(response.body).has.property('rawZoomJson')
//                     expect(response.body).has.property('recurrence')
//                     expect(response.body).has.property('startDate',"2022-09-15")
//                     expect(response.body).has.property('startTime','11:00')

//                 }
//             )
//         })
//     })

