#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import re
import os
import glob
  
# get info 
argvs = sys.argv
argc = len(argvs)
 
if argc != 2:
    print("using error\n{0} /path/to/log".format(argvs[0]))
    sys.exit()

# get log data
logfiles = glob.glob('*'+argvs[1]+'*.rcg')
 
win = 0 ; lose = 0 ; draw = 0
for logfile in logfiles:
    logfile = logfile.split(".")
    logfile = logfile[0]

    logfile =  os.path.basename(logfile)
    print logfile
    logfile = re.sub(r'^[0-9]*-', '', logfile)    
    point = re.sub(r'[a-zA-Z_-]', ' ', logfile)
    point = point.split()
    logfile = re.sub(r'_[0-9].*-vs-|_[0-9]', ' ', logfile)
    logfile = logfile.split()
    print logfile,point