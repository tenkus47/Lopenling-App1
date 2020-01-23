import re
from typing import List

from .normalise_string import normalise_string


def parse_break_data(break_data: str) -> List[int]:
    """
    Parse given data for page breaks positions.
    
    The positions of the _start_ of pages is returned in a List.
    """

    open_break_tags = '['
    close_break_tags = ']'
    front_char = 'ན'
    back_char = 'བ'
    open_text_id_tags = '{'
    close_text_id_tags = '}'
    text_id_suffix_tag = '#'

    in_break = False
    in_text_id = False
    adjacent_text_id = False
    current_pos = 0
    page_breaks = []
    line_breaks = []
    line_break_chars = ['\n', '\r']
    current_string = ''
    current_break_info = ''
    current_page_number = 0
    current_page_letter = ''
    new_page = False
    first_line = True

    normalised = normalise_string(break_data)
    for char in normalised:
        if current_pos > 2000:
            break
        if adjacent_text_id:
            if char is text_id_suffix_tag:
                continue
            adjacent_text_id = False
        if char in open_break_tags:
            in_break = True
            current_break_info = ''
            continue
        elif char in close_break_tags:
            page_tokens_list = re.findall(r'([\d]+)([a-z])(\.[0-9]+)?', current_break_info)
            if page_tokens_list and len(page_tokens_list) > 0:
                page_tokens = page_tokens_list[0]
                page_number = page_tokens[0]
                page_letter = page_tokens[1]

                if page_number != current_page_number or page_letter != current_page_letter:
                    page_breaks.append(current_pos)
                    current_page_number = page_number
                    current_page_letter = page_letter
                else:
                    line_breaks.append(current_pos)
            try:
                line_data = page_tokens[2]
                new_page = False
            except:
                new_page = True
            in_break = False
            current_string = ''
            current_break_info = ''
            continue
        elif in_break:
            current_break_info += char
            continue
        if first_line and char in open_text_id_tags:
            in_text_id = True
            continue
        elif first_line and char in close_text_id_tags:
            in_text_id = False
            adjacent_text_id = True
            continue
        elif in_text_id:
            continue

        if not in_break:
            if char not in line_break_chars:
                current_string += char
                current_pos += 1
            if char in line_break_chars:
                first_line = False
            continue

    return (page_breaks, line_breaks)
