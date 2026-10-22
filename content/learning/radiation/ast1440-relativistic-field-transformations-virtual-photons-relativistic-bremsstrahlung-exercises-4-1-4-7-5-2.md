---
title: "AST1440 相对论场变换、虚光子与相对论轫致辐射：RL §4.5、§4.6、§5.4 及习题 4.1、4.7、5.2 详解"
description: "系统推导 Lorentz 场变换、电磁场不变量、高速电荷薄饼场、Fourier 虚光子方法与相对论轫致辐射，并完整解答习题 4.1、4.7 和 5.2。"
date: "2026-10-22"
tags: ["AST1440","Special relativity","Relativistic bremsstrahlung","Virtual photons","Lorentz transformation","Exercises"]
order: 14
draft: false
---

# AST1440 相对论场变换、虚光子与相对论轫致辐射：RL §4.5、§4.6、§5.4 及习题 4.1、4.7、5.2 详解

> 课程：AST1440 — Radiation。  
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§4.5（印刷页 129–130）、§4.6（印刷页 130–135）、§5.4（印刷页 163–165）；Problems 4.1（印刷页 148）、4.7（印刷页 151）、5.2（印刷页 165–166）。  
> 论文联系：Bij et al. (2021), “Kinematics of Crab Giant Pulses,” *ApJ*, 920, 38。  
> 整理日期：2026 年 10 月 22 日。  
> 本文把预习讨论中追问过的中间步骤全部补齐：小角近似、Lorentz boost、电磁场不变量、匀速电荷的“薄饼场”、场脉冲的 Fourier 分解与虚光子、相对论轫致辐射，以及三道指定习题的完整解题链。

## 目录

1. [本周内容的逻辑主线](#1-本周内容的逻辑主线)
2. [符号、角度与单位制](#2-符号角度与单位制)
3. [相对论运动学预备：小角近似与 Doppler 因子](#3-相对论运动学预备小角近似与-doppler-因子)
4. [RL §4.5：电磁场的 Lorentz 变换](#4-rl-45电磁场的-lorentz-变换)
5. [为什么两个电磁场组合不随参考系改变](#5-为什么两个电磁场组合不随参考系改变)
6. [RL §4.6：匀速运动点电荷的电磁场](#6-rl-46匀速运动点电荷的电磁场)
7. [为什么高速电荷的场呈“薄饼状”](#7-为什么高速电荷的场呈薄饼状)
8. [固定观察者看到的场脉冲](#8-固定观察者看到的场脉冲)
9. [Fourier 分解、$K_1(x)$ 与等效虚光子](#9-fourier-分解k_1x-与等效虚光子)
10. [RL §5.4：相对论轫致辐射](#10-rl-54相对论轫致辐射)
11. [热等离子体的总自由—自由发射率](#11-热等离子体的总自由自由发射率)
12. [习题 4.1：相对论球壳的到达时间差](#12-习题-41相对论球壳的到达时间差)
13. [习题 4.7：超光速视运动](#13-习题-47超光速视运动)
14. [Bij et al. (2021) 在算什么](#14-bij-et-al-2021-在算什么)
15. [习题 5.2：高能 X 射线源的质量下限](#15-习题-52高能-x-射线源的质量下限)
16. [English assignment-ready solutions](#16-english-assignment-ready-solutions)
17. [量纲、极限与常见混淆](#17-量纲极限与常见混淆)
18. [复习清单与核心公式](#18-复习清单与核心公式)
19. [参考资料](#19-参考资料)

---


## 1. 本周内容的逻辑主线

这几节看起来分别属于狭义相对论、电磁场和轫致辐射，实际上是一条连续的物理链：

$$
\boxed{
\text{Lorentz 变换}
\longrightarrow
\text{高速电荷的压缩场}
\longrightarrow
\text{短暂电磁脉冲}
\longrightarrow
\text{Fourier 频谱}
\longrightarrow
\text{等效虚光子}
\longrightarrow
\text{相对论轫致辐射}
}.
$$

核心直觉是：一个高速带电粒子经过观察者附近时，观察者看到的不是缓慢变化的 Coulomb 场，而是一个持续时间约为

$$
\Delta t\sim \frac{b}{\gamma v}
$$

的尖锐场脉冲。越短的脉冲含有越高的 Fourier 频率。这个频谱可以形式上重写成一束“等效光子”的频谱，再用 photon-scattering 的语言计算另一个电荷从中取得并重新辐射的能量。这就是 **method of virtual quanta**，也叫 **equivalent photon method**。

本周三道题又把同一个相对论组合

$$
\boxed{1-\beta\cos\theta}
$$

用于三个不同情境：

- Problem 4.1：球壳不同位置光子的到达时间差；
- Problem 4.7：运动源的 apparent transverse velocity；
- Bij et al. (2021)：Crab giant pulse 的 Doppler 频率漂移。

---


## 2. 符号、角度与单位制

### 2.1 基本符号

$$
\beta\equiv\frac{v}{c},
\qquad
\gamma\equiv\frac{1}{\sqrt{1-\beta^2}}.
$$

| 符号 | 含义 |
|---|---|
| $K$ | 实验室参考系 |
| $K'$ | 相对 $K$ 以 $+\mathbf v$ 运动的参考系 |
| $\boldsymbol\beta$ | $\mathbf v/c$ |
| $b$ | impact parameter，未扰动轨道到目标的最近距离 |
| $\theta$ | 必须结合具体图形定义，本文不默认所有章节中的 $\theta$ 相同 |
| $\alpha$ | §7 中相对横向平面的偏角，$\alpha=\pi/2-\theta$ |
| $\omega$ | 角频率，$\omega=2\pi\nu$ |
| $K_1(x)$ | 第一阶第二类修正 Bessel 函数 |
| $D$ | Doppler factor，$D=[\gamma(1-\beta\cos\theta)]^{-1}$ |

### 2.2 本文出现的四种角度

这是最容易混淆的地方：

1. 匀速电荷的场中，$\theta$ 是瞬时位移 $\mathbf R$ 与速度 $\mathbf v$ 的夹角。
2. “薄饼”宽度中，$\alpha=\pi/2-\theta$ 是相对横向平面的偏角。
3. 视运动和 Doppler beaming 中，$\theta$ 是运动方向与观察者视线的夹角。
4. Bij et al. 中，$\delta$ 是散射使光线方向发生的小偏折角。

它们都可能是小角，但不是同一个角。

### 2.3 Gaussian-cgs 单位制

RL 使用 Gaussian-cgs。在此单位制中，$\mathbf E$ 与 $\mathbf B$ 量纲相同，平面电磁波满足 $B=E$。本文的场变换写成

$$
\mathbf B=\boldsymbol\beta\times\mathbf E
$$

时默认 cgs。在 SI 中相应关系是

$$
\mathbf B=\frac{\mathbf v\times\mathbf E}{c^2}.
$$

---


## 3. 相对论运动学预备：小角近似与 Doppler 因子

### 3.1 $1-\beta\cos\theta$ 从哪里来？

当 $\gamma\gg1$ 时，$\beta$ 非常接近 1。由

$$
\gamma^{-2}=1-\beta^2=(1-\beta)(1+\beta)
$$

且 $1+\beta\simeq2$，得到

$$
\boxed{1-\beta\simeq\frac{1}{2\gamma^2}},
\qquad
\beta\simeq1-\frac{1}{2\gamma^2}.
$$

小角 $\theta\ll1$ 时，Taylor 展开是

$$
\boxed{\cos\theta\simeq1-\frac{\theta^2}{2}},
$$

而不是 $\cos\theta=\theta^2/2$。于是

$$
\begin{aligned}
1-\beta\cos\theta
&\simeq
1-\left(1-\frac{1}{2\gamma^2}\right)
\left(1-\frac{\theta^2}{2}\right)\\
&\simeq
\frac{1}{2\gamma^2}+\frac{\theta^2}{2},
\end{aligned}
$$

其中忽略了更小的乘积项 $\theta^2/(4\gamma^2)$。所以

$$
\boxed{
1-\beta\cos\theta
\simeq
\frac{1+\gamma^2\theta^2}{2\gamma^2}
}.
$$

### 3.2 Doppler 因子与 $1/\gamma$ 角尺度

相对论 Doppler factor 是

$$
D=\frac{1}{\gamma(1-\beta\cos\theta)}.
$$

代入上式，得到

$$
\boxed{
D\simeq\frac{2\gamma}{1+\gamma^2\theta^2}
}.
$$

当 $\gamma^2\theta^2\ll1$，$D\simeq2\gamma$；当 $\gamma^2\theta^2\gg1$，$D$ 快速下降。因此变化发生在

$$
\boxed{\theta\sim\frac1\gamma}.
$$

这就是 relativistic beaming cone 的角尺度。注意这里是围绕运动方向 $\theta=0$ 的辐射束，而 §7 的电荷速度场则集中在横向平面 $\theta=\pi/2$ 附近；两者宽度都约为 $1/\gamma$，中心方向却不同。

---


## 4. RL §4.5：电磁场的 Lorentz 变换

### 4.1 “Boost”是什么意思？

相对论语境中的 **Lorentz boost** 通常译作“洛伦兹推进”“洛伦兹推动”或“洛伦兹纯推”。它表示两个惯性系之间只有相对匀速运动、没有额外空间转动的 Lorentz 变换。实际阅读中直接记作“沿某方向做 boost”最不容易混淆。

### 4.2 场变换公式

令 $K'$ 相对 $K$ 以速度 $+\mathbf v$ 运动，把场分解成平行和垂直于 $\mathbf v$ 的分量。由 $K$ 变到 $K'$：

$$
\boxed{
\mathbf E'_\parallel=\mathbf E_\parallel,
\qquad
\mathbf B'_\parallel=\mathbf B_\parallel
}
$$

以及

$$
\boxed{
\mathbf E'_\perp
=\gamma\left(\mathbf E_\perp+\boldsymbol\beta\times\mathbf B\right)
}
$$

$$
\boxed{
\mathbf B'_\perp
=\gamma\left(\mathbf B_\perp-\boldsymbol\beta\times\mathbf E\right)
}.
$$

这些是狭义相对论的电磁场变换。可以直接记结论，但至少要同时记住三件事：

- 先说明谁相对谁以 $+\mathbf v$ 运动，否则叉乘项的正负号会混乱；
- 平行分量不变，垂直分量会混合；
- $\mathbf E$ 和 $\mathbf B$ 不是两种互不相关的场，而是同一个 electromagnetic field tensor 在不同参考系中的分量。

若从 $K'$ 反变换到 $K$，只需令 $\boldsymbol\beta\to-\boldsymbol\beta$。

### 4.3 为什么运动的电场会带出磁场？

在电荷静止系中，只有 Coulomb 电场，$\mathbf B'=0$。换到电荷运动的参考系，场变换把 $\mathbf E'$ 的一部分混合进 $\mathbf B$，因此出现磁场。

RL §4.5 还可用平行板电容器理解：在电容器静止系，表面电荷静止，板间只有电场；从横向运动的参考系看，表面电荷形成 surface current，于是必然产生磁场。所谓“电场变成磁场的一部分”，正是同一电磁场在不同惯性系中的分解不同。

---


## 5. 为什么两个电磁场组合不随参考系改变

### 5.1 两个 Lorentz 不变量

在 Gaussian-cgs 中，电磁场有两个常用不变量：

$$
\boxed{B^2-E^2=\text{invariant}},
\qquad
\boxed{\mathbf E\cdot\mathbf B=\text{invariant}}.
$$

更准确地说，不同单位制可能给第一式补上适当的 $c$；例如 SI 中常写 $E^2-c^2B^2$。

### 5.2 最根本的理由：它们是张量收缩

电场和磁场共同组成 antisymmetric field tensor $F^{\mu\nu}$。Lorentz 变换改变张量的分量，却不改变完全收缩得到的标量：

$$
F_{\mu\nu}F^{\mu\nu}=2(B^2-E^2),
$$

$$
\tilde F_{\mu\nu}F^{\mu\nu}\propto\mathbf E\cdot\mathbf B.
$$

这和四矢量 $x^\mu$ 的各分量会变、但 $x_\mu x^\mu$ 不变是同一逻辑。

### 5.3 用一个简单 boost 直接检验

假设 boost 沿 $x$，并取 $\mathbf E=E_y\hat{\mathbf y}$、$\mathbf B=B_z\hat{\mathbf z}$。则

$$
E_y'=\gamma(E_y-\beta B_z),
\qquad
B_z'=\gamma(B_z-\beta E_y),
$$

具体正负取决于 boost 约定，但平方差为

$$
\begin{aligned}
B_z'^2-E_y'^2
&=\gamma^2\left[(B_z-\beta E_y)^2-(E_y-\beta B_z)^2\right]\\
&=\gamma^2(1-\beta^2)(B_z^2-E_y^2)\\
&=B_z^2-E_y^2.
\end{aligned}
$$

### 5.4 它们能告诉我们什么？

- 若 $\mathbf E\cdot\mathbf B\neq0$，任何参考系中都不可能把其中一个场完全消去。
- 若 $\mathbf E\cdot\mathbf B=0$ 且 $E^2>B^2$，存在纯电场参考系。
- 若 $\mathbf E\cdot\mathbf B=0$ 且 $B^2>E^2$，存在纯磁场参考系。
- 平面电磁波满足 $E^2=B^2$、$\mathbf E\cdot\mathbf B=0$；两个不变量都为零，但场本身并不为零。这叫 null field。

---


## 6. RL §4.6：匀速运动点电荷的电磁场

### 6.1 几何设置

令点电荷 $q$ 在实验室系 $K$ 中沿 $+x$ 方向匀速运动。某时刻电荷位置为 $\mathbf r_q(t)$，场点为 $\mathbf r$，定义瞬时位移

$$
\mathbf R\equiv\mathbf r-\mathbf r_q(t).
$$

$\theta$ 是 $\mathbf R$ 与 $\mathbf v$ 的夹角：

$$
R_\parallel=R\cos\theta,
\qquad
R_\perp=R\sin\theta.
$$

### 6.2 从静止系 Coulomb 场变过去

在电荷静止系 $K'$ 中，

$$
\mathbf E'=q\frac{\mathbf r'}{r'^3},
\qquad
\mathbf B'=0.
$$

比较同一实验室时刻对应的空间分离，Lorentz 变换给出

$$
R_\parallel'=\gamma R_\parallel,
\qquad
R_\perp'=R_\perp.
$$

所以

$$
\begin{aligned}
r'^2
&=\gamma^2R_\parallel^2+R_\perp^2\\
&=R^2(\gamma^2\cos^2\theta+\sin^2\theta)\\
&=\gamma^2R^2(1-\beta^2\sin^2\theta).
\end{aligned}
$$

从 $K'$ 反变到 $K$，因为 $\mathbf B'=0$，有

$$
E_\parallel=E_\parallel',
\qquad
E_\perp=\gamma E_\perp'.
$$

把 Coulomb 场分量和上面的 $r'$ 代入，再合成为沿 $\hat{\mathbf R}$ 的矢量，得到

$$
\boxed{
\mathbf E(\mathbf r,t)
=
\frac{q(1-\beta^2)}
{\left(1-\beta^2\sin^2\theta\right)^{3/2}}
\frac{\hat{\mathbf R}}{R^2}
}.
$$

这不是把 $R$ 简单做 length contraction 就能得到的；分母中的角度依赖同时来自空间分离和场分量的 Lorentz 变换。

### 6.3 磁场为什么是 $\mathbf B=\boldsymbol\beta\times\mathbf E$？

在电荷静止系，$\mathbf B'=0$。由

$$
\mathbf B'_\perp
=\gamma(\mathbf B_\perp-\boldsymbol\beta\times\mathbf E)=0
$$

得到

$$
\mathbf B_\perp=\boldsymbol\beta\times\mathbf E.
$$

同时平行分量满足

$$
B_\parallel=B_\parallel'=0.
$$

因此总磁场全部是垂直分量，可以把下标去掉：

$$
\boxed{\mathbf B=\boldsymbol\beta\times\mathbf E}.
$$

这里“把 $\mathbf B_\perp$ 写成 $\mathbf B$”不是偷换，而是已经用 $B_\parallel=0$ 证明了总场没有平行分量。其大小为

$$
B=\beta E\sin\theta=\beta E_\perp.
$$

在横向平面 $\theta=\pi/2$，$B=\beta E$；超相对论极限 $\beta\simeq1$ 时，$B\simeq E$。

---


## 7. 为什么高速电荷的场呈“薄饼状”

从 §6 的场强公式看两个特殊方向。

沿运动方向，$\theta=0$ 或 $\pi$：

$$
E_\parallel^{\rm direction}
=\frac{q(1-\beta^2)}{R^2}
=\frac{q}{\gamma^2R^2}.
$$

在横向平面，$\theta=\pi/2$：

$$
E_{\rm transverse\ plane}
=\frac{q(1-\beta^2)}{(1-\beta^2)^{3/2}R^2}
=\frac{\gamma q}{R^2}.
$$

所以横向场与前后方向场之比是

$$
\boxed{
\frac{E(\pi/2)}{E(0)}=\gamma^3
}.
$$

因此“薄饼状”不仅是因为 $\theta=0$ 的场被压低，还因为 $\theta=\pi/2$ 附近的场被增强。

为了求薄饼的角宽，令

$$
\alpha\equiv\frac{\pi}{2}-\theta,
\qquad |\alpha|\ll1.
$$

此时 $\sin\theta=\cos\alpha\simeq1-\alpha^2/2$，所以

$$
1-\beta^2\sin^2\theta
\simeq
\gamma^{-2}+\alpha^2.
$$

场强变成

$$
\boxed{
E(\alpha)
\simeq
\frac{\gamma q}{R^2}
\left(1+\gamma^2\alpha^2\right)^{-3/2}
}.
$$

当 $\gamma^2\alpha^2\sim1$ 时场开始显著下降，因此

$$
\boxed{|\alpha|\sim\frac1\gamma}.
$$

所谓“$\sim1/\gamma$”指的是围绕横向平面 $\theta=\pi/2$ 的半角宽度，不是说 $\theta$ 本身等于 $1/\gamma$。

---


## 8. 固定观察者看到的场脉冲

### 8.1 几何

令电荷沿 $x$ 轴运动：

$$
\mathbf r_q(t)=(vt,0,0),
$$

观察者位于

$$
\mathbf r_{\rm obs}=(0,b,0).
$$

若 $t=0$ 是最近接时刻，则

$$
\mathbf R=(-vt,b,0),
\qquad
R^2=v^2t^2+b^2.
$$

并且

$$
\sin\theta=\frac{b}{R}.
$$

### 8.2 逐步代入场强公式

场的 $y$ 分量，即相对运动方向的横向分量，是

$$
E_\perp=E\frac{b}{R}.
$$

先化简角度因子：

$$
1-\beta^2\sin^2\theta
=1-\beta^2\frac{b^2}{R^2}
=\frac{v^2t^2+b^2/\gamma^2}{R^2}.
$$

代入 §6 的场强：

$$
\begin{aligned}
E_\perp(t)
&=
\frac{q\gamma^{-2}}{R^2}
\left[
\frac{R^2}{v^2t^2+b^2/\gamma^2}
\right]^{3/2}
\frac{b}{R}\\
&=
\frac{qb/\gamma^2}
{\left(v^2t^2+b^2/\gamma^2\right)^{3/2}}.
\end{aligned}
$$

把分母提出 $\gamma^{-3}$，得到最常用形式：

$$
\boxed{
E_\perp(t)
=
\frac{q\gamma b}
{\left(\gamma^2v^2t^2+b^2\right)^{3/2}}
}.
$$

在 $t=0$，

$$
E_{\perp,\max}=\frac{q\gamma}{b^2}.
$$

当两项 $\gamma^2v^2t^2$ 与 $b^2$ 可比时脉冲明显下降，因此持续时间量级为

$$
\boxed{\Delta t\sim\frac{b}{\gamma v}}.
$$

这同时说明：$\gamma$ 越大，脉冲峰值越高、时间越短。

### 8.3 这是不是辐射？

匀速电荷没有加速度，这个场的远区衰减仍是 $1/R^2$；它是 velocity field，不是可独立传播到无穷远的 $1/R$ radiation field。因此不能因为局部有 $E\simeq B$ 就断言它是真实自由电磁波。

但当高速电荷掠过另一个粒子时，这个短促的外场会加速目标粒子；目标粒子的再辐射才是轫致辐射。等效光子方法正是用类光子的语言描述这个入射场脉冲。

---


## 9. Fourier 分解、$K_1(x)$ 与等效虚光子

### 9.1 为什么短脉冲含有高频成分？

任何局域时间信号都可以写成 Fourier 分量的叠加。若脉冲宽度为 $\Delta t$，相位在脉冲内变化不大要求

$$
\omega\Delta t\lesssim1.
$$

因此主要频率延伸到

$$
\boxed{
\omega_{\rm cut}'\sim\frac1{\Delta t}
\sim\frac{\gamma v}{b}
}.
$$

这里的撇号先表示电子静止系中看到的入射离子场。高频 Fourier component 对应较高的等效光子能量 $\hbar\omega'$，不是更高的光子速度；真实光子在真空中都以 $c$ 传播。

### 9.2 $K_1(x)$ 是什么，怎样出现？

取 Fourier 约定

$$
\widetilde E_\perp(\omega)
=\frac{1}{2\pi}
\int_{-\infty}^{\infty}E_\perp(t)e^{i\omega t}\,dt.
$$

把 §8 的场脉冲代入，并令

$$
u=\frac{\gamma vt}{b},
\qquad
x=\frac{b\omega}{\gamma v},
$$

得到

$$
\widetilde E_\perp(\omega)
=\frac{q}{2\pi bv}
\int_{-\infty}^{\infty}
\frac{e^{ixu}}{(1+u^2)^{3/2}}\,du.
$$

标准积分恒等式为

$$
\int_{-\infty}^{\infty}
\frac{e^{ixu}}{(1+u^2)^{3/2}}\,du
=2xK_1(x),
$$

所以

$$
\boxed{
\widetilde E_\perp(\omega)
=\frac{q}{\pi bv}xK_1(x)
},
\qquad
x=\frac{b\omega}{\gamma v}.
$$

$K_1(x)$ 是 **modified Bessel function of the second kind of order 1**，即第一阶第二类修正 Bessel 函数。这里出现它不是额外物理假设，而是这个特定脉冲形状的 Fourier 积分结果。

它的两个重要渐近形式是

$$
K_1(x)\simeq\frac1x,
\qquad x\ll1,
$$

$$
K_1(x)\simeq
\sqrt{\frac{\pi}{2x}}e^{-x},
\qquad x\gg1.
$$

因此 $xK_1(x)$ 在低频近似常数，在 $x\gtrsim1$ 后指数下降。这再次给出 cutoff 条件 $x\sim1$。

### 9.3 为什么可以当作一束虚光子？

当 $\gamma\gg1$ 时，脉冲中占主导的是横向场，而且

$$
\mathbf E\perp\mathbf B,
\qquad
B\simeq E.
$$

这些局部关系很像平面电磁波。我们可以：

1. 将脉冲分解为各个 $\omega$ 的 Fourier component；
2. 将每个频率区间的场能量除以 $\hbar\omega$；
3. 把结果定义为等效光子数谱；
4. 用已知的 photon-scattering cross section 计算目标粒子的响应。

这是一种计算重写，不表示源真的发出了一束可以被远处探测器自由截获的实光子。它们称为 **virtual photons**，因为这些场模仍附着于运动电荷，通常不是满足自由光子能量—动量关系的 on-shell 态。

因此准确说法是：整个场脉冲的 Fourier spectrum 可以按“等效虚光子束”处理；高频分量是高能虚光子分量。不是“只有高频才能当光子”，也不是“高频光子跑得更快”。

---


## 10. RL §5.4：相对论轫致辐射

### 10.1 计算策略

在实验室系中，电子以 $\gamma\gg1$ 掠过近似静止的离子。直接求相对论弯轨和辐射很麻烦，因此换到电子瞬时静止系：

- 电子暂时静止；
- 离子以相对论速度掠过；
- 离子的压缩 Coulomb 场是一个短电磁脉冲；
- 把脉冲视为等效虚光子束；
- 电子对这些光子做 Thomson scattering；
- 最后变回实验室系。

若电子静止系中的光子能量不再满足 $\hbar\omega'\ll m_ec^2$，则 Thomson 近似失效，应使用 Klein–Nishina cross section，并考虑 recoil。

### 10.2 入射脉冲的能谱

Fourier 场幅给出单位面积、单位角频率的入射能量谱。乘以 Thomson cross section

$$
\sigma_T=\frac{8\pi e^4}{3m_e^2c^4}
$$

后，得到一次 impact parameter 为 $b$ 的碰撞所辐射的频谱。RL 的结果可写为

$$
\boxed{
\frac{dW}{d\omega}
=
\frac{8Z^2e^6}
{3\pi b^2c^5m_e^2}
x^2K_1^2(x)
},
\qquad
\boxed{x=\frac{b\omega}{\gamma^2c}}.
$$

这里分母是 $c^5$。若写成 $c^3$，量纲不会成为“能量乘时间”，因此不能是 $dW/d\omega$。

为什么 $x$ 中是 $\gamma^2$？

- 第一个 $\gamma$ 来自电子静止系中场脉冲的时间压缩，$\omega'_{\rm cut}\sim\gamma c/b$；
- 变回实验室系时，前向辐射的频率再获得约一个 $\gamma$ 的 Doppler boost；
- 因而实验室系 cutoff 达到 $\omega_{\rm cut}\sim\gamma^2c/b$。

更正式地，横向 impact parameter 满足 $b=b'$；对相应光子束，能量和频率获得相同 Doppler 因子，所以 $dW/d\omega$ 的形式可直接联系两个参考系，而频率的典型变换给出 $\omega\sim\gamma\omega'$。

### 10.3 为什么 cutoff 是 $\omega_{\max}\sim\gamma^2c/b$？

由 $K_1$ 的渐近行为：

- $x\ll1$ 时，$x^2K_1^2(x)\to1$，低频谱近似平坦；
- $x\gg1$ 时，$K_1(x)\propto e^{-x}$，频谱指数压低。

转折发生在 $x\sim1$，所以

$$
\boxed{
\omega_{\max}\sim\frac{\gamma^2c}{b}
}.
$$

这里的“最大频率”不是严格硬截断，而是频谱开始被指数抑制的特征频率。

### 10.4 对 impact parameter 积分

对单位体积、单位时间内的所有电子—离子相遇积分，低频近似得到

$$
\frac{dW}{dt\,dV\,d\omega}
\simeq
\frac{16Z^2e^6n_en_i}{3c^3m_e^2}
\ln\left(
\frac{0.68\gamma^2c}{\omega b_{\min}}
\right).
$$

对数来自 $2\pi b\,db$ 的碰撞几何因子乘以单次碰撞谱的 $b^{-2}$：

$$
2\pi b\,db\times b^{-2}\propto\frac{db}{b}.
$$

$b_{\min}$ 由经典近距散射、量子 de Broglie 尺度或 recoil 条件中最严格者决定；上限则由给定频率下的 adiabatic cutoff 决定。

---


## 11. 热等离子体的总自由—自由发射率

### 11.1 非相对论结果怎样积分出来？

热轫致辐射的频率体发射率近似为

$$
\epsilon_\nu^{\rm ff}
=6.8\times10^{-38}
Z^2n_en_iT^{-1/2}
e^{-h\nu/kT}\bar g_{\rm ff},
$$

单位是 ${\rm erg\,s^{-1}\,cm^{-3}\,Hz^{-1}}$。若把 Gaunt factor 的频率变化吸收到平均值 $\bar g_B$ 中，令

$$
u=\frac{h\nu}{kT},
\qquad
d\nu=\frac{kT}{h}\,du,
$$

则

$$
\int_0^\infty e^{-h\nu/kT}\,d\nu
=\frac{kT}{h}\int_0^\infty e^{-u}\,du
=\frac{kT}{h}.
$$

因此 $T^{-1/2}$ 变成 $T^{1/2}$，得到

$$
\epsilon_{\rm ff,NR}
\simeq
1.4\times10^{-27}
T^{1/2}Z^2n_en_i\bar g_B.
$$

### 11.2 一阶相对论修正

RL 给出的近似总发射率为

$$
\boxed{
\epsilon_{\rm ff}
\simeq
1.4\times10^{-27}
T^{1/2}Z^2n_en_i\bar g_B
\left(1+4.4\times10^{-10}T\right)
}
$$

，单位为 ${\rm erg\,s^{-1}\,cm^{-3}}$。

定义无量纲电子温度

$$
\Theta_e\equiv\frac{kT}{m_ec^2},
$$

则

$$
4.4\times10^{-10}T\simeq2.6\Theta_e.
$$

所以括号是电子开始相对论化时的首阶增强修正。它不是任意经验乘数，也不适合外推到 $\Theta_e\gg1$ 的极端相对论温度；在那里需要完整 relativistic thermal bremsstrahlung 公式。

---


## 12. 习题 4.1：相对论球壳的到达时间差

### 12.1 物理图像

考虑半径为 $R$、Lorentz factor 为 $\gamma$ 的球壳同时发出一个瞬时闪光。由于 relativistic beaming，观察者主要看到视线周围

$$
\theta\lesssim\frac1\gamma
$$

的区域。

球壳正对观察者的点与偏离视线角 $\theta$ 的点到观察者的路程差是

$$
\Delta \ell=R-R\cos\theta=R(1-\cos\theta).
$$

因此到达时间差为

$$
\Delta t_{\rm ang}
=\frac{R(1-\cos\theta)}{c}
\simeq\frac{R\theta^2}{2c}.
$$

令 $\theta\sim1/\gamma$，得到

$$
\boxed{
\Delta t_{\rm ang}\sim\frac{R}{2\gamma^2c}
}.
$$

### 12.2 为什么最后是不等号？

观测到的时间宽度可能还包含壳层本征发射时长、径向厚度、仪器响应等正贡献。因此通常有

$$
\Delta t_{\rm obs}\gtrsim\Delta t_{\rm ang}
=\frac{R}{2\gamma^2c}.
$$

整理得

$$
\boxed{
R\lesssim2\gamma^2c\Delta t_{\rm obs}
}.
$$

标度关系本身给的是数量级相等；当用观测到的总时宽约束 $R$ 时，因为 curvature delay 不能超过总时宽，才变成上限。只有当 angular time 是唯一主导时间尺度时，才近似取等号。

若发射只来自远小于 $1/\gamma$ 的 patch，这个约束也会改变；所以它依赖“可见区大小约为 beaming cone”这一假设。

---


## 13. 习题 4.7：超光速视运动

### 13.1 我们在算什么速度？

这里计算的是天球平面上两个观测位置之差，除以相应两个信号的**到达时间差**：

$$
v_{\rm app}
\equiv
\frac{\text{projected displacement on sky}}
{\text{arrival-time interval}}.
$$

它叫 apparent transverse velocity，不是物体在任何局部惯性系中的真实速度。

### 13.2 推导

运动源在实验室系相隔 $\Delta t$ 发出两个光信号。源的真实位移是 $v\Delta t$，在天球平面上的投影是

$$
\Delta x_\perp=v\Delta t\sin\theta.
$$

第二次发光时，源又向观察者靠近了

$$
v\Delta t\cos\theta.
$$

所以第二个光子少走这一段路，其到达时间间隔不是 $\Delta t$，而是

$$
\Delta t_{\rm obs}
=\Delta t-\frac{v\Delta t\cos\theta}{c}
=\Delta t(1-\beta\cos\theta).
$$

于是

$$
\boxed{
v_{\rm app}
=
\frac{v\sin\theta}
{1-\beta\cos\theta}
}.
$$

分子用天球投影距离，分母用信号到达间隔，是因为望远镜实际看到的正是“天空位置随观测时间的变化”。

### 13.3 最大 apparent speed

令

$$
f(\theta)=\frac{\beta\sin\theta}{1-\beta\cos\theta}.
$$

求导并令分子为零：

$$
\frac{df}{d\theta}
\propto\cos\theta-\beta=0.
$$

因此

$$
\cos\theta_{\max}=\beta,
\qquad
\sin\theta_{\max}=\frac1\gamma.
$$

代回得

$$
\boxed{
v_{\rm app,max}=\gamma v
}.
$$

它可以大于 $c$，但没有物质、能量或信息横向超光速传播；这是 light-travel-time compression 造成的几何表观效应。

---


## 14. Bij et al. (2021) 在算什么

### 14.1 论文目标

Bij et al. 研究 Crab pulsar giant pulses 中相邻 nanoshots 的频率漂移。他们提出一种可能解释：辐射来自 relativistically moving plasma；光线经过 Crab Nebula 中的散射屏幕后，以略微不同方向进入视线，因而取样到不同的 Doppler factor。

他们不是在测量 Problem 4.7 的 $v_{\rm app}$。两者相似，是因为都含有关键分母

$$
1-\beta\cos\theta.
$$

### 14.2 散射时延怎样给出偏折角？

设散射屏到脉冲星的有效距离为 $d$，光路偏折小角为 $\delta$。斜路径长度约为 $d/\cos\delta$，直路径是 $d$，所以

$$
c\tau
=\frac{d}{\cos\delta}-d.
$$

用

$$
\cos\delta\simeq1-\frac{\delta^2}{2},
\qquad
\frac1{\cos\delta}\simeq1+\frac{\delta^2}{2},
$$

得到

$$
\boxed{
c\tau\simeq\frac{d\delta^2}{2}
},
\qquad
\boxed{
\delta\simeq\sqrt{\frac{2c\tau}{d}}
}.
$$

这只是“弯路比直路多走了多少”的小角几何。

取 $d\sim1\,{\rm pc}$、$\tau\sim0.5\,{\rm ms}$，得到

$$
\delta\sim3\times10^{-6}\ \mathrm{rad}
\sim0.6\ \mathrm{arcsec}.
$$

### 14.3 频率漂移如何约束 $\gamma$？

观测频率满足

$$
\nu=D\nu',
\qquad
D\simeq\frac{2\gamma}{1+\gamma^2\theta^2}.
$$

角度改变 $\delta$ 时，

$$
\frac{d\ln D}{d\theta}
=-\frac{2\gamma^2\theta}{1+\gamma^2\theta^2}.
$$

若视线位于 beaming cone 边缘，$\theta_r\sim1/\gamma$，则

$$
\left|\frac{d\ln D}{d\theta}\right|
\simeq\gamma.
$$

所以

$$
\boxed{
\left|\frac{\Delta\nu}{\nu}\right|
\simeq\gamma\delta
}.
$$

若典型 fractional drift 约为 $0.05$，则

$$
\gamma\sim\frac{0.05}{3\times10^{-6}}
\sim10^4.
$$

这是条件性推断：它依赖于“漂移来自散射后的 Doppler 取样”和“视线位于 beam edge”等假设。论文也讨论 nanoshot interference 等替代解释；因此 $\gamma\sim10^4$ 不是不依赖模型的直接测量。

---


## 15. 习题 5.2：高能 X 射线源的质量下限

### 15.1 题目给出的观测量与假设

Figure 5.5 的光谱在约

$$
E_{\rm cut}\sim100\ \mathrm{keV}
$$

处截断。若解释为 thermal bremsstrahlung，则

$$
kT\sim E_{\rm cut},
\qquad
T\simeq1.16\times10^9\ \mathrm{K}.
$$

采用题目量级：

$$
F\sim10^{-8}\ \mathrm{erg\,s^{-1}\,cm^{-2}},
\qquad
d\sim10\ \mathrm{kpc}.
$$

为了避免与 luminosity 混淆，本文用 $d$ 表示距离。各向同性 luminosity 是

$$
\boxed{
L_X=4\pi d^2F
\simeq1.20\times10^{38}\ \mathrm{erg\,s^{-1}}
}.
$$

### 15.2 什么是静水平衡？

静水平衡（hydrostatic equilibrium）是局部压力梯度向外的力与引力向内的力平衡：

$$
\boxed{
\frac{dP}{dr}=-\rho\frac{GM(r)}{r^2}
}.
$$

若热气体包围质量 $M$ 的致密天体，并取尺度估计

$$
\frac{dP}{dr}\sim\frac{P}{R},
\qquad
M(r)\sim M,
$$

则

$$
\frac{P}{R}\sim\rho\frac{GM}{R^2}.
$$

理想气体满足

$$
P=\frac{\rho kT}{\mu m_p},
$$

所以

$$
\boxed{
\frac{kT}{\mu m_p}\sim\frac{GM}{R}
}.
$$

左边是单位质量的热能尺度，右边是单位质量的引力势能尺度。

$\mu$ 是 **mean molecular weight**，平均每个自由粒子所对应的质量，以 $m_p$ 为单位定义：

$$
n_{\rm tot}=\frac{\rho}{\mu m_p}.
$$

完全电离纯氢中，每个质子对应一个质子和一个电子，共两个自由粒子，所以 $\mu\simeq0.5$。采用宇宙丰度的完全电离气体时常取 $\mu\simeq0.6$。

因此发射区尺度估计为

$$
\boxed{
R\sim\frac{GM\mu m_p}{kT}
}.
$$

令 $m=M/M_\odot$，取纯氢 $\mu=0.5$：

$$
\boxed{
R\simeq6.9\times10^8
m
\left(\frac{E_{\rm cut}}{100\,{\rm keV}}\right)^{-1}
{\rm cm}
}.
$$

几何和边界条件会改变数量级为 1 的系数，但不改变主要标度。

### 15.3 用 luminosity 求密度

假设发射区是厚度 $\Delta R\sim R$ 的热 plasma，体积

$$
V\sim4\pi R^3.
$$

对完全电离氢，$n_e=n_i=n$。总自由—自由发射率写成

$$
\epsilon_{\rm ff}=\Lambda_{\rm ff}(T)n^2,
$$

其中

$$
\Lambda_{\rm ff}(T)
=1.4\times10^{-27}T^{1/2}\bar g_B
\left(1+4.4\times10^{-10}T\right).
$$

取 $\bar g_B=1.2$，在 $T=1.16\times10^9\,{\rm K}$，

$$
1+4.4\times10^{-10}T\simeq1.51,
$$

$$
\Lambda_{\rm ff}\simeq8.65\times10^{-23}
\ \mathrm{erg\,s^{-1}\,cm^3}.
$$

由 $L_X\sim\epsilon_{\rm ff}V$：

$$
n=\left(
\frac{L_X}{4\pi R^3\Lambda_{\rm ff}}
\right)^{1/2}.
$$

代入数值得

$$
\boxed{
n\simeq1.82\times10^{16}m^{-3/2}\ \mathrm{cm^{-3}}
}.
$$

质量密度为

$$
\boxed{
\rho\simeq m_pn
\simeq3.04\times10^{-8}m^{-3/2}\ \mathrm{g\,cm^{-3}}
}.
$$

### 15.4 自由—自由吸收是否重要？

在 $h\nu\sim kT$ 处，使用

$$
\alpha_\nu^{\rm ff}
=3.7\times10^8T^{-1/2}n^2\nu^{-3}
\left(1-e^{-h\nu/kT}\right)\bar g_{\rm ff},
$$

取 $\bar g_{\rm ff}\simeq1.2$，可得

$$
\boxed{
\tau_{\rm ff}=\alpha_\nu^{\rm ff}R
\simeq1.3\times10^{-13}m^{-2}
}.
$$

所以在 X 射线峰附近，真正的 free-free absorption 极小。

### 15.5 电子散射是否重要？

Thomson optical depth 是

$$
\tau_T=n\sigma_TR.
$$

代入上面的 $n$ 与 $R$：

$$
\boxed{
\tau_T\simeq8.4m^{-1/2}
}.
$$

若要求光子基本不经散射直接逃逸，即

$$
\tau_T\lesssim1,
$$

则

$$
m\gtrsim(8.4)^2\simeq70.
$$

考虑几何、$\mu$、Gaunt factor 与相对论修正的不确定性，结论应报告为

$$
\boxed{M\gtrsim10^2M_\odot\quad\text{（数量级）}}.
$$

这不是说 Thomson scattering 会像吸收一样销毁光子。若只问是否达到真正热化，更合适的是 effective optical depth

$$
\tau_{\rm eff}
\sim\sqrt{3\tau_{\rm abs}(\tau_{\rm abs}+\tau_T)}.
$$

由于 $\tau_{\rm ff}$ 极小，即使 $\tau_T>1$，介质也未必达到吸收—发射的 LTE 热化。然而在 $kT\sim100\,{\rm keV}$ 时，每次 Compton scattering 的能量交换不能忽略；若 $\tau_T\gtrsim1$，光谱会扩散并被 Comptonized，不再是“未经处理直接逃逸的 optically thin thermal bremsstrahlung”。因此 electron scattering 在本题中确实提供关键自洽性约束。

---


## 16. English assignment-ready solutions

### Problem 4.1

For an instantaneously emitting relativistic spherical shell of radius $R$, relativistic beaming restricts the visible region to angles $\theta\lesssim\gamma^{-1}$ about the line of sight. A photon emitted at angle $\theta$ travels an extra distance

$$
\Delta\ell=R(1-\cos\theta)simeq\frac{R\theta^2}{2}.
$$

The corresponding angular arrival-time spread is therefore

$$
\Delta t_{\rm ang}simeq\frac{R\theta^2}{2c}
\sim\frac{R}{2\gamma^2c}.
$$

Since any intrinsic emission duration or radial thickness can only broaden the observed pulse,

$$
\Delta t_{\rm obs}\gtrsim\Delta t_{\rm ang},
$$

and hence

$$
\boxed{R\lesssim2\gamma^2c\Delta t_{\rm obs}}.
$$

Equality holds to order unity only when the angular light-travel time dominates the observed duration.

### Problem 4.7

Consider two photons emitted by a source separated by a laboratory-frame time $\Delta t$. During that interval the source moves a projected distance

$$
\Delta x_\perp=v\Delta t\sin\theta.
$$

The second photon is emitted closer to the observer by $v\Delta t\cos\theta$, so the observed arrival-time interval is

$$
\Delta t_{\rm obs}
=\Delta t-\frac{v\Delta t\cos\theta}{c}
=\Delta t(1-\beta\cos\theta).
$$

Therefore the apparent transverse velocity is

$$
\boxed{
v_{\rm app}
=\frac{v\sin\theta}{1-\beta\cos\theta}
}.
$$

Maximizing this expression with respect to $\theta$ gives $\cos\theta=\beta$ and $\sin\theta=\gamma^{-1}$. Thus

$$
\boxed{v_{\rm app,max}=\gamma v}.
$$

This apparent superluminal motion is caused by light-travel-time compression and does not represent superluminal transport of matter or information.

### Problem 5.2

The cutoff near $100\,{\rm keV}$ implies

$$
kT\sim100\,{\rm keV},
\qquad
T\simeq1.16\times10^9\,{\rm K}.
$$

For $F\simeq10^{-8}\,{\rm erg\,s^{-1}\,cm^{-2}}$ and $d\simeq10\,{\rm kpc}$, the luminosity is

$$
L_X=4\pi d^2F\simeq1.20\times10^{38}\,{\rm erg\,s^{-1}}.
$$

Hydrostatic balance gives, to order unity,

$$
\frac{kT}{\mu m_p}\sim\frac{GM}{R}.
$$

For fully ionized hydrogen, $\mu=0.5$, so with $m=M/M_\odot$,

$$
R\simeq6.9\times10^8m\ \mathrm{cm}.
$$

Assuming a shell with $\Delta R\sim R$, its volume is $V\sim4\pi R^3$. The relativistically corrected frequency-integrated free-free emissivity is

$$
\epsilon_{\rm ff}
=1.4\times10^{-27}T^{1/2}n^2\bar g_B
\left(1+4.4\times10^{-10}T\right).
$$

Taking $\bar g_B=1.2$ and using $L_X\simeq\epsilon_{\rm ff}V$ gives

$$
n\simeq1.82\times10^{16}m^{-3/2}\ \mathrm{cm^{-3}},
$$

$$
\rho\simeq m_pn
\simeq3.04\times10^{-8}m^{-3/2}\ \mathrm{g\,cm^{-3}}.
$$

At $h\nu\sim kT$, the free-free absorption depth is only

$$
\tau_{\rm ff}\sim1.3\times10^{-13}m^{-2},
$$

whereas the electron-scattering depth is

$$
\tau_T=n\sigma_TR\simeq8.4m^{-1/2}.
$$

Requiring $\tau_T\lesssim1$ so that the observed spectrum can escape without strong diffusion and Comptonization yields

$$
M\gtrsim70M_\odot.
$$

Given the order-unity geometric and plasma-composition uncertainties, the appropriate conclusion is a characteristic lower limit of order

$$
\boxed{M\gtrsim10^2M_\odot}.
$$

Free-free absorption is negligible, but electron scattering is an important consistency constraint.

---


## 17. 量纲、极限与常见混淆

### 17.1 量纲检查

1. 场脉冲时间：

$$
\frac{b}{\gamma v}\rightarrow\frac{{\rm length}}{{\rm length/time}}={\rm time}.
$$

2. cutoff：

$$
\frac{\gamma^2c}{b}\rightarrow {\rm time}^{-1}.
$$

3. Problem 4.1：

$$
2\gamma^2c\Delta t\rightarrow{\rm length}.
$$

4. 静水平衡半径：

$$
\frac{GM\mu m_p}{kT}\longrightarrow\mathrm{length}.
$$

5. RL §5.4 单次碰撞频谱中的 $c^5$：$dW/d\omega$ 的量纲是 energy $\times$ time；$c^5$ 正好给出这一量纲，$c^3$ 不对。

### 17.2 极限检查

- $\beta\to0$：运动电荷场回到 Coulomb 场，$\mathbf B\to0$。
- $\theta=0$：$E=q/\gamma^2R^2$，前后方向被压低。
- $\theta=\pi/2$：$E=\gamma q/R^2$，横向场增强。
- $x\ll1$：$xK_1(x)\to1$，Fourier 场幅和低频能谱近似平坦。
- $x\gg1$：$K_1(x)$ 指数下降，出现软 cutoff。
- Problem 4.7 中 $\beta\ll1$：分母约为 1，$v_{\rm app}\to v\sin\theta$，恢复普通投影速度。

### 17.3 常见混淆

| 容易混淆的说法 | 准确说法 |
|---|---|
| $\cos\theta=\theta^2/2$ | 小角时 $\cos\theta\simeq1-\theta^2/2$ |
| 薄饼宽度表示 $\theta\sim1/\gamma$ | 对速度场，应是 $|\pi/2-\theta|\sim1/\gamma$ |
| 所有 $1/\gamma$ 都是同一个角 | 速度场薄饼与辐射 beaming cone 中心方向不同 |
| 高频光子速度更高 | 真空中所有真实光子速度都是 $c$；高频表示能量更高 |
| Fourier component 就是真实光子 | 等效虚光子是计算表示，通常不是自由 on-shell 光子 |
| 匀速电荷的薄饼场就是辐射 | 它仍是 $1/R^2$ velocity field；目标被加速后的再辐射才是 radiation |
| $B_\perp$ 可无条件写成 $B$ | 此处因为 $B_\parallel=B_\parallel'=0$，所以才可以 |
| $R\sim2\gamma^2c\Delta t$ 自动变成上限 | 还需使用 $\Delta t_{\rm obs}\ge\Delta t_{\rm ang}$ |
| $v_{\rm app}$ 是物体真速度 | 它是天空投影位移除以光子到达时间差 |
| $\tau_T>1$ 必然已经 LTE 热化 | 散射不创造/销毁光子；热化取决于 effective absorption，但散射会引起扩散与 Comptonization |
| cgs 的 $\mathbf B=\boldsymbol\beta\times\mathbf E$ 可直接抄到 SI | SI 中是 $\mathbf B=\mathbf v\times\mathbf E/c^2$ |

---


## 18. 复习清单与核心公式

### 18.1 能否不看笔记回答？

- [ ] 能从 $\beta\simeq1-1/(2\gamma^2)$ 和 $\cos\theta\simeq1-\theta^2/2$ 推出 $1-\beta\cos\theta$。
- [ ] 能说明 Lorentz boost 是什么，并写出电磁场平行、垂直分量的变换。
- [ ] 能解释 $B^2-E^2$ 和 $\mathbf E\cdot\mathbf B$ 为什么是不变量。
- [ ] 能从静止系 Coulomb 场推到匀速电荷的角度依赖场。
- [ ] 能区分横向薄饼 $|\pi/2-\theta|\sim1/\gamma$ 与前向辐射束 $\theta\sim1/\gamma$。
- [ ] 能从几何写出 $E_\perp(t)$，并读出峰值与脉冲宽度。
- [ ] 能解释 $K_1(x)$ 是 Fourier 积分的结果，并记住其小、大 $x$ 极限。
- [ ] 能准确区分 Fourier mode、等效虚光子与真实光子。
- [ ] 能解释相对论轫致辐射 cutoff 中两个 $\gamma$ 的来源。
- [ ] 能独立推导三道习题，而不是只背最终公式。
- [ ] 能说清 Bij et al. 用散射角与 Doppler 漂移约束的是 $\gamma$，不是 $v_{\rm app}$。
- [ ] 能在 Problem 5.2 中区分 free-free absorption、Thomson scattering 与 effective thermalization。

### 18.2 一页核心公式

$$
1-\beta\cos\theta
\simeq\frac{1+\gamma^2\theta^2}{2\gamma^2},
\qquad
D\simeq\frac{2\gamma}{1+\gamma^2\theta^2}.
$$

$$
\mathbf E'_\perp
=\gamma(\mathbf E_\perp+\boldsymbol\beta\times\mathbf B),
\qquad
\mathbf B'_\perp
=\gamma(\mathbf B_\perp-\boldsymbol\beta\times\mathbf E).
$$

$$
B^2-E^2=\text{invariant},
\qquad
\mathbf E\cdot\mathbf B=\text{invariant}.
$$

$$
\mathbf E
=\frac{q(1-\beta^2)}{(1-\beta^2\sin^2\theta)^{3/2}}
\frac{\hat{\mathbf R}}{R^2},
\qquad
\mathbf B=\boldsymbol\beta\times\mathbf E.
$$

$$
E_\perp(t)
=\frac{q\gamma b}{(\gamma^2v^2t^2+b^2)^{3/2}},
\qquad
\Delta t\sim\frac{b}{\gamma v}.
$$

$$
\widetilde E_\perp(\omega)
=\frac{q}{\pi bv}xK_1(x),
\qquad
x=\frac{b\omega}{\gamma v}.
$$

$$
\frac{dW}{d\omega}
=\frac{8Z^2e^6}{3\pi b^2c^5m_e^2}
x^2K_1^2(x),
\qquad
x=\frac{b\omega}{\gamma^2c}.
$$

$$
\omega_{\rm cut}\sim\frac{\gamma^2c}{b}.
$$

$$
R\lesssim2\gamma^2c\Delta t_{\rm obs},
\qquad
v_{\rm app}=\frac{v\sin\theta}{1-\beta\cos\theta}.
$$

$$
\epsilon_{\rm ff}
=1.4\times10^{-27}T^{1/2}Z^2n_en_i\bar g_B
\left(1+4.4\times10^{-10}T\right).
$$

---


## 19. 参考资料

1. Rybicki, G. B., & Lightman, A. P., *Radiative Processes in Astrophysics*, §§4.5, 4.6, 5.4 and Problems 4.1, 4.7, 5.2.
2. Bij, A., Lin, H.-H., Li, D., et al. 2021, “Kinematics of Crab Giant Pulses,” *The Astrophysical Journal*, **920**, 38. [arXiv:2105.08851](https://arxiv.org/abs/2105.08851), [DOI: 10.3847/1538-4357/ac1589](https://doi.org/10.3847/1538-4357/ac1589).
