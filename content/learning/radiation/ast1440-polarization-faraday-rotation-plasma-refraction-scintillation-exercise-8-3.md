---
title: "AST1440 偏振、Faraday 旋转、等离子体折射与闪烁：RL §2.4、§8.1–8.2 及习题 8.3 详解"
description: "偏振椭圆与 Stokes parameters、冷等离子体色散、磁化等离子体的圆双折射与 Faraday rotation、RM 与 DM、等离子体折射与 scintillation，以及习题 8.3 的完整解答与单位制附录。"
date: "2026-10-01"
tags: ["AST1440","Polarization","Faraday rotation","Plasma","Scintillation","Exercises"]
order: 7
draft: false
---

# AST1440 偏振、Faraday 旋转、等离子体折射与闪烁：RL §2.4、§8.1–8.2 及习题 8.3 详解

> 课程：AST1440 — Radiation；本次主题为 polarization、Faraday rotation、radiation bending 与 scintillation。  
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§2.4，印刷页 62–68；§8.1，印刷页 224–228；§8.2，印刷页 229–231；习题 8.3，印刷页 236。  
> 整理日期：2026 年 10 月 1 日。  
> 本文按物理依赖关系整合教材阅读与讨论中的全部追问：偏振椭圆和 Stokes parameters、为什么偏振角在 $Q-U$ 平面中变成 $2\chi$、完全与部分偏振的判据、冷等离子体色散、磁场如何使左右圆偏振成为不同本征模、$k_R$ 与 $k_L$ 的含义、Faraday rotation 公式的逐步推导、RM/DM 的物理意义与 $0.812/1.232$ 系数、Faraday depth 和 RM synthesis、经典电子半径、等离子体相位屏与偏折角、散射和 scintillation，以及 $\Delta\nu_{\rm d}\tau_{\rm sc}$ 的关系。习题 8.3 先给中文推导，再给可直接用于作业的英文版本。

## 目录

1. [本次预习要求与逻辑主线](#1-本次预习要求与逻辑主线)
2. [统一符号、单位制、复指数约定与假设](#2-统一符号单位制复指数约定与假设)
3. [RL §2.4：偏振椭圆与 Stokes parameters](#3-rl-24偏振椭圆与-stokes-parameters)
4. [为什么出现 $2\chi$，以及完全与部分偏振的判据](#4-为什么出现-2chi以及完全与部分偏振的判据)
5. [RL §8.1：冷、各向同性等离子体中的色散](#5-rl-81冷各向同性等离子体中的色散)
6. [从各向同性到磁化等离子体](#6-从各向同性到磁化等离子体)
7. [$k_R$、$k_L$、相位积累与线偏振旋转](#7-k_rk_l相位积累与线偏振旋转)
8. [RL §8.2：Faraday rotation 公式的完整推导](#8-rl-82faraday-rotation-公式的完整推导)
9. [RM、DM 与视线平均磁场](#9-rmdm-与视线平均磁场)
10. [Faraday rotation 的扩展：退偏振、Faraday depth 与 RM synthesis](#10-faraday-rotation-的扩展退偏振faraday-depth-与-rm-synthesis)
11. [等离子体折射：经典电子半径、相位屏与偏折角](#11-等离子体折射经典电子半径相位屏与偏折角)
12. [散射、脉冲展宽与 scintillation](#12-散射脉冲展宽与-scintillation)
13. [习题 8.3：用色散和 Faraday rotation 求平均磁场](#13-习题-83用色散和-faraday-rotation-求平均磁场)
14. [English assignment-ready solution](#14-english-assignment-ready-solution)
15. [复习清单、量纲检查、极限检验与常见混淆](#15-复习清单量纲检查极限检验与常见混淆)
16. [资料与引用](#16-资料与引用)
17. [附录：SI 与 Gaussian-cgs 单位制对比及典型公式](#17-附录si-与-gaussian-cgs-单位制对比及典型公式)

---

## 1. 本次预习要求与逻辑主线

### 1.1 阅读范围

本次指定内容分成三层：

1. RL §2.4 建立偏振语言：线偏振、圆偏振、椭圆偏振和 Stokes parameters。
2. RL §8.2 讨论电磁波沿背景磁场传播时的圆双折射和 Faraday rotation。
3. RL Problem 8.3 把 §8.1 的脉冲色散与 §8.2 的 Faraday rotation 结合起来，求电子密度加权的视线磁场。

老师还会讨论教材这一小节没有完全展开的两类推广：

- Faraday rotation 的观测扩展，包括 RM、退偏振、Faraday depth 和 RM synthesis；
- 电子密度不均匀造成的折射、散射、多径传播和 scintillation。

由于 Problem 8.3 直接使用 §8.1 的色散到达时间公式，本文也把 §8.1 纳入完整推导，而不是把该公式当作未经解释的已知结果。

### 1.2 整体因果链

本次内容可以压缩为三条互相连接的主线。

第一条是偏振描述：

$$
\boxed{
E_x,E_y\text{ 的振幅与相位差}
\longrightarrow
\text{偏振椭圆}
\longrightarrow
(I,Q,U,V)
}.
$$

第二条是磁化等离子体传播：

$$
\boxed{
\mathbf B_0\neq0
\longrightarrow
\text{电子回旋}
\longrightarrow
\epsilon_R\neq\epsilon_L
\longrightarrow
k_R\neq k_L
\longrightarrow
\text{Faraday rotation}
}.
$$

第三条是电子密度结构：

$$
\boxed{
n_e(\mathbf r)\text{ 不均匀}
\longrightarrow
\text{相位梯度}
\longrightarrow
\text{折射与多径传播}
\longrightarrow
\text{scattering/scintillation}
}.
$$

### 1.3 本节最重要的结果

冷、非磁化等离子体：

$$
\boxed{
\epsilon(\omega)=1-\frac{\omega_p^2}{\omega^2},
\qquad
\omega^2=\omega_p^2+c^2k^2
}.
$$

Faraday rotation：

$$
\boxed{
\Delta\chi
=
\frac{2\pi e^3}{m_e^2c^2\omega^2}
\int n_eB_\parallel\,ds
=\mathrm{RM}\,\lambda^2
}.
$$

等离子体相位与偏折：

$$
\boxed{
\delta\phi=-r_e\lambda N_e,
\qquad
\boldsymbol\alpha
\simeq
-\frac{r_e\lambda^2}{2\pi}\nabla_\perp N_e
}.
$$

多径延迟与衍射 scintillation 带宽：

$$
\boxed{
\Delta\nu_{\rm d}\tau_{\rm sc}
\sim\frac{1}{2\pi}
}.
$$

---

## 2. 统一符号、单位制、复指数约定与假设

### 2.1 符号表

| 符号 | 含义 | 说明 |
|---|---|---|
| $\mathbf E,\mathbf B$ | 电场和磁场 | RL 正文使用 Gaussian-cgs |
| $\mathbf k,k$ | 波矢及其大小 | $k=2\pi/\lambda_{\rm medium}$ |
| $\omega,\nu$ | 角频率和普通频率 | $\omega=2\pi\nu$ |
| $n_e$ | 自由电子数密度 | 不要与折射率混淆 |
| $n_r$ | 折射率 | 冷等离子体中 $n_r=ck/\omega$ |
| $\omega_p$ | 电子等离子体频率 | $\omega_p^2=4\pi n_e e^2/m_e$，cgs |
| $\omega_B$ | 电子回旋角频率 | $eB/(m_ec)$，cgs |
| $I,Q,U,V$ | Stokes parameters | $I$ 为总强度，$Q,U$ 为线偏振，$V$ 为圆偏振 |
| $\chi$ | 线偏振位置角 | $\chi\equiv\chi+\pi$ |
| $P$ | 复线偏振 | $P=Q+iU$ |
| $\mathrm{DM}$ | dispersion measure | $\int n_e ds$ |
| $\mathrm{RM}$ | rotation measure | $d\chi/d\lambda^2$ |
| $\phi$ | Faraday depth | 从某一发射位置到观察者的 $n_eB_\parallel$ 积分 |
| $N_e$ | 电子柱密度 | $\int n_e ds$，与 DM 是同类物理量但单位写法可不同 |
| $r_e$ | 经典电子半径 | $e^2/(m_ec^2)$，cgs |
| $\boldsymbol\alpha$ | 等离子体折射偏角 | 小角度、薄相位屏近似 |
| $\tau_{\rm sc}$ | 脉冲散射时间 | 多径延迟的特征时间 |
| $\Delta\nu_{\rm d}$ | diffractive scintillation 去相关带宽 | 与 $\tau_{\rm sc}$ 近似互为 Fourier 尺度 |

### 2.2 复指数与偏振约定

全文采用教材的平面波约定

$$
\boxed{
e^{i(\mathbf k\cdot\mathbf r-\omega t)}
}.
$$

因此

$$
\nabla\rightarrow i\mathbf k,
\qquad
\frac{\partial}{\partial t}\rightarrow-i\omega.
$$

圆偏振的“左/右”符号会随观察方向、时间指数和天文/工程 convention 改变。本文重点使用不依赖命名的物理结论：两个相反旋向的圆偏振本征模具有不同波数。旋转角的正负必须与采用的 convention 一致。

### 2.3 Gaussian-cgs 与 SI

RL 的等离子体推导采用 Gaussian-cgs：

$$
\omega_p^2=\frac{4\pi n_e e^2}{m_e},
\qquad
\omega_B=\frac{eB}{m_ec}.
$$

SI 中相同物理量写成

$$
\omega_p^2=\frac{n_e e^2}{m_e\epsilon_0},
\qquad
\omega_B=\frac{eB}{m_e}.
$$

不能把 cgs 的电荷单位、磁场单位和 SI 公式混合使用。

磁感应强度的数值换算是

$$
\boxed{
1\,\mathrm T=10^4\,\mathrm G,
\qquad
1\,\mathrm G=10^{-4}\,\mathrm T
}.
$$

因此

$$
1\,\mu\mathrm G=10^{-10}\,\mathrm T=0.1\,\mathrm{nT}.
$$

SI 中

$$
\omega_B
=1.7588\times10^{11}B(\mathrm T)\ \mathrm{rad\,s^{-1}},
$$

cgs 中

$$
\omega_B
=1.7588\times10^7B(\mathrm G)\ \mathrm{rad\,s^{-1}}.
$$

两式在 $1\,\mathrm T=10^4\,\mathrm G$ 下完全一致。

磁场能量密度也必须按单位制成套使用：

$$
u_B=\frac{B^2}{2\mu_0}
\quad\text{(SI)},
\qquad
u_B=\frac{B^2}{8\pi}
\quad\text{(Gaussian-cgs)}.
$$

### 2.4 主要近似

- 冷、无碰撞、非相对论电子；离子在所考虑频率下近似不动。
- §8.1 无背景磁场，因此局部各向同性。
- §8.2 的基础推导令传播方向沿背景磁场，并取 $\omega\gg\omega_p,\omega_B$。
- Faraday rotation 的简单 $\lambda^2$ 定律首先针对外部、非发射的 Faraday screen。
- 折射公式使用高频、小偏折、几何光学和薄相位屏近似。
- scintillation 的 $2\pi\Delta\nu_{\rm d}\tau_{\rm sc}\sim1$ 系数依赖散射尾与带宽定义；反比例关系比精确系数更普遍。

---

## 3. RL §2.4：偏振椭圆与 Stokes parameters

### 3.1 两个横向电场分量

设电磁波沿 $z$ 方向传播。电场位于 $x-y$ 平面：

$$
E_x=\mathcal E_x\cos(\omega t-\phi_x),
\qquad
E_y=\mathcal E_y\cos(\omega t-\phi_y).
$$

偏振状态由三个独立信息决定：

1. $x$ 方向振幅 $\mathcal E_x$；
2. $y$ 方向振幅 $\mathcal E_y$；
3. 相位差 $\delta=\phi_x-\phi_y$。

一般情况下，电场矢量尖端随时间画出椭圆，因此一般偏振状态是椭圆偏振。

### 3.2 三种重要情形

线偏振：

$$
\delta=0\ \text{或}\ \pi.
$$

两个分量同步或反向，电场始终沿一条固定直线来回振荡。

圆偏振：

$$
\mathcal E_x=\mathcal E_y,
\qquad
\delta=\pm\frac{\pi}{2}.
$$

电场大小固定、方向均匀旋转。

椭圆偏振：除上述退化情况外，电场尖端画出椭圆。

### 3.3 Stokes parameters

对准单色或窄带辐射，RL 的定义可以写成

$$
I=\langle |E_x|^2\rangle+\langle |E_y|^2\rangle,
$$

$$
Q=\langle |E_x|^2\rangle-\langle |E_y|^2\rangle,
$$

$$
U=\langle E_xE_y^*\rangle+\langle E_yE_x^*\rangle,
$$

$$
V=\frac{1}{i}
\left[
\langle E_xE_y^*\rangle-\langle E_yE_x^*\rangle
\right].
$$

物理上：

- $I$ 是总强度；
- $Q$ 比较 $x$ 与 $y$ 方向的线偏振；
- $U$ 比较 $+45^\circ$ 与 $-45^\circ$ 方向的线偏振；
- $V$ 描述圆偏振，正负取决于旋向 convention。

定义线偏振强度

$$
L=\sqrt{Q^2+U^2}.
$$

偏振位置角为

$$
\boxed{
\chi=\frac12\operatorname{atan2}(U,Q)
}.
$$

使用 $\operatorname{atan2}$ 而不是普通 $\arctan(U/Q)$，是为了保留 $Q,U$ 所在象限的信息。

### 3.4 复线偏振

定义

$$
\boxed{
P\equiv Q+iU
}.
$$

因为

$$
Q=L\cos2\chi,
\qquad
U=L\sin2\chi,
$$

所以

$$
\boxed{
P=Le^{2i\chi}
}.
$$

这个形式把线偏振强度放在复数模长中，把偏振角放在复相位中，是理解 Faraday rotation、退偏振和 RM synthesis 的最方便语言。

---

## 4. 为什么出现 $2\chi$，以及完全与部分偏振的判据

### 4.1 偏振方向是一条无箭头的轴

线偏振可以写成

$$
\mathbf E(t)
=E_0\cos\omega t\,
\hat{\mathbf e}_\chi,
$$

其中

$$
\hat{\mathbf e}_\chi
=\cos\chi\,\hat{\mathbf x}
+\sin\chi\,\hat{\mathbf y}.
$$

把偏振角增加 $\pi$：

$$
\hat{\mathbf e}_{\chi+\pi}
=-\hat{\mathbf e}_\chi.
$$

于是

$$
\mathbf E'(t)
=-E_0\cos\omega t\,\hat{\mathbf e}_\chi
=E_0\cos(\omega t+\pi)\hat{\mathbf e}_\chi.
$$

这只相当于把振荡相位平移半个周期，电场仍沿同一条直线振荡。因此

$$
\boxed{
\chi\equiv\chi+\pi
}.
$$

### 4.2 为什么 $Q,U$ 中必须是 $2\chi$

对于线偏振，

$$
E_x=E_0\cos\chi\cos\omega t,
\qquad
E_y=E_0\sin\chi\cos\omega t.
$$

于是

$$
Q
=\langle E_x^2\rangle-\langle E_y^2\rangle
\propto
\cos^2\chi-\sin^2\chi
=\cos2\chi,
$$

而

$$
U
=2\langle E_xE_y\rangle
\propto
2\cos\chi\sin\chi
=\sin2\chi.
$$

因此

$$
Q=L\cos2\chi,
\qquad
U=L\sin2\chi.
$$

当真实偏振轴从 $0^\circ$ 转到 $180^\circ$ 时，$(Q,U)$ 向量在 Stokes 平面中从 $0^\circ$ 转到 $360^\circ$，恰好回到同一点。这保证 $\chi$ 和 $\chi+180^\circ$ 表示同一物理状态。

### 4.3 完全偏振为什么满足等式

设两个分量振幅为 $a,b$，相位差为 $\delta$。对于固定偏振椭圆，

$$
I=a^2+b^2,
$$

$$
Q=a^2-b^2,
$$

$$
U=2ab\cos\delta,
\qquad
V=2ab\sin\delta.
$$

因此

$$
\begin{aligned}
Q^2+U^2+V^2
&=(a^2-b^2)^2
+4a^2b^2(\cos^2\delta+\sin^2\delta)\\
&=(a^2-b^2)^2+4a^2b^2\\
&=(a^2+b^2)^2\\
&=I^2.
\end{aligned}
$$

所以完全偏振时

$$
\boxed{
I^2=Q^2+U^2+V^2
}.
$$

完全偏振不等于完全线偏振。完全圆偏振具有 $Q=U=0$、$|V|=I$，仍满足同一等式。

### 4.4 部分偏振为什么是不等式

定义

$$
A=\langle|E_x|^2\rangle,
\qquad
B=\langle|E_y|^2\rangle,
\qquad
C=\langle E_xE_y^*\rangle.
$$

则

$$
I=A+B,
\qquad
Q=A-B,
$$

$$
U=2\operatorname{Re}C,
\qquad
V=2\operatorname{Im}C.
$$

所以

$$
Q^2+U^2+V^2=(A-B)^2+4|C|^2,
$$

而

$$
I^2=(A+B)^2=(A-B)^2+4AB.
$$

两者相减：

$$
I^2-(Q^2+U^2+V^2)
=4(AB-|C|^2).
$$

Cauchy–Schwarz 不等式给出

$$
|C|^2
\le
\langle|E_x|^2\rangle
\langle|E_y|^2\rangle
=AB.
$$

因此

$$
\boxed{
I^2\ge Q^2+U^2+V^2
}.
$$

等号成立当且仅当两个电场分量始终保持固定的复数比例，即振幅比和相位差不随时间改变；这正是单一、固定偏振椭圆的条件。

### 4.5 偏振度

总偏振度定义为

$$
\boxed{
p=\frac{\sqrt{Q^2+U^2+V^2}}{I}
}.
$$

由上面的不等式立即得到

$$
0\le p\le1.
$$

- $p=1$：完全偏振；
- $0<p<1$：部分偏振；
- $p=0$：完全非偏振，$Q=U=V=0$。

两个强度相同、互不相干且互相正交的线偏振分量，各自完全偏振，但相加后 $Q,U,V$ 可以全部抵消。因此“部分偏振”是观测时间、频率和空间分辨率下的统计性质。

---

## 5. RL §8.1：冷、各向同性等离子体中的色散

### 5.1 模型与电子响应

§8.1 假设没有外部背景磁场，忽略离子运动、碰撞、压力和热运动。电子满足

$$
m_e\frac{d\mathbf v}{dt}=-e\mathbf E.
$$

使用 $e^{i(\mathbf k\cdot\mathbf r-\omega t)}$：

$$
-i\omega m_e\mathbf v=-e\mathbf E,
$$

所以

$$
\mathbf v=-\frac{ie}{m_e\omega}\mathbf E.
$$

电流密度为

$$
\mathbf j=-n_e e\mathbf v
=\frac{in_e e^2}{m_e\omega}\mathbf E
\equiv\sigma(\omega)\mathbf E.
$$

这里的 $\sigma$ 是纯虚数，表示电子速度与电场相差 $90^\circ$。电子在一个周期中先从场获得能量、再把能量归还；理想无碰撞模型没有净电阻加热。

### 5.2 介电常数

把电流并入 Ampère–Maxwell 方程，可以定义

$$
\epsilon(\omega)
=1-\frac{4\pi\sigma}{i\omega}.
$$

代入 $\sigma$：

$$
\epsilon(\omega)
=1-\frac{4\pi n_e e^2}{m_e\omega^2}.
$$

定义

$$
\boxed{
\omega_p^2=\frac{4\pi n_e e^2}{m_e}
},
$$

得到

$$
\boxed{
\epsilon(\omega)=1-\frac{\omega_p^2}{\omega^2}
}.
$$

由于电子运动方程中没有任何特殊空间方向，$\mathbf v$ 始终平行于 $\mathbf E$，介电张量是

$$
\epsilon_{ij}=\epsilon\,\delta_{ij}.
$$

所以介质各向同性，两个相互垂直的横向线偏振具有相同传播性质。

### 5.3 色散关系与截止

横向电磁波满足

$$
c^2k^2=\epsilon\omega^2.
$$

代入介电常数：

$$
c^2k^2
=\omega^2-\omega_p^2.
$$

因此

$$
\boxed{
\omega^2=\omega_p^2+c^2k^2
}.
$$

当 $\omega>\omega_p$ 时，$k$ 为实数，电磁波可以传播。  
当 $\omega<\omega_p$ 时，$k=i\kappa$ 为虚数，波幅按 $e^{-\kappa z}$ 衰减，只形成 evanescent field。因此 $\omega_p$ 是截止角频率。

### 5.4 相速度与群速度

折射率为

$$
n_r=\frac{ck}{\omega}
=\sqrt{1-\frac{\omega_p^2}{\omega^2}}<1.
$$

相速度：

$$
\boxed{
v_{\rm ph}=\frac{\omega}{k}=\frac{c}{n_r}>c
}.
$$

群速度：

$$
v_g=\frac{d\omega}{dk}.
$$

对 $\omega^2=\omega_p^2+c^2k^2$ 求导：

$$
2\omega\frac{d\omega}{dk}=2c^2k,
$$

所以

$$
\boxed{
v_g
=c\sqrt{1-\frac{\omega_p^2}{\omega^2}}<c
}.
$$

两者满足

$$
v_{\rm ph}v_g=c^2.
$$

相速度大于 $c$ 不传递独立信息；脉冲包络、能量和调制以群速度传播。

### 5.5 脉冲到达时间与 DM

脉冲星宽带信号的到达时间是

$$
t_p(\omega)=\int_0^d\frac{ds}{v_g}.
$$

当 $\omega\gg\omega_p$ 时，

$$
\frac{1}{v_g}
=\frac{1}{c}
\left(1-\frac{\omega_p^2}{\omega^2}\right)^{-1/2}
\simeq
\frac{1}{c}
\left(1+\frac{\omega_p^2}{2\omega^2}\right).
$$

因此

$$
t_p
\simeq
\frac{d}{c}
+\frac{1}{2c\omega^2}
\int_0^d\omega_p^2\,ds.
$$

代入 $\omega_p^2=4\pi n_e e^2/m_e$：

$$
\boxed{
t_p
\simeq
\frac{d}{c}
+\frac{2\pi e^2}{m_ec\omega^2}
\int_0^d n_e\,ds
}.
$$

定义

$$
\boxed{
\mathrm{DM}=\int_0^d n_e\,ds
}.
$$

于是额外延迟满足

$$
\boxed{
\Delta t_{\rm DM}\propto\mathrm{DM}\,\nu^{-2}
}.
$$

对 $\omega$ 求导：

$$
\boxed{
\frac{dt_p}{d\omega}
=
-\frac{4\pi e^2}{m_ec\omega^3}
\int n_e\,ds
}.
$$

负号表示频率越高，到达时间越早。其单位是

$$
\left[\frac{dt_p}{d\omega}\right]
=\frac{\mathrm s}{\mathrm{s^{-1}}}
=\mathrm{s^2}.
$$

### 5.6 色散、耗散与折射不能混为一谈

- 色散：$v_g$ 随频率变化，使宽带脉冲不同频率在不同时刻到达。
- 耗散：介质不可逆地吸收能量，需要介电常数或电导率的耗散部分。
- 折射：折射率在空间中变化，使传播方向弯曲。

理想均匀冷等离子体可以有色散而没有耗散，也不会因为均匀性本身产生横向偏折。

---

## 6. 从各向同性到磁化等离子体

### 6.1 无磁场时为什么两个偏振等价

没有背景磁场时，

$$
m_e\dot{\mathbf v}=-e\mathbf E.
$$

电子响应可以写成

$$
\mathbf v=C(\omega)\mathbf E,
$$

其中 $C(\omega)$ 是标量。把坐标轴旋转后方程形式不变，没有任何方向被介质优先选择。因此

$$
\epsilon_{ij}=\epsilon\delta_{ij},
$$

所有横向偏振共享同一个

$$
k=\frac{\omega}{c}\sqrt\epsilon.
$$

### 6.2 背景磁场提供特殊方向

加入背景磁场后，运动方程变成

$$
m_e\frac{d\mathbf v}{dt}
=-e\mathbf E
-\frac{e}{c}\mathbf v\times\mathbf B_0.
$$

令

$$
\mathbf B_0=B_0\hat{\mathbf z},
$$

则横向分量满足

$$
-i\omega m_ev_x
=-eE_x-\frac{eB_0}{c}v_y,
$$

$$
-i\omega m_ev_y
=-eE_y+\frac{eB_0}{c}v_x.
$$

现在 $x,y$ 运动互相耦合，介电响应不再是标量。磁场通过 $\mathbf v\times\mathbf B_0$ 区分不同旋转方向。

### 6.3 为什么圆偏振是本征模

定义

$$
E_\pm=E_x\pm iE_y,
\qquad
v_\pm=v_x\pm iv_y.
$$

这两个组合分别代表相反旋向的圆偏振。原本耦合的 $x,y$ 方程在圆偏振基底中解耦，分母分别出现

$$
\omega-\omega_B,
\qquad
\omega+\omega_B,
$$

其中

$$
\boxed{
\omega_B=\frac{eB_0}{m_ec}
}
$$

是 cgs 中的电子回旋角频率。

因此两个圆偏振模看到不同的介电常数：

$$
\boxed{
\epsilon_{R,L}
=1-
\frac{\omega_p^2}
{\omega(\omega\mp\omega_B)}
}.
$$

一个圆偏振电场与电子自然回旋方向较接近，另一个相反；电子对二者的响应不同。这种现象称为 circular birefringence，圆双折射。

---

## 7. $k_R$、$k_L$、相位积累与线偏振旋转

### 7.1 $k_R$ 和 $k_L$ 是什么

右旋和左旋圆偏振本征模可以分别写成

$$
\mathbf E_R
=\mathbf E_{R,0}e^{i(k_Rz-\omega t)},
$$

$$
\mathbf E_L
=\mathbf E_{L,0}e^{i(k_Lz-\omega t)}.
$$

$k_R$ 与 $k_L$ 是两个模的波数，即相位每传播单位距离改变多少：

$$
k=\frac{2\pi}{\lambda_{\rm medium}}.
$$

它们由各自的介电常数决定：

$$
\boxed{
k_{R,L}
=\frac{\omega}{c}\sqrt{\epsilon_{R,L}}
=\frac{\omega}{c}n_{R,L}
}.
$$

在界面处，频率由辐射源和时间平移对称性固定，因此两个模具有相同 $\omega$，但可以有不同的 $k$、介质内波长和相速度：

$$
v_{{\rm ph},R}=\frac{\omega}{k_R},
\qquad
v_{{\rm ph},L}=\frac{\omega}{k_L}.
$$

### 7.2 为什么传播相位是 $\int k\,ds$

平面波的相位为

$$
\Phi(z,t)=kz-\omega t+\Phi_0.
$$

在固定时间比较两个位置，传播距离 $d$ 造成的相位差是

$$
\Delta\Phi=kd.
$$

因此

$$
k=\frac{d\phi}{ds},
\qquad
d\phi=k\,ds.
$$

介质不均匀时，$k=k(s)$，把路径分成许多小段并求和：

$$
\phi\simeq\sum_i k_i\Delta s_i
\longrightarrow
\boxed{
\phi=\int k(s)\,ds
}.
$$

三维形式是

$$
d\phi=\mathbf k\cdot d\mathbf r.
$$

沿射线传播时 $\mathbf k\parallel d\mathbf r$，才简化为 $k\,ds$。

因此

$$
\phi_R=\int k_R\,ds,
\qquad
\phi_L=\int k_L\,ds.
$$

比较同一时刻、同一位置的两个模时，它们共同的 $-\omega t$ 项相消，只剩传播造成的相位差：

$$
\phi_R-\phi_L
=\int(k_R-k_L)\,ds.
$$

### 7.3 线偏振为什么会旋转

线偏振可以分解成等振幅的两个相反圆偏振：

$$
\text{linear}=R+L.
$$

开始时若二者相位合适，合成电场沿一条固定直线振荡。传播以后，$k_R\neq k_L$ 使相对相位发生变化。重新叠加后仍形成线偏振，但偏振轴旋转。

几何上，线偏振角的旋转量是圆偏振相对相位差的一半：

$$
\boxed{
\Delta\chi
=\frac12(\phi_R-\phi_L)
=\frac12\int(k_R-k_L)\,ds
}.
$$

因子 $1/2$ 与 $P=Le^{2i\chi}$ 是同一件事：真实偏振角改变 $\Delta\chi$，复线偏振在 $Q-U$ 平面中的相位改变 $2\Delta\chi$。

---

## 8. RL §8.2：Faraday rotation 公式的完整推导

### 8.1 从介电常数到波数

从

$$
\epsilon_{R,L}
=1-
\frac{\omega_p^2}
{\omega(\omega\mp\omega_B)}
$$

开始。首先利用 $\omega\gg\omega_B$：

$$
\frac{1}{\omega(\omega\mp\omega_B)}
=\frac{1}{\omega^2}
\frac{1}{1\mp\omega_B/\omega}
\simeq
\frac{1}{\omega^2}
\left(1\pm\frac{\omega_B}{\omega}\right).
$$

所以

$$
\epsilon_{R,L}
\simeq
1-
\frac{\omega_p^2}{\omega^2}
\left(1\pm\frac{\omega_B}{\omega}\right).
$$

再用

$$
\sqrt{1-x}\simeq1-\frac{x}{2},
\qquad |x|\ll1,
$$

得到

$$
k_{R,L}
\simeq
\frac{\omega}{c}
\left[
1-
\frac{\omega_p^2}{2\omega^2}
\left(1\mp\frac{\omega_B}{\omega}\right)
\right],
$$

其中上下符号按 RL 的旋向与正角定义排列。若交换左右圆偏振命名，最终旋转角的符号一起反转，但大小不变。

### 8.2 计算两个波数之差

相减后，与磁场无关的共同项抵消：

$$
\begin{aligned}
k_R-k_L
&=\frac{\omega}{c}
\frac{\omega_p^2}{2\omega^2}
\left[
\left(1+\frac{\omega_B}{\omega}\right)
-
\left(1-\frac{\omega_B}{\omega}\right)
\right]\\
&=\frac{\omega}{c}
\frac{\omega_p^2}{2\omega^2}
\frac{2\omega_B}{\omega}\\
&=\boxed{
\frac{\omega_p^2\omega_B}{c\omega^2}
}.
\end{aligned}
$$

这个结果显示，圆双折射同时需要自由电子和磁场：

$$
k_R-k_L\propto\omega_p^2\omega_B
\propto n_eB_\parallel.
$$

### 8.3 得到 Faraday rotation 角

代入

$$
\Delta\chi
=\frac12\int(k_R-k_L)\,ds
$$

得到

$$
\Delta\chi
=\frac{1}{2c\omega^2}
\int\omega_p^2\omega_B\,ds.
$$

在 cgs 中

$$
\omega_p^2=\frac{4\pi n_e e^2}{m_e},
\qquad
\omega_B=\frac{eB_\parallel}{m_ec}.
$$

两者相乘：

$$
\omega_p^2\omega_B
=\frac{4\pi n_e e^3B_\parallel}{m_e^2c}.
$$

所以

$$
\begin{aligned}
\Delta\chi
&=\frac{1}{2c\omega^2}
\int
\frac{4\pi n_e e^3B_\parallel}{m_e^2c}\,ds\\
&=\boxed{
\frac{2\pi e^3}{m_e^2c^2\omega^2}
\int n_eB_\parallel\,ds
}.
\end{aligned}
$$

$2\pi$ 来自等离子体频率中的 $4\pi$ 与线偏振旋转角中的 $1/2$。

### 8.4 为什么是 $\lambda^2$ 定律

利用

$$
\omega=\frac{2\pi c}{\lambda},
\qquad
\frac{1}{\omega^2}=\frac{\lambda^2}{4\pi^2c^2},
$$

得到

$$
\boxed{
\Delta\chi
=\frac{e^3\lambda^2}{2\pi m_e^2c^4}
\int n_eB_\parallel\,ds
}.
$$

因此

$$
\boxed{
\chi(\lambda^2)=\chi_0+\mathrm{RM}\lambda^2
}.
$$

低频、长波长辐射的旋转最明显；波长增加两倍，旋转角增加四倍。

### 8.5 Faraday rotation 是什么，不是什么

Faraday rotation 是磁化等离子体的圆双折射造成的线偏振轴旋转。它不是：

- 整束光的传播方向弯折；
- 介质把强度机械地“转走”；
- 只要有磁场就必然出现的效应。

基础公式要求同时有

$$
n_e\neq0,
\qquad
B_\parallel\neq0.
$$

理想、均匀、无耗散的 Faraday screen 可以旋转偏振角而不改变总强度 $I$。实际观测中的偏振度下降通常来自带宽、波束或视线内部不同旋转量的平均，而不是单个理想模式被吸收。

---

## 9. RM、DM 与视线平均磁场

### 9.1 RM 的观测定义与物理意义

由

$$
\chi(\lambda^2)=\chi_0+\mathrm{RM}\lambda^2
$$

可知

$$
\boxed{
\mathrm{RM}=\frac{d\chi}{d\lambda^2}
}.
$$

RM 是偏振角对波长平方的斜率。常用天文单位下：

$$
\boxed{
\mathrm{RM}
=0.812
\int
n_e(\mathrm{cm^{-3}})
B_\parallel(\mu\mathrm G)
\,dl(\mathrm{pc})
}
$$

单位为 $\mathrm{rad\,m^{-2}}$。

因此 RM 测量的是自由电子密度加权的、有方向的视线磁场积分，而不是单独的电子密度或单独的磁场强度。

### 9.2 RM 的正负与磁场反向

$B_\parallel$ 有符号，因此 RM 也有符号。具体“正”对应朝向还是背离观察者，取决于偏振和视线 convention，但只要 convention 一致，符号就记录平均视线磁场方向。

若磁场沿途反向，正负贡献会抵消：

$$
\int n_eB_\parallel\,dl
=\sum_i\int_i n_eB_\parallel\,dl.
$$

所以小 RM 不一定意味着磁场弱，也可能意味着多次场反向。

### 9.3 与 DM 结合

DM 是

$$
\boxed{
\mathrm{DM}
=\int n_e(\mathrm{cm^{-3}})\,dl(\mathrm{pc})
}
$$

单位为 $\mathrm{pc\,cm^{-3}}$。

定义电子密度加权平均视线磁场：

$$
\langle B_\parallel\rangle_{n_e}
\equiv
\frac{\int n_eB_\parallel\,dl}
{\int n_e\,dl}.
$$

利用 RM 和 DM：

$$
\langle B_\parallel\rangle_{n_e}
=\frac{1}{0.812}
\frac{\mathrm{RM}}{\mathrm{DM}}\,\mu\mathrm G.
$$

因为

$$
\frac{1}{0.812}=1.2315\simeq1.232,
$$

所以

$$
\boxed{
\langle B_\parallel\rangle_{n_e}
\simeq
1.232
\frac{\mathrm{RM}}{\mathrm{DM}}\,\mu\mathrm G
}.
$$

$1.232$ 不是新的物理常数，只是采用这些天文单位后 $0.812$ 的倒数。

### 9.4 $0.812$ 的单位换算来源

cgs 形式为

$$
\mathrm{RM}
=\frac{e^3}{2\pi m_e^2c^4}
\int n_eB_\parallel\,dl,
$$

其中原始单位是 $n_e$ 用 $\mathrm{cm^{-3}}$、$B$ 用 G、$dl$ 用 cm、$\lambda$ 用 cm。基本常数组合为

$$
\frac{e^3}{2\pi m_e^2c^4}
=2.6312\times10^{-17}
$$

相应的 cgs 数值因子。转换到 $\lambda$ 用 m、$B$ 用 $\mu\mathrm G$、路径用 pc：

$$
\lambda_{\rm cm}^2=10^4\lambda_{\rm m}^2,
$$

$$
1\,\mu\mathrm G=10^{-6}\,\mathrm G,
$$

$$
1\,\mathrm{pc}=3.08568\times10^{18}\,\mathrm{cm}.
$$

因此

$$
\begin{aligned}
C_{\rm astro}
&=(2.6312\times10^{-17})
(10^4)(10^{-6})(3.08568\times10^{18})\\
&=0.8119\simeq0.812.
\end{aligned}
$$

---

## 10. Faraday rotation 的扩展：退偏振、Faraday depth 与 RM synthesis

### 10.1 简单外部屏

若所有偏振辐射先由背景源产生，再穿过一个不发射的前景磁化等离子体屏幕，则

$$
P(\lambda^2)
=P_0e^{2i\mathrm{RM}\lambda^2}.
$$

偏振强度 $|P|$ 不变，偏振角严格满足 $\chi=\chi_0+\mathrm{RM}\lambda^2$。

### 10.2 三类常见退偏振

**Bandwidth depolarization：** 一个频率通道内部的 $\lambda^2$ 有有限宽度。若通道内偏振角变化很大，平均 $Q,U$ 时会互相抵消。

**Beam depolarization：** 一个望远镜波束内有多个未分辨的 RM。不同区域的偏振向量方向不同，空间平均后 $|P|$ 下降。

**Differential/internal Faraday rotation：** 发射和旋转发生在同一区域。不同深度的辐射经历不同旋转量，沿视线相加时发生抵消。

### 10.3 Faraday depth

从观察者到路径位置 $s$ 的 Faraday depth 定义为

$$
\boxed{
\phi(s)
=0.812
\int_0^s
n_e(\mathrm{cm^{-3}})
B_\parallel(\mu\mathrm G)
\,dl(\mathrm{pc})
}
$$

单位为 $\mathrm{rad\,m^{-2}}$。

简单外部屏中可以把观测 RM 与单一 Faraday depth 等同。若视线上有发射、磁场反向或多个成分，观测到的单一斜率未必等于任何唯一物理深度。

### 10.4 推导 RM synthesis 的基本式

复线偏振是

$$
P=Q+iU=Le^{2i\chi}.
$$

位于 Faraday depth $\phi$ 的一小份本征复偏振记为

$$
dP_0=F(\phi)\,d\phi.
$$

传播到观察者时，它的实际偏振角旋转

$$
\Delta\chi=\phi\lambda^2.
$$

由于复线偏振的相位是 $2\chi$，这一小份信号变成

$$
dP(\lambda^2)
=F(\phi)e^{2i\phi\lambda^2}\,d\phi.
$$

把所有 Faraday depth 的复偏振向量相加：

$$
\boxed{
P(\lambda^2)
=\int_{-\infty}^{\infty}
F(\phi)e^{2i\phi\lambda^2}\,d\phi
}.
$$

$F(\phi)$ 是 Faraday dispersion function，包含每单位 Faraday depth 的偏振强度和本征偏振角。

若只有单一前景屏，

$$
F(\phi)=P_0\delta(\phi-\phi_0),
$$

则

$$
P(\lambda^2)=P_0e^{2i\phi_0\lambda^2},
$$

回到简单 $\lambda^2$ 定律。

这个积分具有 Fourier transform 的形式。RM synthesis 利用多频率的 $Q(\lambda^2),U(\lambda^2)$ 反推 $F(\phi)$。实际观测只覆盖有限且离散的正 $\lambda^2$，所以重建具有有限 Faraday-depth 分辨率和旁瓣，不能视为完美反演。

---

## 11. 等离子体折射：经典电子半径、相位屏与偏折角

### 11.1 折射率为什么随电子密度变化

冷、非磁化等离子体的折射率是

$$
n_r
=\sqrt{1-\frac{\omega_p^2}{\omega^2}}
\simeq
1-\frac{\omega_p^2}{2\omega^2}.
$$

因为

$$
\omega_p^2\propto n_e,
$$

电子密度越高，$n_r$ 越小。如果电子密度只沿传播方向均匀变化，主要改变相位和群延迟；若电子柱密度在横向变化，则不同位置的波前积累不同相位，波前倾斜并产生折射。

### 11.2 经典电子半径

Gaussian-cgs 中定义

$$
\boxed{
r_e=\frac{e^2}{m_ec^2}
}.
$$

SI 中相同长度写成

$$
\boxed{
r_e=\frac{e^2}{4\pi\epsilon_0m_ec^2}
}.
$$

数值为

$$
\boxed{
r_e=2.81794\times10^{-15}\,\mathrm m
=2.81794\times10^{-13}\,\mathrm{cm}
}.
$$

它可以通过把静电能量尺度与电子静止质量能量相等来理解：

$$
\frac{e^2}{4\pi\epsilon_0r_e}=m_ec^2.
$$

$r_e$ 不是电子的实测几何半径，而是电荷、质量和光速组合成的经典电磁相互作用长度尺度。Thomson 截面也由它给出：

$$
\boxed{
\sigma_T=\frac{8\pi}{3}r_e^2
}.
$$

### 11.3 等离子体造成的相位

相对于真空，传播路径的附加相位是

$$
\delta\phi
=\int(k-k_0)\,ds,
$$

其中

$$
k=\frac{n_r\omega}{c},
\qquad
k_0=\frac{\omega}{c}.
$$

因此

$$
\delta\phi
=\frac{\omega}{c}
\int(n_r-1)\,ds.
$$

使用高频展开：

$$
\delta\phi
=-\frac{1}{2c\omega}
\int\omega_p^2\,ds.
$$

代入 $\omega_p^2=4\pi n_e e^2/m_e$，定义电子柱密度

$$
N_e=\int n_e\,ds,
$$

再利用 $\lambda=2\pi c/\omega$，得到

$$
\begin{aligned}
\delta\phi
&=-\frac{2\pi e^2}{m_ec\omega}N_e\\
&=-\frac{e^2}{m_ec^2}\lambda N_e\\
&=\boxed{-r_e\lambda N_e}.
\end{aligned}
$$

负相位表示相位速度大于真空光速，并不表示脉冲或信息提前到达；群速度仍小于 $c$，群延迟为正。

### 11.4 相位梯度为什么产生偏折

一般波场写成

$$
E(\mathbf r)\propto e^{i\Phi(\mathbf r)}.
$$

局部波矢是

$$
\boxed{
\mathbf k=\nabla\Phi
}.
$$

若波原来沿 $z$ 传播，穿过薄等离子体屏幕后

$$
\Phi(\mathbf r)
=k_0z+\delta\phi(\mathbf x_\perp).
$$

于是横向波矢为

$$
\mathbf k_\perp
=\nabla_\perp\delta\phi.
$$

小角度下

$$
\boldsymbol\alpha
\simeq
\frac{\mathbf k_\perp}{k_0}
=\frac{1}{k_0}\nabla_\perp\delta\phi.
$$

因为

$$
k_0=\frac{2\pi}{\lambda},
$$

并且

$$
\delta\phi=-r_e\lambda N_e,
$$

所以

$$
\boxed{
\boldsymbol\alpha
\simeq
-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp N_e
}.
$$

两个 $\lambda$ 的来源不同：一个来自等离子体相位 $\delta\phi\propto\lambda$，另一个来自 $1/k_0=\lambda/(2\pi)$。

### 11.5 负号的意义

高电子密度使折射率降低。射线趋向较高折射率区域，因此电子过密结构通常使射线远离中心，表现为发散等离子体透镜；电子欠密结构可能会聚。

对中心过密结构，在中心外侧

$$
\nabla_\perp N_e
$$

指向高密度中心，而

$$
-\nabla_\perp N_e
$$

指向外侧，正好给出发散方向。

### 11.6 与几何光学射线方程一致

射线方程为

$$
\frac{d}{ds}(n_r\hat{\mathbf s})=\nabla n_r.
$$

小角度且 $n_r\simeq1$ 时，横向分量给出

$$
\boldsymbol\alpha
\simeq
\int\nabla_\perp n_r\,ds.
$$

而

$$
n_r-1
\simeq
-\frac{r_e\lambda^2}{2\pi}n_e.
$$

所以

$$
\boldsymbol\alpha
\simeq
-\frac{r_e\lambda^2}{2\pi}
\nabla_\perp\int n_e\,ds,
$$

与相位屏推导相同。

---

## 12. 散射、脉冲展宽与 scintillation

### 12.1 从折射到多径传播

真实星际等离子体包含许多尺度的随机电子密度涨落。不同横向位置产生不同相位和偏折角，因此同一个点源的波可以沿多条路径到达观察者。

不同路径具有不同：

- 几何长度；
- 等离子体群延迟；
- 到达方向；
- 相位。

因此出现：

- angular broadening：点源图像被散射成有限角大小；
- pulse broadening：短脉冲后出现晚到的散射尾；
- interference：多条相干路径形成频率和空间上的亮暗图样；
- scintillation：观察者或介质运动穿过该图样时，强度随时间和频率变化。

### 12.2 Dispersion、scattering 和 scintillation 的区别

| 现象 | 所需介质结构 | 主要观测结果 |
|---|---|---|
| Dispersion | 平均自由电子柱密度 | 到达时间按 $\nu^{-2}$ 变化 |
| Refraction | 有组织的横向 $N_e$ 梯度 | 传播方向、像位置或放大率改变 |
| Scattering | 随机小尺度密度涨落 | 多径、角展宽和脉冲尾 |
| Scintillation | 多径干涉或大尺度聚焦/散焦 | 强度随时间和频率变化 |
| Faraday rotation | $n_e$ 与有向 $B_\parallel$ | 偏振角按 $\lambda^2$ 旋转 |

均匀等离子体可产生 dispersion，却不会仅凭均匀性产生横向 scattering。

### 12.3 Diffractive 与 refractive scintillation

**Diffractive interstellar scintillation（DISS）**通常来自较小尺度相位结构：

- 变化较快；
- 频率相关带宽较窄；
- 与强多径干涉、脉冲展宽和角展宽直接相关。

**Refractive interstellar scintillation（RISS）**通常来自较大尺度结构：

- 变化较慢；
- 频带较宽；
- 更像大尺度聚焦、散焦和像漂移。

二者不是完全独立的介质，而是同一湍流密度场在不同空间尺度上的表现。

### 12.4 两条路径的频率干涉

设两条路径的额外时间差为 $\tau$。总电场可写成

$$
E(\nu)=A_1+A_2e^{-2\pi i\nu\tau}.
$$

强度中的干涉项随

$$
\cos(2\pi\nu\tau+\phi_0)
$$

变化。把频率改变 $\Delta\nu$，相对相位改变

$$
\Delta(\Delta\phi)
=2\pi\Delta\nu\tau.
$$

当

$$
2\pi\Delta\nu\tau\sim1
$$

时，干涉关系显著改变。因此时间延迟越长，频谱结构越细。

### 12.5 指数散射尾与去相关带宽

常用的脉冲展宽函数是单边指数：

$$
P(\tau)
=\frac{1}{\tau_{\rm sc}}
e^{-\tau/\tau_{\rm sc}},
\qquad \tau\ge0.
$$

两个相差 $\Delta\nu$ 的频率之间，场相关函数是延迟分布的 Fourier transform：

$$
C_E(\Delta\nu)
=\int_0^\infty
P(\tau)e^{-2\pi i\Delta\nu\tau}\,d\tau.
$$

代入指数分布：

$$
\begin{aligned}
C_E(\Delta\nu)
&=\frac{1}{\tau_{\rm sc}}
\int_0^\infty
e^{-[1/\tau_{\rm sc}+2\pi i\Delta\nu]\tau}\,d\tau\\
&=\frac{1}{1+2\pi i\Delta\nu\tau_{\rm sc}}.
\end{aligned}
$$

相应的强度相关形状近似为

$$
|C_E(\Delta\nu)|^2
=\frac{1}
{1+(2\pi\Delta\nu\tau_{\rm sc})^2}.
$$

若把半高宽定义为 $\Delta\nu_{\rm d}$，令相关函数降到 $1/2$：

$$
2\pi\Delta\nu_{\rm d}\tau_{\rm sc}=1.
$$

因此

$$
\boxed{
\Delta\nu_{\rm d}
=\frac{1}{2\pi\tau_{\rm sc}}
}.
$$

更一般地写作

$$
2\pi\Delta\nu_{\rm d}\tau_{\rm sc}=C_1,
$$

其中 $C_1$ 是与散射几何、延迟分布和带宽定义有关的量级为 1 的常数。最稳健的结论是

$$
\boxed{
\Delta\nu_{\rm d}\propto\tau_{\rm sc}^{-1}
}.
$$

### 12.6 典型频率趋势

由于等离子体相位 $|\delta\phi|\propto\lambda$、偏折角 $|\alpha|\propto\lambda^2$，低频通常散射更强。对于理想 Kolmogorov 湍流和常见薄屏几何，常见近似是

$$
\tau_{\rm sc}\propto\nu^{-4.4},
\qquad
\Delta\nu_{\rm d}\propto\nu^{4.4}.
$$

指数会随湍流谱、内外尺度、屏幕位置、各向异性和多屏结构改变，不能把 $4.4$ 当作所有视线的严格定律。

---

## 13. 习题 8.3：用色散和 Faraday rotation 求平均磁场

### 13.1 题目给定量

脉冲偏振源的到达时间和 Faraday rotation 对角频率的导数大小为

$$
\left|\frac{dt_p}{d\omega}\right|
=1.1\times10^{-5}\,\mathrm{s^2},
$$

$$
\left|\frac{d\Delta\chi}{d\omega}\right|
=1.9\times10^{-4}\,\mathrm s.
$$

测量位于 $\omega=10^8\,\mathrm{s^{-1}}$ 附近，源距离未知。要求

$$
\langle B_\parallel\rangle
=\frac{\int n_eB_\parallel ds}
{\int n_e ds}.
$$

### 13.2 色散导数

§8.1 给出

$$
t_p
\simeq
\frac{d}{c}
+\frac{2\pi e^2}{m_ec\omega^2}
\int n_e\,ds.
$$

因此

$$
\boxed{
\frac{dt_p}{d\omega}
=-\frac{4\pi e^2}{m_ec\omega^3}
\int n_e\,ds
}.
$$

### 13.3 Faraday rotation 导数

§8.2 给出

$$
\Delta\chi
=\frac{2\pi e^3}{m_e^2c^2\omega^2}
\int n_eB_\parallel\,ds.
$$

对 $\omega$ 求导：

$$
\boxed{
\frac{d\Delta\chi}{d\omega}
=-\frac{4\pi e^3}{m_e^2c^2\omega^3}
\int n_eB_\parallel\,ds
}.
$$

### 13.4 两式相除

$$
\frac{d\Delta\chi/d\omega}
{dt_p/d\omega}
=
\frac{e}{m_ec}
\frac{\int n_eB_\parallel ds}
{\int n_e ds}.
$$

所以

$$
\boxed{
\langle B_\parallel\rangle
=\frac{m_ec}{e}
\frac{d\Delta\chi/d\omega}
{dt_p/d\omega}
}.
$$

未知距离、电子柱密度和公共的 $\omega^{-3}$ 全部消掉。题目给出 $\omega=10^8\,\mathrm{s^{-1}}$，但最终比值不需要显式代入该频率。

### 13.5 数值计算

导数之比为

$$
\frac{1.9\times10^{-4}\,\mathrm s}
{1.1\times10^{-5}\,\mathrm{s^2}}
=17.27\,\mathrm{s^{-1}}.
$$

cgs 中

$$
\frac{e}{m_ec}
=1.7588\times10^7
\,\mathrm{s^{-1}\,G^{-1}}.
$$

因此

$$
\begin{aligned}
\langle B_\parallel\rangle
&=\frac{17.27}
{1.7588\times10^7}\,\mathrm G\\
&=9.82\times10^{-7}\,\mathrm G\\
&=0.982\,\mu\mathrm G.
\end{aligned}
$$

所以

$$
\boxed{
\langle B_\parallel\rangle
\simeq1.0\,\mu\mathrm G
}.
$$

### 13.6 符号说明和量纲检查

理论上色散延迟和给定方向下的 Faraday angle 通常都随 $\omega$ 增大而减小，因此导数带负号。题目列出的正数应理解为导数大小，或采用了未明确写出的方向 convention。平均磁场的最终符号取决于 $B_\parallel$、圆偏振和偏振角的统一约定。

导数比的单位是

$$
\frac{\mathrm s}{\mathrm{s^2}}=\mathrm{s^{-1}},
$$

它正好具有回旋角频率的单位，因为

$$
\frac{e\langle B_\parallel\rangle}{m_ec}
$$

就是平均磁场对应的电子回旋角频率。

---

## 14. English assignment-ready solution

### Problem 8.3

For a cold, unmagnetized plasma, the pulse arrival time is

$$
t_p\simeq \frac{d}{c}
+\frac{2\pi e^2}{m_ec\omega^2}
\int n_e\,ds.
$$

Therefore,

$$
\frac{dt_p}{d\omega}
=-\frac{4\pi e^2}{m_ec\omega^3}
\int n_e\,ds.
$$

For Faraday rotation in a cold magnetized plasma,

$$
\Delta\chi
=\frac{2\pi e^3}{m_e^2c^2\omega^2}
\int n_eB_\parallel\,ds,
$$

and hence

$$
\frac{d\Delta\chi}{d\omega}
=-\frac{4\pi e^3}{m_e^2c^2\omega^3}
\int n_eB_\parallel\,ds.
$$

Taking the ratio eliminates the unknown electron column density, source distance, and observing frequency:

$$
\frac{d\Delta\chi/d\omega}{dt_p/d\omega}
=\frac{e}{m_ec}
\frac{\int n_eB_\parallel\,ds}
{\int n_e\,ds}
=\frac{e}{m_ec}\langle B_\parallel\rangle.
$$

Thus,

$$
\langle B_\parallel\rangle
=\frac{m_ec}{e}
\frac{d\Delta\chi/d\omega}{dt_p/d\omega}.
$$

Using the magnitudes of the measured derivatives,

$$
\frac{1.9\times10^{-4}\,\mathrm s}
{1.1\times10^{-5}\,\mathrm{s^2}}
=17.27\,\mathrm{s^{-1}}.
$$

Since

$$
\frac{e}{m_ec}
=1.7588\times10^7
\,\mathrm{s^{-1}\,G^{-1}},
$$

we find

$$
\langle B_\parallel\rangle
=\frac{17.27}{1.7588\times10^7}\,\mathrm G
=9.82\times10^{-7}\,\mathrm G.
$$

Therefore,

$$
\boxed{
\langle B_\parallel\rangle\simeq1.0\,\mu\mathrm G
}.
$$

The sign of the inferred field depends on the adopted conventions for the line-of-sight direction, circular polarization, and polarization position angle. The quoted positive derivatives are therefore most naturally interpreted as magnitudes.

---

## 15. 复习清单、量纲检查、极限检验与常见混淆

### 15.1 应该能够独立推导

1. 从 $E_x,E_y$ 的振幅和相位差判断线、圆和椭圆偏振。
2. 从 $Q=L\cos2\chi$、$U=L\sin2\chi$ 解释为什么 Stokes 平面使用 $2\chi$。
3. 从 Stokes 定义证明完全偏振时 $I^2=Q^2+U^2+V^2$。
4. 用 Cauchy–Schwarz 证明一般情况下 $I^2\ge Q^2+U^2+V^2$。
5. 从电子运动方程得到 $\epsilon=1-\omega_p^2/\omega^2$。
6. 从 Maxwell 方程得到 $\omega^2=\omega_p^2+c^2k^2$。
7. 从色散关系得到 $v_{\rm ph}$、$v_g$ 和 $dt_p/d\omega$。
8. 从 $\epsilon_{R,L}$ 展开得到 $k_R-k_L$ 和 Faraday rotation 公式。
9. 从 $\delta\phi=-r_e\lambda N_e$ 得到等离子体偏折角。
10. 从延迟分布的 Fourier transform 得到 $\Delta\nu_{\rm d}\sim(2\pi\tau_{\rm sc})^{-1}$。
11. 用色散和 Faraday 导数之比完成 Problem 8.3。

### 15.2 可以直接记住的核心结果

偏振：

$$
P=Q+iU=Le^{2i\chi},
\qquad
p=\frac{\sqrt{Q^2+U^2+V^2}}{I}.
$$

冷等离子体：

$$
\omega_p^2=\frac{4\pi n_e e^2}{m_e},
\qquad
\omega^2=\omega_p^2+c^2k^2.
$$

色散延迟：

$$
\Delta t_{\rm DM}\propto\mathrm{DM}\,\nu^{-2}.
$$

Faraday rotation：

$$
\Delta\chi=\mathrm{RM}\lambda^2,
\qquad
\mathrm{RM}\propto\int n_eB_\parallel\,dl.
$$

RM/DM 平均磁场：

$$
\langle B_\parallel\rangle_{n_e}
\simeq
1.232\frac{\mathrm{RM}}{\mathrm{DM}}\,\mu\mathrm G.
$$

等离子体相位和折射：

$$
\delta\phi=-r_e\lambda N_e,
\qquad
\boldsymbol\alpha
\simeq
-\frac{r_e\lambda^2}{2\pi}\nabla_\perp N_e.
$$

散射时频对偶：

$$
\Delta\nu_{\rm d}\tau_{\rm sc}\sim\frac{1}{2\pi}.
$$

### 15.3 量纲检查

波数：

$$
[k]=\mathrm{length}^{-1},
\qquad
[k\,ds]=1.
$$

因此 $\int kds$ 可以作为指数相位。

色散导数：

$$
\left[\frac{dt_p}{d\omega}\right]
=\mathrm{s^2}.
$$

Faraday 导数：

$$
\left[\frac{d\Delta\chi}{d\omega}\right]
=\mathrm s,
$$

因为弧度在量纲上为 1。

Problem 8.3 的导数比：

$$
\left[
\frac{d\Delta\chi/d\omega}{dt_p/d\omega}
\right]
=\mathrm{s^{-1}},
$$

与 $eB/(m_ec)$ 的回旋角频率量纲一致。

偏折角：若 $r_e,\lambda$ 用长度单位，$N_e$ 用 $\mathrm{length}^{-2}$，则

$$
[r_e\lambda^2\nabla_\perp N_e]=1,
$$

符合角度无量纲。

### 15.4 极限检验

- $n_e\rightarrow0$：$\omega_p\rightarrow0$，恢复真空 $\omega=ck$；DM、RM、折射和散射全部消失。
- $B_\parallel\rightarrow0$：$k_R=k_L$，Faraday rotation 消失，但普通等离子体色散仍存在。
- $\omega\rightarrow\infty$：$n_r\rightarrow1$，群延迟、Faraday rotation 和等离子体偏折都趋于零。
- 横向 $N_e$ 为常数：$\nabla_\perp N_e=0$，有相位和群延迟，但无净折射偏角。
- $\tau_{\rm sc}\rightarrow0$：多径延迟消失，$\Delta\nu_{\rm d}$ 变得很宽。
- 单一 Faraday depth：$F(\phi)$ 为 delta function，恢复严格的 $\chi=\chi_0+\phi\lambda^2$。

### 15.5 最容易混淆的地方

1. $n_e$ 是电子数密度，$n_r$ 是折射率。
2. $k_R,k_L$ 是同一频率下两个圆偏振本征模的波数，不是两个不同辐射源的频率。
3. Faraday rotation 旋转的是偏振轴，不等于射线传播方向弯曲。
4. DM 测量 $\int n_e dl$；RM 测量 $\int n_eB_\parallel dl$。
5. RM 小可能来自弱磁场，也可能来自磁场反向抵消。
6. $v_{\rm ph}>c$ 不表示信息超光速；群速度仍小于 $c$。
7. 相位相对真空可以提前，但脉冲群延迟仍为正。
8. 色散不等于吸收；理想冷等离子体介电常数为实数。
9. 折射不等于散射；平滑梯度造成有组织偏折，随机涨落造成多径。
10. $r_e$ 是经典相互作用尺度，不是电子的已测几何大小。
11. $1.232$ 是 $1/0.812$，不是独立基本常数。
12. cgs 的 $\omega_B=eB/(m_ec)$ 不能直接把 $B$ 换成 tesla 后继续使用。

### 15.6 自测问题

1. 为什么线偏振角的周期是 $180^\circ$，而 $(Q,U)$ 绕一圈需要 $360^\circ$？
2. 一束完全圆偏振波是否满足 $I^2=Q^2+U^2+V^2$？
3. 为什么无磁场等离子体中任意横向偏振都具有相同色散关系？
4. 为什么背景磁场使圆偏振而不是任意线偏振成为本征模？
5. 为什么 Faraday rotation 只测量 $B_\parallel$？
6. 为什么 Problem 8.3 不需要知道脉冲星距离？
7. 为什么电子过密的等离子体透镜通常是发散的？
8. 为什么更长的散射尾对应更窄的 scintillation bandwidth？
9. 什么情况下观测 RM 可以直接等同于单一 Faraday depth？
10. 如何从单位制判断某条回旋频率公式是否漏了 $c$ 或 $\epsilon_0$？

---

## 16. 资料与引用

1. G. B. Rybicki and A. P. Lightman, *Radiative Processes in Astrophysics*, §2.4, “Polarization and Stokes Parameters,” printed pp. 62–68.
2. Rybicki and Lightman, §8.1, “Dispersion in Cold, Isotropic Plasma,” printed pp. 224–228.
3. Rybicki and Lightman, §8.2, “Propagation Along a Magnetic Field; Faraday Rotation,” printed pp. 229–231.
4. Rybicki and Lightman, Problem 8.3, printed p. 236.
5. 课程阅读要求中列出的 AstroBaki supplementary topics: *Polarization*, *Stokes parameters*, and *Faraday rotation*.

本文中的 $\Delta\nu_{\rm d}$–$\tau_{\rm sc}$ 关系采用单边指数散射尾和半高相关宽度的基础模型；实际数值系数依赖散射几何、湍流谱与观测定义。RM synthesis 部分为 §8.2 的观测推广，不应误认为 RL §8.2 本身已完整展开该反演方法。

---

## 17. 附录：SI 与 Gaussian-cgs 单位制对比及典型公式

### 17.1 使用原则

SI 与 Gaussian-cgs 对电磁量的定义和量纲不同。转换时必须把整条公式连同电荷、场和常数一起转换，不能只把 G 换成 T，却保留 cgs 的 $e$、$4\pi$ 或 $1/c$。

最常用的磁感应强度转换为

$$
\boxed{
1\,\mathrm T=10^4\,\mathrm G,
\qquad
1\,\mathrm G=10^{-4}\,\mathrm T
}.
$$

进一步有

$$
1\,\mu\mathrm G=10^{-10}\,\mathrm T=0.1\,\mathrm{nT},
$$

$$
1\,\mathrm{nT}=10\,\mu\mathrm G.
$$

### 17.2 电荷、电场与磁场的基本区别

| 物理量 | SI | Gaussian-cgs |
|---|---|---|
| 长度 | m | cm |
| 质量 | kg | g |
| 电荷 | C | statC (esu) |
| 电场 | $\mathrm{V\,m^{-1}}$ | statV cm$^{-1}$ |
| 磁感应强度 $B$ | tesla (T) | gauss (G) |
| 磁场强度 $H$ | $\mathrm{A\,m^{-1}}$ | oersted (Oe) |
| 磁通量 | weber (Wb) | maxwell (Mx) |

磁通量转换：

$$
1\,\mathrm{Wb}=10^8\,\mathrm{Mx}.
$$

磁场强度转换：

$$
1\,\mathrm{Oe}
=\frac{1000}{4\pi}\,\mathrm{A\,m^{-1}}
\simeq79.577\,\mathrm{A\,m^{-1}}.
$$

真空中 SI 使用

$$
B=\mu_0H,
$$

Gaussian-cgs 中 $B$ 与 $H$ 量纲相同，真空中数值上 $1\,\mathrm G$ 对应 $1\,\mathrm{Oe}$。介质中仍需区分磁化强度和本构关系。

### 17.3 Coulomb force 与 Lorentz force

SI：

$$
\boxed{
F=\frac{1}{4\pi\epsilon_0}
\frac{q_1q_2}{r^2}
},
$$

$$
\boxed{
\mathbf F=q(\mathbf E+\mathbf v\times\mathbf B)
}.
$$

Gaussian-cgs：

$$
\boxed{
F=\frac{q_1q_2}{r^2}
},
$$

$$
\boxed{
\mathbf F=q
\left(
\mathbf E+\frac{\mathbf v}{c}\times\mathbf B
\right)
}.
$$

cgs 中磁力项出现 $1/c$；SI 中没有。与此同时两种单位制的电荷和磁场单位也不同，不能只比较单个因子。

### 17.4 真空 Maxwell 方程

**SI：**

$$
\nabla\cdot\mathbf E=\frac{\rho}{\epsilon_0},
\qquad
\nabla\cdot\mathbf B=0,
$$

$$
\nabla\times\mathbf E
=-\frac{\partial\mathbf B}{\partial t},
$$

$$
\nabla\times\mathbf B
=\mu_0\mathbf J
+\mu_0\epsilon_0
\frac{\partial\mathbf E}{\partial t}.
$$

因为

$$
\mu_0\epsilon_0=\frac{1}{c^2},
$$

最后一项也可写成 $c^{-2}\partial_t\mathbf E$。

**Gaussian-cgs：**

$$
\nabla\cdot\mathbf E=4\pi\rho,
\qquad
\nabla\cdot\mathbf B=0,
$$

$$
\nabla\times\mathbf E
=-\frac{1}{c}
\frac{\partial\mathbf B}{\partial t},
$$

$$
\nabla\times\mathbf B
=\frac{4\pi}{c}\mathbf J
+\frac{1}{c}
\frac{\partial\mathbf E}{\partial t}.
$$

### 17.5 真空平面波关系

SI 真空平面波：

$$
\boxed{
E=cB
}.
$$

Gaussian-cgs 真空平面波：

$$
\boxed{
E=B
}.
$$

这里的等号比较的是各自单位制中的数值。不能据此说物理电场与磁场具有完全相同的 SI 单位。

### 17.6 等离子体频率与回旋频率

电子等离子体频率：

$$
\boxed{
\omega_p^2
=\frac{n_e e^2}{m_e\epsilon_0}
}
\quad\text{(SI)},
$$

$$
\boxed{
\omega_p^2
=\frac{4\pi n_e e^2}{m_e}
}
\quad\text{(Gaussian-cgs)}.
$$

电子回旋角频率：

$$
\boxed{
\omega_B=\frac{eB}{m_e}
}
\quad\text{(SI)},
$$

$$
\boxed{
\omega_B=\frac{eB}{m_ec}
}
\quad\text{(Gaussian-cgs)}.
$$

数值形式：

$$
\omega_B
=1.7588\times10^{11}B(\mathrm T)
\ \mathrm{rad\,s^{-1}},
$$

$$
\omega_B
=1.7588\times10^7B(\mathrm G)
\ \mathrm{rad\,s^{-1}}.
$$

### 17.7 经典电子半径与 Thomson 截面

SI：

$$
\boxed{
r_e
=\frac{e^2}{4\pi\epsilon_0m_ec^2}
}.
$$

Gaussian-cgs：

$$
\boxed{
r_e
=\frac{e^2}{m_ec^2}
}.
$$

两种单位制都给出同一个长度：

$$
r_e=2.81794\times10^{-15}\,\mathrm m.
$$

用 $r_e$ 表示时，Thomson 截面在两种单位制中形式相同：

$$
\boxed{
\sigma_T=\frac{8\pi}{3}r_e^2
}.
$$

### 17.8 电磁场能量密度与 Poynting vector

SI：

$$
\boxed{
u
=\frac{\epsilon_0E^2}{2}
+\frac{B^2}{2\mu_0}
},
$$

$$
\boxed{
\mathbf S
=\frac{1}{\mu_0}\mathbf E\times\mathbf B
}.
$$

Gaussian-cgs：

$$
\boxed{
u=\frac{E^2+B^2}{8\pi}
},
$$

$$
\boxed{
\mathbf S
=\frac{c}{4\pi}\mathbf E\times\mathbf B
}.
$$

单独的磁场能量密度是

$$
u_B=\frac{B^2}{2\mu_0}
\quad\text{(SI)},
$$

$$
u_B=\frac{B^2}{8\pi}
\quad\text{(Gaussian-cgs)}.
$$

### 17.9 Larmor power

非相对论带电粒子的 Larmor 辐射功率：

$$
\boxed{
P
=\frac{q^2a^2}{6\pi\epsilon_0c^3}
}
\quad\text{(SI)},
$$

$$
\boxed{
P
=\frac{2q^2a^2}{3c^3}
}
\quad\text{(Gaussian-cgs)}.
$$

### 17.10 Faraday rotation

SI：

$$
\boxed{
\Delta\chi
=\frac{e^3\lambda^2}
{8\pi^2\epsilon_0m_e^2c^3}
\int n_eB_\parallel\,dl
}.
$$

Gaussian-cgs：

$$
\boxed{
\Delta\chi
=\frac{e^3\lambda^2}
{2\pi m_e^2c^4}
\int n_eB_\parallel\,dl
}.
$$

转换为统一的天文实用单位后，两者都给出

$$
\boxed{
\mathrm{RM}
=0.812
\int
n_e(\mathrm{cm^{-3}})
B_\parallel(\mu\mathrm G)
\,dl(\mathrm{pc})
\ \mathrm{rad\,m^{-2}}
}.
$$

### 17.11 最后检查规则

看到电磁公式时，先检查：

1. $B$ 是用 T 还是 G？
2. $e$ 是用 C 还是 statC？
3. 公式里出现的是 $\epsilon_0,\mu_0$，还是 $4\pi,c$？
4. Lorentz magnetic force 中有没有 $1/c$？
5. 真空平面波使用的是 $E=cB$ 还是 $E=B$？
6. 能量密度分母是 $2\mu_0$ 还是 $8\pi$？

只要一条公式中同时出现 SI 的 $\epsilon_0$ 和未经转换的 cgs gauss，或同时出现 SI 电荷与 cgs 的 $1/c$ Lorentz force，就说明单位制已经混用。
