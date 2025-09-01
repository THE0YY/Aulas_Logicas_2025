import time
import pyautogui as pya

# Tenta usar pydirectinput (melhor p/ jogos). Se não tiver, cai no pyautogui.
try:
    import pydirectinput as pdi
    def CLICK(x, y):
        pdi.click(x, y)
except ImportError:
    def CLICK(x, y):
        pya.click(x, y)

# ----- CONFIG -----
SAMPLE_POS = (948, 262)  # pixel que você lê a cor
TOL        = 10          # tolerância de cor
COOLDOWN   = 0.5         # tempo mínimo entre cliques no mesmo estado (segundos)

TARGETS = {
    "vermelho": {"rgb": (255, 0, 0),   "pos": (745, 424)},
    "azul":     {"rgb": (0, 246, 254), "pos": (851, 424)},
    "verde":    {"rgb": (0, 247, 0),   "pos": (961, 424)},
    "branco":   {"rgb": (254, 254, 254),"pos": (1069, 424)},
    "amarelo":  {"rgb": (254, 254, 0), "pos": (1167, 424)},
}

def cor_igual(c1, c2, tol=TOL):
    return all(abs(a - b) <= tol for a, b in zip(c1, c2))

def estado_da_cor(cor):
    for nome, data in TARGETS.items():
        if cor_igual(cor, data["rgb"]):
            return nome
    return None

ultimo_estado = None
ultimo_clique = 0.0  # timestamp do último clique (independente da cor)

while True:
    cor = pya.pixel(*SAMPLE_POS)
    estado = estado_da_cor(cor)

    agora = time.monotonic()

    if estado:
        # clica se mudou de estado OU se passou o cooldown (mesmo estado)
        if estado != ultimo_estado or (agora - ultimo_clique) >= COOLDOWN:
            x, y = TARGETS[estado]["pos"]
            CLICK(x, y)
            ultimo_estado = estado
            ultimo_clique = agora
    else:
        # se nenhuma cor conhecida, opcionalmente resetar estado
        # isso ajuda a considerar a próxima cor como "transição"
        ultimo_estado = None

    time.sleep(0.02)
