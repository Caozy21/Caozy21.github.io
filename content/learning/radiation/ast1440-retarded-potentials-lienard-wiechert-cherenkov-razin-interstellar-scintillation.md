---
title: "AST1440：推迟势、Liénard–Wiechert 场、Cherenkov/Razin 效应与星际闪烁"
description: "从 Maxwell 方程和 Lorenz gauge 推导推迟势与 Liénard–Wiechert 场，解释介质中的 Cherenkov/Razin 效应、等离子体相位屏，并完整求解双脉冲星闪烁的角分辨率与空间分辨率。"
date: "2026-10-08"
tags: ["AST1440","Retarded potentials","Lienard-Wiechert","Cherenkov radiation","Razin effect","Scintillation"]
order: 9
draft: false
---

# AST1440：推迟势、Liénard–Wiechert 场、Cherenkov/Razin 效应与星际闪烁

> 课程：AST1440 — Radiation  
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§2.5（印刷页 69–71）、§3.1–3.2（印刷页 77–82）、§8.3（印刷页 232–235）；等离子体折射背景参见 §8.1。  
> 整理日期：2026 年 10 月 8 日。  
> 本文按物理依赖关系整理本次预习和讨论中的全部追问：Faraday 定律、电磁势、gauge freedom、Lorenz gauge、势的波动方程、推迟势的物理意义、运动点电荷如何产生 Liénard–Wiechert 势、$1/\kappa$ 的 Jacobian 来源、velocity field 与 radiation field 的区别、介质中 $\kappa$ 的改变、Cherenkov cone 的几何和相干条件、Lorentz factor 与 beaming angle、Razin effect，以及把星际等离子体屏看作干涉仪时的分辨率估算。

## 目录

1. [本次预习的逻辑主线](#1-本次预习的逻辑主线)
2. [统一符号、单位制、相位约定与假设](#2-统一符号单位制相位约定与假设)
3. [从 Maxwell 方程到电磁势](#3-从-maxwell-方程到电磁势)
4. [Gauge freedom 与 Lorenz gauge](#4-gauge-freedom-与-lorenz-gauge)
5. [势的波动方程如何得到](#5-势的波动方程如何得到)
6. [推迟势：为什么场取决于源的过去](#6-推迟势为什么场取决于源的过去)
7. [运动点电荷与 Liénard–Wiechert 势](#7-运动点电荷与-liénardwiechert-势)
8. [Velocity field 与 radiation field](#8-velocity-field-与-radiation-field)
9. [介质为什么把 $\kappa$ 改成 $1-\beta n_r\cos\theta$](#9-介质为什么把-kappa-改成-1-beta-n_rcostheta)
10. [Cherenkov cone 的波前几何与相干条件](#10-cherenkov-cone-的波前几何与相干条件)
11. [Lorentz factor、相对论性 beaming 与 $\theta_b$](#11-lorentz-factor相对论性-beaming-与-theta_b)
12. [冷等离子体中的 Razin effect](#12-冷等离子体中的-razin-effect)
13. [等离子体相位屏、相位积累与偏折角](#13-等离子体相位屏相位积累与偏折角)
14. [双脉冲星闪烁题：完整数值推导](#14-双脉冲星闪烁题完整数值推导)
15. [量纲检查、极限检验与常见混淆](#15-量纲检查极限检验与常见混淆)
16. [English assignment-ready solution](#16-english-assignment-ready-solution)
17. [复习清单与参考资料](#17-复习清单与参考资料)

---

## 1. 本次预习的逻辑主线

### 1.1 教材部分

指定章节看起来分散，实际构成一条连续链：

$$
\boxed{
\text{Maxwell 方程}
\longrightarrow
(\phi,\mathbf A)
\longrightarrow
\text{推迟势}
\longrightarrow
\text{Liénard--Wiechert 场}
\longrightarrow
\text{介质中的运动电荷辐射}
}.
$$

具体对应：

1. RL §2.5：用标势 $\phi$ 和矢势 $\mathbf A$ 表示 $\mathbf E,\mathbf B$，并引入推迟势。
2. RL §3.1：把运动点电荷的 $\rho,\mathbf j$ 代入推迟势，得到 Liénard–Wiechert 势。
3. RL §3.2：对势求导，把电场分成 $R^{-2}$ 的 velocity field 和 $R^{-1}$ 的 radiation field。
4. RL §8.3：在介质中用 $n_r$ 修改传播时间和相位条件，理解 Cherenkov radiation 与 Razin effect。

### 1.2 闪烁部分

星际闪烁是同一主题的另一条分支：

$$
\boxed{
n_e(\mathbf r)
\longrightarrow
n_r(\mathbf r)
\longrightarrow
\Delta\Phi(\mathbf r_\perp)
\longrightarrow
\boldsymbol\alpha
\longrightarrow
\text{多路径干涉}
\longrightarrow
\text{scintillation}
}.
$$

本题进一步把能参与传播的等离子体 lenslets 看成一个星际干涉仪，从而估计它对脉冲星发射位置的空间分辨率。

### 1.3 最重要的结果

$$
\boxed{
\phi
=\left[\frac{q}{\kappa R}\right]_{\rm ret},
\qquad
\mathbf A
=\left[\frac{q\mathbf u}{c\kappa R}\right]_{\rm ret},
\qquad
\kappa=1-\mathbf n\cdot\boldsymbol\beta
}
$$

$$
\boxed{
\mathbf E_{\rm vel}\propto R^{-2},
\qquad
\mathbf E_{\rm rad}\propto R^{-1}
}
$$

$$
\boxed{
\kappa_{\rm med}=1-\beta n_r\cos\theta
}
$$

$$
\boxed{
\cos\theta_{\rm C}=\frac{1}{\beta n_r}
}
$$

$$
\boxed{
\theta_b
\sim
\sqrt{\frac{1}{\gamma^2}+\frac{\omega_p^2}{\omega^2}}
}
$$

$$
\boxed{
\Delta\Phi=-r_e\lambda N_e,
\qquad
\boldsymbol\alpha
=-\frac{r_e\lambda^2}{2\pi}\nabla_\perp N_e
}.
$$

---

## 2. 统一符号、单位制、相位约定与假设

### 2.1 符号表

| 符号 | 含义 | 说明 |
|---|---|---|
| $\mathbf r,t$ | 观察事件 | 要计算场的位置和时间 |
| $\mathbf r',t'$ | 源事件 | 积分中的源位置和时间 |
| $\mathbf r_0(t)$ | 点电荷轨迹 | $\mathbf u=d\mathbf r_0/dt$ |
| $\mathbf R$ | 源到观察点的矢量 | $\mathbf R=\mathbf r-\mathbf r_0(t_{\rm ret})$ |
| $R$ | 源到观察点的距离 | $R=|\mathbf R|$ |
| $\mathbf n$ | 源指向观察点的单位向量 | $\mathbf n=\mathbf R/R$ |
| $\mathbf u,\boldsymbol\beta$ | 粒子速度及其无量纲形式 | $\boldsymbol\beta=\mathbf u/c$ |
| $\gamma$ | Lorentz factor | $\gamma=(1-\beta^2)^{-1/2}$ |
| $\kappa$ | 推迟时间 Jacobian | $1-\mathbf n\cdot\boldsymbol\beta$ |
| $\phi,\mathbf A$ | 标势和矢势 | 本文势的公式使用 Gaussian-cgs |
| $\Phi$ | 电磁波相位 | 与标势 $\phi$ 区分 |
| $n_e$ | 电子数密度 | 单位通常为 $\mathrm{cm^{-3}}$ |
| $N_e$ | 电子柱密度 | $N_e=\int n_e\,dl$ |
| $n_r$ | 折射率 | 不要与 $n_e$ 混淆 |
| $\omega_p$ | 等离子体角频率 | cgs 中 $\omega_p^2=4\pi e^2n_e/m_e$ |
| $r_e$ | 经典电子半径 | $e^2/(m_ec^2)$，cgs |
| $\boldsymbol\alpha$ | 等离子体偏折角 | 薄屏、小角度近似 |

### 2.2 单位制

RL 这些章节使用 Gaussian-cgs：

$$
\nabla\cdot\mathbf E=4\pi\rho,
$$

$$
\nabla\times\mathbf B
=\frac{4\pi}{c}\mathbf j
+\frac{1}{c}\frac{\partial\mathbf E}{\partial t}.
$$

SI 中同样的方程含有 $\epsilon_0,\mu_0$，不能把两套单位制中的 $e,B,\rho,\mathbf j$ 数值直接混用。

### 2.3 波的相位约定

采用

$$
e^{i(\mathbf k\cdot\mathbf r-\omega t)}.
$$

固定时刻传播一小段 $dl$ 时，

$$
d\Phi=k\,dl.
$$

介质相对于真空的附加相位定义为

$$
\Delta\Phi=\Phi_{\rm medium}-\Phi_{\rm vacuum}.
$$

### 2.4 介质近似

RL §8.3 的简单替换假设：

- 介质均匀、各向同性；
- 磁导率近似为 1；
- 在关注的频率附近，可把 $n_r$ 当作给定的相位折射率；
- 推导 Cherenkov 条件时关注固定频率的相位匹配。

真实等离子体有色散，严格的时域信息传播不能简单地全部理解为速度 $c/n_r$；但固定频率的相位条件仍使用 $n_r(\omega)$。

---

## 3. 从 Maxwell 方程到电磁势

### 3.1 Faraday 定律

Gaussian-cgs 中的 Faraday 定律是

$$
\boxed{
\nabla\times\mathbf E
=-\frac{1}{c}\frac{\partial\mathbf B}{\partial t}
}.
$$

积分形式为

$$
\boxed{
\oint_C\mathbf E\cdot d\boldsymbol\ell
=-\frac{1}{c}\frac{d\Phi_B}{dt}
},
$$

其中

$$
\Phi_B=\int_S\mathbf B\cdot d\mathbf S.
$$

它表示随时间变化的磁通量会产生环形电场。负号对应 Lenz 定律：感应效应反抗原磁通的变化。

### 3.2 从 $\nabla\cdot\mathbf B=0$ 定义矢势

因为

$$
\nabla\cdot\mathbf B=0,
$$

而任意旋度的散度恒为零，所以可以写

$$
\boxed{
\mathbf B=\nabla\times\mathbf A
}.
$$

将其代入 Faraday 定律：

$$
\nabla\times\mathbf E
=-\frac{1}{c}
\frac{\partial}{\partial t}
(\nabla\times\mathbf A).
$$

空间旋度和时间微分交换：

$$
\nabla\times
\left(
\mathbf E+\frac{1}{c}\frac{\partial\mathbf A}{\partial t}
\right)=0.
$$

旋度为零的向量可写成某个标量的梯度，因此定义标势 $\phi$：

$$
\boxed{
\mathbf E
=-\nabla\phi
-\frac{1}{c}\frac{\partial\mathbf A}{\partial t}
}.
$$

静态情形下 $\partial\mathbf A/\partial t=0$，恢复

$$
\mathbf E=-\nabla\phi.
$$

---

## 4. Gauge freedom 与 Lorenz gauge

### 4.1 势并不唯一

对任意函数 $\psi(\mathbf r,t)$，作变换

$$
\boxed{
\mathbf A'
=\mathbf A+\nabla\psi
}
$$

和

$$
\boxed{
\phi'
=\phi-\frac{1}{c}\frac{\partial\psi}{\partial t}
}.
$$

磁场不变，因为

$$
\nabla\times(\nabla\psi)=0.
$$

电场中的两个新增项也相互抵消，所以

$$
\mathbf E'=\mathbf E,
\qquad
\mathbf B'=\mathbf B.
$$

这叫 gauge freedom：不同的 $\phi,\mathbf A$ 可以描述同一组可观测的 $\mathbf E,\mathbf B$。

### 4.2 Lorenz gauge

Lorenz gauge 选择

$$
\boxed{
\nabla\cdot\mathbf A
+\frac{1}{c}\frac{\partial\phi}{\partial t}
=0
}
\qquad\text{(Gaussian-cgs)}.
$$

它不是新的物理定律，而是利用势的不唯一性，选取一组使方程最简洁的势。它使 $\phi$ 和 $\mathbf A$ 的方程解耦成标准波动方程。

注意名称是 Lorenz gauge，以 Ludvig Lorenz 命名；它与 Lorentz transformation 的 Hendrik Lorentz 不是同一人。

---

## 5. 势的波动方程如何得到

### 5.1 标势方程

从 Gauss 定律

$$
\nabla\cdot\mathbf E=4\pi\rho
$$

出发，代入

$$
\mathbf E=-\nabla\phi-\frac{1}{c}\frac{\partial\mathbf A}{\partial t}.
$$

得到

$$
-\nabla^2\phi
-\frac{1}{c}
\frac{\partial}{\partial t}
(\nabla\cdot\mathbf A)
=4\pi\rho.
$$

Lorenz gauge 给出

$$
\nabla\cdot\mathbf A
=-\frac{1}{c}\frac{\partial\phi}{\partial t}.
$$

因此

$$
-\nabla^2\phi
+\frac{1}{c^2}\frac{\partial^2\phi}{\partial t^2}
=4\pi\rho.
$$

整体乘以 $-1$：

$$
\boxed{
\nabla^2\phi
-\frac{1}{c^2}\frac{\partial^2\phi}{\partial t^2}
=-4\pi\rho
}.
$$

### 5.2 矢势方程

从 Ampère–Maxwell 定律

$$
\nabla\times\mathbf B
=\frac{4\pi}{c}\mathbf j
+\frac{1}{c}\frac{\partial\mathbf E}{\partial t}
$$

出发。代入 $\mathbf B=\nabla\times\mathbf A$，并使用

$$
\nabla\times(\nabla\times\mathbf A)
=\nabla(\nabla\cdot\mathbf A)-\nabla^2\mathbf A.
$$

右边的时间导数为

$$
\frac{1}{c}\frac{\partial\mathbf E}{\partial t}
=-\frac{1}{c}
\nabla\frac{\partial\phi}{\partial t}
-\frac{1}{c^2}
\frac{\partial^2\mathbf A}{\partial t^2}.
$$

所以

$$
\nabla(\nabla\cdot\mathbf A)-\nabla^2\mathbf A
=
\frac{4\pi}{c}\mathbf j
-\frac{1}{c}\nabla\frac{\partial\phi}{\partial t}
-\frac{1}{c^2}\frac{\partial^2\mathbf A}{\partial t^2}.
$$

由 Lorenz gauge，

$$
\nabla(\nabla\cdot\mathbf A)
=-\frac{1}{c}\nabla\frac{\partial\phi}{\partial t}.
$$

两边相同的交叉项抵消，最终得到

$$
\boxed{
\nabla^2\mathbf A
-\frac{1}{c^2}\frac{\partial^2\mathbf A}{\partial t^2}
=-\frac{4\pi}{c}\mathbf j
}.
$$

### 5.3 物理意义

两式左边都有波动算符

$$
\Box
\equiv
\nabla^2-\frac{1}{c^2}\frac{\partial^2}{\partial t^2}.
$$

因此

$$
\Box\phi=-4\pi\rho,
\qquad
\Box\mathbf A=-\frac{4\pi}{c}\mathbf j.
$$

这表明源的变化不会瞬时传遍空间，而是通过势以速度 $c$ 向外传播。

---

## 6. 推迟势：为什么场取决于源的过去

### 6.1 场点、源点和推迟时间

令

- $\mathbf r$：观察位置；
- $\mathbf r'$：源的位置；
- $R=|\mathbf r-\mathbf r'|$：两者距离。

传播距离 $R$ 需要时间 $R/c$，因此在观察时刻 $t$ 接收到的信息来自

$$
\boxed{
t_{\rm ret}
=t-\frac{R}{c}
}.
$$

### 6.2 推迟势

波动方程满足因果条件的解为

$$
\boxed{
\phi(\mathbf r,t)
=
\int
\frac{
\rho(\mathbf r',t_{\rm ret})
}{|\mathbf r-\mathbf r'|}
\,d^3r'
}
$$

和

$$
\boxed{
\mathbf A(\mathbf r,t)
=
\frac{1}{c}
\int
\frac{
\mathbf j(\mathbf r',t_{\rm ret})
}{|\mathbf r-\mathbf r'|}
\,d^3r'
}.
$$

每个源点都要取自己的推迟时间：

$$
t_{\rm ret}(\mathbf r')
=t-\frac{|\mathbf r-\mathbf r'|}{c}.
$$

所以积分把源在不同过去时刻的状态相加。

### 6.3 为什么有 $1/R$

三维空间中扰动向球面扩散。球面积随 $R^2$ 增长，场或势的振幅以 $1/R$ 衰减；相应能流通常以 $1/R^2$ 衰减。

### 6.4 运动点源的推迟时间是隐式的

如果源本身运动，

$$
\mathbf r_0=\mathbf r_0(t_{\rm ret}),
$$

于是

$$
\boxed{
t-t_{\rm ret}
=
\frac{
|\mathbf r-\mathbf r_0(t_{\rm ret})|
}{c}
}.
$$

右边也含 $t_{\rm ret}$。几何上，推迟事件是粒子世界线与观察事件过去光锥的交点。

---

## 7. 运动点电荷与 Liénard–Wiechert 势

### 7.1 点电荷的源

位于 $\mathbf r_0(t')$ 的点电荷具有

$$
\boxed{
\rho(\mathbf r',t')
=q\,\delta^3[\mathbf r'-\mathbf r_0(t')]
}
$$

和

$$
\boxed{
\mathbf j(\mathbf r',t')
=q\mathbf u(t')\,
\delta^3[\mathbf r'-\mathbf r_0(t')]
}.
$$

### 7.2 把推迟条件写成时间 delta 函数

标势可以写成

$$
\phi(\mathbf r,t)
=
\int d^3r'\int dt'\,
\frac{\rho(\mathbf r',t')}{R}
\delta\left(
t'-t+\frac{R}{c}
\right).
$$

代入点电荷的 $\rho$，空间 delta 函数令

$$
\mathbf r'=\mathbf r_0(t'),
$$

所以

$$
\phi(\mathbf r,t)
=q\int dt'\,
\frac{1}{R(t')}
\delta[f(t')],
$$

其中

$$
f(t')
=t'-t+\frac{R(t')}{c}.
$$

### 7.3 $1/\kappa$ 的 Jacobian

推迟时间是 $f(t_{\rm ret})=0$ 的根。利用

$$
\delta[f(t')]
=
\frac{
\delta(t'-t_{\rm ret})
}{
|f'(t_{\rm ret})|
},
$$

计算

$$
f'(t')
=1+\frac{1}{c}\frac{dR}{dt'}.
$$

由于

$$
\mathbf R(t')=\mathbf r-\mathbf r_0(t'),
$$

有

$$
\frac{dR}{dt'}
=-\mathbf n\cdot\mathbf u.
$$

因此

$$
\boxed{
f'(t')
=1-\mathbf n\cdot\frac{\mathbf u}{c}
=1-\mathbf n\cdot\boldsymbol\beta
\equiv\kappa
}.
$$

于是

$$
\boxed{
\phi(\mathbf r,t)
=\left[\frac{q}{\kappa R}\right]_{\rm ret}
}
$$

和

$$
\boxed{
\mathbf A(\mathbf r,t)
=
\left[
\frac{q\mathbf u}{c\kappa R}
\right]_{\rm ret}
}.
$$

方括号表示其中的 $R,\mathbf n,\mathbf u,\boldsymbol\beta,\kappa$ 全部在 $t_{\rm ret}$ 计算。

### 7.4 $\kappa$ 的到达时间意义

若源在 $dt_{\rm emit}$ 内沿观察方向前进

$$
u\cos\theta\,dt_{\rm emit},
$$

后一个信号少走这段距离，因此

$$
dt_{\rm arr}
=
(1-\beta\cos\theta)dt_{\rm emit}.
$$

所以

$$
\boxed{
\kappa
=
\frac{dt_{\rm arr}}{dt_{\rm emit}}
}.
$$

当粒子向观察者高速运动时，$\kappa$ 变小，连续发出的电磁信息在到达时间上被压缩。

---

## 8. Velocity field 与 radiation field

对 Liénard–Wiechert 势求导得到

$$
\boxed{
\begin{aligned}
\mathbf E(\mathbf r,t)
={}&
q\left[
\frac{
(\mathbf n-\boldsymbol\beta)(1-\beta^2)
}{
\kappa^3R^2
}
\right]_{\rm ret}
\\
&+
\frac{q}{c}
\left[
\frac{
\mathbf n\times
[(\mathbf n-\boldsymbol\beta)\times\dot{\boldsymbol\beta}]
}{
\kappa^3R
}
\right]_{\rm ret}.
\end{aligned}
}
$$

并且

$$
\boxed{
\mathbf B=[\mathbf n\times\mathbf E]_{\rm ret}.
}
$$

### 8.1 第一项：velocity field

定义

$$
\mathbf E_{\rm vel}
=
q\left[
\frac{
(\mathbf n-\boldsymbol\beta)(1-\beta^2)
}{
\kappa^3R^2
}
\right]_{\rm ret}.
$$

它：

- 依赖位置和速度，但不依赖 $\dot{\boldsymbol\beta}$；
- 匀速运动时仍存在；
- 随距离按 $R^{-2}$ 衰减；
- 在 $\boldsymbol\beta=0$ 时退化为 Coulomb 场 $q\mathbf n/R^2$。

因此它是运动 Coulomb 场，也叫 velocity field 或 near field。

### 8.2 第二项：acceleration/radiation field

定义

$$
\mathbf E_{\rm rad}
=
\frac{q}{c}
\left[
\frac{
\mathbf n\times
[(\mathbf n-\boldsymbol\beta)\times\dot{\boldsymbol\beta}]
}{
\kappa^3R
}
\right]_{\rm ret}.
$$

它：

- 与 $\dot{\boldsymbol\beta}=\mathbf a/c$ 成正比；
- 匀速运动时消失；
- 随距离按 $R^{-1}$ 衰减；
- 因最外层叉积而满足 $\mathbf n\cdot\mathbf E_{\rm rad}=0$，是横向场。

### 8.3 为什么只有第二项能把有限功率带到无穷远

辐射场满足

$$
E_{\rm rad}\propto R^{-1},
\qquad
S_{\rm rad}\propto E_{\rm rad}^2\propto R^{-2}.
$$

穿过半径 $R$ 球面的功率为

$$
P_{\rm rad}\sim4\pi R^2S_{\rm rad}\sim\text{常数}.
$$

而 velocity field 满足

$$
E_{\rm vel}\propto R^{-2},
\qquad
S_{\rm vel}\propto R^{-4},
$$

所以

$$
P_{\rm vel}\propto R^{-2}\longrightarrow0.
$$

因此匀速运动电荷可以有电场和磁场，但不会持续向无穷远辐射能量。

### 8.4 两类项的微分来源

对势中的显式 $1/R$ 求导：

$$
\nabla(1/R)\sim R^{-2},
$$

产生 velocity field。

对推迟时间中的速度求导：

$$
\nabla\boldsymbol\beta(t_{\rm ret})
=
\dot{\boldsymbol\beta}\,
\nabla t_{\rm ret},
$$

保留外面的 $1/R$，产生 radiation field。

---

## 9. 介质为什么把 $\kappa$ 改成 $1-\beta n_r\cos\theta$

### 9.1 传播时间改变

真空传播时间为

$$
\frac{R}{c}.
$$

在折射率为 $n_r$ 的均匀介质中，相速度为

$$
v_{\rm ph}=\frac{c}{n_r},
$$

所以固定频率相位传播时间写成

$$
\frac{R}{v_{\rm ph}}
=\frac{n_rR}{c}.
$$

推迟条件相应变成

$$
f_{\rm med}(t')
=t'-t+\frac{n_rR(t')}{c}.
$$

求导：

$$
\frac{df_{\rm med}}{dt'}
=
1+\frac{n_r}{c}\frac{dR}{dt'}.
$$

由于

$$
\frac{dR}{dt'}=-u\cos\theta,
$$

得到

$$
\boxed{
\kappa_{\rm med}
=1-\beta n_r\cos\theta
}.
$$

### 9.2 到达时间压缩

同样可以直接写成

$$
\boxed{
dt_{\rm arr}
=
(1-\beta n_r\cos\theta)
dt_{\rm emit}
}.
$$

介质中的 $\kappa_{\rm med}$ 仍然表示发射时间间隔和到达时间间隔之间的压缩因子。

---

## 10. Cherenkov cone 的波前几何与相干条件

### 10.1 波前包络

设粒子匀速运动，速度为 $v$，介质中的相速度为

$$
u=\frac{c}{n_r}.
$$

粒子在每个过去位置都扰动介质。时刻 $T$ 时，从时刻 $t'$ 的位置发出的球形波半径为

$$
r_{\rm wave}=u(T-t').
$$

若 $v<u$，早期波前始终跑在粒子前方，不同球面不会形成向后的锥形包络。

若

$$
v>u,
$$

粒子会跑到自己先前产生的波前外面。所有球形波在二维截面上有共同切线，在三维中形成锥面。这个锥面是许多球形波前的包络，而不是某一个单独的波前。

### 10.2 Cherenkov 角

在时间 $T$ 内：

$$
\text{粒子位移}=vT,
\qquad
\text{波前半径}=uT.
$$

辐射传播方向垂直于锥形波前，因此 Cherenkov 角 $\theta_{\rm C}$ 满足

$$
\cos\theta_{\rm C}
=\frac{uT}{vT}
=\frac{u}{v}.
$$

代入 $u=c/n_r$ 和 $v=\beta c$：

$$
\boxed{
\cos\theta_{\rm C}
=\frac{1}{\beta n_r}
}.
$$

存在实数角度需要

$$
\boxed{
\beta n_r\ge1
\quad\Longleftrightarrow\quad
v\ge\frac{c}{n_r}
}.
$$

粒子仍可满足 $v<c$；它只需要超过介质相速度，而不是真空光速。

### 10.3 与 Mach cone 角度的区别

若 $\mu$ 表示锥面本身与粒子轨迹之间的角，则

$$
\sin\mu=\frac{u}{v}.
$$

而 Cherenkov 角是辐射传播方向与速度方向的角。因为辐射方向垂直于锥面，

$$
\theta_{\rm C}=90^\circ-\mu.
$$

所以

$$
\cos\theta_{\rm C}=\sin\mu=\frac{u}{v}.
$$

### 10.4 相位相干条件

相隔 $dt'$ 的两个源位置沿方向 $\mathbf n$ 产生的相位差为

$$
d\Phi
=\omega\,dt'
-kv\cos\theta\,dt'.
$$

介质中

$$
k=\frac{n_r\omega}{c},
$$

所以

$$
\boxed{
d\Phi
=
\omega
(1-\beta n_r\cos\theta)
dt'
}.
$$

在 Cherenkov 角上，

$$
1-\beta n_r\cos\theta_{\rm C}=0,
$$

因此

$$
d\Phi=0.
$$

粒子在不同时间、不同位置激发的波在这个方向上同相到达并相干叠加。这是锥面上辐射增强的根本原因。

---

## 11. Lorentz factor、相对论性 beaming 与 $\theta_b$

### 11.1 Lorentz factor

$$
\boxed{
\gamma
=\frac{1}{\sqrt{1-\beta^2}},
\qquad
\beta=\frac{v}{c}
}.
$$

它衡量运动的相对论程度：

$$
E=\gamma mc^2,
\qquad
\mathbf p=\gamma m\mathbf v.
$$

当 $\gamma\gg1$ 时，粒子速度极接近 $c$。由

$$
\beta=\sqrt{1-\frac{1}{\gamma^2}}
$$

可得

$$
\boxed{
\beta\simeq1-\frac{1}{2\gamma^2}
}.
$$

### 11.2 真空中的 beaming angle

在小角度下，

$$
\cos\theta\simeq1-\frac{\theta^2}{2}.
$$

因此

$$
\kappa
=1-\beta\cos\theta
\simeq
\frac{1}{2\gamma^2}
+\frac{\theta^2}{2}.
$$

当

$$
\theta^2\sim\frac{1}{\gamma^2}
$$

时，角度项开始显著改变辐射强度。因此定义特征 beaming 半开角

$$
\boxed{
\theta_b\sim\frac{1}{\gamma}
}.
$$

$\theta_b$ 不是辐射突然截止的硬边界，而是辐射角分布的特征宽度。

### 11.3 不要混淆 $\theta_b$ 和 $\theta_{\rm C}$

- $\theta_b$：普通相对论性辐射集中在速度方向周围的角宽度。
- $\theta_{\rm C}$：Cherenkov 辐射相干增强所处的特定角度。

---

## 12. 冷等离子体中的 Razin effect

### 12.1 冷等离子体折射率

冷、非磁化等离子体满足

$$
\omega^2=\omega_p^2+c^2k^2,
$$

所以

$$
\boxed{
n_r^2
=1-\frac{\omega_p^2}{\omega^2}
}.
$$

当 $\omega>\omega_p$ 时，

$$
n_r<1.
$$

因此

$$
\frac{c}{n_r}>c,
$$

普通粒子不能满足 $v>c/n_r$，所以这种冷等离子体中没有普通 Cherenkov radiation。

### 12.2 介质中的 beaming angle

介质中的特征角可写为

$$
\boxed{
\theta_b
\sim
\sqrt{1-n_r^2\beta^2}
}.
$$

代入

$$
n_r^2=1-\frac{\omega_p^2}{\omega^2}
$$

得到

$$
1-n_r^2\beta^2
=
1-\beta^2
+\beta^2\frac{\omega_p^2}{\omega^2}.
$$

对 $\beta\simeq1$，

$$
\boxed{
\theta_b
\sim
\sqrt{
\frac{1}{\gamma^2}
+\frac{\omega_p^2}{\omega^2}
}
}.
$$

高频时

$$
\frac{\omega_p}{\omega}\ll\frac{1}{\gamma},
$$

介质影响很小，$\theta_b\sim1/\gamma$。

低频时

$$
\frac{\omega_p}{\omega}\gg\frac{1}{\gamma},
$$

介质项主导，$\theta_b\sim\omega_p/\omega$。原本狭窄、强烈的相对论性聚束被破坏，导致低频同步辐射被抑制。

分界频率满足

$$
\boxed{
\omega\sim\gamma\omega_p
}.
$$

这就是 Razin effect 的核心尺度。

---

## 13. 等离子体相位屏、相位积累与偏折角

### 13.1 从折射率到相位

介质中

$$
k=\frac{n_r\omega}{c}.
$$

相对于真空的附加相位为

$$
\boxed{
\Delta\Phi
=
\frac{\omega}{c}
\int(n_r-1)\,dl
}.
$$

对 $\omega\gg\omega_p$，

$$
n_r
=
\sqrt{1-\frac{\omega_p^2}{\omega^2}}
\simeq
1-\frac{\omega_p^2}{2\omega^2}.
$$

因此

$$
\Delta\Phi
=
-\frac{1}{2c\omega}
\int\omega_p^2\,dl.
$$

在 Gaussian-cgs 中

$$
\omega_p^2=\frac{4\pi e^2n_e}{m_e}.
$$

定义

$$
N_e=\int n_e\,dl,
$$

则

$$
\Delta\Phi
=-\frac{2\pi e^2}{m_ec\omega}N_e.
$$

利用

$$
r_e=\frac{e^2}{m_ec^2},
\qquad
\lambda=\frac{2\pi c}{\omega},
$$

得到

$$
\boxed{
\Delta\Phi=-r_e\lambda N_e
}.
$$

负号表示冷等离子体中 $n_r<1$，固定几何距离内积累的空间相位少于真空。相位提前与脉冲群延迟并不矛盾：相速度大于 $c$，而群速度小于 $c$。

### 13.2 从相位梯度到偏折角

薄相位屏产生横向波矢

$$
\mathbf k_\perp=\nabla_\perp\Phi.
$$

小角度下

$$
\boldsymbol\alpha
\simeq
\frac{\mathbf k_\perp}{k}
=
\frac{\lambda}{2\pi}
\nabla_\perp\Phi.
$$

代入 $\Delta\Phi=-r_e\lambda N_e$：

$$
\boxed{
\boldsymbol\alpha
=
-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp N_e
}.
$$

所以

$$
\alpha\propto\lambda^2.
$$

电子柱密度较大的位置折射率更小，因此过密等离子体结构通常表现为发散透镜。

---

## 14. 双脉冲星闪烁题：完整数值推导

### 14.1 已知条件

$$
\lambda=12\,\mathrm{cm},
$$

$$
\left|\nabla_\perp N_e\right|
=10^3\,\mathrm{cm^{-2}\,cm^{-1}}
=10^3\,\mathrm{cm^{-3}},
$$

$$
d_{\rm psr}=700\,\mathrm{pc},
$$

屏幕在中点，因此

$$
D_l=D_{ls}=350\,\mathrm{pc}.
$$

经典电子半径为

$$
r_e=2.818\times10^{-13}\,\mathrm{cm}.
$$

### 14.2 最大偏折角

$$
\alpha_{\max}
=
\frac{r_e\lambda^2}{2\pi}
\left|\nabla_\perp N_e\right|.
$$

代入：

$$
\alpha_{\max}
=
\frac{
(2.818\times10^{-13})
(12)^2
(10^3)
}{2\pi}.
$$

得到

$$
\boxed{
\alpha_{\max}
\simeq
6.46\times10^{-9}\,\mathrm{rad}
}.
$$

利用 $1\,\mathrm{rad}=206265\,\mathrm{arcsec}$：

$$
\boxed{
\alpha_{\max}
\simeq
1.33\,\mathrm{mas}
}.
$$

### 14.3 能参与成像的 lenslet 范围

课堂式数量级估算把入射光近似为局部平行光：

$$
b_{\max}\simeq D_l\alpha_{\max}.
$$

利用

$$
1\,\mathrm{pc}=206265\,\mathrm{AU},
$$

得到

$$
\boxed{
b_{\max}
\simeq
0.47\,\mathrm{AU}
}.
$$

视线两侧都能有 lenslet，所以有效最大基线约为

$$
B\simeq2b_{\max},
$$

即

$$
\boxed{
B\simeq0.93\,\mathrm{AU}
}.
$$

### 14.4 更严格的有限距离几何

若同时考虑源到屏幕和屏幕到观察者的斜率，所需偏折角为

$$
\alpha_{\rm req}
\simeq
\frac{b}{D_l}
+\frac{b}{D_{ls}}.
$$

因此

$$
b_{\max}
=
\alpha
\frac{D_lD_{ls}}{D_l+D_{ls}}.
$$

中点屏幕给出

$$
b_{\max}\simeq0.23\,\mathrm{AU}.
$$

这比课堂式 $D_l\alpha$ 小一半。不过若使用严格基线时也用源到屏幕距离 $D_{ls}$ 转换源平面尺度，最终物理空间分辨率与课堂式结果一致。题目通常期待课堂式的 $b_{\max}\simeq0.47\,\mathrm{AU}$ 和 $B\simeq0.93\,\mathrm{AU}$。

### 14.5 干涉仪角分辨率

忽略阶数为一的 aperture 因子，

$$
\theta_{\rm res}
\sim
\frac{\lambda}{B}.
$$

将 $B=0.93\,\mathrm{AU}$ 转为厘米：

$$
B\simeq1.40\times10^{13}\,\mathrm{cm}.
$$

所以

$$
\theta_{\rm res}
\simeq
8.6\times10^{-13}\,\mathrm{rad}.
$$

利用

$$
1\,\mathrm{rad}
=2.06265\times10^{11}\,\mu\mathrm{as},
$$

得到

$$
\boxed{
\theta_{\rm res}
\simeq
0.18\,\mu\mathrm{as}
}.
$$

### 14.6 脉冲星处的空间分辨率

$$
\ell_{\rm res}
=D_{\rm psr}\theta_{\rm res}.
$$

利用

$$
1\,\mu\mathrm{as}
\text{ 在 }1\,\mathrm{pc}
\text{ 对应 }10^{-6}\,\mathrm{AU},
$$

得到

$$
\ell_{\rm res}
\simeq
0.18\times700\times10^{-6}\,\mathrm{AU}.
$$

因此

$$
\boxed{
\ell_{\rm res}
\simeq
1.24\times10^{-4}\,\mathrm{AU}
}
$$

$$
\boxed{
\ell_{\rm res}
\simeq
1.86\times10^4\,\mathrm{km}
}
$$

$$
\boxed{
\ell_{\rm res}
\simeq
0.062\,\mathrm{lt\!-\!s}
\simeq
0.027R_\odot
}.
$$

这表示脉冲星横向移动约 $1.9\times10^4\,\mathrm{km}$，地球上的干涉图样就会发生显著变化。

### 14.7 与轨道尺度比较

给定

$$
x=1.415\,\mathrm{lt\!-\!s}.
$$

对应长度为

$$
cx
\simeq
4.24\times10^5\,\mathrm{km}
\simeq
0.61R_\odot.
$$

因此

$$
\boxed{
\frac{x}{\ell_{\rm res}}
\simeq
23
}.
$$

轨道尺度跨越约二十多个 scintillation 分辨单元，所以轨道运动会明显改变照亮屏幕的相位关系和地球上的闪烁图样。

严格说，计时参数 $x=a_p\sin i/c$ 是投影半长轴，而 scintillation 直接敏感于天空平面的横向位移；精确映射还依赖轨道倾角和升交点方向。这里比较的是特征尺度。

### 14.8 换成射电太阳型恒星

太阳半径

$$
R_\odot\simeq6.96\times10^5\,\mathrm{km}.
$$

因此

$$
\frac{R_\odot}{\ell_{\rm res}}
\simeq37.
$$

恒星半径横跨约 37 个分辨单元，直径横跨约 75 个。不同发射区域形成彼此错开的闪烁图样，叠加后强度起伏被平均掉。

所以普通、扩展的射电太阳型恒星一般不会显示强烈的 diffractive scintillation。若射电辐射来自远小于恒星尺度的紧凑相干爆发区，该紧凑分量仍可能闪烁。

### 14.9 波长标度

由于

$$
\alpha\propto\lambda^2,
$$

所以

$$
b_{\max}\propto\lambda^2,
\qquad
B\propto\lambda^2.
$$

干涉仪分辨率为

$$
\theta_{\rm res}\sim\frac{\lambda}{B},
$$

因此

$$
\boxed{
\theta_{\rm res}\propto\lambda^{-1}
}
$$

和

$$
\boxed{
\ell_{\rm res}\propto\lambda^{-1}
}.
$$

在这个简单模型中，波长越长，等离子体偏折增强得越快，有效基线扩大，因此源平面分辨率反而越好。极长波长下强散射、多重成像、吸收和薄屏近似失效可能改变这一简单标度。

---

## 15. 量纲检查、极限检验与常见混淆

### 15.1 相位量纲

$$
r_e:[\mathrm{cm}],
\qquad
\lambda:[\mathrm{cm}],
\qquad
N_e:[\mathrm{cm^{-2}}],
$$

所以

$$
r_e\lambda N_e
$$

无量纲，符合相位的要求。

### 15.2 偏折角量纲

$$
\nabla_\perp N_e:
[\mathrm{cm^{-2}\,cm^{-1}}]
=[\mathrm{cm^{-3}}],
$$

所以

$$
r_e\lambda^2\nabla_\perp N_e
:
[\mathrm{cm}]
[\mathrm{cm^2}]
[\mathrm{cm^{-3}}]
=1.
$$

弧度是无量纲量，量纲正确。

### 15.3 静止和匀速极限

- $\boldsymbol\beta=0$：Liénard–Wiechert velocity field 退化为 Coulomb 场。
- $\dot{\boldsymbol\beta}=0$：radiation field 为零。
- $R\rightarrow\infty$：$R^{-1}$ 的 radiation field 支配 $R^{-2}$ 的 velocity field。

### 15.4 介质极限

- $n_r\rightarrow1$：$\kappa_{\rm med}\rightarrow1-\beta\cos\theta$，恢复真空结果。
- $n_r>1$ 且 $\beta n_r>1$：允许 Cherenkov radiation。
- 冷等离子体中 $n_r<1$：没有普通 Cherenkov，但低频可能出现 Razin suppression。

### 15.5 常见混淆

1. 波动相位 $\Phi$ 不是电磁标势 $\phi$。
2. Lorenz gauge 是势的表示选择，不是额外的物理约束。
3. 推迟时间不是任意延迟，而是由过去光锥和源轨迹的交点决定。
4. Liénard–Wiechert 势中的 $1/\kappa$ 来自 delta 函数变量变换的 Jacobian。
5. 匀速电荷有 $\mathbf E,\mathbf B$，但没有 $R^{-1}$ 的辐射场。
6. $\theta_b$ 是辐射角宽度；$\theta_{\rm C}$ 是 Cherenkov 相干方向。
7. Cherenkov 条件超过的是介质相速度 $c/n_r$，不是超过真空光速。
8. 冷等离子体中相速度可以大于 $c$，但群速度和信息速度不超过 $c$。
9. 题目写的 $\nabla n_e$ 具有柱密度梯度的单位，物理上应理解为 $\nabla_\perp N_e$。
10. 简单几何和严格薄屏几何对中点屏幕的 $b_{\max}$ 可差因子 2；必须同时保持基线和源距离定义一致。

---

## 16. English assignment-ready solution

### 16.1 Maximum bending angle

For a thin plasma phase screen, the phase perturbation and deflection angle are

$$
\Delta\Phi=-r_e\lambda N_e,
\qquad
\boldsymbol\alpha
=-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp N_e.
$$

Using

$$
r_e=2.818\times10^{-13}\,\mathrm{cm},
\qquad
\lambda=12\,\mathrm{cm},
\qquad
|\nabla_\perp N_e|
=10^3\,\mathrm{cm^{-3}},
$$

the maximum bending angle is

$$
\alpha_{\max}
=
\frac{
(2.818\times10^{-13})(12)^2(10^3)
}{2\pi}
=6.46\times10^{-9}\,\mathrm{rad}.
$$

Thus,

$$
\boxed{
\alpha_{\max}\simeq1.33\,\mathrm{mas}
}.
$$

### 16.2 Effective lenslet array

For a screen halfway to a pulsar at $700\,\mathrm{pc}$, the observer-to-screen distance is

$$
D_l=350\,\mathrm{pc}.
$$

Using the classroom small-angle estimate,

$$
b_{\max}\simeq D_l\alpha_{\max},
$$

which gives

$$
\boxed{
b_{\max}\simeq0.47\,\mathrm{AU}
}.
$$

Lenslets can contribute on both sides of the line of sight, so the effective maximum baseline is

$$
\boxed{
B\simeq2b_{\max}\simeq0.93\,\mathrm{AU}
}.
$$

### 16.3 Angular and spatial resolution

Treating the screen as an interferometer,

$$
\theta_{\rm res}\sim\frac{\lambda}{B},
$$

and therefore

$$
\boxed{
\theta_{\rm res}
\simeq
8.6\times10^{-13}\,\mathrm{rad}
\simeq
0.18\,\mu\mathrm{as}
}.
$$

At the pulsar distance this corresponds to

$$
\boxed{
\ell_{\rm res}
\simeq
1.24\times10^{-4}\,\mathrm{AU}
\simeq
1.86\times10^4\,\mathrm{km}
\simeq
0.062\,\mathrm{lt\!-\!s}
\simeq
0.027R_\odot
}.
$$

The projected semi-major axis is

$$
x=1.415\,\mathrm{lt\!-\!s},
$$

so

$$
\boxed{
\frac{x}{\ell_{\rm res}}\simeq23
}.
$$

Thus, the characteristic orbital scale spans many scintillation resolution elements, and orbital motion should substantially change the interference pattern.

### 16.4 Extended source and wavelength scaling

A Sun-like radio source has a characteristic radius of order $R_\odot$, much larger than the source-plane resolution $0.027R_\odot$. Different parts of the source therefore generate decorrelated scintillation patterns that average together, strongly suppressing the observed modulation. A compact radio-emitting subregion could still scintillate.

Since

$$
\alpha\propto\lambda^2,
\qquad
B\propto\lambda^2,
$$

the angular and physical source-plane resolutions scale as

$$
\boxed{
\theta_{\rm res}\propto\lambda^{-1},
\qquad
\ell_{\rm res}\propto\lambda^{-1}
}.
$$

Thus, within this simple thin-screen model, longer observing wavelengths provide finer source-plane resolution.

---

## 17. 复习清单与参考资料

### 17.1 应该能够独立解释

- Faraday 定律为什么允许定义 $\phi,\mathbf A$。
- Gauge freedom 为什么不改变 $\mathbf E,\mathbf B$。
- Lorenz gauge 如何消掉势方程中的交叉项。
- 推迟时间为什么等于传播时间，运动点源时为何是隐式方程。
- 空间 delta 和时间 delta 如何把点电荷源化成 Liénard–Wiechert 势。
- $1/\kappa$ 为什么是时间变量变换的 Jacobian。
- 为什么 velocity field 是 $R^{-2}$，radiation field 是 $R^{-1}$。
- 为什么 $R^{-1}$ 场能把有限功率带到无穷远。
- 为什么介质中 $\kappa$ 变成 $1-\beta n_r\cos\theta$。
- Cherenkov cone 为什么是球形波前的包络。
- $\theta_{\rm C}$ 与 Mach cone 表面角为什么互余。
- $\gamma$、$\theta_b$ 与 relativistic beaming 的关系。
- Razin effect 为什么在 $\omega\lesssim\gamma\omega_p$ 时重要。
- 从 $n_r-1$ 推出 $\Delta\Phi=-r_e\lambda N_e$。
- 从横向相位梯度推出等离子体偏折角。
- 独立复算本题的 $\alpha_{\max}$、基线、角分辨率和源平面分辨率。

### 17.2 核心公式

$$
\boxed{
\mathbf B=\nabla\times\mathbf A,
\qquad
\mathbf E=-\nabla\phi-\frac{1}{c}\frac{\partial\mathbf A}{\partial t}
}
$$

$$
\boxed{
\nabla\cdot\mathbf A
+\frac{1}{c}\frac{\partial\phi}{\partial t}=0
}
$$

$$
\boxed{
\phi=\left[\frac{q}{\kappa R}\right]_{\rm ret},
\qquad
\mathbf A=\left[\frac{q\mathbf u}{c\kappa R}\right]_{\rm ret}
}
$$

$$
\boxed{
\kappa=1-\mathbf n\cdot\boldsymbol\beta,
\qquad
\kappa_{\rm med}=1-\beta n_r\cos\theta
}
$$

$$
\boxed{
\cos\theta_{\rm C}=\frac{1}{\beta n_r},
\qquad
\theta_b\sim\frac{1}{\gamma}
}
$$

$$
\boxed{
\Delta\Phi=-r_e\lambda N_e,
\qquad
\boldsymbol\alpha
=-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp N_e
}
$$

### 17.3 参考资料

1. G. B. Rybicki & A. P. Lightman, *Radiative Processes in Astrophysics*, §2.5、§3.1–3.2、§8.3。
2. 同课程目录中的 AST1440_RL_Eq8.18_折射率梯度与射线弯曲推导.md。
3. 同课程目录中的 AST1440_偏振_Faraday旋转_等离子体折射与闪烁_习题8.3详解.md。
4. AST1440 课程页面关于 retarded potentials、Cherenkov/Razin 和 pulsar scintillation 的课堂说明。
