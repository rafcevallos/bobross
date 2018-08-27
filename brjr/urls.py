from brjr import views
from django.conf.urls import url


app_name = "brjr"
urlpatterns = [
    url(r'^$', views.index, name='home'),
    url(r'^birthday$', views.birthday, name='birthday'),
]
