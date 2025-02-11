#!/usr/bin/env python3

##
# @file afwfcgi.py
# @ingroup afwdev_test_modes
# @brief This file defines the run method for running tests through the 
#        "afwfcgi" mode.
# @details These tests assume the nginx/afwfcgi service is running on 
#          localhost:8080. Scripts are executed over HTTP remotely using the 
#          evaluate_script() Python binding function.
#
#          Only Adaptive Scripts (.as) are supported.
#

import os

from afw import Session
from python_bindings.script import evaluate_script
from _afwdev.common import msg

##
# @brief Runs the tests over the afwfcgi interface.
# @param test The test to run.
# @param options The options dictionary.
# @param testEnvironment The test environment.
# @param testGroupConfig The test group configuration.
#
def run_test(test, options, testEnvironment=None, testGroupConfig=None):

    session = None
    result = None
    error = None
    debug = None
    stderr = os.pipe()
    stdout = os.pipe()
    pwd = os.getcwd()    

    if not test.endswith(".as"):
        msg.debug("Skipping test script (not adaptive script): %s" % test)
        return None, None, None

    try:        
        work_dir = os.path.dirname(test)        
        if testEnvironment:
            work_dir = testEnvironment['work_dir']

        # change to work_dir
        os.chdir(work_dir)        

        # check if file afw.conf exists in current directory
        afw_conf = os.path.join(work_dir, 'afw.conf')
        if not os.path.exists(afw_conf):
            session = Session(url="http://localhost:8080/afw", stdout=stdout[1], stderr=stderr[1])
        else:
            msg.debug("Skipping test script with custom afw.conf: %s" % test)
            return None, None, None

        source = open(test).read()      
        # look at the first line
        shebang = source.splitlines()[0]
        if '--syntax' in shebang:
            syntax = shebang.split('--syntax')[1].strip()

        if not syntax or syntax == 'test_script':         
            msg.debug("Running test script: %s" % test)
            result = evaluate_script(session, source)                    

    except Exception as e:
        msg.debug(str(e))
        error = e

    finally:
        os.chdir(pwd)

        if session:
            session.close()

            # read stdout and stderr
            os.close(stdout[1])
            os.close(stderr[1])

            stdout = os.fdopen(stdout[0]).read()            
            debug = os.fdopen(stderr[0]).read()            

            # print stdout to debug
            msg.debug(stdout)                

    return result, error, debug