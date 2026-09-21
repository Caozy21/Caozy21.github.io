---
title: "AST1440 Einstein 系数与吸收、发射线：RL §1.6 及习题 1.7–1.9 详解"
description: "两能级原子、Einstein 系数、吸收与发射线、等温转移、P Cygni 轮廓，以及习题 1.7–1.9 的完整推导。"
date: "2026-09-21"
tags: [AST1440, Einstein coefficients, Spectral lines, Exercises]
order: 4
draft: false
---

> 课程：AST1440 — Radiation；本次主题为 Absorption and Emission Lines。  
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§1.6，印刷页 27–33；习题 1.7–1.9，印刷页 47–49。  
> 整理日期：2026 年 9 月 21 日。  
> 本文按物理依赖关系整理教材与讨论内容。所有追问均放回对应概念处：为什么跃迁率含 $\bar J$、受激辐射修正从哪里来、为什么 $j_\nu=\alpha_\nu B_\nu$、等温转移解怎样得到、谱线怎样相对连续谱定义，以及径向恒星风为何产生 P Cygni 轮廓。每道题先给中文推导，再给可直接用于作业的英文版本。

## 目录

1. [本节的逻辑主线](#1-本节的逻辑主线)
2. [统一符号、假设与最小背景](#2-统一符号假设与最小背景)
3. [两能级原子与三种 Einstein 过程](#3-两能级原子与三种-einstein-过程)
4. [热平衡如何给出 Einstein 系数关系](#4-热平衡如何给出-einstein-系数关系)
5. [从跃迁率得到发射系数与净吸收系数](#5-从跃迁率得到发射系数与净吸收系数)
6. [LTE、Kirchhoff 定律与等温转移解](#6-ltekirchhoff-定律与等温转移解)
7. [习题 1.8：均匀球形热发射云](#7-习题-18均匀球形热发射云)
8. [习题 1.9：热恒星与窄线吸收壳](#8-习题-19热恒星与窄线吸收壳)
9. [1.9 延伸：冷的径向外流恒星风](#9-19-延伸冷的径向外流恒星风)
10. [习题 1.7：为什么受激辐射不可缺少](#10-习题-17为什么受激辐射不可缺少)
11. [English assignment-ready solutions](#11-english-assignment-ready-solutions)
12. [复习清单与常见混淆](#12-复习清单与常见混淆)
13. [资料与引用](#13-资料与引用)

---


## 1. 本节的逻辑主线

这一节不是孤立地记三个系数，而是在回答一条完整的物理问题：原子的微观跃迁怎样决定我们看到的吸收线和发射线？

1. 两能级原子可以吸收、自发辐射和受激辐射。
2. 热平衡要求向上、向下的跃迁数相等；辐射场同时必须是 Planck 谱。
3. 把这两个条件比较，得到 Einstein 系数之间的关系。
4. 把每次跃迁的光子能量、方向分布和线型加入，就得到 $j_\nu$ 与 $\alpha_\nu$。
5. LTE 下的 Boltzmann 能级布居使源函数化为 $B_\nu(T)$。
6. 实际谱线是吸收还是发射，不由“气体有没有发光”单独决定，而由气体源函数与它背后的背景强度比较决定。
7. 若气体运动，不同位置的谱线通过 Doppler 位移落在不同观测频率；径向外流因此产生典型的 P Cygni 轮廓。

最重要的两条判断式是

$$
\boxed{
I_{\nu,\rm out}
=I_{\nu,\rm in}e^{-\tau_\nu}
+S_\nu(1-e^{-\tau_\nu})
}
$$

和

$$
\boxed{
I_{\nu,\rm out}-I_{\nu,\rm in}
=(S_\nu-I_{\nu,\rm in})(1-e^{-\tau_\nu})
}.
$$

第一式告诉我们背景光与介质自身辐射怎样组合；第二式直接判断谱线相对背景是增强还是减弱。


## 2. 统一符号、假设与最小背景

### 2.1 符号

| 符号 | 含义 | 说明 |
|---|---|---|
| $E_1,E_2$ | 下、上能级能量 | $E_2-E_1=h\nu_0$ |
| $g_1,g_2$ | 能级统计权重 | 对应能级包含的微观态数 |
| $n_1,n_2$ | 两能级的原子数密度 | 单位 $\mathrm{cm^{-3}}$ |
| $A_{21}$ | 自发辐射系数 | 每个上能级原子每单位时间的自发跃迁概率 |
| $B_{12}$ | 吸收 Einstein 系数 | 吸收率为 $B_{12}\bar J$ |
| $B_{21}$ | 受激辐射 Einstein 系数 | 受激辐射率为 $B_{21}\bar J$ |
| $\phi(\nu)$ | 线型函数 | $\int_0^\infty\phi(\nu)d\nu=1$ |
| $I_\nu$ | 比强度 | 保留传播方向的信息 |
| $J_\nu$ | 平均强度 | $J_\nu=(4\pi)^{-1}\int I_\nu d\Omega$ |
| $\bar J$ | 谱线加权平均强度 | $\bar J=\int J_\nu\phi(\nu)d\nu$ |
| $j_\nu$ | 发射系数 | 每单位体积、时间、频率、立体角发出的能量 |
| $\alpha_\nu$ | 净吸收系数 | 本文包含受激辐射的负吸收贡献 |
| $S_\nu$ | 源函数 | $S_\nu=j_\nu/\alpha_\nu$ |
| $\tau_\nu$ | 光学深度 | $d\tau_\nu=\alpha_\nu ds$ |
| $B_\nu(T)$ | Planck 函数 | 黑体比强度，也是 LTE 热源函数 |

RL 的 $B_{12}$、$B_{21}$ 是相对于平均强度 $J_\nu$ 定义的。有些教材改用能量密度 $u_\nu$；由于各向同性辐射满足 $u_\nu=4\pi J_\nu/c$，两种定义的 $B$ 系数带有相应的 $4\pi/c$ 换算，不能跨约定直接比较数值。

### 2.2 本文采用的主要假设

- §1.6 的基本模型只有两个离散能级，谱线中心满足 $E_2-E_1=h\nu_0$。
- 自发辐射各向同性，并采用与吸收相同的归一化线型 $\phi(\nu)$。
- 写 $S_\nu=B_\nu(T)$ 时，假设物质处于 LTE；这不自动意味着实际辐射场已经是黑体。
- 习题 1.8 的云取均匀、等温、球对称，忽略外部背景和散射。
- 习题 1.9 的壳取等温热发射；在 $\nu_0$ 附近不透明，在邻近的 $\nu_1$ 处近似透明。
- 风的延伸题只判断定性轮廓；具体峰高、槽深和不对称性仍取决于速度律、光学深度、源函数和遮掩。


## 3. 两能级原子与三种 Einstein 过程

### 3.1 吸收

一个处于能级 1 的原子吸收能量为 $h\nu_0$ 的光子，跃迁到能级 2：

$$
1+\gamma\longrightarrow2.
$$

每个下能级原子的吸收率定义为

$$
\boxed{R_{12}=B_{12}\bar J}.
$$

吸收必须先有入射光子，因此当 $\bar J=0$ 时，吸收率为零。

### 3.2 自发辐射

激发态原子即使没有外来辐射，也可以自行跃迁到下能级并放出光子：

$$
2\longrightarrow1+\gamma.
$$

每个上能级原子的自发跃迁率定义为

$$
\boxed{R_{21}^{\rm sp}=A_{21}}.
$$

$A_{21}$ 不乘 $\bar J$，因为这个过程不需要已有的真实入射光子。在更完整的量子电动力学描述中，自发辐射来自原子与量子电磁场真空模式的耦合。

### 3.3 受激辐射

一个入射光子诱导上能级原子向下跃迁，并增加一个处于相同光子模式的光子：

$$
2+\gamma\longrightarrow1+2\gamma.
$$

每个上能级原子的受激辐射率为

$$
\boxed{R_{21}^{\rm stim}=B_{21}\bar J}.
$$

它需要已有辐射场，所以也正比于 $\bar J$。受激产生的光子与诱导光子进入同一模式，即具有相同频率、传播方向和偏振，并保持相干关系。

### 3.4 为什么使用 $\bar J$？

谱线不是严格的 delta 函数。原子的响应由线型 $\phi(\nu)$ 描述，所以它感受到的是谱线范围内的加权平均：

$$
\boxed{
\bar J=\int_0^\infty J_\nu\phi(\nu)d\nu
}.
$$

若 $J_\nu$ 在窄线宽内变化很慢，才可近似写成

$$
\bar J\simeq J_{\nu_0}.
$$

因此，不是 $B_{12}$、$B_{21}$ 自身“含有” $\bar J$；原子性质是 $B$ 系数，实际跃迁率才是 $B\bar J$。


## 4. 热平衡如何给出 Einstein 系数关系

### 4.1 跃迁数的详细平衡

热平衡时，每单位体积、每单位时间的向上跃迁数必须等于向下跃迁数：

$$
n_1B_{12}\bar J
=n_2A_{21}+n_2B_{21}\bar J.
$$

解出辐射强度：

$$
\bar J
=\frac{A_{21}}
{(n_1/n_2)B_{12}-B_{21}}.
$$

### 4.2 加入 Boltzmann 能级布居

热平衡时

$$
\frac{n_2}{n_1}
=\frac{g_2}{g_1}e^{-h\nu_0/kT},
$$

等价地

$$
\frac{n_1}{n_2}
=\frac{g_1}{g_2}e^{h\nu_0/kT}.
$$

因此

$$
\bar J
=\frac{A_{21}/B_{21}}
{\left(g_1B_{12}/g_2B_{21}\right)e^{h\nu_0/kT}-1}.
$$

### 4.3 与 Planck 谱逐项比较

热平衡辐射必须满足

$$
B_{\nu_0}(T)
=\frac{2h\nu_0^3/c^2}{e^{h\nu_0/kT}-1}.
$$

要求上面的 $\bar J$ 对任意温度都等于 Planck 函数，得到

$$
\boxed{g_1B_{12}=g_2B_{21}}
$$

和

$$
\boxed{
A_{21}=\frac{2h\nu_0^3}{c^2}B_{21}
}.
$$

这两个关系由平衡状态推导，但它们联系的是原子的微观系数，所以在原子实际处于非平衡布居时仍然成立。离开 LTE 后改变的是 $n_1/n_2$，不是这些系数关系。


## 5. 从跃迁率得到发射系数与净吸收系数

### 5.1 自发辐射给出 $j_\nu$

每单位体积、每单位时间发生的自发跃迁数为 $n_2A_{21}$。每次跃迁释放能量 $h\nu_0$；若辐射各向同性，就把总能量分到 $4\pi$ 立体角，并按 $\phi(\nu)$ 分布到频率上。因此

$$
\boxed{
j_\nu
=\frac{h\nu_0}{4\pi}n_2A_{21}\phi(\nu)
}.
$$

### 5.2 吸收与受激辐射必须相减

真正吸收从指定光束移走光子：

$$
\alpha_\nu^{\rm abs}
=\frac{h\nu_0}{4\pi}n_1B_{12}\phi(\nu).
$$

受激辐射沿已有光束增加光子，并且同样正比于 $I_\nu$，所以在转移方程中最方便地把它写成负吸收：

$$
\alpha_\nu^{\rm stim}
=-\frac{h\nu_0}{4\pi}n_2B_{21}\phi(\nu).
$$

进入

$$
\frac{dI_\nu}{ds}=-\alpha_\nu I_\nu+j_\nu
$$

的净吸收系数是

$$
\boxed{
\alpha_\nu
=\frac{h\nu_0}{4\pi}
(n_1B_{12}-n_2B_{21})\phi(\nu)
}.
$$

### 5.3 LTE 中的受激辐射修正

LTE 下结合 Boltzmann 分布和 Einstein 关系：

$$
\begin{aligned}
n_2B_{21}
&=n_1\frac{g_2}{g_1}e^{-h\nu_0/kT}
\frac{g_1}{g_2}B_{12}\\
&=n_1B_{12}e^{-h\nu_0/kT}.
\end{aligned}
$$

所以

$$
\boxed{
\alpha_\nu
=\frac{h\nu_0}{4\pi}n_1B_{12}
\left(1-e^{-h\nu_0/kT}\right)\phi(\nu)
}.
$$

其中

$$
\underbrace{1}_{\text{真正吸收}}
-\underbrace{e^{-h\nu_0/kT}}_{\text{受激辐射的相对贡献}}
$$

就是净吸收修正。

若 $h\nu_0\gg kT$，上能级布居很少，修正因子趋近 1，受激辐射不重要。若 $h\nu_0\ll kT$，则

$$
1-e^{-h\nu_0/kT}\simeq\frac{h\nu_0}{kT},
$$

吸收与受激辐射几乎抵消，净吸收显著小于未经修正的吸收。

### 5.4 非 LTE 与 maser

非 LTE 时不能把 $n_2/n_1$ 换成 Boltzmann 因子，应保留一般式。若

$$
\frac{n_2}{g_2}>\frac{n_1}{g_1},
$$

则

$$
n_2B_{21}>n_1B_{12},\qquad \alpha_\nu<0.
$$

此时光束不是衰减，而是指数放大，对应粒子数反转和 maser/laser。


## 6. LTE、Kirchhoff 定律与等温转移解

### 6.1 为什么热辐射满足 $j_\nu=\alpha_\nu B_\nu$？

把温度为 $T$ 的物质放进同温黑体空腔。平衡辐射为

$$
I_\nu=B_\nu(T),
$$

并且沿路径不能继续改变：

$$
\frac{dI_\nu}{ds}=0.
$$

代入转移方程：

$$
0=-\alpha_\nu B_\nu(T)+j_\nu,
$$

所以

$$
\boxed{j_\nu=\alpha_\nu B_\nu(T)},
\qquad
\boxed{S_\nu=B_\nu(T)}.
$$

微观上也可把 §5 的 $j_\nu$、$\alpha_\nu$ 与 LTE 布居代入 $S_\nu=j_\nu/\alpha_\nu$，得到同样的 Planck 函数。

这个等式描述局部物质的发射与吸收之比。它不等于实际辐射一定满足 $I_\nu=B_\nu$；实际 $I_\nu$ 还取决于光学深度和边界入射光。

### 6.2 等温介质的转移解怎样得到？

以光线传播方向为正，定义

$$
d\tau_\nu=\alpha_\nu ds.
$$

若源函数沿路径为常数，转移方程为

$$
\frac{dI_\nu}{d\tau_\nu}+I_\nu=S_\nu.
$$

乘积分因子 $e^{\tau_\nu}$：

$$
\frac{d}{d\tau_\nu}
\left(I_\nu e^{\tau_\nu}\right)
=S_\nu e^{\tau_\nu}.
$$

从介质入口 $\tau_\nu=0$ 积分到出口 $\tau_\nu=\tau$：

$$
I_\nu(\tau)e^\tau-I_\nu(0)
=S_\nu(e^\tau-1).
$$

因此

$$
\boxed{
I_{\nu,\rm out}
=I_{\nu,\rm in}e^{-\tau_\nu}
+S_\nu(1-e^{-\tau_\nu})
}.
$$

两项分别是衰减后的背景光和介质自身能够逃出的辐射。LTE 等温介质中 $S_\nu=B_\nu(T)$。

### 6.3 为什么光学薄时是路径积分，光学厚时趋于源函数？

若无背景，

$$
I_\nu=S_\nu(1-e^{-\tau_\nu}).
$$

光学薄时

$$
1-e^{-\tau_\nu}\simeq\tau_\nu,
$$

所以

$$
I_\nu\simeq S_\nu\tau_\nu
=\frac{j_\nu}{\alpha_\nu}\alpha_\nu\ell
=j_\nu\ell.
$$

各小段的发射几乎不被重新吸收，可以直接相加。光学厚时 $e^{-\tau_\nu}\to0$，所以

$$
I_\nu\to S_\nu.
$$

我们只能看到表面附近约一个光学深度内的辐射。


## 7. 习题 1.8：均匀球形热发射云

### 7.1 几何与 $P(\nu)$ 的含义

半径为 $R$ 的均匀球形云距离地球 $d\gg R$。题目给出的 $P(\nu)$ 是每单位体积、每单位频率、对所有方向积分后的发射功率，因此

$$
\boxed{j_\nu=\frac{P(\nu)}{4\pi}}.
$$

距离投影中心为 $b$ 的视线穿过球的弦长为

$$
\boxed{
\ell(b)=2\sqrt{R^2-b^2}
},\qquad 0\le b<R.
$$

若 $b\ge R$，视线不穿过云。

热发射满足 $j_\nu=\alpha_\nu B_\nu(T)$，所以

$$
\alpha_\nu=\frac{P(\nu)}{4\pi B_\nu(T)},
$$

且均匀云的视线光学深度为

$$
\tau_\nu(b)
=2\alpha_\nu\sqrt{R^2-b^2}.
$$

无背景时的完整解是

$$
\boxed{
I_\nu(b)
=B_\nu(T)
\left[1-e^{-\tau_\nu(b)}\right]
}.
$$

### 7.2 (a) 光学薄云的亮度分布

光学薄时可以直接沿弦积分：

$$
I_\nu(b)
=\int j_\nu ds
=\frac{P(\nu)}{4\pi}\,2\sqrt{R^2-b^2}.
$$

所以

$$
\boxed{
I_\nu(b)
=\frac{P(\nu)}{2\pi}\sqrt{R^2-b^2}
},\qquad b<R.
$$

中心视线最长，所以中心最亮；靠近边缘时弦长趋于零，强度也趋于零。式中没有 $d^{-2}$，因为真空传播中比强度保持不变；距离变大时缩小的是源的角面积。

### 7.3 (b) 有效温度

定义频率积分后的体发射率

$$
P_{\rm bol}=\int_0^\infty P(\nu)d\nu.
$$

光学薄云的总光度是体积乘体发射率：

$$
L=\frac{4\pi R^3}{3}P_{\rm bol}.
$$

有效温度由同半径黑体的总光度定义：

$$
L=4\pi R^2\sigma_{\rm SB}T_{\rm eff}^4.
$$

因此

$$
\boxed{
T_{\rm eff}
=\left[
\frac{R}{3\sigma_{\rm SB}}
\int_0^\infty P(\nu)d\nu
\right]^{1/4}
}.
$$

这里假设主要发射频率都光学薄。无背景的等温薄云在每个频率上都比同温黑体表面暗，因此通常 $T_{\rm eff}<T$。

### 7.4 (c) 地球上收到的总谱流量

球云的谱光度为

$$
L_\nu=\frac{4\pi R^3}{3}P(\nu).
$$

因此地球处谱流量密度为

$$
\boxed{
f_\nu
=\frac{L_\nu}{4\pi d^2}
=\frac{P(\nu)R^3}{3d^2}
}.
$$

也可以从天空图像积分：

$$
f_\nu
=\int I_\nu d\Omega
=\frac{2\pi}{d^2}
\int_0^R I_\nu(b)b\,db,
$$

代入 §7.2 的 $I_\nu(b)$ 会得到同样结果。

### 7.5 (d) 亮温与气体温度

亮温按

$$
B_\nu(T_b)=I_\nu
$$

定义。因为无背景时

$$
I_\nu=B_\nu(T)(1-e^{-\tau_\nu})<B_\nu(T),
$$

而固定频率下 $B_\nu$ 随温度单调增加，所以

$$
\boxed{T_b<T}.
$$

只有在 Rayleigh–Jeans 极限中，Planck 函数才与温度成正比。此时光学薄云有

$$
\boxed{T_b\simeq\tau_\nu T}.
$$

在一般频率上只能通过 $B_\nu(T_b)=I_\nu$ 反解，不能直接写 $T_b=\tau_\nu T$。

### 7.6 (e) 光学厚云

若相关频率上的大部分视线满足 $\tau_\nu\gg1$，则

$$
I_\nu(b)\simeq B_\nu(T).
$$

理想黑体圆面的角面积为 $\pi R^2/d^2$，所以

$$
\boxed{
f_\nu
=\pi B_\nu(T)\frac{R^2}{d^2}
}.
$$

若主要贡献总辐射的频段也都光学厚，则

$$
\boxed{T_{\rm eff}=T},
\qquad
\boxed{T_b=T}.
$$

严格说，有限吸收系数的球在最外缘具有很短的弦长，边缘仍会变薄；均匀黑体圆面是极限描述。某一条谱线光学厚，也不足以单独推出整个 bolometric 光谱的 $T_{\rm eff}=T$。


## 8. 习题 1.9：热恒星与窄线吸收壳

### 8.1 几何与两个频率

中央不透明球体是温度为 $T_c$ 的黑体，外部球壳温度为 $T_s$。壳在谱线中心 $\nu_0$ 有很大的吸收系数，在邻近连续谱频率 $\nu_1$ 近似透明。

- A 光线从恒星表面出发，再穿过前方壳层。
- B 光线不与恒星圆面相交，只穿过壳层。

题目还假设 Planck 函数从 $\nu_0$ 到 $\nu_1$ 变化很小：

$$
B_{\nu_0}(T_c)\simeq B_{\nu_1}(T_c),
\qquad
B_{\nu_0}(T_s)\simeq B_{\nu_1}(T_s).
$$

### 8.2 A 光线的完整表达式

恒星提供入射强度

$$
I_{\nu,\rm in}=B_\nu(T_c),
$$

而 LTE 壳层的源函数为

$$
S_\nu=B_\nu(T_s).
$$

因此

$$
\boxed{
I_{\nu,A}
=B_\nu(T_c)e^{-\tau_{\nu,A}}
+B_\nu(T_s)(1-e^{-\tau_{\nu,A}})
}.
$$

第一项是透过壳层的恒星光，第二项是壳层自己补回的热辐射。等价地，

$$
I_{\nu,A}
=B_\nu(T_s)
+[B_\nu(T_c)-B_\nu(T_s)]e^{-\tau_{\nu,A}}.
$$

透明时看到恒星；非常厚时看到壳层源函数。

### 8.3 为什么可以用 $I_{\nu_0}$ 与 $I_{\nu_1}$ 判断线型？

在 $\nu_1$ 处，$\tau_{\nu_1,A}\simeq0$，因此

$$
I_{\nu_1,A}\simeq B_{\nu_1}(T_c).
$$

定义谱线相对邻近连续谱的变化：

$$
\Delta I_A=I_{\nu_0,A}-I_{\nu_1,A}.
$$

不作近似时，

$$
\begin{aligned}
\Delta I_A={}&
B_{\nu_0}(T_c)e^{-\tau_{\nu_0,A}}
+B_{\nu_0}(T_s)(1-e^{-\tau_{\nu_0,A}})\\
&-B_{\nu_1}(T_c).
\end{aligned}
$$

利用题目给出的局部连续谱近似

$$
B_{\nu_1}(T_c)\simeq B_{\nu_0}(T_c),
$$

得到

$$
\boxed{
\Delta I_A
\simeq
[B_{\nu_0}(T_s)-B_{\nu_0}(T_c)]
(1-e^{-\tau_{\nu_0,A}})
}.
$$

所以比较的本质不是任意两个频率，而是谱线中心与外推到线心的局部连续谱：

$$
\Delta I_{\rm line}
=I_{\nu_0}-I_{\nu_0,\rm cont}.
$$

若 $\Delta I_{\rm line}>0$，光谱在线心高于连续谱，是发射线；若 $\Delta I_{\rm line}<0$，在线心低于连续谱，是吸收线。若 $\nu_1$ 离线心很远，不能把 $I_{\nu_1}$ 直接当作线心连续谱，而应先拟合连续谱斜率。

### 8.4 当 $T_s<T_c$

固定频率下 Planck 函数随温度单调增加，所以

$$
B_{\nu_0}(T_s)<B_{\nu_0}(T_c).
$$

对 A 光线，

$$
\Delta I_A<0,
$$

因此谱线表现为吸收。

对 B 光线，背后没有恒星，取 $I_{\nu,\rm in}\simeq0$：

$$
I_{\nu,B}
=B_\nu(T_s)(1-e^{-\tau_{\nu,B}}).
$$

在线外，$I_{\nu_1,B}\simeq0$；在线心，$I_{\nu_0,B}>0$。因此 B 光线看到发射线。

冷壳不是“不发光”。它在恒星前方时比明亮背景暗，所以形成吸收；在黑暗天空前方时又比背景亮，所以形成发射。

### 8.5 当 $T_s>T_c$

这时

$$
B_{\nu_0}(T_s)>B_{\nu_0}(T_c).
$$

A 光线在线心高于恒星连续谱，成为发射线；B 光线仍在黑暗背景上发射。因此

| 条件 | A：恒星圆面前方 | B：恒星圆面之外 |
|---|---|---|
| $T_s<T_c$ | 吸收线 | 发射线 |
| $T_s=T_c$ | 无线差 | 发射线 |
| $T_s>T_c$ | 发射线 | 发射线 |

统一判断式为

$$
\boxed{
I_{\nu,\rm out}-I_{\nu,\rm in}
=(S_\nu-I_{\nu,\rm in})(1-e^{-\tau_\nu})
}.
$$


## 9. 1.9 延伸：冷的径向外流恒星风

### 9.1 先规定 Doppler 符号

令 $\hat{\boldsymbol n}$ 从恒星指向观察者，并定义

$$
v_\parallel=\boldsymbol v\cdot\hat{\boldsymbol n}>0
$$

表示气体朝观察者运动。恒星前方的径向外流与光子都沿 $\hat{\boldsymbol n}$ 传播。

从观察者参考系变换到气体参考系，频率满足

$$
\nu'=\gamma\nu(1-\beta),
\qquad
\beta=\frac{v_\parallel}{c}.
$$

非相对论风中

$$
\boxed{
\nu'\simeq\nu\left(1-\frac{v_\parallel}{c}\right)
}.
$$

气体和光子同向运动，气体在追赶光子，因此气体测得的频率降低。

### 9.2 为什么前方风吸收蓝侧光子？

共振吸收要求气体参考系中的频率等于原子线频率：

$$
\nu'=\nu_0.
$$

因此

$$
\nu
=\frac{\nu_0}{\gamma(1-\beta)}
=\nu_0\sqrt{\frac{1+\beta}{1-\beta}}
\simeq\nu_0(1+\beta).
$$

所以被吸收的观察者频率满足

$$
\boxed{\nu_{\rm abs}>\nu_0},
\qquad
\boxed{\lambda_{\rm abs}<\lambda_0}.
$$

这就是蓝移吸收。风虽然远离恒星，却位于恒星前方并朝观察者运动；不能把“远离恒星”误当成“远离观察者”。

若采用天文学中“正径向速度表示远离观察者”的另一套约定，速度符号会反过来，但蓝移结论不变。

### 9.3 为什么恒星圆面之外的风是发射？

对恒星圆面前方的视线，背景是明亮恒星：

$$
I_{\nu,\rm in}\simeq I_{\nu,\star}>S_\nu.
$$

因此线内输出低于连续谱，形成吸收。

对恒星圆面之外的视线，背后近似是黑暗天空：

$$
I_{\nu,\rm in}\simeq0.
$$

只要风具有非零热发射或把恒星光散射进视线，$S_\nu>0$，便有

$$
I_{\nu,\rm out}=S_\nu(1-e^{-\tau_\nu})>0.
$$

因此相对于近乎为零的局部背景表现为发射。吸收本身只能移走已经存在的背景光；没有明亮背景时，不会产生低于零的强度。

### 9.4 不同区域贡献哪些频率？

- 近侧风朝我们运动，贡献蓝移发射。
- 侧面风的视向速度接近零，贡献接近静止线心的发射。
- 远侧风远离我们，贡献红移发射。
- 只有投影在恒星圆面上的近侧风能吸收明亮的恒星连续谱，因此吸收只明显出现在蓝侧。

整个未分辨系统的观测流量可以概念性地写成

$$
F_\nu
=F_{\nu,\rm cont}
-F_{\nu,\rm removed}
+F_{\nu,\rm wind}.
$$

风的发射本身覆盖一段正、负视向速度；蓝侧同时被前方风的吸收压低。因此总轮廓通常表现为

$$
\boxed{
\text{蓝移吸收槽}+\text{宽的发射成分}
}
$$

即 P Cygni profile。发射峰在合成轮廓中通常在线心附近或红侧较突出，但不能把它简单理解成“只有后半球发射”。

### 9.5 这个结论依赖什么？

题目能可靠判断的是典型 P Cygni 形态，不能只凭“冷风”确定精确曲线。以下因素都会改变轮廓：

- 风速随半径的变化和终端速度；
- 谱线光学深度与离子布居；
- 热发射、碰撞激发、复合与共振散射各自的贡献；
- 恒星对远侧风的遮掩；
- 风是否球对称、稳定和未被分辨。

若采用极端的纯破坏吸收模型，风吸收光子后几乎不在线内再发射或散射，则发射成分可以很弱，只留下蓝移吸收。经典 P Cygni 发射通常来自共振散射，也可能包含真实线发射。


## 10. 习题 1.7：为什么受激辐射不可缺少

### 10.1 (a) 忽略受激辐射只能得到 Wien 谱

若错误地只保留吸收和自发辐射，平衡条件为

$$
n_1B_{12}\bar J=n_2A_{21}.
$$

利用 Boltzmann 分布：

$$
\bar J
=\frac{n_2}{n_1}\frac{A_{21}}{B_{12}}
=\frac{g_2A_{21}}{g_1B_{12}}e^{-h\nu_0/kT}.
$$

若选择温度无关的系数关系

$$
\frac{g_2A_{21}}{g_1B_{12}}
=\frac{2h\nu_0^3}{c^2},
$$

便得到

$$
\boxed{
\bar J
=\frac{2h\nu_0^3}{c^2}e^{-h\nu_0/kT}
},
$$

这正是 Wien 谱，而不是完整 Planck 谱

$$
B_{\nu_0}(T)
=\frac{2h\nu_0^3/c^2}{e^{h\nu_0/kT}-1}.
$$

温度无关的原子系数无法凭空制造分母中的 $-1$；这个项来自受激辐射。只有在 $h\nu_0\gg kT$ 时，受激辐射很弱，Planck 谱才趋近 Wien 谱。

### 10.2 (b) 若辐射粒子是费米子

题目给出平衡强度

$$
I_\nu^{\rm FD}
=\frac{2h\nu^3/c^2}{e^{h\nu/kT}+1}.
$$

玻色子已有末态占据会增强发射，因子为 $1+f$；费米子已有末态占据会阻止再放入一个相同粒子，因子为 $1-f$。若把 Pauli 阻塞写成一个正系数 $B_{21}$ 乘辐射强度，则向下跃迁率具有

$$
A_{21}-B_{21}\bar J
$$

的形式。详细平衡为

$$
n_1B_{12}\bar J
=n_2(A_{21}-B_{21}\bar J).
$$

解得

$$
\bar J
=\frac{A_{21}/B_{21}}
{(g_1B_{12}/g_2B_{21})e^{h\nu_0/kT}+1}.
$$

与 Fermi–Dirac 谱比较，仍得到形式相同的系数关系：

$$
\boxed{g_1B_{12}=g_2B_{21}},
\qquad
\boxed{A_{21}=\frac{2h\nu_0^3}{c^2}B_{21}}.
$$

差别在于 $B_{21}\bar J$ 的物理意义和符号：对光子，它是增加向下跃迁的受激辐射；对费米子，它描述已有末态造成的 Pauli 阻塞，并从自发发射率中减去。


## 11. English assignment-ready solutions

### 11.1 Problem 1.8

Let $P(\nu)$ be the emitted power per unit volume and frequency, integrated over all directions. The isotropic emission coefficient is therefore

$$
j_\nu=\frac{P(\nu)}{4\pi}.
$$

For a ray with impact parameter $b<R$, the path length through the spherical cloud is

$$
\ell(b)=2\sqrt{R^2-b^2}.
$$

**(a) Optically thin cloud.** The observed specific intensity is

$$
\boxed{
I_\nu(b)=\int j_\nu ds
=\frac{P(\nu)}{2\pi}\sqrt{R^2-b^2}
},
$$

for $b<R$, and it is zero for $b\ge R$. The intensity does not contain an inverse-square factor because specific intensity is conserved during propagation through empty space.

**(b) Effective temperature.** Define

$$
P_{\rm bol}=\int_0^\infty P(\nu)d\nu.
$$

The luminosity of the optically thin cloud is

$$
L=\frac{4\pi R^3}{3}P_{\rm bol}.
$$

Equating this to $4\pi R^2\sigma_{\rm SB}T_{\rm eff}^4$ gives

$$
\boxed{
T_{\rm eff}
=\left[
\frac{R}{3\sigma_{\rm SB}}
\int_0^\infty P(\nu)d\nu
\right]^{1/4}
}.
$$

**(c) Flux density at Earth.** The monochromatic luminosity is

$$
L_\nu=\frac{4\pi R^3}{3}P(\nu),
$$

and hence

$$
\boxed{
f_\nu=\frac{L_\nu}{4\pi d^2}
=\frac{P(\nu)R^3}{3d^2}
}.
$$

**(d) Brightness temperature.** For thermal emission,

$$
I_\nu=B_\nu(T)(1-e^{-\tau_\nu})<B_\nu(T).
$$

Since $B_\nu(T_b)=I_\nu$, it follows that

$$
\boxed{T_b<T}.
$$

In the Rayleigh–Jeans and optically thin limits, $T_b\simeq\tau_\nu T$.

**(e) Optically thick cloud.** In the blackbody limit,

$$
\boxed{I_\nu(b)\simeq B_\nu(T)},
\qquad
\boxed{T_b=T},
\qquad
\boxed{T_{\rm eff}=T},
$$

and the flux density measured at Earth is

$$
\boxed{
f_\nu=\pi B_\nu(T)\frac{R^2}{d^2}
}.
$$

The statement $T_{\rm eff}=T$ assumes that the cloud is optically thick over the frequencies that dominate its bolometric luminosity.

### 11.2 Problem 1.9

For a ray passing through an isothermal shell, the formal solution is

$$
I_{\nu,\rm out}
=I_{\nu,\rm in}e^{-\tau_\nu}
+B_\nu(T_s)(1-e^{-\tau_\nu}).
$$

Along ray A, the incident intensity is the central blackbody intensity, $I_{\nu,\rm in}=B_\nu(T_c)$, so

$$
I_{\nu,A}
=B_\nu(T_c)e^{-\tau_{\nu,A}}
+B_\nu(T_s)(1-e^{-\tau_{\nu,A}}).
$$

At the continuum frequency $\nu_1$, the shell is transparent and

$$
I_{\nu_1,A}\simeq B_{\nu_1}(T_c).
$$

Using the stated approximation that the Planck function changes negligibly between $\nu_0$ and $\nu_1$,

$$
I_{\nu_0,A}-I_{\nu_1,A}
\simeq
[B_{\nu_0}(T_s)-B_{\nu_0}(T_c)]
(1-e^{-\tau_{\nu_0,A}}).
$$

Along ray B there is no bright central background, so

$$
I_{\nu,B}=B_\nu(T_s)(1-e^{-\tau_{\nu,B}}).
$$

Therefore, if $T_s<T_c$, ray A shows an absorption line while ray B shows an emission line. If $T_s>T_c$, both rays show an emission line. The general criterion is that a line is in emission when $S_\nu>I_{\nu,\rm in}$ and in absorption when $S_\nu<I_{\nu,\rm in}$.

### 11.3 Wind extension to Problem 1.9

A cooler, radially expanding wind is expected to produce a P Cygni profile: blueshifted absorption superposed on a broad emission component. Gas in front of the stellar disk moves toward the observer and absorbs the stellar continuum at blueshifted frequencies. In the nonrelativistic limit, the resonance condition is

$$
\nu_0\simeq\nu\left(1-\frac{v_\parallel}{c}\right),
$$

so the absorbed observer-frame frequency is

$$
\nu\simeq\nu_0\left(1+\frac{v_\parallel}{c}\right)>\nu_0.
$$

Wind material outside the projected stellar disk contributes line emission over a range of projected velocities: the near side is blueshifted, the transverse regions lie near line center, and the far side is redshifted. Only the near-side wind projected against the stellar disk can remove the bright stellar continuum, so the absorption is preferentially blueshifted. The detailed profile depends on the wind velocity law, line optical depth, source function, and occultation by the star.

### 11.4 Problem 1.7

**(a)** If stimulated emission is omitted, detailed balance gives

$$
n_1B_{12}\bar J=n_2A_{21}.
$$

Using the Boltzmann population ratio,

$$
\bar J
=\frac{g_2A_{21}}{g_1B_{12}}e^{-h\nu_0/kT}.
$$

Choosing

$$
\frac{g_2A_{21}}{g_1B_{12}}
=\frac{2h\nu_0^3}{c^2}
$$

produces the Wien spectrum,

$$
\bar J
=\frac{2h\nu_0^3}{c^2}e^{-h\nu_0/kT},
$$

but no temperature-independent relation among the remaining coefficients can reproduce the $-1$ in the Planck denominator. Stimulated emission is therefore required for the full Planck spectrum.

**(b)** For a Fermi–Dirac radiation field, occupation of the final neutrino state suppresses emission. Writing the downward rate as $A_{21}-B_{21}\bar J$, detailed balance gives

$$
n_1B_{12}\bar J
=n_2(A_{21}-B_{21}\bar J).
$$

Comparison with

$$
I_\nu^{\rm FD}
=\frac{2h\nu^3/c^2}{e^{h\nu/kT}+1}
$$

then yields

$$
\boxed{g_1B_{12}=g_2B_{21}},
\qquad
\boxed{A_{21}=\frac{2h\nu_0^3}{c^2}B_{21}}.
$$

The algebraic relations have the same form as in the photon case, but the $B_{21}\bar J$ term represents Pauli blocking rather than stimulated emission and therefore enters with the opposite sign.


## 12. 复习清单与常见混淆

### 12.1 应该能独立推导

1. 从详细平衡和 Planck 谱推出

   $$
   g_1B_{12}=g_2B_{21},
   \qquad
   A_{21}=\frac{2h\nu_0^3}{c^2}B_{21}.
   $$

2. 从跃迁率推出

   $$
   j_\nu=\frac{h\nu_0}{4\pi}n_2A_{21}\phi(\nu),
   $$

   $$
   \alpha_\nu
   =\frac{h\nu_0}{4\pi}
   (n_1B_{12}-n_2B_{21})\phi(\nu).
   $$

3. 用 LTE 布居推出受激辐射修正

   $$
   1-e^{-h\nu_0/kT}.
   $$

4. 从转移方程推出常源函数解

   $$
   I_{\rm out}=I_{\rm in}e^{-\tau}+S(1-e^{-\tau}).
   $$

5. 用弦长 $2\sqrt{R^2-b^2}$ 推出球云亮度分布。
6. 用 $S-I_{\rm in}$ 判断谱线是吸收还是发射。
7. 用移动气体参考系的共振条件推出蓝移吸收。

### 12.2 可以直接记住的核心结论

- $A_{21}$ 不依赖已有辐射场；$B_{12}\bar J$、$B_{21}\bar J$ 需要入射光子。
- LTE 给出 $S_\nu=B_\nu(T)$，光学厚才使实际 $I_\nu$ 趋近 $B_\nu(T)$。
- 发射线与吸收线必须相对局部连续谱定义。
- 冷气体位于亮恒星前方可以形成吸收，位于黑暗天空前方仍可形成发射。
- 球形径向外流的典型标志是 P Cygni 轮廓：蓝移吸收加宽发射。

### 12.3 最容易混淆的地方

| 容易混淆的说法 | 正确理解 |
|---|---|
| “$B$ 系数里面有 $\bar J$” | $B$ 是原子系数，$B\bar J$ 才是实际跃迁率 |
| “吸收系数只算吸收” | RL 的净 $\alpha_\nu$ 已扣除受激辐射 |
| “LTE 就是黑体” | LTE 给局部源函数；$I_\nu$ 还取决于光学深度和边界条件 |
| “冷壳不能发射” | 冷壳仍有 $S_\nu>0$；能否形成发射线取决于背景 |
| “有大吸收系数就一定看到吸收线” | 若 $S_\nu>I_{\nu,\rm in}$，大光学深度反而使线表现为发射 |
| “比较任意 $I_{\nu_0}$、$I_{\nu_1}$ 就能定线型” | 应比较线心与外推到线心的局部连续谱 |
| “风远离恒星，所以一定红移” | 近侧风虽远离恒星，却朝观察者运动，产生蓝移吸收 |
| “P Cygni 的发射只来自远侧风” | 整个风都有发射；不同位置按视向速度落在蓝侧、线心和红侧 |


## 13. 资料与引用

1. G. B. Rybicki & A. P. Lightman, *Radiative Processes in Astrophysics*, §1.6 and Problems 1.7–1.9, print pp. 27–33 and 47–49. 本项目文件：`Rybicki和Lightman - 2004 - Radiative processes in astrophysics.pdf`。
2. J. Puls, *Stellar Winds*, section on P Cygni line formation: [stellar_winds.pdf](https://homepages.usm.uni-muenchen.de/puls/lessons/hotwindsprakt/stellar_winds.pdf).
3. 本文延续项目中前两份笔记的符号约定：`AST1440_辐射转移基础与习题1.1-1.4总结.md` 与 `AST1440_热辐射与观测_课堂笔记及习题1.3_1.5_1.6详解.md`。
