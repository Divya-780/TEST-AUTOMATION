describe('POST assignment API', function () {
    it('Verifies that API allows to post assignment by gorupid', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/class/assignment/1151/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
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
                    expect(response.body[last_rpt_index]).has.property('coach')
                    expect(response.body[last_rpt_index]).has.property('student')
                    expect(response.body[last_rpt_index]).has.property('lesson')
                    expect(response.body[last_rpt_index]).has.property('assignedDate')
                    expect(response.body[last_rpt_index]).has.property('dueDate')
                    expect(response.body[last_rpt_index]).has.property('completionDate')
                    expect(response.body[last_rpt_index]).has.property('group')
                    expect(response.body[last_rpt_index]).has.property('recorded_video')

                }
            )
        })
    })

