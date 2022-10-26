## Download the data

### Download/Update the text

```bash
python data/update_text.py
```

or

```bash
docker-compose -f local.yml run --rm django python python/var/parkhang/data/update_text.py
```

### Download/Update Image alignments

```bash
python data/python data/download_image_alignments_for_text.py
```

or

```bash
docker-compose -f local.yml run --rm django python python/var/parkhang/data/download_image_alignments_for_text..py
```

## Delete text

### Delete individual texts

```bash
make manage arg='delete_text <text_id>'
```

or

```bash
docker-compose -f local.yml run --rm django python manage.py delete_text <text_id>
```

### Delete all the existing texts

```bash
make manage arg='delete_all_texts'
```

or

```bash
docker-compose -f local.yml run --rm django python manage.py delete_all_texts
```

## Import the texts

```bash
make manage arg="import_texts /var/parkhang/data/texts Dominant"
```

or

```bash
docker-compose -f local.yml run --rm django python manage.py import_texts /var/parkhang/data/texts Dominant
```
