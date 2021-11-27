# nodeInfoLogger
 A simple logging module with informational aspects
 + Usage: add "const infLog = require('./infoLogger')" to your main file, and then use infLog.infoLogger(message\*, level\*, time [true/false]) to log the message with either:
[SILLY] {0}
[INFO] {1}
[WARN] {2}
[ERROR] {3}
[FATAL] {4}, where the *s are required, and the number for level is in the curly brackets.
