#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import re
import os
import glob
import pylab

def rcg_open(logfile):
    rcg = open(logfile, 'r')

    for i in rcg:
        print i,

if __name__ == '__main__':
    argvs = sys.argv
    argc = len(argvs)
    if argc != 2:
        print "error" ; sys.exit()
    
    argvs[1] = argvs[1].split(".")
    file_name = argvs[1][0]
    rcl = file_name + ".rcl"
    rcg = file_name + ".rcg"
    state = rcg_open(rcg)
    pylab.plot(state[0],state[1],'g')
    pylab.show()