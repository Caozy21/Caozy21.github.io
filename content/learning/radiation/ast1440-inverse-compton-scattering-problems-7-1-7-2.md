---
title: "AST1440 逆康普顿散射：RL §7.1–§7.4 及习题 7.1、7.2 预习"
description: "从普通 Compton 反冲与 Lorentz 变换出发，推导逆康普顿能量增益、冷却功率、随机游走、热康普顿化与 y 参数，并整理习题 7.1、7.2 的建模思路。"
date: "2026-11-12"
tags: ["AST1440","Inverse Compton scattering","Comptonization","Radiative cooling","Random walk","Exercises"]
order: 18
draft: false
---

# AST1440 逆康普顿散射：RL §7.1–§7.4 及习题 7.1、7.2 预习

> 课程：AST1440 — Radiation。  
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§7.1、§7.2、§7.4（重点为 §7.1、§7.4，略读 §7.3）；Problems 7.1、7.2。  
> 整理日期：2026 年 11 月 12 日。  
> 本笔记整理本次对话中反复追问的物理图像、公式推导与适用条件。

## 目录

1. [本次预习的逻辑主线与核心结论](#1-本次预习的逻辑主线与核心结论)
2. [普通 Compton 散射与电子反冲](#2-普通-compton-散射与电子反冲)
3. [逆康普顿散射的 Thomson 极限](#3-逆康普顿散射的-thomson-极限)
4. [单次散射的最大增益与角平均：$4\gamma^2$ 与 $\frac43\gamma^2$](#4-单次散射的最大增益与角平均4gamma2-与-frac43gamma2)
5. [逆康普顿冷却功率的推导](#5-逆康普顿冷却功率的推导)
6. [随机游走与散射次数：$\tau$ 与 $\tau^2$](#6-随机游走与散射次数tau-与-tau2)
7. [热康普顿化、$y$ 参数与 $e^y$](#7-热康普顿化y-参数与-ey)
8. [热轫致辐射（Bremsstrahlung）复习](#8-热轫致辐射bremsstrahlung复习)
9. [流体静力学平衡（Hydrostatic equilibrium）](#9-流体静力学平衡hydrostatic-equilibrium)
10. [习题 7.1、7.2 的预习思路](#10-习题-7172-的预习思路)
11. [常见混淆](#11-常见混淆)
12. [复习清单](#12-复习清单)

---


## 1. 本次预习的逻辑主线与核心结论

**主线：单次 Compton 反冲 → Lorentz boost 与逆康普顿 → 角平均与功率 → 多次散射的 random walk → Compton $y$ 与饱和 → bremsstrahlung X-rays 和静水平衡模型。**

- **普通 Compton 散射**：电子（初始静止）从光子获得反冲能量，光子损失能量。
- **Inverse Compton（IC，逆康普顿）**：运动电子向光子转移动能；在实验室系中，低能光子可能被提升到 X-ray/γ-ray。
- **Thomson 极限**：在**电子瞬时静止系**，入射光子能量满足 $\epsilon'\ll m_ec^2=511\,\mathrm{keV}$，反冲能量相对较小。
- **单次散射最大增益（特定几何、$\gamma\gg1$）**：$\epsilon_1\lesssim 4\gamma^2\epsilon$。
- **各向同性软光子场的平均散射后能量**：$\langle\epsilon_1\rangle=\gamma^2\epsilon(1+\beta^2/3)\simeq\frac43\gamma^2\epsilon$（后一个近似要求 $\beta\simeq1$）。
- **电子 IC 能量损失功率**：$P_{\rm IC}=\frac43\sigma_Tc\gamma^2\beta^2U_{\rm rad}$。
- **热 Comptonization**：$y\sim\frac{4kT_e}{m_ec^2}\max(\tau,\tau^2)$（非相对论热电子、软光子、简单几何的数量级估算）。

---


## 2. 普通 Compton 散射与电子反冲

### 2.1 精确 Compton 公式

对初始静止的电子，入射光子能量 $\epsilon=h\nu$，散射后能量 $\epsilon_1$，光子偏转角 $\theta$：

$$
\boxed{\epsilon_1=\frac{\epsilon}{1+\frac{\epsilon}{m_ec^2}(1-\cos\theta)}}.
$$

也可以写为波长增量：

$$
\boxed{\Delta\lambda=\frac{h}{m_ec}(1-\cos\theta)}.
$$

前向散射 $\theta=0$ 时光子不损失能量；反向散射 $\theta=\pi$ 时能量损失最大。

### 2.2 用四动量不变量推导 Compton 公式

定义四动量 $p^\mu=(E/c,\mathbf p)$。这里采用 **$(+---)$** 度规约定：

$$
a\cdot b=a^0b^0-\mathbf a\cdot\mathbf b,
\qquad p^\mu p_\mu=m^2c^2.
$$

因此对电子 $p^2=m_e^2c^2$，对光子 $k^2=0$。为简洁，下面暂取 $c=1$。

电子四动量散射前后为 $p,p_1$，光子为 $k,k_1$。四动量守恒：

$$
p+k=p_1+k_1.
$$

移项平方：

$$
p_1^2=(p+k-k_1)^2
=p^2+2p\cdot(k-k_1)-2k\cdot k_1.
$$

利用 $p_1^2=p^2=m_e^2$：

$$
p\cdot(k-k_1)=k\cdot k_1.
$$

电子初始静止，故 $p=(m_e,\mathbf0)$；两个光子方向夹角为 $\theta$，故

$$
m_e(\epsilon-\epsilon_1)=\epsilon\epsilon_1(1-\cos\theta).
$$

整理并恢复 $c$ 即得到第 2.1 节的 Compton 公式。

**四动量守恒是什么？** 不是额外的定律，而是把能量守恒与三维动量守恒写成一个四维矢量方程。  
**Minkowski 内积是什么？** 它是相对论时空的内积，不同于欧氏内积：时间分量相乘，再减去空间三维内积。它保持 Lorentz 变换下不变。

### 2.3 低能近似：动量三角形与余弦定理

令 $\mathbf p_i,\mathbf p_f$ 表示光子**三维动量**，$\mathbf q$ 表示电子反冲动量。三维动量守恒给出

$$
\mathbf q=\mathbf p_i-\mathbf p_f.
$$

余弦定理：

$$
q^2=p_i^2+p_f^2-2p_ip_f\cos\theta.
$$

如果 $\epsilon\ll m_ec^2$，光子的相对能量变化很小，故 $p_i\simeq p_f\simeq\epsilon/c$：

$$
\boxed{q^2\simeq2\frac{\epsilon^2}{c^2}(1-\cos\theta)}.
$$

低速反冲电子获得 $\Delta E_e\simeq q^2/(2m_e)$，于是光子损失能量

$$
\epsilon-\epsilon_1\simeq\frac{\epsilon^2}{m_ec^2}(1-\cos\theta).
$$

这恰好是精确 Compton 公式在 $\epsilon/(m_ec^2)\ll1$ 时的一阶展开。**物理图像：光子方向改变 $\to$ 电子必须获得反冲动量 $\to$ 电子获得动能 $\to$ 光子失去能量。**

---


## 3. 逆康普顿散射的 Thomson 极限

设电子实验室系速度为 $\beta c$、Lorentz factor 为 $\gamma=(1-\beta^2)^{-1/2}$；入射光子与电子运动方向的夹角为 $\theta_i$。

第一次 Lorentz 变换（到电子静止系）：

$$
\boxed{\epsilon'=\gamma\epsilon(1-\beta\cos\theta_i)}.
$$

迎面入射时 $\cos\theta_i=-1$，如果 $\gamma\gg1$，则 $\epsilon'\simeq2\gamma\epsilon$。

**只有当 $\epsilon'\ll m_ec^2$ 时才属于 Thomson regime。** 换言之，电子静止**并不自动**意味着 Thomson 散射；如果入射光子在电子系里太高能，反冲不可忽略，应考虑 Compton / Klein–Nishina 效应。

在 Thomson 极限中，电子静止系里光子散射前后能量近似不变：

$$
\epsilon_1'\simeq\epsilon'.
$$

如果散射后光子在电子系中沿电子原运动方向出射，变换回实验室系：

$$
\epsilon_1=\gamma\epsilon_1'(1+\beta)\simeq2\gamma\epsilon_1'.
$$

因此最大增益的典型极限：

$$
\boxed{\epsilon_1\simeq4\gamma^2\epsilon\qquad(\gamma\gg1,\ \text{迎头入射、合适的出射方向})}.
$$

**“Thomson”指电子系的低能散射极限；“inverse Compton”指实验室系中光子从电子动能获得净能量。两者可以同时成立。**

---


## 4. 单次散射的最大增益与角平均：$4\gamma^2$ 与 $\frac43\gamma^2$

考虑在**实验室系各向同性**的单能软光子场。设入射夹角余弦 $\mu=\cos\theta_i$，散射后光子在电子系中与电子原运动方向的夹角余弦为 $\mu_1'$。Thomson 极限下：

$$
\epsilon_1=\gamma^2\epsilon(1-\beta\mu)(1+\beta\mu_1').
$$

Thomson 的散射角分布关于入射方向前后对称，因而对固定入射方向，$\langle\mu_1'\rangle=0$。不过，**实际发生碰撞的入射方向并不等概率**：迎面光子与电子的相对通量更高，碰撞权重 $\propto 1-\beta\mu$。

因此对散射事件平均：

$$
\begin{aligned}
\langle\epsilon_1\rangle
&=\gamma^2\epsilon\frac{\int_{-1}^1(1-\beta\mu)^2\,d\mu}{\int_{-1}^1(1-\beta\mu)\,d\mu}\\
&=\gamma^2\epsilon\left(1+\frac{\beta^2}{3}\right).
\end{aligned}
$$

这里的 $1/3$ 来自各向同性角度积分：

$$
\langle\mu\rangle=0,\qquad \langle\mu^2\rangle=\frac12\int_{-1}^1\mu^2\,d\mu=\frac13.
$$

对于 $\beta\simeq1$：

$$
\boxed{\langle\epsilon_1\rangle\simeq\frac43\gamma^2\epsilon}.
$$

**注意：$4\gamma^2$ 是特别有利几何下的上限量级，$\frac43\gamma^2$ 是对实际散射事件的角平均，不能简单理解为“最大值除以 3”。**

---


## 5. 逆康普顿冷却功率的推导

核心结构：

$$
\boxed{P_{\rm IC}=(\text{每秒散射光子数})\times(\text{每次光子净增能量})}.
$$

各向同性光子场中，总散射率（Thomson regime）为

$$
\Gamma=n_\gamma\sigma_Tc,
$$

其中 $\sigma_T=6.65\times10^{-25}\,\mathrm{cm^2}$。因为 $\langle1-\beta\mu\rangle=1$，方向平均后速率如上。

上一节已经得到 $\langle\epsilon_1\rangle=\gamma^2\epsilon(1+\beta^2/3)$；利用 $\gamma^2-1=\gamma^2\beta^2$：

$$
\begin{aligned}
\langle\Delta\epsilon\rangle
&=\langle\epsilon_1\rangle-\epsilon\\
&=\epsilon\left[\gamma^2\left(1+\frac{\beta^2}{3}\right)-1\right]\\
&=\boxed{\frac43\gamma^2\beta^2\epsilon}.
\end{aligned}
$$

乘以散射率，并代入 $U_{\rm rad}=n_\gamma\epsilon$：

$$
\boxed{P_{\rm IC}=\frac43\sigma_Tc\gamma^2\beta^2U_{\rm rad}}.
$$

这是**电子因 IC 损失动能的功率**，不能用 $\Gamma\langle\epsilon_1\rangle$ 代替，因为后者包含光子散射前已经有的能量。

如果电子超相对论性，$\beta\simeq1$，则 $P_{\rm IC}\propto\gamma^2$；冷却时间约为

$$
t_{\rm IC}\simeq\frac{\gamma m_ec^2}{P_{\rm IC}}=\frac{3m_ec}{4\sigma_T\gamma U_{\rm rad}}.
$$

与 pitch angle 各向同性平均后的 synchrotron 功率比较：

$$
P_{\rm syn}=\frac43\sigma_Tc\gamma^2\beta^2U_B,
\qquad U_B=\frac{B^2}{8\pi}\quad(\mathrm{CGS}),
$$

故

$$
\boxed{\frac{P_{\rm IC}}{P_{\rm syn}}=\frac{U_{\rm rad}}{U_B}}.
$$

---


## 6. 随机游走与散射次数：$\tau$ 与 $\tau^2$

定义平均自由程和散射光学深度：

$$
\ell=\frac1{n_e\sigma_T},\qquad \tau=n_e\sigma_TR=\frac R\ell.
$$

### 6.1 光学薄极限（$\tau\ll1$）

平均自由程 $\ell\gg R$，大部分光子不散射。直线路径上零次散射概率 $P_0=e^{-\tau}$，故至少一次散射概率 $\simeq\tau$；整个光子样本的平均散射次数为

$$
\boxed{\langle N_{\rm sc}\rangle\sim\tau\quad(\tau\ll1)}.
$$

不要把 $N=0.01$ 理解为某个光子“散射了 0.01 次”：它表示绝大多数散射 0 次，极少数散射 1 次。

### 6.2 光学厚极限（$\tau\gg1$）

光子散射后不断随机改变方向。设第 $i$ 步位移为 $\Delta\mathbf r_i$，每步量级 $\ell$，且方向不相关，则

$$
\begin{aligned}
\mathbf R&=\sum_{i=1}^N\Delta\mathbf r_i,\\
\langle R^2\rangle&=\sum_i\langle|\Delta\mathbf r_i|^2\rangle
+2\sum_{i<j}\langle\Delta\mathbf r_i\cdot\Delta\mathbf r_j\rangle\\
&\sim N\ell^2.
\end{aligned}
$$

因为交叉项的平均为零，所以

$$
\boxed{R_{\rm rms}\sim\sqrt N\,\ell}.
$$

要随机走到距离为 $R$ 的边界，所需步数

$$
\boxed{N_{\rm sc}\sim(R/\ell)^2=\tau^2\quad(\tau\gg1)}.
$$

**光学薄：单次散射概率 $\propto\tau$。光学厚：随机游走的净位移 $\propto\sqrt N$，故逃逸散射次数 $\propto\tau^2$。** 比例常数取决于几何、出发位置等。

---


## 7. 热康普顿化、$y$ 参数与 $e^y$

对非相对论热电子（$kT_e\ll m_ec^2$），低占据数光子场、Thomson regime，单次散射平均相对能量变化为

$$
\boxed{\frac{\langle\Delta\epsilon\rangle}{\epsilon}\simeq\frac{4kT_e-\epsilon}{m_ec^2}}.
$$

- $4kT_e$：电子热运动让软光子平均获得能量。
- $-\epsilon$：光子反冲导致能量损失。
- 若 $\epsilon\ll kT_e$，则单次平均**相对**增益近似为常数 $a=4kT_e/(m_ec^2)\ll1$。

### 7.1 光子能量的指数增长

每次散射光子能量增加近似固定比例：

$$
\epsilon_{n+1}\simeq\epsilon_n(1+a)
\ \Rightarrow\ 
\epsilon_N\simeq\epsilon_i(1+a)^N.
$$

取对数并用 $\ln(1+a)\simeq a$：

$$
\ln\frac{\epsilon_N}{\epsilon_i}\simeq Na
\ \Rightarrow\ 
\boxed{\epsilon_N\simeq\epsilon_i e^{Na}}.
$$

### 7.2 光学深度 $\tau$ 与散射次数

$\tau$ 决定平均散射次数：$N_{\rm sc}\sim\max(\tau,\tau^2)$。定义

$$
\boxed{y\sim \frac{4kT_e}{m_ec^2}\max(\tau,\tau^2)}.
$$

因此典型多次散射的估算为

$$
\boxed{\epsilon_f\sim\epsilon_i e^y}.
$$

**重要限制：**

1. 这是从“每次平均增加固定比例”的**启发式估算**，不是对所有光子的精确平均谱公式。尤其 $\tau\ll1$ 时，多数光子不散射，不应该把非整数的平均散射次数当成每个光子的真实经历。
2. 随着光子能量增长至 $\epsilon\sim kT_e$ 量级，反冲项不能忽略，指数增能趋于饱和；$4kT_e$ 是上述单次平均能量漂移为零的位置，不意味着最终稳态光谱所有光子能量都等于 $4kT_e$。
3. 若电子/光子进入相对论或 Klein–Nishina 区域，需要更一般的处理。

概念上：$y\ll1$ 光谱变化弱；$y\gtrsim1$ Comptonization 明显；$y\gg1$ 可能走向饱和（还取决于系统条件）。

---


## 8. 热轫致辐射（Bremsstrahlung）复习

自由电子经过离子时受到 Coulomb 力而**加速（包括速度方向改变）**，因而发出辐射；并非必须沿速度方向减速。又称 *free–free emission*。

对光学薄、非相对论的热等离子体：

$$
j_\nu^{\rm ff}\propto Z^2n_en_iT^{-1/2}e^{-h\nu/kT}g_{\rm ff}(\nu,T),
$$

其中 $g_{\rm ff}$ 是 Gaunt factor。高频端 $h\nu\gtrsim kT$ 有指数截断，可用于估计气体温度。频率积分的单位体积总辐射功率约为

$$
\boxed{\varepsilon_{\rm ff}\propto Z^2n_en_iT^{1/2}}.
$$

对于完全电离的纯氢气体，$n_i=n_e$：$\varepsilon_{\rm ff}\propto n_e^2T^{1/2}$。

对比：**bremsstrahlung 是光子的产生机制；inverse Compton 是已有光子与电子散射并交换能量的机制。**

---


## 9. 流体静力学平衡（Hydrostatic equilibrium）

气体中向外的压力梯度力与向内引力平衡，没有净的宏观加速度：

$$
-\nabla P+\rho\mathbf g=0.
$$

球对称情形（$M(r)$ 为半径 $r$ 内的引力质量）：

$$
\boxed{\frac{dP}{dr}=-\frac{GM(r)\rho}{r^2}}.
$$

理想气体状态方程 $P=\rho kT/(\mu m_p)$。若中心质量 $M$ 主导引力，气体特征尺度 $R$，数量级估算 $dP/dr\sim-P/R$，可得

$$
\frac PR\sim\frac{GM\rho}{R^2}
\quad\Rightarrow\quad
\boxed{kT\sim\frac{GM\mu m_p}{R}}.
$$

这接近 virial temperature 的数量级关系，**不是精确等式**，系数依赖气体结构及边界条件。

---


## 10. 习题 7.1、7.2 的预习思路

> 以下是本次对话里讨论过的题意及建模主线。正式交作业应以教材题干及其给定参数为准。

### 10.1 习题 7.1：多次 Compton 散射

关注热电子云中软光子的多次散射、逃逸时能量、什么时候达到饱和，以及一个描述谱改变程度的无量纲量：

$$
\tau\gg1\Rightarrow N\sim\tau^2,
\qquad y\sim\frac{4kT_e}{m_ec^2}\tau^2.
$$

未饱和的典型增能 $\epsilon_f\sim\epsilon_i e^y$。估算达到 $\epsilon_f\sim kT_e$ 时的临界光学深度：

$$
\tau_{\rm crit}\sim
\left[\frac{m_ec^2}{4kT_e}\ln\left(\frac{kT_e}{\epsilon_i}\right)\right]^{1/2},
$$

属于数量级、未饱和公式的外推；靠近饱和时需谨慎。

### 10.2 习题 7.2：热 X 射线源中的轫致辐射与逆康普顿散射

本次讨论的建模关系是：

$$
\underbrace{kT\sim GM\mu m_p/R}_{\text{静水平衡估算}},
\qquad
\underbrace{L_{\rm ff}\propto n_e^2T^{1/2}R^3}_{\text{自由-自由辐射}},
$$

$$
\underbrace{\tau_{\rm es}\sim n_e\sigma_TR}_{\text{散射深度}}
\quad\Rightarrow\quad
\underbrace{y\sim\frac{4kT}{m_ec^2}\max(\tau_{\rm es},\tau_{\rm es}^2)}_{\text{是否显著 Comptonization}}.
$$

在**给定 $L_{\rm ff}$ 和 $T$，且点质量引力和均匀云数量级近似适用**时，$R\propto M$，$n_e\propto R^{-3/2}$，所以 $\tau_{\rm es}\propto R^{-1/2}\propto M^{-1/2}$。因此质量越大的中心天体对应的散射深度越低，更容易保持原有 bremsstrahlung spectrum。定量约束通常来自要求 $y\ll1$。

---


## 11. 常见混淆

1. **Thomson 不是“电子静止”的同义词**：关键是电子系光子能量 $\epsilon'\ll m_ec^2$。
2. **$4\gamma^2$ 与 $\frac43\gamma^2$ 不是同一量**：前者是特殊角度下最大增益量级，后者是各向同性场的碰撞事件平均。
3. **IC power 乘的是光子*净增*能量**，不是散射后光子全部能量。
4. **$\tau$ 是直线光学深度**；$\tau^2$ 来自光学厚时随机游走的逃逸散射次数。
5. **$e^y$ 是未饱和、软光子多次散射的近似**，并非对光学薄光子群的精确整体平均公式。
6. **Hydrostatic equilibrium 约束气体结构；bremsstrahlung 产生光子；IC 改变光子能谱**。

---


## 12. 复习清单

1. 为什么 $\mathbf q=\mathbf p_i-\mathbf p_f$ 通过余弦定理给出 $q^2\simeq2(\epsilon/c)^2(1-\cos\theta)$？
2. 四动量守恒与普通能量、三维动量守恒有何关系？为什么 $k^2=0$？
3. 为什么判断 Thomson/KN 需要先变换到电子静止系？
4. $\langle\cos^2\theta\rangle=1/3$ 和入射碰撞权重分别怎样进入 $\frac43$？
5. 为什么 $P_{\rm IC}$ 必须在 $\beta\to0$ 时消失（在 Thomson 近似下）？
6. 为什么 $\tau\ll1$ 时 $N\sim\tau$，而 $\tau\gg1$ 时 $N\sim\tau^2$？
7. 怎样由 $\epsilon_{n+1}=\epsilon_n(1+a)$ 得到 $\epsilon_f\sim\epsilon_i e^y$？何时失效？

