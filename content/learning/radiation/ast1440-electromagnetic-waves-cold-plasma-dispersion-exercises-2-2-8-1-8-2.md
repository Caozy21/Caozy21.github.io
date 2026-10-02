---
title: "AST1440 电磁波、冷等离子体色散与脉冲延迟：RL §2.1–2.3、§8.1 及习题 2.2、8.1、8.2 详解"
description: "从 Maxwell 方程和平面电磁波出发，系统推导冷等离子体色散、相速度与群速度、脉冲星色散延迟、复折射率与吸收，并详解 RL 习题 2.2、8.1 和 8.2。"
date: "2026-09-28"
tags: ["AST1440","Electromagnetic waves","Cold plasma","Dispersion","Exercises"]
order: 6
draft: false
---

# AST1440 电磁波、冷等离子体色散与脉冲延迟：RL §2.1–2.3、§8.1 及习题 2.2、8.1、8.2 详解

> 课程：AST1440 — Radiation；本次主题为 Electromagnetic Waves and Dispersion in a Cold Plasma。
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§2.1–2.3，印刷页 51–61；§8.1，印刷页 224–228；习题 2.2，印刷页 74–75；习题 8.1–8.2，印刷页 236。
> 整理日期：2026 年 9 月 28 日。
> 本文按物理依赖关系整合教材阅读、课前习题与讨论中的全部追问：Maxwell 方程的物理意义、真空波动方程怎样得到、为什么 $\partial_t\rightarrow-i\omega$、为什么 $v_{\rm ph}=\omega/k$、短脉冲为何对应宽频谱、经典 Fourier 波与量子力学的联系、电子电流怎样并入介电常数、为什么理想冷等离子体有色散却无耗散、相速度与群速度的区别、脉冲星色散常数 $4.15\,\mathrm{ms}$ 的来源、复折射率如何导致空间衰减，以及折射界面上为什么 $d\phi_1=d\phi_2$。每道指定习题先给中文推导，再给可直接用于作业的英文版本。

## 目录

1. [本次预习要求与逻辑主线](#1-本次预习要求与逻辑主线)
2. [统一符号、单位、复指数约定与假设](#2-统一符号单位复指数约定与假设)
3. [Maxwell 方程的物理意义与真空波动方程](#3-maxwell-方程的物理意义与真空波动方程)
4. [平面电磁波、横波结构与相速度](#4-平面电磁波横波结构与相速度)
5. [有限脉冲、Fourier 频谱及其与量子力学的联系](#5-有限脉冲fourier-频谱及其与量子力学的联系)
6. [自由电子响应、电流与等效介电常数](#6-自由电子响应电流与等效介电常数)
7. [冷等离子体色散关系、截止与无耗散响应](#7-冷等离子体色散关系截止与无耗散响应)
8. [相速度、群速度与信号传播](#8-相速度群速度与信号传播)
9. [脉冲星色散、DM 与数值系数 4.15 ms](#9-脉冲星色散dm-与数值系数-415-ms)
10. [习题 2.2：导电介质、复折射率与吸收](#10-习题-22导电介质复折射率与吸收)
11. [习题 8.1：为什么 $I_\nu/n_r^2$ 沿光线守恒](#11-习题-81为什么-i_nun_r2-沿光线守恒)
12. [习题 8.2：波包质心为什么以群速度运动](#12-习题-82波包质心为什么以群速度运动)
13. [English assignment-ready solutions](#13-english-assignment-ready-solutions)
14. [复习清单、量纲检查与常见混淆](#14-复习清单量纲检查与常见混淆)
15. [资料与引用](#15-资料与引用)

---

## 1. 本次预习要求与逻辑主线

### 1.1 阅读与习题范围

本次课程从辐射转移转向电磁波在等离子体中的传播。课前要求分为三层：

1. 核心必读是 RL §8.1，主题为冷、各向同性等离子体中的色散。
2. RL §2.1–2.3 是电磁学背景：Maxwell 方程、平面电磁波和辐射频谱。若本科电磁学不熟，应当认真复习，而不是只浏览结论。
3. 指定教材习题是 RL 8.1 和 2.2；RL 8.2 为有时间再做的补充题。

这里的教材习题与正式 Problem Set 1 是两件事。本文只处理上述三道教材习题，不讨论正式 problem set。

### 1.2 整节内容的物理因果链

这部分不是孤立地记 plasma frequency，而是在回答：自由电子为什么会改变电磁波的传播？

完整逻辑是

$$
\boxed{
\text{Maxwell 方程}
\longrightarrow
\text{真空平面波}
\longrightarrow
\text{电场驱动自由电子}
\longrightarrow
\text{电子电流反馈到 Maxwell 方程}
}
$$

$$
\boxed{
\longrightarrow
\epsilon(\omega)
\longrightarrow
\omega^2=\omega_p^2+c^2k^2
\longrightarrow
\text{截止、群速度与脉冲延迟}
}.
$$

本节最重要的五个结论是

$$
\boxed{
\omega_p^2=\frac{4\pi n_e e^2}{m_e}
}
\qquad\text{(Gaussian-cgs)},
$$

$$
\boxed{
\epsilon(\omega)=1-\frac{\omega_p^2}{\omega^2}
},
$$

$$
\boxed{
\omega^2=\omega_p^2+c^2k^2
},
$$

$$
\boxed{
v_{\rm ph}=\frac{\omega}{k},
\qquad
v_g=\frac{d\omega}{dk}
},
$$

以及

$$
\boxed{
\Delta t\propto\frac{\mathrm{DM}}{\nu^2},
\qquad
\mathrm{DM}=\int n_e\,ds
}.
$$

---

## 2. 统一符号、单位、复指数约定与假设

### 2.1 符号表

| 符号 | 含义 | 说明 |
|---|---|---|
| $\mathbf E,\mathbf B$ | 电场与磁场 | RL 使用 Gaussian-cgs units |
| $\mathbf D,\mathbf H$ | 电位移与磁场强度 | $\mathbf D=\epsilon\mathbf E$，$\mathbf B=\mu\mathbf H$ |
| $\rho,\mathbf j$ | 电荷密度与电流密度 | 真空无源传播区取 $\rho=0,\mathbf j=0$ |
| $\mathbf k,k$ | 波矢及其大小 | $k=2\pi/\lambda$，方向为相位传播方向 |
| $\omega,\nu$ | 角频率与普通频率 | $\omega=2\pi\nu$ |
| $n_e$ | 自由电子数密度 | 不要与折射率混淆 |
| $n_r$ | 实折射率 | §8.1 中 $n_r=ck/\omega=\sqrt\epsilon$ |
| $m_e$ | 电子质量 | $9.1094\times10^{-28}\,\mathrm{g}$ |
| $m$ | 习题 2.2 的复折射率 | 不是电子质量；本文有时写成 $m=m_R+i m_I$ |
| $\omega_p$ | 电子 plasma frequency | $\omega_p^2=4\pi n_e e^2/m_e$ |
| $v_{\rm ph}$ | 相速度 | 固定相位或波峰的速度，$\omega/k$ |
| $v_g$ | 群速度 | 窄波包包络速度，$d\omega/dk$ |
| $I_\nu$ | 比强度 | 每单位面积、时间、频率、立体角的能量流 |
| $\mathrm{DM}$ | dispersion measure | 自由电子柱密度，$\int n_e ds$ |
| $\sigma$ | 习题 2.2 的电导率 | 不要与散射截面混淆 |
| $\alpha_\nu$ | 强度吸收系数 | $I_\nu(s)=I_\nu(0)e^{-\alpha_\nu s}$ |

### 2.2 单位约定

RL 正文使用 Gaussian-cgs units。因此 Maxwell 方程中会出现 $4\pi$ 和 $1/c$，而不会出现 SI 的 $\epsilon_0$ 与 $\mu_0$。

Gaussian-cgs 中

$$
\omega_p^2=\frac{4\pi n_e e^2}{m_e}.
$$

SI 中同一物理量写成

$$
\omega_p^2=\frac{n_e e^2}{m_e\epsilon_0}.
$$

两式描述同一物理现象，不能把其中的 $4\pi$ 与 $\epsilon_0$ 混合使用。

### 2.3 复指数约定

全文采用教材约定

$$
\boxed{
e^{i(\mathbf k\cdot\mathbf r-\omega t)}
}.
$$

因此

$$
\boxed{
\nabla\rightarrow i\mathbf k,
\qquad
\frac{\partial}{\partial t}\rightarrow-i\omega
}.
$$

这不是量子力学假设，而是复指数求导：

$$
\frac{\partial}{\partial t}
e^{i(\mathbf k\cdot\mathbf r-\omega t)}
=-i\omega e^{i(\mathbf k\cdot\mathbf r-\omega t)}.
$$

若改用 $e^{i(\omega t-\mathbf k\cdot\mathbf r)}$，若干虚部的符号会一起改变；只要始终使用同一约定，物理衰减率不变。

### 2.4 §8.1 的模型假设

- 等离子体由电子和维持整体电中性的离子组成。
- 离子因质量大、在该频率范围内运动慢，对高频电流的贡献忽略。
- 没有外加磁场，因此介质各向同性；Faraday rotation 属于后续 §8.2。
- “冷”表示忽略热运动和压力梯度对色散关系的修正。
- 电子非相对论，磁 Lorentz force 比电力低一阶 $v/c$，在基础推导中忽略。
- 忽略碰撞与辐射阻尼，因此理想模型没有净耗散。
- 介质局部均匀；讨论缓慢变化的介质时使用几何光学近似。

---

## 3. Maxwell 方程的物理意义与真空波动方程

### 3.1 Lorentz force 与场怎样对物质做功

带电粒子受到

$$
\boxed{
\mathbf F=q\left(\mathbf E+\frac{\mathbf v}{c}\times\mathbf B\right)
}.
$$

对速度点乘：

$$
\mathbf v\cdot\mathbf F
=q\mathbf v\cdot\mathbf E
+\frac{q}{c}\mathbf v\cdot(\mathbf v\times\mathbf B).
$$

因为

$$
\mathbf v\cdot(\mathbf v\times\mathbf B)=0,
$$

所以磁力改变粒子运动方向，却不直接改变粒子动能；场对粒子做功来自电场：

$$
\boxed{
\mathbf v\cdot\mathbf F=q\mathbf v\cdot\mathbf E
}.
$$

连续介质中，单位体积的机械能变化率是 $\mathbf j\cdot\mathbf E$。这将在判断“色散还是耗散”时起决定作用。

### 3.2 四条 Maxwell 方程的物理意义

Gaussian-cgs 中，一般介质内的 Maxwell 方程为

$$
\nabla\cdot\mathbf D=4\pi\rho,
\qquad
\nabla\cdot\mathbf B=0,
$$

$$
\nabla\times\mathbf E
=-\frac{1}{c}\frac{\partial\mathbf B}{\partial t},
$$

$$
\nabla\times\mathbf H
=\frac{4\pi}{c}\mathbf j
+\frac{1}{c}\frac{\partial\mathbf D}{\partial t}.
$$

它们分别表示：

1. 电荷是电场通量的源或汇。
2. 没有独立磁单极子，磁场线形成闭合回路。
3. 随时间变化的磁场产生有旋电场，即 Faraday induction。
4. 真实电流和随时间变化的电场都产生有旋磁场。

第四式中的 displacement-current term

$$
\frac{1}{c}\frac{\partial\mathbf D}{\partial t}
$$

使变化的电场即使在没有真实导电电流的区域也能产生磁场。它既保证电荷守恒，也使真空电磁波成为可能。

### 3.3 电荷守恒

对 Ampère-Maxwell 方程取散度，利用任意旋度的散度为零：

$$
\nabla\cdot(\nabla\times\mathbf H)=0.
$$

于是

$$
0=\frac{4\pi}{c}\nabla\cdot\mathbf j
+\frac{1}{c}\frac{\partial}{\partial t}(\nabla\cdot\mathbf D).
$$

再用 $\nabla\cdot\mathbf D=4\pi\rho$：

$$
\boxed{
\nabla\cdot\mathbf j+\frac{\partial\rho}{\partial t}=0
}.
$$

这就是局域电荷守恒。

### 3.4 Poynting theorem 与能量流

电磁场能量密度和能流为

$$
u_{\rm field}
=\frac{1}{8\pi}
\left(
\epsilon E^2+\frac{B^2}{\mu}
\right),
$$

这里的简单能量密度表达式假设 $\epsilon$、$\mu$ 不随频率变化且不随时间变化。对后面具有 $\epsilon(\omega)$ 的色散等离子体，介质储能必须与电子动能一起计算，不能机械地只把 $\epsilon(\omega)$ 代入这条静态介质公式。

$$
\boxed{
\mathbf S=\frac{c}{4\pi}\mathbf E\times\mathbf H
}.
$$

Poynting theorem 可写成

$$
\frac{\partial u_{\rm field}}{\partial t}
+\nabla\cdot\mathbf S
=-\mathbf j\cdot\mathbf E.
$$

右侧说明场能量减少的部分进入物质机械能或热能；$\mathbf S$ 则描述电磁能量经过单位面积的流率。

### 3.5 真空无源区域不等于没有场

真空传播区取

$$
\rho=0,
\qquad
\mathbf j=0,
\qquad
\epsilon=\mu=1.
$$

这只表示局部没有电荷和电流源，不表示 $\mathbf E=\mathbf B=0$。光可以由远处的天体或天线产生，再穿过局部无源区域。

Maxwell 方程简化为

$$
\nabla\cdot\mathbf E=0,
\qquad
\nabla\cdot\mathbf B=0,
$$

$$
\nabla\times\mathbf E
=-\frac{1}{c}\frac{\partial\mathbf B}{\partial t},
\qquad
\nabla\times\mathbf B
=\frac{1}{c}\frac{\partial\mathbf E}{\partial t}.
$$

散度为零只表示场没有局部源；横向波完全可以满足这一条件。

### 3.6 电场波动方程怎样得到

从 Faraday law 开始：

$$
\nabla\times\mathbf E
=-\frac{1}{c}\frac{\partial\mathbf B}{\partial t}.
$$

两边再取旋度：

$$
\nabla\times(\nabla\times\mathbf E)
=-\frac{1}{c}
\frac{\partial}{\partial t}
(\nabla\times\mathbf B).
$$

代入真空 Ampère-Maxwell law：

$$
\nabla\times(\nabla\times\mathbf E)
=-\frac{1}{c^2}
\frac{\partial^2\mathbf E}{\partial t^2}.
$$

使用矢量恒等式

$$
\nabla\times(\nabla\times\mathbf E)
=\nabla(\nabla\cdot\mathbf E)-\nabla^2\mathbf E.
$$

真空无源区域 $\nabla\cdot\mathbf E=0$，因此

$$
-\nabla^2\mathbf E
=-\frac{1}{c^2}
\frac{\partial^2\mathbf E}{\partial t^2}.
$$

最终得到

$$
\boxed{
\nabla^2\mathbf E
-\frac{1}{c^2}
\frac{\partial^2\mathbf E}{\partial t^2}=0
}.
$$

同样从 Ampère-Maxwell law 出发，可得

$$
\boxed{
\nabla^2\mathbf B
-\frac{1}{c^2}
\frac{\partial^2\mathbf B}{\partial t^2}=0
}.
$$

这两式说明变化的电场与磁场互相耦合，并以速度 $c$ 传播；能量来自最初产生波的源，并通过 Poynting flux 向外输运，不是场在传播中凭空创造能量。

---

## 4. 平面电磁波、横波结构与相速度

### 4.1 平面波与微分算符

取

$$
\mathbf E
=\hat{\mathbf e}_1 E_0
e^{i(\mathbf k\cdot\mathbf r-\omega t)},
$$

$$
\mathbf B
=\hat{\mathbf e}_2 B_0
e^{i(\mathbf k\cdot\mathbf r-\omega t)}.
$$

复指数的实部才是物理场。使用复数的好处是微分只需乘常数：

$$
\nabla\mathbf E=i\mathbf k\mathbf E,
\qquad
\frac{\partial\mathbf E}{\partial t}=-i\omega\mathbf E.
$$

求导相当于把正弦振荡的相位转动 $90^\circ$；复数中的乘法因子 $i$ 正好记录这一相位差。

### 4.2 为什么电磁波是横波

真空 Gauss laws 给出

$$
i\mathbf k\cdot\mathbf E=0,
\qquad
i\mathbf k\cdot\mathbf B=0.
$$

所以

$$
\boxed{
\mathbf k\cdot\mathbf E=0,
\qquad
\mathbf k\cdot\mathbf B=0
}.
$$

Faraday law 进一步给出

$$
\mathbf k\times\mathbf E
=\frac{\omega}{c}\mathbf B.
$$

因此 $\mathbf E$、$\mathbf B$ 与 $\mathbf k$ 两两垂直，并组成右手系：

$$
\boxed{
\mathbf E\perp\mathbf B\perp\mathbf k
}.
$$

### 4.3 真空 dispersion relation

把平面波代入波动方程：

$$
\nabla^2\mathbf E=-k^2\mathbf E,
\qquad
\frac{\partial^2\mathbf E}{\partial t^2}
=-\omega^2\mathbf E.
$$

因此

$$
-k^2\mathbf E
+\frac{\omega^2}{c^2}\mathbf E=0.
$$

非零解要求

$$
\boxed{
\omega^2=c^2k^2
},
$$

取正频率与正波数即

$$
\boxed{
\omega=ck
}.
$$

Gaussian units 中还得到

$$
\boxed{E_0=B_0}.
$$

在 SI 中则是 $E_0=cB_0$；这只是单位定义不同。

### 4.4 为什么相速度是 $\omega/k$

一维波的相位为

$$
\Phi(x,t)=kx-\omega t.
$$

跟踪一个波峰，就是保持相位不变：

$$
kx-\omega t=\mathrm{constant}.
$$

对时间求导：

$$
k\frac{dx}{dt}-\omega=0.
$$

所以固定相位的速度是

$$
\boxed{
v_{\rm ph}=\frac{dx}{dt}=\frac{\omega}{k}
}.
$$

也可由 $k=2\pi/\lambda$、$\omega=2\pi/T$ 看出

$$
\frac{\omega}{k}=\frac{\lambda}{T}=\lambda\nu.
$$

真空中 $\omega=ck$，因此

$$
\boxed{v_{\rm ph}=c}.
$$

### 4.5 时间平均能流与能量密度

对单色平面波，教材使用复振幅求时间平均：

$$
\langle\mathbf S\rangle
=\frac{c}{8\pi}
\operatorname{Re}(\mathbf E_0\times\mathbf B_0^*).
$$

真空中 $E_0=B_0$，所以

$$
\langle S\rangle
=\frac{c}{8\pi}|E_0|^2
=\frac{c}{8\pi}|B_0|^2.
$$

平均能量密度为

$$
\langle u\rangle
=\frac{1}{8\pi}|E_0|^2,
$$

因此

$$
\frac{\langle S\rangle}{\langle u\rangle}=c.
$$

真空中能量传播速度、相速度和后面定义的群速度都等于 $c$。

---

## 5. 有限脉冲、Fourier 频谱及其与量子力学的联系

### 5.1 有限脉冲必须包含多个频率

严格单频波

$$
E(t)=E_0\cos\omega_0t
$$

从 $t=-\infty$ 振荡到 $t=+\infty$。它有精确频率，却没有有限持续时间。

有限脉冲必须写成许多 Fourier modes 的叠加：

$$
\boxed{
E(t)=\int_{-\infty}^{\infty}
\widetilde E(\omega)e^{-i\omega t}\,d\omega
}.
$$

其中 $\widetilde E(\omega)$ 给出各频率成分的复振幅。

### 5.2 为什么短脉冲频谱宽

考虑只在 $-T/2<t<T/2$ 存在的单频振荡：

$$
E(t)=
\begin{cases}
e^{-i\omega_0t}, & |t|<T/2,\\
0, & |t|>T/2.
\end{cases}
$$

Fourier transform 为

$$
\widetilde E(\omega)
\propto
\int_{-T/2}^{T/2}
e^{i(\omega-\omega_0)t}\,dt
=
\frac{2\sin[(\omega-\omega_0)T/2]}
{\omega-\omega_0}.
$$

第一个零点满足

$$
|\omega-\omega_0|=\frac{2\pi}{T}.
$$

所以频谱宽度的数量级是

$$
\boxed{
\Delta\omega\sim\frac{1}{T}
},
$$

即

$$
\boxed{
\Delta\omega\,\Delta t\gtrsim1
}.
$$

物理上，两个相近频率经过时间 $T$ 积累的相位差为

$$
\Delta\Phi=\Delta\omega\,T.
$$

若 $\Delta\omega T\ll1$，有限观测时间内无法分辨二者。观测越短，频率分辨率越差；要把波局域成短脉冲，也需要更宽的频率范围相互干涉。

### 5.3 这与量子力学有什么联系

$\partial_t\rightarrow-i\omega$ 和 $\nabla\rightarrow i\mathbf k$ 首先是经典 Fourier 分析，不是量子假设。量子力学进一步使用

$$
\boxed{E=\hbar\omega},
\qquad
\boxed{\mathbf p=\hbar\mathbf k}.
$$

因此对于量子平面波

$$
\psi\propto e^{i(\mathbf k\cdot\mathbf r-\omega t)},
$$

有

$$
i\hbar\frac{\partial\psi}{\partial t}=E\psi,
\qquad
-i\hbar\nabla\psi=\mathbf p\psi.
$$

这给出量子能量和动量算符

$$
\hat E=i\hbar\partial_t,
\qquad
\hat{\mathbf p}=-i\hbar\nabla.
$$

经典 Fourier 关系

$$
\Delta x\,\Delta k\geq\frac12
$$

结合 $p=\hbar k$，变成

$$
\Delta x\,\Delta p\geq\frac{\hbar}{2}.
$$

但二者物理解释不同：经典电磁场的 $|E|^2$ 与能量密度或强度有关；量子波函数的 $|\psi|^2$ 是概率密度。RL §8.1 的等离子体推导仍是经典电磁学，只是与量子力学共享 Fourier 模式这一数学基础。

### 5.4 为什么这一节对等离子体传播必要

短的脉冲星或 FRB 脉冲天然包含一段频率范围。若介质使 $v_g$ 依赖频率，不同 Fourier 成分便在不同时间到达，原来的脉冲被拉开。色散延迟因此是“有限脉冲 + 频率依赖群速度”的直接结果。

---

## 6. 自由电子响应、电流与等效介电常数

### 6.1 电子怎样响应电场

电子电荷为 $-e$。忽略磁力、碰撞和热压后，运动方程是

$$
\boxed{
m_e\dot{\mathbf v}=-e\mathbf E
}.
$$

采用 $e^{i(\mathbf k\cdot\mathbf r-\omega t)}$，有 $\dot{\mathbf v}=-i\omega\mathbf v$，所以

$$
-i\omega m_e\mathbf v=-e\mathbf E.
$$

解得

$$
\boxed{
\mathbf v=\frac{e}{i\omega m_e}\mathbf E
=-\frac{i e}{\omega m_e}\mathbf E
}.
$$

电子电流密度为

$$
\mathbf j=-n_e e\mathbf v,
$$

因此

$$
\boxed{
\mathbf j
=\frac{i n_e e^2}{\omega m_e}\mathbf E
}.
$$

若写成 $\mathbf j=\sigma\mathbf E$，等效电导率是

$$
\boxed{
\sigma=\frac{i n_e e^2}{\omega m_e}
}.
$$

它是纯虚数，表示电流与电场相差 $90^\circ$。

### 6.2 把电子电流代回 Maxwell 方程

含电子电流的 Ampère-Maxwell equation 是

$$
\nabla\times\mathbf B
=\frac{4\pi}{c}\mathbf j
+\frac{1}{c}\frac{\partial\mathbf E}{\partial t}.
$$

对平面波：

$$
i\mathbf k\times\mathbf B
=\frac{4\pi}{c}\mathbf j
-\frac{i\omega}{c}\mathbf E.
$$

代入 $\mathbf j=\sigma\mathbf E$：

$$
i\mathbf k\times\mathbf B
=\frac{1}{c}(4\pi\sigma-i\omega)\mathbf E.
$$

希望将其写成普通介质的形式

$$
i\mathbf k\times\mathbf B
=-\frac{i\omega}{c}\epsilon(\omega)\mathbf E.
$$

比较系数：

$$
-i\omega\epsilon=4\pi\sigma-i\omega,
$$

所以

$$
\epsilon
=1-\frac{4\pi\sigma}{i\omega}.
$$

再代入 $\sigma=i n_e e^2/(\omega m_e)$：

$$
\boxed{
\epsilon(\omega)
=1-\frac{4\pi n_e e^2}{m_e\omega^2}
}.
$$

定义

$$
\boxed{
\omega_p^2\equiv\frac{4\pi n_e e^2}{m_e}
},
$$

便得到

$$
\boxed{
\epsilon(\omega)=1-\frac{\omega_p^2}{\omega^2}
}.
$$

这一步只是重新记账：原来显式写出电子电流，现在把线性电子响应吸收到频率依赖的介电常数中。

### 6.3 从 polarization 得到同一结果

令电子位移为 $\mathbf x$。运动方程

$$
m_e\ddot{\mathbf x}=-e\mathbf E
$$

对简谐运动给出

$$
-m_e\omega^2\mathbf x=-e\mathbf E,
$$

所以

$$
\mathbf x=\frac{e}{m_e\omega^2}\mathbf E.
$$

每个电子的偶极矩为

$$
\mathbf p=-e\mathbf x
=-\frac{e^2}{m_e\omega^2}\mathbf E.
$$

因此 polarization

$$
\mathbf P=n_e\mathbf p
=-\frac{n_e e^2}{m_e\omega^2}\mathbf E.
$$

Gaussian-cgs 中

$$
\mathbf D=\mathbf E+4\pi\mathbf P,
$$

于是

$$
\mathbf D
=\left(
1-\frac{4\pi n_e e^2}{m_e\omega^2}
\right)\mathbf E
=\epsilon(\omega)\mathbf E.
$$

而 polarization current

$$
\frac{\partial\mathbf P}{\partial t}
=-i\omega\mathbf P
=\frac{i n_e e^2}{m_e\omega}\mathbf E
$$

正好等于前面得到的 $\mathbf j$。两条推导完全一致。

### 6.4 负号的物理意义

电子带负电，所以诱导 polarization 与外加电场相反：

$$
\mathbf P\parallel-\mathbf E.
$$

电子响应部分屏蔽外场，使 $\epsilon<1$。又因为

$$
|\mathbf x|\propto\frac{1}{\omega^2},
$$

高频时电子来不及明显移动，$\epsilon\rightarrow1$；低频时响应更强，$\epsilon$ 明显偏离 1。

---

## 7. 冷等离子体色散关系、截止与无耗散响应

### 7.1 dispersion relation

把 Maxwell 方程写成

$$
i\mathbf k\times\mathbf E
=i\frac{\omega}{c}\mathbf B,
$$

$$
i\mathbf k\times\mathbf B
=-i\frac{\omega}{c}\epsilon\mathbf E.
$$

对第一式再取 $\mathbf k\times$，并使用横波条件 $\mathbf k\cdot\mathbf E=0$：

$$
\mathbf k\times(\mathbf k\times\mathbf E)
=-k^2\mathbf E.
$$

消去 $\mathbf B$ 后得到

$$
c^2k^2=\epsilon\omega^2.
$$

代入 $\epsilon=1-\omega_p^2/\omega^2$：

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

这条非线性的 $\omega(k)$ 关系是色散、相速度与群速度不同的根源。

### 7.2 plasma frequency 的数值

若 $n_e$ 用 $\mathrm{cm^{-3}}$，则

$$
\boxed{
\omega_p
=5.63\times10^4
\sqrt{\frac{n_e}{\mathrm{cm^{-3}}}}
\ \mathrm{s^{-1}}
}.
$$

普通频率为

$$
\boxed{
\nu_p=\frac{\omega_p}{2\pi}
=8.98\,\mathrm{kHz}
\sqrt{\frac{n_e}{\mathrm{cm^{-3}}}}
}.
$$

### 7.3 cutoff 为什么出现

由

$$
k^2=\frac{\omega^2-\omega_p^2}{c^2}
$$

可知：

- 若 $\omega>\omega_p$，则 $k$ 为实数，有传播波；
- 若 $\omega<\omega_p$，则 $k$ 为纯虚数，没有正常传播的横向电磁波。

令

$$
k=i\kappa,
\qquad
\kappa=\frac{1}{c}\sqrt{\omega_p^2-\omega^2}.
$$

空间因子变成

$$
e^{ikr}=e^{-\kappa r},
$$

即 evanescent field。理想无碰撞模型中，这通常对应反射和有限穿透深度，而不是把能量转化成热。

### 7.4 为什么有色散却没有普通电阻性耗散

把实电场写成

$$
\mathbf E(t)=\mathbf E_0\cos\omega t.
$$

电子运动给出

$$
\mathbf v(t)
=-\frac{e\mathbf E_0}{m_e\omega}\sin\omega t,
$$

所以

$$
\mathbf j(t)
=\frac{n_e e^2\mathbf E_0}{m_e\omega}\sin\omega t.
$$

$\mathbf j$ 与 $\mathbf E$ 相差 $90^\circ$。单位体积瞬时功率为

$$
\mathbf j\cdot\mathbf E
\propto\sin\omega t\cos\omega t
=\frac12\sin2\omega t.
$$

一个周期平均后

$$
\boxed{
\langle\mathbf j\cdot\mathbf E\rangle=0
}.
$$

电子在部分周期吸收场能量，在另一部分周期把动能还给场。复电导率

$$
\sigma=\frac{i n_e e^2}{\omega m_e}
$$

只有虚部，而平均 Joule power

$$
\langle P\rangle
=\frac12\operatorname{Re}(\sigma)|E_0|^2
$$

为零。因此该响应像理想电感或电容，是 reactive response：它改变相位和传播速度，却不产生净热耗散。

若加入碰撞频率 $\nu_{\rm coll}$，运动方程变为

$$
m_e(\dot{\mathbf v}+\nu_{\rm coll}\mathbf v)
=-e\mathbf E.
$$

此时 $\operatorname{Re}(\sigma)>0$，有序电子振荡会转化成随机热运动，介质才真正吸收电磁能量。

---

## 8. 相速度、群速度与信号传播

### 8.1 两个定义追踪不同对象

相速度

$$
\boxed{
v_{\rm ph}=\frac{\omega}{k}
}
$$

追踪单个波峰或固定相位面。

群速度

$$
\boxed{
v_g=\frac{d\omega}{dk}
}
$$

追踪由相近波数组成的窄波包包络。在透明、弱吸收的正常色散介质中，它也是脉冲质心、能量和调制传播的速度。

### 8.2 从两列相近波看到群速度

取

$$
E_1=\cos(k_1x-\omega_1t),
\qquad
E_2=\cos(k_2x-\omega_2t).
$$

相加并用三角恒等式：

$$
E_1+E_2
=2\cos\left(
\frac{\Delta k}{2}x
-\frac{\Delta\omega}{2}t
\right)
\cos(\bar kx-\bar\omega t).
$$

快速载波的相速度约为 $\bar\omega/\bar k$；缓慢包络的速度是

$$
\frac{\Delta\omega}{\Delta k}.
$$

当 $\Delta k\rightarrow0$：

$$
\boxed{
v_g=\frac{d\omega}{dk}
}.
$$

### 8.3 冷等离子体中的相速度

由

$$
k=\frac{\omega}{c}
\sqrt{1-\frac{\omega_p^2}{\omega^2}},
$$

折射率为

$$
\boxed{
n_r\equiv\frac{ck}{\omega}
=\sqrt{1-\frac{\omega_p^2}{\omega^2}}
}.
$$

因此

$$
\boxed{
v_{\rm ph}
=\frac{\omega}{k}
=\frac{c}{n_r}
=\frac{c}{\sqrt{1-\omega_p^2/\omega^2}}
>c
}.
$$

### 8.4 冷等离子体中的群速度

对

$$
\omega^2=\omega_p^2+c^2k^2
$$

关于 $k$ 求导：

$$
2\omega\frac{d\omega}{dk}=2c^2k.
$$

所以

$$
\boxed{
v_g
=\frac{d\omega}{dk}
=\frac{c^2k}{\omega}
=c\sqrt{1-\frac{\omega_p^2}{\omega^2}}
=cn_r<c
}.
$$

二者满足

$$
\boxed{
v_{\rm ph}v_g=c^2
}.
$$

### 8.5 为什么 $v_{\rm ph}>c$ 不违反相对论

波峰是干涉图样，不是一个带着能量和信息前进的独立物体。波传播时，一个波峰可以在包络后方消失，同时另一个在前方形成。超光速的相位图样不等于超光速传递新信息。

严格的因果速度是 wave front velocity。对本节理想无碰撞冷等离子体，能量与有限脉冲由 $v_g<c$ 传播。

当 $\omega\rightarrow\omega_p^+$ 时，$k\rightarrow0$，所以

$$
v_{\rm ph}\rightarrow\infty,
\qquad
v_g\rightarrow0.
$$

其物理意义不是能量无限快传播，而是相位空间尺度变得极大，同时波包几乎不能向前输运能量。

---

## 9. 脉冲星色散、DM 与数值系数 4.15 ms

### 9.1 高频展开

冷等离子体群速度为

$$
v_g=c\sqrt{1-\frac{\omega_p^2}{\omega^2}}.
$$

星际等离子体通常满足 $\omega\gg\omega_p$。令 $x=\omega_p^2/\omega^2\ll1$，使用

$$
(1-x)^{-1/2}\simeq1+\frac{x}{2},
$$

得到

$$
\frac{1}{v_g}
\simeq
\frac{1}{c}
\left(
1+\frac12\frac{\omega_p^2}{\omega^2}
\right).
$$

传播时间是

$$
t_p(\omega)=\int_0^d\frac{ds}{v_g}.
$$

因此

$$
t_p(\omega)
\simeq
\frac{d}{c}
+\frac{1}{2c\omega^2}
\int_0^d\omega_p^2(s)\,ds.
$$

第一项是真空传播时间，第二项是等离子体附加延迟。

### 9.2 dispersion measure

代入

$$
\omega_p^2=\frac{4\pi n_e e^2}{m_e},
\qquad
\omega=2\pi\nu,
$$

得到

$$
\Delta t_{\rm plasma}(\nu)
=\frac{e^2}{2\pi m_ec}
\frac{1}{\nu^2}
\int_0^d n_e(s)\,ds.
$$

定义

$$
\boxed{
\mathrm{DM}\equiv\int_0^d n_e(s)\,ds
},
$$

于是

$$
\boxed{
\Delta t_{\rm plasma}(\nu)
=\frac{e^2}{2\pi m_ec}
\frac{\mathrm{DM}}{\nu^2}
}.
$$

DM 是电子柱密度，不是距离。只有再采用 Galactic electron-density model，才可由 DM 估计距离。

### 9.3 两个频率的延迟

低频与高频之间的到达时间差为

$$
\Delta t
=\frac{e^2}{2\pi m_ec}
\mathrm{DM}
\left(
\frac{1}{\nu_{\rm low}^2}
-\frac{1}{\nu_{\rm high}^2}
\right).
$$

因为 $\nu_{\rm low}^{-2}>\nu_{\rm high}^{-2}$，低频成分后到。

### 9.4 为什么数值系数是 4.15

Gaussian-cgs 中

$$
e=4.8032\times10^{-10}\,\mathrm{statC},
$$

$$
m_e=9.1094\times10^{-28}\,\mathrm{g},
\qquad
c=2.9979\times10^{10}\,\mathrm{cm\,s^{-1}}.
$$

因此

$$
\frac{e^2}{2\pi m_ec}
=1.3445\times10^{-3}\,\mathrm{cm^2\,s^{-1}}.
$$

又有

$$
1\,\mathrm{pc}=3.0857\times10^{18}\,\mathrm{cm},
$$

$$
1\,\mathrm{pc\,cm^{-3}}
=3.0857\times10^{18}\,\mathrm{cm^{-2}},
$$

以及

$$
(1\,\mathrm{GHz})^{-2}=10^{-18}\,\mathrm{s^2}.
$$

所以

$$
\left(1.3445\times10^{-3}\right)
\left(3.0857\times10^{18}\right)
\left(10^{-18}\right)
=4.1488\times10^{-3}\,\mathrm{s}.
$$

即

$$
\boxed{4.1488\,\mathrm{ms}\simeq4.15\,\mathrm{ms}}.
$$

最终常用式是

$$
\boxed{
\Delta t
\simeq
4.15\,\mathrm{ms}
\left(
\frac{\mathrm{DM}}{\mathrm{pc\,cm^{-3}}}
\right)
\left[
\left(
\frac{\nu_{\rm low}}{\mathrm{GHz}}
\right)^{-2}
-
\left(
\frac{\nu_{\rm high}}{\mathrm{GHz}}
\right)^{-2}
\right]
}.
$$

$4.15$ 不是新的基本常数，而是 $e$、$m_e$、$c$ 与 pc、GHz、ms 的单位换算组合。

### 9.5 一个数量级例子

若

$$
\mathrm{DM}=30\,\mathrm{pc\,cm^{-3}},
$$

比较 $0.4\,\mathrm{GHz}$ 与 $0.8\,\mathrm{GHz}$：

$$
\Delta t
=4.15\,\mathrm{ms}\times30
\left(0.4^{-2}-0.8^{-2}\right)
\simeq0.58\,\mathrm{s}.
$$

低频延迟在射电波段可以非常明显，这使脉冲星和 FRB 成为测量电子柱密度的工具。

---

## 10. 习题 2.2：导电介质、复折射率与吸收

### 10.1 题目目标

导电介质满足

$$
\mathbf j=\sigma\mathbf E.
$$

题目要求证明

$$
\boxed{
k^2=\frac{\omega^2m^2}{c^2}
},
$$

其中教材用 $m$ 表示复折射率：

$$
\boxed{
m^2
=\mu\epsilon
\left(
1+\frac{4\pi i\sigma}{\omega\epsilon}
\right)
}.
$$

随后证明强度吸收系数

$$
\boxed{
\alpha_\nu
=\frac{2\omega}{c}\operatorname{Im}(m)
}.
$$

### 10.2 Maxwell 方程的 Fourier 形式

使用 $\mathbf D=\epsilon\mathbf E$、$\mathbf B=\mu\mathbf H$：

$$
\nabla\times\mathbf E
=-\frac{1}{c}\frac{\partial\mathbf B}{\partial t},
$$

$$
\nabla\times\mathbf H
=\frac{4\pi}{c}\mathbf j
+\frac{1}{c}\frac{\partial\mathbf D}{\partial t}.
$$

代入平面波和 $\mathbf j=\sigma\mathbf E$：

$$
\mathbf k\times\mathbf E
=\frac{\omega\mu}{c}\mathbf H,
\tag{10.1}
$$

$$
\mathbf k\times\mathbf H
=-\frac{1}{c}
(\omega\epsilon+i4\pi\sigma)
\mathbf E.
\tag{10.2}
$$

对式 (10.1) 再取 $\mathbf k\times$：

$$
\mathbf k\times(\mathbf k\times\mathbf E)
=\frac{\omega\mu}{c}
\mathbf k\times\mathbf H.
$$

横向传播支满足 $\mathbf k\cdot\mathbf E=0$，所以左侧为 $-k^2\mathbf E$。代入式 (10.2)：

$$
-k^2\mathbf E
=-\frac{\omega\mu}{c^2}
(\omega\epsilon+i4\pi\sigma)
\mathbf E.
$$

因此

$$
k^2
=\frac{\omega^2\mu\epsilon}{c^2}
\left(
1+\frac{4\pi i\sigma}{\omega\epsilon}
\right).
$$

定义

$$
m^2
=\mu\epsilon
\left(
1+\frac{4\pi i\sigma}{\omega\epsilon}
\right),
$$

便得到

$$
\boxed{k=\frac{\omega}{c}m}.
$$

### 10.3 “波的空间部分”是什么意思

完整平面波可拆成

$$
E(r,t)=E_0
\underbrace{e^{ikr}}_{\text{空间依赖}}
\underbrace{e^{-i\omega t}}_{\text{时间依赖}}.
$$

在固定时间观察不同位置，$e^{ikr}$ 决定空间振荡；在固定位置观察时间变化，$e^{-i\omega t}$ 决定时间振荡。二者合在一起才是传播波。

### 10.4 复折射率为什么产生空间衰减

令

$$
m=m_R+i m_I,
\qquad
k=\frac{\omega}{c}(m_R+i m_I).
$$

空间因子为

$$
e^{ikr}
=\exp\left[
i\frac{\omega}{c}(m_R+i m_I)r
\right].
$$

因为 $i^2=-1$：

$$
e^{ikr}
=e^{-\omega m_Ir/c}
e^{i\omega m_Rr/c}.
$$

所以

$$
\boxed{
|E(r)|=|E_0|e^{-\omega m_Ir/c}
}.
$$

$m_R$ 控制相位与波长，$m_I>0$ 控制振幅随距离衰减。按照本文的 $e^{i(kr-\omega t)}$ 约定，物理解选择 $m_I>0$，避免无源介质中的指数增长。

强度与振幅平方成正比：

$$
I_\nu(r)
=I_\nu(0)e^{-2\omega m_Ir/c}.
$$

与

$$
I_\nu(r)=I_\nu(0)e^{-\alpha_\nu r}
$$

比较，得到

$$
\boxed{
\alpha_\nu
=\frac{2\omega}{c}m_I
=\frac{2\omega}{c}\operatorname{Im}(m)
}.
$$

因子 2 来自强度是场振幅的平方。

### 10.5 物理意义与 SI 版本

导电介质若具有 $\operatorname{Re}(\sigma)>0$，则

$$
\langle\mathbf j\cdot\mathbf E\rangle>0.
$$

电磁能不可逆地转化成 Joule heat，表现为复折射率的正虚部和强度衰减。

在 SI 中，避免混入 cgs 的 $4\pi$，最安全的中间式是

$$
\boxed{
k^2=\omega^2\mu\epsilon+i\omega\mu\sigma
}.
$$

这里 $\epsilon$、$\mu$ 是 SI 的绝对介电常数和磁导率。

---

## 11. 习题 8.1：为什么 $I_\nu/n_r^2$ 沿光线守恒

### 11.1 题目与假设

题目要求在折射介质中证明

$$
\boxed{
\frac{I_\nu}{n_r^2}
=\mathrm{constant\ along\ a\ ray}
}.
$$

这里 $n_r$ 是折射率。假设界面静止、局部平坦、两侧介质各向同性，并忽略吸收、发射和反射损失。

### 11.2 穿过界面的能流守恒

对界面上一小块面积 $dA$，光束在频率区间 $d\nu$ 与立体角 $d\Omega$ 内携带的法向能流为

$$
dP
=I_\nu\cos\theta\,dA\,d\Omega\,d\nu.
$$

因此界面两侧有

$$
I_{\nu,1}\cos\theta_1\,d\Omega_1
=I_{\nu,2}\cos\theta_2\,d\Omega_2.
\tag{11.1}
$$

### 11.3 为什么 $d\phi_1=d\phi_2$

以界面法线为 $z$ 轴，光线方向写成

$$
\hat{\mathbf k}
=(\sin\theta\cos\phi,
\sin\theta\sin\phi,
\cos\theta).
$$

平面界面要求波矢平行于界面的分量守恒：

$$
\mathbf k_{1,\parallel}=\mathbf k_{2,\parallel}.
$$

即

$$
k_1\sin\theta_1
(\cos\phi_1,\sin\phi_1)
=k_2\sin\theta_2
(\cos\phi_2,\sin\phi_2).
$$

矢量大小给出 Snell’s law；方向相同则要求

$$
\boxed{\phi_2=\phi_1}.
$$

相邻两条光线之间的方位角间隔因此也不变：

$$
\boxed{d\phi_2=d\phi_1}.
$$

几何上，折射改变光线向法线靠近或远离的倾角 $\theta$，但不会使光线绕法线无缘无故旋转；入射线、折射线与法线保持在同一入射平面中。

### 11.4 立体角怎样变化

球坐标中的立体角元为

$$
d\Omega=\sin\theta\,d\theta\,d\phi.
$$

Snell’s law 是

$$
n_1\sin\theta_1=n_2\sin\theta_2.
\tag{11.2}
$$

对其微分：

$$
n_1\cos\theta_1\,d\theta_1
=n_2\cos\theta_2\,d\theta_2.
\tag{11.3}
$$

利用 $d\phi_2=d\phi_1$：

$$
\frac{d\Omega_2}{d\Omega_1}
=\frac{\sin\theta_2\,d\theta_2}
{\sin\theta_1\,d\theta_1}.
$$

分别由式 (11.2) 与 (11.3)：

$$
\frac{\sin\theta_2}{\sin\theta_1}
=\frac{n_1}{n_2},
$$

$$
\frac{d\theta_2}{d\theta_1}
=\frac{n_1\cos\theta_1}
{n_2\cos\theta_2}.
$$

因此

$$
\boxed{
\frac{d\Omega_2}{d\Omega_1}
=\frac{n_1^2}{n_2^2}
\frac{\cos\theta_1}{\cos\theta_2}
}.
$$

### 11.5 得到不变量

代回能流守恒式 (11.1)：

$$
I_{\nu,1}\cos\theta_1d\Omega_1
=I_{\nu,2}\cos\theta_2
\left(
\frac{n_1^2}{n_2^2}
\frac{\cos\theta_1}{\cos\theta_2}
d\Omega_1
\right).
$$

消去公共因子：

$$
I_{\nu,1}
=I_{\nu,2}\frac{n_1^2}{n_2^2}.
$$

所以

$$
\boxed{
\frac{I_{\nu,1}}{n_1^2}
=\frac{I_{\nu,2}}{n_2^2}
}.
$$

把连续变化的介质视为许多无限薄界面，即得 $I_\nu/n_r^2$ 沿光线守恒。

### 11.6 物理解释

折射会压缩或扩张光束在方向空间中占据的立体角。$I_\nu$ 的变化不一定表示能量被创造或消灭，而可能只是同样的能量被重新分配到不同大小的 $d\Omega$ 中。

这也是光学 étendue 守恒和折射介质中 Liouville theorem 的表现。真空中 $n_r=1$，便退化为普通的 $I_\nu$ 沿无源光线守恒。

---

## 12. 习题 8.2：波包质心为什么以群速度运动

### 12.1 题目

一维波包为

$$
\psi(r,t)
=\int_{-\infty}^{\infty}
A(k)e^{i[kr-\omega(k)t]}\,dk.
$$

定义质心

$$
\langle r(t)\rangle
=\frac{\int r|\psi(r,t)|^2dr}
{\int|\psi(r,t)|^2dr}.
$$

要求证明

$$
\boxed{
\frac{d}{dt}\langle r(t)\rangle
=
\frac{
\int (d\omega/dk)|A(k)|^2dk
}{
\int |A(k)|^2dk
}
}.
$$

### 12.2 把时间演化放进 Fourier 振幅

定义

$$
\phi(k,t)=A(k)e^{-i\omega(k)t}.
$$

则

$$
\psi(r,t)=\int\phi(k,t)e^{ikr}\,dk.
$$

由 Parseval relation：

$$
\int|\psi|^2dr
=2\pi\int|\phi|^2dk
=2\pi\int|A(k)|^2dk.
$$

因为 $\omega(k)$ 为实数，$|e^{-i\omega t}|=1$，所以分母与时间无关。

### 12.3 位置在 $k$ 空间中的作用

由

$$
r e^{ikr}
=\frac{1}{i}\frac{\partial}{\partial k}e^{ikr}
=-i\frac{\partial}{\partial k}e^{ikr},
$$

并假设 $A(k)$ 在积分边界充分迅速趋零，分部积分得到

$$
\langle r(t)\rangle
=\frac{
\int\phi^*(k,t)
i\partial_k\phi(k,t)\,dk
}{
\int|\phi(k,t)|^2dk
}.
$$

计算导数：

$$
i\partial_k\phi
=iA'(k)e^{-i\omega t}
+t\frac{d\omega}{dk}A(k)e^{-i\omega t}.
$$

因此

$$
\langle r(t)\rangle
=r_0
+t
\frac{
\int (d\omega/dk)|A(k)|^2dk
}{
\int |A(k)|^2dk
},
$$

其中 $r_0$ 是不随时间变化的初始质心。对时间求导：

$$
\boxed{
\frac{d}{dt}\langle r(t)\rangle
=\left\langle\frac{d\omega}{dk}\right\rangle
}.
$$

### 12.4 窄波包极限

若 $|A(k)|^2$ 只在 $k_0$ 附近显著，则 $d\omega/dk$ 在波包范围内近似常数：

$$
\boxed{
\frac{d\langle r\rangle}{dt}
\simeq
\left.\frac{d\omega}{dk}\right|_{k_0}
=v_g
}.
$$

所以群速度不是随意定义的；它确实是窄波包质心的传播速度。若波包很宽且 $d^2\omega/dk^2\neq0$，不同 $k$ 成分还会以不同速度传播，使波包在移动时展宽。

---

## 13. English assignment-ready solutions

### 13.1 Problem 2.2

Assume fields proportional to $\exp[i(\mathbf k\cdot\mathbf r-\omega t)]$ in a homogeneous conducting medium, with

$$
\mathbf D=\epsilon\mathbf E,
\qquad
\mathbf B=\mu\mathbf H,
\qquad
\mathbf j=\sigma\mathbf E.
$$

Faraday's and Ampère-Maxwell's equations give

$$
\mathbf k\times\mathbf E
=\frac{\omega\mu}{c}\mathbf H,
$$

and

$$
\mathbf k\times\mathbf H
=-\frac{1}{c}
(\omega\epsilon+i4\pi\sigma)\mathbf E.
$$

For the transverse electromagnetic mode, $\mathbf k\cdot\mathbf E=0$, so

$$
\mathbf k\times(\mathbf k\times\mathbf E)
=-k^2\mathbf E.
$$

Eliminating $\mathbf H$ therefore yields

$$
k^2
=\frac{\omega^2\mu\epsilon}{c^2}
\left(
1+\frac{4\pi i\sigma}{\omega\epsilon}
\right).
$$

Defining the complex refractive index $m$ by

$$
\boxed{
m^2
=\mu\epsilon
\left(
1+\frac{4\pi i\sigma}{\omega\epsilon}
\right)
},
$$

we obtain

$$
\boxed{
k^2=\frac{\omega^2m^2}{c^2}
}.
$$

Write $m=m_R+i m_I$ and choose the physical branch with $m_I>0$. The spatial factor becomes

$$
e^{ikr}
=e^{-\omega m_Ir/c}
e^{i\omega m_Rr/c}.
$$

Thus the field amplitude decreases as $e^{-\omega m_Ir/c}$, whereas the intensity decreases as

$$
I_\nu(r)
=I_\nu(0)e^{-2\omega m_Ir/c}.
$$

Comparison with $I_\nu(r)=I_\nu(0)e^{-\alpha_\nu r}$ gives

$$
\boxed{
\alpha_\nu
=\frac{2\omega}{c}\operatorname{Im}(m)
}.
$$

The factor of two appears because intensity is proportional to the squared field amplitude. With the opposite Fourier convention, the sign assigned to $\operatorname{Im}(m)$ changes, but the physical attenuation remains positive.

### 13.2 Problem 8.1

Consider a narrow ray bundle crossing a plane interface between two stationary, isotropic, lossless media. Conservation of the monochromatic power normal to the interface requires

$$
I_{\nu,1}\cos\theta_1\,d\Omega_1
=I_{\nu,2}\cos\theta_2\,d\Omega_2.
\tag{1}
$$

Snell's law is

$$
n_1\sin\theta_1=n_2\sin\theta_2.
\tag{2}
$$

Differentiating gives

$$
n_1\cos\theta_1\,d\theta_1
=n_2\cos\theta_2\,d\theta_2.
\tag{3}
$$

The tangential wave-vector direction is unchanged at an isotropic plane interface, so the incident and refracted rays remain in the same plane of incidence and $d\phi_2=d\phi_1$. Since

$$
d\Omega=\sin\theta\,d\theta\,d\phi,
$$

Eqs. (2) and (3) imply

$$
\frac{d\Omega_2}{d\Omega_1}
=\frac{n_1^2}{n_2^2}
\frac{\cos\theta_1}{\cos\theta_2}.
$$

Substitution into Eq. (1) gives

$$
I_{\nu,1}
=I_{\nu,2}\frac{n_1^2}{n_2^2},
$$

and hence

$$
\boxed{
\frac{I_{\nu,1}}{n_1^2}
=\frac{I_{\nu,2}}{n_2^2}
}.
$$

Treating a smoothly varying medium as a sequence of infinitesimal interfaces shows that $I_\nu/n_r^2$ is constant along a ray, provided there is no emission, absorption, or reflective loss.

### 13.3 Problem 8.2

Define

$$
\phi(k,t)=A(k)e^{-i\omega(k)t},
$$

so that

$$
\psi(r,t)=\int_{-\infty}^{\infty}\phi(k,t)e^{ikr}\,dk.
$$

Parseval's theorem gives

$$
\int|\psi|^2dr
=2\pi\int|A(k)|^2dk,
$$

which is independent of time because $\omega(k)$ is real. Using the Fourier-space representation of position and assuming that $A(k)$ vanishes sufficiently rapidly at the integration boundaries,

$$
\langle r(t)\rangle
=\frac{
\int\phi^* i\partial_k\phi\,dk
}{
\int|\phi|^2dk
}.
$$

Since

$$
i\partial_k\phi
=iA'(k)e^{-i\omega t}
+t\frac{d\omega}{dk}A(k)e^{-i\omega t},
$$

the centroid is

$$
\langle r(t)\rangle
=r_0
+t
\frac{
\int(d\omega/dk)|A(k)|^2dk
}{
\int|A(k)|^2dk
}.
$$

Therefore

$$
\boxed{
\frac{d}{dt}\langle r(t)\rangle
=
\frac{
\int(d\omega/dk)|A(k)|^2dk
}{
\int|A(k)|^2dk
}
}.
$$

For a narrow packet centered on $k_0$, this weighted average becomes

$$
\boxed{
\frac{d\langle r\rangle}{dt}
\simeq
\left.\frac{d\omega}{dk}\right|_{k_0}
=v_g
}.
$$

Thus the group velocity is the propagation velocity of the centroid of a narrow wave packet.

---

## 14. 复习清单、量纲检查与常见混淆

### 14.1 应该能独立推导

- 从真空 Maxwell 方程推出 $\mathbf E$ 与 $\mathbf B$ 的波动方程。
- 把平面波代入波动方程，得到 $\omega=ck$ 与 $v_{\rm ph}=c$。
- 从 $m_e\dot{\mathbf v}=-e\mathbf E$ 得到 $\mathbf j=i n_e e^2\mathbf E/(\omega m_e)$。
- 把电子电流并入 Ampère-Maxwell equation，得到 $\epsilon=1-\omega_p^2/\omega^2$。
- 从 Maxwell 方程得到 $\omega^2=\omega_p^2+c^2k^2$。
- 从 dispersion relation 推出 $v_{\rm ph}$、$v_g$ 与 $v_{\rm ph}v_g=c^2$。
- 从 $v_g$ 的高频展开得到 $\Delta t\propto\mathrm{DM}\,\nu^{-2}$。
- 完成习题 2.2 中复折射率到吸收系数的推导。
- 用 Snell’s law 和能流守恒证明 $I_\nu/n_r^2$ 沿光线守恒。
- 用 Fourier-space position operator 证明波包质心速度是 $d\omega/dk$ 的谱加权平均。

### 14.2 可以直接记住的核心结论

$$
\omega_p^2=\frac{4\pi n_e e^2}{m_e},
\qquad
\epsilon=1-\frac{\omega_p^2}{\omega^2},
$$

$$
\omega^2=\omega_p^2+c^2k^2,
$$

$$
v_{\rm ph}=\frac{c}{\sqrt{1-\omega_p^2/\omega^2}},
\qquad
v_g=c\sqrt{1-\frac{\omega_p^2}{\omega^2}},
$$

$$
\mathrm{DM}=\int n_e\,ds,
\qquad
\Delta t\propto\mathrm{DM}\,\nu^{-2},
$$

$$
\frac{I_\nu}{n_r^2}=\mathrm{constant\ along\ a\ ray}.
$$

### 14.3 量纲检查

Gaussian-cgs 中 $e^2$ 的量纲是 $\mathrm{erg\,cm}=\mathrm{g\,cm^3\,s^{-2}}$，所以

$$
\left[
\frac{n_e e^2}{m_e}
\right]
=\mathrm{s^{-2}},
$$

与 $\omega_p^2$ 一致。

DM 的单位是

$$
[n_e ds]=\mathrm{cm^{-3}}\times\mathrm{pc},
$$

本质是柱密度。把 pc 转成 cm 后为 $\mathrm{cm^{-2}}$。

吸收系数

$$
\alpha_\nu=\frac{2\omega}{c}\operatorname{Im}(m)
$$

的量纲是

$$
[\omega/c]=\mathrm{cm^{-1}},
$$

符合 $I_\nu=I_{\nu,0}e^{-\alpha_\nu r}$ 的要求。

### 14.4 最容易混淆的地方

1. $\rho=\mathbf j=0$ 只表示局部无源，不表示电磁场为零。
2. $\partial_t\rightarrow-i\omega$ 来自所选复指数约定，不是量子力学专属规则。
3. $\Delta\omega\Delta t\gtrsim1$ 首先是经典 Fourier 性质；量子力学通过 $E=\hbar\omega$ 与 $p=\hbar k$ 赋予能量和动量解释。
4. 色散是传播速度依赖频率；耗散是电磁能不可逆地转化成热或内部能量。
5. $\omega<\omega_p$ 时的 evanescence 在无碰撞模型中不等于吸收。
6. $v_{\rm ph}>c$ 不代表能量或信息超光速；有限脉冲由 $v_g<c$ 传播。
7. $m$ 在习题 2.2 中是复折射率，$m_e$ 才是电子质量。
8. 复波数的实部控制相位，虚部控制空间衰减；强度指数是振幅指数的两倍。
9. $n_e$ 是电子数密度，$n_r$ 是折射率，不能混用。
10. $I_\nu$ 在普通真空光线中守恒；折射介质中正确的不变量是 $I_\nu/n_r^2$。
11. 平面各向同性界面只改变极角 $\theta$，不改变绕法线的方位角 $\phi$，所以 $d\phi_1=d\phi_2$。
12. DM 是电子柱密度，不是直接测得的几何距离；散射或有限带宽也可能影响实际到达时间拟合。

### 14.5 极限检验

- $n_e\rightarrow0$：$\omega_p\rightarrow0$，恢复真空 $\epsilon=1$、$\omega=ck$、$v_{\rm ph}=v_g=c$。
- $\omega\rightarrow\infty$：电子来不及响应，$\epsilon\rightarrow1$，等离子体影响消失。
- $\omega\rightarrow\omega_p^+$：$k\rightarrow0$、$v_g\rightarrow0$、$v_{\rm ph}\rightarrow\infty$。
- $\omega<\omega_p$：$k$ 为虚数，只剩指数衰减场。
- $\operatorname{Im}(m)\rightarrow0$：习题 2.2 的 $\alpha_\nu\rightarrow0$，介质不吸收。
- $n_1=n_2$：习题 8.1 给出 $I_{\nu,1}=I_{\nu,2}$，恢复无折射界面的结果。
- 窄波包 $A(k)\rightarrow\delta(k-k_0)$：习题 8.2 的质心速度趋于 $d\omega/dk|_{k_0}$。

---

## 15. 资料与引用

1. Rybicki, G. B., & Lightman, A. P., *Radiative Processes in Astrophysics*, §2.1–2.3、§8.1，以及 Problems 2.2、8.1、8.2。
2. AST1440 course page: <https://www.astro.utoronto.ca/~mhvk/AST1440/>
3. AstroBaki, *Electromagnetic Plane Waves*: <https://casper.astro.berkeley.edu/astrobaki/index.php/Electromagnetic_Plane_Waves>
4. AstroBaki, *Plasma Frequency*: <https://casper.astro.berkeley.edu/astrobaki/index.php/Plasma_Frequency>

本文中的 $4.15\,\mathrm{ms}$ 采用现代物理常数计算；实际脉冲星计时工作中也常使用历史约定的 dispersion constant，以保持不同时期 DM 数值的可比性。
