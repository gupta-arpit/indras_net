"""
This is the test suite for drunks.py.
"""

from unittest import TestCase, main

import capital.cap_struct as cap


class CapitalTestCase(TestCase):
    def setUp(self, props=None):
        self.pa = cap.get_props("cap", props, model_dir="capital")
        (cap.resource_holders, cap.entrepreneurs) = cap.set_up()

    def tearDown(self):
        (cap.resource_holders, cap.entrepreneurs) = (None, None)

    def test_dict_to_string(self):
        dict = {"cat":3, "dog":4}
        dict_str = cap.dict_to_string(dict)
        self.assertEqual(dict_str,"cat 3.00 dog 4.00")

    def test_create_entr(self):
        entr = cap.create_entr("Manxueying", 1)
        self.assertEqual(entr.name, "Manxueying1")

    def test_create_rholder(self):
        rholder = cap.create_rholder("Peiwen", 1)
        self.assertEqual(rholder.name, "Peiwen1")

    def test_rholder_action(self):
        pass

    def test_entr_action(self):
        pass

    if __name__ == '__main__':
        main()
