---
title: "温室效应与强恒星风：Greenhouse Effect & Strong Stellar Winds 习题详解"
description: "完整解答温室效应与 Wolf–Rayet 强恒星风习题：灰大气光学深度、自由–自由辐射、质量损失率标度、结块修正、有效发光半径与谱线轮廓。"
date: "2026-10-14"
tags: ["AST1440","Greenhouse effect","Grey atmosphere","Wolf-Rayet stars","Free-free radiation","Problem set"]
order: 10
draft: false
---

# 温室效应与强恒星风：Greenhouse Effect & Strong Stellar Winds 习题详解

## 一、本题用到的知识点总览

### 1. 温室效应与灰大气

- 辐射平衡：平衡时，一个系统吸收的总功率等于向外辐射的总功率。
- 反照率 $A$：入射辐射中被反射的比例，因此吸收比例是 $1-A$。
- Stefan-Boltzmann 定律：
  $$
  F=\sigma T^4.
  $$
- 行星吸收太阳辐射时，用截面积 $\pi R^2$；向外热辐射时，用总表面积 $4\pi R^2$。
- 单层温室模型：大气对地面红外不透明，向上和向下各辐射一份能量。
- 灰大气：把不透明度近似为与频率无关，即 $\kappa_\nu\simeq \kappa$，于是可以用一个红外光学深度 $\tau$ 描述大气。
- 双流近似：把复杂角分布的辐射场简化成向上和向下两个辐射流。
- Wien 定律直觉：温度升高时，热辐射峰值向短波长移动，
  $$
  \lambda_{\rm peak}\propto \frac{1}{T}.
  $$
- 模型外推边界：当温度过高时，固定灰不透明度、固定成分、纯辐射平衡等近似可能失效。

### 2. Wolf-Rayet 星风与自由-自由辐射

- 稳态球对称恒星风的质量守恒：
  $$
  \rho(r)=\frac{\dot M}{4\pi r^2 v_w}.
  $$
- 固定组成与电离状态下：
  $$
  n_e\propto \rho,\qquad n_i\propto \rho.
  $$
- 自由-自由吸收在 $h\nu/kT\ll1$ 时：
  $$
  \alpha_\nu^{\rm ff}\propto n_e n_i T^{-3/2}\nu^{-2}.
  $$
- 因为 $n_e n_i\propto \rho^2$，所以恒星风中
  $$
  \alpha_\nu\propto r^{-4}.
  $$
- 光学深度：
  $$
  \tau_\nu=\int \alpha_\nu\,ds.
  $$
- 热发射源函数：
  $$
  S_\nu=B_\nu(T).
  $$
- Rayleigh-Jeans 近似：
  $$
  B_\nu(T)\propto \nu^2T.
  $$
- 比强度、通量关系：远处未分辨源可写成
  $$
  F_\nu=\int I_\nu\,d\Omega
  =\frac{2\pi}{d^2}\int_0^\infty I_\nu(p)\,p\,dp.
  $$
- 辐射转移解，在无背景入射且源函数为常数时：
  $$
  I_\nu=B_\nu(1-e^{-\tau}).
  $$
- 结块风的关键平均：
  $$
  \langle \rho^2\rangle>\langle\rho\rangle^2.
  $$
- 谱线形成中，窄线型函数可以近似为 delta function，用 Doppler 条件选择等速度面。

## 二、题目完整引用（中文翻译）

### 1. 温室效应和全球变暖

我们这个时代的一个重大担忧是全球变暖。这里，我们对温室效应做非常简化的估算，以获得数量级感觉。平均来说，地球应该向外发出与它从太阳接收到的一样多的通量；但实际地表温度比这个估计更高，因为大气对到达地球的、主要是光学波段的太阳光是光学薄的，至少未被冰和云反射的部分如此；但大气对地球向太空发出的、主要是红外波段的辐射是光学厚的。

1. 证明在没有大气的情况下，地球的平衡温度是
   $$
   T_p\simeq255\,{\rm K}.
   $$
   这和地球实际平均表面温度相比如何？

2. 作为一个非常粗糙的近似，把大气想象成一个单层不透明层，其温度均匀；它从温度为 $T_g$ 的地面接收热量，并且向地面辐射的能量与向太空辐射的能量一样多。求 $T_g$。

3. 现在把大气视为灰大气。使用双流近似，可以得到
   $$
   T^4=T_p^4\left[1+\frac{3}{4}\left(\tau-\frac{2}{3}\right)\right].
   $$
   这里不需要推导这个式子，只要能大致理解它即可。

   - 地球上的 $\tau$ 是多少？
   - 金星上的 $\tau$ 会是多少？
   - 能不能让地面温度任意高？如果不能，哪个假设会失效？
   - 已知地球表面温度自工业化前以来已经升高约 $1.5^\circ{\rm C}$，$\mathrm{CO_2}$ 能不能是主要的不透明度来源？如果不能，主要来源会是什么？

### 2. Wolf-Rayet 星风

在热恒星风中，自由-自由吸收是连续谱中的主要不透明度来源。它的依赖关系在 RL 5.3 中讨论。对于这个 problem set，我们使用 Wolf-Rayet 星很热、大约 $20000\,{\rm K}$ 这一事实；而我们处理的是几微米处的近红外辐射，因此
$$
h\nu/kT\ll1.
$$

1. 证明：对于一个质量损失率为 $\dot M$、风速 $v_w$ 为常数的恒星风，从某个半径向外到无穷远的径向光学深度达到 1 的半径满足
   $$
   R_1\propto \nu^{-2/3}\left(\frac{\dot M}{v_w}\right)^{2/3}T^{-1/2}.
   $$

2. 地球上接收到的通量 $F_\nu$ 如何标度？原则上，正如 Wright & Barlow 1975 指出的，如果常数已知，人们可以从 $F_\nu$、距离和风速估计 $\dot M$。你会如何估计风速？你是否能得到不需要担心 $T$ 的结论？如果恒星风是结块的，也就是平均密度附近有显著密度起伏，那么这样的 $\dot M$ 估计会是高估、仍然正确，还是低估？

3. 通过积分辐射转移方程来计算 $F_\nu$，继续假设是热发射。最方便的是使用 $R_1$ 作为单位；忽略恒星本身的遮挡，也就是假设
   $$
   R_1\gg R_{\rm WR}.
   $$
   可使用积分
   $$
   \int_0^\infty y\left(1-\exp(-1/y^3)\right)dy
   =
   -\frac{1}{3}\Gamma\left(-\frac{2}{3}\right)
   =
   \frac{1}{2}\Gamma\left(\frac{1}{3}\right)
   \simeq1.34.
   $$
   定义有效半径 $R_{\rm eff}$，使得
   $$
   \left(\frac{R_{\rm eff}}{d}\right)^2\pi B_\nu=F_\nu.
   $$
   求 $R_{\rm eff}$ 用 $R_1$ 表示是多少？这对应什么 $\tau$？

4. Hillier 等人在 1983 年发现，可以利用如下事实计算谱线轮廓：谱线吸收系数和自由-自由吸收一样，按 $n^2$ 标度。这是复合过程所预期的，因为它依赖电子密度和离子密度的乘积，正如自由-自由发射一样。再次积分辐射转移方程，写
   $$
   \alpha_{\rm line}(\nu)=\alpha_0(n)\phi(\nu-\nu_0),
   $$
   并使用 $\phi(\Delta\nu)$ 的宽度远小于 $v_w/c$ 这一事实。求观测到的谱线轮廓。它是否介于课堂上讨论的完全光学薄和完全光学厚情况之间？它是否依赖谱线相对强度？为具体起见，把相对强度定义为
   $$
   \tau_{\rm line}(v=0)/\tau_{\rm cont}.
   $$

## 三、解答

### 1.1 无大气地球平衡温度

地球吸收的太阳功率为
$$
P_{\rm abs}=(1-A)F_\odot\pi R_\oplus^2.
$$

无大气时，地球近似作为黑体向整个表面辐射：
$$
P_{\rm emit}=4\pi R_\oplus^2\sigma T_p^4.
$$

辐射平衡要求
$$
(1-A)F_\odot\pi R_\oplus^2=4\pi R_\oplus^2\sigma T_p^4.
$$

因此
$$
T_p=\left[\frac{(1-A)F_\odot}{4\sigma}\right]^{1/4}.
$$

取
$$
A\simeq0.30,\qquad F_\odot\simeq1361\,{\rm W\,m^{-2}},
$$
得到
$$
T_p\simeq255\,{\rm K}.
$$

地球实际平均表面温度约
$$
T_{\rm surf}\simeq288\,{\rm K},
$$
比无大气平衡温度高约
$$
288-255\simeq33\,{\rm K}.
$$

这就是简化意义下的温室增温。

### 1.2 单层不透明大气

设大气层温度为 $T_a$，地面温度为 $T_g$。整个地球-大气系统向太空辐射的通量仍需等于吸收的太阳通量：
$$
\sigma T_a^4=\sigma T_p^4.
$$

单层大气向上和向下各辐射同样能量，所以大气总辐射为
$$
2\sigma T_a^4.
$$

大气从地面吸收
$$
\sigma T_g^4.
$$

大气能量平衡给出
$$
\sigma T_g^4=2\sigma T_a^4.
$$

又因为 $T_a=T_p$，所以
$$
T_g^4=2T_p^4,
$$
即
$$
T_g=2^{1/4}T_p.
$$

取 $T_p\simeq255\,{\rm K}$，得到
$$
T_g\simeq303\,{\rm K}.
$$

### 1.3 灰大气

题目给定
$$
T^4=T_p^4\left[1+\frac{3}{4}\left(\tau-\frac{2}{3}\right)\right].
$$

可整理为
$$
\left(\frac{T}{T_p}\right)^4
=
\frac{1}{2}+\frac{3}{4}\tau.
$$

因此
$$
\tau=
\frac{4}{3}\left[\left(\frac{T}{T_p}\right)^4-\frac{1}{2}\right].
$$

#### 地球的 $\tau$

取
$$
T_{\oplus}\simeq288\,{\rm K},\qquad T_p\simeq255\,{\rm K},
$$
得到
$$
\tau_\oplus
=
\frac{4}{3}\left[\left(\frac{288}{255}\right)^4-\frac{1}{2}\right]
\simeq1.5.
$$

所以地球在这个灰大气模型中的有效红外光学深度约为
$$
\tau_\oplus\simeq1.5.
$$

#### 金星的 $\tau$

金星的无大气有效温度由吸收太阳辐射决定：
$$
T_{p,V}
=
\left[
\frac{(1-A_V)F_{\odot,V}}{4\sigma}
\right]^{1/4}.
$$

用
$$
F_{\odot,V}=F_{\odot,\oplus}\left(\frac{1\,{\rm AU}}{0.723\,{\rm AU}}\right)^2,
$$
并取
$$
A_V\simeq0.75,
$$
得到
$$
T_{p,V}\simeq232\,{\rm K}.
$$

金星表面温度取
$$
T_{V,\rm surf}\simeq735\,{\rm K}.
$$

于是
$$
\tau_V
=
\frac{4}{3}\left[\left(\frac{735}{231.6}\right)^4-\frac{1}{2}\right]
\simeq1.35\times10^2.
$$

即
$$
\tau_V\simeq135.
$$

这说明在这个简化模型中，金星大气对红外辐射极端光学厚。

#### 能否让地面温度任意高？

从公式本身看，若令 $\tau\to\infty$，则
$$
T^4\propto\tau,
$$
似乎可以让地面温度无限升高。

但这只是数学外推。真实物理中，温度升高后，热辐射峰值波长会根据 Wien 定律向短波长移动：
$$
\lambda_{\rm peak}\propto\frac{1}{T}.
$$

此时大气对不同波长的吸收不再能用同一个灰不透明度描述。也就是说，灰大气、固定有效光学深度、固定不透明度等假设会失效。若温度更高，还会出现大气成分变化、分子解离、电离、对流和化学过程等，使这个简化模型不能继续使用。

因此，不能用这个公式物理地把地面温度推到任意高；最直接失效的是灰大气和固定 opacity 的假设。

#### $\mathrm{CO_2}$ 是否是主导不透明度来源？

工业化前温度约为
$$
T_{\rm pre}\simeq286.5\,{\rm K},
$$
现在约为
$$
T_{\rm now}\simeq288\,{\rm K}.
$$

用同一公式反推：
$$
\tau_{\rm pre}
=
\frac{4}{3}\left[\left(\frac{286.5}{255}\right)^4-\frac{1}{2}\right]
\simeq1.46,
$$
而
$$
\tau_{\rm now}\simeq1.50.
$$

因此近代升温 $1.5\,{\rm K}$ 对应的有效光学深度变化只有
$$
\Delta\tau\simeq0.04.
$$

这远小于地球总有效红外光学深度
$$
\tau\sim1.5.
$$

所以 $\mathrm{CO_2}$ 可以是近代增温的重要驱动因素，但不能是地球总红外不透明度的主导来源。主导红外 opacity 的来源更可能是水汽，云也很重要。

### 2.1 $R_1$ 的标度

自由-自由吸收系数在 $h\nu/kT\ll1$ 下满足
$$
\alpha_\nu^{\rm ff}
\propto
n_e n_i T^{-3/2}\nu^{-2}.
$$

固定组成和电离状态下
$$
n_e\propto\rho,\qquad n_i\propto\rho,
$$
所以
$$
\alpha_\nu^{\rm ff}\propto\rho^2T^{-3/2}\nu^{-2}.
$$

稳态球对称常速风满足
$$
\rho(r)=\frac{\dot M}{4\pi r^2v_w}.
$$

因此
$$
\rho^2\propto
\left(\frac{\dot M}{v_w}\right)^2r^{-4}.
$$

于是
$$
\alpha_\nu^{\rm ff}
\propto
\left(\frac{\dot M}{v_w}\right)^2
T^{-3/2}\nu^{-2}r^{-4}.
$$

径向光学深度为
$$
\tau_\nu(r)=\int_r^\infty \alpha_\nu^{\rm ff}(r')\,dr'.
$$

因为
$$
\int_r^\infty r'^{-4}\,dr'\propto r^{-3},
$$
所以
$$
\tau_\nu(r)\propto
\left(\frac{\dot M}{v_w}\right)^2
T^{-3/2}\nu^{-2}r^{-3}.
$$

$R_1$ 定义为 $\tau_\nu(R_1)=1$，因此
$$
1\propto
\left(\frac{\dot M}{v_w}\right)^2
T^{-3/2}\nu^{-2}R_1^{-3}.
$$

解出
$$
R_1^3
\propto
\left(\frac{\dot M}{v_w}\right)^2
T^{-3/2}\nu^{-2}.
$$

所以
$$
R_1
\propto
\nu^{-2/3}
\left(\frac{\dot M}{v_w}\right)^{2/3}
T^{-1/2}.
$$

这就是题目要求的结果。

### 2.2 $F_\nu$ 的标度、温度抵消与结块

粗略地说，$R_1$ 是近红外连续谱的有效发光半径。光学厚区域的表面亮度约为
$$
B_\nu(T).
$$

因此观测通量标度为
$$
F_\nu\propto B_\nu(T)\frac{R_1^2}{d^2}.
$$

在 Rayleigh-Jeans 极限下
$$
B_\nu(T)\propto\nu^2T.
$$

又有
$$
R_1^2
\propto
\nu^{-4/3}
\left(\frac{\dot M}{v_w}\right)^{4/3}
T^{-1}.
$$

所以
$$
F_\nu
\propto
\nu^2T
\cdot
\nu^{-4/3}
\left(\frac{\dot M}{v_w}\right)^{4/3}
T^{-1}
d^{-2}.
$$

整理得
$$
F_\nu
\propto
\nu^{2/3}
\left(\frac{\dot M}{v_w}\right)^{4/3}
d^{-2}.
$$

温度因子 $T$ 抵消掉了。因此原则上，若已知距离 $d$、风速 $v_w$ 和常数，就可以由 $F_\nu$ 估计 $\dot M$。风速通常可以从谱线宽度、终端速度或 P Cygni 轮廓估计。

如果风是结块的，则自由-自由吸收和发射依赖
$$
\rho^2.
$$

在有密度起伏时
$$
\langle\rho^2\rangle>\langle\rho\rangle^2.
$$

因此在相同真实 $\dot M$ 下，结块风会产生比 smooth wind 更强的自由-自由 opacity 和 emission，导致更大的 $R_1$ 和 $F_\nu$。

如果观测到这个增强的 $F_\nu$，却用 smooth wind 模型解释，就会把增强误认为来自更大的平均密度。因此由 smooth 模型推得的质量损失率会高估真实值：
$$
\dot M_{\rm inferred,smooth}>\dot M_{\rm true}.
$$

### 2.3 积分辐射转移方程求 $F_\nu$ 与 $R_{\rm eff}$

由 $R_1$ 的定义可把连续谱吸收系数写成
$$
\alpha_\nu(r)=Cr^{-4}.
$$

径向光深为
$$
1=\int_{R_1}^\infty Cr^{-4}\,dr
=\frac{C}{3R_1^3}.
$$

所以
$$
C=3R_1^3,
$$
即
$$
\alpha_\nu(r)=3R_1^3r^{-4}.
$$

对 impact parameter 为 $p$ 的视线，
$$
r^2=p^2+z^2.
$$

视线光学深度为
$$
\tau(p)=\int_{-\infty}^{+\infty}\alpha_\nu(r)\,dz.
$$

利用对称性，
$$
\tau(p)
=
2\int_p^\infty
\alpha_\nu(r)\frac{r\,dr}{\sqrt{r^2-p^2}}.
$$

代入 $\alpha_\nu(r)=3R_1^3r^{-4}$，得
$$
\tau(p)
=
6R_1^3
\int_p^\infty
\frac{dr}{r^3\sqrt{r^2-p^2}}.
$$

令 $r=p\sec u$，可得
$$
\int_p^\infty
\frac{dr}{r^3\sqrt{r^2-p^2}}
=
\frac{\pi}{4p^3}.
$$

因此
$$
\tau(p)=\frac{3\pi}{2}\left(\frac{R_1}{p}\right)^3.
$$

辐射转移方程给出
$$
I_\nu(p)=B_\nu\left(1-e^{-\tau(p)}\right).
$$

远处观测通量为
$$
F_\nu
=
\frac{2\pi}{d^2}
\int_0^\infty I_\nu(p)\,p\,dp.
$$

代入 $I_\nu(p)$，
$$
F_\nu
=
\frac{2\pi B_\nu}{d^2}
\int_0^\infty
p\left[
1-\exp\left(
-\frac{3\pi}{2}\frac{R_1^3}{p^3}
\right)
\right]dp.
$$

令
$$
y=
\frac{p}{R_1(3\pi/2)^{1/3}},
$$
则
$$
p\,dp
=
R_1^2\left(\frac{3\pi}{2}\right)^{2/3}y\,dy.
$$

于是
$$
F_\nu
=
\frac{2\pi B_\nu R_1^2}{d^2}
\left(\frac{3\pi}{2}\right)^{2/3}
\int_0^\infty y(1-e^{-1/y^3})\,dy.
$$

题目给定
$$
\int_0^\infty y(1-e^{-1/y^3})\,dy\simeq1.34.
$$

所以
$$
F_\nu
=
\frac{2\pi B_\nu R_1^2}{d^2}
\left(\frac{3\pi}{2}\right)^{2/3}
(1.34).
$$

定义
$$
\left(\frac{R_{\rm eff}}{d}\right)^2\pi B_\nu=F_\nu.
$$

因此
$$
R_{\rm eff}^2
=
2(1.34)
\left(\frac{3\pi}{2}\right)^{2/3}
R_1^2.
$$

所以
$$
R_{\rm eff}
=
\left[
2(1.34)
\left(\frac{3\pi}{2}\right)^{2/3}
\right]^{1/2}R_1.
$$

数值为
$$
R_{\rm eff}\simeq2.74R_1.
$$

若这里的 $\tau$ 指 $p=R_{\rm eff}$ 处的视线光学深度，则
$$
\tau_{\rm los}(R_{\rm eff})
=
\frac{3\pi}{2}
\left(\frac{R_1}{R_{\rm eff}}\right)^3
\simeq0.23.
$$

对应的径向光深为
$$
\tau_{\rm rad}(R_{\rm eff})
=
\left(\frac{R_1}{R_{\rm eff}}\right)^3
\simeq0.049.
$$

### 2.4 谱线轮廓

谱线吸收系数写为
$$
\alpha_{\rm line}(\nu)
=
\alpha_0(n)\phi(\nu-\nu_0),
$$
其中
$$
\alpha_0(n)\propto n^2\propto r^{-4}.
$$

由于线型函数很窄，可以把它近似为 delta function。观测速度 $v$ 与视向速度 $v_{\rm los}$ 的匹配条件选择出满足
$$
v=v_{\rm los}
$$
的位置。

常速球对称风中
$$
v_{\rm los}=v_w\frac{z}{r},
\qquad
r^2=p^2+z^2.
$$

写
$$
u=\frac{v}{v_w}.
$$

对一条 impact parameter 为 $p$ 的视线，谱线光深为
$$
\tau_{\rm line}(p,v)
=
\int C_{\rm line}r^{-4}
\delta\left(v-v_w\frac{z}{r}\right)dz.
$$

用
$$
\int g(z)\delta[f(z)]\,dz
=
\sum_i\frac{g(z_i)}{|f'(z_i)|},
$$
其中 $f(z_i)=0$。这里
$$
f(z)=v-v_w\frac{z}{\sqrt{p^2+z^2}}.
$$

根满足
$$
u=\frac{z}{\sqrt{p^2+z^2}},
$$
所以
$$
z_i=\frac{up}{\sqrt{1-u^2}},
\qquad
r_i=\frac{p}{\sqrt{1-u^2}}.
$$

导数为
$$
f'(z)
=
-v_w\frac{p^2}{(p^2+z^2)^{3/2}}
=
-v_w\frac{p^2}{r^3}.
$$

因此
$$
\tau_{\rm line}(p,v)
=
\frac{C_{\rm line}r_i^{-4}}{v_wp^2/r_i^3}
=
\frac{C_{\rm line}}{v_wp^2r_i}.
$$

代入 $r_i$，得到
$$
\tau_{\rm line}(p,v)
\propto
p^{-3}\sqrt{1-\frac{v^2}{v_w^2}},
\qquad |v|<v_w.
$$

在 $|v|\ge v_w$ 时没有对应的风速投影，因此谱线贡献为零。

由于连续谱视线光深也满足
$$
\tau_{\rm cont}(p)\propto p^{-3},
$$
可定义相对线强
$$
\eta
=
\frac{\tau_{\rm line}(v=0)}{\tau_{\rm cont}}.
$$

于是
$$
\tau_{\rm line}(p,v)
=
\eta\,\tau_{\rm cont}(p)
\sqrt{1-\frac{v^2}{v_w^2}},
\qquad |v|<v_w.
$$

总光深为
$$
\tau_{\rm total}(p,v)
=
\tau_{\rm cont}(p)+\tau_{\rm line}(p,v).
$$

所以
$$
\tau_{\rm total}(p,v)
=
\tau_{\rm cont}(p)
\left[
1+\eta\sqrt{1-\frac{v^2}{v_w^2}}
\right].
$$

第三题的积分结构说明：若
$$
\tau(p)\propto A p^{-3},
$$
则
$$
F_\nu\propto A^{2/3}.
$$

因此谱线处的总通量为
$$
F_\nu(v)
=
F_{\rm cont}
\left[
1+\eta\sqrt{1-\frac{v^2}{v_w^2}}
\right]^{2/3},
\qquad |v|<v_w.
$$

在 $|v|\ge v_w$ 时，
$$
F_\nu(v)=F_{\rm cont}.
$$

这里
$$
F_{\rm cont}
=
\frac{2\pi B_\nu R_1^2}{d^2}
\left(\frac{3\pi}{2}\right)^{2/3}
(1.34).
$$

若取 $\eta=1$，则
$$
F_\nu(v)
=
F_{\rm cont}
\left[
1+\sqrt{1-\frac{v^2}{v_w^2}}
\right]^{2/3}.
$$

若只看 continuum-subtracted line profile，
$$
\Delta F_\nu(v)
=
F_{\rm cont}
\left\{
\left[
1+\eta\sqrt{1-\frac{v^2}{v_w^2}}
\right]^{2/3}
-1
\right\}.
$$

这个谱线是发射线：在 $v=0$ 处最高，在 $|v|=v_w$ 处回到连续谱。

弱线极限 $\eta\ll1$ 下，
$$
\Delta F_\nu(v)
\simeq
\frac{2}{3}\eta F_{\rm cont}
\sqrt{1-\frac{v^2}{v_w^2}}.
$$

强线极限 $\eta\gg1$ 下，线轮廓近似满足
$$
F_\nu(v)\propto
\left(1-\frac{v^2}{v_w^2}\right)^{1/3}.
$$

因此它确实介于完全光学薄和完全光学厚情形之间，并且一般依赖谱线相对强度 $\eta$。

