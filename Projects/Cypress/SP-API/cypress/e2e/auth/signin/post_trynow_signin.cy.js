describe('sign in for anonymous users', function () {
    it('Verifies that API allows a anonymous user to signin', function () {

        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/auth/trynow_signin/',
            headers: {
              Authorization: 'Token 4872aae72371e9a72f50a13aac2f4d92362ca57c',
            },
            body:{
                "email": "anonymous_172_31_5_115_202209190714029426@anonymo.us",
                "firstName": "anonymous",
                "lastName": "anonymous",
                "isActive": true,
                "isAdmin": false,
                "token": "09e67ec689571f563aadcfe7907fb5bb436a2880",
                "profile": {
                    "id": 4512,
                    "subscribed": true,
                    "emailVerified": false,
                    "referrer": null,
                    "subscriptionStartTime": null,
                    "subscriptionEndTime": "2022-09-20T07:14:03.138390Z",
                    "subscriptionCancelled": false,
                    "previousPlan": null,
                    "plan": null,
                    "planRecurring": false,
                    "paymentCompleted": false,
                    "phone": null,
                    "avatar": null,
                    "animeCharacter": null,
                    "age": null,
                    "gender": null,
                    "zoomUser": "",
                    "organization": 1,
                    "userId": 4561
                },
                "group": [],
                "isAnonymous": true
            },

        })
        .then(
            (response) => {
                expect(response.status).to.eq(200)
                console.log(response);
                expect(response.body).has.property('email')
                expect(response.body).has.property('firstName','anonymous')
                expect(response.body).has.property('lastName','anonymous')
                expect(response.body).has.property('isActive')
                expect(response.body).has.property('isAdmin')
                expect(response.body).has.property('token')
                expect(response.body).has.property('profile')
                expect(response.body).has.property('group')
                expect(response.body).has.property('isAnonymous',true)
            }
        )
    })
})