from django.test import TestCase
from lists.models import Doctor


class HomePageTest(TestCase):

    def test_uses_home_template(self):
        response = self.client.get('/')
        self.assertTemplateUsed(response, 'home.html')

    def test_can_save_a_POST_request(self):
        response = self.client.post('/', data={'item_text': 'A new list item'})
        self.assertIn('A new list item', response.content.decode())
        self.assertTemplateUsed(response, 'home.html')


class DoctorModelTest(TestCase):

    def test_saving_and_retrieving_doctors(self):
        first_doctor = Doctor()
        first_doctor.name = "Semmelweis Ignaz"
        first_doctor.save()

        second_doctor = Doctor()
        second_doctor.name = "Dr Who"
        second_doctor.save()

        saved_doctors = Doctor.objects.all()
        self.assertEqual(saved_doctors.count(), 2)

        first_saved_doctor = saved_doctors[0]
        second_saved_doctor = saved_doctors[1]
        self.assertEqual(first_saved_doctor.name, "Semmelweis Ignaz")
        self.assertEqual(second_saved_doctor.name, "Dr Who")
