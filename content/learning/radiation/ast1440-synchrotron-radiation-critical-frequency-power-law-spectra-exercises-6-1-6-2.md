---
title: "AST1440 同步辐射、临界频率与幂律谱：RL §6.1–§6.3 及习题 6.1、6.2 详解"
description: "系统推导相对论电子回旋运动、同步辐射功率与临界频率、单电子频谱、幂律电子群谱、同步冷却及绝热压缩，并完整解答习题 6.1 与 6.2。"
date: "2026-11-02"
tags: ["AST1440","Synchrotron radiation","Critical frequency","Power-law spectrum","Radiative cooling","Exercises"]
order: 15
draft: false
---

# AST1440 同步辐射、临界频率与幂律谱：RL §6.1–§6.3 及习题 6.1、6.2 详解

> 课程：AST1440 — Radiation。  
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§6.1（印刷页 167–169）、§6.2（印刷页 169–173）、§6.3（印刷页 173–175）；Problems 6.1、6.2（印刷页 192）。  
> 补充材料：Bradt, Chapter 8；AstroBaki, *Introduction to Synchrotron Radiation and Relativistic Beaming* 与 *Synchrotron Radiation*。  
> 整理日期：2026 年 11 月 2 日。  
> 本文把预习讨论中的追问全部放回相应物理位置：三个频率的来源、磁场为何不做功却仍有辐射、相对论聚束与到达时间压缩、临界频率“临界”在哪里、单电子频谱的定标、电子能谱到光子谱的变量变换、Thomson 截面与逆 Compton 对比，以及两道指定习题的完整中英文解答。

## 目录

1. [本章逻辑主线与物理图像](#1-本章逻辑主线与物理图像)
2. [符号、单位制与近似条件](#2-符号单位制与近似条件)
3. [磁场中的相对论电子运动](#3-磁场中的相对论电子运动)
4. [三个频率：$\omega_0$、$\omega_{\rm g}$ 与 $\omega_c$](#4-三个频率omega_0omega_rm-g-与-omega_c)
5. [RL §6.1：单电子同步辐射总功率](#5-rl-61单电子同步辐射总功率)
6. [RL §6.2：相对论聚束、脉冲与到达时间压缩](#6-rl-62相对论聚束脉冲与到达时间压缩)
7. [临界频率“临界”在哪里](#7-临界频率临界在哪里)
8. [单电子频谱及其定标](#8-单电子频谱及其定标)
9. [RL §6.3：电子幂律分布与变量变换](#9-rl-63电子幂律分布与变量变换)
10. [从电子幂律积分得到同步辐射幂律](#10-从电子幂律积分得到同步辐射幂律)
11. [Thomson 截面与逆 Compton 对比](#11-thomson-截面与逆-compton-对比)
12. [习题 6.1：同步辐射冷却](#12-习题-61同步辐射冷却)
13. [习题 6.2：各向同性绝热压缩](#13-习题-62各向同性绝热压缩)
14. [English assignment-ready solutions](#14-english-assignment-ready-solutions)
15. [量纲、极限与常见混淆](#15-量纲极限与常见混淆)
16. [复习清单与核心公式](#16-复习清单与核心公式)
17. [进一步物理联系](#17-进一步物理联系)
18. [参考资料](#18-参考资料)

---


## 1. 本章逻辑主线与物理图像

同步辐射最形象的图像是：

$$
\boxed{
\text{一个沿弯曲轨道运动的相对论电子，头上绑着一支极窄的探照灯}
}.
$$

磁场使电子不断转弯。带电粒子只要有加速度，即使速率不变、只是方向改变，也会辐射。对非相对论电子，辐射方向较宽，观察者看到近似平滑的周期信号；对 $\gamma\gg1$ 的电子，辐射集中在速度方向附近半角约为 $1/\gamma$ 的窄锥中。这个窄锥每次扫过视线时，观察者只收到一个短脉冲。

本章的物理链是

$$
\boxed{
\mathbf v\times\mathbf B
\longrightarrow
\text{螺旋运动与横向加速度}
\longrightarrow
\text{相对论聚束}
\longrightarrow
\text{短到达时间脉冲}
\longrightarrow
\nu_c\propto B\gamma^2\sin\alpha
\longrightarrow
\text{宽频同步辐射}
}.
$$

如果电子群具有幂律能谱

$$
N(\gamma)\propto\gamma^{-p},
$$

把所有电子的单粒子频谱相加，就得到

$$
\boxed{
j_\nu\propto\nu^{-(p-1)/2}
}.
$$

这使同步辐射成为天体物理中非常重要的诊断工具：观测光谱斜率，可以反推不可直接观测的相对论电子能谱。

本章最值得记住的四句物理话是：

1. 磁场不做功，但它使电子转弯，因此电子仍然有加速度并产生辐射。
2. 同步辐射频率不是电子的转圈频率，而是短辐射脉冲对应的 Fourier 频率。
3. 高能电子实际转圈更慢，却因聚束和到达时间压缩产生更高频辐射。
4. 临界频率不是硬截止，而是单电子频谱进入指数衰减的特征尺度。

---


## 2. 符号、单位制与近似条件

### 2.1 基本符号

| 符号 | 含义 |
|---|---|
| $m_e$ | 电子静止质量 |
| $e$ | 基本电荷量的正值；电子电荷为 $-e$ |
| $\mathbf B$ | 外加磁场 |
| $\mathbf v$ | 电子速度 |
| $\beta=v/c$ | 无量纲速度 |
| $\gamma=(1-\beta^2)^{-1/2}$ | Lorentz factor |
| $\alpha$ | pitch angle，$\mathbf v$ 与 $\mathbf B$ 的夹角 |
| $v_\parallel,v_\perp$ | 平行、垂直于磁场的速度分量 |
| $B_\perp=B\sin\alpha$ | 对给定电子轨道有效的垂直磁场因子 |
| $\omega_0=eB/(m_ec)$ | 非相对论 cyclotron angular frequency |
| $\omega_{\rm g}=\omega_0/\gamma$ | 相对论回旋角频率 |
| $\omega_c$ | 同步辐射临界角频率 |
| $\nu_c=\omega_c/(2\pi)$ | 同步辐射临界普通频率 |
| $U_B=B^2/(8\pi)$ | 磁场能量密度 |
| $\sigma_T$ | Thomson scattering cross section |
| $P_\nu(\gamma)$ | 单电子每单位频率的辐射功率 |
| $N(\gamma)d\gamma$ | 单位体积内 $\gamma$ 到 $\gamma+d\gamma$ 的电子数 |
| $j_\nu$ | 电子群的谱发射率；具体是否含 $4\pi$ 取决于定义 |

### 2.2 Gaussian-cgs 单位制

RL 使用 Gaussian-cgs。Lorentz 力写成

$$
\frac{d\mathbf p}{dt}
=
q\left(
\mathbf E+
\frac{\mathbf v\times\mathbf B}{c}
\right).
$$

在 SI 中磁力项写成 $q\mathbf v\times\mathbf B$，不出现显式的 $1/c$。因此在不同资料之间转换公式时，不能只看字母形式，还要先确认单位制。

### 2.3 本文主要近似

- 单粒子同步辐射部分主要考虑 $\gamma\gg1$。
- 在推导瞬时轨道时先忽略辐射反作用，因此一个回旋周期内可近似把 $\gamma$ 当常数。
- 磁场在一个回旋轨道上近似均匀。
- §6.3 的纯幂律结果要求电子能量范围足够宽，且观察频率远离由 $\gamma_{\min}$、$\gamma_{\max}$ 造成的端点。
- 简单的 $\langle P\rangle$ 与幂律谱关系通常假设俯仰角分布固定或各向同性。
- Problem 6.2 假设各向同性压缩、理想磁通冻结，并且压缩相对电子回旋周期足够缓慢。

### 2.4 $\gamma$ 与能量、动量

总能量、动能和动量满足

$$
\boxed{
E_{\rm tot}=\gamma m_ec^2
},
$$

$$
\boxed{
K=(\gamma-1)m_ec^2
},
$$

以及

$$
\boxed{
E_{\rm tot}^2=p^2c^2+m_e^2c^4
}.
$$

对超相对论电子，$\gamma\gg1$，因此

$$
K\simeq E_{\rm tot}\simeq pc\simeq\gamma m_ec^2.
$$

电子静止能量为

$$
m_ec^2=0.511\ {\rm MeV}.
$$

所以 $\gamma$ 可以直接理解为电子总能量相对于静止能量的倍数：

$$
\gamma=\frac{E_{\rm tot}}{m_ec^2}.
$$

---


## 3. 磁场中的相对论电子运动

### 3.1 速度分解与螺旋轨道

把电子速度分解为

$$
\mathbf v=\mathbf v_\parallel+\mathbf v_\perp,
$$

其中

$$
v_\parallel=v\cos\alpha,
\qquad
v_\perp=v\sin\alpha.
$$

磁力

$$
\mathbf F_B=
-\frac{e}{c}\mathbf v\times\mathbf B
$$

只作用于垂直速度分量。结果是：

- $v_\parallel$ 使电子沿磁力线匀速移动；
- $v_\perp$ 使电子绕磁力线做圆周运动；
- 二者叠加形成螺旋轨道。

### 3.2 为什么磁场不做功？

相对论能量变化率满足

$$
\boxed{
\frac{dE}{dt}
=
\mathbf v\cdot\frac{d\mathbf p}{dt}
}.
$$

它可以从能量—动量关系推导。由

$$
E^2=p^2c^2+m_e^2c^4
$$

对时间求导：

$$
2E\frac{dE}{dt}
=
2c^2\mathbf p\cdot\frac{d\mathbf p}{dt}.
$$

因为

$$
\frac{c^2\mathbf p}{E}
=
\frac{c^2\gamma m_e\mathbf v}{\gamma m_ec^2}
=\mathbf v,
$$

所以

$$
\frac{dE}{dt}
=
\mathbf v\cdot\frac{d\mathbf p}{dt}.
$$

只有磁场时，

$$
\frac{d\mathbf p}{dt}
=
-\frac{e}{c}\mathbf v\times\mathbf B.
$$

因此

$$
\frac{dE}{dt}
=
-\frac{e}{c}
\mathbf v\cdot(\mathbf v\times\mathbf B)
=0.
$$

所以，在暂时忽略辐射反作用时，

$$
\boxed{
\frac{d}{dt}(\gamma m_ec^2)=0
},
$$

也就是 $\gamma$ 和速率保持不变，只有速度方向变化。

这里不能写成 $(\gamma m_e\mathbf v)\cdot\mathbf v=c^2$；实际上

$$
(\gamma m_e\mathbf v)\cdot\mathbf v
=
\gamma m_ev^2,
$$

它具有能量量纲，并不等于 $c^2$。

### 3.3 不做功为什么仍然辐射？

“磁力不做功”只说明外加磁场不直接改变电子能量；它不等于“电子没有加速度”。圆周运动中电子持续改变速度方向，所以有横向加速度并发出辐射。

只用外加 Lorentz 力写轨道时，忽略了电子自身辐射产生的反作用力。更完整的方程应当是

$$
\frac{d\mathbf p}{dt}
=
-\frac{e}{c}\mathbf v\times\mathbf B
+\mathbf F_{\rm rad}.
$$

于是

$$
\frac{dE}{dt}
=
\mathbf v\cdot\mathbf F_{\rm rad}
=-P_{\rm syn}<0.
$$

因此，“单个轨道上近似 $\gamma$ 不变”和“许多轨道后电子逐渐冷却”是两个不同时间尺度上的描述，并不矛盾。

---


## 4. 三个频率：$\omega_0$、$\omega_{\rm g}$ 与 $\omega_c$

### 4.1 非相对论回旋频率 $\omega_0$

非相对论圆周运动中，磁力提供向心力：

$$
\frac{ev_\perp B}{c}
=
\frac{m_ev_\perp^2}{r_L}.
$$

消去一个 $v_\perp$：

$$
\frac{v_\perp}{r_L}
=
\frac{eB}{m_ec}.
$$

因为圆周运动角速度是 $\omega=v_\perp/r_L$，所以

$$
\boxed{
\omega_0=\frac{eB}{m_ec}
}.
$$

它不依赖速度：非相对论电子越快，轨道半径越大，二者正好抵消。

### 4.2 相对论回旋频率 $\omega_{\rm g}$

相对论动量是 $p=\gamma m_ev$。向心力关系变为

$$
\frac{ev_\perp B}{c}
=
\frac{\gamma m_ev_\perp^2}{r_L}.
$$

因此

$$
\boxed{
\omega_{\rm g}
=
\frac{v_\perp}{r_L}
=
\frac{eB}{\gamma m_ec}
=
\frac{\omega_0}{\gamma}
}.
$$

相对论 Larmor 半径为

$$
\boxed{
r_L
=
\frac{\gamma m_ecv_\perp}{eB}
=
\frac{p_\perp c}{eB}
}.
$$

所以高能电子实际转圈更慢、轨道更大。

### 4.3 同步辐射临界频率 $\omega_c$

临界频率不是转圈频率。超相对论辐射集中在速度方向附近半角 $\sim1/\gamma$ 的窄锥中。观察者每个轨道只在辐射锥扫过视线时收到一个短脉冲。

脉冲宽度的定标给出

$$
\Delta t_{\rm obs}
\sim
\frac{1}{\gamma^3\omega_{\rm g}\sin\alpha}
=
\frac{1}{\gamma^2\omega_0\sin\alpha}.
$$

因此特征角频率量级是

$$
\omega\sim\frac{1}{\Delta t_{\rm obs}}
\sim
\gamma^3\omega_{\rm g}\sin\alpha
=
\gamma^2\omega_0\sin\alpha.
$$

完整 Fourier 计算给出标准定义

$$
\boxed{
\omega_c
=
\frac32\gamma^3\omega_{\rm g}\sin\alpha
=
\frac32\gamma^2\omega_0\sin\alpha
}.
$$

普通频率为

$$
\boxed{
\nu_c
=
\frac{\omega_c}{2\pi}
=
\frac{3eB}{4\pi m_ec}
\gamma^2\sin\alpha
}.
$$

三个频率的角色可以总结为：

| 频率 | 物理意义 | 对 $\gamma$ 的依赖 |
|---|---|---|
| $\omega_0$ | 假设非相对论时的 cyclotron 频率 | 无 |
| $\omega_{\rm g}$ | 相对论电子实际绕磁场转圈的频率 | $\gamma^{-1}$ |
| $\omega_c$ | 观察到的单电子同步辐射高频尺度 | $\gamma^2$ |

---


## 5. RL §6.1：单电子同步辐射总功率

### 5.1 横向加速度

电子受到的磁力大小为

$$
F_B=\frac{evB\sin\alpha}{c}.
$$

因为 $F_B=\gamma m_ea_\perp$，所以

$$
a_\perp
=
\frac{eBv\sin\alpha}{\gamma m_ec}
=
\frac{eB}{\gamma m_e}\beta\sin\alpha.
$$

也可以写成

$$
a_\perp=\omega_{\rm g}v\sin\alpha.
$$

### 5.2 单电子总功率

对垂直加速度，相对论 Larmor 公式给出

$$
P
=
\frac{2e^2}{3c^3}\gamma^4a_\perp^2.
$$

代入 $a_\perp$：

$$
\boxed{
P
=
\frac{2e^4B^2}{3m_e^2c^3}
\gamma^2\beta^2\sin^2\alpha
}.
$$

使用

$$
U_B=\frac{B^2}{8\pi}
$$

以及 Thomson 截面

$$
\boxed{
\sigma_T
=
\frac{8\pi}{3}r_e^2
=
\frac{8\pi e^4}{3m_e^2c^4}
},
$$

其中 cgs 中的经典电子半径为

$$
r_e=\frac{e^2}{m_ec^2},
$$

可以把功率改写成

$$
\boxed{
P
=
2\sigma_TcU_B
\gamma^2\beta^2\sin^2\alpha
}.
$$

Thomson 截面的数值为

$$
\boxed{
\sigma_T
=
6.652\times10^{-25}\ {\rm cm^2}
}.
$$

### 5.3 各向同性俯仰角平均

若电子速度方向各向同性，角平均为

$$
\left\langle\sin^2\alpha\right\rangle
=
\frac{1}{4\pi}
\int\sin^2\alpha\,d\Omega
=\frac23.
$$

所以

$$
\boxed{
\langle P\rangle
=
\frac43\sigma_TcU_B
\gamma^2\beta^2
}.
$$

几个极限检查：

- $B\to0$ 时 $P\to0$；
- $\alpha\to0$ 时电子沿磁场运动，$P\to0$；
- 超相对论时 $P\propto\gamma^2$，因此高能电子冷却更快；
- 功率依赖的是 $B_\perp^2=B^2\sin^2\alpha$。

---


## 6. RL §6.2：相对论聚束、脉冲与到达时间压缩

### 6.1 辐射锥为什么只有 $1/\gamma$？

在电子瞬时静止系中，辐射具有普通偶极辐射的宽角分布。变换到实验室系后，光行差把大部分辐射压缩到电子速度方向附近：

$$
\boxed{
\theta_{\rm beam}\sim\frac1\gamma
}.
$$

因此固定观察者不是一直看到该电子，而是只在辐射锥扫过视线时看到短脉冲。

### 6.2 电子速度方向转动多快？

速度方向的角变化率是

$$
\frac{d\theta}{dt}=\frac{a_\perp}{v}.
$$

利用

$$
a_\perp=\omega_{\rm g}v\sin\alpha,
$$

得到

$$
\boxed{
\frac{d\theta}{dt}
=
\omega_{\rm g}\sin\alpha
}.
$$

辐射锥从视线一侧的 $-1/\gamma$ 扫到另一侧的 $+1/\gamma$，所以总角度约为

$$
\Delta\theta\sim\frac{2}{\gamma}.
$$

源处发射窗口为

$$
\boxed{
\Delta t_{\rm emit}
\sim
\frac{2}{\gamma\omega_{\rm g}\sin\alpha}
}.
$$

代入 $\omega_{\rm g}=\omega_0/\gamma$，可以看到

$$
\Delta t_{\rm emit}
\sim
\frac{2}{\omega_0\sin\alpha}.
$$

辐射锥随 $\gamma$ 变窄，但电子转弯同时变慢，这两个效应在源处发射窗口中近似抵消。

### 6.3 为什么接收时间又压缩一个 $1-\beta$？

设第一束光在 $t=0$、$x=0$ 发出，观察者位于 $x=D$。第一束光抵达时间是

$$
T_1=\frac{D}{c}.
$$

经过 $\Delta t_{\rm emit}$ 后，电子向观察者移动了

$$
\Delta x=v\Delta t_{\rm emit}
=
\beta c\Delta t_{\rm emit}.
$$

第二束光的传播距离只有 $D-\Delta x$，因此

$$
\begin{aligned}
T_2
&=
\Delta t_{\rm emit}
+\frac{D-\beta c\Delta t_{\rm emit}}{c}\\
&=
\frac{D}{c}
+(1-\beta)\Delta t_{\rm emit}.
\end{aligned}
$$

所以到达时间间隔是

$$
\boxed{
\Delta t_{\rm obs}
=
(1-\beta)\Delta t_{\rm emit}
}.
$$

更一般地，如果速度与视线夹角为 $\psi$，则

$$
\boxed{
dt_{\rm obs}
=
(1-\beta\cos\psi)dt
}.
$$

在脉冲中央 $\psi\simeq0$。由

$$
1-\beta
=
\frac{1-\beta^2}{1+\beta}
=
\frac{1}{\gamma^2(1+\beta)}
\simeq
\frac{1}{2\gamma^2},
$$

得到

$$
\begin{aligned}
\Delta t_{\rm obs}
&\sim
\frac{1}{2\gamma^2}
\frac{2}{\gamma\omega_{\rm g}\sin\alpha}\\
&=
\frac{1}{\gamma^3\omega_{\rm g}\sin\alpha}\\
&=
\frac{1}{\gamma^2\omega_0\sin\alpha}.
\end{aligned}
$$

所以脉冲对应的高频尺度是

$$
\omega\sim\frac{1}{\Delta t_{\rm obs}}
\sim\gamma^2\omega_0\sin\alpha.
$$

这里的核心因果不是抽象的“时间膨胀”，而是光程差：第二束光发得更晚，但它从更靠近观察者的位置出发，因此追上了第一束光。

### 6.4 为什么短脉冲产生宽频谱？

平滑正弦波只有单一频率；突然、尖锐的脉冲需要许多 Fourier 频率叠加。同步辐射中，电子每转一圈产生一次窄脉冲，因此：

- 脉冲重复周期决定谐波之间的间隔，量级与 $\omega_{\rm g}$ 有关；
- 单个脉冲宽度决定谐波包络能延伸到多高的频率，量级由 $\omega_c$ 决定。

当 $\gamma\gg1$ 时，许多密集谐波在实际观测分辨率下形成近似连续谱。

---


## 7. 临界频率“临界”在哪里

临界频率不是绝对禁止超过的上限，也不是电子转圈频率。它是单电子频谱从低频缓慢变化转入高频指数衰减的特征尺度。

单电子频谱写成

$$
P_\nu\propto F\left(\frac{\nu}{\nu_c}\right).
$$

当 $\nu\ll\nu_c$，

$$
P_\nu\propto\nu^{1/3}.
$$

当 $\nu\gg\nu_c$，

$$
P_\nu\propto
\nu^{1/2}e^{-\nu/\nu_c}.
$$

所以

$$
\boxed{
\nu_c
\text{ 标记了单电子同步辐射进入指数压低的高频尺度}
}.
$$

物理上，有限宽度脉冲只能有效支持到 $\sim1/\Delta t_{\rm obs}$ 的 Fourier 频率。更高频率要求电场在更短时间内反复变化；在精确 Fourier 积分中，不同时刻的快速相位振荡互相抵消，留下指数小的结果。

需要区分临界频率和峰值频率。标准同步辐射函数 $F(x)$ 在

$$
x\equiv\frac{\nu}{\nu_c}\simeq0.29
$$

处达到最大值，因此

$$
\boxed{
\nu_{\rm peak}\simeq0.29\nu_c
}.
$$

不同资料有时把 $0.29\nu_c$ 也称作 characteristic frequency；这只是命名差异。

---


## 8. 单电子频谱及其定标

### 8.1 精确形式

在 Gaussian-cgs 中，单电子每单位普通频率的功率为

$$
\boxed{
P_\nu(\gamma,\alpha)
=
\frac{\sqrt3e^3B\sin\alpha}{m_ec^2}
F\left(\frac{\nu}{\nu_c}\right)
}.
$$

同步辐射函数是

$$
\boxed{
F(x)
=
x\int_x^\infty K_{5/3}(\xi)d\xi
},
$$

其中 $K_{5/3}$ 是第二类修正 Bessel 函数。

如果使用每单位角频率的功率 $P_\omega$，则

$$
P_\nu d\nu=P_\omega d\omega,
\qquad
d\omega=2\pi d\nu,
$$

所以

$$
P_\nu=2\pi P_\omega.
$$

### 8.2 为什么形状只依赖 $\nu/\nu_c$？

不同 $B$、$\gamma$、$\alpha$ 产生的短脉冲具有相似形状，只是时间宽度不同。Fourier 变换后，频谱也具有相似形状，只是横向频率尺度不同。因此所有单电子频谱都可以用无量纲变量

$$
x=\frac{\nu}{\nu_c}
$$

写成同一个普适函数 $F(x)$。

### 8.3 为什么频谱振幅只显式含 $B\sin\alpha$？

先写成

$$
P_\nu=A\,F\left(\frac{\nu}{\nu_c}\right).
$$

总功率是

$$
P_{\rm tot}
=
\int_0^\infty P_\nu d\nu.
$$

令 $x=\nu/\nu_c$，$d\nu=\nu_cdx$：

$$
P_{\rm tot}
=
A\nu_c\int_0^\infty F(x)dx.
$$

最后的积分是固定数字，所以定标上

$$
A\propto\frac{P_{\rm tot}}{\nu_c}.
$$

而

$$
P_{\rm tot}\propto B^2\gamma^2\sin^2\alpha,
$$

$$
\nu_c\propto B\gamma^2\sin\alpha.
$$

两者相除：

$$
\boxed{
A\propto B\sin\alpha
}.
$$

所以 $\gamma^2$ 没有消失，而是主要进入了频谱的横向宽度 $\nu_c$。把 $\gamma$ 增大十倍时，总功率增大约 $100$ 倍，频谱宽度也增大约 $100$ 倍，因此典型谱高度不再显式含 $\gamma^2$。

---


## 9. RL §6.3：电子幂律分布与变量变换

### 9.1 从 $N(E)$ 变到 $N(\gamma)$

假设电子能量分布为

$$
N_E(E)dE=C_EE^{-p}dE.
$$

同一批电子也可以用 Lorentz 因子描述：

$$
N_\gamma(\gamma)d\gamma.
$$

粒子数守恒要求

$$
\boxed{
N_E(E)dE=N_\gamma(\gamma)d\gamma
}.
$$

所以变量变换必须包含 Jacobian：

$$
N_\gamma(\gamma)
=
N_E(E(\gamma))
\left|\frac{dE}{d\gamma}\right|.
$$

若 $E$ 表示总能量，

$$
E=\gamma m_ec^2,
\qquad
\frac{dE}{d\gamma}=m_ec^2.
$$

于是

$$
\begin{aligned}
N_\gamma(\gamma)
&=
C_E(\gamma m_ec^2)^{-p}m_ec^2\\
&=
C_E(m_ec^2)^{1-p}\gamma^{-p}.
\end{aligned}
$$

定义

$$
C_\gamma=C_E(m_ec^2)^{1-p},
$$

得到

$$
\boxed{
N_\gamma(\gamma)d\gamma
=
C_\gamma\gamma^{-p}d\gamma
}.
$$

指数 $p$ 不变，是因为 $E$ 与 $\gamma$ 是线性关系；归一化常数和单位则发生变化。

如果 $E$ 指动能，严格关系是

$$
E_{\rm kin}=(\gamma-1)m_ec^2,
$$

所以

$$
N_\gamma(\gamma)\propto(\gamma-1)^{-p}.
$$

只有在 $\gamma\gg1$ 时才近似为 $\gamma^{-p}$。

### 9.2 为什么高频主要来自高能电子？

固定 $B$ 与 $\alpha$ 时，

$$
\nu_c=K\gamma^2,
\qquad
K\equiv\frac{3eB\sin\alpha}{4\pi m_ec}.
$$

因此在频率 $\nu$ 附近贡献最强的电子大致满足

$$
\nu\sim\nu_c(\gamma),
$$

也就是

$$
\boxed{
\gamma_\nu
\sim
\left(\frac{\nu}{K}\right)^{1/2}
}.
$$

所以，在固定磁场和俯仰角的条件下，

$$
\boxed{
\gamma\propto\nu^{1/2}
}.
$$

这不是严格的一一对应，因为单个电子具有宽频谱；它表示主要贡献的能量尺度。

---


## 10. 从电子幂律积分得到同步辐射幂律

### 10.1 从离散求和到连续积分

Lorentz 因子在 $\gamma$ 到 $\gamma+d\gamma$ 之间的电子数密度是

$$
N(\gamma)d\gamma.
$$

每个电子在频率 $\nu$ 处的功率是 $P_\nu(\gamma)$，所以这一小群电子的贡献为

$$
dj_\nu
=
N(\gamma)P_\nu(\gamma)d\gamma.
$$

对所有电子能量积分：

$$
\boxed{
j_\nu
=
\int_{\gamma_{\min}}^{\gamma_{\max}}
N(\gamma)P_\nu(\gamma)d\gamma
}.
$$

代入

$$
N(\gamma)=C_\gamma\gamma^{-p}
$$

和

$$
P_\nu
\propto
B\sin\alpha
F\left(\frac{\nu}{K\gamma^2}\right),
$$

如果只关注频率依赖，可以写成

$$
\boxed{
j_\nu
\propto
\int
\gamma^{-p}
F\left(\frac{\nu}{K\gamma^2}\right)d\gamma
}.
$$

### 10.2 详细换元

令

$$
x=\frac{\nu}{K\gamma^2}.
$$

解出

$$
\gamma
=
\left(\frac{\nu}{K}\right)^{1/2}x^{-1/2}.
$$

因此

$$
d\gamma
=
-\frac12
\left(\frac{\nu}{K}\right)^{1/2}
x^{-3/2}dx,
$$

并且

$$
\gamma^{-p}
=
\left(\frac{\nu}{K}\right)^{-p/2}x^{p/2}.
$$

两者相乘：

$$
\boxed{
\gamma^{-p}d\gamma
=
-\frac12
\left(\frac{\nu}{K}\right)^{(1-p)/2}
x^{(p-3)/2}dx
}.
$$

原来的上下限变为

$$
x_{\max}=\frac{\nu}{K\gamma_{\min}^2},
\qquad
x_{\min}=\frac{\nu}{K\gamma_{\max}^2}.
$$

交换上下限消去负号：

$$
j_\nu
\propto
\frac12
\left(\frac{\nu}{K}\right)^{(1-p)/2}
\int_{x_{\min}}^{x_{\max}}
x^{(p-3)/2}F(x)dx.
$$

### 10.3 宽能量范围近似

如果观察频率满足

$$
K\gamma_{\min}^2
\ll
\nu
\ll
K\gamma_{\max}^2,
$$

那么

$$
x_{\min}\ll1,
\qquad
x_{\max}\gg1.
$$

可以把积分近似延伸为

$$
\int_0^\infty x^{(p-3)/2}F(x)dx,
$$

它对固定 $p$ 只是一个常数。因此

$$
\boxed{
j_\nu
\propto
\nu^{(1-p)/2}
=
\nu^{-(p-1)/2}
}.
$$

若定义

$$
j_\nu\propto\nu^{-s},
$$

则

$$
\boxed{
s=\frac{p-1}{2}
},
$$

或者

$$
\boxed{
p=2s+1
}.
$$

如果采用 $F_\nu\propto\nu^\alpha$ 的另一种符号约定，则

$$
\alpha=-\frac{p-1}{2}.
$$

### 10.4 同时保留磁场定标

因为单电子振幅含 $B\sin\alpha$，而

$$
K\propto B\sin\alpha,
$$

所以完整定标是

$$
\boxed{
j_\nu
\propto
(B\sin\alpha)^{(p+1)/2}
\nu^{-(p-1)/2}
}.
$$

例如 $p=3$ 时，

$$
j_\nu\propto(B\sin\alpha)^2\nu^{-1}.
$$

接近电子能量上下限对应的频率时，积分上下限不能再近似成 $0$ 和 $\infty$，频谱会偏离简单幂律。

---


## 11. Thomson 截面与逆 Compton 对比

逆 Compton 散射是低能光子从高能电子取得能量的过程。一个低能光子在电子静止系中先经历 Doppler 蓝移，近似弹性地 Thomson 散射后，再变换回实验室系，因此典型能量增益为

$$
\langle\epsilon_{\rm out}\rangle
\simeq
\frac43\gamma^2\epsilon_{\rm in}
$$

，这里假设各向同性低能光子场且处于 Thomson 极限。

电子在能量密度为 $U_{\rm rad}$ 的各向同性光子场中的逆 Compton 损失功率为

$$
\boxed{
P_{\rm IC}
=
\frac43\sigma_TcU_{\rm rad}
\gamma^2\beta^2
}.
$$

各向同性俯仰角平均后的同步辐射功率是

$$
\boxed{
P_{\rm syn}
=
\frac43\sigma_TcU_B
\gamma^2\beta^2
}.
$$

所以

$$
\boxed{
\frac{P_{\rm IC}}{P_{\rm syn}}
=
\frac{U_{\rm rad}}{U_B}
}.
$$

两者具有相同形式，因为相对论电子都是在与某种电磁能量密度相互作用。区别在于同步辐射对应磁场能量密度 $U_B$，逆 Compton 对应光子能量密度 $U_{\rm rad}$。

Thomson 近似要求光子在电子静止系中的能量远小于电子静止能，数量级上

$$
\gamma\epsilon_{\rm in}\ll m_ec^2.
$$

如果不满足，就进入 Klein–Nishina 区域，散射截面下降，简单的 $\gamma^2$ 能量增益和 $\sigma_T$ 功率公式不再适用。

---

## 12. 习题 6.1：同步辐射冷却

### 12.1 题目翻译

一个超相对论电子发出同步辐射。证明其能量随时间按下式下降：

$$
\gamma(t)
=
\gamma_0(1+A\gamma_0t)^{-1},
$$

其中

$$
A
=
\frac{2e^4B_\perp^2}{3m_e^3c^5},
\qquad
B_\perp=B\sin\alpha,
$$

$\gamma_0$ 是初始 Lorentz 因子。证明电子损失一半能量所需的时间为

$$
t_{1/2}
=
(A\gamma_0)^{-1}
=
\frac{5.1\times10^8}{\gamma_0B_\perp^2}\ {\rm s},
$$

其中 $B_\perp$ 用 gauss 表示。最后解释这里 $\gamma$ 的下降如何与 Eqs. (6.1) 所暗示的常数 $\gamma$ 相容。

### 12.2 写出能量损失方程

固定俯仰角时，超相对论同步辐射功率为

$$
P_{\rm syn}
=
\frac{2e^4B_\perp^2}{3m_e^2c^3}\gamma^2.
$$

电子总能量是

$$
E=\gamma m_ec^2.
$$

辐射功率是电子能量损失率：

$$
\frac{dE}{dt}=-P_{\rm syn}.
$$

所以

$$
m_ec^2\frac{d\gamma}{dt}
=
-\frac{2e^4B_\perp^2}{3m_e^2c^3}\gamma^2.
$$

两边除以 $m_ec^2$：

$$
\boxed{
\frac{d\gamma}{dt}
=
-A\gamma^2
},
$$

其中

$$
\boxed{
A
=
\frac{2e^4B_\perp^2}{3m_e^3c^5}
}.
$$

### 12.3 积分得到 $\gamma(t)$

分离变量：

$$
\frac{d\gamma}{\gamma^2}=-A\,dt.
$$

从 $t=0,\gamma=\gamma_0$ 积分到 $t,\gamma(t)$：

$$
\int_{\gamma_0}^{\gamma(t)}\gamma^{-2}d\gamma
=
-A\int_0^t dt.
$$

因此

$$
-\frac{1}{\gamma(t)}
+\frac{1}{\gamma_0}
=-At.
$$

整理：

$$
\frac{1}{\gamma(t)}
=
\frac{1}{\gamma_0}+At.
$$

所以

$$
\boxed{
\gamma(t)
=
\frac{\gamma_0}{1+A\gamma_0t}
}.
$$

它不是指数衰减。原因是辐射功率本身随 $\gamma^2$ 下降；电子冷却后，继续冷却的速率也变慢。

### 12.4 半能量时间

超相对论时 $E\propto\gamma$，因此损失一半能量对应

$$
\gamma(t_{1/2})=\frac{\gamma_0}{2}.
$$

代入解：

$$
\frac{\gamma_0}{2}
=
\frac{\gamma_0}{1+A\gamma_0t_{1/2}}.
$$

所以

$$
1+A\gamma_0t_{1/2}=2,
$$

即

$$
\boxed{
t_{1/2}
=
\frac{1}{A\gamma_0}
}.
$$

代入 $A$：

$$
t_{1/2}
=
\frac{3m_e^3c^5}
{2e^4B_\perp^2\gamma_0}.
$$

由

$$
\sigma_T
=
\frac{8\pi e^4}{3m_e^2c^4}
$$

可得

$$
A
=
\frac{\sigma_TB_\perp^2}{4\pi m_ec},
$$

所以

$$
t_{1/2}
=
\frac{4\pi m_ec}{\sigma_TB_\perp^2\gamma_0}.
$$

代入数值得到

$$
\boxed{
t_{1/2}
=
\frac{5.1\times10^8}
{B_\perp^2\gamma_0}\ {\rm s}
}.
$$

### 12.5 与 $\gamma=\text{constant}$ 的相容性

Eqs. (6.1) 只包含外加磁场的 Lorentz 力。磁力垂直于速度，所以不做功，并给出一个轨道上的常数 $\gamma$。Problem 6.1 则把辐射反作用造成的长期能量损失加入进去：

$$
\frac{d\mathbf p}{dt}
=
-\frac{e}{c}\mathbf v\times\mathbf B
+\mathbf F_{\rm rad}.
$$

于是

$$
\frac{dE}{dt}
=
\mathbf v\cdot\mathbf F_{\rm rad}
=-P_{\rm syn}.
$$

因此两者是不同精度的近似，而不是矛盾。

---


## 13. 习题 6.2：各向同性绝热压缩

### 13.1 题目翻译

某区域包含相对论电子和磁场，其典型线性尺度为 $l$。假设该区域受到激波等作用而发生压缩，并且三个方向的压缩相同。研究压缩对电子与磁场性质的影响。

1. 证明

   $$
   B\propto l^{-2}.
   $$

2. 如果压缩缓慢，证明

   $$
   p\propto l^{-1},
   $$

   并证明穿过电子回旋轨道的磁通量近似守恒。

3. 证明

   $$
   P\propto l^{-6},
   \qquad
   \nu_c\propto l^{-4},
   \qquad
   t_{1/2}\propto l^5.
   $$

### 13.2 (a) 磁场定标 $B\propto l^{-2}$

在理想 MHD 中，磁场冻结在流体中。穿过一个随流体一起运动的表面的磁通量守恒：

$$
\Phi_B=BA_\perp=\text{constant}.
$$

各向同性压缩时，垂直磁场的面积满足

$$
A_\perp\propto l^2.
$$

所以

$$
Bl^2=\text{constant},
$$

即

$$
\boxed{
B\propto l^{-2}
}.
$$

质量守恒同时给出

$$
\rho V=\text{constant},
\qquad
V\propto l^3,
$$

所以

$$
\rho\propto l^{-3}.
$$

消去 $l$：

$$
l\propto\rho^{-1/3},
$$

因此

$$
\boxed{
B\propto\rho^{2/3}
}.
$$

$2/3$ 的几何来源是：磁通由二维面积决定，而密度由三维体积决定。这个结果只适用于各向同性压缩；一维压缩时，磁场对密度的定标还取决于压缩方向相对于磁场的取向。

### 13.3 (b) 第一绝热不变量

缓慢压缩要求磁场变化时间远长于回旋周期，并且空间变化尺度远大于 Larmor 半径：

$$
\frac{B}{|\dot B|}
\gg
\frac{2\pi}{\omega_{\rm g}},
\qquad
L_B\gg r_L.
$$

此时快速周期回旋运动的作用量近似守恒。第一绝热不变量可以写成

$$
\boxed{
\mu
=
\frac{p_\perp^2}{2m_eB}
\simeq\text{constant}
}.
$$

等价地，

$$
\boxed{
\frac{p_\perp^2}{B}
\simeq\text{constant}
}.
$$

因此

$$
p_\perp\propto B^{1/2}.
$$

由 $B\propto l^{-2}$：

$$
\boxed{
p_\perp\propto l^{-1}
}.
$$

对于各向同性压缩，特征动量在三个方向上具有相同的定标，因此

$$
\boxed{
p\propto l^{-1}
}.
$$

### 13.4 为什么 $p_\perp^2/B$ 守恒？

缓慢增强的磁场通过 Faraday 定律产生环形感生电场。对瞬时回旋半径 $r_L$，

$$
2\pi r_LE_\phi
=
-\frac{1}{c}\frac{d}{dt}(\pi r_L^2B).
$$

在一个回旋周期内近似固定 $r_L$：

$$
E_\phi
\simeq
-\frac{r_L}{2c}\frac{dB}{dt}.
$$

感生电场对电子做功。取能量增加的大小：

$$
\frac{dE}{dt}
=
\frac{ev_\perp r_L}{2c}\frac{dB}{dt}.
$$

代入

$$
r_L=\frac{p_\perp c}{eB}
$$

得到

$$
\frac{dE}{dt}
=
\frac{p_\perp v_\perp}{2B}\frac{dB}{dt}.
$$

同时相对论能量关系给出

$$
\frac{dE}{dt}
=
v_\perp\frac{dp_\perp}{dt}.
$$

比较两式：

$$
\frac{1}{p_\perp}\frac{dp_\perp}{dt}
=
\frac{1}{2B}\frac{dB}{dt}.
$$

积分得到

$$
p_\perp\propto B^{1/2},
$$

即 $p_\perp^2/B$ 守恒。磁场本身的 Lorentz 力仍然不做功；电子能量的增加来自变化磁场产生的感生电场。

### 13.5 回旋轨道磁通量守恒

相对论 Larmor 半径是

$$
r_L=\frac{p_\perp c}{eB}.
$$

轨道磁通量为

$$
\begin{aligned}
\Phi_{\rm orbit}
&=\pi r_L^2B\\
&=
\frac{\pi c^2}{e^2}
\frac{p_\perp^2}{B}.
\end{aligned}
$$

因此第一绝热不变量守恒意味着

$$
\boxed{
\Phi_{\rm orbit}\simeq\text{constant}
}.
$$

这不是简单把宏观 MHD 的磁通冻结直接套在电子轨道上；电子轨道不是流体物质表面。它来自快速周期运动的绝热作用量守恒。

### 13.6 热力学交叉验证：$E\propto V^{-1/3}$

各向同性超相对论粒子满足

$$
P=\frac{u}{3}=\frac{U}{3V}.
$$

原因是动理学压强

$$
P=\frac13n\langle pv\rangle
$$

而超相对论时 $v\simeq c$、$E\simeq pc$，所以 $pv\simeq E$。

绝热过程满足

$$
dU=-P\,dV.
$$

代入 $P=U/(3V)$：

$$
\frac{dU}{U}
=
-\frac13\frac{dV}{V}.
$$

因此

$$
U\propto V^{-1/3}.
$$

粒子数固定时，单粒子平均能量 $E=U/N$ 也满足

$$
E\propto V^{-1/3}.
$$

而 $V\propto l^3$，所以

$$
E\propto l^{-1}.
$$

超相对论时 $E\simeq pc$，再次得到

$$
\boxed{
p\propto l^{-1}
}.
$$

### 13.7 (c) 辐射功率、临界频率与冷却时间

同步辐射功率定标为

$$
P\propto B^2\gamma^2.
$$

超相对论时 $p\propto\gamma$，而 $p\propto l^{-1}$，所以

$$
\gamma\propto l^{-1}.
$$

结合 $B\propto l^{-2}$：

$$
P
\propto
l^{-4}l^{-2}.
$$

因此

$$
\boxed{
P\propto l^{-6}
}.
$$

临界频率满足

$$
\nu_c\propto B\gamma^2,
$$

所以

$$
\boxed{
\nu_c\propto l^{-2}l^{-2}=l^{-4}
}.
$$

由 Problem 6.1，瞬时半能量时间满足

$$
t_{1/2}
\propto
\frac{1}{B^2\gamma}.
$$

因此

$$
\boxed{
t_{1/2}
\propto
\frac{1}{l^{-4}l^{-1}}
=l^5
}.
$$

### 13.8 压缩因子的直观例子

定义压缩因子

$$
\mathcal C=\frac{l_i}{l_f}>1.
$$

则

$$
\frac{B_f}{B_i}=\mathcal C^2,
\qquad
\frac{p_f}{p_i}=\mathcal C,
$$

$$
\frac{P_f}{P_i}=\mathcal C^6,
\qquad
\frac{\nu_{c,f}}{\nu_{c,i}}=\mathcal C^4,
$$

$$
\frac{t_{1/2,f}}{t_{1/2,i}}=\mathcal C^{-5}.
$$

若线性尺度缩小为一半，$\mathcal C=2$，则

$$
B_f=4B_i,
\qquad
p_f=2p_i,
$$

$$
P_f=64P_i,
\qquad
\nu_{c,f}=16\nu_{c,i},
$$

$$
t_{1/2,f}=\frac{t_{1/2,i}}{32}.
$$

这说明适度压缩就能极大增强同步辐射、把频谱推向高频，同时显著缩短冷却时间。

---


## 14. English assignment-ready solutions

### 14.1 Problem 6.1

For an ultrarelativistic electron with pitch angle $\alpha$, the synchrotron power is

$$
P_{\rm syn}
=
\frac{2e^4B^2\gamma^2\sin^2\alpha}
{3m_e^2c^3}
=
\frac{2e^4B_\perp^2\gamma^2}
{3m_e^2c^3},
$$

where $B_\perp=B\sin\alpha$. Since the electron energy is $E=\gamma m_ec^2$, radiative energy loss gives

$$
m_ec^2\frac{d\gamma}{dt}
=
-P_{\rm syn}.
$$

Hence

$$
\frac{d\gamma}{dt}
=
-A\gamma^2,
\qquad
A
=
\frac{2e^4B_\perp^2}
{3m_e^3c^5}.
$$

Separating variables and imposing $\gamma(0)=\gamma_0$,

$$
\int_{\gamma_0}^{\gamma(t)}\gamma^{-2}d\gamma
=
-A\int_0^t dt,
$$

which gives

$$
\frac{1}{\gamma(t)}
=
\frac{1}{\gamma_0}+At.
$$

Therefore,

$$
\boxed{
\gamma(t)
=
\frac{\gamma_0}{1+A\gamma_0t}
}.
$$

For an ultrarelativistic electron, losing half of the energy corresponds to $\gamma=\gamma_0/2$. Thus

$$
\boxed{
t_{1/2}
=
\frac{1}{A\gamma_0}
}.
$$

Using

$$
\sigma_T
=
\frac{8\pi e^4}{3m_e^2c^4},
$$

this becomes

$$
t_{1/2}
=
\frac{4\pi m_ec}
{\sigma_TB_\perp^2\gamma_0}
=
\frac{5.1\times10^8}
{B_\perp^2\gamma_0}\ {\rm s},
$$

with $B_\perp$ measured in gauss.

Equations (6.1) include only the external magnetic Lorentz force, which is perpendicular to the velocity and therefore does no work. They neglect the radiation-reaction force. The decrease in $\gamma$ found here results from including the accumulated radiative energy loss, so the two results are consistent approximations on different time scales.

### 14.2 Problem 6.2

Let $l$ be the characteristic linear scale of the compressed region. Under isotropic compression, an area perpendicular to the magnetic field scales as $A_\perp\propto l^2$. Flux freezing implies

$$
BA_\perp=\text{constant},
$$

and therefore

$$
\boxed{B\propto l^{-2}}.
$$

If the compression is slow compared with the gyroperiod, the first adiabatic invariant is conserved:

$$
\frac{p_\perp^2}{B}
=
\text{constant}.
$$

Therefore,

$$
p_\perp\propto B^{1/2}\propto l^{-1}.
$$

For isotropic compression the characteristic momentum has the same scaling,

$$
\boxed{p\propto l^{-1}}.
$$

The relativistic Larmor radius is

$$
r_L=\frac{p_\perp c}{eB},
$$

so the magnetic flux through an electron orbit is

$$
\Phi_{\rm orbit}
=
\pi r_L^2B
=
\frac{\pi c^2}{e^2}
\frac{p_\perp^2}{B}.
$$

Thus $\Phi_{\rm orbit}$ is approximately conserved.

For ultrarelativistic electrons, $p\propto\gamma$, so $\gamma\propto l^{-1}$. The synchrotron power scales as

$$
P\propto B^2\gamma^2
\propto l^{-4}l^{-2},
$$

giving

$$
\boxed{P\propto l^{-6}}.
$$

The critical frequency scales as

$$
\nu_c\propto B\gamma^2
\propto l^{-2}l^{-2},
$$

so

$$
\boxed{\nu_c\propto l^{-4}}.
$$

Finally, Problem 6.1 gives

$$
t_{1/2}\propto(B^2\gamma)^{-1}.
$$

Therefore,

$$
\boxed{t_{1/2}\propto l^5}.
$$

Moderate compression can consequently produce a large increase in synchrotron power and characteristic frequency while greatly shortening the radiative lifetime.

---


## 15. 量纲、极限与常见混淆

### 15.1 $\omega$ 与 $\nu$

$$
\omega=2\pi\nu.
$$

因此

$$
\omega_c
=
\frac32\gamma^2\omega_0\sin\alpha
$$

对应

$$
\nu_c
=
\frac{3eB}{4\pi m_ec}\gamma^2\sin\alpha.
$$

不能把角频率公式直接当作 Hz 使用。

### 15.2 回旋频率与临界频率

$$
\omega_{\rm g}=\frac{\omega_0}{\gamma}
$$

是电子实际转圈的频率；

$$
\omega_c=\frac32\gamma^3\omega_{\rm g}\sin\alpha
$$

是短脉冲的高频尺度。电子可以转得很慢，却因脉冲很尖而产生很高频的 Fourier 成分。

### 15.3 临界频率与峰值频率

$$
\nu_{\rm peak}\simeq0.29\nu_c.
$$

$\nu_c$ 是标准频谱尺度，不是 $P_\nu$ 最大值的位置，也不是绝对截止。

### 15.4 磁场不做功与辐射损失

外加静磁场的 Lorentz 力不做功；辐射能量损失来自辐射反作用。先用常数 $\gamma$ 轨道计算瞬时辐射，再在较长时间尺度上计算冷却，是一致的近似方案。

### 15.5 单电子频谱与电子群频谱

单电子低频谱满足

$$
P_\nu\propto\nu^{1/3},
$$

但幂律电子群满足

$$
j_\nu\propto\nu^{-(p-1)/2}.
$$

二者是不同层次的结果，不能混用。

### 15.6 两种谱指数约定

RL 使用

$$
P_\nu\propto\nu^{-s},
$$

所以 $s=(p-1)/2$。另一常见约定是

$$
F_\nu\propto\nu^\alpha,
$$

此时 $\alpha=-(p-1)/2$。

### 15.7 $N(E)$ 与 $N(\gamma)$ 的常数不同

$$
N_E(E)dE=N_\gamma(\gamma)d\gamma
$$

要求带上 Jacobian。虽然两个分布都有指数 $-p$，但归一化常数满足

$$
C_\gamma=C_E(m_ec^2)^{1-p},
$$

它们的单位也不同。

### 15.8 Problem 6.2 的适用边界

- $B\propto\rho^{2/3}$ 只适用于各向同性压缩；
- $p_\perp^2/B$ 守恒要求变化缓慢；
- 若压缩与同步辐射冷却同时显著，必须求解随时间变化的 $B(t)$ 与 $\gamma(t)$；
- $t_{1/2}\propto l^5$ 是每个压缩状态下的瞬时冷却时间定标。

---


## 16. 复习清单与核心公式

### 16.1 能否解释以下概念？

- [ ] 为什么磁场不做功，但带电粒子仍然辐射？
- [ ] $\omega_0$、$\omega_{\rm g}$、$\omega_c$ 分别代表什么？
- [ ] 为什么高能电子实际转圈更慢，却产生更高频同步辐射？
- [ ] 为什么辐射锥的角宽约为 $1/\gamma$？
- [ ] 为什么 $dt_{\rm obs}=(1-\beta\cos\psi)dt$？
- [ ] 临界频率“临界”在哪里？
- [ ] 为什么 $P_\nu$ 的振幅显式正比于 $B\sin\alpha$，而不显式含 $\gamma^2$？
- [ ] 如何从 $N(E)$ 正确变换到 $N(\gamma)$？
- [ ] 为什么必须对 $N(\gamma)P_\nu(\gamma)$ 积分？
- [ ] 为什么电子谱指数 $p$ 对应辐射谱指数 $(p-1)/2$？
- [ ] 为什么各向同性磁通冻结给出 $B\propto\rho^{2/3}$？
- [ ] 第一绝热不变量为何是 $p_\perp^2/B$？
- [ ] 为什么超相对论绝热气体满足 $E\propto V^{-1/3}$？

### 16.2 核心公式

运动与能量：

$$
\gamma=\frac{1}{\sqrt{1-\beta^2}},
\qquad
E=\gamma m_ec^2,
\qquad
p=\gamma m_ev.
$$

三个频率：

$$
\omega_0=\frac{eB}{m_ec},
$$

$$
\omega_{\rm g}=\frac{\omega_0}{\gamma},
$$

$$
\omega_c
=
\frac32\gamma^3\omega_{\rm g}\sin\alpha
=
\frac32\gamma^2\omega_0\sin\alpha.
$$

总功率：

$$
P
=
2\sigma_TcU_B\gamma^2\beta^2\sin^2\alpha,
$$

$$
\langle P\rangle
=
\frac43\sigma_TcU_B\gamma^2\beta^2.
$$

单电子频谱：

$$
P_\nu
=
\frac{\sqrt3e^3B\sin\alpha}{m_ec^2}
F\left(\frac{\nu}{\nu_c}\right).
$$

幂律电子群：

$$
N(\gamma)\propto\gamma^{-p},
$$

$$
j_\nu
\propto
(B\sin\alpha)^{(p+1)/2}
\nu^{-(p-1)/2}.
$$

同步辐射冷却：

$$
\frac{d\gamma}{dt}=-A\gamma^2,
\qquad
\gamma(t)=\frac{\gamma_0}{1+A\gamma_0t}.
$$

绝热压缩：

$$
B\propto l^{-2},
\qquad
p\propto l^{-1},
$$

$$
P\propto l^{-6},
\qquad
\nu_c\propto l^{-4},
\qquad
t_{1/2}\propto l^5.
$$

---


## 17. 进一步物理联系

### 17.1 由观测频谱反推电子能谱

若观测到光薄同步辐射

$$
F_\nu\propto\nu^{-s},
$$

则在未冷却的简单幂律模型中

$$
p=2s+1.
$$

真实天体中还需要检查同步冷却、吸收、电子能谱截断、空间非均匀和 Doppler boosting。

### 17.2 同步辐射与逆 Compton 双峰

同一批电子可以先产生同步辐射，再把这些同步辐射光子通过逆 Compton 散射提升到高能段，这称为 synchrotron self-Compton（SSC）。因此许多喷流源会出现一个同步辐射低能峰和一个 Compton 高能峰。

### 17.3 冷却为什么会改变电子谱？

因为

$$
\dot\gamma\propto-\gamma^2,
$$

高能电子比低能电子冷却得更快。持续注入与冷却达到稳态时，电子谱通常在冷却折点以上变陡，从而使同步辐射频谱也产生相应 break。这个效应超出 RL §6.1–§6.3 的最简推导，但在解释真实天体光谱时非常重要。

---


## 18. 参考资料

1. Rybicki, G. B., & Lightman, A. P., *Radiative Processes in Astrophysics*, Chapter 6, §§6.1–6.3 and Problems 6.1–6.2.
2. Bradt, H., *Astrophysics Processes*, Chapter 8.
3. AstroBaki, [Introduction to Synchrotron Radiation and Relativistic Beaming](https://casper.astro.berkeley.edu/astrobaki/index.php/Introduction_to_Synchrotron_Radiation_and_Relativistic_Beaming).
4. AstroBaki, [Synchrotron Radiation](https://casper.astro.berkeley.edu/astrobaki/index.php/Synchrotron_Radiation).
5. AST1440 — Radiation (2026), course reading assignment for synchrotron radiation.
