from django.shortcuts import render, redirect
from lists.models import Doctor


def home_page(request):

    if request.method == 'POST':
        Doctor.objects.create(name=request.POST.get('doctor_name', ''))
        return redirect('/')

    doctors = Doctor.objects.all()
    return render(request, 'home.html', {'doctors': doctors})
