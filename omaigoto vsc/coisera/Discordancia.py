import pyautogui
import time
import keyboard

TARGETS = [
    [(417, 747), (567, 747), (717, 747)],
    [(417, 697), (567, 697), (717, 697)],
    [(417, 647), (567, 647), (567+150, 647)]
]

# Loop until 'p' is pressed
while True:
    if keyboard.is_pressed('p'):
        break
    for row in TARGETS:
        for pos in row:
            pyautogui.click(pos[0], pos[1])  # Click at x, y
            time.sleep(0.05)  # Prevent too fast clicking