from typing import List

from .normalise_string import normalise_string


def parse_layout_data(layout_data: str) -> List[int]:
    """
    Parse given data for page breaks positions.
    
    The positions of the _start_ of pages is returned in a List.
    """

    open_break_tags = '['
    close_break_tags = ']'
    front_char = 'ན'
    back_char = 'བ'

    in_break = False
    current_pos = 0
    breaks = []
    line_breaks = ['\n', '\r']
    current_string = ''

    normalised = normalise_string(layout_data)
    for char in normalised:
        if char in open_break_tags:
            in_break = True
            continue
        elif char in close_break_tags:
            breaks.append(current_pos)
            in_break = False
            current_string = ''
            continue
        elif in_break and (char == front_char or char == back_char):
            continue

        if not in_break:
            if char not in line_breaks:
                current_string += char
                current_pos += 1
            continue

    return breaks
