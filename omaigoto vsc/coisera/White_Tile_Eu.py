import pyautogui
import time

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

while True:
    
    if pyautogui.pixel(*TARGETS["tile11"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile11"])
    elif pyautogui.pixel(*TARGETS["tile12"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile12"])
    elif pyautogui.pixel(*TARGETS["tile13"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile13"])
    elif pyautogui.pixel(*TARGETS["tile14"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile14"])

    if pyautogui.pixel(*TARGETS["tile21"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile21"])
    elif pyautogui.pixel(*TARGETS["tile22"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile22"])
    elif pyautogui.pixel(*TARGETS["tile23"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile23"])
    elif pyautogui.pixel(*TARGETS["tile24"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile24"])

    if pyautogui.pixel(*TARGETS["tile31"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile31"])
    elif pyautogui.pixel(*TARGETS["tile32"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile32"])
    elif pyautogui.pixel(*TARGETS["tile33"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile33"])
    elif pyautogui.pixel(*TARGETS["tile34"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile34"])

    if pyautogui.pixel(*TARGETS["tile41"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile41"])
    elif pyautogui.pixel(*TARGETS["tile42"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile42"])
    elif pyautogui.pixel(*TARGETS["tile43"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile43"])
    elif pyautogui.pixel(*TARGETS["tile44"]) == (0,0,0):
        pyautogui.click(*TARGETS["tile44"])
