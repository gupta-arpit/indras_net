
"""
    This is wolf-sheep re-written in indra2.
"""

from indra2.agent import Agent
from indra2.composite import Composite
from itime import Time

DEBUG = True  # turns debugging code on or off
DEBUG2 = True  # turns deeper debugging code on or off

NUM_WOLVES = 3
NUM_SHEEP = 10
SHEEP_WOLVES_RATIO = NUM_SHEEP // NUM_WOLVES

WOLF_LIFESPAN = 5
WOLF_REPRO_PERIOD = 6

SHEEP_LIFESPAN = 8
SHEEP_REPRO_PERIOD = 6

wolves, sheep = None


def sheep_action(agent):
    print("I'm " + agent.name + " and I eat grass.")


def wolf_action(agent):
    for i in range(NUM_SHEEP):
        if SHEEP_WOLVES_RATIO >= 1:
            eat()
            agent.duration += 1
        else:
            agent.duration -= 1
    agent["time_to_repr"] -= 1
    if agent["time_to_repr"] == 0:
        # reproduce!
        agent["time_to_repr"] = WOLF_REPRO_PERIOD
    print("I'm " + agent.name + " and my remaining life is: "
          + str(agent.duration))


def create_wolf(i):
    return Agent("wolf" + str(i), duration=WOLF_LIFESPAN,
                 action=wolf_action,
                 attrs={"time_to_repr": WOLF_REPRO_PERIOD})


def create_sheep(i):
    return Agent("sheep" + str(i), duration=SHEEP_LIFESPAN,
                 action=sheep_action,
                 attrs={"time_to_repr": SHEEP_REPRO_PERIOD})


def eat(agent):
    agent.die()


wolves = Composite("wolves")
for i in range(NUM_WOLVES):
    wolves += create_wolf(i)

if DEBUG2:
    print(wolves.__repr__())

sheep = Composite("sheep")
for i in range(NUM_SHEEP):
    sheep += create_sheep(i)

if DEBUG2:
    print(sheep.__repr__())

meadow = Time("meadow")
meadow += wolves
meadow += sheep
if DEBUG2:
    print(meadow.__repr__())

meadow(10)