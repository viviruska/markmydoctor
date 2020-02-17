
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
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
        header_text = self.browser.find_element_by_tag_name('h1')
        self.assertIn('Mark my doctors', header_text)

        # She is invited to enter a doctor's name straight away
        inputbox = self.browser.find_element_by_id('id_new_item')
        self.assertEqual(
            inputbox.get_attribute('placeholder'),
            "Not the doctor you're looking for? Add him/her here"
        )

        # She types "Ruska Pal" into a text box
        inputbox.send_keys('Ruska Pal')

        # When she hits enter, the page updates, and now the page lists
        # "1: Ruska Pal" as a doctor in a rating list
        inputbox.send_keys(Keys.ENTER)
        time.sleep(1)

        table = self.browser.find_element_by_id('id_list_table')
        rows = table.find_elements_by_tag_name('tr')
        self.assertTrue(
            any(row.text == '1: Ruska Pal' for row in rows)
        )

        # There is still a text box inviting her to add another doctor. She
        # enters "Irisz Szabo"
        self.fail("Finish the test!")

        # The page updates again, and now shows both doctors on her list

        # Mici wonders whether the site will remember her list

        # She visits the URL, her rating list is still there.

        # Satisfied, she goes back to sleep


if __name__ == '__main__':
    unittest.main(warnings='ignore')
