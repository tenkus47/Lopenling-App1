import os

from django.test import TestCase

from texts.utils.parse_word_diff import parse_word_diff


class ParseWordDiffTests(TestCase):

    def test_parse_word_diff(self):
        current_dir = os.path.dirname(__file__)
        diff_file = "word_diff_tib.txt"
        full_diff_path = os.path.join(current_dir, diff_file)
        with open(full_diff_path, 'r') as diff_file:
            diff = diff_file.read()

        annotations = parse_word_diff(diff)
        self.assertEqual(31, len(annotations))

        second_annotation = annotations[1]
        self.assertEqual(second_annotation["start"], 52)
        self.assertEqual(second_annotation["length"], 2)
        self.assertEqual(second_annotation["content"], "ཡཱ")
        self.assertEqual(second_annotation["replacement"], "ཡ")

        diff_file = "word_diff_en.txt"
        full_diff_path = os.path.join(current_dir, diff_file)
        with open(full_diff_path, 'r') as diff_file:
            diff = diff_file.read()

        annotations = parse_word_diff(diff)
        self.assertEqual(1, len(annotations))

        first_annotation = annotations[0]
        self.assertEqual(first_annotation["start"], 18)
        self.assertEqual(first_annotation["length"], 3)
        self.assertEqual(first_annotation["content"], "the")
        self.assertEqual(first_annotation["replacement"], "a")
