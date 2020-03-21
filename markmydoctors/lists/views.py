from django.shortcuts import render, redirect
from lists.models import Doctor


def home_page(request):
    return render(request, 'home.html')


def doctors_list(request):

    if request.method == 'POST':
        Doctor.objects.create(name=request.POST.get('doctor_name', ''))
        return redirect('/doctors/the-only-list-in-the-world/')

    doctors = Doctor.objects.all()
    return render(request, 'doctors_list.html', {'doctors': doctors})
