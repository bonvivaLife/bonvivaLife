import requests
import hashlib
import os
import time
import subprocess
from pathlib import Path
url = "http://18.202.59.170:8080/gdpr.pdf"

def loop():
    last_hash = ""
    bytes = download_file()
    last_hash = calculateSHA256(bytes)

    while True:
        time.sleep(2)
        bytes = download_file()
        hash = calculateSHA256(bytes)
        last_hash = hash
        print("Last Hash:", hash)
        print("New Hash:", hash)
        if hash != last_hash:
            print("!!!!FILE CHANGE DEDECTED!!!!")
            last_hash = hash
            delete_pdf()
            write_pdf(bytes)
            print_pdf()

def delete_pdf():
    file = Path("pdf.pdf")
    if file.is_file():
        os.remove("pdf.pdf")

def write_pdf(bytes):
    with open('pdf.pdf', 'wb') as f:
        f.write(bytes)
    f.close()

def print_pdf():
    file = Path("pdf.pdf")
    if file.is_file():
        subprocess.call(["lpr", "-P", "Canon", "pdf.pdf"])

def download_file():
    return requests.get(url).content

def calculateSHA256(bytes):
    sha256_hasher = hashlib.sha256()
    sha256_hasher.update(bytes)
    return sha256_hasher.hexdigest()

loop()