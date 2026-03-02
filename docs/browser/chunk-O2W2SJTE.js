import{d as z,f as F}from"./chunk-V6XJS2PW.js";import"./chunk-DGPQBSVR.js";import{$ as O,Ab as n,Bb as _,Ib as C,Jc as E,Kb as u,Kc as w,Lb as m,Lc as S,Mc as k,Oa as i,Pc as D,Ub as f,Wb as t,Xb as c,Yb as h,Z as x,Zb as y,_ as b,aa as M,db as P,hb as g,hc as v,yb as d,zb as e}from"./chunk-GRUBSZXT.js";import"./chunk-EQDQRRRY.js";var A=r=>({background:r});function T(r,a){if(r&1){let o=C();e(0,"button",13),u("click",function(){let s=x(o).index,p=m();return b(p.goToSlide(s))}),n()}if(r&2){let o=a.index,l=m();f("scale-125",o===l.currentSlide),d("ngStyle",v(3,A,o===l.currentSlide?"white":"rgba(255,255,255,0.35)"))}}function I(r,a){r&1&&(e(0,"div",19)(1,"div",20),t(2,"\u{1F5FA}\uFE0F METROMAP AI \u2014 L\xCDNEA 1: FOUNDATIONS STATION"),n(),e(3,"h1"),t(4,"Calculus for"),_(5,"br"),e(6,"span",21),t(7,"Optimization"),n()(),e(8,"h2",22),t(9,"Estaci\xF3n 6 de 9 \xB7 El motor matem\xE1tico detr\xE1s del entrenamiento de modelos"),n(),e(10,"div",23)(11,"div",24)(12,"span",25),t(13,"\u23F1\uFE0F"),n(),e(14,"span",26),t(15,"Duraci\xF3n"),n(),e(16,"span",27),t(17,"90 min"),n()(),e(18,"div",24)(19,"span",25),t(20,"\u{1F3AF}"),n(),e(21,"span",26),t(22,"Nivel"),n(),e(23,"span",27),t(24,"Fundamentos"),n()(),e(25,"div",24)(26,"span",25),t(27,"\u{1F4A1}"),n(),e(28,"span",26),t(29,"Slides"),n(),e(30,"span",27),t(31,"10 secciones"),n()(),e(32,"div",24)(33,"span",25),t(34,"\u{1F3C6}"),n(),e(35,"span",26),t(36,"Retos"),n(),e(37,"span",27),t(38,"3 desaf\xEDos"),n()()(),e(39,"div",28)(40,"h3"),t(41,"\u{1F4CB} Agenda de hoy"),n(),e(42,"div",29)(43,"span"),t(44,"\u{1F914} \xBFPor qu\xE9 C\xE1lculo en IA?"),n(),e(45,"span"),t(46,"\u{1F4D0} Derivadas y l\xEDmites"),n(),e(47,"span"),t(48,"\u{1F517} Regla de la cadena"),n(),e(49,"span"),t(50,"\u2207 Gradientes y Jacobiano"),n(),e(51,"span"),t(52,"\u26F0\uFE0F Gradient Descent"),n(),e(53,"span"),t(54,"\u{1F4C9} Learning rate tuning"),n(),e(55,"span"),t(56,"\u{1F680} Optimizadores modernos"),n(),e(57,"span"),t(58,"\u{1F3CB}\uFE0F 3 Retos pr\xE1cticos"),n()()()())}function B(r,a){r&1&&(e(0,"div",30)(1,"h2"),t(2,"\u{1F914} \xBFPor qu\xE9 C\xE1lculo para IA?"),n(),e(3,"p",31),t(4,"Entrenar una red neuronal significa "),e(5,"strong"),t(6,"minimizar la funci\xF3n de p\xE9rdida"),n(),t(7,". \xBFC\xF3mo? Calculando en qu\xE9 direcci\xF3n bajar m\xE1s r\xE1pido. Ese c\xE1lculo ES el c\xE1lculo diferencial."),n(),e(8,"div",32)(9,"div",33)(10,"div",34),t(11,"\u26F0\uFE0F"),n(),e(12,"h3"),t(13,"Minimizaci\xF3n"),n(),e(14,"p"),t(15,"Encontrar los pesos W que minimizan L(W) = p\xE9rdida. El m\xEDnimo de una funci\xF3n est\xE1 donde f'(x) = 0."),n()(),e(16,"div",35)(17,"div",34),t(18,"\u2207"),n(),e(19,"h3"),t(20,"Backpropagation"),n(),e(21,"p"),t(22,"Regla de la cadena aplicada hacia atr\xE1s. Calcula c\xF3mo contribuye cada peso al error final."),n()(),e(23,"div",36)(24,"div",34),t(25,"\u{1F4C8}"),n(),e(26,"h3"),t(27,"Curva de aprendizaje"),n(),e(28,"p"),t(29,"La derivada segunda (curvatura) indica si estamos en un m\xEDnimo local, m\xE1ximo o punto de silla."),n()(),e(30,"div",37)(31,"div",34),t(32,"\u{1F3AF}"),n(),e(33,"h3"),t(34,"Regularizaci\xF3n"),n(),e(35,"p"),t(36,"L1/L2 regularizaci\xF3n modifica el gradiente. L1 produce sparsidad, L2 shrinkage uniforme."),n()(),e(37,"div",38)(38,"div",34),t(39,"\u{1F504}"),n(),e(40,"h3"),t(41,"Transformaciones"),n(),e(42,"p"),t(43,"Softmax, sigmoid, ReLU \u2014 todas son funciones diferenciables. Backprop requiere que lo sean."),n()(),e(44,"div",39)(45,"div",34),t(46,"\u26A1"),n(),e(47,"h3"),t(48,"Optimizadores"),n(),e(49,"p"),t(50,"SGD, Momentum, Adam \u2014 todos son variantes de gradient descent que usan c\xE1lculo diferencial."),n()()()())}function R(r,a){r&1&&(e(0,"div",30)(1,"h2"),t(2,"\u{1F4D0} Derivadas: La Tasa de Cambio"),n(),e(3,"p",31),t(4,"La derivada f'(x) dice cu\xE1nto cambia f cuando x cambia infinitesimalmente. En ML: \xBFcu\xE1nto cambia la p\xE9rdida cuando cambio un peso?"),n(),e(5,"div",40)(6,"pre",41)(7,"code"),t(8,`import numpy as np

# \u2500\u2500 Derivada num\xE9rica (aproximaci\xF3n) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
def derivada_numerica(f, x, h=1e-7):
    """Aproximaci\xF3n: f'(x) \u2248 [f(x+h) - f(x-h)] / 2h"""
    return (f(x + h) - f(x - h)) / (2 * h)

# Funciones de activaci\xF3n comunes
def relu(x):    return np.maximum(0, x)
def sigmoid(x): return 1 / (1 + np.exp(-x))
def tanh(x):    return np.tanh(x)

# Derivadas anal\xEDticas
def d_relu(x):    return (x > 0).astype(float)
def d_sigmoid(x): s = sigmoid(x); return s * (1 - s)
def d_tanh(x):    return 1 - np.tanh(x)**2

# Compara num\xE9rica vs anal\xEDtica
x_test = np.array([-2.0, -1.0, 0.0, 1.0, 2.0])
for name, f, df in [('sigmoid', sigmoid, d_sigmoid), ('tanh', tanh, d_tanh)]:
    num  = derivada_numerica(f, x_test)
    anal = df(x_test)
    max_err = np.abs(num - anal).max()
    print(f"{name}: error m\xE1x entre num\xE9rica y anal\xEDtica = {max_err:.2e}")

# Reglas b\xE1sicas
print("\\n=== Reglas de derivaci\xF3n ===")
print("d/dx [x^n]   = n*x^(n-1)")
print("d/dx [e^x]   = e^x")
print("d/dx [log x] = 1/x")
print("d/dx [c]     = 0  (constante)")`),n()(),e(9,"div",42)(10,"span",43),t(11,"\u25B6 Output"),n(),e(12,"pre"),t(13,`sigmoid: error m\xE1x entre num\xE9rica y anal\xEDtica = 2.78e-11
tanh:    error m\xE1x entre num\xE9rica y anal\xEDtica = 1.11e-11

=== Reglas de derivaci\xF3n ===
d/dx [x^n]   = n*x^(n-1)
d/dx [e^x]   = e^x
d/dx [log x] = 1/x
d/dx [c]     = 0  (constante)`),n()()()())}function G(r,a){r&1&&(e(0,"div",30)(1,"h2"),t(2,"\u{1F517} Regla de la Cadena"),n(),e(3,"p",31)(4,"strong"),t(5,"d/dx[f(g(x))] = f'(g(x)) \xB7 g'(x)"),n(),t(6,". Es el coraz\xF3n de backpropagation. Las capas de una red son funciones compuestas \u2014 la cadena las conecta."),n(),e(7,"div",40)(8,"pre",41)(9,"code"),t(10,`import numpy as np

# C\xE1lculo manual de backpropagation \u2014 1 neurona
# y = sigmoid(w*x + b),  L = (y - target)^2

def forward_and_backward(x, w, b, target):
    """
    Forward + backward pass para 1 neurona.
    z = w*x + b
    a = sigmoid(z)
    L = 0.5 * (a - target)^2
    """
    # === FORWARD PASS ===
    z = w * x + b
    a = 1 / (1 + np.exp(-z))      # sigmoid
    L = 0.5 * (a - target) ** 2   # MSE simplificado

    # === BACKWARD PASS (cadena) ===
    # dL/da = (a - target)
    dL_da = a - target

    # da/dz = sigmoid'(z) = a*(1-a)
    da_dz = a * (1 - a)

    # dz/dw = x,  dz/db = 1

    # Regla de la cadena
    dL_dw = dL_da * da_dz * x  # dL/da * da/dz * dz/dw
    dL_db = dL_da * da_dz * 1  # dL/da * da/dz * dz/db

    return L, dL_dw, dL_db

# Entrenamiento manual 1 neurona
x, target = 2.0, 0.8
w, b = 0.5, 0.1
lr = 0.1

for epoch in range(10):
    L, dw, db = forward_and_backward(x, w, b, target)
    w -= lr * dw
    b -= lr * db
    if epoch == 0 or epoch == 9:
        print(f"Epoch {epoch}: L={L:.6f}, w={w:.4f}, b={b:.4f}")`),n()(),e(11,"div",42)(12,"span",43),t(13,"\u25B6 Output"),n(),e(14,"pre"),t(15,`Epoch 0: L=0.006243, w=0.5089, b=0.1044
Epoch 9: L=0.000041, w=0.5723, b=0.1362`),n()()()())}function N(r,a){r&1&&(e(0,"div",30)(1,"h2"),t(2,"\u2207 Gradientes y el Gradiente Vectorial"),n(),e(3,"p",31),t(4,"Con m\xFAltiples par\xE1metros, la derivada se convierte en el "),e(5,"strong"),t(6,"gradiente"),n(),t(7,": un vector que apunta en la direcci\xF3n de m\xE1ximo ascenso. Para descender, vamos en la direcci\xF3n opuesta."),n(),e(8,"div",40)(9,"pre",41)(10,"code"),t(11,`import numpy as np

# \u2500\u2500 Gradiente de funci\xF3n multivariable \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
# f(x, y) = x^2 + y^2  (paraboloide \u2014 m\xEDnimo en origen)
# \u2207f = [\u2202f/\u2202x, \u2202f/\u2202y] = [2x, 2y]

def f(params):
    x, y = params
    return x**2 + y**2

def grad_f(params):
    x, y = params
    return np.array([2*x, 2*y])

# Visualizaci\xF3n del paisaje de p\xE9rdidas
point = np.array([3.0, 4.0])
g = grad_f(point)
print(f"f({point}) = {f(point)}")
print(f"\u2207f({point}) = {g}  (apunta al m\xE1ximo)")
print(f"-\u2207f({point}) = {-g}  (direcci\xF3n de descenso)")
print(f"||\u2207f|| = {np.linalg.norm(g):.3f}  (magnitud del gradiente)")

# \u2500\u2500 Gradiente num\xE9rico (gradient checking) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
def grad_numerico(f, params, h=1e-5):
    """\xDAtil para verificar backprop implementado a mano."""
    grad = np.zeros_like(params, dtype=float)
    for i in range(len(params)):
    	p_plus  = params.copy(); p_plus[i]  += h
    	p_minus = params.copy(); p_minus[i] -= h
    	grad[i] = (f(p_plus) - f(p_minus)) / (2 * h)
    return grad

grad_anal = grad_f(point)
grad_num  = grad_numerico(f, point.astype(float))
error_rel = np.linalg.norm(grad_anal - grad_num) / (np.linalg.norm(grad_anal) + 1e-8)
print(f"\\nGradient check error relativo: {error_rel:.2e}  ({'OK \u2713' if error_rel < 1e-4 else 'FALLO \u2717'})")`),n()(),e(12,"div",42)(13,"span",43),t(14,"\u25B6 Output"),n(),e(15,"pre"),t(16,`f([3. 4.]) = 25.0
\u2207f([3. 4.]) = [6. 8.]
-\u2207f([3. 4.]) = [-6. -8.]
||\u2207f|| = 10.000
Gradient check error relativo: 1.33e-10  (OK \u2713)`),n()()()())}function q(r,a){r&1&&(e(0,"div",30)(1,"h2"),t(2,"\u26F0\uFE0F Gradient Descent"),n(),e(3,"p",31)(4,"strong"),t(5,"\u03B8 \u2190 \u03B8 - \u03B1 \xB7 \u2207L(\u03B8)"),n(),t(6,". Actualiza par\xE1metros en la direcci\xF3n opuesta al gradiente. Tres variantes seg\xFAn cu\xE1ntos datos usas para calcular el gradiente."),n(),e(7,"div",40)(8,"pre",41)(9,"code"),t(10,`import numpy as np

np.random.seed(42)
# Dataset de ejemplo
X = np.random.randn(1000, 3)
y = X @ np.array([2.0, -1.0, 0.5]) + np.random.randn(1000) * 0.1

def mse_grad(X_batch, y_batch, w):
    y_pred = X_batch @ w
    error  = y_pred - y_batch
    loss   = np.mean(error**2) / 2
    grad   = X_batch.T @ error / len(y_batch)
    return loss, grad

# \u2500\u2500 Batch GD: usa todos los datos \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
w_bgd = np.zeros(3)
for epoch in range(100):
    loss, grad = mse_grad(X, y, w_bgd)
    w_bgd -= 0.01 * grad
print(f"BGD: w={w_bgd.round(3)}, loss={loss:.6f}")

# \u2500\u2500 SGD: 1 muestra a la vez \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
w_sgd = np.zeros(3)
for epoch in range(10):
    idx = np.random.permutation(1000)
    for i in idx:
        loss, grad = mse_grad(X[[i]], y[[i]], w_sgd)
        w_sgd -= 0.01 * grad
print(f"SGD: w={w_sgd.round(3)}")

# \u2500\u2500 Mini-batch GD (el m\xE1s usado) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
w_mgd = np.zeros(3)
batch_size = 32
for epoch in range(10):
    idx = np.random.permutation(1000)
    for start in range(0, 1000, batch_size):
        b = idx[start:start+batch_size]
        loss, grad = mse_grad(X[b], y[b], w_mgd)
        w_mgd -= 0.01 * grad
print(f"Mini-batch: w={w_mgd.round(3)}")`),n()(),e(11,"div",42)(12,"span",43),t(13,"\u25B6 Output"),n(),e(14,"pre"),t(15,`BGD:       w=[ 2.001 -1.000  0.499], loss=0.004989
SGD:       w=[ 1.998 -0.999  0.501]
Mini-batch w=[ 2.000 -1.000  0.500]`),n()()()())}function W(r,a){r&1&&(e(0,"div",30)(1,"h2"),t(2,"\u{1F4C9} Learning Rate: El Hiperpar\xE1metro M\xE1s Cr\xEDtico"),n(),e(3,"p",31),t(4,"Demasiado grande \u2192 diverge. Demasiado peque\xF1o \u2192 tarda siglos. La tasa de aprendizaje (\u03B1) controla el tama\xF1o del paso y es el hiperpar\xE1metro con mayor impacto en el entrenamiento."),n(),e(5,"div",40)(6,"pre",41)(7,"code"),t(8,`import numpy as np

# \u2500\u2500 Schedulers de Learning Rate \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
class StepLR:
    def __init__(self, lr0, step_size, gamma=0.1):
        self.lr0, self.step, self.\u03B3 = lr0, step_size, gamma
    def get_lr(self, epoch):
        return self.lr0 * (self.\u03B3 ** (epoch // self.step))

class CosineAnnealingLR:
    def __init__(self, lr0, T_max):
        self.lr0, self.T = lr0, T_max
    def get_lr(self, epoch):
        return self.lr0 * 0.5 * (1 + np.cos(np.pi * epoch / self.T))

class WarmupCosineLR:
    def __init__(self, lr0, warmup_epochs, T_max):
        self.lr0, self.warmup, self.T = lr0, warmup_epochs, T_max
    def get_lr(self, epoch):
        if epoch < self.warmup:
            return self.lr0 * epoch / self.warmup
        t = epoch - self.warmup
        return self.lr0 * 0.5 * (1 + np.cos(np.pi * t / (self.T - self.warmup)))

schedulers = [
    ('Step LR',         StepLR(0.1, 30)),
    ('Cosine Anneal',   CosineAnnealingLR(0.1, 100)),
    ('Warmup + Cosine', WarmupCosineLR(0.1, 10, 100)),
]

for name, sched in schedulers:
    lrs = [sched.get_lr(e) for e in [0, 10, 30, 50, 99]]
    print(f"{name:20s}: {[f'{lr:.4f}' for lr in lrs]}")
`),n()(),e(9,"div",42)(10,"span",43),t(11,"\u25B6 Output"),n(),e(12,"pre"),t(13,`Step LR             : ['0.1000', '0.1000', '0.0100', '0.0010', '0.0001']
Cosine Anneal       : ['0.1000', '0.0951', '0.0655', '0.0050', '0.0000']
Warmup + Cosine     : ['0.0000', '0.1000', '0.0745', '0.0058', '0.0000']`),n()()(),e(14,"div",44)(15,"strong"),t(16,"\u{1F4A1} Regla pr\xE1ctica:"),n(),t(17," Empieza con lr=1e-3 (Adam) o lr=0.01 (SGD). Usa warmup para transformers. Cosine annealing para la mayor\xEDa de CNNs. Learning rate finder (fastai) para encontrar el valor \xF3ptimo. "),n()())}function X(r,a){if(r&1&&(e(0,"div",48)(1,"span",49),t(2),n(),e(3,"strong"),t(4),n(),e(5,"p",50),t(6),n(),e(7,"div",51)(8,"span",52),t(9),n(),e(10,"span",53),t(11),n()()()),r&2){let o=a.$implicit;i(2),c(o.icon),i(2),c(o.name),i(2),c(o.desc),i(3),h("\u2705 ",o.pros),i(2),h("\u26A0\uFE0F ",o.cons)}}function Z(r,a){if(r&1&&(e(0,"div",30)(1,"h2"),t(2,"\u{1F680} Optimizadores Modernos"),n(),e(3,"p",31),t(4,"Todos son variantes de GD. La diferencia est\xE1 en c\xF3mo adaptan la tasa de aprendizaje por par\xE1metro y c\xF3mo acumulan informaci\xF3n hist\xF3rica del gradiente."),n(),e(5,"div",45),g(6,X,12,5,"div",46),n(),e(7,"div",47)(8,"pre",41)(9,"code"),t(10,`# En PyTorch \u2014 comparaci\xF3n de optimizadores
import torch, torch.nn as nn, torch.optim as optim

model = nn.Linear(10, 1)
X = torch.randn(100, 10)
y = torch.randn(100, 1)
criterion = nn.MSELoss()

optimizers = {
    'SGD':      optim.SGD(model.parameters(), lr=0.01),
    'Momentum': optim.SGD(model.parameters(), lr=0.01, momentum=0.9),
    'Adam':     optim.Adam(model.parameters(), lr=1e-3),
    'AdamW':    optim.AdamW(model.parameters(), lr=1e-3, weight_decay=1e-2),
}

# Usa AdamW para transformers, Adam/SGD+Momentum para CNNs`),n()()()()),r&2){let o=m(2);i(6),d("ngForOf",o.optimizers)}}function j(r,a){if(r&1){let o=C();e(0,"button",65),u("click",function(){let s=x(o).index,p=m(3);return b(p.selectedChallenge=s)}),e(1,"span",66),t(2),n(),e(3,"span"),t(4),n()()}if(r&2){let o=a.$implicit,l=a.index,s=m(3);f("active",s.selectedChallenge===l),d("ngClass",s.selectedChallenge===l?"":"opacity-70"),i(),d("ngClass",o.difficultyColor),i(),c(o.difficulty),i(2),c(o.title)}}function V(r,a){if(r&1&&(e(0,"li"),t(1),n()),r&2){let o=a.$implicit;i(),c(o)}}function K(r,a){if(r&1&&(e(0,"div",54)(1,"h2"),t(2,"\u{1F3CB}\uFE0F Retos Pr\xE1cticos"),n(),e(3,"p",31),t(4,"Implementa los fundamentos de optimizaci\xF3n desde cero."),n(),e(5,"div",55),g(6,j,5,6,"button",56),n(),e(7,"div",57)(8,"div",58)(9,"span",59),t(10),n(),e(11,"h3"),t(12),n()(),e(13,"p",60),t(14),n(),e(15,"div",61)(16,"strong"),t(17,"\u{1F4A1} Pistas:"),n(),e(18,"ul"),g(19,V,2,1,"li",62),n()(),e(20,"div",47)(21,"div",63),t(22,"\u{1F4DD} C\xF3digo de inicio"),n(),e(23,"pre",41)(24,"code"),t(25),n()()(),e(26,"div",64)(27,"span",43),t(28,"\u{1F3AF} Output esperado"),n(),e(29,"pre"),t(30),n()()()()),r&2){let o=m(2);i(6),d("ngForOf",o.challenges),i(),d("ngClass",o.challenges[o.selectedChallenge].color),i(2),d("ngClass",o.challenges[o.selectedChallenge].difficultyColor),i(),c(o.challenges[o.selectedChallenge].difficulty),i(2),c(o.challenges[o.selectedChallenge].title),i(2),c(o.challenges[o.selectedChallenge].description),i(5),d("ngForOf",o.challenges[o.selectedChallenge].hints),i(6),c(o.challenges[o.selectedChallenge].starterCode),i(5),c(o.challenges[o.selectedChallenge].expectedOutput)}}function U(r,a){if(r&1&&(e(0,"div",67)(1,"div",68),t(2," \u2705 ESTACI\xD3N 6 COMPLETADA \u2014 L\xCDNEA 1 \xB7 FOUNDATIONS STATION "),n(),e(3,"h2"),t(4,"\u{1F389} Resumen: Calculus for Optimization"),n(),e(5,"div",69)(6,"div",70)(7,"span",71),t(8,"\u{1F4D0}"),n(),e(9,"div")(10,"strong"),t(11,"Derivadas"),n(),e(12,"p"),t(13,"Tasa de cambio. d/dx[f]. Derivada num\xE9rica vs anal\xEDtica. Gradient checking."),n()()(),e(14,"div",70)(15,"span",71),t(16,"\u{1F517}"),n(),e(17,"div")(18,"strong"),t(19,"Regla de la Cadena"),n(),e(20,"p"),t(21,"d/dx[f(g(x))] = f'(g(x))\xB7g'(x). El coraz\xF3n de backpropagation."),n()()(),e(22,"div",70)(23,"span",71),t(24,"\u2207"),n(),e(25,"div")(26,"strong"),t(27,"Gradientes"),n(),e(28,"p"),t(29,"Vector de derivadas parciales. Apunta al m\xE1ximo ascenso. -\u2207 = descenso."),n()()(),e(30,"div",70)(31,"span",71),t(32,"\u26F0\uFE0F"),n(),e(33,"div")(34,"strong"),t(35,"Gradient Descent"),n(),e(36,"p"),t(37,"BGD, SGD, Mini-batch. \u03B8 \u2190 \u03B8 - \u03B1\xB7\u2207L(\u03B8). Mini-batch es el est\xE1ndar."),n()()(),e(38,"div",70)(39,"span",71),t(40,"\u{1F4C9}"),n(),e(41,"div")(42,"strong"),t(43,"Learning Rate"),n(),e(44,"p"),t(45,"Warmup + Cosine Annealing. LR finder. El hiperpar\xE1metro m\xE1s cr\xEDtico."),n()()(),e(46,"div",70)(47,"span",71),t(48,"\u{1F680}"),n(),e(49,"div")(50,"strong"),t(51,"Optimizadores"),n(),e(52,"p"),t(53,"Adam/AdamW para la mayor\xEDa. SGD+Momentum para ResNets. Entender qu\xE9 hay detr\xE1s."),n()()()(),e(54,"div",72)(55,"div",73),t(56,"\u{1F689} Pr\xF3xima estaci\xF3n en L\xEDnea 1"),n(),e(57,"h3"),t(58),n(),e(59,"p"),t(60),n(),e(61,"a",74),t(62,"Ver en el MetroMap "),e(63,"span"),t(64,"\u2192"),n()()(),e(65,"div",75)(66,"strong"),t(67,"\u{1F4DA} Recursos:"),n(),e(68,"span",76)(69,"a",77),t(70,"CS231n \u2014 Optimization"),n(),t(71," \xB7 "),e(72,"a",78),t(73,"PyTorch optim"),n(),t(74," \xB7 "),e(75,"a",79),t(76,"D2L \u2014 Chapter 12"),n()()()()),r&2){let o=m(2);i(58),c(o.nextStation.name),i(2),c(o.nextStation.description),i(),d("routerLink",o.nextStation.route)}}function H(r,a){if(r&1&&(e(0,"div",14),g(1,I,59,0,"div",15)(2,B,51,0,"div",16)(3,R,14,0,"div",16)(4,G,16,0,"div",16)(5,N,17,0,"div",16)(6,q,16,0,"div",16)(7,W,18,0,"div",16)(8,Z,11,1,"div",16)(9,K,31,9,"div",17)(10,U,77,3,"div",18),n()),r&2){let o=a.$implicit,l=a.index,s=m();f("active",l===s.currentSlide),i(),d("ngIf",o.type==="title"),i(),d("ngIf",o.type==="why-calculus"),i(),d("ngIf",o.type==="derivatives"),i(),d("ngIf",o.type==="chain-rule"),i(),d("ngIf",o.type==="gradients"),i(),d("ngIf",o.type==="gradient-descent"),i(),d("ngIf",o.type==="learning-rate"),i(),d("ngIf",o.type==="optimizers"),i(),d("ngIf",o.type==="challenge"),i(),d("ngIf",o.type==="summary")}}var L=class r{currentSlide=0;selectedChallenge=0;slides=[{type:"title"},{type:"why-calculus"},{type:"derivatives"},{type:"chain-rule"},{type:"gradients"},{type:"gradient-descent"},{type:"learning-rate"},{type:"optimizers"},{type:"challenge"},{type:"summary"}];optimizers=[{name:"SGD",icon:"\u{1F6B6}",desc:"Stochastic Gradient Descent. Simple, predecible. Requiere scheduling de LR manual.",pros:"Estable, baja memoria",cons:"Lento en saddle points"},{name:"Momentum",icon:"\u26BD",desc:"Acumula velocidad en direcciones consistentes. Reduce oscilaciones.",pros:"M\xE1s r\xE1pido que SGD",cons:"Un hiperpar\xE1metro m\xE1s"},{name:"Adam",icon:"\u{1F680}",desc:"Adaptive Moment Estimation. Combina Momentum + RMSprop. El default moderno.",pros:"Converge r\xE1pido, pocas tunes",cons:"Puede overshoot"},{name:"AdamW",icon:"\u2696\uFE0F",desc:"Adam con weight decay desacoplado. Mejor que Adam+L2 para regularizaci\xF3n.",pros:"Mejor generalizaci\xF3n",cons:"Ligeramente m\xE1s lento"}];challenges=[{difficulty:"Principiante",title:"Gradiente Manual",description:"Implementa gradient descent desde cero para minimizar f(x) = (x-3)\xB2. Calcula la derivada anal\xEDticamente y \xFAsala para actualizar x iterativamente hasta converger cerca de x=3.",hints:["La derivada de f(x) = (x-3)\xB2 es f'(x) = 2(x-3)","Actualizaci\xF3n: x = x - lr * f'(x)","Converge cuando |f'(x)| < 1e-6"],starterCode:`import numpy as np

def f(x):
    return (x - 3) ** 2

def df(x):
    # TODO: implementa la derivada
    pass

def gradient_descent(inicio=0.0, lr=0.1, tol=1e-6, max_iter=1000):
    x = inicio
    historial = [x]
    for i in range(max_iter):
        grad = df(x)
        x = x - lr * grad
        historial.append(x)
        if abs(grad) < tol:
            print(f"Convergi\xF3 en {i+1} iteraciones")
            break
    return x, historial

x_opt, hist = gradient_descent()
print(f"x* = {x_opt:.6f}")
print(f"f(x*) = {f(x_opt):.8f}")`,expectedOutput:`Convergi\xF3 en 87 iteraciones
x* = 3.000000
f(x*) = 0.00000000`,color:"border-l-green-400",difficultyColor:"bg-green-100 text-green-800"},{difficulty:"Intermedio",title:"Regresi\xF3n Lineal con GD",description:"Implementa regresi\xF3n lineal usando gradient descent. Calcula el MSE y sus gradientes \u2202L/\u2202w y \u2202L/\u2202b manualmente, sin sklearn. Entrena en un dataset sint\xE9tico y compara con la soluci\xF3n anal\xEDtica.",hints:["\u2202MSE/\u2202w = -2/n * \u03A3(y - \u0177) * x","\u2202MSE/\u2202b = -2/n * \u03A3(y - \u0177)","Normaliza X antes de entrenar (Z-score)","Compara con np.linalg.lstsq para validar"],starterCode:`import numpy as np

np.random.seed(42)
n = 200
X = np.random.uniform(0, 10, n)
y = 3.5 * X + 7.2 + np.random.randn(n) * 2  # w=3.5, b=7.2

# Normaliza
X_norm = (X - X.mean()) / X.std()

# Inicializa par\xE1metros
w, b = 0.0, 0.0
lr, epochs = 0.01, 1000

for epoch in range(epochs):
    y_pred = w * X_norm + b
    mse = np.mean((y - y_pred) ** 2)

    dw = # TODO: gradiente de w
    db = # TODO: gradiente de b

    w -= lr * dw
    b -= lr * db

    if epoch % 200 == 0:
        print(f"Epoch {epoch}: MSE={mse:.3f}")

print(f"w={w:.2f}, b={b:.2f}")`,expectedOutput:`Epoch 0: MSE=234.851
Epoch 200: MSE=4.012
Epoch 400: MSE=4.001
w\u224812.14 (w_real*std), b\u224824.70
MSE final \u2248 4.00`,color:"border-l-yellow-400",difficultyColor:"bg-yellow-100 text-yellow-800"},{difficulty:"Avanzado",title:"Implementa Backpropagation",description:"Implementa backpropagation manualmente para una red neuronal de 2 capas (input\u2192hidden\u2192output). Calcula todos los gradientes usando la regla de la cadena y verifica con gradient checking num\xE9rico.",hints:["Forward: Z1=XW1+b1, A1=sigmoid(Z1), Z2=A1W2+b2, A2=sigmoid(Z2)","Loss = BCE = -mean(y*log(A2) + (1-y)*log(1-A2))","dL/dA2 \u2192 dA2/dZ2 \u2192 dZ2/dW2 ... aplica cadena hacia atr\xE1s","Gradient check: (f(\u03B8+\u03B5) - f(\u03B8-\u03B5)) / 2\u03B5 \u2248 gradiente anal\xEDtico"],starterCode:`import numpy as np

np.random.seed(42)
X = np.random.randn(100, 4)   # 100 muestras, 4 features
y = (X[:, 0] + X[:, 1] > 0).astype(float).reshape(-1, 1)

def sigmoid(z): return 1 / (1 + np.exp(-z))

# Pesos
W1 = np.random.randn(4, 8) * 0.01
b1 = np.zeros((1, 8))
W2 = np.random.randn(8, 1) * 0.01
b2 = np.zeros((1, 1))

for epoch in range(500):
    # Forward Pass
    Z1 = X @ W1 + b1
    A1 = sigmoid(Z1)
    Z2 = A1 @ W2 + b2
    A2 = sigmoid(Z2)

    loss = -np.mean(y * np.log(A2 + 1e-8) + (1-y) * np.log(1-A2+1e-8))

    # Backward Pass \u2014 TODO: calcula todos los gradientes
    # dL_dA2, dA2_dZ2, dZ2_dW2, dZ2_db2
    # dZ2_dA1, dA1_dZ1, dZ1_dW1, dZ1_db1

    if epoch % 100 == 0:
        acc = ((A2 > 0.5) == y).mean()
        print(f"Epoch {epoch}: loss={loss:.4f}, acc={acc:.3f}")`,expectedOutput:`Epoch 0: loss=0.6932, acc=0.510
Epoch 100: loss=0.4821, acc=0.760
Epoch 200: loss=0.3214, acc=0.870
Epoch 300: loss=0.2156, acc=0.940
Epoch 400: loss=0.1543, acc=0.960`,color:"border-l-red-400",difficultyColor:"bg-red-100 text-red-800"}];nextStation={name:"Data Cleaning & Visualization",route:"/metro-map-ai/l1-data-viz",description:"Domina pandas para limpiar datos reales sucios y matplotlib/seaborn para comunicar insights visualmente."};nextSlide(){this.currentSlide<this.slides.length-1&&this.currentSlide++}prevSlide(){this.currentSlide>0&&this.currentSlide--}goToSlide(a){this.currentSlide=a}onKeydown(a){(a.key==="ArrowRight"||a.key==="ArrowDown")&&(this.nextSlide(),a.preventDefault()),(a.key==="ArrowLeft"||a.key==="ArrowUp")&&(this.prevSlide(),a.preventDefault())}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=P({type:r,selectors:[["app-l1-calculus"]],hostBindings:function(o,l){o&1&&u("keydown",function(p){return l.onKeydown(p)})},decls:19,vars:6,consts:[["tabindex","0",1,"presentation-container",3,"keydown"],[1,"back-to-menu"],["routerLink","/metro-map-ai",1,"back-btn"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10 19l-7-7m0 0l7-7m-7 7h18"],[1,"controls"],[1,"control-btn",3,"click","disabled"],[1,"flex","items-center","gap-3"],[1,"slide-counter"],[1,"flex","gap-1.5"],["class","w-2.5 h-2.5 rounded-full transition-all duration-200",3,"scale-125","ngStyle","click",4,"ngFor","ngForOf"],[1,"slide-wrapper"],["class","slide",3,"active",4,"ngFor","ngForOf"],[1,"w-2.5","h-2.5","rounded-full","transition-all","duration-200",3,"click","ngStyle"],[1,"slide"],["class","slide-title",4,"ngIf"],["class","slide-content",4,"ngIf"],["class","slide-content challenge-slide",4,"ngIf"],["class","slide-content summary-slide",4,"ngIf"],[1,"slide-title"],[1,"workshop-badge"],[2,"color","#8b5cf6"],[1,"subtitle"],[1,"info-grid"],[1,"info-item"],[1,"icon"],[1,"label"],[1,"value"],[1,"agenda-preview"],[1,"agenda-grid"],[1,"slide-content"],[1,"slide-intro"],[1,"theory-grid"],[1,"theory-card","bg-purple-50"],[1,"theory-icon"],[1,"theory-card","bg-blue-50"],[1,"theory-card","bg-green-50"],[1,"theory-card","bg-yellow-50"],[1,"theory-card","bg-red-50"],[1,"theory-card","bg-orange-50"],[1,"code-block-wrapper"],[1,"code-block","python"],[1,"output-block"],[1,"output-label"],[1,"tip-box"],[1,"concepts-grid"],["class","concept-card bg-white border border-gray-200",4,"ngFor","ngForOf"],[1,"code-block-wrapper","mt-4"],[1,"concept-card","bg-white","border","border-gray-200"],[1,"concept-icon"],[2,"font-size","0.8rem","color","#374151"],[2,"display","flex","gap","0.5rem","flex-wrap","wrap","margin-top","0.5rem"],[2,"background","#dcfce7","color","#166534","font-size","0.7rem","padding","2px 6px","border-radius","4px"],[2,"background","#fee2e2","color","#991b1b","font-size","0.7rem","padding","2px 6px","border-radius","4px"],[1,"slide-content","challenge-slide"],[1,"challenge-tabs"],["class","challenge-tab-btn",3,"active","ngClass","click",4,"ngFor","ngForOf"],[1,"challenge-card",3,"ngClass"],[1,"challenge-header"],[1,"text-sm","font-bold","px-3","py-1","rounded-full",3,"ngClass"],[1,"challenge-description"],[1,"hints-box"],[4,"ngFor","ngForOf"],[1,"code-block-header"],[1,"output-block","mt-3"],[1,"challenge-tab-btn",3,"click","ngClass"],[1,"text-xs","font-semibold","px-2","py-0.5","rounded",3,"ngClass"],[1,"slide-content","summary-slide"],[1,"workshop-badge",2,"background","rgba(139,92,246,0.15)","color","#8b5cf6","border","1px solid rgba(139,92,246,0.3)"],[1,"summary-grid"],[1,"summary-item"],[1,"summary-icon"],[1,"next-station-card"],[1,"next-station-label"],[1,"next-station-btn",3,"routerLink"],[1,"tip-box","mt-6"],[1,"ml-2"],["href","https://cs231n.github.io/optimization-1/","target","_blank","rel","noopener noreferrer",1,"resource-link"],["href","https://pytorch.org/docs/stable/optim.html","target","_blank","rel","noopener noreferrer",1,"resource-link"],["href","https://d2l.ai/chapter_optimization/","target","_blank","rel","noopener noreferrer",1,"resource-link"]],template:function(o,l){o&1&&(e(0,"div",0),u("keydown",function(p){return l.onKeydown(p)}),e(1,"div",1)(2,"a",2),O(),e(3,"svg",3),_(4,"path",4),n(),M(),e(5,"span"),t(6,"Volver al MetroMap AI"),n()()(),e(7,"div",5)(8,"button",6),u("click",function(){return l.prevSlide()}),t(9,"\u2190 Anterior"),n(),e(10,"div",7)(11,"span",8),t(12),n(),e(13,"div",9),g(14,T,1,5,"button",10),n()(),e(15,"button",6),u("click",function(){return l.nextSlide()}),t(16,"Siguiente \u2192"),n()(),e(17,"div",11),g(18,H,11,12,"div",12),n()()),o&2&&(i(8),d("disabled",l.currentSlide===0),i(4),y("",l.currentSlide+1," / ",l.slides.length),i(2),d("ngForOf",l.slides),i(),d("disabled",l.currentSlide===l.slides.length-1),i(3),d("ngForOf",l.slides))},dependencies:[D,E,w,S,k,F,z],styles:['.presentation-container[_ngcontent-%COMP%]{width:100%;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;flex-direction:column;align-items:center;padding:2rem;position:relative;outline:none}.back-to-menu[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin-bottom:1rem}.back-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;background:#fffffff2;color:#667eea;padding:.75rem 1.25rem;border-radius:8px;font-size:.95rem;font-weight:600;text-decoration:none;transition:all .3s ease;box-shadow:0 4px 6px #0000001a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.back-btn[_ngcontent-%COMP%]:hover{background:#fff;transform:translate(-4px);box-shadow:0 6px 12px #00000026;color:#764ba2}.back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;transition:transform .3s ease}.back-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{transform:translate(-2px)}.controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;max-width:1200px;margin-bottom:2rem;gap:1rem}.control-btn[_ngcontent-%COMP%]{background:#fff;border:none;padding:.75rem 1.5rem;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 6px #0000001a}.control-btn[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 12px #00000026}.control-btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.slide-counter[_ngcontent-%COMP%]{background:#fff;padding:.75rem 1.5rem;border-radius:8px;font-weight:600;color:#667eea;box-shadow:0 4px 6px #0000001a}.slide-wrapper[_ngcontent-%COMP%]{width:100%;max-width:1200px;min-height:600px;position:relative}.slide[_ngcontent-%COMP%]{display:none;width:100%;background:#fff;border-radius:16px;padding:3rem;box-shadow:0 20px 60px #0000004d;animation:_ngcontent-%COMP%_slideIn .5s ease}.slide.active[_ngcontent-%COMP%]{display:block}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translate(50px)}to{opacity:1;transform:translate(0)}}.slide-title[_ngcontent-%COMP%]{text-align:center}.workshop-badge[_ngcontent-%COMP%]{display:inline-block;background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;padding:.5rem 1.5rem;border-radius:50px;font-weight:700;font-size:.9rem;letter-spacing:1px;margin-bottom:2rem}.slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;color:#2d3748;margin-bottom:1rem}.subtitle[_ngcontent-%COMP%]{font-size:1.5rem;color:#718096;margin-bottom:3rem}.info-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;margin-top:3rem}.info-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.5rem;padding:1.5rem;background:#f7fafc;border-radius:12px;border-left:4px solid #667eea}.info-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem}.info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:.875rem;color:#718096;font-weight:600}.info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:1.125rem;color:#2d3748;font-weight:700}.slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;color:#2d3748;margin-bottom:1.5rem;border-bottom:3px solid #667eea;padding-bottom:.5rem}.slide-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.125rem;color:#718096;margin-bottom:2rem;text-align:center}.theory-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;margin-bottom:2rem}.theory-card[_ngcontent-%COMP%]{padding:2rem;border-radius:12px;border-left:6px solid;box-shadow:0 4px 6px #0000001a}.theory-card.green[_ngcontent-%COMP%]{background:#f0fdf4;border-color:#22c55e}.theory-card.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#3b82f6}.theory-card.orange[_ngcontent-%COMP%]{background:#fff7ed;border-color:#f97316}.theory-icon[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:1rem}.theory-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;color:#2d3748;margin-bottom:.75rem}.theory-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;position:relative;padding:.5rem 0 .5rem 1.5rem}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.warning-box[_ngcontent-%COMP%]{background:#fef3c7;border-left:4px solid #f59e0b;padding:1rem 1.5rem;border-radius:8px;margin-top:2rem}.examples-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.example-card[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;transition:all .3s ease}.example-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.example-header[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;cursor:pointer;display:flex;align-items:center;gap:1rem;transition:background .3s ease}.example-header[_ngcontent-%COMP%]:hover{background:#edf2f7}.accordion-icon[_ngcontent-%COMP%]{color:#667eea;font-weight:700;font-size:1.25rem}.example-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2d3748;font-size:1.25rem}.example-content[_ngcontent-%COMP%]{padding:2rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}@keyframes _ngcontent-%COMP%_expandDown{0%{opacity:0;max-height:0}to{opacity:1;max-height:2000px}}.hu-box[_ngcontent-%COMP%]{background:#f0f9ff;border-left:4px solid #0ea5e9;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.hu-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0369a1;margin-bottom:.75rem}.hu-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#0c4a6e}.bad-prompt[_ngcontent-%COMP%]{background:#fef2f2;border-left:4px solid #ef4444;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.bad-prompt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#dc2626;margin-bottom:1rem}.good-prompt[_ngcontent-%COMP%]{background:#f0fdf4;border-left:4px solid #22c55e;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.good-prompt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#16a34a;margin-bottom:1rem}.prompt-text[_ngcontent-%COMP%]{background:#fff;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.9rem;color:#000;white-space:pre-wrap;margin-bottom:1rem}.problems-list[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]{margin-top:1rem}.problems-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;color:#2d3748}.problems-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.problems-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#7f1d1d}.problems-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2717";position:absolute;left:0;color:#ef4444;font-weight:700}.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#14532d}.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.output-preview[_ngcontent-%COMP%]{background:#faf5ff;border-left:4px solid #a855f7;padding:1.5rem;border-radius:8px}.output-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#7e22ce;margin-bottom:1rem}.output-list[_ngcontent-%COMP%]{list-style:none;padding:0}.output-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;font-size:.9rem;padding:.5rem 0 .5rem 1.5rem;position:relative}.output-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#a855f7}.process-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.process-step[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.process-step[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.step-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1.5rem;display:flex;align-items:center;gap:1rem}.step-number[_ngcontent-%COMP%]{background:#fff;color:#667eea;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.25rem;flex-shrink:0}.step-title-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex:1}.step-title-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.125rem}.step-content[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.step-description[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.step-example[_ngcontent-%COMP%]{background:#f0f9ff;padding:1rem;border-radius:8px;margin-bottom:1rem;border-left:3px solid #0ea5e9}.step-tips[_ngcontent-%COMP%]{background:#fef3c7;padding:1rem;border-radius:8px;border-left:3px solid #f59e0b}.step-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin-top:.5rem}.step-tips[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;color:#78350f}.template-container[_ngcontent-%COMP%]{background:#1e293b;border-radius:12px;overflow:hidden}.template-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1.5rem;display:flex;align-items:center;gap:1rem}.template-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem}.template-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex:1;margin:0}.copy-btn[_ngcontent-%COMP%]{background:#fff;color:#667eea;border:none;padding:.5rem 1rem;border-radius:6px;font-weight:600;cursor:pointer;transition:all .3s ease}.copy-btn[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 4px 8px #0003}.template-code[_ngcontent-%COMP%]{background:#1e293b;color:#e2e8f0;padding:2rem;margin:0;font-family:Courier New,monospace;font-size:.9rem;line-height:1.6;white-space:pre-wrap;overflow-x:auto}.template-instructions[_ngcontent-%COMP%]{background:#fff;padding:2rem}.template-instructions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:1rem}.template-instructions[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{color:#4a5568;line-height:1.8}.template-instructions[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f7fafc;padding:.2rem .5rem;border-radius:4px;color:#667eea;font-family:Courier New,monospace}.challenges-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem}.challenge-card[_ngcontent-%COMP%]{border:3px solid;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.challenge-card.green[_ngcontent-%COMP%]{border-color:#22c55e}.challenge-card.blue[_ngcontent-%COMP%]{border-color:#3b82f6}.challenge-card.orange[_ngcontent-%COMP%]{border-color:#f97316}.challenge-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 24px #00000026}.challenge-header[_ngcontent-%COMP%]{padding:1.5rem;background:#f7fafc}.difficulty-badge[_ngcontent-%COMP%]{display:inline-block;padding:.25rem .75rem;border-radius:50px;font-size:.75rem;font-weight:700;text-transform:uppercase;margin-bottom:.75rem}.difficulty-badge.F\\e1 cil[_ngcontent-%COMP%]{background:#dcfce7;color:#166534}.difficulty-badge.Intermedio[_ngcontent-%COMP%]{background:#dbeafe;color:#1e40af}.difficulty-badge.Avanzado[_ngcontent-%COMP%]{background:#fed7aa;color:#9a3412}.challenge-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2d3748;font-size:1.125rem;display:flex;align-items:center;gap:.5rem}.challenge-content[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.hu-section[_ngcontent-%COMP%], .context-section[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.hu-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .context-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:.75rem}.hu-text[_ngcontent-%COMP%]{background:#f0f9ff;padding:1rem;border-radius:8px;border-left:3px solid #0ea5e9;font-style:italic;color:#0369a1}.context-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.context-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#4a5568}.context-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#667eea;font-weight:700}.requirements-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.hints-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\1f4a1";position:absolute;left:0}.action-section[_ngcontent-%COMP%]{text-align:center;padding-top:1rem;border-top:2px dashed #e2e8f0}.start-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;padding:1rem 2rem;border-radius:8px;font-size:1rem;font-weight:700;cursor:pointer;transition:all .3s ease;margin-bottom:.5rem}.start-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 16px #667eea66}.timer-note[_ngcontent-%COMP%]{color:#718096;font-size:.875rem}.tips-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}.tip-card[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;border-radius:12px;border-left:4px solid #667eea;transition:all .3s ease}.tip-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 16px #0000001a}.tip-icon[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:1rem}.tip-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:.75rem;font-size:1.125rem}.tip-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.tip-example[_ngcontent-%COMP%]{background:#fff;padding:.75rem;border-radius:6px;border:1px solid #e2e8f0}.tip-example[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#667eea;font-family:Courier New,monospace;font-size:.875rem}.deliverables-section[_ngcontent-%COMP%], .next-steps-section[_ngcontent-%COMP%]{margin-bottom:3rem}.deliverables-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .next-steps-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;font-size:1.75rem;margin-bottom:1.5rem;border-left:5px solid #667eea;padding-left:1rem}.deliverables-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-bottom:2rem}.deliverable-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);padding:1.5rem;border-radius:12px;border-left:5px solid #0ea5e9}.deliverable-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0369a1;margin-bottom:.75rem}.deliverable-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#075985;margin-bottom:1rem}.checkpoints[_ngcontent-%COMP%]{list-style:none;padding:0}.checkpoints[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;color:#0c4a6e;display:flex;align-items:flex-start;gap:.5rem}.checkbox[_ngcontent-%COMP%]{color:#0ea5e9;font-size:1.25rem}.next-steps-list[_ngcontent-%COMP%]{background:#fef3c7;padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;color:#78350f;line-height:1.8}.closing-box[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fef3c7,#fde68a);padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;margin-bottom:2rem}.closing-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#78350f;margin-bottom:1rem}.closing-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#92400e;margin-bottom:.75rem}.closing-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#92400e;margin-bottom:1rem}.quote[_ngcontent-%COMP%]{font-style:italic;font-weight:600;text-align:center;padding:1rem;background:#fff;border-radius:8px;margin-top:1rem}.preview-next[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0fdf4,#dcfce7);padding:1.5rem;border-radius:12px;border-left:5px solid #22c55e;color:#166534;font-weight:600;text-align:center}.progress-dots[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.75rem;margin-top:2rem}.progress-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;background:#ffffff80;cursor:pointer;transition:all .3s ease}.progress-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover, .slide-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{background:#fffc;transform:scale(1.2)}.progress-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%]{background:#fff;width:32px;border-radius:6px}@media (max-width: 768px){.presentation-container[_ngcontent-%COMP%]{padding:1rem}.slide[_ngcontent-%COMP%]{padding:1.5rem}.slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.subtitle[_ngcontent-%COMP%]{font-size:1.125rem}.info-grid[_ngcontent-%COMP%], .theory-grid[_ngcontent-%COMP%], .challenges-grid[_ngcontent-%COMP%], .tips-grid[_ngcontent-%COMP%], .deliverables-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.control-btn[_ngcontent-%COMP%], .slide-counter[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.875rem}}.formats-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.format-card[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.format-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.format-header[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;display:flex;align-items:center;gap:1rem;transition:background .3s ease}.format-header[_ngcontent-%COMP%]:hover{background:#edf2f7}.format-icon[_ngcontent-%COMP%]{font-size:2rem}.format-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex:1;margin:0;color:#2d3748;font-size:1.25rem}.format-content[_ngcontent-%COMP%]{padding:2rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.format-description[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.use-case-box[_ngcontent-%COMP%]{background:#f0f9ff;border-left:3px solid #0ea5e9;padding:1rem;border-radius:8px;margin-bottom:1rem;color:#0369a1}.format-example[_ngcontent-%COMP%]{background:#1e293b;padding:1.5rem;border-radius:8px}.format-example[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#e2e8f0;margin-bottom:.75rem}.format-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#e2e8f0;margin:0;font-family:Courier New,monospace;font-size:.875rem;line-height:1.6;white-space:pre-wrap}.requirement-box[_ngcontent-%COMP%]{background:#fef3c7;border-left:4px solid #f59e0b;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.requirement-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#92400e;margin-bottom:.75rem}.requirement-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#78350f;line-height:1.6}.requirement-text[_ngcontent-%COMP%]{background:#fef3c7;padding:1rem;border-radius:8px;border-left:3px solid #f59e0b;font-style:italic;color:#92400e}.requirement-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.sample-output[_ngcontent-%COMP%]{background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.85rem;line-height:1.5;white-space:pre-wrap;overflow-x:auto}.testcase-box[_ngcontent-%COMP%]{background:#1e293b;border-left:4px solid #3b82f6;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.testcase-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#93c5fd;font-size:1.25rem;font-weight:700;margin-bottom:1rem}.testcase-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.testcase-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d1d5db;font-weight:600}.testcase-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{color:#fff;font-weight:400;margin-left:.5rem}.testcase-text[_ngcontent-%COMP%]{background:#fff;color:#1e293b;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.875rem;line-height:1.6;white-space:pre-wrap;margin:0}.testcases-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.testcases-list[_ngcontent-%COMP%]{background:#f0f9ff;padding:1.5rem 1.5rem 1.5rem 2.5rem;border-radius:8px;border-left:3px solid #0ea5e9;color:#0c4a6e;line-height:1.8}.testcases-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem}.pros-cons-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1rem}.pros-box[_ngcontent-%COMP%]{background:#f0fdf4;border-left:4px solid #22c55e;padding:1.5rem;border-radius:8px}.pros-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#166534;margin-bottom:.75rem}.pros-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.pros-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#14532d}.pros-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.cons-box[_ngcontent-%COMP%]{background:#fef2f2;border-left:4px solid #ef4444;padding:1.5rem;border-radius:8px}.cons-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#991b1b;margin-bottom:.75rem}.cons-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.cons-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#7f1d1d}.cons-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\26a0";position:absolute;left:0;color:#ef4444;font-weight:700}@media (max-width: 768px){.pros-cons-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.final-message[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fef3c7,#fde68a);padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;margin-top:2rem;text-align:center}.final-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#78350f;font-size:2rem;margin-bottom:1rem}.final-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1f2937;font-size:1.1rem;margin-bottom:.75rem;line-height:1.6}.final-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#78350f;font-weight:700}',".slide-intro[_ngcontent-%COMP%]{color:#4b5563;font-size:1.05rem;margin-bottom:1.5rem;line-height:1.7;max-width:860px}.agenda-preview[_ngcontent-%COMP%]{margin-top:2rem;background:#667eea12;border:1px solid rgba(102,126,234,.2);border-radius:12px;padding:1.25rem 1.5rem;max-width:820px;width:100%}.agenda-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;font-size:1rem;font-weight:700;margin-bottom:.75rem}.agenda-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.5rem 1rem}.agenda-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#4b5563;font-size:.875rem;display:flex;align-items:center;gap:.35rem}.code-tabs[_ngcontent-%COMP%]{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:.5rem}.tab-btn[_ngcontent-%COMP%]{padding:.45rem 1rem;border-radius:8px 8px 0 0;font-size:.82rem;font-weight:600;background:#f1f5f9;color:#6b7280;border:1px solid #e2e8f0;border-bottom:none;transition:all .2s;cursor:pointer}.tab-btn[_ngcontent-%COMP%]:hover{background:#e2e8f0;color:#374151}.tab-btn.active[_ngcontent-%COMP%]{background:#1e1e2e;color:#e2e8f0;border-color:#1e1e2e}.code-block-wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;border-radius:0 10px 10px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 16px #00000014}.code-block-header[_ngcontent-%COMP%]{background:#2d2d3d;color:#a0aec0;font-size:.8rem;font-weight:600;padding:.5rem 1rem;border-bottom:1px solid rgba(255,255,255,.1)}.code-block[_ngcontent-%COMP%]{background:#1e1e2e;color:#e2e8f0;padding:1.25rem 1.5rem;font-size:.82rem;line-height:1.7;overflow-x:auto;margin:0;white-space:pre;font-family:Fira Code,Cascadia Code,Consolas,monospace;max-height:340px;overflow-y:auto}.code-block.bash[_ngcontent-%COMP%], .code-block.shell[_ngcontent-%COMP%]{color:#a8ff78}.output-block[_ngcontent-%COMP%]{background:#0d1117;border-top:1px solid rgba(255,255,255,.08);padding:.75rem 1.5rem}.output-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#4ade80;font-family:Fira Code,monospace;font-size:.8rem;margin:.25rem 0 0;white-space:pre-wrap}.output-label[_ngcontent-%COMP%]{font-size:.72rem;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em}.inline-code[_ngcontent-%COMP%]{background:#fef9c3;color:#b45309;padding:.15rem .4rem;border-radius:4px;font-family:monospace;font-size:.85em;border:1px solid #fde68a}.comparison-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:.75rem;margin-top:1rem}.mini-card[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-left:3px solid #667eea;border-radius:10px;padding:.75rem 1rem}.mini-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e293b;font-size:.9rem;display:block;margin-bottom:.3rem}.mini-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#64748b;font-size:.8rem;line-height:1.5;margin:0}.concepts-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.75rem;margin-top:1rem}.concept-card[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:1rem;display:flex;flex-direction:column;gap:.3rem}.concept-icon[_ngcontent-%COMP%]{font-size:1.5rem}.concept-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e293b;font-size:.9rem}.concept-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#64748b;font-size:.8rem;margin:0}.concept-card[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:monospace;color:#b45309;font-size:.78rem;background:#fef3c7;padding:.1rem .3rem;border-radius:3px}.info-box[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:1.25rem 1.5rem;margin-top:1.25rem}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:.95rem;font-weight:700;margin-bottom:1rem}.workflow-steps[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:.5rem}.workflow-step[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.5rem;background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:.6rem .8rem;flex:1;min-width:140px;box-shadow:0 1px 3px #0000000f}.step-num[_ngcontent-%COMP%]{background:#f59e0b;color:#fff;font-weight:900;font-size:.75rem;width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.workflow-step[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e293b;font-size:.82rem;display:block}.workflow-step[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#16a34a;font-family:monospace;font-size:.72rem;display:block;margin-top:.15rem;background:#f0fdf4;padding:.1rem .25rem;border-radius:3px}.workflow-arrow[_ngcontent-%COMP%]{color:#9ca3af;font-size:1.2rem;font-weight:700;flex-shrink:0}.challenge-slide[_ngcontent-%COMP%]{padding-bottom:1rem}.challenge-tabs[_ngcontent-%COMP%]{display:flex;gap:.5rem;margin-bottom:1rem;flex-wrap:wrap}.challenge-tab-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;padding:.5rem 1rem;color:#374151;font-size:.85rem;font-weight:600;cursor:pointer;transition:all .2s}.challenge-tab-btn[_ngcontent-%COMP%]:hover, .challenge-tab-btn.active[_ngcontent-%COMP%]{background:#e2e8f0;border-color:#cbd5e1;color:#1e293b}.challenge-card[_ngcontent-%COMP%]{background:#f8fafc;border-left:4px solid;border-radius:12px;padding:1.25rem 1.5rem}.challenge-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem}.challenge-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:1.1rem;font-weight:700;margin:0}.challenge-description[_ngcontent-%COMP%]{color:#374151;font-size:.9rem;line-height:1.65;margin-bottom:.75rem}.hints-box[_ngcontent-%COMP%]{background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:.75rem 1rem}.hints-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#92400e;font-size:.85rem}.hints-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.35rem 0 0 1rem;padding:0}.hints-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#374151;font-size:.82rem;line-height:1.8}.summary-slide[_ngcontent-%COMP%]{gap:1rem}.summary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:.75rem;margin:1rem 0;width:100%}.summary-item[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.75rem;background:#f8fafc;border:1px solid #e2e8f0;border-left:3px solid #667eea;border-radius:10px;padding:.9rem 1rem}.summary-icon[_ngcontent-%COMP%]{font-size:1.5rem;flex-shrink:0}.summary-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e293b;font-size:.9rem;display:block;margin-bottom:.2rem}.summary-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#64748b;font-size:.8rem;line-height:1.5;margin:0}.next-station-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #fde68a;border-radius:14px;padding:1.25rem 1.5rem;width:100%;margin-top:.5rem}.next-station-label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;color:#b45309;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem}.next-station-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:1.25rem;font-weight:800;margin:0 0 .4rem}.next-station-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#374151;font-size:.88rem;line-height:1.6;margin-bottom:.75rem}.next-station-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.4rem;background:#f59e0b;color:#fff;font-size:.85rem;font-weight:700;padding:.5rem 1.1rem;border-radius:8px;text-decoration:none;transition:all .2s}.next-station-btn[_ngcontent-%COMP%]:hover{background:#d97706;transform:translate(2px)}.resource-link[_ngcontent-%COMP%]{color:#2563eb;text-decoration:underline}.resource-link[_ngcontent-%COMP%]:hover{color:#1d4ed8}.mt-3[_ngcontent-%COMP%]{margin-top:.75rem}.mt-4[_ngcontent-%COMP%]{margin-top:1rem}.mt-6[_ngcontent-%COMP%]{margin-top:1.5rem}"]})};export{L as L1CalculusComponent};
