#!/usr/bin/python3
def print_sorted_dictionary(a_dictionary):
    for item in sorted(set(a_dictionary.keys())):
        print('{}: {}'.format(item, a_dictionary[item]))
