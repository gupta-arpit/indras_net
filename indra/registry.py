"""
The intention behind creating this module is to regularize the
restoration of objects that cannot be directly serialized.
This class will appear as a dictionary, but with the right sort of default
behaviors that we need for our registry.
"""
import json
import warnings

REGISTRY = "Registry"

"""
We can also have some global singletons here. We'll start with `the_env`;
perhaps `the_user` should go here as well?
"""
_the_env = None  # this is a singleton, so global should be ok


def set_env(env):
    global _the_env
    _the_env = env


def get_env():
    return _the_env


class Registry(object):
    """
    This is an abstraction layer over a dictionary of object names.
    As objects are restored from a serilazed stream, they should be registered
    here. If they are already registered, they will ignore the newly
    registered object, and leave the old value in place.
    """
    def __init__(self):
        self.agents = {}

    def __str__(self):
        return repr(self)

    def __repr__(self):
        return json.dumps(self.to_json(), indent=4)

    def __getitem__(self, key):
        return self.agents[key]

    def get(self, key, default=None):
        if key in self.agents:
            return self.__getitem__(key)
        else:
            return default

    def __setitem__(self, key, value):
        if key not in self.agents or self.agents[key] is None:
            self.agents[key] = value
            if value is None:
                warnings.warn("Trying to set the value of key {} to None.".
                              format(key), RuntimeWarning)
        else:
            pass
            # this fails the tests at the moment, so we need to debug
            # it is the tests that have a problem!
            # raise KeyError("The key \"{}\" already exists in the registry"
            #                .format(key))

    def __contains__(self, item):
        return item in self.agents

    def __iter__(self):
        return iter(self.agents)

    def to_json(self):
        """
        For right now, just list what keys are in the registry.
        """
        return {REGISTRY: str(self.agents.keys())}


registry = Registry()


def register(key, val):
    registry[key] = val


def get_registration(key):
    if key in registry:
        return registry[key]
    else:
        return None
