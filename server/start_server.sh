#!/bin/bash

(cd pdf/letter && python3 -m http.server --bind 0.0.0.0 8080) &
python3 main.py
