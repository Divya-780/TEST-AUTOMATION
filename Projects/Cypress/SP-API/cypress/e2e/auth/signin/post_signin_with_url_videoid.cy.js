describe('POST sign in API', function () {
    it('Verifies that API allows a anonymous user to signin', function () {

        cy.request({
            method: 'POST',
            url: 'https://dev02.speechpundit.com/api/auth/signin_with_url_video_id/',

            body:{
                "urlVideoId": "7d9f4440-9a29-4844-9d88-6fe6894458f6"
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