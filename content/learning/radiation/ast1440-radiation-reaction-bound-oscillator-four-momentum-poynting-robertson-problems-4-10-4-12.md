---
title: "AST1440 辐射反作用、束缚振子与 Poynting-Robertson 效应：RL §3.5、§3.6 及习题 4.10-4.12 详解"
description: "系统推导 Abraham–Lorentz 辐射反作用、束缚振子的阻尼与 Lorentz 线型、受迫振子散射截面、四动量和反冲，并完整解答习题 4.10–4.12。"
date: "2026-11-09"
tags: ["AST1440","Radiation reaction","Bound oscillator","Four-momentum","Poynting-Robertson effect","Exercises"]
order: 17
draft: false
---

# AST1440 辐射反作用、束缚振子与 Poynting-Robertson 效应：RL §3.5、§3.6 及习题 4.10-4.12 详解

> 课程：AST1440 - Radiation。  
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§3.5（印刷页 93-96）、§3.6（印刷页 96-102）；Problems 4.10-4.12（印刷页 152-153）。  
> 整理日期：2026 年 11 月 9 日。  
> 本文整理本次预习及讨论中的全部关键追问：radiation reaction force 如何从能量平衡得到、runaway solution 为什么不物理、三阶导数如何化成普通阻尼、机械能与辐射功率为何按 $e^{-\Gamma t}$ 衰减、Lorentz profile 的 Fourier 推导、受迫束缚振子的散射截面、四动量与 recoil，以及习题 4.10-4.12 每一问究竟要求什么和如何求解。

## 目录

1. [本次内容的逻辑主线](#1-本次内容的逻辑主线)
2. [符号、单位制与适用条件](#2-符号单位制与适用条件)
3. [RL §3.5：radiation reaction](#3-rl-35radiation-reaction)
4. [Runaway solution 与经典点电荷模型的局限](#4-runaway-solution-与经典点电荷模型的局限)
5. [RL §3.6：无外力的 harmonically bound particle](#5-rl-36无外力的-harmonically-bound-particle)
6. [Lorentz profile 的完整 Fourier 推导](#6-lorentz-profile-的完整-fourier-推导)
7. [Driven oscillator 与散射截面](#7-driven-oscillator-与散射截面)
8. [四动量、invariant mass 与 recoil](#8-四动量invariant-mass-与-recoil)
9. [习题 4.10：各向同性发射与动量守恒](#9-习题-410各向同性发射与动量守恒)
10. [习题 4.11：吸收光子、反冲与静质量增加](#10-习题-411吸收光子反冲与静质量增加)
11. [习题 4.12：Poynting-Robertson effect](#11-习题-412poynting-robertson-effect)
12. [常见混淆与检查方法](#12-常见混淆与检查方法)
13. [核心公式速查](#13-核心公式速查)
14. [参考资料](#14-参考资料)

---

## 1. 本次内容的逻辑主线

§3.5 与 §3.6 讨论一个加速电荷怎样受到自己辐射的反馈：

$$
\boxed{
\text{加速电荷辐射}
\longrightarrow
\text{机械能减少}
\longrightarrow
\text{radiation reaction}
\longrightarrow
\text{阻尼振荡与有限谱线宽度}
}.
$$

习题 4.10-4.12 则从能量-动量角度研究辐射的吸收与发射：

$$
\boxed{
\text{4.10：发射辐射}
\longrightarrow
\text{4.11：吸收辐射}
\longrightarrow
\text{4.12：先吸收、再发射}
}.
$$

两部分的共同物理核心是：

1. 辐射会带走能量和动量；
2. 内能是静质量的一部分；
3. 物体的动量变化不一定意味着速度变化，也可能来自静质量变化；
4. 有限寿命的振荡不可能严格单频，因此会产生有限线宽。

---

## 2. 符号、单位制与适用条件

### 2.1 主要符号

| 符号 | 含义 |
|---|---|
| $e$ | 电荷量的大小；电子电荷为 $-e$ |
| $m$ | 粒子的静质量 |
| $\mathbf v$ | 三维速度 |
| $\mathbf a=\dot{\mathbf v}$ | 三维加速度 |
| $\dot{\mathbf a}$ | jerk，加速度的时间导数 |
| $\tau$ | radiation reaction 的特征时间 |
| $\omega_0$ | 束缚振子的自然角频率 |
| $\Gamma$ | 辐射阻尼率，也是 Lorentz profile 的 FWHM |
| $\sigma_T$ | Thomson 总散射截面 |
| $P^\mu$ | 四动量 |
| $W'$ | 在粒子静止系中发出的总辐射能量 |
| $h\nu$ | 单个光子能量 |
| $l$ | 尘埃关于恒星的轨道角动量 |

### 2.2 Gaussian-cgs 单位制

RL 使用 Gaussian-cgs。非相对论 Larmor formula 为

$$
\boxed{
P_{\rm rad}=\frac{2e^2}{3c^3}a^2
}.
$$

真空平面波的时间平均 Poynting flux 为

$$
\boxed{
\langle S\rangle=\frac{cE_0^2}{8\pi}
},
$$

其中 $E_0$ 是电场峰值振幅。SI 公式中会出现 $\epsilon_0$，不能与这里的 cgs 公式直接混用。

### 2.3 Radiation reaction 近似的适用范围

定义

$$
\boxed{
\tau\equiv\frac{2e^2}{3mc^3}
}.
$$

对电子，$\tau\sim10^{-23}\ {\rm s}$。RL 的经典 radiation reaction 公式只应当用于

$$
\boxed{
t_{\rm motion}\gg\tau
}.
$$

也就是说，它是长时间尺度、弱自作用条件下的有效近似，不是对任意超短时间运动都精确的基本方程。

---

## 3. RL §3.5：radiation reaction

### 3.1 为什么必须存在辐射反作用？

加速电荷以速率

$$
P_{\rm rad}=\frac{2e^2}{3c^3}a^2
$$

向外辐射能量。这部分能量必须来自粒子的机械能、外力做功，或粒子附近电磁场暂时储存的能量。因此运动方程中需要有一个 self-force。

完整的点电荷自场推导很复杂。RL 在这里用平均能量守恒确定 leading-order self-force 的形式和系数。

### 3.2 用分部积分得到 Abraham-Lorentz force

令

$$
C\equiv\frac{2e^2}{3c^3}.
$$

尝试取一个与 jerk 成正比的局域 self-force：

$$
\mathbf F_{\rm rad}=C\dot{\mathbf a}.
$$

它在 $t_1$ 到 $t_2$ 之间所做的功为

$$
\int_{t_1}^{t_2}\mathbf F_{\rm rad}\cdot\mathbf v\,dt
=C\int_{t_1}^{t_2}\dot{\mathbf a}\cdot\mathbf v\,dt.
$$

因为

$$
\frac{d}{dt}(\mathbf a\cdot\mathbf v)
=\dot{\mathbf a}\cdot\mathbf v+a^2,
$$

所以

$$
\dot{\mathbf a}\cdot\mathbf v
=\frac{d}{dt}(\mathbf a\cdot\mathbf v)-a^2.
$$

代回并积分：

$$
\begin{aligned}
\int_{t_1}^{t_2}\mathbf F_{\rm rad}\cdot\mathbf v\,dt
&=C[\mathbf a\cdot\mathbf v]_{t_1}^{t_2}
-C\int_{t_1}^{t_2}a^2dt.
\end{aligned}
$$

若取一个完整周期，或初末状态满足

$$
(\mathbf a\cdot\mathbf v)_{t_2}
=(\mathbf a\cdot\mathbf v)_{t_1},
$$

边界项消失，于是

$$
\int\mathbf F_{\rm rad}\cdot\mathbf v\,dt
=-\int P_{\rm rad}dt.
$$

因此

$$
\boxed{
\mathbf F_{\rm rad}
=\frac{2e^2}{3c^3}\dot{\mathbf a}
=m\tau\dot{\mathbf a}
}.
$$

这就是非相对论 Abraham-Lorentz force。

### 3.3 为什么它不是简单的 $-\mathbf v$ 摩擦力？

若直接要求每一瞬间

$$
-\mathbf F_{\rm rad}\cdot\mathbf v=P_{\rm rad},
$$

就会暗中选定一个测量 $\mathbf v$ 的特殊参考系。正确的瞬时关系是

$$
\mathbf F_{\rm rad}\cdot\mathbf v
=\frac{d}{dt}(m\tau\mathbf a\cdot\mathbf v)-P_{\rm rad}.
$$

定义 Schott energy

$$
E_{\rm Schott}\equiv-m\tau\mathbf a\cdot\mathbf v,
$$

能量账本可写成

$$
\boxed{
P_{\rm ext}
=\frac{d}{dt}(K+E_{\rm Schott})+P_{\rm rad}
}.
$$

因此辐射能量在某个瞬间可以部分来自近区电磁场，而不必完全来自粒子机械能。对完整周期取平均后，Schott boundary term 消失，平均机械能损失才等于总辐射能量。

### 3.4 加入外力后的运动方程

牛顿第二定律为

$$
m\mathbf a=\mathbf F_{\rm ext}+m\tau\dot{\mathbf a},
$$

即

$$
\boxed{
m(\mathbf a-\tau\dot{\mathbf a})=\mathbf F_{\rm ext}
}.
$$

由于包含位置的三阶时间导数，这个方程会出现普通二阶运动方程中不存在的额外数学解。

---

## 4. Runaway solution 与经典点电荷模型的局限

令 $\mathbf F_{\rm ext}=0$，运动方程变成

$$
\mathbf a-\tau\dot{\mathbf a}=0,
$$

所以

$$
\dot{\mathbf a}=\frac{\mathbf a}{\tau}.
$$

除去物理上的匀速解外，还存在

$$
\boxed{
\mathbf a(t)=\mathbf a_0e^{t/\tau}
}
$$

这样的 runaway solution：即使没有外力，加速度也会自发指数增长。

它不应被解释为真实电子的行为，因为它的变化时间尺度恰好是 $\tau$，而推导公式时要求 $t_{\rm motion}\gg\tau$。它把长时间尺度有效方程错误地外推到了近似失效的超短时间尺度。

若要求

$$
\mathbf a(t)\rightarrow0\qquad(t\rightarrow\infty),
$$

可以排除指数增长项，但会引出持续约 $\tau$ 的 pre-acceleration。这些问题共同说明：经典点电荷模型在极短时间、极小尺度上并不完备。

---

## 5. RL §3.6：无外力的 harmonically bound particle

### 5.1 从受力得到三阶运动方程

谐振恢复力为

$$
F_{\rm spring}=-kx=-m\omega_0^2x,
$$

辐射反作用力为

$$
F_{\rm rad}=m\tau\dddot x.
$$

没有外部驱动力时，牛顿第二定律给出

$$
m\ddot x=-m\omega_0^2x+m\tau\dddot x.
$$

整理后

$$
\boxed{
\ddot x-\tau\dddot x+\omega_0^2x=0
}.
$$

三阶导数前的负号来自移项；self-force 本身仍是 $+m\tau\dddot x$。

### 5.2 从三阶导数化成普通阻尼

假设辐射阻尼很弱：

$$
\omega_0\tau\ll1.
$$

零阶运动近似为简谐振动，因此

$$
\ddot x\simeq-\omega_0^2x.
$$

再求一次时间导数：

$$
\dddot x\simeq-\omega_0^2\dot x.
$$

代回原方程：

$$
\ddot x+\omega_0^2\tau\dot x+\omega_0^2x=0.
$$

定义

$$
\boxed{
\Gamma\equiv\omega_0^2\tau
},
$$

得到普通弱阻尼方程

$$
\boxed{
\ddot x+\Gamma\dot x+\omega_0^2x=0
}.
$$

这里 $\dddot x\simeq-\omega_0^2\dot x$ 是 perturbative replacement，不是严格恒等式。

### 5.3 弱阻尼解

在 $\Gamma\ll\omega_0$ 时，解为

$$
x(t)=x_0e^{-\Gamma t/2}\cos(\omega_dt+\phi),
$$

其中

$$
\omega_d=\sqrt{\omega_0^2-\frac{\Gamma^2}{4}}
\simeq\omega_0.
$$

所以振幅包络为

$$
\boxed{
A(t)=A_0e^{-\Gamma t/2}
}.
$$

### 5.4 为什么能量按 $e^{-\Gamma t}$ 衰减？

弱阻尼下，一个周期内可以把 $A(t)$ 看成常数：

$$
x\simeq A(t)\cos\omega_0t,
\qquad
\dot x\simeq-\omega_0A(t)\sin\omega_0t.
$$

因此机械能近似为

$$
\begin{aligned}
E_{\rm mech}
&=\frac12m\dot x^2+\frac12m\omega_0^2x^2\\
&\simeq\frac12m\omega_0^2A^2(t).
\end{aligned}
$$

由于 $A^2(t)=A_0^2e^{-\Gamma t}$，所以

$$
\boxed{
E_{\rm mech}(t)=E_0e^{-\Gamma t}
}.
$$

Larmor 功率的周期平均值为

$$
\begin{aligned}
\langle P_{\rm rad}\rangle
&=m\tau\langle a^2\rangle\\
&\simeq\frac12m\tau\omega_0^4A^2(t)\\
&=\Gamma E_{\rm mech}(t).
\end{aligned}
$$

因此

$$
\boxed{
\frac{dE_{\rm mech}}{dt}=-\Gamma E_{\rm mech}
},
$$

与 $E_{\rm mech}=E_0e^{-\Gamma t}$ 一致。瞬时辐射功率还有 $\cos^2\omega_0t$ 的快速起伏；按指数衰减的是它的包络或周期平均值。

---

## 6. Lorentz profile 的完整 Fourier 推导

### 6.1 Lorentz profile 是什么？

归一化 Lorentz profile 定义为

$$
\boxed{
L(\omega)
=\frac{1}{\pi}
\frac{\gamma_L}{(\omega-\omega_0)^2+\gamma_L^2}
}.
$$

其中 $\gamma_L$ 是 half width at half maximum。对本节的辐射阻尼，

$$
\gamma_L=\frac{\Gamma}{2},
$$

所以

$$
\boxed{
L(\omega)
=\frac{\Gamma/2\pi}
{(\omega-\omega_0)^2+(\Gamma/2)^2}
}.
$$

它满足

$$
\int_{-\infty}^{\infty}L(\omega)d\omega=1.
$$

半高点位于 $\omega_0\pm\Gamma/2$，因此

$$
\boxed{\mathrm{FWHM}=\Gamma}.
$$

### 6.2 对衰减振动做 Fourier transform

取

$$
x(t)=x_0e^{-\Gamma t/2}\cos\omega_0t,
\qquad t\geq0.
$$

RL 的 Fourier convention 为

$$
\begin{aligned}
x(t)&=\int_{-\infty}^{\infty}\widetilde x(\omega)e^{-i\omega t}d\omega,\\
\widetilde x(\omega)
&=\frac{1}{2\pi}\int_{-\infty}^{\infty}x(t)e^{i\omega t}dt.
\end{aligned}
$$

于是

$$
\begin{aligned}
\widetilde x(\omega)
&=\frac{x_0}{2\pi}\int_0^\infty
e^{-\Gamma t/2}\cos\omega_0t\,e^{i\omega t}dt\\
&=\frac{x_0}{4\pi}
\left[
\frac{1}{\Gamma/2-i(\omega+\omega_0)}
+\frac{1}{\Gamma/2-i(\omega-\omega_0)}
\right].
\end{aligned}
$$

在正频率峰 $\omega\simeq\omega_0$ 附近，第二项占主导：

$$
\widetilde x(\omega)
\simeq
\frac{x_0}{4\pi}
\frac{1}{\Gamma/2-i(\omega-\omega_0)}.
$$

因此

$$
\boxed{
|\widetilde x(\omega)|^2
\simeq
\left(\frac{x_0}{4\pi}\right)^2
\frac{1}{(\omega-\omega_0)^2+(\Gamma/2)^2}
}.
$$

这说明

$$
\boxed{
\text{时域指数衰减}
\quad\Longleftrightarrow\quad
\text{频域 Lorentz profile}
}.
$$

### 6.3 从位移频谱得到辐射能谱

由 Larmor formula 和 Parseval theorem，正频率的辐射能谱为

$$
\boxed{
\frac{dW}{d\omega}
=\frac{8\pi e^2}{3c^3}\omega^4
|\widetilde x(\omega)|^2
}.
$$

在窄共振峰中 $\omega\simeq\omega_0$，可以在缓慢变化的分子中取 $\omega^4\simeq\omega_0^4$。代入 $|\widetilde x|^2$ 并使用

$$
\Gamma=\omega_0^2\tau
=\frac{2e^2\omega_0^2}{3mc^3},
$$

得到

$$
\boxed{
\frac{dW}{d\omega}
=
\left(\frac12m\omega_0^2x_0^2\right)
\frac{\Gamma/2\pi}
{(\omega-\omega_0)^2+(\Gamma/2)^2}
}.
$$

括号中的第一项是初始机械能，第二项是归一化线型。因此谱线下面积等于初始机械能：

$$
\int_0^\infty\frac{dW}{d\omega}d\omega
\simeq\frac12m\omega_0^2x_0^2.
$$

### 6.4 寿命与线宽

能量按 $e^{-\Gamma t}$ 衰减，因此 energy lifetime 为

$$
t_{\rm life}=\frac{1}{\Gamma}.
$$

而 Lorentz profile 的 FWHM 是 $\Delta\omega=\Gamma$，所以

$$
\boxed{
\Delta\omega_{\rm FWHM}\,t_{\rm life}=1
}.
$$

若使用普通频率 $\nu=\omega/(2\pi)$，则

$$
\boxed{
\Delta\nu_{\rm FWHM}
=\frac{1}{2\pi t_{\rm life}}
}.
$$

物理上，持续时间越短的波列包含的周期越少，频率越难被精确确定，所以谱线越宽。

---

## 7. Driven oscillator 与散射截面

### 7.1 受迫运动方程

入射电场为

$$
E(t)=E_0\cos\omega t.
$$

运动方程为

$$
\boxed{
\ddot x-\tau\dddot x+\omega_0^2x
=\frac{eE_0}{m}\cos\omega t
}.
$$

设稳态解为

$$
x(t)=\operatorname{Re}(Xe^{-i\omega t}).
$$

代入后得到

$$
(\omega_0^2-\omega^2-i\tau\omega^3)X
=\frac{eE_0}{m},
$$

所以

$$
\boxed{
X=\frac{eE_0/m}
{\omega_0^2-\omega^2-i\tau\omega^3}
}.
$$

其模平方为

$$
\boxed{
|X|^2
=\frac{e^2E_0^2/m^2}
{(\omega^2-\omega_0^2)^2+(\tau\omega^3)^2}
}.
$$

分母第一项是 detuning，第二项是 radiation damping。

### 7.2 从辐射功率得到截面

加速度振幅为 $\omega^2|X|$，所以

$$
\langle a^2\rangle=\frac12\omega^4|X|^2.
$$

平均辐射功率为

$$
\langle P_{\rm rad}\rangle
=\frac{e^2\omega^4}{3c^3}|X|^2.
$$

散射截面定义为

$$
\sigma(\omega)
\equiv
\frac{\langle P_{\rm rad}\rangle}{\langle S\rangle}.
$$

使用 $\langle S\rangle=cE_0^2/(8\pi)$，得到

$$
\sigma(\omega)
=\frac{8\pi e^4}{3m^2c^4}
\frac{\omega^4}
{(\omega^2-\omega_0^2)^2+(\omega^3\tau)^2}.
$$

识别

$$
\sigma_T=\frac{8\pi e^4}{3m^2c^4},
$$

最终

$$
\boxed{
\sigma(\omega)
=\sigma_T
\frac{\omega^4}
{(\omega^2-\omega_0^2)^2+(\omega^3\tau)^2}
}.
$$

### 7.3 三个频率区域

#### 低频：$\omega\ll\omega_0$

$$
\boxed{
\sigma(\omega)
\simeq\sigma_T\left(\frac{\omega}{\omega_0}\right)^4
}.
$$

这就是 Rayleigh scattering。它偏好散射高频蓝光，因此能解释蓝天和红色日落。

#### 共振：$\omega\simeq\omega_0$

此时 $\omega^2-\omega_0^2\simeq2\omega_0(\omega-\omega_0)$，截面具有 Lorentz profile，宽度由 $\Gamma=\omega_0^2\tau$ 决定。

#### 高频但仍在经典公式适用范围内：$\omega_0\ll\omega\ll1/\tau$

$$
\boxed{
\sigma(\omega)\rightarrow\sigma_T
}.
$$

驱动太快时，束缚力相对不重要，粒子表现得近似自由。当 $\omega\tau\gtrsim1$ 时，经典 radiation reaction 近似本身已经失效。

### 7.4 与原子谱线的联系

真实原子需要量子力学，但量子跃迁的积分截面常写成经典振子的形式：

$$
\int\sigma(\nu)d\nu
=\frac{\pi e^2}{mc}f_{nn'},
$$

其中 $f_{nn'}$ 是 oscillator strength。经典单振子对应 $f=1$。这就是 RL §3.6 以后讲原子时仍然重要的原因。

---

## 8. 四动量、invariant mass 与 recoil

### 8.1 四动量是什么？

四动量把能量和三维动量组成一个四矢量：

$$
\boxed{
P^\mu
=\left(\frac{E}{c},\mathbf p\right)
=\left(\gamma mc,\gamma m\mathbf v\right)
}.
$$

其中

$$
E=\gamma mc^2,
\qquad
\mathbf p=\gamma m\mathbf v.
$$

采用度规 $(+,-,-,-)$，四动量平方为

$$
\begin{aligned}
P^\mu P_\mu
&=\frac{E^2}{c^2}-p_x^2-p_y^2-p_z^2\\
&=m^2c^2.
\end{aligned}
$$

因此

$$
\boxed{
E^2=p^2c^2+m^2c^4
}.
$$

对光子 $m=0$，所以 $E=pc$。

### 8.2 从能量和动量求速度

对单个有质量粒子，

$$
\frac{\mathbf p}{E}
=\frac{\gamma m\mathbf v}{\gamma mc^2}
=\frac{\mathbf v}{c^2}.
$$

所以

$$
\boxed{
\mathbf v=\frac{\mathbf p c^2}{E}
}.
$$

### 8.3 总四动量与系统静质量

多个粒子组成的系统具有

$$
P_{\rm tot}^\mu=\sum_iP_i^\mu.
$$

系统的 invariant mass $M$ 定义为

$$
\boxed{
M^2c^4=E_{\rm tot}^2-p_{\rm tot}^2c^2
}.
$$

$M$ 不一定等于各粒子静质量之和，因为它还包含系统的动能、内能、辐射能与束缚能。

### 8.4 四动量的 Lorentz boost

若 $K'$ 相对 $K$ 沿 $+x$ 方向运动，而我们从 $K'$ 变换到 $K$，则

$$
\boxed{
\begin{aligned}
E&=\gamma(E'+vp_x'),\\
p_x&=\gamma\left(p_x'+\frac{vE'}{c^2}\right).
\end{aligned}
}
$$

能量和动量在 boost 下相互混合。这就是一个系统即使在 $K'$ 中总动量为零，在 $K$ 中仍可有净动量的原因。

### 8.5 Recoil 是什么？

Recoil 是物体为了满足动量守恒，在吸收或发射光子后获得的运动。

- 发射光子：物体通常向光子相反方向反冲；
- 吸收光子：物体获得与光子同方向的动量。

非相对论 recoil energy 为

$$
E_{\rm recoil}=\frac{p_{\rm recoil}^2}{2m}.
$$

光子能量并不一定全部变成物体内能；一部分可以成为整体 recoil kinetic energy。

---

## 9. 习题 4.10：各向同性发射与动量守恒

### 9.1 题目情景与每一问的任务

一个静质量为 $m$ 的粒子在 $K$ 中以速度 $v$ 运动。$K'$ 是粒子的静止系。在 $K'$ 中，粒子把内能 $W'$ 以各向同性辐射的形式释放。

- (a) 要说明：为什么在 $K'$ 中没有净反冲？
- (b) 要计算：$K$ 中观察到的全部辐射总动量是多少？
- (c) 要判断：辐射带走前向动量后，粒子是否减速？如何满足动量守恒？

这道题主要检验：动量减少不一定意味着速度减少，也可能意味着静质量减少。

### 9.2 (a) 静止系中没有净反冲

在 $K'$ 中，各方向的光子动量互相抵消：

$$
\mathbf p'_{\rm rad}=0.
$$

因此辐射系统的总四动量为

$$
\boxed{
P_{\rm rad}^{\prime\mu}
=\left(\frac{W'}{c},0,0,0\right)
}.
$$

粒子没有 recoil，所以发射后仍在 $K'$ 中静止。但是它失去了内能，静质量变为

$$
\boxed{
m_f=m-\frac{W'}{c^2}
}.
$$

### 9.3 (b) Boost 到 $K$

将辐射四动量从 $K'$ boost 到 $K$：

$$
\begin{aligned}
E_{\rm rad}
&=\gamma(E'_{\rm rad}+vp'_{\rm rad,x})
=\gamma W',\\
p_{\rm rad,x}
&=\gamma\left(p'_{\rm rad,x}+\frac{vE'_{\rm rad}}{c^2}\right)
=\boxed{\frac{\gamma vW'}{c^2}}.
\end{aligned}
$$

尽管在 $K'$ 中总动量为零，在 $K$ 中辐射具有净前向动量，因为 boost 会把能量混入动量分量。

### 9.4 (c) 粒子不减速，动量仍然守恒

发射前粒子动量为

$$
p_i=\gamma mv.
$$

发射后速度仍是 $v$，但静质量变为 $m_f$：

$$
p_f=\gamma m_fv.
$$

粒子损失的动量为

$$
\begin{aligned}
p_i-p_f
&=\gamma(m-m_f)v\\
&=\frac{\gamma vW'}{c^2}\\
&=p_{\rm rad}.
\end{aligned}
$$

所以

$$
\boxed{
p_i=p_f+p_{\rm rad}
}.
$$

粒子没有减速；它的动量减少完全来自静质量减少。

---

## 10. 习题 4.11：吸收光子、反冲与静质量增加

### 10.1 题目情景与每一问的任务

一个静质量为 $m$ 的粒子最初静止，吸收一个能量为 $h\nu$ 的光子。吸收后粒子的静质量变为 $m'$，速度变为 $v'$。

- (a) 要从能量和动量守恒证明 $m/m'$ 的指定公式；重点不是先求 $v'$。
- (b) 要把初始粒子正在运动的情形化到其静止系，并使用 Doppler-shifted frequency $\nu'$。

题目的核心是：光子能量不会全部变成静质量，因为吸收后的粒子必须携带光子的动量，因而具有 recoil kinetic energy。

### 10.2 (a) 能量与动量守恒

吸收前总能量和总动量为

$$
E_i=mc^2+h\nu,
\qquad
p_i=\frac{h\nu}{c}.
$$

吸收后只有一个质量为 $m'$ 的粒子，所以

$$
E_f^2-p_f^2c^2=m'^2c^4.
$$

由四动量守恒，

$$
\begin{aligned}
m'^2c^4
&=(mc^2+h\nu)^2-(h\nu)^2\\
&=m^2c^4+2mc^2h\nu.
\end{aligned}
$$

因此

$$
m'^2=m^2\left(1+\frac{2h\nu}{mc^2}\right),
$$

最终

$$
\boxed{
\frac{m}{m'}
=\left(1+\frac{2h\nu}{mc^2}\right)^{-1/2}
}.
$$

吸收后的速度也可由 $\mathbf v=\mathbf pc^2/E$ 得到：

$$
\boxed{
v'=\frac{h\nu\,c}{mc^2+h\nu}
}.
$$

### 10.3 为什么不是 $m'=m+h\nu/c^2$？

若把全部光子能量都算入静质量，就忽略了 recoil kinetic energy。精确的能量账本由

$$
E_f^2=p_f^2c^2+m'^2c^4
$$

给出，而不能把能量和静质量作简单线性相加。

在 $h\nu\ll mc^2$ 时，展开可得

$$
m'-m\simeq\frac{h\nu}{c^2}
-\frac{(h\nu)^2}{2mc^4}+\cdots.
$$

第二项对应 recoil 对静质量增加量的修正。

### 10.4 (b) 初始粒子正在运动

若实验室系中粒子速度为 $v$，光子传播方向与粒子速度夹角为 $\theta$，则粒子初始静止系中测得的光子频率为

$$
\boxed{
\nu'=\gamma\nu(1-\beta\cos\theta)
}.
$$

在该静止系中直接使用 (a) 的结果：

$$
\boxed{
\frac{m}{m'}
=\left(1+\frac{2h\nu'}{mc^2}\right)^{-1/2}
}.
$$

$m$ 和 $m'$ 是 invariant masses，不依赖参考系；依赖参考系的是光子频率。

---

## 11. 习题 4.12：Poynting-Robertson effect

### 11.1 题目情景与每一问的任务

一颗尘埃粒子以速度 $v$ 绕恒星作圆周运动。它吸收沿径向向外传播的恒星光子，升温后再在自己的静止系中各向同性地发出多余能量。

- (a) 要证明：吸收径向光子不改变尘埃关于恒星的角动量。
- (b) 要证明：各向同性再辐射不改变尘埃速度，却通过降低静质量而降低角动量，并写出 $l/l_0$。
- (c) 要在 $v\ll c$、$h\nu\ll mc^2$ 下作一阶展开，求每个光子造成的 $\Delta l$。
- (d) 要把每个光子的角动量损失转成连续的 $dl/dt$ 和 $dr/dt$，再求从 $1\ {\rm AU}$ 螺旋落入太阳的时间。

这道题是 4.11 的吸收过程与 4.10 的各向同性发射过程的组合。

### 11.2 (a) 吸收径向光子时角动量不变

尘埃关于恒星的角动量是

$$
\mathbf l=\mathbf r\times\mathbf p.
$$

恒星光子沿径向传播，因此

$$
\mathbf p_\gamma\parallel\mathbf r,
$$

从而

$$
\mathbf r\times\mathbf p_\gamma=0.
$$

吸收后

$$
\mathbf p_{\rm after}
=\mathbf p_{\rm before}+\mathbf p_\gamma,
$$

所以

$$
\boxed{
\mathbf l_{\rm after}=\mathbf l_{\rm before}
}.
$$

吸收会改变能量和径向动量，但不会直接改变切向角动量。

### 11.3 (b) 再辐射降低静质量和角动量

设冷尘埃在吸收前静质量为 $m$，吸收后变为 $m'$。在尘埃静止系中，再辐射各向同性，因此没有 recoil，四速度 $U^\mu$ 不变。

由于

$$
P^\mu=mU^\mu,
$$

静质量从 $m'$ 降回 $m$ 时，三动量按同样比例下降：

$$
\frac{p_{\rm after}}{p_{\rm before}}
=\frac{m}{m'}.
$$

辐射瞬间位置不变，所以角动量满足

$$
\boxed{
\frac{l}{l_0}=\frac{m}{m'}
}.
$$

利用 4.11 的吸收结果：

$$
\boxed{
l
=l_0
\left(1+\frac{2h\nu'}{mc^2}\right)^{-1/2}
}.
$$

这里 $\nu'$ 是入射光子在尘埃初始静止系中测得的频率。再辐射不改变尘埃的瞬时速度大小和方向，但因为 $p=\gamma mv$ 中的 $m$ 减小，动量和角动量仍会减小。

### 11.4 (c) 非相对论、低光子能量展开

圆轨道速度沿切向，恒星光子沿径向，所以二者夹角为 $90^\circ$：

$$
\nu'=\gamma\nu\simeq\nu
$$

到最低阶成立。对

$$
\left(1+\frac{2h\nu}{mc^2}\right)^{-1/2}
$$

作一阶展开：

$$
(1+x)^{-1/2}\simeq1-\frac{x}{2}.
$$

于是

$$
l\simeq l_0\left(1-\frac{h\nu}{mc^2}\right),
$$

所以每个光子造成

$$
\boxed{
\Delta l
\equiv l-l_0
=-\frac{l_0h\nu}{mc^2}
}.
$$

虽然最终讨论的是 $v\ll c$ 的尘埃轨道，这个效应来自 $1/c^2$ 阶修正，因此本质上仍是相对论效应。

### 11.5 (d) 从角动量损失率到落入太阳的时间

设单位时间吸收的光子数为 $\dot N$。由 (c)，

$$
\frac{dl}{dt}
=\dot N\Delta l
=-\frac{l}{mc^2}\dot Nh\nu.
$$

定义吸收功率

$$
P_{\rm abs}=\dot Nh\nu,
$$

则

$$
\boxed{
\frac{1}{l}\frac{dl}{dt}
=-\frac{P_{\rm abs}}{mc^2}
}.
$$

太阳在半径 $r$ 处的辐射通量是

$$
F(r)=\frac{L_\odot}{4\pi r^2}.
$$

截面为 $\sigma$ 的尘埃吸收功率为

$$
P_{\rm abs}
=\sigma F(r)
=\frac{\sigma L_\odot}{4\pi r^2}.
$$

圆轨道角动量为

$$
l=mvr=m\sqrt{GM_\odot r}.
$$

因此

$$
\frac{1}{l}\frac{dl}{dt}
=\frac{1}{2r}\frac{dr}{dt}.
$$

代入角动量损失率：

$$
\frac{1}{2r}\frac{dr}{dt}
=-\frac{\sigma L_\odot}{4\pi mc^2r^2},
$$

得到

$$
\boxed{
\frac{dr}{dt}
=-\frac{\sigma L_\odot}{2\pi mc^2r}
}.
$$

从 $r_0$ 积分到 $0$：

$$
\boxed{
t_{\rm PR}
=\frac{\pi mc^2r_0^2}{\sigma L_\odot}
}.
$$

使用

$$
\begin{aligned}
m&=10^{-11}\ {\rm g},
&\sigma&=10^{-8}\ {\rm cm^2},\\
r_0&=1\ {\rm AU}=1.496\times10^{13}\ {\rm cm},
&L_\odot&=3.83\times10^{33}\ {\rm erg\,s^{-1}}.
\end{aligned}
$$

得到

$$
t_{\rm PR}\simeq1.65\times10^{11}\ {\rm s}
\simeq\boxed{5.2\times10^3\ {\rm yr}}.
$$

这是题目“始终保持圆轨道”假设下的理想结果。真实尘埃还会受辐射压力、升华、碰撞和轨道偏心等影响。

---

## 12. 常见混淆与检查方法

### 12.1 $\mathbf F_{\rm rad}=+m\tau\dot{\mathbf a}$ 为什么能阻尼？

对近似谐振运动，

$$
\dddot x\simeq-\omega_0^2\dot x,
$$

所以

$$
F_{\rm rad}\simeq-m\tau\omega_0^2\dot x,
$$

方向与速度相反。

### 12.2 振幅、能量与线宽中的两个 2

$$
\begin{aligned}
A(t)&\propto e^{-\Gamma t/2},\\
E(t)&\propto e^{-\Gamma t},\\
\mathrm{HWHM}&=\frac{\Gamma}{2},
&\mathrm{FWHM}&=\Gamma.
\end{aligned}
$$

### 12.3 Lorentz profile 与 Lorentz transformation 不是一回事

Lorentz profile 是一个频谱线型；Lorentz transformation 是参考系之间的时空变换。二者只是在英文中共享 Lorentz 这个名字。

### 12.4 动量减少不等于速度一定减少

$$
p=\gamma mv.
$$

若 $v$ 不变而 $m$ 减小，$p$ 仍然会减小。习题 4.10 和 4.12 都在考这个区别。

### 12.5 单个光子系统与多光子系统的 invariant mass

单个光子满足

$$
P_\gamma^2=0.
$$

但一组向不同方向传播的光子可以有非零系统 invariant mass。例如在其总动量为零的参考系中，总能量为 $W'$，则

$$
M_{\rm rad}=\frac{W'}{c^2}.
$$

这不代表单个光子具有静质量。

### 12.6 Problem 4.12 的吸收与发射必须分开

- 吸收径向光子：增加径向动量和静质量，但不增加角动量；
- 各向同性再辐射：不改变瞬时速度，却通过降低静质量而降低角动量。

### 12.7 极限检查

- $\tau\rightarrow0$：辐射反作用消失，恢复普通谐振子；
- $\Gamma\rightarrow0$：寿命趋于无穷，Lorentz profile 收缩为单频峰；
- $\omega\ll\omega_0$：$\sigma\propto\omega^4$，得到 Rayleigh scattering；
- $\omega_0\ll\omega\ll1/\tau$：$\sigma\rightarrow\sigma_T$；
- $h\nu/(mc^2)\rightarrow0$：吸收造成的质量与角动量修正趋于零；
- $W'\rightarrow0$：4.10 中辐射能量和辐射动量都趋于零。

---

## 13. 核心公式速查

### Radiation reaction

$$
\tau=\frac{2e^2}{3mc^3},
\qquad
\mathbf F_{\rm rad}=m\tau\dot{\mathbf a},
\qquad
m(\mathbf a-\tau\dot{\mathbf a})=\mathbf F_{\rm ext}.
$$

### 自由束缚振子

$$
\begin{gathered}
\ddot x-\tau\dddot x+\omega_0^2x=0,\\
\ddot x+\Gamma\dot x+\omega_0^2x=0,
\qquad
\Gamma=\omega_0^2\tau,\\
x(t)\simeq x_0e^{-\Gamma t/2}\cos\omega_0t.
\end{gathered}
$$

### Lorentz profile

$$
L(\omega)
=\frac{\Gamma/2\pi}
{(\omega-\omega_0)^2+(\Gamma/2)^2},
\qquad
\mathrm{FWHM}=\Gamma,
\qquad
t_{\rm life}=\Gamma^{-1}.
$$

### Driven oscillator scattering

$$
\sigma(\omega)
=\sigma_T
\frac{\omega^4}
{(\omega^2-\omega_0^2)^2+(\omega^3\tau)^2}.
$$

### 四动量

$$
P^\mu=\left(\frac Ec,\mathbf p\right),
\qquad
P^2=m^2c^2,
\qquad
E^2=p^2c^2+m^2c^4,
\qquad
\mathbf v=\frac{\mathbf pc^2}{E}.
$$

### Problem 4.10

$$
E_{\rm rad}=\gamma W',
\qquad
p_{\rm rad}=\frac{\gamma vW'}{c^2}.
$$

### Problem 4.11

$$
\frac{m}{m'}
=\left(1+\frac{2h\nu}{mc^2}\right)^{-1/2},
\qquad
v'=\frac{h\nu\,c}{mc^2+h\nu}.
$$

### Problem 4.12

$$
\Delta l=-\frac{l_0h\nu}{mc^2},
\qquad
t_{\rm PR}=\frac{\pi mc^2r_0^2}{\sigma L_\odot}.
$$

---

## 14. 参考资料

1. Rybicki, G. B., & Lightman, A. P., *Radiative Processes in Astrophysics*, §§3.5-3.6 and Problems 4.10-4.12.
2. RL Fig. 3.8：受 radiation reaction 阻尼的自由束缚振子，其功率谱为 Lorentz profile，FWHM 为 $\Gamma$。
3. RL Fig. 3.9：受迫束缚振子的散射截面，展示 Rayleigh、resonance 与 Thomson 三个区域。

