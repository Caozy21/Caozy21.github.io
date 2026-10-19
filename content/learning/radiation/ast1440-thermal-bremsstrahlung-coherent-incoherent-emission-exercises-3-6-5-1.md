---
title: "AST1440 热轫致辐射、相干与非相干发射：RL §5.1–§5.3 及习题 3.6、5.1 详解"
description: "系统推导单次电子—离子碰撞、Gaunt factor、Maxwell 热平均、热自由—自由发射与吸收、光薄/光厚转移，并完整解答习题 3.6 与 5.1。"
date: "2026-10-19"
tags: ["AST1440","Thermal bremsstrahlung","Free-free emission","Coherence","Radiative transfer","Exercises"]
order: 13
draft: false
---

# AST1440 热轫致辐射、相干与非相干发射：RL §5.1–§5.3 及习题 3.6、5.1 详解

> 课程：AST1440 — Radiation。  
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§5.1（印刷页 156–159）、§5.2（印刷页 159–162）、§5.3（印刷页 162–163）；Problems 3.6（印刷页 104–105）与 5.1（印刷页 165）。  
> 补充背景：RL §4.1、§4.2 与 §4.6；AstroBaki, *Thermal Bremsstrahlung*。  
> 整理日期：2026 年 10 月 19 日。  
> 本文按本周预习讨论中的物理依赖关系整理：单次电子—离子碰撞、碰撞脉冲与 Fourier 频谱、impact parameter 积分、Gaunt factor、Maxwell 热平均、自由—自由发射与吸收、Kirchhoff 定律、光薄与光厚极限，以及两道指定习题的完整解答。

## 目录

1. [本周内容的逻辑主线与核心结论](#1-本周内容的逻辑主线与核心结论)
2. [符号、单位制与近似条件](#2-符号单位制与近似条件)
3. [Fourier 预备：脉冲长度、频谱宽度与平坦低频谱](#3-fourier-预备脉冲长度频谱宽度与平坦低频谱)
4. [RL §5.1：单次电子—离子碰撞](#4-rl-51单次电子离子碰撞)
5. [从速度冲量到单次碰撞频谱](#5-从速度冲量到单次碰撞频谱)
6. [从单次碰撞到单速电子群发射率](#6-从单次碰撞到单速电子群发射率)
7. [$b_{\min}$、$b_{\max}$ 与 Gaunt factor](#7-b_minb_max-与-gaunt-factor)
8. [RL §5.2：Maxwell 热平均与热轫致辐射](#8-rl-52maxwell-热平均与热轫致辐射)
9. [RL §5.3：自由—自由吸收与 Kirchhoff 定律](#9-rl-53自由自由吸收与-kirchhoff-定律)
10. [辐射转移中的光薄、光厚与净冷却](#10-辐射转移中的光薄光厚与净冷却)
11. [狭义相对论预备：RL §4.1、§4.2、§4.6](#11-狭义相对论预备rl-414246)
12. [习题 3.6：相干与非相干发射](#12-习题-36相干与非相干发射)
13. [习题 5.1：等温电离氢球的塌缩](#13-习题-51等温电离氢球的塌缩)
14. [English assignment-ready solutions](#14-english-assignment-ready-solutions)
15. [量纲、极限与常见混淆](#15-量纲极限与常见混淆)
16. [复习清单与核心公式](#16-复习清单与核心公式)
17. [参考资料](#17-参考资料)

---


## 1. 本周内容的逻辑主线与核心结论

轫致辐射的英文是 **bremsstrahlung**，也称 **free-free emission**。电子在辐射前后都处于自由态；辐射来自电子在离子 Coulomb 场中的加速度。

本周的主线是

$$
\boxed{
\text{一次电子—离子碰撞}
\longrightarrow
\text{加速度脉冲的连续频谱}
\longrightarrow
\text{单速电子群}
\longrightarrow
\text{Maxwell 热平均}
\longrightarrow
j_\nu^{\rm ff},\ \alpha_\nu^{\rm ff}
\longrightarrow
\text{光薄/光厚天体}
}.
$$

一个速度为 $v$ 的电子以 impact parameter $b$ 掠过电荷为 $Ze$ 的重离子。碰撞时间量级是

$$
\boxed{\tau\sim\frac{b}{v}}.
$$

小角散射下，电子的横向速度改变为

$$
\boxed{
|\Delta v_\perp|=\frac{2Ze^2}{m_ebv}
}.
$$

在低频极限 $\omega\tau=\omega b/v\ll1$，单次碰撞的频谱为

$$
\boxed{
\frac{dW(b)}{d\omega}
=
\frac{2e^2}{3\pi c^3}|\Delta\mathbf v|^2
=
\frac{8Z^2e^6}{3\pi c^3m_e^2v^2b^2}
}.
$$

对单位体积、单位时间内的所有电子—离子碰撞以及 impact parameter 积分，得到单速电子群的角频率体发射率

$$
\boxed{
\epsilon_\omega^{\rm ff}
=
\frac{16\pi e^6}{3\sqrt3\,c^3m_e^2v}
Z^2n_en_i g_{\rm ff}(v,\omega)
}.
$$

对 Maxwell 电子速度分布平均后，热轫致辐射的频率体发射率是

$$
\boxed{
\epsilon_\nu^{\rm ff}
=
6.8\times10^{-38}
Z^2n_en_iT^{-1/2}
e^{-h\nu/kT}\bar g_{\rm ff}
}
$$

，单位为 ${\rm erg\,s^{-1}\,cm^{-3}\,Hz^{-1}}$。这是对所有方向积分后的发射率；每单位立体角的 emission coefficient 是

$$
j_\nu^{\rm ff}=\frac{\epsilon_\nu^{\rm ff}}{4\pi}.
$$

频率积分后的总发射率为

$$
\boxed{
\epsilon^{\rm ff}
=
1.4\times10^{-27}
T^{1/2}Z^2n_en_i\bar g_B
}
$$

，单位为 ${\rm erg\,s^{-1}\,cm^{-3}}$。

热自由—自由吸收系数由 Kirchhoff 定律得到：

$$
\boxed{
\alpha_\nu^{\rm ff}
=
3.7\times10^8
T^{-1/2}Z^2n_en_i\nu^{-3}
\left(1-e^{-h\nu/kT}\right)
\bar g_{\rm ff}
}
$$

，单位为 ${\rm cm^{-1}}$。在 Rayleigh–Jeans 极限 $h\nu\ll kT$，

$$
\boxed{
\alpha_\nu^{\rm ff}
\simeq
0.018\,
T^{-3/2}Z^2n_en_i\nu^{-2}\bar g_{\rm ff}
}.
$$

---


## 2. 符号、单位制与近似条件

### 2.1 符号表

| 符号 | 含义 | 说明 |
|---|---|---|
| $e$ | 基本电荷量的正值 | 电子电荷为 $-e$ |
| $Ze$ | 离子电荷 | $Z$ 是电荷数 |
| $m_e,m_p$ | 电子、质子质量 | 完全电离氢中离子是质子 |
| $v$ | 单个电子的初始速度 | RL §5.1 先固定 $v$ |
| $b$ | impact parameter | 未受扰动直线到离子的最近距离 |
| $\tau$ | 单次碰撞时间 | $\tau\sim b/v$ |
| $\omega,\nu$ | 角频率、普通频率 | $\omega=2\pi\nu$ |
| $n_e,n_i$ | 电子、离子数密度 | cgs 中通常用 ${\rm cm^{-3}}$ |
| $g_{\rm ff}$ | 单速 free-free Gaunt factor | 无量纲，缓慢依赖 $v,\omega$ |
| $\bar g_{\rm ff}$ | Maxwell 平均 Gaunt factor | 依赖 $T,\nu$ |
| $\bar g_B$ | 频率平均 Gaunt factor | 用于 bolometric emissivity |
| $\epsilon_\nu$ | 角度积分体发射率 | ${\rm erg\,s^{-1}\,cm^{-3}\,Hz^{-1}}$ |
| $j_\nu$ | 每单位立体角 emission coefficient | $\epsilon_\nu=4\pi j_\nu$ |
| $\alpha_\nu$ | 净吸收系数 | 包含 stimulated emission 修正 |
| $S_\nu$ | source function | $S_\nu=j_\nu/\alpha_\nu$ |
| $B_\nu(T)$ | Planck function | LTE 热源函数 |

### 2.2 Gaussian-cgs 单位制

RL 本章采用 Gaussian-cgs。Coulomb 力和 Larmor 功率分别是

$$
F=\frac{|q_1q_2|}{r^2},
\qquad
P=\frac{2q^2a^2}{3c^3}.
$$

若改用 SI，Coulomb 相互作用中的 $e^2$ 应替换为

$$
\frac{e^2}{4\pi\epsilon_0}.
$$

数值系数 $6.8\times10^{-38}$ 与 $3.7\times10^8$ 假设

$$
n_e,n_i\ [{\rm cm^{-3}}],\quad
T\ [{\rm K}],\quad
\nu\ [{\rm Hz}].
$$

### 2.3 主要近似

- 电子非相对论：$v\ll c$，典型热能 $kT\ll m_ec^2$。
- 离子质量远大于电子质量，碰撞中先近似离子固定。
- 小角散射时以未受扰动直线轨道计算加速度。
- 等离子体稀薄、非简并，电子服从 Maxwell–Boltzmann 分布。
- 热发射近似各向同性，因此 $\epsilon_\nu=4\pi j_\nu$。
- Gaunt factor 吸收精确轨道、量子力学和渐近近似的修正。
- Kirchhoff 关系用于满足 detailed balance 的热自由—自由发射与吸收。

---


## 3. Fourier 预备：脉冲长度、频谱宽度与平坦低频谱

### 3.1 为什么非周期碰撞产生连续谱？

轫致辐射由加速度控制，因此真正需要 Fourier 分解的是 $\mathbf a(t)$。一次电子—离子碰撞给出一个有限持续时间的加速度脉冲，而不是无限重复的周期信号。

严格周期信号可以写成 Fourier series：

$$
a(t)=\sum_n a_ne^{-in\omega_0t},
$$

所以只在离散频率 $n\omega_0$ 上有功率。一次孤立脉冲的 Fourier transform 则是连续函数：

$$
\widetilde{\mathbf a}(\omega)
=
\int_{-\infty}^{+\infty}
\mathbf a(t)e^{i\omega t}\,dt.
$$

因此单次碰撞产生连续谱。若周期信号只持续有限时间，其理想谱线也会展宽，宽度量级为观测时长的倒数。

### 3.2 两个极限为何由 $\omega\tau$ 决定？

碰撞持续时间为 $\tau$。在整个脉冲内，Fourier phase 改变量量级是

$$
\Delta\phi\sim\omega\tau.
$$

若 $\omega\tau\ll1$，则

$$
e^{i\omega t}\simeq1,
$$

不同时间片几乎同相相加：

$$
\widetilde{\mathbf a}(\omega)
\simeq
\int\mathbf a(t)dt
=
\Delta\mathbf v.
$$

若 $\omega\tau\gg1$，指数因子在一次碰撞中转过许多相位，不同时刻的复数贡献相互抵消，$|\widetilde{\mathbf a}(\omega)|$ 迅速减小。

分界因此是

$$
\boxed{
\omega_c\tau\sim1,
\qquad
\omega_c\sim\frac1\tau
}.
$$

### 3.3 为什么脉冲越短，频谱越宽？

对于从 $\omega=0$ 开始、到 $\omega_c$ 附近才下降的脉冲频谱，显著频率范围约为

$$
0\lesssim\omega\lesssim\omega_c.
$$

所以

$$
\Delta\omega\sim\omega_c\sim\frac1\tau.
$$

脉冲越短，函数在时间上变化越快，需要越高频的 Fourier 成分才能拼出这种快速变化。

“频谱宽”描述横轴上有显著功率的频率范围；“振幅大”描述纵轴在某个频率处的高度。两者不是同一个概念。

### 3.4 为什么低频谱近似平坦？

在 $\omega\tau\ll1$ 时，

$$
\widetilde{\mathbf a}(\omega)simeq\Delta\mathbf v,
$$

不再显式依赖 $\omega$。由于

$$
\frac{dW}{d\omega}
\propto
|\widetilde{\mathbf a}(\omega)|^2,
$$

便有

$$
\frac{dW}{d\omega}\simeq\text{constant}.
$$

把 $dW/d\omega$ 对 $\omega$ 作图得到近似水平线，因此称为平坦低频谱。这里的“平坦”专指所画的谱密度；若画 $\nu dW/d\nu$，图形并不平坦。

### 3.5 为什么频谱可以延伸到 $\omega\rightarrow0$？

在零频极限，

$$
\widetilde{\mathbf a}(0)
=
\int\mathbf a(t)dt
=
\Delta\mathbf v.
$$

散射后电子的速度方向改变，因此 $\Delta\mathbf v\neq0$。所以

$$
\lim_{\omega\to0}\frac{dW}{d\omega}
$$

是有限的。严格的 $\omega=0$ 不代表发出一个零能量光子；它描述任意低但非零频率的谱密度极限。真实等离子体在低频还受到 plasma cutoff 和 free-free self-absorption 限制。

---


## 4. RL §5.1：单次电子—离子碰撞

### 4.1 几何设置

把离子放在原点。令电子初始沿 $x$ 方向运动，在 $t=0$ 经过最近点 $y=b$。未受扰动的直线轨道是

$$
\mathbf r(t)=vt\,\hat{\mathbf x}+b\,\hat{\mathbf y}.
$$

电子与离子的距离为

$$
\boxed{
R(t)=\sqrt{b^2+v^2t^2}
}.
$$

离子电荷为 $+Ze$，电子电荷为 $-e$。电子受到的吸引力是

$$
\mathbf F(t)
=
-Ze^2
\frac{vt\,\hat{\mathbf x}+b\,\hat{\mathbf y}}
{(b^2+v^2t^2)^{3/2}}.
$$

因此

$$
\mathbf a(t)
=
-\frac{Ze^2}{m_e}
\frac{vt\,\hat{\mathbf x}+b\,\hat{\mathbf y}}
{(b^2+v^2t^2)^{3/2}}.
$$

### 4.2 平行加速度为何抵消？

平行于初始速度的分量为

$$
a_x(t)
=
-\frac{Ze^2}{m_e}
\frac{vt}{(b^2+v^2t^2)^{3/2}}.
$$

它是奇函数：$a_x(-t)=-a_x(t)$。接近离子时电子被向前拉，离开离子时被向后拉；直线近似下两部分抵消：

$$
\Delta v_x=\int_{-\infty}^{+\infty}a_x(t)dt=0.
$$

### 4.3 横向加速度为何累积？

横向分量为

$$
a_y(t)
=
-\frac{Ze^2}{m_e}
\frac{b}{(b^2+v^2t^2)^{3/2}}.
$$

它是偶函数。碰撞前后，离子都把电子朝原点方向拉，因此横向作用同方向累积。

横向速度改变是

$$
\Delta v_y
=
-\frac{Ze^2b}{m_e}
\int_{-\infty}^{+\infty}
\frac{dt}{(b^2+v^2t^2)^{3/2}}.
$$

令

$$
u=\frac{vt}{b},
\qquad
dt=\frac{b}{v}du,
$$

则

$$
\Delta v_y
=
-\frac{Ze^2}{m_ebv}
\int_{-\infty}^{+\infty}
\frac{du}{(1+u^2)^{3/2}}.
$$

因为

$$
\frac{d}{du}
\left(\frac{u}{\sqrt{1+u^2}}\right)
=
\frac{1}{(1+u^2)^{3/2}},
$$

所以积分为

$$
\left[
\frac{u}{\sqrt{1+u^2}}
\right]_{-\infty}^{+\infty}
=1-(-1)=2.
$$

最终

$$
\boxed{
\Delta v_y=-\frac{2Ze^2}{m_ebv},
\qquad
|\Delta v_\perp|=\frac{2Ze^2}{m_ebv}
}.
$$

### 4.4 为什么慢电子偏转更明显？

固定 $b$ 时，最近点附近的典型加速度是

$$
a_{\rm typ}\sim\frac{Ze^2}{m_eb^2},
$$

作用时间是

$$
\tau\sim\frac{b}{v}.
$$

所以

$$
\Delta v_\perp\sim a_{\rm typ}\tau
\sim\frac{Ze^2}{m_ebv}.
$$

小角度偏转角满足

$$
\theta\simeq\frac{|\Delta v_\perp|}{v}
=
\frac{2Ze^2}{m_ebv^2}.
$$

慢电子不仅受到力的时间更长，而且原本的前进速度更小，因此偏转角按 $v^{-2}$ 增大。

### 4.5 直线轨道近似的条件

需要

$$
|\Delta v_\perp|\ll v,
$$

即

$$
\frac{2Ze^2}{m_ebv^2}\ll1.
$$

若 $b$ 太小或 $v$ 太低，电子发生大角散射，直线近似失效。精确 Rutherford 散射满足

$$
\tan\frac{\Theta}{2}
=
\frac{Ze^2}{m_ebv^2},
$$

其小角极限与上式一致。

---


## 5. 从速度冲量到单次碰撞频谱

### 5.1 电偶极矩与 Fourier 约定

把重离子近似固定在原点，电子—离子系统的时变偶极矩是

$$
\mathbf d(t)=-e\mathbf r(t).
$$

因此

$$
\ddot{\mathbf d}(t)=-e\mathbf a(t).
$$

RL 采用

$$
\ddot{\mathbf d}(\omega)
=
\frac{1}{2\pi}
\int_{-\infty}^{+\infty}
\ddot{\mathbf d}(t)e^{i\omega t}dt.
$$

Parseval 定理与偶极辐射功率

$$
P(t)=\frac{2|\ddot{\mathbf d}(t)|^2}{3c^3}
$$

给出正频率能谱

$$
\boxed{
\frac{dW}{d\omega}
=
\frac{8\pi}{3c^3}
|\ddot{\mathbf d}(\omega)|^2
}.
$$

### 5.2 低频极限

若

$$
\omega\tau
=
\frac{\omega b}{v}
\ll1,
$$

则 $e^{i\omega t}\simeq1$，所以

$$
\ddot{\mathbf d}(\omega)
\simeq
-\frac{e}{2\pi}
\int\mathbf a(t)dt
=
-\frac{e}{2\pi}\Delta\mathbf v.
$$

代入频谱公式：

$$
\frac{dW}{d\omega}
=
\frac{8\pi}{3c^3}
\frac{e^2}{4\pi^2}
|\Delta\mathbf v|^2
=
\boxed{
\frac{2e^2}{3\pi c^3}|\Delta\mathbf v|^2
}.
$$

再代入

$$
|\Delta\mathbf v|simeq|\Delta v_\perp|
=
\frac{2Ze^2}{m_ebv},
$$

得到

$$
\boxed{
\frac{dW(b)}{d\omega}
=
\frac{8Z^2e^6}
{3\pi c^3m_e^2v^2b^2},
\qquad
\frac{\omega b}{v}\ll1
}.
$$

### 5.3 高频端为何下降？

给定 $b$ 的碰撞时间是 $\tau\sim b/v$。当

$$
\omega\gg\frac{v}{b},
$$

Fourier phase 在碰撞期间振荡多次，积分发生抵消。RL 用渐近阶跃近似写成

$$
\frac{dW(b)}{d\omega}simeq
\begin{cases}
\displaystyle
\frac{8Z^2e^6}{3\pi c^3m_e^2v^2b^2},
&b\ll v/\omega,\\[2mm]
0,&b\gg v/\omega.
\end{cases}
$$

真实频谱是平滑下降，不是严格的阶跃；这一差异由精确计算和 Gaunt factor 修正。

---


## 6. 从单次碰撞到单速电子群发射率

### 6.1 单位体积、单位时间的碰撞数

一个电子在时间 $dt$ 内前进 $vdt$。impact parameter 位于 $b$ 到 $b+db$ 的轨迹形成面积

$$
dA=2\pi bdb.
$$

电子扫过的体积是

$$
dV_{\rm sweep}=vdt\,2\pi bdb.
$$

若离子数密度为 $n_i$，每个电子每单位时间的相应碰撞数为

$$
d\Gamma=n_iv\,2\pi bdb.
$$

再乘电子数密度 $n_e$，单位体积、单位时间的碰撞数是

$$
\boxed{
\frac{dN_{\rm coll}}{dVdt}
=
n_en_iv\,2\pi bdb
}.
$$

### 6.2 乘上单次碰撞频谱

$$
d\epsilon_\omega^{\rm ff}
=
\left(n_en_iv\,2\pi bdb\right)
\frac{dW(b)}{d\omega}.
$$

代入单次碰撞结果：

$$
d\epsilon_\omega^{\rm ff}
=
n_en_iv\,2\pi bdb
\frac{8Z^2e^6}
{3\pi c^3m_e^2v^2b^2}.
$$

化简得到

$$
\boxed{
d\epsilon_\omega^{\rm ff}
=
\frac{16Z^2e^6}{3c^3m_e^2v}
n_en_i\frac{db}{b}
}.
$$

所以

$$
\epsilon_\omega^{\rm ff}
=
\frac{16Z^2e^6}{3c^3m_e^2v}
n_en_i
\int_{b_{\min}}^{b_{\max}}\frac{db}{b}.
$$

积分结果为

$$
\boxed{
\epsilon_\omega^{\rm ff}
=
\frac{16Z^2e^6}{3c^3m_e^2v}
n_en_i
\ln\left(\frac{b_{\max}}{b_{\min}}\right)
}.
$$

### 6.3 为什么每个对数区间贡献相同？

单次辐射按 $b^{-2}$ 下降，但圆环中的碰撞数按 $bdb$ 增加：

$$
\frac{dW}{d\omega}\times2\pi bdb
\propto
\frac{1}{b^2}bdb
=
\frac{db}{b}
=
d\ln b.
$$

因此 $[b,10b]$、$[10b,100b]$ 等相同宽度的对数区间贡献近似相同。这也使上下截止只以对数形式影响结果。

---


## 7. $b_{\min}$、$b_{\max}$ 与 Gaunt factor

### 7.1 最大 impact parameter

固定观测频率 $\omega$，需要

$$
\omega\frac{b}{v}\lesssim1.
$$

所以

$$
\boxed{
b_{\max}\sim\frac{v}{\omega}
}.
$$

更远的碰撞变化太慢，在该频率上的 Fourier 贡献被相位抵消。

### 7.2 经典最小尺度

小角近似在 $\Delta v_\perp\sim v$ 时失效。数量级上

$$
b_{\min,\rm cl}\sim\frac{Ze^2}{m_ev^2}.
$$

RL 的具体渐近匹配给出一个相差 $O(1)$ 系数的定义；这个常数在对数中并不敏感。

### 7.3 量子最小尺度

电子的 de Broglie 波长量级是

$$
\lambda_{\rm dB}\sim\frac{\hbar}{m_ev}.
$$

当 $b$ 与此相当时，经典确定轨道不再适用，所以

$$
b_{\min,\rm qm}\sim\frac{\hbar}{m_ev}.
$$

### 7.4 Gaunt factor

在简单对数近似中定义

$$
g_{\rm ff}(v,\omega)
\simeq
\frac{\sqrt3}{\pi}
\ln\left(\frac{b_{\max}}{b_{\min}}\right).
$$

即

$$
\ln\left(\frac{b_{\max}}{b_{\min}}\right)
=
\frac{\pi}{\sqrt3}g_{\rm ff}.
$$

代入 §6 的结果：

$$
\boxed{
\epsilon_\omega^{\rm ff}
=
\frac{16\pi e^6}{3\sqrt3\,c^3m_e^2v}
Z^2n_en_i g_{\rm ff}(v,\omega)
}.
$$

Gaunt factor 不是额外的发射机制；它是经典近似相对于精确量子结果的无量纲修正，并保留缓慢的频率和温度依赖。

---


## 8. RL §5.2：Maxwell 热平均与热轫致辐射

### 8.1 Maxwell 速度分布

热电子的三维速度分布是

$$
f(\mathbf v)d^3v
=
\left(\frac{m_e}{2\pi kT}\right)^{3/2}
e^{-m_ev^2/2kT}d^3v.
$$

对各向同性分布，$d^3v=4\pi v^2dv$，所以速度大小分布为

$$
P(v)dv
=
4\pi
\left(\frac{m_e}{2\pi kT}\right)^{3/2}
v^2e^{-m_ev^2/2kT}dv.
$$

### 8.2 为什么积分下限不是零？

产生频率 $\nu$ 的单个光子需要能量 $h\nu$。忽略重离子 recoil，能量守恒要求

$$
\frac12m_ev^2\ge h\nu.
$$

因此

$$
\boxed{
v_{\min}=\sqrt{\frac{2h\nu}{m_e}}
}.
$$

这是 photon discreteness 的量子限制。若使用角频率，应写 $\hbar\omega$，因为 $h\nu=\hbar\omega$。

### 8.3 指数截止如何产生？

单速电子群的主要速度依赖是 $1/v$。因此热平均包含

$$
\int_{v_{\min}}^\infty
\frac1vP(v)dv
\propto
\int_{v_{\min}}^\infty
v e^{-m_ev^2/2kT}dv.
$$

令 $A=m_e/(2kT)$：

$$
\int_{v_{\min}}^\infty ve^{-Av^2}dv
=
\frac{1}{2A}e^{-Av_{\min}^2}
=
\frac{kT}{m_e}e^{-h\nu/kT}.
$$

所以高频指数因子是

$$
\boxed{e^{-h\nu/kT}}.
$$

物理上，产生高能光子需要 Maxwell 分布高能尾部的电子。热截止频率量级为

$$
\boxed{\nu_{\rm th}\sim\frac{kT}{h}}.
$$

### 8.4 $T^{-1/2}$ 从哪里来？

把 Maxwell 归一化与速度积分合并：

$$
\left(\frac{m_e}{kT}\right)^{3/2}
\frac{kT}{m_e}
\propto
T^{-1/2}.
$$

等价地，典型热速度

$$
v_{\rm th}\sim\sqrt{\frac{kT}{m_e}}
$$

而单速发射率按 $1/v$ 变化，所以

$$
\epsilon_\nu^{\rm ff}\propto v_{\rm th}^{-1}\propto T^{-1/2}
$$

，前提是固定低频 $h\nu\ll kT$，使指数因子近似为 1。

### 8.5 完整频率发射率

符号形式是

$$
\epsilon_\nu^{\rm ff}
=
\frac{2^5\pi e^6}{3m_ec^3}
\left(\frac{2\pi}{3km_e}\right)^{1/2}
T^{-1/2}Z^2n_en_i
e^{-h\nu/kT}\bar g_{\rm ff}.
$$

代入 Gaussian-cgs 常数得到

$$
\boxed{
\epsilon_\nu^{\rm ff}
=
6.8\times10^{-38}
Z^2n_en_iT^{-1/2}
e^{-h\nu/kT}\bar g_{\rm ff}
}.
$$

数值系数不是单纯单位换算；它包含 $e,m_e,c,k,\pi$、Maxwell 归一化以及 $d\omega=2\pi d\nu$ 的转换。

### 8.6 固定低频与总功率的温度依赖为何相反？

固定低频 $h\nu\ll kT$：

$$
\epsilon_\nu^{\rm ff}\propto T^{-1/2}.
$$

但频谱宽度延伸至 $\nu_{\rm th}\sim kT/h\propto T$。因此粗略地

$$
\epsilon^{\rm ff}
=
\int\epsilon_\nu^{\rm ff}d\nu
\sim
T^{-1/2}\times T
=
T^{1/2}.
$$

精确频率积分给出

$$
\boxed{
\epsilon^{\rm ff}
=
1.4\times10^{-27}
T^{1/2}Z^2n_en_i\bar g_B
}.
$$

固定低频的谱密度下降与 bolometric luminosity 上升并不矛盾；高温把辐射铺到更宽、更高频的范围。

---


## 9. RL §5.3：自由—自由吸收与 Kirchhoff 定律

### 9.1 Kirchhoff 定律的适用条件

严格热力学平衡中

$$
I_\nu=B_\nu(T),
\qquad
\frac{dI_\nu}{ds}=0.
$$

代入辐射转移方程

$$
\frac{dI_\nu}{ds}=j_\nu-\alpha_\nu I_\nu
$$

得到

$$
\boxed{
j_\nu=\alpha_\nu B_\nu(T),
\qquad
S_\nu=\frac{j_\nu}{\alpha_\nu}=B_\nu(T)
}.
$$

在天体物理中，可在 LTE 下局域使用这一关系。对自由—自由过程，关键条件是：

- 电子近似 Maxwell 热分布；
- 发射与 inverse bremsstrahlung 满足 detailed balance；
- $\alpha_\nu$ 是扣除 stimulated emission 后的净吸收系数；
- 物质可以由局域温度 $T$ 描述。

Kirchhoff 关系不要求介质光厚。光学厚度决定实际 $I_\nu$ 是否接近 $B_\nu$，而不是决定 $S_\nu=B_\nu$ 是否成立。

非热电子、non-LTE level population、外部辐射泵浦、population inversion 或把散射当作真正吸收时，不能直接使用简单的 $j_\nu=\alpha_\nu B_\nu$。

### 9.2 从发射率推导吸收系数

角度积分发射率与 emission coefficient 的关系是

$$
j_\nu^{\rm ff}
=
\frac{\epsilon_\nu^{\rm ff}}{4\pi}
=
\frac{6.8\times10^{-38}}{4\pi}
T^{-1/2}Z^2n_en_i
e^{-h\nu/kT}\bar g_{\rm ff}.
$$

Planck function 是

$$
B_\nu(T)
=
\frac{2h\nu^3}{c^2}
\frac{1}{e^{h\nu/kT}-1}.
$$

因此

$$
\alpha_\nu^{\rm ff}
=
\frac{j_\nu^{\rm ff}}{B_\nu(T)}.
$$

令 $x=h\nu/kT$，代入后

$$
\alpha_\nu^{\rm ff}
=
\frac{6.8\times10^{-38}c^2}{8\pi h}
T^{-1/2}Z^2n_en_i\nu^{-3}
e^{-x}(e^x-1)\bar g_{\rm ff}.
$$

由于

$$
e^{-x}(e^x-1)=1-e^{-x},
$$

且

$$
\frac{6.8\times10^{-38}c^2}{8\pi h}
\simeq3.7\times10^8,
$$

得到

$$
\boxed{
\alpha_\nu^{\rm ff}
=
3.7\times10^8
T^{-1/2}Z^2n_en_i\nu^{-3}
\left(1-e^{-h\nu/kT}\right)
\bar g_{\rm ff}
}.
$$

### 9.3 低频极限

当 $h\nu\ll kT$，

$$
1-e^{-h\nu/kT}
\simeq
\frac{h\nu}{kT}.
$$

所以

$$
\alpha_\nu^{\rm ff}
\simeq
3.7\times10^8\frac{h}{k}
T^{-3/2}Z^2n_en_i\nu^{-2}\bar g_{\rm ff}.
$$

利用

$$
3.7\times10^8\frac{h}{k}\simeq0.018,
$$

得到

$$
\boxed{
\alpha_\nu^{\rm ff}
\simeq
0.018\,
T^{-3/2}Z^2n_en_i\nu^{-2}\bar g_{\rm ff}
}.
$$

低频 free-free absorption 很强，因此热等离子体通常先在低频变得光厚。

### 9.4 散射为何不同？

Kirchhoff 关系在这里连接真正的热发射与真正吸收。若另有相干各向同性散射系数 $\sigma_\nu$，总源函数为

$$
S_\nu
=
\frac{\alpha_\nu B_\nu+\sigma_\nu J_\nu}
{\alpha_\nu+\sigma_\nu}.
$$

散射只是重新分配辐射方向或频率，不能一般地写成 $j_\nu^{\rm scat}=\sigma_\nu B_\nu$。

---


## 10. 辐射转移中的光薄、光厚与净冷却

### 10.1 $\epsilon^{\rm ff}$ 是否只能在光薄介质中使用？

不是。$\epsilon^{\rm ff}$ 描述单位体积、单位时间局域产生的自由—自由辐射；在光薄和光厚介质中都可以计算。

只在光薄极限成立的是

$$
\boxed{
L_{\rm escape}\simeq\int_V\epsilon^{\rm ff}dV
}.
$$

它假设产生的光子几乎全部逃逸。

### 10.2 均匀等温介质的形式解

若无背景入射，$S_\nu=B_\nu(T)$，则

$$
\boxed{
I_\nu
=
B_\nu(T)(1-e^{-\tau_\nu})
}.
$$

光薄时

$$
I_\nu\simeq B_\nu\tau_\nu=j_\nu L,
$$

所以可以直接累加体积发射。

光厚时

$$
I_\nu\simeq B_\nu(T),
$$

内部虽继续发射，但绝大部分光子被重新吸收，逃逸辐射由接近 $\tau_\nu\sim1$ 的表层控制。

### 10.3 局域净冷却率

气体的局域净辐射冷却率是

$$
q_{\rm net}
=
4\pi\int_0^\infty
\left(j_\nu-\alpha_\nu J_\nu\right)d\nu.
$$

光薄且外部辐射弱时，$J_\nu\simeq0$：

$$
q_{\rm net}\simeq4\pi\int j_\nu d\nu
=
\epsilon^{\rm ff}.
$$

光厚、接近 LTE 时，$J_\nu\simeq B_\nu=S_\nu$：

$$
j_\nu-\alpha_\nu J_\nu
\simeq
\alpha_\nu(B_\nu-J_\nu)
\simeq0.
$$

因此 $\epsilon^{\rm ff}$ 在光厚内部不是净冷却率；能量主要通过辐射扩散输运到表面后逃逸。

---


## 11. 狭义相对论预备：RL §4.1、§4.2、§4.6

本周 §5.1–§5.3 主要是非相对论结果；下一节相对论轫致辐射需要以下背景。

### 11.1 Lorentz factor 与坐标变换

$$
\beta=\frac{v}{c},
\qquad
\gamma=\frac{1}{\sqrt{1-\beta^2}}.
$$

沿 $x$ 方向的 Lorentz boost 为

$$
x'=\gamma(x-vt),
\qquad
t'=\gamma\left(t-\frac{vx}{c^2}\right).
$$

$t'$ 中的 $vx/c^2$ 表明同时性依赖参考系。

### 11.2 四矢量

$$
x^\mu=(ct,\mathbf x),
\qquad
p^\mu=\left(\frac{E}{c},\mathbf p\right).
$$

能量—动量不变量是

$$
\boxed{E^2-p^2c^2=m^2c^4}.
$$

### 11.3 匀速运动电荷的场

在电荷静止系中只有 Coulomb electric field。变换到实验室系后：

- 横向电场增强；
- 纵向电场减弱；
- 出现磁场；
- Gaussian-cgs 中 $\mathbf B=\boldsymbol\beta\times\mathbf E$。

高速电荷的场被压缩到垂直运动方向的窄角区域。RL §5.4 会把高速离子的场在电子静止系中理解成短促的电磁脉冲，再用 scattering picture 处理相对论轫致辐射。

---


## 12. 习题 3.6：相干与非相干发射

### 12.1 题目设置

有 $N$ 个辐射粒子。每个粒子产生相同形状的电场脉冲 $E_0(t)$，到达时间是 $t_i$：

![时间域脉冲及其 Fourier 频谱的三维示意图](/learning/radiation/problem-3-6-time-frequency-illustration.png)

*图 12.1：Problem 3.6 的时域—频域示意。中间的彩色曲线表示不同到达时间的电场脉冲；左侧展示频域图像，右侧展示时域图像。图片保留原作者水印与署名。来源：[知乎专栏原文](https://zhuanlan.zhihu.com/p/19763358)。*

$$
E(t)=\sum_{i=1}^{N}E_0(t-t_i).
$$

采用 RL Fourier 约定

$$
\widehat E(\omega)
=
\frac{1}{2\pi}\int_{-\infty}^{+\infty}
E(t)e^{i\omega t}dt.
$$

### 12.2 (a) 时间平移对应频域相位

对第 $i$ 个脉冲，令 $u=t-t_i$，则 $t=u+t_i$：

$$
\begin{aligned}
\widehat E_i(\omega)
&=
\frac{1}{2\pi}\int E_0(t-t_i)e^{i\omega t}dt\\
&=
e^{i\omega t_i}
\frac{1}{2\pi}\int E_0(u)e^{i\omega u}du\\
&=
e^{i\omega t_i}\widehat E_0(\omega).
\end{aligned}
$$

利用线性性：

$$
\boxed{
\widehat E(\omega)
=
\widehat E_0(\omega)
\sum_{i=1}^{N}e^{i\omega t_i}
}.
$$

相位因子模长为 1，所以时间平移不改变单个脉冲的频谱强度。

### 12.3 (b) 随机相位平均

$$
\begin{aligned}
\left|\sum_i e^{i\omega t_i}\right|^2
&=
\left(\sum_i e^{i\omega t_i}\right)
\left(\sum_j e^{-i\omega t_j}\right)\\
&=
\sum_i\sum_j e^{i\omega(t_i-t_j)}\\
&=
N+\sum_{i\ne j}e^{i\omega(t_i-t_j)}.
\end{aligned}
$$

$i=j$ 的 $N$ 个对角项都等于 1。对独立随机到达时间，$\phi_{ij}=\omega(t_i-t_j)$ 是随机相位，

$$
\left\langle e^{i\phi_{ij}}\right\rangle
=
\langle\cos\phi_{ij}\rangle
+i\langle\sin\phi_{ij}\rangle
=0.
$$

所以

$$
\boxed{
\left\langle
\left|\sum_i e^{i\omega t_i}\right|^2
\right\rangle
=N
}.
$$

$1/\sqrt2$ 是 $\cos\phi$ 或 $\sin\phi$ 的 RMS，不是其平均值；均匀随机相位的平均值为零。

### 12.4 (c) 非相干频谱

$$
\boxed{
\left\langle|\widehat E(\omega)|^2\right\rangle
=
N|\widehat E_0(\omega)|^2
}.
$$

因此

$$
\boxed{
\left\langle\frac{dW}{d\omega}\right\rangle
=
N\frac{dW_0}{d\omega}
}.
$$

结果不要求脉冲在时间上互不重叠；关键是交叉项的相位是否随机。

### 12.5 (d) 相干极限

若所有粒子位于远小于波长的区域并同时发射，则传播与发射相位差都可以忽略：

$$
t_i\simeq t_0.
$$

于是

$$
\widehat E(\omega)
=
N e^{i\omega t_0}\widehat E_0(\omega).
$$

因此

$$
\boxed{
|\widehat E(\omega)|^2
=
N^2|\widehat E_0(\omega)|^2
}
$$

以及

$$
\boxed{
\frac{dW}{d\omega}
=
N^2\frac{dW_0}{d\omega}
}.
$$

非相干时是强度相加，得到 $N$；相干时先在电场振幅层面相加，得到 $N$ 倍，再取平方得到 $N^2$。

---


## 13. 习题 5.1：等温电离氢球的塌缩

### 13.1 题目设置与数密度

一个完全电离的氢球保持：

- 总质量 $M_0$ 不变；
- 均匀但随时间变化的密度；
- 等温温度 $T_0$ 不变；
- 半径 $R(t)$ 随塌缩减小。

球体积为

$$
V(t)=\frac{4\pi}{3}R(t)^3.
$$

质量密度为

$$
\rho(t)=\frac{M_0}{V(t)}
=
\frac{3M_0}{4\pi R(t)^3}.
$$

完全电离氢中，忽略电子质量，

$$
\boxed{
n_e(t)=n_i(t)
=
\frac{\rho(t)}{m_p}
=
\frac{3M_0}{4\pi m_pR(t)^3}
}.
$$

“均匀密度”表示同一时刻球内各处密度相同，不表示密度随时间保持不变。

### 13.2 (a) 光薄阶段

完全电离氢有 $Z=1$。频率积分的自由—自由体发射率为

$$
\epsilon^{\rm ff}
=
C_{\rm ff}\bar g_B T_0^{1/2}n_en_i,
\qquad
C_{\rm ff}=1.4\times10^{-27}.
$$

光薄时光子几乎全部逃逸：

$$
L_{\rm thin}=\epsilon^{\rm ff}V.
$$

代入 $n_e=n_i=3M_0/(4\pi m_pR^3)$ 与 $V=4\pi R^3/3$：

$$
\begin{aligned}
L_{\rm thin}(t)
&=
C_{\rm ff}\bar g_BT_0^{1/2}
\left(\frac{3M_0}{4\pi m_pR^3}\right)^2
\frac{4\pi R^3}{3}\\
&=
\boxed{
\frac{3C_{\rm ff}\bar g_B}{4\pi m_p^2}
\frac{M_0^2T_0^{1/2}}{R(t)^3}
}.
\end{aligned}
$$

因此

$$
\boxed{
L_{\rm thin}\propto M_0^2T_0^{1/2}R^{-3}
}.
$$

塌缩时 $n_en_i\propto R^{-6}$，体积只按 $R^3$ 缩小，所以总光度按 $R^{-3}$ 增大。

### 13.3 (b) 光厚阶段

当承担主要能量的频段光厚且辐射接近热化，表面通量为

$$
F=\sigma_{\rm SB}T_0^4.
$$

球表面积为 $4\pi R^2$，所以

$$
\boxed{
L_{\rm thick}(t)
=
4\pi R(t)^2\sigma_{\rm SB}T_0^4
}.
$$

固定 $T_0$ 时

$$
\boxed{L_{\rm thick}\propto R^2}.
$$

继续塌缩会使发光表面积减少，因此光度下降。题目没有给 $R(t)$ 的动力学方程，所以保留 $R(t)$ 就是所求的时间依赖。

### 13.4 (c) 转变时刻 $t_1$

用光薄和光厚两个极限的连续匹配估计转变，令

$$
L_{\rm thin}(t_1)
\simeq
L_{\rm thick}(t_1).
$$

记 $R_1=R(t_1)$：

$$
\frac{3C_{\rm ff}\bar g_B}{4\pi m_p^2}
\frac{M_0^2T_0^{1/2}}{R_1^3}
=
4\pi R_1^2\sigma_{\rm SB}T_0^4.
$$

所以

$$
\boxed{
[R(t_1)]^5
=
\frac{3C_{\rm ff}\bar g_B}
{16\pi^2m_p^2\sigma_{\rm SB}}
M_0^2T_0^{-7/2}
}.
$$

等价地，

$$
\boxed{
R(t_1)
=
\left[
\frac{3C_{\rm ff}\bar g_B}
{16\pi^2m_p^2\sigma_{\rm SB}}
M_0^2T_0^{-7/2}
\right]^{1/5}
}.
$$

这给出

$$
R_1\propto
\bar g_B^{1/5}M_0^{2/5}T_0^{-7/10}.
$$

严格地说，$\alpha_\nu^{\rm ff}$ 随频率变化，不同频率在不同半径达到 $\tau_\nu\sim1$。上式是对 bolometric 光度转变位置的数量级匹配，不代表所有频率同时突然变厚。

### 13.5 (d) 定性光度曲线

随着 $R(t)$ 下降，

$$
L(t)\simeq
\begin{cases}
\displaystyle
\frac{3C_{\rm ff}\bar g_B}{4\pi m_p^2}
M_0^2T_0^{1/2}R(t)^{-3},
&\text{optically thin},\\[3mm]
\displaystyle
4\pi\sigma_{\rm SB}T_0^4R(t)^2,
&\text{optically thick}.
\end{cases}
$$

光度先随塌缩增加，在光薄到光厚的过渡附近达到最大，然后下降。真实过渡是平滑的；具体随时间的斜率取决于未给出的 $R(t)$。

题目强制假设温度始终为 $T_0$。真实塌缩气体变得光厚后通常因冷却受阻而升温，但这超出本题模型。

---


## 14. English assignment-ready solutions

### 14.1 Problem 3.6: incoherent and coherent emission

Let

$$
E(t)=\sum_{i=1}^{N}E_0(t-t_i),
$$

and adopt the Fourier convention

$$
\widehat E(\omega)=\frac{1}{2\pi}
\int_{-\infty}^{\infty}E(t)e^{i\omega t}dt.
$$

For each pulse, the substitution $u=t-t_i$ gives

$$
\widehat E_i(\omega)
=e^{i\omega t_i}\widehat E_0(\omega).
$$

Therefore,

$$
\boxed{
\widehat E(\omega)
=\widehat E_0(\omega)
\sum_{i=1}^{N}e^{i\omega t_i}
}.
$$

The squared phase sum is

$$
\begin{aligned}
\left|\sum_{i=1}^{N}e^{i\omega t_i}\right|^2
&=\sum_{i=1}^{N}\sum_{j=1}^{N}
e^{i\omega(t_i-t_j)}\\
&=N+\sum_{i\ne j}e^{i\omega(t_i-t_j)}.
\end{aligned}
$$

For independent random arrival times, the cross terms have random phases and vanish upon averaging:

$$
\left\langle e^{i\omega(t_i-t_j)}\right\rangle=0,
\qquad i\ne j.
$$

Hence,

$$
\boxed{
\left\langle|\widehat E(\omega)|^2\right\rangle
=N|\widehat E_0(\omega)|^2
},
$$

and the measured spectrum is $N$ times that of one pulse. This result does not require the pulses to be temporally separated; it requires their relative phases to be random.

If all particles occupy a region much smaller than a wavelength and emit simultaneously, their phases are equal. Setting $t_i=t_0$ gives

$$
\widehat E(\omega)
=Ne^{i\omega t_0}\widehat E_0(\omega),
$$

so

$$
\boxed{
|\widehat E(\omega)|^2
=N^2|\widehat E_0(\omega)|^2
}.
$$

Thus incoherent intensities scale as $N$, whereas coherent electric-field amplitudes add before squaring and produce the $N^2$ scaling.

### 14.2 Problem 5.1: an isothermally collapsing ionized hydrogen sphere

For a uniform sphere of mass $M_0$ and radius $R(t)$,

$$
V=\frac{4\pi}{3}R^3,
\qquad
n_e=n_i=\frac{3M_0}{4\pi m_pR^3}.
$$

For ionized hydrogen, $Z=1$, and the frequency-integrated free-free emissivity is

$$
\epsilon^{\rm ff}
=C_{\rm ff}\bar g_BT_0^{1/2}n_en_i,
\qquad
C_{\rm ff}=1.4\times10^{-27}
$$

in cgs units. While the sphere is optically thin, all locally emitted radiation escapes, so

$$
\begin{aligned}
L_{\rm thin}(t)
&=\epsilon^{\rm ff}V\\
&=\boxed{
\frac{3C_{\rm ff}\bar g_B}{4\pi m_p^2}
\frac{M_0^2T_0^{1/2}}{R(t)^3}
}.
\end{aligned}
$$

Once the sphere is optically thick and its emergent radiation is thermalized, its luminosity is the blackbody surface luminosity,

$$
\boxed{
L_{\rm thick}(t)
=4\pi R(t)^2\sigma_{\rm SB}T_0^4
}.
$$

An estimate of the transition time $t_1$ follows by matching the optically thin and thick limits. With $R_1=R(t_1)$,

$$
\frac{3C_{\rm ff}\bar g_B}{4\pi m_p^2}
\frac{M_0^2T_0^{1/2}}{R_1^3}
=4\pi R_1^2\sigma_{\rm SB}T_0^4,
$$

or

$$
\boxed{
[R(t_1)]^5
=
\frac{3C_{\rm ff}\bar g_B}
{16\pi^2m_p^2\sigma_{\rm SB}}
M_0^2T_0^{-7/2}
}.
$$

As the sphere contracts, the optically thin luminosity rises as $R^{-3}$. Near the transition it reaches a maximum. In the optically thick regime, the fixed-temperature blackbody luminosity falls as $R^2$. The exact shape as a function of time depends on the unspecified collapse law $R(t)$, and the transition is smooth because the free-free optical depth depends on frequency.

---


## 15. 量纲、极限与常见混淆

### 15.1 单次频谱的量纲

Gaussian-cgs 中 $[e^2]={\rm erg\,cm}$，所以

$$
\left[
\frac{e^2}{c^3}|\Delta v|^2
\right]
=
{\rm erg\,s}
=
\left[\frac{dW}{d\omega}\right].
$$

### 15.2 $j_\nu$、$\epsilon_\nu$ 与 $L_\nu$

$$
\epsilon_\nu=4\pi j_\nu
$$

只适用于各向同性发射。$j_\nu$ 每单位立体角，$\epsilon_\nu$ 已经对 $4\pi$ 积分；光薄时再对体积积分得到 $L_\nu$。

### 15.3 $S_\nu=B_\nu$ 不等于 $I_\nu=B_\nu$

LTE 热过程给出

$$
S_\nu=\frac{j_\nu}{\alpha_\nu}=B_\nu.
$$

实际强度仍是

$$
I_\nu
=
I_{\nu,0}e^{-\tau_\nu}
+B_\nu(1-e^{-\tau_\nu}).
$$

只有 $\tau_\nu\gg1$ 时才趋于 $B_\nu$。

### 15.4 “平坦频谱”的纵轴必须说明

低频平坦指

$$
\frac{dW}{d\omega}\simeq\text{constant}
$$

或等价地 $dW/d\nu\simeq\text{constant}$。由于 $dW/d\lambda$ 含有变量变换 Jacobian，改用波长作横轴时不会保持平坦。

### 15.5 相干 $N^2$ 与非相干 $N$

非相干情况并不是没有交叉项，而是交叉项在 ensemble/time average 中抵消。相干情况下交叉项全部保留：

$$
N^2=N+N(N-1).
$$

### 15.6 适用范围检查

- $v\ll c$：否则需要 RL §5.4 的相对论修正。
- $h\nu\lesssim kT$：低频近似；$h\nu\gg kT$ 时指数截止。
- $\tau_\nu\ll1$：只有此时 $L\simeq\epsilon V$。
- $\tau_\nu\gg1$ 且 LTE：此时 emergent intensity 接近 $B_\nu$。
- $g_{\rm ff}\sim O(1)$ 但不严格常数；精密计算应保留其频率和温度依赖。

---


## 16. 复习清单与核心公式

### 16.1 应该能够独立解释

- 为什么慢电子在相同 $b$ 下偏转更明显。
- 为什么单次非周期碰撞产生连续谱。
- 为什么 $\omega\tau\ll1$ 时低频谱平坦。
- 为什么短脉冲对应宽频谱，而不是更小的频率。
- 为什么 impact parameter 积分给出 $\ln(b_{\max}/b_{\min})$。
- 为什么高频热谱包含 $e^{-h\nu/kT}$。
- 为什么固定低频 $\epsilon_\nu\propto T^{-1/2}$，但 bolometric $\epsilon\propto T^{1/2}$。
- Kirchhoff 定律的局域 LTE 条件，以及 $S_\nu=B_\nu$ 与 $I_\nu=B_\nu$ 的区别。
- 为什么 $\epsilon^{\rm ff}$ 在光厚区仍是局域发射率，却不再是净冷却率。
- 为什么非相干功率按 $N$、相干功率按 $N^2$ 标度。

### 16.2 可以直接记住的公式

$$
\tau\sim\frac{b}{v},
\qquad
\omega_c\sim\frac{v}{b}.
$$

$$
|\Delta v_\perp|
=
\frac{2Ze^2}{m_ebv}.
$$

$$
\frac{dW(b)}{d\omega}
=
\frac{8Z^2e^6}
{3\pi c^3m_e^2v^2b^2},
\qquad
\omega b/v\ll1.
$$

$$
\epsilon_\nu^{\rm ff}
=
6.8\times10^{-38}
Z^2n_en_iT^{-1/2}
e^{-h\nu/kT}\bar g_{\rm ff}.
$$

$$
\epsilon^{\rm ff}
=
1.4\times10^{-27}
T^{1/2}Z^2n_en_i\bar g_B.
$$

$$
\alpha_\nu^{\rm ff}
=
3.7\times10^8
T^{-1/2}Z^2n_en_i\nu^{-3}
(1-e^{-h\nu/kT})\bar g_{\rm ff}.
$$

$$
\alpha_\nu^{\rm ff}
\simeq
0.018T^{-3/2}Z^2n_en_i\nu^{-2}\bar g_{\rm ff},
\qquad h\nu\ll kT.
$$

$$
I_\nu
=
I_{\nu,0}e^{-\tau_\nu}
+S_\nu(1-e^{-\tau_\nu}).
$$

$$
\left\langle|\widehat E|^2\right\rangle_{\rm incoh}
=N|\widehat E_0|^2,
\qquad
|\widehat E|^2_{\rm coh}
=N^2|\widehat E_0|^2.
$$

### 16.3 最短物理总结

$$
\boxed{
\text{Coulomb 加速度脉冲}
\rightarrow
\text{连续低频平谱}
\rightarrow
\text{对 }b\text{ 积分得到对数}
\rightarrow
\text{Maxwell 平均得到 }T^{-1/2}e^{-h\nu/kT}
}.
$$

$$
\boxed{
j_\nu^{\rm ff},\alpha_\nu^{\rm ff}
\rightarrow
S_\nu=B_\nu
\rightarrow
\tau_\nu\ll1\text{ 时看体积发射，}
\tau_\nu\gg1\text{ 时看表面热辐射}
}.
$$

---


## 17. 参考资料

1. Rybicki, G. B. & Lightman, A. P., *Radiative Processes in Astrophysics*, Chapter 3, Problem 3.6; Chapter 4, §§4.1, 4.2, 4.6; Chapter 5, §§5.1–5.3 and Problem 5.1.
2. AstroBaki, [Thermal Bremsstrahlung](https://casper.astro.berkeley.edu/astrobaki/index.php/Thermal_Bremsstrahlung).
3. AST1440 — Radiation course reading notes, non-relativistic bremsstrahlung week.
