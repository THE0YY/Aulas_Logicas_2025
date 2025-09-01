import pyautogui
import time
import keyboard

TARGETS = {
    "tile11": (761, 334),
    "tile12": (867, 335),
    "tile13": (1019, 331),
    "tile14": (1201, 322),

    "tile21": (1209, 503),
    "tile22": (1038, 495),
    "tile23": (881, 496),
    "tile24": (696, 493),

    "tile31": (712, 648),
    "tile32": (842, 656),
    "tile33": (1020, 665),
    "tile34": (1185, 663),

    "tile41": (687, 820),
    "tile42": (880, 813),
    "tile43": (1031, 815),
    "tile44": (1171, 819),
}

# group tiles by row so we preserve your checking order
ROWS = [
    ["tile11", "tile12", "tile13", "tile14"],
    ["tile21", "tile22", "tile23", "tile24"],
    ["tile31", "tile32", "tile33", "tile34"],
    ["tile41", "tile42", "tile43", "tile44"],
]

while True:
    if keyboar.is_pressed('p'):
        break
    for row in ROWS:              # go row by row
        for tile in row:          # go tile by tile inside this row
            if pyautogui.pixel(*TARGETS[tile]) == (0, 0, 0):
                pyautogui.click(*TARGETS[tile])
                # break after clicking the first black tile in this row
                break