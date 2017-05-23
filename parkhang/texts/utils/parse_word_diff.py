

def fix_diff(diff):
    diff = diff.replace("-/ {+", "-/{+")

    return diff


def parse_word_diff(diff, filename):
    diff = fix_diff(diff)

    annotations = []
    count = 0
    prev_annotation = None
    current_annotation = None
    in_add = False
    in_sub = False
    current_diff_content = ""

    for char in diff:
        try:
            if char == "|":
                in_sub = True
            elif char == "{":
                in_add = True
            elif char in ["/", "}"]:
                if in_add:

                    if prev_annotation and \
                            prev_annotation["start"] + \
                            prev_annotation["length"] == \
                            current_annotation["start"]:

                        prev_annotation["replacement"] = current_diff_content
                        current_annotation = None
                    else:
                        current_annotation["content"] = ""
                        current_annotation["replacement"] = current_diff_content
                else:
                    current_annotation["content"] = current_diff_content
                    current_annotation["length"] = len(current_diff_content)
                if current_annotation:
                    annotations.append(current_annotation)

                # reset vars after a diff segment
                in_add = False
                in_sub = False
                prev_annotation = current_annotation
                current_annotation = None
                current_diff_content = ""
            elif char not in ["-", "+"]:
                if in_add or in_sub:
                    if not current_annotation:
                        current_annotation = {
                            "start": count,
                            "length": 0,
                            "content": "",
                            "replacement": ""
                        }
                    current_diff_content += char
                if not in_add:
                    count += 1
        except Exception as e:
            print(f'char: {char}, previous annotation: {annotations[-1]}')
            print(f'error: {e}')
            raise e

    return annotations
