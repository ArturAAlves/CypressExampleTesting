
@parentSuite("Facebook")
@suite("Facebook_login")
@epic("Facebook_registration")
@story("Behaviours_story")
Feature: Facebook Login


    I want gherkin scenarios be logged into allure

    Scenario: Sucessfull facebook registration
        Given I access "https://www.facebook.com/" page registration Sucessfully
        When I fill the form with valid data and click registration button
        And I recieve and confirm the registration confirmation email
        Then I the Registration should be complete and i will be redirected to user page


