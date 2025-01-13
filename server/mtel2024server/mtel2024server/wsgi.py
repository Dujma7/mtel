"""
WSGI config for mtel2024server project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os
import sys

from django.core.wsgi import get_wsgi_application

sys.path.append('/var/www/html/mtel2024server')
sys.path.append('/var/www/html/mtel2024server/mtel2024server')

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mtel2024server.settings')

application = get_wsgi_application()
