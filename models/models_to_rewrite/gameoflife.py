"""
Conway's Game of Life model.
"""

from indra.agent import Agent
from indra.composite import Composite
from indra.display_methods import BLACK, SQUARE
from indra.env import Env
from registry.registry import get_env, get_prop, get_group
from indra.utils import init_props
from indra.space import Region

MODEL_NAME = "gameoflife"
DEBUG = False  # Turns debugging code on or off
DEBUG2 = False
DEF_HEIGHT = 30
DEF_WIDTH = 30
BLACK = "Black"
reset_lists = False
to_come_alive = []
to_die = []


def create_game_cell(x, y):
    """
    Create an agent with the passed x, y value as its name.
    """
    return Agent(name=("(%d,%d)" % (x, y)),
                 action=game_agent_action,
                 attrs={"save_neighbors": True})


def apply_live_rules(agent):
    """
    Apply the rules for live agents.
    The agent passed in should be alive, meaning its color should be black.
    """

    curr_region = Region(space=get_env(), center=agent.get_pos(),
                         size=1)
    num_live_neighbors = curr_region.get_num_of_agents(exclude_self=True,
                                                       pred=None)
    if DEBUG2:
        print("agent at (x,y): ", agent.get_pos(),
              "has this many neighbors: ", num_live_neighbors)
    if (num_live_neighbors != 2 and num_live_neighbors != 3):
        return True
    else:
        return False


def apply_dead_rules(new_x, new_y):
    """
    Apply the rules for dead agents.
    The agent passed in should be dead, meaning its color should be white.
    """

    curr_region = Region(space=get_env(), center=(new_x, new_y),
                         size=1)
    num_live_neighbors = curr_region.get_num_of_agents(exclude_self=True,
                                                       pred=None)
    if DEBUG:
        print("agent at (x,y): ", (new_x, new_y),
              "has this many neighbors: ", num_live_neighbors)
    if num_live_neighbors == 3:
        return True
    else:
        return False


def check_for_new_agents(agent):
    global to_come_alive
    if DEBUG:
        print("checking_for_new_agents!")
    curr_x = agent.get_x()
    curr_y = agent.get_y()
    for y in ([-1, 0, 1]):
        for x in ([-1, 0, 1]):
            if (x != 0) or (y != 0):
                new_x = curr_x + x
                new_y = curr_y + y
                potential_new_agent = get_env().get_agent_at(new_x, new_y)
                if potential_new_agent is None:
                    if DEBUG:
                        print("=================")
                        print("Check for new agents at: ", (new_x, new_y))
                        print("apply_dead_rules check: ",
                              apply_dead_rules(new_x, new_y))
                        print("Checking (16,16): ",
                              get_env().get_agent_at(16, 16))
                        if (get_env().get_agent_at(16, 16) is not None):
                            print("Checkgin (16,16) group: ",
                                  get_env().get_agent_at(16, 16)
                                  .primary_group())
                        print("=================")
                    if apply_dead_rules(new_x, new_y):
                        to_come_alive.append((new_x, new_y))
                        if DEBUG2:
                            print("to come alive being append to:(x,y)",
                                  (new_x, new_y))
    return to_come_alive


def gameoflife_action(biosphere):
    """
    The action that will be taken every period for the enviornment.
    Loops through the list of agents that has to come alive and die
        and carries out the corresponding action.
    """
    global to_come_alive
    global to_die
    global reset_lists
    b = get_group(BLACK)
    for agent_pos in to_come_alive:
        if DEBUG:
            print("Agent at", agent_pos, "will come alive")
        if biosphere.get_agent_at(agent_pos[0], agent_pos[1]) is None:
            agent = create_game_cell(agent_pos[0], agent_pos[1])
            b += agent
            biosphere.place_member(agent, xy=(agent_pos[0], agent_pos[1]))
    for agent in to_die:
        if not isinstance(agent, tuple):
            if DEBUG:
                print("Agent at", agent, "will die")
            agent.die()
            b.del_member(agent)
            biosphere.remove_location(agent.get_x(), agent.get_y())
    reset_lists = True
    return True


def game_agent_action(agent):
    """
    The action that will be taken every period for the agents.
    Checks its Moore neighborhood and checks the number of neighbors to
        the rules of Game of Life.
    """
    global to_come_alive
    global to_die
    global reset_lists

    if reset_lists:
        to_come_alive = []
        to_die = []
        reset_lists = False

    check_for_new_agents(agent)
    if apply_live_rules(agent):
        if DEBUG2:
            print("To die being appended to (x,y):", agent.get_pos())
        to_die.append(agent)
    return True


def populate_board_glider(width, height):
    b = get_group(BLACK)
    center = [width // 2, height // 2]
    agent_loc = [(center[0], center[1]), (center[0] - 1, center[1] + 1),
                 (center[0] + 1, center[1] + 1),
                 (center[0] + 1, center[1]), (center[0], center[1] - 1)]
    for loc in agent_loc:
        agent = create_game_cell(loc[0], loc[1])
        b += agent
        get_env().place_member(agent, xy=loc)


def populate_board_small_exploder(width, height):
    b = get_group(BLACK)
    center = [width // 2, height // 2]
    agent_loc = [(center[0], center[1]), (center[0], center[1] + 1),
                 (center[0] - 1, center[1]),
                 (center[0] + 1, center[1]), (center[0] - 1, center[1] - 1),
                 (center[0] + 1, center[1] - 1),
                 (center[0], center[1] - 2)]
    for loc in agent_loc:
        agent = create_game_cell(loc[0], loc[1])
        b += agent
        get_env().place_member(agent, xy=loc)


def populate_board_exploder(width, height):
    center = [width // 2, height // 2]
    agent_loc = [(center[0], center[1]), (center[0], center[1] - 4)]
    b = get_group(BLACK)
    for i in range(0, 5):
        agent_loc.append((center[0] - 2, center[1] - i))
        agent_loc.append((center[0] + 2, center[1] - i))
    for loc in agent_loc:
        agent = create_game_cell(loc[0], loc[1])
        b += agent
        get_env().place_member(agent, xy=loc)


def populate_board_n_horizontal_row(width, height, n=10):
    center = [width // 2, height // 2]
    agent_loc = []
    right = (n // 2) + (n % 2)
    left = n // 2
    b = get_group(BLACK)
    for r in range(right):
        agent_loc.append((center[0] + r, center[1]))
    for le in range(1, left):
        agent_loc.append((center[0] - le, center[1]))
    for loc in agent_loc:
        agent = create_game_cell(loc[0], loc[1])
        b += agent
        get_env().place_member(agent, xy=loc)


def populate_board_n_vertical_row(width, height, n=10):
    center = [width // 2, height // 2]
    agent_loc = []
    top = (n // 2) + (n % 2)
    bottom = n // 2
    b = get_group(BLACK)
    for t in range(top):
        agent_loc.append((center[0], center[1] + t))
    for b in range(1, bottom):
        agent_loc.append((center[0], center[1] - b))
    for loc in agent_loc:
        agent = create_game_cell(loc[0], loc[1])
        b += agent
        get_env().place_member(agent, xy=loc)


def populate_board_lightweight_spaceship(width, height):
    center = [width // 2, height // 2]
    agent_loc = [(center[0], center[1]), (center[0] - 1, center[1]),
                 (center[0] - 2, center[1]),
                 (center[0] - 3, center[1]), (center[0], center[1] - 1),
                 (center[0], center[1] - 2),
                 (center[0] - 4, center[1] - 1),
                 (center[0] - 1, center[1] - 3),
                 (center[0] - 4, center[1] - 3)]
    b = get_group(BLACK)
    for loc in agent_loc:
        agent = create_game_cell(loc[0], loc[1])
        b += agent
        get_env().place_member(agent, xy=loc)


def populate_board_tumbler(width, height):
    center = [width // 2, height // 2]
    # this code is clearly awful: we must re-code this
    # per the mathematical pattern underlying this crap
    b = get_group(BLACK)
    agent_loc = [(center[0] - 1, center[1]), (center[0] - 2, center[1]),
                 (center[0] + 1, center[1]),
                 (center[0] + 2, center[1]), (center[0] - 1, center[1] - 1),
                 (center[0] - 2, center[1] - 1),
                 (center[0] + 1, center[1] - 1),
                 (center[0] + 2, center[1] - 1),
                 (center[0] - 1, center[1] - 2),
                 (center[0] - 1, center[1] - 3),
                 (center[0] - 1, center[1] - 4),
                 (center[0] + 1, center[1] - 2),
                 (center[0] + 1, center[1] - 3),
                 (center[0] + 1, center[1] - 4),
                 (center[0] - 3, center[1] - 3),
                 (center[0] - 3, center[1] - 4),
                 (center[0] - 3, center[1] - 5),
                 (center[0] - 2, center[1] - 5),
                 (center[0] + 3, center[1] - 3),
                 (center[0] + 3, center[1] - 4),
                 (center[0] + 3, center[1] - 5),
                 (center[0] + 2, center[1] - 5)]

    for loc in agent_loc:
        agent = create_game_cell(loc[0], loc[1])
        b += agent
        get_env().place_member(agent, xy=loc)


populate_board_dict = {
    0: populate_board_glider,
    1: populate_board_small_exploder,
    2: populate_board_exploder,
    3: populate_board_n_horizontal_row,
    4: populate_board_n_vertical_row,
    5: populate_board_lightweight_spaceship,
    6: populate_board_tumbler
}


def set_up(props=None):
    """
    A func to set up run that can also be used by test code.
    """
    init_props(MODEL_NAME, props)

    height = get_prop("grid_height", DEF_HEIGHT)
    width = get_prop("grid_width", DEF_WIDTH)
    simulation = get_prop("simulation", 0)
    black = Composite("Black", {"color": BLACK, "marker": SQUARE})
    groups = [black]
    Env("Game of Life",
        action=gameoflife_action,
        height=height,
        width=width,
        members=groups,
        attrs={"size": 100,
               "change_grid_spacing": (0.5, 1),
               "hide_xy_ticks": True,
               "hide_legend": True},
        random_placing=False)

    populate_board_dict[simulation](width, height)

    return groups


def restore_globals(env):
    pass


def main():
    global groups
    (groups) = set_up()

    get_env()()
    return 0


if __name__ == "__main__":
    main()
