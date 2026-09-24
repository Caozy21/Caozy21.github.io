---
title: "AST1440 散射、随机游走与辐射扩散：RL §1.7–1.8 及习题 1.10 详解"
description: "纯散射与吸收散射源函数、平均自由程与随机游走、热化长度与有效光学深度、Rosseland 扩散、Eddington 与两流近似，以及习题 1.10 的完整解答。"
date: "2026-09-24"
tags: ["AST1440","Scattering","Random walk","Radiative diffusion","Exercises"]
order: 5
draft: false
---

# AST1440 散射、随机游走与辐射扩散：RL §1.7–1.8 及习题 1.10 详解

> 课程：AST1440 — Radiation；本次主题为 Scattering, Random Walks, and Radiative Diffusion。  
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§1.7–1.8，印刷页 33–45；习题 1.10，印刷页 49–50。  
> 整理日期：2026 年 9 月 24 日。  
> 本文按物理依赖关系整合教材与讨论中的全部追问：概率为什么等于微分光学深度、平均自由程为什么是消光系数的倒数、微观截面与宏观散射系数有什么区别、什么叫热化、为什么只有表面一个热化长度内的热发射主导直接出射、散射线为何能在等温介质中形成吸收特征、Rosseland 扩散具体描述什么、Eddington 角矩和两流近似如何得到，以及习题 1.10 的完整解。中文部分重在物理图像与逐步推导，随后给出可直接用于作业的英文版本。

## 目录

1. [本节的核心问题与结论](#1-本节的核心问题与结论)
2. [统一符号、量纲与假设](#2-统一符号量纲与假设)
3. [纯散射与吸收加散射的源函数](#3-纯散射与吸收加散射的源函数)
4. [从截面到光学深度、概率和平均自由程](#4-从截面到光学深度概率和平均自由程)
5. [随机游走、热化长度与有效光学深度](#5-随机游走热化长度与有效光学深度)
6. [有效发射层、方程 (1.103) 与谱线特征](#6-有效发射层方程-1103-与谱线特征)
7. [Rosseland 辐射扩散](#7-rosseland-辐射扩散)
8. [角矩与 Eddington 近似](#8-角矩与-eddington-近似)
9. [频率依赖的转移方程及其矩方程](#9-频率依赖的转移方程及其矩方程)
10. [两流近似与表面边界条件](#10-两流近似与表面边界条件)
11. [习题 1.10：半无限等温散射介质](#11-习题-110半无限等温散射介质)
12. [English assignment-ready solution](#12-english-assignment-ready-solution)
13. [复习清单、极限检验与常见混淆](#13-复习清单极限检验与常见混淆)
14. [资料与引用](#14-资料与引用)

---

## 1. 本节的核心问题与结论

本节在回答一个看似简单、实际上非常关键的问题：一个物体只要光学厚，出射光谱就一定是黑体吗？

答案是否定的。普通光学深度大，只说明光子会经历许多次相互作用；如果这些相互作用几乎全是相干散射，光子虽然被困住，却没有与物质充分交换能量。真正使辐射场趋向 Planck 函数的，是光子的真吸收以及由局部热库控制的热发射。

整节内容可以压缩成以下逻辑链：

1. 纯散射只把已有辐射重新分配到不同方向，不能在无照明条件下凭空产生光子。
2. 光学厚介质中的光子通过随机游走逃逸；当总光学深度为 $\tau\gg1$ 时，所需相互作用次数约为 $N\sim\tau^2$。
3. 若每次相互作用真正吸收光子的概率为 $\epsilon$，光子在被销毁前平均经历约 $1/\epsilon$ 次相互作用。
4. 两者比较给出热化深度 $\tau_{\rm therm}\sim1/\sqrt{\epsilon}$，以及热化长度 $\ell_*\sim\ell/\sqrt{\epsilon}$。
5. 有效厚介质的直接出射主要来自表面约一个热化长度的区域，因此 RL 方程 (1.103) 给出 $L_\nu\propto\sqrt{\epsilon_\nu}B_\nu$ 的数量级标度。
6. 强原子跃迁若主要表现为散射，则谱线中心 $\epsilon_\nu\ll1$，表面源函数低于邻近热连续谱，即使介质等温也能出现吸收特征。
7. 在介质深处，辐射接近各向同性和局部热平衡；一个很小的方向不对称把能量从高温处扩散到低温处，这就是 Rosseland 辐射扩散。
8. 习题 1.10 用 Eddington 近似和两流边界条件求得半无限等温介质中的 $J_\nu(\tau_\nu)$、表面通量和有效光学深度。

本节最重要的三个结论是

$$
\boxed{
S_\nu=(1-\epsilon_\nu)J_\nu+\epsilon_\nu B_\nu
},
$$

$$
\boxed{
\tau_{\nu,*}\sim\sqrt{\epsilon_\nu}\,\tau_\nu
},
$$

以及两流/Eddington 近似下的平方根 epsilon 定律

$$
\boxed{
S_\nu(0)=\sqrt{\epsilon_\nu}\,B_\nu
}.
$$

## 2. 统一符号、量纲与假设

### 2.1 符号表

| 符号 | 含义 | 量纲或说明 |
|---|---|---|
| $I_\nu(\tau,\mu)$ | 频率为 $\nu$、方向余弦为 $\mu$ 的比强度 | 每单位频率的定向辐射强度 |
| $J_\nu$ | 平均强度 | $J_\nu=(1/2)\int_{-1}^{1}I_\nu d\mu$ |
| $H_\nu$ | 一阶角矩 | $F_\nu=4\pi H_\nu$ |
| $K_\nu$ | 二阶角矩 | 与辐射压力有关 |
| $B_\nu(T)$ | Planck 函数 | LTE 热平衡比强度 |
| $\alpha_\nu$ | RL 的宏观真吸收系数 | $L^{-1}$ |
| $\sigma_\nu$ | RL 的宏观散射系数 | $L^{-1}$；不是单粒子截面 |
| $\chi_\nu$ | 总消光系数 | $\chi_\nu=\alpha_\nu+\sigma_\nu$ |
| $\sigma_{\nu,\rm cross}$ | 单个粒子的微观散射截面 | $L^2$ |
| $\kappa_{\nu}$ | 单位质量不透明度 | $L^2M^{-1}$ |
| $\epsilon_\nu$ | 单次相互作用的真吸收概率 | $\epsilon_\nu=\alpha_\nu/\chi_\nu$ |
| $1-\epsilon_\nu$ | 单次散射反照率 | $\sigma_\nu/\chi_\nu$ |
| $\ell_\nu$ | 到下一次任意相互作用的平均自由程 | $\ell_\nu=1/\chi_\nu$ |
| $\ell_{\nu,*}$ | 热化长度或有效平均路程 | $\ell_{\nu,*}=\ell_\nu/\sqrt{\epsilon_\nu}$ |
| $\tau_\nu$ | 总光学深度 | 由 $\chi_\nu$ 定义 |
| $\tau_{\nu,a},\tau_{\nu,s}$ | 真吸收、散射光学深度 | $\alpha_\nu L,\sigma_\nu L$ |
| $\tau_{\nu,*}$ | 有效光学深度 | 随机游走标度为 $\sqrt{\epsilon_\nu}\tau_\nu$ |
| $\mu$ | 方向余弦 | $\mu=\cos\theta$ |

### 2.2 关于 $\epsilon_\nu$ 分母的更正

预习要求中若出现

$$
\epsilon_\nu=\frac{\alpha_\nu}{\alpha_\nu-\sigma_\nu},
$$

其中的负号应视为排版或转录错误。RL 的定义是

$$
\boxed{
\epsilon_\nu
=
\frac{\alpha_\nu}{\alpha_\nu+\sigma_\nu}
}.
$$

分母必须是总消光系数。只有这样，$\epsilon_\nu$ 才是 $0$ 到 $1$ 之间的概率，并且真吸收与散射两个互斥结果满足

$$
\epsilon_\nu+(1-\epsilon_\nu)=1.
$$

### 2.3 微观截面、宏观系数与单位质量不透明度

小写 $\sigma$ 在许多教材中表示微观截面，其量纲是面积。RL §1.7 却用 $\sigma_\nu$ 表示宏观散射系数，其量纲是逆长度。二者关系为

$$
\boxed{
\sigma_\nu^{\rm RL}
=n_s\sigma_{\nu,\rm cross}
=\rho\kappa_{\nu,\rm sc}
}.
$$

量纲检查为

$$
[n_s\sigma_{\nu,\rm cross}]
=L^{-3}L^2=L^{-1}.
$$

同理，宏观真吸收系数可以写成

$$
\alpha_\nu
=n_a\sigma_{\nu,\rm abs,cross}
=\rho\kappa_{\nu,\rm abs}.
$$

只有量纲相同的宏观系数才能相加：

$$
\chi_\nu=\alpha_\nu+\sigma_\nu.
$$

### 2.4 本文采用的主要假设

- §1.7 的基础散射模型取相干、各向同性散射；散射不改变该频率区间内的总光子能量。
- 真吸收与热发射服从 LTE Kirchhoff 关系 $j_{\nu,\rm th}=\alpha_\nu B_\nu(T)$。
- 随机游走的数量级估计忽略几何常数；Eddington 推导会给出额外的 $\sqrt{3}$。
- Rosseland 近似要求介质光学厚、辐射接近局部热平衡，并且物理量在一个平均自由程内变化很慢。
- Eddington 近似只要求角分布接近各向同性，并采用 $K_\nu=J_\nu/3$ 闭合矩方程。
- 习题 1.10 的介质半无限、均匀、等温，$\alpha_\nu$、$\sigma_\nu$ 和 $\epsilon_\nu$ 不随深度变化，表面无外来入射辐射。

## 3. 纯散射与吸收加散射的源函数

### 3.1 热发射与散射的本质区别

LTE 真吸收对应的热发射率为

$$
\boxed{
j_{\nu,\rm th}=\alpha_\nu B_\nu(T)
}.
$$

它由物质温度决定；即使没有外来辐射，温度为 $T$ 的物质仍然可以热发射。

对于相干、各向同性散射，单位体积在频率 $\nu$ 上散射出去的能量，必须等于从各个方向散射进来的能量，因此

$$
\boxed{
j_{\nu,\rm sc}=\sigma_\nu J_\nu
}
\qquad\text{[RL (1.84)]}.
$$

纯散射的源函数为

$$
\boxed{
S_{\nu,\rm sc}
=\frac{j_{\nu,\rm sc}}{\sigma_\nu}
=J_\nu
}
\qquad\text{[RL (1.85)]}.
$$

因此，散射只重新分配已经存在的辐射。若 $J_\nu=0$，纯散射介质不会凭空产生光子。

### 3.2 为什么纯散射问题不能直接使用已知源函数的形式解？

纯散射转移方程为

$$
\frac{dI_\nu}{ds}
=-\sigma_\nu(I_\nu-J_\nu).
$$

这里

$$
J_\nu=\frac{1}{4\pi}\int I_\nu d\Omega
$$

又依赖所有方向的未知强度。因此 $S_\nu=J_\nu$ 不是预先给定的局部函数，而是解本身的角平均。方程成为积分—微分方程，这正是需要 Eddington 近似等方法的原因。

### 3.3 吸收加散射时的源函数

总发射率为

$$
j_\nu
=\alpha_\nu B_\nu+\sigma_\nu J_\nu,
$$

总消光系数为

$$
\chi_\nu=\alpha_\nu+\sigma_\nu.
$$

所以

$$
S_\nu
=\frac{\alpha_\nu B_\nu+\sigma_\nu J_\nu}
{\alpha_\nu+\sigma_\nu}.
$$

引入

$$
\epsilon_\nu
=\frac{\alpha_\nu}{\alpha_\nu+\sigma_\nu},
\qquad
1-\epsilon_\nu
=\frac{\sigma_\nu}{\alpha_\nu+\sigma_\nu},
$$

得到

$$
\boxed{
S_\nu
=(1-\epsilon_\nu)J_\nu
+\epsilon_\nu B_\nu
}
\qquad\text{[RL (1.95)]}.
$$

它是散射源函数 $J_\nu$ 与热源函数 $B_\nu$ 的概率加权平均：

- $\epsilon_\nu\to1$：真吸收占主导，$S_\nu\to B_\nu$；
- $\epsilon_\nu\to0$：散射占主导，$S_\nu\to J_\nu$；
- 深处若 $J_\nu\to B_\nu$，则无论 $\epsilon_\nu$ 多小，都有 $S_\nu\to B_\nu$；
- 表面附近光子逃逸使 $J_\nu<B_\nu$，低 $\epsilon_\nu$ 会使 $S_\nu$ 显著低于 $B_\nu$。

### 3.4 “吸收后立即发射”何时应算散射？

原子吸收一个谱线光子后很快回到原能级，并发射频率相近的光子。如果中间没有通过碰撞等过程把能量充分交给物质热库，出射光子仍与入射辐射有紧密联系，这在辐射转移中应算共振散射。

真吸收则意味着原光子消失，其能量进入原子、电子或离子的内部能与热运动。物质后来根据局部温度重新发射，新光子不再保留原来的方向、相位和传播历史。后者才有效推动辐射场趋向 $B_\nu(T)$。

## 4. 从截面到光学深度、概率和平均自由程

### 4.1 为什么一小段中的相互作用概率是 $d\tau$？

设散射粒子数密度为 $n$，单个粒子的微观截面为 $\sigma_{\rm cross}$。光子前进一小段 $ds$ 时，相当于扫过体积

$$
dV=\sigma_{\rm cross}ds.
$$

这个体积中平均包含的靶粒子数为

$$
dN=n\sigma_{\rm cross}ds.
$$

当 $dN\ll1$ 时，同时遇到两个以上靶粒子的概率是 $O(ds^2)$，因此一次相互作用的条件概率为

$$
dP_{\rm int}
=n\sigma_{\rm cross}ds.
$$

定义宏观系数

$$
\chi=n\sigma_{\rm cross}
$$

和微分光学深度

$$
d\tau=\chi ds,
$$

就得到

$$
\boxed{
dP_{\rm int}=d\tau+O(d\tau^2)
}.
$$

这里是条件概率：它假设光子已经平安到达这一小段的起点。若要计算光子从最初出发后第一次在此处相互作用的概率，还要乘此前的存活概率。

### 4.2 为什么存活概率是 $e^{-\tau}$？

设 $P_0$ 是尚未发生相互作用的概率。经过下一小段后

$$
P_0(\tau+d\tau)=P_0(\tau)(1-d\tau).
$$

因此

$$
dP_0=-P_0d\tau,
$$

即

$$
\frac{dP_0}{P_0}=-d\tau.
$$

用 $P_0(0)=1$ 积分得

$$
\boxed{
P_0(\tau)=e^{-\tau}
}.
$$

所以至少发生一次相互作用的概率是

$$
\boxed{
P_{\geq1}=1-e^{-\tau}
}.
$$

当 $\tau\ll1$ 时，Taylor 展开给出

$$
e^{-\tau}
=1-\tau+\frac{\tau^2}{2}-\cdots,
$$

因此

$$
\boxed{
1-e^{-\tau}\simeq\tau
\qquad(\tau\ll1)
}.
$$

光学薄极限中，发生两次及以上相互作用的概率是 $O(\tau^2)$，所以光学深度本身近似等于至少发生一次相互作用的概率。一般情况下 $\tau$ 可以大于 $1$，不是概率；精确概率始终是 $1-e^{-\tau}\leq1$。

### 4.3 为什么平均自由程是总消光系数的倒数？

真吸收和散射都能结束当前这一次自由飞行。在 $ds$ 中

$$
dP_{\rm abs}=\alpha_\nu ds,
\qquad
dP_{\rm sc}=\sigma_\nu ds.
$$

忽略 $O(ds^2)$ 的同时发生概率：

$$
dP_{\rm int}
=(\alpha_\nu+\sigma_\nu)ds
=\chi_\nu ds.
$$

传播距离 $s$ 后仍未相互作用的概率为

$$
P_0(s)=e^{-\chi_\nu s}.
$$

第一次相互作用发生在 $s$ 到 $s+ds$ 的概率密度为

$$
p(s)=\chi_\nu e^{-\chi_\nu s}.
$$

平均自由程因此为

$$
\begin{aligned}
\ell_\nu
&=\int_0^\infty sp(s)ds\\
&=\int_0^\infty s\chi_\nu e^{-\chi_\nu s}ds\\
&=\frac{1}{\chi_\nu}.
\end{aligned}
$$

所以

$$
\boxed{
\ell_\nu
=\frac{1}{\alpha_\nu+\sigma_\nu}
}.
$$

量纲也正确：$[\alpha_\nu]=[\sigma_\nu]=L^{-1}$，所以 $[\ell_\nu]=L$。

## 5. 随机游走、热化长度与有效光学深度

### 5.1 为什么光学厚时逃逸需要 $N\sim\tau^2$ 次相互作用？

光子每次相互作用之间移动位移 $\mathbf r_i$。经过 $N$ 次相互作用后的净位移为

$$
\mathbf R=\sum_{i=1}^{N}\mathbf r_i.
$$

各向同性随机游走满足 $\langle\mathbf R\rangle=0$，但均方位移为

$$
\langle R^2\rangle
=\sum_i\langle r_i^2\rangle
+2\sum_{i<j}\langle\mathbf r_i\cdot\mathbf r_j\rangle.
$$

不同步的方向不相关，交叉项平均为零，因此

$$
\langle R^2\rangle\simeq N\ell^2.
$$

典型净位移为

$$
R_{\rm rms}\simeq\sqrt{N}\,\ell.
$$

若介质尺度为 $L$，令 $R_{\rm rms}\sim L$：

$$
N\sim\left(\frac{L}{\ell}\right)^2=\tau^2,
$$

所以

$$
\boxed{
N\sim\tau^2
\qquad(\tau\gg1)
}.
$$

光学薄时只有约 $1-e^{-\tau}\simeq\tau$ 的光子发生相互作用，因此 $N\sim\tau$。数量级上可写成 $N\sim\max(\tau,\tau^2)$。

### 5.2 什么叫热化？

热化不是简单的“方向变乱”，而是辐射通过真吸收和热发射与局部物质建立能量平衡，逐渐忘掉原光子的来源、方向和频谱历史，使

$$
\boxed{
J_\nu\longrightarrow B_\nu(T),
\qquad
S_\nu\longrightarrow B_\nu(T)
}.
$$

相干散射可以很快使辐射接近各向同性，却不会单独把强度和频谱调整成 $B_\nu(T)$。一个强度很低但各方向相同的辐射场可以是各向同性的，却不是热化的。

在热平衡中

$$
\alpha_\nu J_\nu=\alpha_\nu B_\nu,
$$

即真吸收功率与热发射功率相等，没有净物质—辐射能量交换。

### 5.3 光子在被真吸收前能走多远？

每次相互作用以概率 $\epsilon_\nu$ 终止于真吸收，因此光子被销毁前平均经历的相互作用次数约为

$$
N_{\rm dest}\sim\frac{1}{\epsilon_\nu}.
$$

随机游走的净位移为

$$
\ell_{\nu,*}
\sim\sqrt{N_{\rm dest}}\,\ell_\nu
=\frac{\ell_\nu}{\sqrt{\epsilon_\nu}}.
$$

代入

$$
\ell_\nu=(\alpha_\nu+\sigma_\nu)^{-1},
\qquad
\epsilon_\nu=\frac{\alpha_\nu}{\alpha_\nu+\sigma_\nu},
$$

得到

$$
\boxed{
\ell_{\nu,*}
=\frac{1}{\sqrt{\alpha_\nu(\alpha_\nu+\sigma_\nu)}}
}.
$$

这叫作热化长度、扩散长度或有效平均路程。它不是一次自由飞行的长度，而是光子从一次热发射产生到下一次真吸收销毁之间，通过多次散射实现的典型净位移。

### 5.4 为什么有效光学深度决定热化？

对尺度为 $L$ 的介质定义

$$
\tau_{\nu,*}=\frac{L}{\ell_{\nu,*}}.
$$

利用

$$
\tau_{\nu,a}=\alpha_\nu L,
\qquad
\tau_{\nu,s}=\sigma_\nu L,
$$

得到随机游走数量级

$$
\boxed{
\tau_{\nu,*}
\simeq
\sqrt{\tau_{\nu,a}
(\tau_{\nu,a}+\tau_{\nu,s})}
}.
$$

等价地，因为 $\tau_\nu=\tau_{\nu,a}+\tau_{\nu,s}$，

$$
\boxed{
\tau_{\nu,*}\simeq\sqrt{\epsilon_\nu}\,\tau_\nu
}.
$$

另一种看法是：从普通光学深度 $\tau_\nu$ 逃逸需要约 $\tau_\nu^2$ 次相互作用，每次发生真吸收的概率为 $\epsilon_\nu$，所以逃逸前预期的真吸收次数为

$$
\langle N_{\rm abs}\rangle
\sim\epsilon_\nu\tau_\nu^2
=\tau_{\nu,*}^2.
$$

因此

$$
\tau_{\nu,*}\ll1
\quad\Rightarrow\quad
\text{光子通常先逃逸，未充分热化},
$$

$$
\tau_{\nu,*}\gg1
\quad\Rightarrow\quad
\text{光子逃逸前通常经历真吸收，辐射趋向热化}.
$$

临界热化深度为

$$
\boxed{
\tau_{\nu,\rm therm}\sim\frac{1}{\sqrt{\epsilon_\nu}}
}.
$$

Eddington 方程会给出 $\tau_{\nu,*}=\sqrt{3\epsilon_\nu}\tau_\nu$；其中的 $\sqrt{3}$ 是角矩闭合带来的几何因子，不改变核心的 $\sqrt{\epsilon_\nu}$ 标度。

### 5.5 普通光学厚为何不保证黑体？

若 $\tau_\nu\gg1$ 但 $\epsilon_\nu\ll1$，光子可能经历极多次散射，却很少经历真吸收。例如 $\epsilon_\nu=10^{-4}$ 时，热化需要的总光学深度约为

$$
\tau_{\nu,\rm therm}\sim100.
$$

在 $\tau_\nu=10$ 处，普通意义上已经光学厚，但

$$
\epsilon_\nu\tau_\nu^2
=10^{-4}\times10^2
=10^{-2}\ll1,
$$

所以仍未充分热化。光学厚衡量“被困住”，有效光学厚衡量“被困住的过程中是否与物质充分交换能量”。

## 6. 有效发射层、方程 (1.103) 与谱线特征

### 6.1 为什么只有表面一个热化长度内的热发射主导直接出射？

设光子在距离表面 $x$ 的位置产生。从这里随机游走到表面需要

$$
N_{\rm esc}\sim\left(\frac{x}{\ell_\nu}\right)^2
$$

次相互作用，而它在被真吸收前平均只能经历

$$
N_{\rm dest}\sim\frac{1}{\epsilon_\nu}
$$

次相互作用。要有相当概率在原身份被销毁前逃逸，必须有

$$
N_{\rm esc}\lesssim N_{\rm dest}.
$$

于是

$$
\left(\frac{x}{\ell_\nu}\right)^2
\lesssim\frac{1}{\epsilon_\nu},
$$

即

$$
\boxed{
x\lesssim\frac{\ell_\nu}{\sqrt{\epsilon_\nu}}
=\ell_{\nu,*}
}.
$$

这里不是说 $x=\ell_{\nu,*}$ 是突然的硬边界，而是说深度贡献会平滑衰减。扩散解中常出现类似 $e^{-x/\ell_{\nu,*}}$ 的行为。更深处的能量仍可经多轮“热发射—散射—真吸收—再热发射”逐步向外输运，但直接到达表面的光子，其最后一次热发射通常发生在表面约一个热化长度内。

因此有效发射体积的数量级为

$$
\boxed{
V_{\rm eff}\sim A\ell_{\nu,*}
}.
$$

### 6.2 RL 方程 (1.103)

单位体积、单位频率的总热发射功率为

$$
4\pi\alpha_\nu B_\nu.
$$

用有效发射体积估计单色光度：

$$
L_\nu
\sim4\pi\alpha_\nu B_\nu A\ell_{\nu,*}.
$$

代入

$$
\ell_{\nu,*}
=\frac{1}{\sqrt{\alpha_\nu(\alpha_\nu+\sigma_\nu)}},
$$

得到

$$
\boxed{
L_\nu
\sim4\pi B_\nu A\sqrt{\epsilon_\nu}
}
\qquad\text{[RL (1.103), 数量级]}.
$$

这个式子可靠地给出 $\sqrt{\epsilon_\nu}$ 标度，却不提供精确的数值系数。无散射极限 $\epsilon_\nu=1$ 时，它给出 $4\pi B_\nu A$，而平面黑体表面的精确结果是 $\pi B_\nu A$。RL 因此明确说明方程 (1.103) 只能作为数量级估计；习题 1.10 用更系统的近似求系数。

### 6.3 等温物体为何仍能出现散射吸收线？

考虑中心频率为 $\nu_0$ 的窄谱线。在线外邻近连续谱处，若真吸收占主导，可能有

$$
\epsilon_{\nu,\rm cont}\sim1,
$$

表面源函数接近

$$
S_{\nu,\rm cont}\sim B_\nu.
$$

在强共振线中心，大多数“吸收后再发射”实际属于散射，所以

$$
\epsilon_{\nu,\rm line}\ll1.
$$

表面光子持续逃逸，使 $J_\nu<B_\nu$；而低 $\epsilon_\nu$ 使源函数主要追随 $J_\nu$，于是

$$
S_{\nu,\rm line}(0)\sim\sqrt{\epsilon_{\nu,\rm line}}B_\nu
<B_\nu.
$$

因此即使温度不随深度变化，谱线中心也比邻近热连续谱暗，形成吸收特征。这不是“谱线形成在更高、更冷的层”造成的，而是非 LTE 的表面源函数效应。

### 6.4 “低两个数量级”究竟是什么意思？

若只用方程 (1.103) 的数量级标度，并假设窄线范围内 $B_\nu$ 与发射面积几乎不变，则

$$
\frac{L_{\nu,\rm line}}{L_{\nu,\rm cont}}
\sim
\sqrt{
\frac{\epsilon_{\nu,\rm line}}
{\epsilon_{\nu,\rm cont}}
}.
$$

若 $\epsilon_{\nu,\rm cont}\sim1$ 且 $\epsilon_{\nu,\rm line}=10^{-4}$：

$$
\frac{L_{\nu,\rm line}}{L_{\nu,\rm cont}}
\sim10^{-2}.
$$

“低两个数量级”表示在谱线中心那个狭窄频率区间内，每单位频率光度的数量级可能只有邻近连续谱的百分之一。它不是说物体的总光度降低了一百倍，也不是精确预言线深为 $99\%$。

同一两流近似内部更一致的比值为

$$
\frac{F_{\nu,\rm line}}{F_{\nu,\rm cont}}
=
\frac{2\sqrt{\epsilon_{\rm line}}}
{1+\sqrt{\epsilon_{\rm line}}}
$$

（取 $\epsilon_{\rm cont}=1$）。当 $\epsilon_{\rm line}=10^{-4}$ 时约为 $0.0198$，即约低五十倍。两者的差异再次说明：核心结论是 $\sqrt{\epsilon}$ 标度，不是方程 (1.103) 的数量系数。

### 6.5 谱线变暗不等于能量消失

散射光子可能被送回介质深处、从别的方向逃逸、通过频率再分布从线翼逃逸，或被真吸收后以其他频率重新发射。吸收线只表示沿观测方向、在该频率附近收到的辐射低于连续谱基线，不代表总能量按同样比例消失。

现实线型还会受到外部照明、几何、速度场、部分或完全频率再分布、碰撞退激发、荧光分支和温度梯度影响。因此“低 $\epsilon$ 产生吸收特征”是本题理想模型下的结论，不是对所有天体谱线的无条件断言。

## 7. Rosseland 辐射扩散

### 7.1 它具体描述什么？

Rosseland 辐射扩散描述光学厚、接近 LTE 的介质内部，辐射怎样以随机游走方式把能量从高温处输送到低温处。它最终把复杂的辐射转移写成类似热传导的关系：

$$
\boxed{
\mathbf F
=-\frac{16\sigma_{\rm SB}T^3}{3\chi_R}\nabla T
}.
$$

若使用单位质量的 Rosseland 平均不透明度 $\kappa_R$，其中 $\chi_R=\rho\kappa_R$，则

$$
\boxed{
\mathbf F
=-\frac{16\sigma_{\rm SB}T^3}
{3\rho\kappa_R}\nabla T
}.
$$

它回答的是：已知内部温度梯度和不透明度，辐射每单位时间、每单位面积能输送多少能量。

### 7.2 几乎各向同性为什么仍有净通量？

取 $z$ 向外，恒星内部通常满足

$$
\frac{dT}{dz}<0.
$$

站在某一点，向外传播的光子平均来自更深、更热的区域；向内传播的光子平均来自更浅、更冷的区域。因此虽然辐射场几乎各向同性，仍有

$$
I_{\nu,\rm outward}>I_{\nu,\rm inward}.
$$

这个很小的一阶方向不对称产生净向外通量。完全各向同性部分包含很大的能量密度，却在正反方向上精确抵消。

### 7.3 从转移方程得到一阶强度

在平面平行介质中，$dz=\mu ds$。转移方程为

$$
\mu\frac{\partial I_\nu}{\partial z}
=-\chi_\nu(I_\nu-S_\nu).
$$

整理为

$$
I_\nu
=S_\nu
-\frac{\mu}{\chi_\nu}
\frac{\partial I_\nu}{\partial z}.
$$

深处辐射接近 LTE，零阶近似为

$$
I_\nu^{(0)}\simeq S_\nu^{(0)}\simeq B_\nu(T).
$$

导数项已经是一阶小量，因此可在其中使用零阶结果：

$$
\boxed{
I_\nu^{(1)}(z,\mu)
\simeq
B_\nu(T)
-\frac{\mu}{\chi_\nu}
\frac{\partial B_\nu}{\partial z}
}
\qquad\text{[RL (1.106)]}.
$$

若 $dB_\nu/dz<0$，向外方向 $\mu>0$ 的修正为正，向内方向 $\mu<0$ 的修正为负，正好对应“向外光子来自更热处”。

### 7.4 单色扩散通量

平面平行、方位角对称时

$$
F_\nu
=2\pi\int_{-1}^{1}I_\nu\mu d\mu.
$$

代入一阶强度：

$$
F_\nu
=2\pi\int_{-1}^{1}
\left[
B_\nu
-\frac{\mu}{\chi_\nu}
\frac{\partial B_\nu}{\partial z}
\right]\mu d\mu.
$$

各向同性项包含 $\int_{-1}^{1}\mu d\mu=0$，不贡献通量；梯度项使用

$$
\int_{-1}^{1}\mu^2d\mu=\frac{2}{3},
$$

得到

$$
\boxed{
F_\nu
=-\frac{4\pi}{3\chi_\nu}
\frac{\partial B_\nu}{\partial z}
}
\qquad\text{[RL (1.108)]}.
$$

因此温度无梯度时，即使内部存在强烈黑体辐射，净通量也为零；不透明度越大，平均自由程越短，该频率输运能量的效率越低。

### 7.5 Rosseland 平均为什么由透明窗口控制？

利用

$$
\frac{\partial B_\nu}{\partial z}
=\frac{\partial B_\nu}{\partial T}
\frac{\partial T}{\partial z},
$$

总通量为

$$
F
=-\frac{4\pi}{3}\frac{\partial T}{\partial z}
\int_0^\infty
\frac{1}{\chi_\nu}
\frac{\partial B_\nu}{\partial T}d\nu.
$$

定义

$$
\boxed{
\frac{1}{\chi_R}
=
\frac{
\displaystyle\int_0^\infty
\chi_\nu^{-1}
\frac{\partial B_\nu}{\partial T}d\nu
}{
\displaystyle\int_0^\infty
\frac{\partial B_\nu}{\partial T}d\nu
}
}
\qquad\text{[RL (1.110)]}.
$$

这里平均的是 $1/\chi_\nu$，所以低不透明度频率具有较大权重。辐射能量像通过许多并联通道输运，总流量主要经过最透明的频率窗口，而不是最堵塞的谱段。

使用

$$
\int_0^\infty B_\nu d\nu
=\frac{\sigma_{\rm SB}}{\pi}T^4
$$

可得

$$
\int_0^\infty
\frac{\partial B_\nu}{\partial T}d\nu
=\frac{4\sigma_{\rm SB}}{\pi}T^3,
$$

从而得到最终扩散通量。

### 7.6 能量密度形式与适用条件

黑体辐射能量密度为

$$
u=aT^4,
\qquad
a=\frac{4\sigma_{\rm SB}}{c}.
$$

扩散通量可写成

$$
\boxed{
\mathbf F
=-\frac{c}{3\chi_R}\nabla u
}.
$$

所以辐射扩散系数为

$$
D_{\rm rad}=\frac{c}{3\chi_R}=\frac{c\ell_R}{3}.
$$

Rosseland 近似适合恒星内部、光学厚吸积盘内部等接近 LTE 的区域。它通常不适用于光球附近的 $\tau\sim1$ 区域、光学薄云、纯散射且未热化的介质、强非 LTE 谱线形成区，或物理量在一个平均自由程内剧烈变化的区域。

## 8. 角矩与 Eddington 近似

### 8.1 三个角矩

在平面平行、方位角对称的情况下，定义

$$
J_\nu
\equiv
\frac12\int_{-1}^{1}I_\nu d\mu,
$$

$$
H_\nu
\equiv
\frac12\int_{-1}^{1}\mu I_\nu d\mu,
$$

$$
K_\nu
\equiv
\frac12\int_{-1}^{1}\mu^2I_\nu d\mu.
$$

其中

$$
F_\nu=4\pi H_\nu,
$$

而 $K_\nu$ 与沿法线方向的辐射压力有关。

### 8.2 Eddington closure 如何得到？

Eddington 近似把近各向同性的角分布截断到 $\mu$ 的一次项：

$$
I_\nu(\tau,\mu)
\simeq a_\nu(\tau)+b_\nu(\tau)\mu.
$$

计算零阶矩：

$$
J_\nu
=\frac12\int_{-1}^{1}(a_\nu+b_\nu\mu)d\mu
=a_\nu.
$$

计算二阶矩：

$$
\begin{aligned}
K_\nu
&=\frac12\int_{-1}^{1}
\mu^2(a_\nu+b_\nu\mu)d\mu\\
&=\frac{a_\nu}{2}\int_{-1}^{1}\mu^2d\mu
+\frac{b_\nu}{2}\int_{-1}^{1}\mu^3d\mu\\
&=\frac{a_\nu}{2}\frac{2}{3}+0\\
&=\frac{a_\nu}{3}.
\end{aligned}
$$

因为 $J_\nu=a_\nu$，所以

$$
\boxed{
K_\nu=\frac13J_\nu
}
\qquad\text{[RL (1.114)]}.
$$

几何上，这就是各向同性分布的

$$
\langle\mu^2\rangle
=\frac12\int_{-1}^{1}\mu^2d\mu
=\frac13.
$$

等价地，三维单位方向向量满足 $n_x^2+n_y^2+n_z^2=1$，各向同性使三个方向平均值相等，所以每个都是 $1/3$。

### 8.3 它与 $P=u/3$ 的关系

因为

$$
u_\nu=\frac{4\pi}{c}J_\nu,
\qquad
P_{\nu,zz}=\frac{4\pi}{c}K_\nu,
$$

所以

$$
K_\nu=\frac13J_\nu
\quad\Longleftrightarrow\quad
P_{\nu,zz}=\frac13u_\nu.
$$

对完全各向同性辐射，这是严格关系；对包含更高阶角度结构的真实辐射场，定义 Eddington factor $f_\nu=K_\nu/J_\nu$，取 $f_\nu=1/3$ 是近似。自由流动极限中光子几乎沿同一方向传播，反而有 $f_\nu\to1$。

## 9. 频率依赖的转移方程及其矩方程

### 9.1 下标 $\nu$ 从哪里来？

$I_\nu$ 是每单位频率的比强度：

$$
I_\nu
=\frac{dE}
{dt\,dA_\perp\,d\Omega\,d\nu}.
$$

不同频率具有不同的 $\alpha_\nu$、$\sigma_\nu$、$S_\nu$ 和光学深度，因此转移方程首先对每一个固定频率分别求解。在本节相干散射假设下，散射不耦合不同频率；若存在频率再分布，$S_\nu$ 会通过积分核与其他频率相耦合，但 $\nu$ 下标仍然保留。

### 9.2 从路径坐标到法向光学深度

沿光线的基本方程为

$$
\frac{dI_\nu}{ds}
=-\chi_\nu(I_\nu-S_\nu).
$$

取 $z$ 向外，$dz=\mu ds$，因此

$$
\mu\frac{\partial I_\nu}{\partial z}
=-\chi_\nu(I_\nu-S_\nu).
$$

定义从表面向内增加的光学深度

$$
d\tau_\nu=-\chi_\nu dz.
$$

于是

$$
\frac{\partial}{\partial z}
=-\chi_\nu\frac{\partial}{\partial\tau_\nu}.
$$

消去 $-\chi_\nu$ 后得到

$$
\boxed{
\mu\frac{\partial I_\nu}{\partial\tau_\nu}
=I_\nu-S_\nu
}
\qquad\text{[RL (1.116)]}.
$$

正负号依赖坐标约定；这里 $z$ 向外增加，而 $\tau_\nu$ 向内增加。

### 9.3 零阶矩方程

所谓零阶矩，是不额外乘 $\mu$，直接把转移方程乘 $1/2$ 后从 $-1$ 到 $1$ 积分：

$$
\frac12\int_{-1}^{1}
\mu\frac{\partial I_\nu}{\partial\tau_\nu}d\mu
=
\frac12\int_{-1}^{1}(I_\nu-S_\nu)d\mu.
$$

左边为

$$
\frac{d}{d\tau_\nu}
\left[
\frac12\int_{-1}^{1}\mu I_\nu d\mu
\right]
=\frac{dH_\nu}{d\tau_\nu}.
$$

右边第一项是 $J_\nu$。源函数各向同性，与 $\mu$ 无关，所以

$$
\frac12\int_{-1}^{1}S_\nu d\mu=S_\nu.
$$

因此

$$
\boxed{
\frac{dH_\nu}{d\tau_\nu}
=J_\nu-S_\nu
}
\qquad\text{[RL (1.117)]}.
$$

虽然叫零阶矩，左边却出现 $H_\nu$，因为原始转移方程本身已经带一个 $\mu$。

### 9.4 一阶矩方程

先把转移方程额外乘一个 $\mu$：

$$
\mu^2\frac{\partial I_\nu}{\partial\tau_\nu}
=\mu I_\nu-\mu S_\nu.
$$

再积分：

$$
\frac12\int_{-1}^{1}
\mu^2\frac{\partial I_\nu}{\partial\tau_\nu}d\mu
=
\frac12\int_{-1}^{1}\mu I_\nu d\mu
-\frac{S_\nu}{2}\int_{-1}^{1}\mu d\mu.
$$

左边是 $dK_\nu/d\tau_\nu$，右边第一项是 $H_\nu$，最后一项因奇函数积分为零，所以

$$
\boxed{
\frac{dK_\nu}{d\tau_\nu}=H_\nu
}
\qquad\text{[RL (1.118)]}.
$$

### 9.5 用 Eddington closure 闭合

利用 $K_\nu=J_\nu/3$：

$$
H_\nu
=\frac{dK_\nu}{d\tau_\nu}
=\frac13\frac{dJ_\nu}{d\tau_\nu}.
$$

再对光学深度求导，并使用零阶矩方程：

$$
\boxed{
\frac13\frac{d^2J_\nu}{d\tau_\nu^2}
=J_\nu-S_\nu
}
\qquad\text{[RL (1.119a)]}.
$$

代入

$$
S_\nu=(1-\epsilon_\nu)J_\nu+\epsilon_\nu B_\nu
$$

后，

$$
J_\nu-S_\nu
=\epsilon_\nu(J_\nu-B_\nu),
$$

所以

$$
\boxed{
\frac13\frac{d^2J_\nu}{d\tau_\nu^2}
=\epsilon_\nu(J_\nu-B_\nu)
}
\qquad\text{[RL (1.119b)]}.
$$

$B_\nu$ 并非突然出现：它来自真吸收对应的热发射率 $j_{\nu,\rm th}=\alpha_\nu B_\nu$，先进入源函数，再在代入具体源函数时显式进入扩散方程。

## 10. 两流近似与表面边界条件

### 10.1 为什么选择 $\mu=\pm1/\sqrt{3}$？

两流近似把所有向外、向内方向分别压缩为两个代表强度 $I^+$ 和 $I^-$。暂设代表方向为 $\mu=\pm\mu_0$，权重各为 $1/2$：

$$
J=\frac12(I^++I^-),
$$

$$
K
=\frac12\left(\mu_0^2I^++\mu_0^2I^-\right)
=\mu_0^2J.
$$

为了保留 Eddington closure $K=J/3$，必须有

$$
\mu_0^2=\frac13.
$$

因此

$$
\boxed{
\mu=\pm\frac{1}{\sqrt{3}}
}.
$$

它对应相对于外法线约 $54.7^\circ$ 的代表方向。真实光子并非只沿这两个方向传播；这是保留低阶角矩的离散近似。

### 10.2 如何得到 $I^\pm$？

两流矩为

$$
J=\frac12(I^++I^-),
$$

$$
H=\frac{1}{2\sqrt{3}}(I^+-I^-).
$$

所以

$$
I^++I^-=2J,
\qquad
I^+-I^-=2\sqrt{3}H.
$$

联立得到

$$
I^+=J+\sqrt{3}H,
\qquad
I^-=J-\sqrt{3}H.
$$

又因为

$$
H=\frac13\frac{dJ}{d\tau},
$$

最终

$$
\boxed{
I^+
=J+\frac{1}{\sqrt{3}}\frac{dJ}{d\tau}
},
$$

$$
\boxed{
I^-
=J-\frac{1}{\sqrt{3}}\frac{dJ}{d\tau}
}.
$$

也可以从 $I=a+b\mu$、$a=J$、$b=3H$ 直接在 $\mu=\pm1/\sqrt{3}$ 处取值得到同样结果。

### 10.3 半无限表面的边界条件

在表面 $\tau=0$，外界没有辐射射入介质，所以向内强度为零：

$$
I^-(0)=0.
$$

代入两流表达式：

$$
J(0)
-\frac{1}{\sqrt{3}}
\left.\frac{dJ}{d\tau}\right|_0
=0.
$$

因此

$$
\boxed{
\frac{1}{\sqrt{3}}
\left.\frac{dJ}{d\tau}\right|_0
=J(0)
}.
$$

它把“表面没有入射辐射”这一方向性条件，转换成关于 $J$ 与其导数的边界条件。

## 11. 习题 1.10：半无限等温散射介质

### 11.1 问题设置

介质占据

$$
0\leq\tau_\nu<\infty.
$$

它是均匀和等温的，所以对固定频率而言

$$
B_\nu=\text{常数},
\qquad
\epsilon_\nu=\text{常数}.
$$

深处辐射热化：

$$
J_\nu(\tau_\nu\to\infty)\to B_\nu.
$$

表面无入射辐射：

$$
I_\nu^-(0)=0.
$$

### 11.2 求解平均强度

从扩散方程出发：

$$
\frac13
\frac{d^2J_\nu}{d\tau_\nu^2}
=\epsilon_\nu(J_\nu-B_\nu).
$$

定义偏离热平衡的量

$$
y_\nu(\tau_\nu)
\equiv J_\nu(\tau_\nu)-B_\nu.
$$

因为等温使 $B_\nu$ 不随深度变化，

$$
\frac{d^2y_\nu}{d\tau_\nu^2}
=3\epsilon_\nu y_\nu.
$$

令

$$
q_\nu=\sqrt{3\epsilon_\nu},
$$

通解为

$$
y_\nu
=A_\nu e^{-q_\nu\tau_\nu}
+C_\nu e^{q_\nu\tau_\nu}.
$$

半无限深处不能发散，并且必须趋于 $B_\nu$，所以 $C_\nu=0$：

$$
J_\nu
=B_\nu+A_\nu e^{-q_\nu\tau_\nu}.
$$

表面边界条件为

$$
J_\nu(0)
=\frac{1}{\sqrt{3}}
\left.\frac{dJ_\nu}{d\tau_\nu}\right|_0.
$$

其中

$$
J_\nu(0)=B_\nu+A_\nu,
$$

$$
\left.\frac{dJ_\nu}{d\tau_\nu}\right|_0
=-q_\nu A_\nu.
$$

所以

$$
B_\nu+A_\nu
=-\frac{q_\nu}{\sqrt{3}}A_\nu
=-\sqrt{\epsilon_\nu}A_\nu.
$$

解得

$$
A_\nu
=-\frac{B_\nu}{1+\sqrt{\epsilon_\nu}}.
$$

因此

$$
\boxed{
J_\nu(\tau_\nu)
=B_\nu
\left[
1-
\frac{
e^{-\sqrt{3\epsilon_\nu}\tau_\nu}
}{
1+\sqrt{\epsilon_\nu}
}
\right]
}.
$$

这个解的结构是

$$
\text{当地热平衡值}
-
\text{表面光子逃逸造成的指数亏损}.
$$

$B_\nu$ 是微分方程的常数特解；指数项描述表面对深处热平衡辐射场的扰动。

### 11.3 表面平均强度与源函数

令 $\tau_\nu=0$：

$$
\boxed{
J_\nu(0)
=B_\nu
\frac{\sqrt{\epsilon_\nu}}
{1+\sqrt{\epsilon_\nu}}
}.
$$

源函数为

$$
S_\nu
=(1-\epsilon_\nu)J_\nu+\epsilon_\nu B_\nu.
$$

代入 $J_\nu(\tau_\nu)$，并使用

$$
\frac{1-\epsilon_\nu}{1+\sqrt{\epsilon_\nu}}
=1-\sqrt{\epsilon_\nu},
$$

得到

$$
\boxed{
S_\nu(\tau_\nu)
=B_\nu
\left[
1-
(1-\sqrt{\epsilon_\nu})
e^{-\sqrt{3\epsilon_\nu}\tau_\nu}
\right]
}.
$$

表面满足

$$
\boxed{
S_\nu(0)=\sqrt{\epsilon_\nu}B_\nu
}.
$$

这就是平方根 epsilon 定律。低 $\epsilon_\nu$ 时，表面源函数可以远低于局部 Planck 函数。

### 11.4 出射通量

由

$$
H_\nu
=\frac13\frac{dJ_\nu}{d\tau_\nu},
\qquad
F_\nu=4\pi H_\nu,
$$

有

$$
\left.
\frac{dJ_\nu}{d\tau_\nu}
\right|_0
=B_\nu
\frac{\sqrt{3\epsilon_\nu}}
{1+\sqrt{\epsilon_\nu}}.
$$

因此

$$
\boxed{
F_\nu(0)
=
\frac{4\pi B_\nu}{\sqrt{3}}
\frac{\sqrt{\epsilon_\nu}}
{1+\sqrt{\epsilon_\nu}}
}.
$$

低 $\epsilon_\nu$ 极限为

$$
\boxed{
F_\nu(0)
\simeq
\frac{4\pi}{\sqrt{3}}B_\nu\sqrt{\epsilon_\nu}
\qquad(\epsilon_\nu\ll1)
}.
$$

这与 RL (1.103) 具有相同的 $\sqrt{\epsilon_\nu}$ 标度。

无散射极限 $\epsilon_\nu=1$ 时，两流近似给出

$$
F_\nu(0)=\frac{2\pi}{\sqrt{3}}B_\nu,
$$

比精确黑体表面通量 $\pi B_\nu$ 高约 $15\%$。这是两流角度离散的近似误差，而不是代数错误。

### 11.5 有效光学深度

由解可见

$$
B_\nu-J_\nu
=\frac{B_\nu}{1+\sqrt{\epsilon_\nu}}
e^{-\sqrt{3\epsilon_\nu}\tau_\nu}.
$$

定义

$$
\boxed{
\tau_{\nu,*}
=\sqrt{3\epsilon_\nu}\,\tau_\nu
}.
$$

则偏离热平衡的部分按 $e^{-\tau_{\nu,*}}$ 衰减。$\tau_{\nu,*}\gtrsim1$ 时，$J_\nu$ 开始指数趋近 $B_\nu$。

又因为

$$
\epsilon_\nu
=\frac{\tau_{\nu,a}}
{\tau_{\nu,a}+\tau_{\nu,s}},
\qquad
\tau_\nu=\tau_{\nu,a}+\tau_{\nu,s},
$$

所以

$$
\boxed{
\tau_{\nu,*}
=
\sqrt{
3\tau_{\nu,a}
(\tau_{\nu,a}+\tau_{\nu,s})
}
}.
$$

这证明了题 1.10(b)。

### 11.6 纯散射极限的注意事项

当 $\epsilon_\nu\to0$ 时，对任何固定有限深度，解趋向 $J_\nu\to0$，与“无外照明的纯散射介质不能产生光子”一致。但严格取 $\epsilon_\nu=0$ 后，热化深度变成无穷大，深处边界条件 $J_\nu\to B_\nu$ 不再能由物质—辐射耦合建立。因此 $\epsilon\to0$ 是一个非一致极限，不能一边设定完全纯散射，一边仍把有限深处强制当作 LTE 热库。

## 12. English assignment-ready solution

### 12.1 Problem 1.10(a): mean intensity and emergent flux

Let

$$
\chi_\nu=\alpha_\nu+\sigma_\nu,
\qquad
\epsilon_\nu=\frac{\alpha_\nu}{\chi_\nu},
$$

and let $\tau_\nu$ denote the total optical depth measured inward from the surface. For coherent isotropic scattering, the source function is

$$
S_\nu=(1-\epsilon_\nu)J_\nu+\epsilon_\nu B_\nu.
$$

The Eddington moment equations give

$$
\frac{1}{3}\frac{d^2J_\nu}{d\tau_\nu^2}
=J_\nu-S_\nu
=\epsilon_\nu(J_\nu-B_\nu).
$$

The atmosphere is isothermal, so $B_\nu$ and $\epsilon_\nu$ are independent of depth. The general solution is

$$
J_\nu-B_\nu
=A_\nu e^{-\sqrt{3\epsilon_\nu}\tau_\nu}
+C_\nu e^{+\sqrt{3\epsilon_\nu}\tau_\nu}.
$$

The requirement that the radiation field remain finite and approach thermal equilibrium as $\tau_\nu\to\infty$ gives $C_\nu=0$. In the two-stream approximation,

$$
I_\nu^-
=J_\nu-\frac{1}{\sqrt{3}}
\frac{dJ_\nu}{d\tau_\nu}.
$$

There is no incident radiation at the surface, so $I_\nu^-(0)=0$, or

$$
J_\nu(0)
=\frac{1}{\sqrt{3}}
\left.\frac{dJ_\nu}{d\tau_\nu}\right|_0.
$$

Applying this boundary condition gives

$$
A_\nu=-\frac{B_\nu}{1+\sqrt{\epsilon_\nu}}.
$$

Hence

$$
\boxed{
J_\nu(\tau_\nu)
=B_\nu
\left[
1-
\frac{e^{-\sqrt{3\epsilon_\nu}\tau_\nu}}
{1+\sqrt{\epsilon_\nu}}
\right]
}.
$$

Using

$$
H_\nu=\frac{1}{3}\frac{dJ_\nu}{d\tau_\nu},
\qquad
F_\nu=4\pi H_\nu,
$$

the emergent flux is

$$
\boxed{
F_\nu(0)
=\frac{4\pi B_\nu}{\sqrt{3}}
\frac{\sqrt{\epsilon_\nu}}
{1+\sqrt{\epsilon_\nu}}
}.
$$

For $\epsilon_\nu\ll1$,

$$
F_\nu(0)
\simeq
\frac{4\pi}{\sqrt{3}}
B_\nu\sqrt{\epsilon_\nu}.
$$

The two-stream result differs from the exact blackbody normalization by a factor of order unity, but it correctly reproduces the $\sqrt{\epsilon_\nu}$ scaling.

### 12.2 Problem 1.10(b): effective optical depth

The departure from the Planck function is

$$
B_\nu-J_\nu
=
\frac{B_\nu}{1+\sqrt{\epsilon_\nu}}
e^{-\sqrt{3\epsilon_\nu}\tau_\nu}.
$$

It is therefore natural to define

$$
\tau_{\nu,*}
\equiv
\sqrt{3\epsilon_\nu}\,\tau_\nu.
$$

Since

$$
\epsilon_\nu
=\frac{\tau_{\nu,a}}
{\tau_{\nu,a}+\tau_{\nu,s}},
\qquad
\tau_\nu=\tau_{\nu,a}+\tau_{\nu,s},
$$

we obtain

$$
\boxed{
\tau_{\nu,*}
=
\sqrt{
3\tau_{\nu,a}
(\tau_{\nu,a}+\tau_{\nu,s})
}
}.
$$

Thus $J_\nu$ approaches $B_\nu$ exponentially when $\tau_{\nu,*}$ becomes of order unity or larger. This confirms that thermalization is controlled by the effective optical depth rather than by the total extinction optical depth alone.

### 12.3 Conceptual answer: should a scattering-dominated line be visible?

Yes, under the assumptions of the problem, a strong scattering-dominated transition is expected to produce a spectral feature even though the atmosphere is isothermal. At the line frequency, most extinction events are scatterings, so

$$
\epsilon_{\nu,\rm line}\ll1.
$$

Photon escape lowers the surface mean intensity below the Planck function. Since the line source function is dominated by the scattering term,

$$
S_\nu=(1-\epsilon_\nu)J_\nu+\epsilon_\nu B_\nu,
$$

the two-stream solution gives

$$
S_\nu(0)=\sqrt{\epsilon_\nu}B_\nu.
$$

If the neighboring continuum is more strongly thermalized, its source function remains close to $B_\nu$. The line center is therefore fainter than the adjacent continuum and appears in absorption. Physically, scattering can trap and redirect photons, but it cannot by itself replace the photons lost through the surface or establish a Planck spectrum. True absorption and thermal re-emission are required for thermalization.

A random-walk argument gives the same result without solving the transfer equation. A photon at total optical depth $\tau_\nu$ requires approximately $\tau_\nu^2$ interactions to escape. Since the probability of true absorption in each interaction is $\epsilon_\nu$, the expected number of destructive absorptions before escape is approximately $\epsilon_\nu\tau_\nu^2$. Thermalization therefore requires

$$
\epsilon_\nu\tau_\nu^2\gtrsim1,
$$

or

$$
\tau_\nu\gtrsim\epsilon_\nu^{-1/2}.
$$

Thus a large total optical depth does not by itself guarantee blackbody emission when the opacity is dominated by scattering.

## 13. 复习清单、极限检验与常见混淆

### 13.1 应该能独立推导

1. 从微观截面得到宏观系数：

   $$
   \chi=n\sigma_{\rm cross}=\rho\kappa.
   $$

2. 从 $dP=d\tau$ 得到存活概率：

   $$
   P_0=e^{-\tau}.
   $$

3. 从指数自由程分布得到

   $$
   \ell=1/\chi.
   $$

4. 从随机游走得到

   $$
   R_{\rm rms}\sim\sqrt{N}\ell,
   \qquad
   N_{\rm esc}\sim\tau^2.
   $$

5. 从 $N_{\rm dest}\sim1/\epsilon$ 得到

   $$
   \ell_*=\ell/\sqrt{\epsilon},
   \qquad
   \tau_*\sim\sqrt{\epsilon}\tau.
   $$

6. 从 $I=a+b\mu$ 的角积分得到

   $$
   K=J/3.
   $$

7. 从转移方程取零阶和一阶矩得到

   $$
   \frac{dH}{d\tau}=J-S,
   \qquad
   \frac{dK}{d\tau}=H.
   $$

8. 从两流矩关系得到

   $$
   \mu=\pm1/\sqrt{3},
   \qquad
   I^\pm=J\pm\frac{1}{\sqrt{3}}\frac{dJ}{d\tau}.
   $$

9. 完整求出题 1.10 的 $J_\nu(\tau_\nu)$ 与 $F_\nu(0)$。

### 13.2 可以直接记住的核心结论

$$
\boxed{
S_\nu=(1-\epsilon_\nu)J_\nu+\epsilon_\nu B_\nu
}
$$

$$
\boxed{
\epsilon_\nu
=\frac{\alpha_\nu}{\alpha_\nu+\sigma_\nu}
}
$$

$$
\boxed{
\ell_{\nu,*}
=\frac{1}{\sqrt{\alpha_\nu(\alpha_\nu+\sigma_\nu)}}
}
$$

$$
\boxed{
F_\nu
=-\frac{4\pi}{3\chi_\nu}
\frac{\partial B_\nu}{\partial z}
}
$$

$$
\boxed{
K_\nu=J_\nu/3
}
$$

$$
\boxed{
S_\nu(0)=\sqrt{\epsilon_\nu}B_\nu
}.
$$

### 13.3 极限检验

- $\epsilon_\nu\to1$：真吸收占主导，热化深度约为普通光学深度一，表面源函数趋向 $B_\nu$。
- $\epsilon_\nu\to0$：无外照明的纯散射介质没有自身热光子来源，表面出射趋向零；热化深度趋向无穷。
- $\tau\ll1$：$1-e^{-\tau}\simeq\tau$，相互作用概率很小。
- $\tau\gg1$：随机游走逃逸需要 $N\sim\tau^2$ 次相互作用。
- $dT/dz=0$：深处的 Rosseland 净扩散通量为零，即使内部辐射能量密度很大。
- $\chi_\nu$ 较小：该频率的平均自由程较长，更有效地输运能量，因此透明窗口主导 Rosseland 平均。

### 13.4 最容易混淆的地方

1. **微观 $\sigma_{\rm cross}$ 与 RL 的宏观 $\sigma_\nu$：** 前者量纲是面积，后者是逆长度。
2. **光学厚与热化：** $\tau\gg1$ 只表示相互作用多；$\tau_*\gg1$ 才表示真吸收足够多。
3. **各向同性与热化：** 多次散射可使方向分布接近各向同性，却未必使 $J_\nu=B_\nu$。
4. **散射吸收线与温度梯度吸收线：** 本题等温，线特征来自表面源函数低于 $B_\nu$，不是更高层温度更低。
5. **$L_\nu$ 与总光度：** 谱线中心每单位频率光度降低，不代表对全频率积分后的总光度按同样比例降低。
6. **方程 (1.103) 的地位：** 它给数量级和 $\sqrt{\epsilon}$ 标度，不给精确系数。
7. **$B_\nu$ 的来源：** 它来自热发射项 $j_{\nu,\rm th}=\alpha_\nu B_\nu$，不是解方程时突然添加的边界常数。
8. **零阶矩为什么给出 $dH/d\tau$：** 原始转移方程左侧已经含有一个 $\mu$。
9. **$1/\sqrt{3}$ 的来源：** 两流方向为满足 $K/J=\langle\mu^2\rangle=1/3$ 而选取。
10. **Rosseland 与 Eddington：** Rosseland 要求深处接近 LTE，用来求温度梯度驱动的能量通量；Eddington 只用角矩闭合，可处理 $J_\nu\neq B_\nu$ 的表面层。

### 13.5 最短物理总结

散射能够延长光子的路径并使方向随机化，但不能单独建立黑体辐射场。真吸收和热发射负责让辐射与局部物质交换能量并热化。低 $\epsilon_\nu$ 使热化深度增大、表面源函数降低；因此强散射谱线即使在等温、半无限介质中也能相对于热连续谱表现为吸收特征。

## 14. 资料与引用

1. Rybicki, G. B., & Lightman, A. P. (2004 reprint), *Radiative Processes in Astrophysics*, §1.7–1.8 and Problem 1.10. 本项目教材文件：`Rybicki和Lightman - 2004 - Radiative processes in astrophysics.pdf`。
2. 本笔记中的随机游走、Rosseland 近似、Eddington 近似和两流边界条件均沿用 RL 第 1 章的符号约定；为避免与微观截面混淆，正文显式区分 $\sigma_{\rm cross}$ 与 RL 的宏观 $\sigma_\nu$。
3. 方程 (1.103) 仅作为数量级估计；习题 1.10 的数值系数属于 Eddington 加两流近似，也不应误认为精确角度转移解。
