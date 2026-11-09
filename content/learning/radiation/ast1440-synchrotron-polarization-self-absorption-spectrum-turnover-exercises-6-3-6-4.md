---
title: "AST1440 同步辐射偏振、自吸收与谱转折：RL §6.5–§6.8 及习题 6.3、6.4 详解"
description: "系统讲解同步辐射的线偏振、从回旋线到连续谱的过渡、发射与接收时间差、Einstein 系数和同步自吸收，并完整解答习题 6.3 与 6.4。"
date: "2026-11-09"
tags: ["AST1440","Synchrotron polarization","Self-absorption","Spectral turnover","Einstein coefficients","Exercises"]
order: 16
draft: false
---

# AST1440 同步辐射偏振、自吸收与谱转折：RL §6.5–§6.8 及习题 6.3、6.4 详解

> 课程：AST1440 — Radiation。  
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§6.4 为阅读背景，重点为 §6.5–§6.8；Problems 6.3、6.4。  
> 补充材料：AstroBaki，*Synchrotron Self-Interactions* 的 Synchrotron Self-Absorption 部分。  
> 整理日期：2026 年 11 月 9 日。  
> 网站版说明：为控制文件大小，本文不嵌入教材扫描图。正文会注明 RL 图号，并用文字描述图中信息；阅读时可对照 RL Figs. 6.7–6.14。

## 目录

1. [本次预习的主线](#1-本次预习的主线)
2. [符号、定义与适用条件](#2-符号定义与适用条件)
3. [§6.5 同步辐射的线偏振](#3-65-同步辐射的线偏振)
4. [幂律电子群偏振度的推导](#4-幂律电子群偏振度的推导)
5. [§6.6 从 cyclotron line 到 synchrotron continuum](#5-66-从-cyclotron-line-到-synchrotron-continuum)
6. [时间脉冲、谐波与连续谱](#6-时间脉冲谐波与连续谱)
7. [§6.7 发射功率与接收功率](#7-67-发射功率与接收功率)
8. [Problem 6.3 完整解答](#8-problem-63-完整解答)
9. [Einstein coefficients 复习](#9-einstein-coefficients-复习)
10. [§6.8 Synchrotron Self-Absorption](#10-68-synchrotron-self-absorption)
11. [同步自吸收系数的完整推导](#11-同步自吸收系数的完整推导)
12. [幂律电子分布下的 $j_\nu$、$\alpha_\nu$ 与 $S_\nu$](#12-幂律电子分布下的-j_nualpha_nu-与-s_nu)
13. [为什么低频光学厚、高频光学薄](#13-为什么低频光学厚高频光学薄)
14. [为什么光学厚谱是 $\nu^{5/2}$ 而不是 $\nu^2$](#14-为什么光学厚谱是-nu52-而不是-nu2)
15. [幂律假设 $N(E)=CE^{-p}$ 的条件](#15-幂律假设-nece-p-的条件)
16. [Problem 6.4 题意与读图](#16-problem-64-题意与读图)
17. [Problem 6.4 完整解答](#17-problem-64-完整解答)
18. [English assignment-ready solutions](#18-english-assignment-ready-solutions)
19. [常见混淆、量纲与极限检查](#19-常见混淆量纲与极限检查)
20. [核心公式与复习清单](#20-核心公式与复习清单)
21. [参考资料](#21-参考资料)

---

## 1. 本次预习的主线

前一部分已经从单电子轨道和相对论聚束得到临界频率，并由电子幂律分布得到 optically thin synchrotron spectrum。本次内容继续追问四件事：

1. 同步辐射为什么具有很高的线偏振？
2. 非相对论 cyclotron line 如何过渡到 synchrotron continuum？
3. 电子发射脉冲的时间间隔与观察者接收到脉冲的时间间隔为什么不同？
4. 同一群电子为什么既能发射同步辐射，又能吸收同步辐射？

整个逻辑链可以写成

$$
\boxed{
\text{单电子的两个偏振分量}
\longrightarrow
\text{电子群的线偏振}
\longrightarrow
\text{周期窄脉冲与大量谐波}
\longrightarrow
\text{到达时间压缩}
\longrightarrow
\text{同步自吸收与谱转折}
}.
$$

这部分最重要的观测结果是

$$
F_\nu\propto
\begin{cases}
\nu^{5/2}, & \tau_\nu^{\rm syn}\gg1,\\[2mm]
\nu^{-(p-1)/2}, & \tau_\nu^{\rm syn}\ll1,
\end{cases}
$$

以及转折频率 $\nu_{\rm sa}$ 由

$$
\tau_{\nu_{\rm sa}}^{\rm syn}\sim1
$$

定义。

---

## 2. 符号、定义与适用条件

### 2.1 主要符号

| 符号 | 含义 |
|---|---|
| $\gamma$ | 电子 Lorentz factor |
| $\alpha$ | pitch angle；在 §6.7 和 Problem 6.3 中也是视线与 $\mathbf B$ 的夹角 |
| $B_\perp=B\sin\alpha$ | 对单电子辐射有效的垂直磁场分量 |
| $\omega_0=eB/(m_ec)$ | 非相对论 cyclotron angular frequency |
| $\omega_{\rm g}=\omega_0/\gamma$ | 相对论回旋角频率 |
| $\nu_c\propto B_\perp\gamma^2$ | 单电子同步辐射临界频率 |
| $P(\nu,E)$ | 一个能量为 $E$ 的电子每单位频率的自发辐射功率 |
| $N(E)dE$ | 单位体积内能量位于 $[E,E+dE]$ 的电子数 |
| $j_\nu$ | emission coefficient |
| $\alpha_\nu$ | absorption coefficient，已经包含 stimulated emission 的负贡献 |
| $S_\nu=j_\nu/\alpha_\nu$ | source function |
| $\tau_\nu=\alpha_\nu L$ | optical depth |

### 2.2 辐射转移的两个极限

均匀介质、无背景入射时，

$$
I_\nu=S_\nu\left(1-e^{-\tau_\nu}\right).
$$

因此

$$
\tau_\nu\ll1
\quad\Longrightarrow\quad
I_\nu\simeq S_\nu\tau_\nu=j_\nu L,
$$

而

$$
\tau_\nu\gg1
\quad\Longrightarrow\quad
I_\nu\simeq S_\nu.
$$

### 2.3 本文主要假设

- 电子超相对论：$\gamma\gg1$，因此 $E\simeq pc\simeq\gamma m_ec^2$。
- 电子动量方向近似各向同性。
- 使用标量 $j_\nu$ 和 $\alpha_\nu$ 时，磁场方向已经平均，或磁场足够缠结。
- 经典同步辐射极限：$h\nu\ll E$。
- 幂律电子分布只在有限能量区间 $E_{\min}<E<E_{\max}$ 内成立。
- 观察频率对应的电子能量远离 $E_{\min}$、$E_{\max}$ 和 cooling break。

---

## 3. §6.5 同步辐射的线偏振

RL Fig. 6.7 把线偏振方向分解为相对于天空平面上投影磁场的两个方向：$\perp$ 和 $\parallel$。

单个电子的辐射一般是椭圆偏振。视线位于辐射锥的一侧时会得到一种旋向，位于另一侧时得到相反旋向。如果电子 pitch-angle distribution 平滑且近似各向同性，两侧的圆偏振分量大体抵消，最后保留较强的线偏振。

定义

$$
x\equiv\frac{\nu}{\nu_c}.
$$

单电子的两个线偏振功率可以写成

$$
P_\perp\propto F(x)+G(x),
$$

$$
P_\parallel\propto F(x)-G(x),
$$

其中

$$
F(x)=x\int_x^\infty K_{5/3}(\xi)d\xi,
$$

$$
G(x)=xK_{2/3}(x).
$$

因此 Stokes $I$ 与 $Q$ 满足

$$
I_\gamma=P_\perp+P_\parallel\propto2F(x),
$$

$$
Q_\gamma=P_\perp-P_\parallel\propto2G(x).
$$

单电子在给定频率处的线偏振度是

$$
\Pi_\gamma(\nu)=\frac{Q_\gamma}{I_\gamma}=\frac{G(x)}{F(x)}.
$$

电子群的偏振不能通过直接平均 $G/F$ 得到。正确做法是先分别累加所有电子贡献的 $I$ 和 $Q$，最后计算 $Q/I$。

---

## 4. 幂律电子群偏振度的推导

设

$$
N(\gamma)d\gamma=C\gamma^{-p}d\gamma.
$$

电子群的 Stokes 参数为

$$
I_\nu\propto\int_0^\infty\gamma^{-p}F(x)d\gamma,
$$

$$
Q_\nu\propto\int_0^\infty\gamma^{-p}G(x)d\gamma.
$$

因为

$$
x=\frac{\nu}{\nu_c}\propto\frac{\nu}{B_\perp\gamma^2},
$$

在固定 $\nu$ 与 $B_\perp$ 时，

$$
\gamma\propto x^{-1/2},
\qquad
d\gamma\propto-x^{-3/2}dx.
$$

所以

$$
\gamma^{-p}d\gamma\propto x^{(p-3)/2}dx.
$$

定义

$$
\mu\equiv\frac{p-3}{2},
$$

则

$$
\Pi=\frac{Q_\nu}{I_\nu}
=
\frac{\displaystyle\int_0^\infty x^\mu G(x)dx}
{\displaystyle\int_0^\infty x^\mu F(x)dx}.
$$

使用 modified Bessel function 的标准积分，可得

$$
\int_0^\infty x^\mu G(x)dx
=
2^\mu
\Gamma\left(\frac{\mu}{2}+\frac43\right)
\Gamma\left(\frac{\mu}{2}+\frac23\right),
$$

以及

$$
\int_0^\infty x^\mu F(x)dx
=
\frac{2^{\mu+1}}{\mu+2}
\Gamma\left(\frac{\mu}{2}+\frac73\right)
\Gamma\left(\frac{\mu}{2}+\frac23\right).
$$

取比值并使用

$$
\Gamma(z+1)=z\Gamma(z),
$$

得到

$$
\Pi=\frac{\mu+2}{\mu+8/3}.
$$

代入 $\mu=(p-3)/2$：

$$
\boxed{
\Pi=\frac{p+1}{p+7/3}
}.
$$

例如

$$
p=2
\quad\Longrightarrow\quad
\Pi=\frac9{13}\simeq69.2\%,
$$

$$
p=3
\quad\Longrightarrow\quad
\Pi=\frac34=75\%.
$$

需要区分两个 $75\%$：$p=3$ 时幂律电子群在给定频率处的偏振度是 $75\%$；RL 另一个结论是，同一 $\gamma$ 的电子在对频率积分后偏振度也为 $75\%$。二者是不同积分。

---

## 5. §6.6 从 cyclotron line 到 synchrotron continuum

### 5.1 非相对论极限

当 $\beta\ll1$ 时，观察者看到近似正弦变化的电场：

$$
E(t)\simeq E_0\cos\omega_0t.
$$

其 Fourier transform 集中在单一频率附近：

$$
\widetilde E(\omega)
\propto
\delta(\omega-\omega_0)+\delta(\omega+\omega_0).
$$

所以时间域中的长时间正弦振荡，对应频率域中的窄 cyclotron line。RL Fig. 6.8 展示的就是这一对应。

### 5.2 轻度相对论情形

当速度增大，电子朝向观察者时会出现到达时间压缩和 relativistic beaming。这一段电场变得更短、更强；电子远离观察者时则更弱、更缓慢。因此 $E(t)$ 不再是完美正弦波。

一般周期函数需要 Fourier series：

$$
E(t)=
E_1\sin\omega_{\rm g}t
+E_2\sin2\omega_{\rm g}t
+E_3\sin3\omega_{\rm g}t+\cdots.
$$

这里

$$
\omega_n=n\omega_{\rm g},
\qquad n=1,2,3,\ldots
$$

是谐波。RL Fig. 6.9 显示了波形开始变尖、二次及更高谐波出现的过渡状态。

### 5.3 超相对论极限

当 $\gamma\gg1$，辐射集中在半角约为 $1/\gamma$ 的窄锥中。每当辐射锥扫过视线，观察者只收到一个很窄的脉冲。时间脉冲宽度 $\Delta t$ 越小，单个脉冲的 Fourier envelope 越宽：

$$
\Delta\omega\sim\frac1{\Delta t}.
$$

同步辐射临界频率可以写成

$$
\omega_c=\frac32\gamma^3\omega_{\rm g}\sin\alpha
=
\frac32\gamma^2\frac{eB}{m_ec}\sin\alpha.
$$

因此有效谐波数大约为

$$
n_c\sim\frac{\omega_c}{\omega_{\rm g}}\sim\gamma^3\sin\alpha.
$$

RL Fig. 6.10 展示了时间域的窄脉冲列，以及频率域中覆盖大量谐波的宽包络。

---

## 6. 时间脉冲、谐波与连续谱

需要严格区分两个概念：频谱很宽，与频谱连续，不是同一件事。

设单个脉冲形状为 $g(t)$，每隔周期 $T$ 重复一次：

$$
E(t)=\sum_{m=-\infty}^{\infty}g(t-mT).
$$

它的 Fourier transform 为

$$
\widetilde E(\omega)
\propto
\widetilde g(\omega)
\sum_{n=-\infty}^{\infty}
\delta(\omega-n\omega_{\rm g}),
$$

其中 $\omega_{\rm g}=2\pi/T$。

这个结果包含两层信息：

1. $\widetilde g(\omega)$ 是宽包络，因为单个时间脉冲很窄；
2. 完美周期性仍要求频率位于离散的 $n\omega_{\rm g}$ 上。

所以一个理想、永远周期运动的单电子，严格来说产生的是

$$
\boxed{
\text{宽包络下的大量离散谐波线}
}.
$$

真实天体中，下列效应会使它们表现为平滑 continuum：

- 电子具有一系列不同的 $\gamma$；
- pitch angle 不同；
- 不同位置的 $B$ 大小和方向不同；
- 有限寿命和其他过程使单条谐波展宽；
- 仪器的频率分辨率有限。

当谐波间距小于内禀展宽或仪器分辨率时，离散线就不可分辨：

$$
\Delta\nu_{\rm harmonic}
\ll
\max\left(
\Delta\nu_{\rm broadening},
\Delta\nu_{\rm instrument}
\right).
$$

因此正确的因果链是

$$
\boxed{
\text{时间脉冲越窄}
\Rightarrow
\text{频谱包络越宽、需要的谐波越多}
},
$$

再加上谐波密集、展宽和多电子叠加，观测上才成为 synchrotron continuum。

---

## 7. §6.7 发射功率与接收功率

假设电子的螺旋轨道周期为

$$
T=\frac{2\pi}{\omega_{\rm g}}.
$$

视线与磁场方向夹角为 $\alpha$。电子沿磁场的速度为

$$
v_\parallel=v\cos\alpha.
$$

当辐射锥扫过观察者时，$v_\parallel$ 在视线方向的投影是

$$
v_{\rm los}=v_\parallel\cos\alpha=v\cos^2\alpha.
$$

相邻两次发射相隔 $T$，但电子在这段时间内朝观察者前进了 $vT\cos^2\alpha$。所以脉冲到达间隔为

$$
T_{\rm arr}
=T-\frac{vT\cos^2\alpha}{c}
=T\left(1-\beta\cos^2\alpha\right).
$$

在超相对论极限 $\beta\simeq1$：

$$
\boxed{
T_{\rm arr}\simeq T\sin^2\alpha
}.
$$

因此相同辐射能量被压缩到更短的观察者时间中，瞬时接收功率比用发射周期计算的功率大约高

$$
P_{\rm rec}\simeq\frac{P_{\rm emit}}{\sin^2\alpha}.
$$

不过，对空间局域且没有很大整体视向速度的稳态天体源，电子后来也会远离观察者，或由其他相位和方向的电子补偿。长期平均下，应使用通常的 emitted power 表达式来描述观测功率。

---

## 8. Problem 6.3 完整解答

### 8.1 题意

超相对论电子在近似均匀的磁场中辐射。观察者视线与磁场夹角为 $\alpha$。电子被两端的 magnetic constrictions 反射，在位置 1 和 2 之间来回运动，同时保持 pitch angle。证明：虽然电子在自身运动过程中持续辐射，但一个给定电子只有总时间的

$$
\frac12\sin^2\alpha
$$

能被该观察者看到。

题目图为 RL Fig. 6.13：磁场大致向上，电子在两个 magnetic mirrors 之间反弹；观察者位于与 $\mathbf B$ 成 $\alpha$ 的方向。

### 8.2 为什么先出现 $1/2$？

电子有两个传播方向：

- 从位置 1 向位置 2，沿 $+\mathbf B$ 方向前进；
- 从位置 2 返回位置 1，沿 $-\mathbf B$ 方向前进。

观察者位于 $+\mathbf B$ 一侧。只有电子沿 $+\mathbf B$ 运动时，其速度锥才可能周期性扫过观察者；返回的一半运动中，辐射主要聚束到相反方向。

因此可见的发射腿只占整个 bounce cycle 的一半：

$$
f_{\rm direction}=\frac12.
$$

### 8.3 为什么再出现 $\sin^2\alpha$？

在朝向观察者的半个 bounce cycle 中，到达时间相对于发射时间被压缩：

$$
dt_{\rm arr}
=dt_{\rm em}\left(1-\beta\cos^2\alpha\right)
\simeq dt_{\rm em}\sin^2\alpha.
$$

若单程 bounce time 为 $T_b$，观察者真正收到这一串脉冲的持续时间为

$$
\Delta t_{\rm visible}=T_b\sin^2\alpha.
$$

完整往返周期约为 $2T_b$，而电子往返后净位移为零，所以相邻可见脉冲串之间的总周期仍对应 $2T_b$。因此可见时间比例为

$$
f_{\rm visible}
=\frac{T_b\sin^2\alpha}{2T_b}.
$$

最终得到

$$
\boxed{
f_{\rm visible}=\frac12\sin^2\alpha
}.
$$

这里“可见时间很短”和“可见时瞬时接收功率较高”是同一个到达时间压缩效应的两面，不能只保留其中一个。

---

## 9. Einstein coefficients 复习

考虑两个能级

$$
E_2-E_1=h\nu_0.
$$

Einstein 将辐射与物质的相互作用分为三个过程。

### 9.1 Spontaneous emission

$$
2\longrightarrow1+\text{photon}.
$$

定义

$$
A_{21}
=
\text{每个高能级粒子单位时间发生自发辐射的概率}.
$$

它不需要已有辐射场，单位是 ${\rm s^{-1}}$，平均寿命约为 $A_{21}^{-1}$。

### 9.2 Absorption

$$
1+\text{photon}\longrightarrow2.
$$

跃迁率正比于线型函数加权后的 mean intensity $\overline J$：

$$
R_{\rm abs}=n_1B_{12}\overline J.
$$

### 9.3 Stimulated emission

$$
2+\text{photon}\longrightarrow1+2\,\text{photons}.
$$

其跃迁率为

$$
R_{\rm stim}=n_2B_{21}\overline J.
$$

受激产生的光子进入与诱导光子相同的 photon state，因此具有相同的频率、传播方向、偏振和相干关系。

### 9.4 Einstein relations

Detailed balance 与 Planck spectrum 给出

$$
g_1B_{12}=g_2B_{21},
$$

以及在 RL 使用 $J_\nu$ 定义 $B$ 系数的约定下

$$
A_{21}=\frac{2h\nu_0^3}{c^2}B_{21}.
$$

若其他教材用能量密度 $u_\nu$ 定义 $B$ 系数，则相应关系写成

$$
\frac{A_{21}}{B_{21}}=\frac{8\pi h\nu_0^3}{c^3}.
$$

两种写法只是 $B$ 系数的定义不同。

### 9.5 它们怎样进入 $j_\nu$ 和 $\alpha_\nu$？

自发辐射即使在 $I_\nu=0$ 时仍能产生光子，因此进入与 $I_\nu$ 无关的加法项：

$$
j_\nu
=
\frac{h\nu_0}{4\pi}
n_2A_{21}\phi(\nu).
$$

吸收与受激辐射都正比于已有光束强度，所以合并为

$$
\alpha_\nu
=
\frac{h\nu_0}{4\pi}
\left(n_1B_{12}-n_2B_{21}\right)
\phi(\nu).
$$

因此 stimulated emission 被记作 negative absorption。说“spontaneous emission 已经包含在 $j_\nu$ 中”，就是强调自发产生的光子已经在发射项中计数，推导 $\alpha_\nu$ 时不能再重复加入。

---

## 10. §6.8 Synchrotron Self-Absorption

“Self” 表示产生同步辐射的同一群电子，也会吸收这些同步辐射光子。连续自由电子态中仍有与两能级系统相同的三个过程：

1. 电子在磁场中自行辐射，对应 spontaneous emission；
2. 电子吸收 synchrotron photon，对应 true absorption；
3. 已有 photon 诱导电子再发射，对应 stimulated emission。

经典电动力学得到的单电子功率 $P(\nu,E)$ 描述电子在没有外部辐射场时仍会产生的功率，因此对应 spontaneous-emission power，并用于构造 $j_\nu$。

同步自吸收系数必须计算

$$
\boxed{
\text{true absorption}-\text{stimulated emission}
}.
$$

---

## 11. 同步自吸收系数的完整推导

### 11.1 从连续态 Einstein coefficients 开始

设上态为 $E_2$，下态为

$$
E_1=E_2-h\nu.
$$

净吸收系数为

$$
\alpha_\nu
=
\frac{h\nu}{4\pi}
\sum_{E_1}\sum_{E_2}
\left[
n(E_1)B_{12}-n(E_2)B_{21}
\right]
\phi_{21}(\nu).
$$

这里 $n(E_i)$ 是每个微观量子态的占据数密度。

### 11.2 用单电子功率替换 $B_{21}$

一个初始能量为 $E_2$ 的电子，其自发辐射功率为

$$
P(\nu,E_2)
=
h\nu\sum_{E_1}A_{21}\phi_{21}(\nu).
$$

对单个微观态，statistical weight 取 1。使用

$$
A_{21}=\frac{2h\nu^3}{c^2}B_{21},
$$

得到

$$
\sum_{E_1}B_{21}\phi_{21}(\nu)
=
\frac{c^2}{2h^2\nu^4}P(\nu,E_2).
$$

于是

$$
\alpha_\nu
=
\frac{c^2}{8\pi h\nu^3}
\sum_{E_2}
\left[
n(E_2-h\nu)-n(E_2)
\right]
P(\nu,E_2).
$$

括号中的第一项来自低能电子的 true absorption，第二项来自高能电子的 stimulated emission。

### 11.3 从量子态占据数变成动量分布

定义

$$
f(\mathbf p)d^3p
=
\text{单位体积内动量位于 }d^3p\text{ 的电子数}.
$$

连续量子态在相空间中每个态占据体积 $h^3$。把量子态求和转为动量积分后，态密度因子与每态占据数中的相反因子抵消：

$$
\alpha_\nu
=
\frac{c^2}{8\pi h\nu^3}
\int d^3p_2
\left[f(\mathbf p_1)-f(\mathbf p_2)\right]
P(\nu,E_2).
$$

### 11.4 从 $f(p)$ 变成 $N(E)$

对各向同性分布，

$$
N(E)dE=4\pi p^2f(p)dp.
$$

在超相对论极限

$$
E=pc,
\qquad
dp=\frac{dE}{c},
$$

所以

$$
f(p)=\frac{c^3}{4\pi}\frac{N(E)}{E^2}.
$$

同时

$$
d^3p=4\pi p^2dp=\frac{4\pi E^2}{c^3}dE.
$$

代入得到 RL Eq. (6.49)：

$$
\alpha_\nu
=
\frac{c^2}{8\pi h\nu^3}
\int dE\,P(\nu,E)E^2
\left[
\frac{N(E-h\nu)}{(E-h\nu)^2}
-
\frac{N(E)}{E^2}
\right].
$$

这里 $N(E)/E^2$ 来自三维动量壳层的态密度 $4\pi p^2dp\propto E^2dE$。

### 11.5 使用 $h\nu\ll E$ 展开

定义

$$
g(E)=\frac{N(E)}{E^2}.
$$

当 $h\nu\ll E$，

$$
g(E-h\nu)-g(E)
\simeq
-h\nu\frac{dg}{dE}.
$$

代回并约掉 $h\nu$，得到 RL Eq. (6.50)：

$$
\boxed{
\alpha_\nu
=
-\frac{c^2}{8\pi\nu^2}
\int dE\,
P(\nu,E)E^2
\frac{\partial}{\partial E}
\left[
\frac{N(E)}{E^2}
\right]
}.
$$

前面的负号来自吸收与受激辐射的有限差分变成负导数；$E^2$ 和 $N(E)/E^2$ 则来自三维动量态密度。

---

## 12. 幂律电子分布下的 $j_\nu$、$\alpha_\nu$ 与 $S_\nu$

设

$$
N(E)=CE^{-p}.
$$

则

$$
\frac{N(E)}{E^2}=CE^{-(p+2)},
$$

以及

$$
-E^2\frac{d}{dE}
\left[
\frac{N(E)}{E^2}
\right]
=(p+2)\frac{N(E)}{E}.
$$

所以

$$
\alpha_\nu
=
\frac{(p+2)c^2}{8\pi\nu^2}
\int dE\,
P(\nu,E)\frac{N(E)}{E}.
$$

完成能量积分后，频率与磁场标度为

$$
\boxed{
\alpha_\nu
\propto
C B_\perp^{(p+2)/2}
\nu^{-(p+4)/2}
}.
$$

而 optically thin emission coefficient 为

$$
\boxed{
j_\nu
\propto
C B_\perp^{(p+1)/2}
\nu^{-(p-1)/2}
}.
$$

两者取比值得到 source function：

$$
S_\nu=\frac{j_\nu}{\alpha_\nu}.
$$

逐项相除：

$$
C\text{ 消掉},
$$

$$
B_\perp^{(p+1)/2-(p+2)/2}=B_\perp^{-1/2},
$$

$$
\nu^{-(p-1)/2+(p+4)/2}=\nu^{5/2}.
$$

因此

$$
\boxed{
S_\nu
\propto
B_\perp^{-1/2}\nu^{5/2}
}.
$$

特别重要的是，$\nu^{5/2}$ 与电子能谱指数 $p$ 无关。

---

## 13. 为什么低频光学厚、高频光学薄

光学深度是

$$
\tau_\nu=\alpha_\nu L.
$$

若源尺度 $L$ 与频率无关，则

$$
\boxed{
\tau_\nu
\propto
\nu^{-(p+4)/2}
}.
$$

定义 self-absorption frequency $\nu_{\rm sa}$ 使

$$
\tau_{\nu_{\rm sa}}=1.
$$

于是

$$
\tau_\nu
=
\left(
\frac{\nu}{\nu_{\rm sa}}
\right)^{-(p+4)/2}.
$$

所以

$$
\nu\ll\nu_{\rm sa}
\quad\Longrightarrow\quad
\tau_\nu\gg1,
$$

而

$$
\nu\gg\nu_{\rm sa}
\quad\Longrightarrow\quad
\tau_\nu\ll1.
$$

例如 $p=2$ 时，

$$
\alpha_\nu\propto\nu^{-3}.
$$

频率降低十倍，opacity 增大一千倍。

物理上，一个频率 $\nu$ 主要对应

$$
\gamma_\nu\sim\left(\frac{\nu}{B_\perp}\right)^{1/2}.
$$

低频对应更低能、数量更多的电子；高频对应更高能、数量更少的电子。因此低频 photons 更容易被同一电子群重新吸收。需要强调，这不是“所有高能光子都更难吸收”的普遍规律，而是 synchrotron self-absorption 的特定频率依赖。

最终谱形为

$$
I_\nu\propto
\begin{cases}
S_\nu\propto\nu^{5/2}, & \nu\ll\nu_{\rm sa},\\[2mm]
j_\nu L\propto\nu^{-(p-1)/2}, & \nu\gg\nu_{\rm sa}.
\end{cases}
$$

RL Fig. 6.12 就是低频上升的 $\nu^{5/2}$ 与高频下降的 $\nu^{-(p-1)/2}$ 在 $\tau_\nu\sim1$ 附近连接的示意图。

---

## 14. 为什么光学厚谱是 $\nu^{5/2}$ 而不是 $\nu^2$

热辐射的 Rayleigh–Jeans 极限为

$$
I_\nu=\frac{2kT}{c^2}\nu^2,
$$

其中同一个温度 $T$ 适用于所有频率。

非热同步辐射不同。不同频率主要由不同能量电子产生：

$$
\nu\sim B\gamma^2
\quad\Longrightarrow\quad
\gamma_\nu\propto\left(\frac{\nu}{B}\right)^{1/2}.
$$

可以为每个频率定义有效 brightness temperature：

$$
kT_b(\nu)\sim\gamma_\nu m_ec^2.
$$

所以

$$
T_b(\nu)\propto\nu^{1/2}B^{-1/2}.
$$

代入 Rayleigh–Jeans 形式：

$$
I_\nu
\sim
\frac{2kT_b(\nu)}{c^2}\nu^2
\propto
B^{-1/2}\nu^{5/2}.
$$

这就是 AstroBaki 使用的直观解释。它不是说电子真的达到 thermal equilibrium；brightness temperature 在这里只是把非热强度换写成温度形式。RL 的严格结果来自

$$
S_\nu=\frac{j_\nu}{\alpha_\nu}.
$$

---

## 15. 幂律假设 $N(E)=CE^{-p}$ 的条件

### 15.1 它是非热近似，不是普适定律

幂律通常来自近似无尺度的加速过程，例如 diffusive shock acceleration、stochastic acceleration 或 magnetic reconnection。热平衡电子则更接近 Maxwell–Jüttner distribution，而不是幂律。

实际模型必须包含端点：

$$
N(E)=
\begin{cases}
CE^{-p}, & E_{\min}<E<E_{\max},\\
\text{其他形式或近似为零}, & \text{区间之外}.
\end{cases}
$$

### 15.2 数目与能量收敛

若强行令 $E_{\max}\to\infty$，电子总数在高能端有限要求

$$
p>1,
$$

总能量有限要求

$$
p>2.
$$

真实系统有有限 cutoff，因此这些条件不是必须逐字满足，但提醒我们不能把纯幂律无限延伸。

### 15.3 标准同步谱的频率范围

标准结果要求

$$
E_{\min}\ll E_\nu\ll E_{\max},
$$

等价于

$$
\nu_c(E_{\min})\ll\nu\ll\nu_c(E_{\max}).
$$

若接近高能 cutoff，会出现高频指数衰减；若跨过 cooling break，$p$ 会改变；若频率低到对应的 $\gamma_\nu<\gamma_{\min}$，最低能电子控制谱形，光学厚 slope 可以趋近 $\nu^2$，而不是标准的 $\nu^{5/2}$。

### 15.4 冷却可能改变 $p$

若注入谱为

$$
Q(E)\propto E^{-q},
$$

无明显冷却时通常有 $p\simeq q$。在同步冷却主导的稳态高能端，$\dot E\propto-E^2$ 往往使

$$
p=q+1.
$$

所以观测反推的 $p$ 不一定等于原始 acceleration index。

---

## 16. Problem 6.4 题意与读图

### 16.1 中文翻译

从一个距离未知、记为 $d$ 的未分辨点源，观测到 RL Fig. 6.14 所示的频谱。模型认为该源是半径为 $R$ 的球形同步辐射区，磁场强度为 $B$。

观察者与源之间的空间均匀充满一团热氢气。氢气主要通过 bound-free transitions 发射和吸收；在氢气已经 optically thin 的频率范围，它的贡献相对于同步辐射源可以忽略。

同步辐射 source function 为

$$
S_\nu
=
A
\left(\frac{B}{B_0}\right)^{-1/2}
\left(\frac{\nu}{\nu_0}\right)^{5/2}.
$$

同步自吸收系数为

$$
\alpha_\nu^s
=
C
\left(\frac{B}{B_0}\right)^{(p+2)/2}
\left(\frac{\nu}{\nu_0}\right)^{-(p+4)/2}.
$$

前景氢气的 bound-free absorption coefficient 为

$$
\alpha_\nu^{bf}
=
D
\left(\frac{\nu}{\nu_0}\right)^{-3}.
$$

图中可测得峰值 $F_0$、两个转折频率 $\nu_1$ 和 $\nu_2$，以及三段斜率：

$$
F_\nu\propto
\begin{cases}
\nu^2, & \nu<\nu_1,\\[2mm]
\nu^{5/2}, & \nu_1<\nu<\nu_2,\\[2mm]
\nu^{-1/2}, & \nu>\nu_2.
\end{cases}
$$

Part (a)：若源张开的 solid angle

$$
\Omega=\pi\frac{R^2}{d^2}
$$

已知，求 $R$ 与 $B$。

Part (b)：再使用 $D$ 和 $\nu_1$，求 $\Omega$ 与距离 $d$。

### 16.2 三段谱的物理身份

| 频率范围 | 斜率 | 主导物理 |
|---|---:|---|
| $\nu<\nu_1$ | $\nu^2$ | 前景 thermal hydrogen bath 光学厚，Rayleigh–Jeans |
| $\nu_1<\nu<\nu_2$ | $\nu^{5/2}$ | 前景已透明，但 synchrotron source self-absorbed |
| $\nu>\nu_2$ | $\nu^{-1/2}$ | synchrotron source 也变为光学薄 |

高频同步谱满足

$$
F_\nu\propto\nu^{-(p-1)/2}.
$$

所以

$$
-\frac{p-1}{2}=-\frac12
\quad\Longrightarrow\quad
\boxed{p=2}.
$$

两个转折分别满足

$$
\tau_{\nu_1}^{bf}\sim1,
$$

$$
\tau_{\nu_2}^{s}\sim1.
$$

---

## 17. Problem 6.4 完整解答

定义

$$
x_1\equiv\frac{\nu_1}{\nu_0},
\qquad
x_2\equiv\frac{\nu_2}{\nu_0},
\qquad
b\equiv\frac{B}{B_0}.
$$

### 17.1 Part (a)：由 $F_0$ 求 $B$

在 $\nu_2$ 的光学厚侧，

$$
I_{\nu_2}\simeq S_{\nu_2}.
$$

未分辨源的 flux density 为

$$
F_{\nu_2}=\Omega I_{\nu_2}.
$$

根据图，$F_{\nu_2}=F_0$，因此

$$
F_0
=
\Omega A b^{-1/2}x_2^{5/2}.
$$

整理得到

$$
b
=
\left(\frac{\Omega A}{F_0}\right)^2x_2^5.
$$

所以

$$
\boxed{
B
=
B_0
\left(\frac{\Omega A}{F_0}\right)^2
\left(\frac{\nu_2}{\nu_0}\right)^5
}.
$$

### 17.2 Part (a)：由 $\tau_{\nu_2}^s=1$ 求 $R$

因为 $p=2$，

$$
\alpha_\nu^s
=
C b^2
\left(\frac{\nu}{\nu_0}\right)^{-3}.
$$

采用题目隐含的 characteristic path length $R$：

$$
1=\tau_{\nu_2}^s
=
\alpha_{\nu_2}^sR
=Cb^2x_2^{-3}R.
$$

因此

$$
R=\frac1C b^{-2}x_2^3.
$$

代入 $b$：

$$
b^{-2}
=
\left(\frac{F_0}{\Omega A}\right)^4x_2^{-10}.
$$

最终

$$
\boxed{
R
=
\frac1C
\left(\frac{F_0}{\Omega A}\right)^4
\left(\frac{\nu_2}{\nu_0}\right)^{-7}
}.
$$

### 17.3 Part (b)：由前景转折求距离

前景氢气均匀填满观察者到源之间的距离，所以其 path length 是 $d$。在 $\nu_1$：

$$
1=\tau_{\nu_1}^{bf}
=
\alpha_{\nu_1}^{bf}d
=Dx_1^{-3}d.
$$

因此

$$
\boxed{
d
=
\frac1D
\left(\frac{\nu_1}{\nu_0}\right)^3
}.
$$

### 17.4 Part (b)：由几何关系求 $\Omega$

使用

$$
\Omega=\pi\frac{R^2}{d^2}
$$

以及

$$
R
=
\frac1C
\left(\frac{F_0}{\Omega A}\right)^4x_2^{-7},
$$

得到

$$
\Omega
=
\frac{\pi}{C^2d^2}
\left(\frac{F_0}{\Omega A}\right)^8x_2^{-14}.
$$

把 $\Omega^{-8}$ 移到左边：

$$
\Omega^9
=
\frac{\pi F_0^8}{C^2A^8d^2}x_2^{-14}.
$$

由

$$
d^{-2}=D^2x_1^{-6},
$$

可得

$$
\boxed{
\Omega
=
\left[
\frac{\pi D^2F_0^8}{C^2A^8}
\left(\frac{\nu_1}{\nu_0}\right)^{-6}
\left(\frac{\nu_2}{\nu_0}\right)^{-14}
\right]^{1/9}
}.
$$

求出 $\Omega$ 后，将它代回 Part (a) 的公式，就得到唯一的 $B$ 和 $R$。

### 17.5 近似系数说明

以上采用 RL 图示隐含的 sharp-turnover approximation：

$$
\tau_{\nu_2}^s\sim1,
\qquad
F_0\simeq\Omega S_{\nu_2}.
$$

若严格在 $\tau=1$ 使用

$$
I_\nu=S_\nu(1-e^{-1}),
$$

峰值关系会多一个 $1-e^{-1}$ 的 order-unity factor。若对均匀球体进行精确视线积分，还会出现几何因子，但所有参数标度不变。

---

## 18. English assignment-ready solutions

### 18.1 Problem 6.3

During the leg on which the electron moves along the magnetic field toward the observer, its beaming cone can sweep across the line of sight. During the return leg the parallel velocity reverses, so the radiation is beamed in the opposite direction. This supplies a factor of $1/2$.

During one gyroperiod $T$, the guiding center advances a distance $vT\cos\alpha$ along the magnetic field. Its displacement projected onto the line of sight is therefore $vT\cos^2\alpha$. The interval between the arrival of successive pulses is

$$
T_{\rm arr}
=T\left(1-\beta\cos^2\alpha\right)
\simeq T\sin^2\alpha,
$$

where the final approximation uses $\beta\simeq1$. Hence the radiation emitted during the forward half of the bounce cycle is received during a fraction $\sin^2\alpha$ of that interval. Combining this arrival-time compression with the fact that only one of the two propagation directions is visible gives

$$
\boxed{
f_{\rm visible}=\frac12\sin^2\alpha
}.
$$

### 18.2 Problem 6.4

The optically thin high-frequency spectrum has slope

$$
F_\nu\propto\nu^{-(p-1)/2}=\nu^{-1/2},
$$

so $p=2$. Define $x_1=\nu_1/\nu_0$ and $x_2=\nu_2/\nu_0$.

At the synchrotron turnover,

$$
F_0=\Omega S_{\nu_2}
=\Omega A
\left(\frac{B}{B_0}\right)^{-1/2}x_2^{5/2},
$$

which gives

$$
\boxed{
B
=B_0
\left(\frac{\Omega A}{F_0}\right)^2x_2^5
}.
$$

Since $\tau_{\nu_2}^{s}=\alpha_{\nu_2}^{s}R\simeq1$ and $p=2$,

$$
1=C
\left(\frac{B}{B_0}\right)^2x_2^{-3}R.
$$

Therefore

$$
\boxed{
R
=\frac1C
\left(\frac{F_0}{\Omega A}\right)^4x_2^{-7}
}.
$$

The low-frequency turnover is produced by bound-free absorption in the foreground hydrogen. Since the path length is $d$,

$$
1=\alpha_{\nu_1}^{bf}d=Dx_1^{-3}d,
$$

and hence

$$
\boxed{
d=D^{-1}x_1^3
}.
$$

Finally, using $\Omega=\pi R^2/d^2$ gives

$$
\boxed{
\Omega
=
\left[
\frac{\pi D^2F_0^8}{C^2A^8}
x_1^{-6}x_2^{-14}
\right]^{1/9}
}.
$$

---

## 19. 常见混淆、量纲与极限检查

### 19.1 Cyclotron line 和 synchrotron continuum 都属于频率域

时间域的对应对象分别是平滑正弦波和窄脉冲列。不能说 “cyclotron line 是时间上的”。

### 19.2 频谱宽不自动等于连续

理想周期脉冲列仍给出离散 harmonic comb。只有大量谐波足够密集，并被展宽、电子分布和仪器分辨率平滑后，才表现为 continuum。

### 19.3 $\omega_0$ 与 $\omega_{\rm g}$

非相对论 cyclotron frequency 是

$$
\omega_0=\frac{eB}{m_ec},
$$

相对论回旋频率是

$$
\omega_{\rm g}=\frac{eB}{\gamma m_ec}.
$$

谐波应更精确地写成 $n\omega_{\rm g}$。

### 19.4 $N(E)$ 与每态占据数 $n(E)$ 不同

$N(E)dE$ 是整个能量壳层内的电子数；$n(E)$ 是每个微观量子态的占据数。$N(E)/E^2$ 中的 $E^2$ 来自动量壳层态密度。

### 19.5 $j_\nu$ 与 stimulated emission

$j_\nu$ 只包含不依赖已有光束强度的 spontaneous emission。Stimulated emission 与 $I_\nu$ 成正比，因此放在 $\alpha_\nu$ 中作为 negative absorption。

### 19.6 低频厚、高频薄不是普遍定律

这是 synchrotron self-absorption 的结果：

$$
\alpha_\nu^{\rm syn}\propto\nu^{-(p+4)/2}.
$$

其他 opacity，例如 photoelectric absorption、pair production 或 $\gamma\gamma$ absorption，可能在其他频率范围产生不同趋势。

### 19.7 Problem 6.4 的 $D$

$D$ 描述前景 bound-free absorption，因此只在利用 $\nu_1$ 求距离时进入。Part (a) 的 $B$ 和 $R$ 由 $F_0$、$\nu_2$ 与假定的 $\Omega$ 决定。

### 19.8 量纲检查

- $C$ 和 $D$ 的单位都是 ${\rm cm^{-1}}$，所以 $C^{-1}$、$D^{-1}$ 提供长度尺度。
- $F_0/(\Omega A)$ 无量纲。
- $\nu_1/\nu_0$ 和 $\nu_2/\nu_0$ 无量纲。
- 因此 Problem 6.4 中 $R$ 与 $d$ 的单位正确为长度，$\Omega$ 无量纲。

---

## 20. 核心公式与复习清单

### 20.1 必记公式

幂律电子群的 optically thin spectrum：

$$
j_\nu\propto
C B_\perp^{(p+1)/2}\nu^{-(p-1)/2}.
$$

同步自吸收系数：

$$
\alpha_\nu\propto
C B_\perp^{(p+2)/2}\nu^{-(p+4)/2}.
$$

同步自吸收 source function：

$$
S_\nu=\frac{j_\nu}{\alpha_\nu}
\propto B_\perp^{-1/2}\nu^{5/2}.
$$

光学厚与光学薄谱：

$$
I_\nu\propto
\begin{cases}
\nu^{5/2}, & \tau_\nu\gg1,\\
\nu^{-(p-1)/2}, & \tau_\nu\ll1.
\end{cases}
$$

幂律电子群线偏振度：

$$
\Pi=\frac{p+1}{p+7/3}.
$$

到达时间压缩：

$$
T_{\rm arr}=T(1-\beta\cos^2\alpha)
\simeq T\sin^2\alpha.
$$

Problem 6.3：

$$
f_{\rm visible}=\frac12\sin^2\alpha.
$$

### 20.2 自测问题

1. 为什么电子群的偏振度不能直接平均单电子的 $G/F$？
2. 为什么理想周期窄脉冲仍然对应离散 harmonic comb？
3. $T_{\rm arr}$ 中的 $\cos^2\alpha$ 来自哪两个投影？
4. 为什么 spontaneous emission 放进 $j_\nu$，stimulated emission 放进 $\alpha_\nu$？
5. $N(E)/E^2$ 中的 $E^2$ 从哪里来？
6. 为什么标准 self-absorbed slope 与 $p$ 无关？
7. Problem 6.4 中 $\nu_1$ 与 $\nu_2$ 分别对应哪个 opacity 的 $\tau\sim1$？

---

## 21. 参考资料

- Rybicki, G. B. & Lightman, A. P., *Radiative Processes in Astrophysics*, Chapter 6, especially §§6.5–6.8 and Problems 6.3–6.4.
- AstroBaki, [“Synchrotron Self-Interactions”](https://casper.astro.berkeley.edu/astrobaki/index.php/Synchrotron_Self-Interactions), especially the opening section on Synchrotron Self-Absorption.
- Abramowitz, M. & Stegun, I. A., *Handbook of Mathematical Functions*, for the modified Bessel-function integrals used in the polarization calculation.

