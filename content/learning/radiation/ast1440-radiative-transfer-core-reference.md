---
title: "AST1440 辐射转移核心知识速查"
description: "面向 AST1440 的辐射转移速查：集中整理比强度、通量、源函数、光学深度、转移方程、LTE、Planck 谱、亮温、观测换算、常用几何模板与谱线判据。"
date: "2026-10-15"
tags: ["AST1440","Radiative transfer","Reference","LTE","Planck spectrum","Optical depth"]
order: 12
draft: false
---

# AST1440 辐射转移核心知识速查

> 整理日期：2026-10-15。依据已整理的 RL §1.1–1.6 课程笔记。  
> 范围：比强度、通量、源函数、黑体谱、吸收与发射、光学深度、热平衡与观测换算；不展开粒子散射、电磁场和后续辐射机制。  
> 使用方法：先查第 0 节，再按目录找条件或几何模板。默认静态介质、几何光学、同一参考系，忽略散射及传播红移；另有假设时单独注明。单位默认 cgs，强度包含两种偏振。

## 目录

- [0. 最常用公式](#0-最常用公式)
- [1. 符号、单位与四个核心量](#1-符号单位与四个核心量)
- [2. 角度积分：什么时候有 π、2π、4π？](#2-角度积分什么时候有-π2π4π)
- [3. 从发射和吸收到转移方程](#3-从发射和吸收到转移方程)
- [4. 转移方程直接可用的解](#4-转移方程直接可用的解)
- [5. LTE、黑体与辐射平衡](#5-lte黑体与辐射平衡)
- [6. Planck 谱及其近似](#6-planck-谱及其近似)
- [7. 从强度算观测流量和光度](#7-从强度算观测流量和光度)
- [8. 亮温、有效温度和颜色温度](#8-亮温有效温度和颜色温度)
- [9. 平板、球形云与多层介质模板](#9-平板球形云与多层介质模板)
- [10. 吸收线与发射线](#10-吸收线与发射线)
- [11. 代入顺序与易错检查](#11-代入顺序与易错检查)
- [附录 A. Einstein 系数与谱线源函数](#附录-a-einstein-系数与谱线源函数)
- [附录 B. 常数与资料](#附录-b-常数与资料)

## 0. 最常用公式

整条计算链是：**介质给出 $j_\nu,\alpha_\nu$ → 路径给出 $\tau_\nu$ → 边界条件与转移方程给出 $I_\nu$ → 角度／投影面积积分给出 $F_\nu$ 或 $f_\nu$。**

| 要算什么 | 直接用的公式 | 必须检查的条件 |
|---|---|---|
| 表面法线方向的净谱通量 | $F_\nu=\int_{4\pi}I_\nu\mu\,d\Omega$ | $\mu=\cos\theta$ 带正负号 |
| 平均强度与能量密度 | $J_\nu=(4\pi)^{-1}\int I_\nu d\Omega$；$u_\nu=4\pi J_\nu/c$ | 对任意角分布成立 |
| 源函数 | $S_\nu=j_\nu/\alpha_\nu$ | $j_\nu$ 按每单位立体角定义；$\alpha_\nu\ne0$ |
| 光学深度 | $\tau_\nu=\int\alpha_\nu ds=\int\rho\kappa_\nu ds$ | 沿实际光路积分；薄厚依赖频率和方向 |
| 转移方程 | $dI_\nu/ds=j_\nu-\alpha_\nu I_\nu$ | $s$ 沿光传播方向增加 |
| 一层常源函数介质 | $I_{\nu,\rm out}=I_{\nu,\rm in}e^{-\tau_\nu}+S_\nu(1-e^{-\tau_\nu})$ | $S_\nu$ 沿该光路不变 |
| 光学薄、无背景 | $I_\nu\simeq\int j_\nu ds$ | 整条相关光路 $\tau_\nu\ll1$ |
| LTE 热源函数 | $S_\nu=B_\nu(T)$ | 吸收与发射满足 LTE；净吸收含受激辐射修正 |
| 黑体比强度 | $B_\nu=\dfrac{2h\nu^3}{c^2}[e^{h\nu/(kT)}-1]^{-1}$ | 它的单位与 $I_\nu$ 相同 |
| 黑体表面向外通量 | $F_\nu^+=\pi B_\nu$；$F^+=\sigma_{\rm SB}T^4$ | 出射半球内 $I_\nu=B_\nu$；有入射时另算净通量 |
| 小角源观测流量密度 | $f_\nu\simeq\int_{\rm src}I_\nu d\Omega=\bar I_\nu\Omega_{\rm src}$ | $\bar I_\nu$ 是源角面积平均值 |
| 均匀黑体恒星 | $f_\nu=\pi B_\nu(T)(R/d)^2$ | $d\gg R$、无消光、圆面亮度均匀 |
| Rayleigh–Jeans 亮温 | $T_{b,\rm RJ}=c^2I_\nu/(2k\nu^2)$ | 作为强度单位可直接定义；等同物理温度还需额外条件 |

## 1. 符号、单位与四个核心量

### 1.1 单位表

| 符号 | 名称／含义 | cgs 单位 |
|---|---|---|
| $I_\nu$ | 比强度（specific intensity），某位置、某传播方向的谱亮度 | $\mathrm{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}\,sr^{-1}}$ |
| $J_\nu$ | 平均强度（mean intensity），$I_\nu$ 的全空间角平均 | 同 $I_\nu$ |
| $S_\nu$ | 源函数（source function），发射／净吸收之比 | 同 $I_\nu$ |
| $B_\nu(T)$ | Planck 函数，温度 $T$ 的黑体比强度 | 同 $I_\nu$ |
| $F_\nu$ | 谱通量（spectral flux），穿过指定表面的净能量流 | $\mathrm{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}}$ |
| $f_\nu$ | 观测者收到的源流量密度（flux density） | 同 $F_\nu$；也常用 Jy |
| $L_\nu$ | 谱光度，源每秒每单位频率输出的总能量 | $\mathrm{erg\,s^{-1}\,Hz^{-1}}$ |
| $u_\nu$ | 谱能量密度 | $\mathrm{erg\,cm^{-3}\,Hz^{-1}}$ |
| $j_\nu$ | 发射系数（emission coefficient），每体积、每立体角的谱发射功率 | $\mathrm{erg\,s^{-1}\,cm^{-3}\,Hz^{-1}\,sr^{-1}}$ |
| $\alpha_\nu$ | 净吸收系数（absorption coefficient），单位长度的衰减率 | $\mathrm{cm^{-1}}$ |
| $\kappa_\nu$ | 质量吸收系数（mass absorption coefficient），$\alpha_\nu/\rho$ | $\mathrm{cm^2\,g^{-1}}$ |
| $\tau_\nu$ | 光学深度（optical depth） | 无量纲 |

本文 $S_\nu$ **只表示源函数**。有些射电资料用 $S_\nu$ 表示观测流量密度，对应本文的 $f_\nu$。$F_\nu$ 和 $f_\nu$ 本质上是同类通量量；小写仅用于标明观测位置，避免与恒星表面通量混淆。

### 1.2 四个量分别回答什么问题？

- **$I_\nu$：实际这束光有多强？** 由介质、传播历史和边界条件共同决定，是随方向变化的标量。
- **$F_\nu$：净有多少能量穿过这个面？** 由各方向的 $I_\nu$ 做带投影的积分得到。
- **$S_\nu$：介质的发射与吸收恰好抵消时，对应多强的光？** 对 $\alpha_\nu>0$，光束低于局部 $S_\nu$ 就增强，高于它就减弱。
- **$B_\nu(T)$：温度为 $T$ 的黑体，在这个频率上有多亮？** 它是给定温度的标准谱函数。

### 1.3 $I_\nu$ 的定义

沿某方向穿过面积元的能量大小为

$$
dE=I_\nu\,|\cos\theta|\,dA\,dt\,d\nu\,d\Omega.
$$

$\theta$ 是传播方向与面积法线的夹角；若只讨论正向穿过，直接用 $\cos\theta>0$。计算**净通量**时保留余弦正负号。若 $dA_\perp$ 已经是垂直光线的投影面积，就用 $dA_\perp$，不再额外乘一次余弦。

下标 $\nu$ 表示“每单位频率”。全频积分才是总量：

$$
I=\int_0^\infty I_\nu d\nu,\qquad
F=\int_0^\infty F_\nu d\nu,\qquad
L=\int_0^\infty L_\nu d\nu.
$$

## 2. 角度积分：什么时候有 π、2π、4π？

取表面向外法线为极轴，$\mu=\cos\theta$，轴对称时 $d\Omega=2\pi\,d\mu$。

$$
J_\nu=\frac12\int_{-1}^{1}I_\nu(\mu)d\mu,
\qquad
F_\nu=2\pi\int_{-1}^{1}I_\nu(\mu)\mu\,d\mu,
\qquad
u_\nu=\frac{4\pi}{c}J_\nu.
$$

定义向外通量 $F_\nu^+$ 和向内通量的正值大小 $F_\nu^-$：

$$
F_\nu^+=2\pi\int_0^1 I_\nu(\mu)\mu\,d\mu,
\qquad
F_\nu^-=-2\pi\int_{-1}^0 I_\nu(\mu)\mu\,d\mu,
\qquad F_\nu=F_\nu^+-F_\nu^-.
$$

| 角分布 | $J_\nu$ | 净 $F_\nu$ | $u_\nu$ |
|---|---|---|---|
| 全空间各向同性，$I_\nu=I_0$ | $I_0$ | $0$ | $4\pi I_0/c$ |
| 仅向外半球有光且 $I_\nu=I_0$，向内无光 | $I_0/2$ | $\pi I_0$ | $2\pi I_0/c$ |

关键角度积分是

$$
\int_{4\pi}d\Omega=4\pi,\qquad
\int_{\rm hemisphere}d\Omega=2\pi,\qquad
\int_{\rm outward}\mu\,d\Omega=\pi.
$$

因此 **$F_\nu=\pi I_\nu$ 不是一般恒等式**：它要求出射半球内强度不随方向变，且若指净通量还需没有入射。全空间各向同性黑体场反而有 $F_\nu=0$。

辐射压力张量的法向分量可顺便由同一个角分布计算：

$$
P_{\nu,zz}=\frac1c\int_{4\pi}I_\nu\mu^2d\Omega.
$$

全空间各向同性时 $P_{\nu,zz}=u_\nu/3$。这是辐射场的动量通量矩，不应不加条件地当作任意受照表面承受的压力。

## 3. 从发射和吸收到转移方程

### 3.1 局部变化

$$
dI_\nu\big|_{\rm emission}=j_\nu ds,
\qquad
dI_\nu\big|_{\rm absorption}=-\alpha_\nu I_\nu ds.
$$

两者相加：

$$
\boxed{\frac{dI_\nu}{ds}=j_\nu-\alpha_\nu I_\nu
=\alpha_\nu(S_\nu-I_\nu)},\qquad
\boxed{S_\nu=\frac{j_\nu}{\alpha_\nu}}.
$$

量纲检查：$j_\nu ds$ 与 $\alpha_\nu I_\nu ds$ 都必须具有强度单位。若题目给的是对全部方向积分的单位体积发射功率 $\epsilon_\nu$，各向同性时先换成 $j_\nu=\epsilon_\nu/(4\pi)$。

### 3.2 光学深度、柱密度与薄厚

$$
\boxed{\tau_\nu(s_1,s_2)=\int_{s_1}^{s_2}\alpha_\nu(s)ds
=\int_{s_1}^{s_2}\rho(s)\kappa_\nu(s)ds}.
$$

均匀介质：$\tau_\nu=\alpha_\nu\ell=\rho\kappa_\nu\ell$。若 $\kappa_\nu$ 沿路恒定，则 $\tau_\nu=\kappa_\nu\Sigma$，其中 $\Sigma=\int\rho ds$ 是质量柱密度。若可写成吸收体数密度乘有效截面，$\alpha_\nu=n\sigma_{\nu,\rm abs}$，则 $\tau_\nu=N\sigma_{\nu,\rm abs}$。

- $\tau_\nu\ll1$：光学薄，穿透率 $e^{-\tau_\nu}\simeq1-\tau_\nu$。
- $\tau_\nu\gg1$：光学厚，来自远端的光被强烈压低。
- $\tau_\nu=1$：背景透过约 $e^{-1}=0.368$，不能当作完全透明或完全不透明。

同一物体可以在一个频率上厚、另一个频率上薄；也可以中心视线厚、边缘视线薄。正的 $1/\alpha_\nu$ 是强度衰减的特征长度；只有当 $\alpha_\nu$ 对应实际吸收事件率、受激修正可忽略时，才可直接称为吸收平均自由程。

### 3.3 光学深度的两个符号约定

| 坐标定义 | 方程 |
|---|---|
| 沿传播方向增加的 $\tau_\nu$，$d\tau_\nu=\alpha_\nu ds$ | $dI_\nu/d\tau_\nu=S_\nu-I_\nu$ |
| 平面大气中从表面向内增加的法向深度 $t_\nu$，$\mu$ 相对向外法线 | $\mu\,dI_\nu/dt_\nu=I_\nu-S_\nu$ |

使用教材公式前先看深度的正方向，不能凭记忆统一改正负号。

## 4. 转移方程直接可用的解

### 4.1 任意位置变化的介质

令 $s=0$ 为入口、$s=\ell$ 为出口。最不易混淆的形式为

$$
\boxed{
I_{\nu,\rm out}=I_{\nu,\rm in}
\exp\!\left[-\int_0^\ell\alpha_\nu ds\right]
+\int_0^\ell j_\nu(s)
\exp\!\left[-\int_s^\ell\alpha_\nu(s')ds'\right]ds
}.
$$

含义：**透过的背景 + 每一处新发出的光乘上它到出口的透过率。**

若光学深度从入口累加到出口的 $\tau_0$，则等价地

$$
I_{\nu,\rm out}=I_{\nu,\rm in}e^{-\tau_0}
+\int_0^{\tau_0}S_\nu(t)e^{-(\tau_0-t)}dt.
$$

### 4.2 常源函数：最常用解

$$
\boxed{I_{\nu,\rm out}=I_{\nu,\rm in}e^{-\tau_\nu}
+S_\nu(1-e^{-\tau_\nu})}.
$$

需要 $S_\nu$ 沿光路恒定，**不需要 $\alpha_\nu$ 本身恒定**。等温且 LTE 是使 $S_\nu$ 恒定的一种常用条件；单独“等温”不够。

| 情形 | 结果 | 解释 |
|---|---|---|
| 无自身发射，$j_\nu=0$ | $I_{\nu,\rm out}=I_{\nu,\rm in}e^{-\tau_\nu}$ | 纯衰减 |
| 无吸收，$\alpha_\nu=0$ | $I_{\nu,\rm out}=I_{\nu,\rm in}+\int j_\nu ds$ | 用原方程，避免除以零定义 $S_\nu$ |
| 无背景 | $I_{\nu,\rm out}=S_\nu(1-e^{-\tau_\nu})$ | 只有介质自身发射 |
| 常 $S_\nu$、$\tau_\nu\ll1$ | $I_{\nu,\rm out}\simeq I_{\nu,\rm in}+(S_\nu-I_{\nu,\rm in})\tau_\nu$ | 有背景时别漏掉吸收项 |
| 常 $S_\nu$、$\tau_\nu\gg1$ | $I_{\nu,\rm out}\simeq S_\nu$ | 背景信息被压低 |

对于 $\alpha_\nu>0$、常 $S_\nu$，输出是 $I_{\nu,\rm in}$ 与 $S_\nu$ 的加权平均，因此一定介于两者之间。这是检查计算结果最方便的方法之一。

### 4.3 “看到 $\tau\sim1$”是什么意思？

改用从观察侧出口向里量的**剩余视线光学深度** $q$。半无限介质给出

$$
I_{\nu,\rm out}=\int_0^\infty S_\nu(q)e^{-q}dq.
$$

$e^{-q}$ 的归一化平均深度为 1，所以在源函数随深度平滑变化时，可以把出射强度看作约由 $q\sim1$ 附近代表。它不是一张严格的发射薄壳：常源函数时，$0<q<1$ 贡献约 63%，$0<q<3$ 贡献约 95%。

平面平行、半无限大气中，对 $\mu>0$：

$$
I_\nu(0,\mu)=\int_0^\infty S_\nu(t)e^{-t/\mu}\frac{dt}{\mu}
\simeq S_\nu(t=\mu).
$$

最后一步是 **Eddington–Barbier 近似**；若 $S_\nu(t)$ 对法向光学深度严格线性，该式精确成立。LTE 下可写 $I_\nu(0,\mu)\simeq B_\nu[T(t=\mu)]$。看向边缘时 $\mu$ 小，通常看到更浅的层；若外层更冷，就产生临边昏暗。

## 5. LTE、黑体与辐射平衡

### 5.1 哪些条件允许写 $S_\nu=B_\nu$？

局域热力学平衡（local thermodynamic equilibrium，LTE）用局部温度、密度和组成的平衡分布描述物质。对本文的热吸收与发射模型，Kirchhoff 定律给出

$$
\boxed{j_\nu=\alpha_\nu B_\nu(T)}
\quad\Longrightarrow\quad
\boxed{S_\nu=B_\nu(T)}.
$$

这里的净吸收系数包含受激辐射修正。LTE 约束的是局部物质，不要求每个方向的实际辐射都是当地黑体。

| 条件或表述 | 可以得出什么 | 不能自动得出什么 |
|---|---|---|
| 物质 LTE，本文吸收／发射模型 | $S_\nu=B_\nu[T(s)]$ | $I_\nu=B_\nu$ |
| 等温 | $T$ 不随位置变化 | 单凭等温不能推出 $S_\nu=B_\nu$ |
| 等温 + LTE | $S_\nu=B_\nu(T)$ 沿路恒定 | 有限光学深度时仍可能 $I_\nu\ne B_\nu$ |
| 等温 + LTE + 视线光学厚 | 出射 $I_\nu\simeq B_\nu(T)$ | 所有频率都厚，或整个谱必为单温黑体 |
| 物质和辐射共同处于完整热力学平衡 | $I_\nu=J_\nu=S_\nu=B_\nu(T)$ | 辐射能量为零；此时只是净通量为零 |

**热发射不一定呈现黑体谱。** 等温 LTE、无背景时

$$
I_\nu=B_\nu(T)(1-e^{-\tau_\nu});
\qquad \tau_\nu\ll1\Rightarrow I_\nu\simeq B_\nu(T)\tau_\nu.
$$

光学薄谱含有 $\tau_\nu$ 的频率依赖；温度不均匀的光学厚源，不同频率也可能探测不同温度层。

### 5.2 辐射平衡只限制净能量交换

各向同性的 $j_\nu,\alpha_\nu$ 下，物质每单位体积的辐射净加热率为

$$
Q_{\rm rad}=4\pi\int_0^\infty(\alpha_\nu J_\nu-j_\nu)d\nu.
$$

正值表示物质被加热。辐射平衡（radiative equilibrium）要求 $Q_{\rm rad}=0$。若另有 LTE：

$$
\int_0^\infty\alpha_\nu[J_\nu-B_\nu(T)]d\nu=0.
$$

这是全频率的净平衡，**不能推出每个频率上 $J_\nu=B_\nu$**。在稳态，$\nabla\cdot\boldsymbol F=-Q_{\rm rad}$；平面平行辐射平衡中总净通量不随深度变化，但各频率通量可以变化。

## 6. Planck 谱及其近似

### 6.1 精确式与两个极限

定义 $x=h\nu/(kT)=hc/(\lambda kT)$：

$$
\boxed{B_\nu(T)=\frac{2h\nu^3}{c^2}\frac1{e^x-1}},
\qquad
\boxed{B_\lambda(T)=\frac{2hc^2}{\lambda^5}
\frac1{e^{hc/(\lambda kT)}-1}}.
$$

| 极限 | 条件 | 近似式 |
|---|---|---|
| Rayleigh–Jeans（RJ） | $x\ll1$ | $B_\nu\simeq2kT\nu^2/c^2$；$B_\lambda\simeq2ckT/\lambda^4$ |
| Wien | $x\gg1$ | $B_\nu\simeq(2h\nu^3/c^2)e^{-x}$ |

RJ 是否适用由**频率与温度一起**决定，不能只看“是不是射电”。快速判断：

$$
\frac{h\nu}{k}=0.0479924\,\mathrm K\left(\frac{\nu}{\mathrm{GHz}}\right),
\qquad
\frac{hc}{\lambda k}=\frac{1.43878\times10^4\,\mathrm{\mu m\,K}}{\lambda}.
$$

RJ 比精确 Planck 值偏高，其相对误差为

$$
\frac{B_\nu^{\rm RJ}-B_\nu}{B_\nu}=\frac{e^x-1}{x}-1
\simeq\frac x2.
$$

例如 $x=0.1$ 时误差约 5.2%；要求约 1% 精度时应取 $x\lesssim0.02$。

### 6.2 频率谱和波长谱的转换

对 $I,F,f,B$ 等谱密度都要保留 Jacobian：

$$
X_\lambda=X_\nu\left|\frac{d\nu}{d\lambda}\right|
=\frac{c}{\lambda^2}X_\nu,
\qquad
\lambda X_\lambda=\nu X_\nu.
$$

右边的 $X_\nu$ 在 $\nu=c/\lambda$ 处取值。不能只把 $\nu$ 换成 $c/\lambda$。若使用 cgs 上式得到“每 cm”的波长谱，换为“每 Å”需再乘 $10^{-8}$，换为“每 μm”需再乘 $10^{-4}$。

### 6.3 谱峰与全频积分

| 所求峰值 | 位置 |
|---|---|
| $B_\nu$ 的峰 | $h\nu_{\max}/(kT)=2.82144$；$\nu_{\max}=5.87893\times10^{10}(T/\mathrm K)\,\mathrm{Hz}$ |
| $B_\lambda$ 的峰 | $\lambda_{\max}T=2.89777\times10^{-3}\,\mathrm{m\,K}$ |
| $\nu B_\nu=\lambda B_\lambda$ 的峰 | $h\nu/(kT)=3.92069$ |

因此 $B_\lambda$ 的峰值波长不等于 $c/\nu_{\max}^{(B_\nu)}$。报告“谱峰”时要说明画的是哪种谱密度。

$$
\int_0^\infty B_\nu(T)d\nu=\frac{\sigma_{\rm SB}}\pi T^4,
\qquad F_{\rm BB}^+=\sigma_{\rm SB}T^4.
$$

完整各向同性黑体场的能量密度为

$$
u=aT^4,\qquad a=\frac{4\sigma_{\rm SB}}c.
$$

仅有黑体出射半球、另一半球为空时，局部 $u=aT^4/2$；不要把它与封闭黑体腔内的能量密度混用。

## 7. 从强度算观测流量和光度

### 7.1 为什么 $I_\nu$ 不按距离平方衰减，$f_\nu$ 却会？

在本文无红移、无介质作用的真空传播条件下，沿同一光线

$$
\frac{dI_\nu}{ds}=0.
$$

固定源的角面积却随距离缩小：$\Omega_{\rm src}\propto d^{-2}$。于是

$$
\boxed{f_\nu\simeq\int_{\rm src}I_\nu d\Omega
=\bar I_\nu\Omega_{\rm src}\propto d^{-2}}.
$$

上式取源角尺度小、探测面近似垂直于中心光线。它解释了“表面亮度不变，但整个源收到的总光变少”。未分辨源的**波束平均**亮度还受源在波束中的填充比例影响，不能据此说源本征 $I_\nu$ 随距离衰减。强度守恒与小角源流量关系也可对照 [NRAO《Essential Radio Astronomy》§2.1](https://www.cv.nrao.edu/~sransom/web/Ch2.html)。

### 7.2 投影面积公式

远处源有 $d\Omega\simeq dA_{\rm proj}/d^2$，因此

$$
\boxed{f_\nu=\frac1{d^2}\int_{\rm projected\ source}I_\nu\,dA_{\rm proj}}.
$$

圆对称源、投影半径为 $b$：

$$
\boxed{f_\nu=\frac{2\pi}{d^2}\int_0^R I_\nu(b)b\,db}.
$$

若圆面强度均匀，$f_\nu=I_\nu\pi R^2/d^2$。这里用的是**投影圆面积 $\pi R^2$**，不是球表面积 $4\pi R^2$。

### 7.3 恒星表面、总光度、观测位置

球对称源、表面净通量均匀时：

$$
L_\nu=4\pi R^2F_{\nu,\rm surf},
\qquad
f_\nu=\frac{L_\nu}{4\pi d^2}
=F_{\nu,\rm surf}\left(\frac Rd\right)^2.
$$

均匀黑体恒星、无外来照明时：

$$
F_{\nu,\rm surf}=\pi B_\nu(T),\qquad
L_\nu=4\pi^2R^2B_\nu(T),\qquad
f_\nu=\pi B_\nu(T)\left(\frac Rd\right)^2,
$$

$$
L=4\pi R^2\sigma_{\rm SB}T^4,\qquad
f_{\rm bol}=\sigma_{\rm SB}T^4\left(\frac Rd\right)^2.
$$

无各向同性发射依据时，$4\pi d^2f$ 只是各向同性等效光度 $L_{\rm iso}$。某一波段的 $f_{\rm band}=\int_{\rm band}f_\nu d\nu$ 也不能直接当作全频 $f_{\rm bol}$。

### 7.4 常用观测换算

$$
1\,\mathrm{Jy}=10^{-23}\,\mathrm{erg\,s^{-1}\,cm^{-2}\,Hz^{-1}}
=10^{-26}\,\mathrm{W\,m^{-2}\,Hz^{-1}}.
$$

谱在频带内近似不变时，$f_{\rm band}\simeq f_\nu\Delta\nu$。光子流量密度为 $f_\nu/(h\nu)$，光子计数率为

$$
\dot N=\int\frac{f_\nu A_{\rm eff}(\nu)}{h\nu}d\nu,
$$

其中 $A_{\rm eff}$ 需包含所采用的探测效率。

圆盘角半径为 $\theta_R\ll1$ 弧度时，$\Omega_{\rm src}\simeq\pi\theta_R^2$；若给的是角直径，必须先除以 2。$1''=4.84814\times10^{-6}\,\mathrm{rad}$。

## 8. 亮温、有效温度和颜色温度

### 8.1 Planck 亮温：用单频强度反解温度

定义亮温（brightness temperature）$T_{b,\rm P}$：

$$
I_\nu=B_\nu(T_{b,\rm P})
\quad\Longrightarrow\quad
\boxed{T_{b,\rm P}=\frac{h\nu}{k}
\left[\ln\left(1+\frac{2h\nu^3}{c^2I_\nu}\right)\right]^{-1}}.
$$

这只是在问“哪个黑体在此频率同样亮”，不证明源是黑体。射电常用另一种约定：

$$
\boxed{T_{b,\rm RJ}\equiv\frac{c^2I_\nu}{2k\nu^2}}
\simeq\frac{c^2f_\nu}{2k\nu^2\Omega_{\rm src}}
\quad\text{（均匀小角源）}.
$$

两种亮温在 RJ 极限下相同；离开 RJ 极限需要区分。一个真实温度为 $T$ 的黑体，其 RJ 亮温为

$$
T_{b,\rm RJ}=\frac{h\nu/k}{e^{h\nu/(kT)}-1},
$$

此值一般小于 $T$。**不要把 RJ 近似式反解出的温度，不加条件地当作 Planck 亮温。**

### 8.2 等温 LTE 介质的亮温

无背景时 $I_\nu=B_\nu(T)(1-e^{-\tau_\nu})$，因此精确 Planck 亮温满足 $T_{b,\rm P}\le T$。若气体处在 RJ 极限，还可写

$$
T_{b,\rm RJ}\simeq T(1-e^{-\tau_\nu})
\simeq
\begin{cases}
T\tau_\nu,&\tau_\nu\ll1,\\
T,&\tau_\nu\gg1.
\end{cases}
$$

有背景时，在气体源函数可用 RJ 近似的条件下：

$$
T_{b,\rm out}\simeq T_{b,\rm bg}e^{-\tau_\nu}
+T(1-e^{-\tau_\nu}),
$$

其中 $T_b$ 均指 RJ 亮温。背景较亮时，$T_{b,\rm out}$ 可以大于气体温度，因此上面的 $T_b\le T$ 不能随意推广。

未分辨源只给 $f_\nu$ 时，缺少 $\Omega_{\rm src}$，无法唯一确定本征亮温。若只知道 $\Omega_{\rm src}\le\Omega_{\max}$，可得平均 RJ 亮温下限

$$
\bar T_{b,\rm RJ}\ge\frac{c^2f_\nu}{2k\nu^2\Omega_{\max}}.
$$

### 8.3 三种温度不要混用

| 温度 | 定义／测量方式 | 主要依赖 |
|---|---|---|
| 亮温 $T_b(\nu)$ | 匹配某一频率的强度 | 频率、角面积、光学深度及背景 |
| 有效温度 $T_{\rm eff}$ | 总表面出射通量 $F_{\rm bol}^+=\sigma_{\rm SB}T_{\rm eff}^4$ | 总辐射功率与所采用的发射面积 |
| 颜色温度 $T_{\rm col}$ | 用黑体谱形或颜色比拟合温度 | 波段、消光、发射率的频率依赖 |

孤立恒星通常没有显著入射，$F^+=F$，于是 $L=4\pi R^2\sigma_{\rm SB}T_{\rm eff}^4$。有外部照射时须说明使用的是出射、净通量还是内部通量。

单温黑体源的 Planck 亮温、有效温度和可测的颜色温度均对应同一 $T$。若只有 RJ 波段，$f_\nu\propto C T\nu^2$，谱形本身不能把未知归一化 $C$ 与温度分开，颜色比通常无法测温。

## 9. 平板、球形云与多层介质模板

### 9.1 等温 LTE 平板

已知法向总光学深度 $\tau_{\nu,\perp}$，光线与法线夹角余弦为 $\mu>0$。对横向足够大的平面平行板：

$$
\tau_{\nu,\rm ray}=\frac{\tau_{\nu,\perp}}\mu,
\qquad
\boxed{I_{\nu,\rm out}(\mu)=I_{\nu,\rm bg}(\mu)e^{-\tau_{\nu,\perp}/\mu}
+B_\nu(T)(1-e^{-\tau_{\nu,\perp}/\mu})}.
$$

无背景时，单侧出射通量是

$$
F_\nu^+=2\pi B_\nu(T)\int_0^1
\left(1-e^{-\tau_{\nu,\perp}/\mu}\right)\mu\,d\mu.
$$

法向厚时趋于 $\pi B_\nu$；法向深度趋零时，领先项为 $F_\nu^+\sim2\pi B_\nu\tau_{\nu,\perp}$。薄板仍有极斜光路可能光学厚，所以不能把 $1-e^{-\tau/\mu}\simeq\tau/\mu$ 当作对所有 $\mu$ 都均匀成立。

### 9.2 均匀球形云：先弦长，后强度，最后面积积分

球半径 $R$，$j_\nu,\alpha_\nu$ 沿球内恒定；视线到球心的投影距离为 $b$：

$$
\ell(b)=2\sqrt{R^2-b^2},\qquad
\tau_\nu(b)=2\alpha_\nu\sqrt{R^2-b^2}.
$$

无背景时

$$
\boxed{I_\nu(b)=S_\nu
\left[1-e^{-2\alpha_\nu\sqrt{R^2-b^2}}\right]}.
$$

若是等温 LTE，代入 $S_\nu=B_\nu(T)$ 即可。光学薄极限给出

$$
I_\nu(b)\simeq2j_\nu\sqrt{R^2-b^2},\qquad
I_{\nu,\rm center}=2j_\nu R,
$$

$$
f_\nu=\frac{2\pi}{d^2}\int_0^R I_\nu(b)b\,db
\simeq\frac{4\pi j_\nu R^3}{3d^2}.
$$

源圆面平均强度为

$$
\bar I_\nu=\frac{f_\nu}{\pi R^2/d^2}
=\frac43j_\nu R=\frac23I_{\nu,\rm center}.
$$

**光学薄均匀球不是均匀亮度圆盘**，其中心较亮。光学很厚时，绝大部分圆面趋于 $I_\nu\simeq S_\nu$，但有限不透明度下极靠近边缘的弦长仍趋零。

更一般地，若源各处发射各向同性、所有相关光路均光学薄：

$$
L_\nu=4\pi\int_Vj_\nu dV,
\qquad f_\nu=\frac1{d^2}\int_Vj_\nu dV.
$$

球的全光学深度公式也可直接使用。令中心总深度 $\tau_c=2\alpha_\nu R$，常源函数、无背景时：

$$
f_\nu=\frac{\pi R^2S_\nu}{d^2}
\left[1-\frac{2}{\tau_c^2}
\left(1-(1+\tau_c)e^{-\tau_c}\right)\right].
$$

括号在薄极限为 $2\tau_c/3+O(\tau_c^2)$，厚极限趋于 1。数值计算中若 $\tau_c$ 极小，使用薄极限或积分式，避免两个接近数相减造成精度损失。

### 9.3 多层介质：从后往前逐层算

若第 1 层离观察者最远，第 $N$ 层最近，每层源函数为常数：

$$
\boxed{I_\nu^{(i)}=I_\nu^{(i-1)}e^{-\tau_{\nu,i}}
+S_{\nu,i}(1-e^{-\tau_{\nu,i}})},
\qquad I_\nu^{(0)}=I_{\nu,\rm bg}.
$$

把一层的输出作为下一层输入。各层光学深度可以相加；不同源函数的层通常不能直接用算术平均的 $S_\nu$ 合并。层的前后顺序会影响结果。

## 10. 吸收线与发射线

### 10.1 最直接的判断式

常源函数、正光学深度的一层介质：

$$
\boxed{\Delta I_\nu\equiv I_{\nu,\rm out}-I_{\nu,\rm bg}
=(S_\nu-I_{\nu,\rm bg})(1-e^{-\tau_\nu})}.
$$

| 比较结果 | 沿这条光线观察到什么 |
|---|---|
| $S_\nu<I_{\nu,\rm bg}$ | 相对背景减弱 |
| $S_\nu>I_{\nu,\rm bg}$ | 相对背景增强 |
| $S_\nu=I_{\nu,\rm bg}$ | 无强度反差，即使介质不透明 |

若这层介质只在谱线附近有显著不透明度，邻近连续谱近似等于未受影响的背景，上表便直接给出吸收线／发射线判据。若线和连续谱都被介质改变，必须与**实际出射连续谱**比较。

“冷气体产生吸收线”隐含背景比该气体源函数更亮；相同气体投影在暗天空上仍能显示发射。源未分辨时，最终要对所有视线积分：某些视线吸收、另一些发射，净谱线取决于面积和强度权重。

### 10.2 线和连续谱叠加

若 $\alpha_{\nu,c},\alpha_{\nu,l}$ 分别是连续谱与谱线净吸收系数，则

$$
j_{\nu,\rm tot}=j_{\nu,c}+j_{\nu,l},\qquad
\alpha_{\nu,\rm tot}=\alpha_{\nu,c}+\alpha_{\nu,l},
$$

$$
S_{\nu,\rm tot}=
\frac{\alpha_{\nu,c}S_{\nu,c}+\alpha_{\nu,l}S_{\nu,l}}
{\alpha_{\nu,c}+\alpha_{\nu,l}}.
$$

源函数按吸收系数加权，不能直接相加。同温 LTE 下，二者源函数都是 $B_\nu(T)$，总源函数仍为 $B_\nu(T)$。

非等温 LTE 大气也能形成谱线：线心不透明度通常较大，$\tau_\nu\sim1$ 对应较浅位置；若温度向外降低，线心取样到较低的 $B_\nu$，因而可以呈现吸收线。

## 11. 代入顺序与易错检查

### 11.1 拿到题目按这个顺序处理

1. **确定要算的量。** 是某条光线的 $I_\nu$、源的 $f_\nu$、表面 $F_\nu$，还是总光度 $L$？
2. **检查定义和单位。** 发射系数是否按每 sr 定义？给的是频率谱还是波长谱？角大小是半径还是直径？
3. **写出几何路径。** 平板用 $\ell/|\mu|$，球用 $2\sqrt{R^2-b^2}$；先求视线 $\tau_\nu$。
4. **判断源函数。** 一般取 $j_\nu/\alpha_\nu$；只有条件满足时才换成 $B_\nu(T)$。
5. **指定背景与边界。** 选一般形式解、常源函数解或多层递推；有背景时保留它。
6. **最后才做观测积分。** 从 $I_\nu$ 对源角面积积分得 $f_\nu$；对出射方向积分得表面 $F_\nu^+$；需要总量再积频率。
7. **检查极限。** $\tau\to0$ 应回到背景；常 $S$、$\tau\to\infty$ 应趋于 $S$；$j=\alpha=0$ 时 $I_\nu$ 应沿线守恒。

### 11.2 最容易混淆的等号

| 容易直接写下的式子 | 正确使用条件或修正 |
|---|---|
| $I_\nu=S_\nu$ | 常源函数光学厚输出近似如此；一般需要解转移方程 |
| $S_\nu=B_\nu$ | 本文无散射热吸收／发射模型中，LTE 保证成立 |
| $I_\nu=B_\nu$ | 实际辐射为黑体；LTE 本身不够 |
| $F_\nu=\pi I_\nu$ | 半球角分布均匀；若指净通量还需无入射 |
| $u_\nu=4\pi I_\nu/c$ | 全空间各向同性；一般应写 $4\pi J_\nu/c$ |
| $f_\nu=I_\nu\Omega$ | $I_\nu$ 是均匀值或源平均值，不能随意用中心值 |
| $I_\nu\propto d^{-2}$ | 真空无红移时守恒的是沿线 $I_\nu$，按 $d^{-2}$ 变化的是固定源的 $f_\nu$ |
| $T_b=\tau_\nu T$ | 无背景、等温 LTE、光学薄，而且使用 RJ 极限 |
| $\tau_\nu=\alpha_\nu R$ | 必须检查路径；球中心穿透全程是 $2R$，不是 $R$ |
| $\int B_\nu d\nu=\sigma T^4$ | 正确是 $\sigma_{\rm SB}T^4/\pi$ |
| $B_\lambda=B_\nu(c/\lambda)$ | 必须额外乘 $c/\lambda^2$，并统一波长单位 |
| $j_\nu$ 是总功率密度 | 本文还含每 sr；各向同性总发射率为 $4\pi j_\nu$ |

## 附录 A. Einstein 系数与谱线源函数

本附录只保留已学吸收／发射线与 $j_\nu,\alpha_\nu,S_\nu$ 的连接。若题目已经给了这些系数，可跳过。

取下、上能级为 1、2，数密度为 $n_1,n_2$，简并度为 $g_1,g_2$，能级差 $h\nu_0$。假设自发发射各向同性，并对吸收、受激发射和自发发射采用同一窄线型 $\phi(\nu)$：

$$
\int\phi(\nu)d\nu=1,\qquad
\bar J=\int J_\nu\phi(\nu)d\nu.
$$

采用 RL 的平均强度约定，每个相应能级原子的跃迁率是

$$
R_{12}=B_{12}\bar J,\qquad
R_{21}^{\rm sp}=A_{21},\qquad
R_{21}^{\rm stim}=B_{21}\bar J.
$$

系数之间满足

$$
g_1B_{12}=g_2B_{21},\qquad
\frac{A_{21}}{B_{21}}=\frac{2h\nu_0^3}{c^2}.
$$

**$B_{12},B_{21}$ 是跃迁系数，$B_\nu(T)$ 是 Planck 函数，不是同一个量。** 若资料采用 $R=B^{(u)}\bar u$ 的能量密度约定，则 $B^{(J)}=(4\pi/c)B^{(u)}$，相应 $A_{21}/B_{21}^{(u)}=8\pi h\nu_0^3/c^3$。

发射与净吸收系数：

$$
\boxed{j_\nu=\frac{h\nu_0}{4\pi}n_2A_{21}\phi(\nu)},
$$

$$
\boxed{\alpha_\nu=\frac{h\nu_0}{4\pi}
(n_1B_{12}-n_2B_{21})\phi(\nu)}.
$$

受激辐射正比于已有光束，已经作为负吸收计入 $\alpha_\nu$，不要再把它重复加入上面的 $j_\nu$。

线源函数为

$$
\boxed{S_\nu=\frac{2h\nu_0^3}{c^2}
\left(\frac{n_1g_2}{n_2g_1}-1\right)^{-1}}.
$$

LTE 下 $n_2/n_1=(g_2/g_1)e^{-h\nu_0/(kT)}$，从而

$$
S_\nu=B_{\nu_0}(T)\simeq B_\nu(T),
\qquad
\alpha_\nu=\frac{h\nu_0}{4\pi}n_1B_{12}
\left(1-e^{-h\nu_0/(kT)}\right)\phi(\nu).
$$

这里写 $B_{\nu_0}\simeq B_\nu$ 是采用窄谱线近似，不是说 Planck 函数一般不随频率变化。

若 $n_2/g_2>n_1/g_1$，则 $\alpha_\nu<0$，发生受激放大。此时前文依赖正光学深度的衰减、加权平均和“光学厚趋于 $S$”结论均不能套用。

## 附录 B. 常数与资料

### 常数

| 常数 | cgs 数值 |
|---|---|
| $c$ | $2.99792458\times10^{10}\,\mathrm{cm\,s^{-1}}$ |
| $h$ | $6.62607015\times10^{-27}\,\mathrm{erg\,s}$ |
| $k$ | $1.380649\times10^{-16}\,\mathrm{erg\,K^{-1}}$ |
| $\sigma_{\rm SB}$ | $5.670374419\times10^{-5}\,\mathrm{erg\,cm^{-2}\,s^{-1}\,K^{-4}}$ |
| $a=4\sigma_{\rm SB}/c$ | $7.56573\times10^{-15}\,\mathrm{erg\,cm^{-3}\,K^{-4}}$ |

### 对应已有学习内容

本文主要从以下现有笔记提取并统一符号；平面大气的出射积分、全光学深度球云公式作为直接可用的几何补充。

- [辐射转移基础与习题 1.1–1.4 总结](/learning/radiation/ast1440-radiative-transfer-exercises-1-1-to-1-4)：强度、角矩、转移方程与基本几何。
- [热辐射与观测课堂笔记](/learning/radiation/ast1440-thermal-radiation-observations-exercises-1-3-1-5-1-6)：LTE、Planck 谱、温度定义与观测换算。
- [Einstein 系数与吸收发射线详解](/learning/radiation/ast1440-einstein-coefficients-absorption-emission-lines-exercises-1-7-to-1-9)：受激辐射修正、谱线源函数和球云模型。

本速查表不替代这些笔记中的完整推导；查公式时保留本表列出的边界条件、光学深度方向和几何假设。
