// POST Recorded Video

let recorded_video

describe('POST recorded_video API', function () {
    it('Verifies that API allows to post the recorded video', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/core/recorded_video/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "video": "binary",
                "thumbnail": "binary",
                "duration": 30,
                "topic": "undefined",
                "speechType": "Speech"
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(201)
                    expect(response.body).has.property('id')
                    recorded_video = response.body.id
                    console.log("DDDDDDDDDDd",recorded_video)
                    expect(response.body).has.property('success')

                }
            )
        })
    })



// Delete Recorded Video (Archive)

describe('GET Video history API Test', function () {
    it('Verifies that API returns history of archive video', function () {

        cy.request({
            url: 'https://dev02.speechpundit.com/api/core/history/archive/'+recorded_video+'/',
            method: "GET",
            headers: {
                "Authorization": "Token 4872aae72371e9a72f50a13aac2f4d92362ca57c"
            },
        }).then(
            (response) => {
                // Verify response - status, header values
                expect(response.status).to.eq(200)
                expect(response.headers).to.have.property('content-type', 'application/json')
                
                // Verify body 
                console.log(response);

            }
        )
    })
})
