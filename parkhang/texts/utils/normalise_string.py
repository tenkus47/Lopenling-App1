import unicodedata


def normalise_string(string: str) -> str:
    """
    Normalise the given string using 'NFKD' form.
    """

    normalised_string = ""
    for char in string:
        # strip BOM if present
        if char == u'\uFEFF':
            continue
        # decompose all characters
        if unicodedata.decomposition(char):
            normalised = unicodedata.normalize('NFKD', char)
            normalised_string += normalised
        else:
            normalised_string += char
    return normalised_string
