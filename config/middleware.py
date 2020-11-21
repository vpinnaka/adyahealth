
from django.utils.functional import SimpleLazyObject
from django.contrib.auth.models import AnonymousUser

from rest_framework.request import Request
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authentication import TokenAuthentication
from django.utils.deprecation import MiddlewareMixin


def get_user(request):
    """
    Replacement for django session auth get_user & auth.get_user for
     JSON Web Token authentication. Inspects the token for the user_id,
     attempts to get that user from the DB & assigns the user on the
     request object. Otherwise it defaults to AnonymousUser.
    This will work with existing decorators like LoginRequired, whereas
    the standard restframework_jwt auth only works at the view level
    forcing all authenticated users to appear as AnonymousUser ;)
    Returns: instance of user object or AnonymousUser object
    """
    user = None
    try:
        user_token = TokenAuthentication().authenticate(Request(request))
        if user_token is not None:
            # store the first part from the tuple (user, obj)
            user = user_token[0]
    except Exception as e:
        print(e)
        

    return user or AnonymousUser()


class AuthenticationMiddleware(MiddlewareMixin):
    """ Middleware for authenticating JSON Web Tokens in Authorize Header """
    def process_request(self, request):
        request.user = SimpleLazyObject(lambda : get_user(request))
        request.organization = request.user.organization_map.organization if hasattr(request.user, 'organization_map') else None