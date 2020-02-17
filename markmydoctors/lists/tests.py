from django.http import HttpRequest
from django.urls import resolve
from django.test import TestCase
from .views import home_page


class HomePageTest(TestCase):

    def test_root_url_resolves_to_homepage_view(self):
        found = resolve('/')
        self.assertEqual(found.func, home_page)

    def test_home_page_returns_correct_html(self):
        request = HttpRequest()  # this is what Django will see when a user's browser asks for a page
        response = home_page(request)  # instance of a class called HttpResponse
        html = response.content.decode('utf-8')  # to convert raw bytes into the string of HTML
        self.assertTrue(html.startswith('<html>'))
        self.assertIn('<title>Mark my doctors</title>', html)
        self.assertTrue(html.endswith('</html>'))
