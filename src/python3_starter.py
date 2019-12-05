#!/usr/bin/env python3

import json
import sys

def main():
    with open(sys.argv[1]) as json_file:
        data = json.load(json_file)
        print("JSON Data: ", data)

if __name__ == "__main__":
    main()
