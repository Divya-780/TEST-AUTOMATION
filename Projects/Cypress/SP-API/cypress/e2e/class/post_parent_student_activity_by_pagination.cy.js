describe('Post student activity', function () {
    it('Verifies that API Fetch students along with their voice, verbal and video scores... associated with a coach', function () {
        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/class/parent_student_activity/2484/1/10/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                name: "API GROUP",
                level: "Intermediate",
                startTime: "11:00",
                endTime: "11:30",
                duration: 30,
                recurrence: "1110000",
                startDate: "2022-09-15",
                endDate: "2022-09-30",
                id: null,
                timeZone: "Asia/Calcutta"
            },

        }).then(
                (response) => {
                    console.log(response);
                    
                    expect(response.status).to.eq(200)

                }
            )
        })
    })

