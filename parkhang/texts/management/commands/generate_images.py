import os
import shutil
from distutils.dir_util import copy_tree

from django.core.management.base import BaseCommand


class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument('source_dir', nargs='?')
        parser.add_argument('static_dir', nargs='?')

    def handle(self, *args, **options):
        source_dir = options['source_dir']
        static_dir = options['static_dir']

        dir_list = next(os.walk(source_dir))[1]

        for source in dir_list:
            source_dir_name = os.path.join(source_dir, source)
            pdf_dir = os.path.join(source_dir_name, 'pdfs')
            images_dir = os.path.join(source_dir_name, 'images')
            if not os.path.isdir(images_dir):
                os.makedirs(images_dir)
            if os.path.isdir(pdf_dir):
                pdf_list = next(os.walk(pdf_dir))[2]
                for text_pdf in pdf_list:
                    text_name = os.path.splitext(text_pdf)[0]
                    text_images_dir = os.path.join(images_dir, text_name)
                    # delete text edition images directory if present
                    if os.path.isdir(text_images_dir):
                        shutil.rmtree(text_images_dir)
                    os.makedirs(text_images_dir)

                    # extract images
                    extract_images = f"pdfimages -png '{pdf_dir}/{text_pdf}' '{text_images_dir}/page' -p"
                    os.system(extract_images)

                    # rename the images sequentially, starting from 1
                    image_list = next(os.walk(text_images_dir))[2]
                    count = 1
                    for image in image_list:
                        os.rename(f'{text_images_dir}/{image}', f'{text_images_dir}/{count}.png')
                        count += 1
                    
                    # copy the images to the static dir if provided
                    if static_dir:
                        static_images_dir = f'{static_dir}/{text_name}/{source}'
                        if os.path.isdir(static_images_dir):
                            shutil.rmtree(static_images_dir)
                        copy_tree(text_images_dir, static_images_dir)
