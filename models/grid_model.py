"""
grid_model.py
You can clone this file and its companion grid_run.py
to easily get started on a new grid model.
It also is a handy tool to have around for testing
new features added to the base system.
"""
import indra.grid_agent as ga
import logging
import indra.user as u

class TestGridAgent(ga.GridAgent):
    """
    An agent that prints its neighbors in preact
    and also jumps to an empty cell: defaut behavior
    from our ancestor.
    """

    def preact(self):
        (x, y) = self.pos
        u.tell("With " + self.name + " we are looking around " + " x = " + str(x) + " y = " + str(y))
        u.tell(self.name + " has neighbors: ")
        for neighbor in self.neighbor_iter():
            (x1, y1) = neighbor.pos
            u.tell("    %i, %i" % (x1, y1))

    def postact(self):
        u.tell("Agent %s postacting" % (self.name))
