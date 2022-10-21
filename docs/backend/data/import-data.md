## Download the data

### Download/Update the text

```bash
python data/update_text.py
```

### Download/Update Image alignments

```bash
python data/python data/download_image_alignments_for_text.py
```


## Delete text

### Delete all the existing texts
```bash
make manage arg='delete_all_text'
```

### Delete all the existing texts
```bash
make manage arg='delete_all_text'
```

## Import the text

### Import Chonjuk
```bash
make manage arg="import_texts /var/parkhang/data/chonjuk Dominant"
```

### Import all other texts
```bash
make manage arg="import_texts /var/parkhang/data/texts སྡེ་དགེ"
```
