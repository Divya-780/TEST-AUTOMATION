describe('POST impromptu questions API', function () {
    it('Verifies that API to save the impromptu questions', function () {

        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/lessons/save_impromptu_questions/',
            // failOnStatusCode: false,
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                selectedSpeeches: [
                    {
                        "id": 67,
                        "category": "policy & government",
                        "topic": "Is paying more in taxes a good thing? How so?",
                        "createdAt": "2022-04-05T18:48:52.601575Z",
                        "topicMedia": "https://speechcoach-dev.s3.amazonaws.com/impromptu_speech_media/Try-Now-Policy-_-Government-2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAZAO7GGEVEL6ZW2BJ%2F20220919%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220919T064407Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJGMEQCIGUfdO9H83V7qlcxgPT9SXKFLn7029PE3y8qGhQIFLJkAiAS4kQviaIWm3O1kfVCso4HoHkX%2BDCPd3rf062iJus6lSrNBAg8EAIaDDYxOTQ4MDIzMjIzNCIMkABxPnRr9IH2TW74KqoEZqEufw3w4%2BIOE0gUkqsAnP5l27Wy17ikXKh2816ZsdgZPQsA2yhkq5gr8qoZDS3oef%2Fw21CU5eUGjC7hG7V1ODbNWi8DKwcpuKwPjnzaCjC9nopthy5qB8P4bbUbld0xFqsemsez1HLe%2B%2FYZ3h8DoiVSMIkiJQn5GVReRfIcHe27CScactTxALuRY8mb1U1s9SxGJzXEE9%2B76K11dcs9MaDVwxKw1CsJ51wch%2Bzw8qI67gUlG8g%2BR1g5q18KWVLiPC8%2BFYwVRvqhMR9Kt%2F3L46x%2FlVV8R%2BtnVlMMiOI2V9qOKusO%2BQzFHpmbGyUgsKRCmMrnWCXzm3nd2ZgbbPIradfRnjcIFACsTasIXEgaKZV7EhvbKKA1wnsSgceYHusMKTVNKjbD7dtV0SZHd8j28iBvZBd86gRWp6Km9pPrHEK0MW38nwVXbdFCHhckyyKN6T9t4YLBYcEHw0BN%2B4HyQJh41fB%2Bg%2B8CQzV1Arfj7njIA%2FrjDUFhQjuYAwEnxQCgJfiFvXsaBV%2Fpit%2FNbGe5DO7SaC1BXwgZ4sPQ94NQZ2u9dQo9corH6u2gj1KGgISgnWcFDAUAlBAa6fy7ojVPYhapswCBkCVyw%2FjyXLF7Fuvt0AQWLEFt1EOyw%2FZeTXGpckfl3GLtFnihl03l0lpOETvUlTTjVrol9SVBabVoXrJkuNaxiKF4%2BsSiSp0nmkp65Cqykakobj3WEVNztYMUGjwfMhtC1KgWt7ww0LyfmQY6qgFSXAR3Q4QriS%2F5bEsE8W5dbfjtzWBoSArr9rGKLhUCjo2hFgPdC%2Fpa09kAYDu9Zhm7VhmiycLc2qFAvhSBDo2zzFhYGhURn4KJyDI37PJ4efX1%2BSZ626VuxE8cfk6Wne6vYeLso4BniPous7Na0Kf6JcNKytn737mElVX7vz6fzstQMtbyPkFBn5FDgfryxgyWcDoYSu4fNPx3xgXkQP3j0LTsmuTY01BClg%3D%3D&X-Amz-Signature=888e77e3b69e1bf4c2a911c265f469e71747805d22001f8290218c90e5df16c1",
                        "updatedAt": null,
                        "coach": null,
                        "organization": null,
                        "defaultQuestionId": 0,
                        "isActive": false,
                        "isSelected": true,
                        "disabled": false
                    }
                ],
                customQstns: []
            },
            
            
        }).then(
            (response) => {
                expect(response.status).to.eq(200)


                // Verify body 
                console.log(response);
                var num_rpt_entries = response.body.length
                var last_rpt_index = (num_rpt_entries - 1)
                expect(cy.wrap(num_rpt_entries).should('be.gte', 1))

            
                // Verify the presence of properties for each user entry
                expect(response.body[last_rpt_index]).to.have.property('id')
                expect(response.body[last_rpt_index]).to.have.property('category')
                expect(response.body[last_rpt_index]).to.have.property('topic')
                expect(response.body[last_rpt_index]).to.have.property('createdAt')
                expect(response.body[last_rpt_index]).to.have.property('topicMedia')
                expect(response.body[last_rpt_index]).to.have.property('updatedAt')
                expect(response.body[last_rpt_index]).to.have.property('coach')
                expect(response.body[last_rpt_index]).to.have.property('organization')
                expect(response.body[last_rpt_index]).to.have.property('defaultQuestionId')
                expect(response.body[last_rpt_index]).to.have.property('isActive')
            }
        )
    })
})