import tests.docker_base as docker_base
import requests
import unittest


def setup():
    pass

def teardown():
    pass


class TestConnect(unittest.TestCase):
    def test_connect_pyramid(self):
        response = requests.get(
            'http://{}:8080'.format(
                docker_base.ip()
            )
        )

        print(response.content)

        self.assertEqual(
            response.status_code,
            200
        )

    def test_connect_couchdb(self):
        response = requests.get(
            'http://{}:5984'.format(
                docker_base.ip()
            )
        )

        print(response.content)

        self.assertEqual(
            response.status_code,
            200
        )
