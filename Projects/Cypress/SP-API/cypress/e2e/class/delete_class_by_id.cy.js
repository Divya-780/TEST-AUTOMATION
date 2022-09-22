// describe('Delete particular class in the group', function () {
//     it('Verifies that API deletes the class', function () {
//         let x = 1500
//         cy.request({

//             url: 'https://dev02.speechpundit.com/api/class/'+x+'/',
//             // id:1502,

//             method: "DELETE",
//             headers: {
//                 "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c",
//                 // "id":1501,
//                 "path": "/api/class/1500/"

//             },
//         }).then(
//             (response) => {
//                 console.log("ddddddddddddd",response)
//                 expect(response.status).to.eq(200)

//             }
//         )
//     })
// })