
from selenium import webdriver
import unittest


class NewVisitorTest(unittest.TestCase):

    def setUp(self) -> None:
        self.browser = webdriver.Firefox()

    def tearDown(self) -> None:
        self.browser.quit()

    def test_can_start_a_list_and_retrieve_it_later(self):
        # Mici has heard about a cool new online app where you can find the best doctors and rate them. She goes
        # to check out its homepage
        self.browser.get('http://localhost:8000')

        # She notices the page title and header mentions Mark my doctors
        self.assertIn('Mark my doctors', self.browser.title)
        self.fail("Finish the test!")

        # She is invited to enter a doctor's name straight away

        # She types "Ruska Pal" into a text box

        # When she hits enter, the page updates, and now the page lists
        # "1: Ruska Pal" as a doctor in a rating list

        # There is still a text box inviting her to add another doctor. She
        # enters "Irisz Szabo"

        # The page updates again, and now shows both doctors on her list

        # Mici wonders whether the site will remember her list

        # She visits the URL, her rating list is still there.

        # Satisfied, she goes back to sleep


if __name__ == '__main__':
    unittest.main(warnings='ignore')
