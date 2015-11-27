#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import re

if __name__ == '__main__':
    argvs = sys.argv
    argc = len(argvs)
    #ファイル名が入力されていなかった時
    if argc != 2:
        print "error"
        sys.exit()
    
    argvs[1] = argvs[1].split(".")
    file_name = argvs[1][0]
    print file_name
    rcl_name = file_name + ".rcl"
    rcg_name = file_name + ".rcg"

    rcl = open(rcl_name, 'r')
   
    for i in rcl:
        i = re.split(r'[\(\) ,\t]', i)
        print i 