from django.test import TestCase
from lists.models import Doctor


class HomePageTest(TestCase):

    def test_uses_home_template(self):
        response = self.client.get('/')
        self.assertTemplateUsed(response, 'home.html')


class DoctorsListViewTest(TestCase):

    def test_uses_doctors_list_template(self):
        response = self.client.get('/doctors/the-only-list-in-the-world/')
        self.assertTemplateUsed(response, 'doctors_list.html')

    def test_displays_all_doctors(self):
        Doctor.objects.create(name='Timi')
        Doctor.objects.create(name='Roli')

        response = self.client.get('/doctors/the-only-list-in-the-world/')

        self.assertContains(response, 'Timi')
        self.assertContains(response, 'Roli')

    def test_can_save_a_POST_request(self):
        self.client.post('/doctors/the-only-list-in-the-world/', data={'doctor_name': 'A new doctor'})

        self.assertEqual(Doctor.objects.count(), 1)
        new_doctor = Doctor.objects.first()
        self.assertEqual(new_doctor.name, 'A new doctor')

    def test_redirects_after_POST(self):
        response = self.client.post('/doctors/the-only-list-in-the-world/', data={'doctor_name': 'A new doctor'})
        self.assertEqual(response.status_code, 302)
        self.assertEqual(response['location'], '/doctors/the-only-list-in-the-world/')

    def test_only_saves_doctors_when_necessary(self):
        self.client.get('/doctors/the-only-list-in-the-world/')
        self.assertEqual(Doctor.objects.count(), 0)


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
