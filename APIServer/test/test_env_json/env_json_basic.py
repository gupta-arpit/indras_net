def ret():
        return {
    "name": "env",
    "type": "env",
    "duration": 9223372036854775805,
    "pos": None,
    "attrs": {},
    "groups": [],
    "active": None,
    "type_sig": 0,
    "prim_group": None,
    "locator": None,
    "neighbors": None,
    "action_key": None,
    "members": {
        "Blues": {
            "name": "Blues",
            "type": "composite",
            "duration": 9223372036854775805,
            "pos": None,
            "attrs": {
                "color": "blue"
            },
            "groups": [
                "env"
            ],
            "active": None,
            "type_sig": 0,
            "prim_group": "env",
            "locator": None,
            "neighbors": None,
            "action_key": None,
            "members": {
                "Blues0": {
                    "name": "Blues0",
                    "type": "agent",
                    "duration": 9223372036854775805,
                    "pos": [
                        7,
                        17
                    ],
                    "attrs": {},
                    "groups": [
                        "Blues"
                    ],
                    "active": None,
                    "type_sig": 0,
                    "prim_group": "Blues",
                    "locator": "env",
                    "neighbors": None,
                    "action_key": "agent_action"
                },
                "Blues1": {
                    "name": "Blues1",
                    "type": "agent",
                    "duration": 9223372036854775805,
                    "pos": [
                        8,
                        4
                    ],
                    "attrs": {},
                    "groups": [
                        "Blues"
                    ],
                    "active": None,
                    "type_sig": 0,
                    "prim_group": "Blues",
                    "locator": "env",
                    "neighbors": None,
                    "action_key": "agent_action"
                }
            }
        },
        "Reds": {
            "name": "Reds",
            "type": "composite",
            "duration": 9223372036854775805,
            "pos": None,
            "attrs": {
                "color": "red"
            },
            "groups": [
                "env"
            ],
            "active": None,
            "type_sig": 0,
            "prim_group": "env",
            "locator": None,
            "neighbors": None,
            "action_key": None,
            "members": {
                "Reds0": {
                    "name": "Reds0",
                    "type": "agent",
                    "duration": 9223372036854775805,
                    "pos": [
                        19,
                        20
                    ],
                    "attrs": {},
                    "groups": [
                        "Reds"
                    ],
                    "active": None,
                    "type_sig": 0,
                    "prim_group": "Reds",
                    "locator": "env",
                    "neighbors": None,
                    "action_key": "agent_action"
                },
                "Reds1": {
                    "name": "Reds1",
                    "type": "agent",
                    "duration": 9223372036854775805,
                    "pos": [
                        3,
                        14
                    ],
                    "attrs": {},
                    "groups": [
                        "Reds"
                    ],
                    "active": None,
                    "type_sig": 0,
                    "prim_group": "Reds",
                    "locator": "env",
                    "neighbors": None,
                    "action_key": "agent_action"
                }
            }
        }
    },
    "width": 20,
    "height": 20,
    "locations": {
        "Blues0": [
            7,
            17
        ],
        "Blues1": [
            8,
            4
        ],
        "Reds0": [
            19,
            20
        ],
        "Reds1": [
            3,
            14
        ]
    },
    "user": {
        "user_msgs": "",
        "name": "ziruizhou"
    },
    "census_func": None,
    "plot_title": "env",
    "props": {
        "grid_height": {
            "val": 20,
            "question": "What is the grid height?",
            "atype": "INT",
            "lowval": 2,
            "hival": 100
        },
        "grid_width": {
            "val": 20,
            "question": "What is the grid width?",
            "atype": "INT",
            "lowval": 2,
            "hival": 100
        },
        "num_blue": {
            "val": 2,
            "question": "How many blue agents do you want?",
            "atype": "INT",
            "lowval": 1,
            "hival": 100
        },
        "num_red": {
            "val": 2,
            "question": "How many red agents do you want?",
            "atype": "INT",
            "lowval": 1,
            "hival": 100
        },
        "use_line": {
            "val": None,
            "question": None,
            "atype": None,
            "lowval": None,
            "hival": None
        },
        "user_type": {
            "val": "terminal",
            "question": None,
            "atype": None,
            "lowval": None,
            "hival": None
        },
        "OS": {
            "val": "Darwin",
            "question": None,
            "atype": None,
            "lowval": None,
            "hival": None
        },
        "use_scatter": {
            "val": None,
            "question": None,
            "atype": None,
            "lowval": None,
            "hival": None
        }
    },
    "pop_hist": {
        "periods": 2,
        "pops": {
            "Blues": [
                2,
                2,
                2
            ],
            "Reds": [
                2,
                2,
                2
            ]
        }
    },
    "womb": [],
    "switches": [],
    "data_func": None,
    "registry": {}
}