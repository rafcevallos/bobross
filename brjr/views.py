from django.shortcuts import render
from django.http import JsonResponse
from brjr.models import Birthday


# Create your views here.
def index(request):
    return render(request, 'brjr/index.html')


def birthday(request):
    bday = Birthday.objects.all().values()
    birthday_list = list(bday)
    print("bday data", birthday_list)
    return JsonResponse(birthday_list, safe=False)

# TODO: in a view for a request for birthday data
#     safe=False needed because not sending back a dictionary
#     return JsonResponse(birthday, safe=False)