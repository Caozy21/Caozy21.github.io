---
title: "AST1440 非相对论偶极辐射、Thomson 散射与制动辐射：RL §3.3、§3.4、§5.1 及习题 3.1、3.4 详解"
description: "系统推导非相对论加速电荷与电偶极辐射、Thomson 散射截面与偏振、电子—离子制动辐射和 Gaunt factor，并完整解答 RL 习题 3.1 与 3.4。"
date: "2026-10-15"
tags: ["AST1440","Dipole radiation","Thomson scattering","Bremsstrahlung","Polarization","Exercises"]
order: 11
draft: false
---

# AST1440 非相对论偶极辐射、Thomson 散射与制动辐射：RL §3.3、§3.4、§5.1 及习题 3.1、3.4 详解

> 课程：AST1440 — Radiation。  
> 教材：Rybicki & Lightman，*Radiative Processes in Astrophysics*（简称 RL），§3.3（印刷页 83–90；本次跳过一般多极展开）、§3.4（印刷页 90–93）、§5.1（印刷页 156–159）；Problems 3.1（印刷页 102–103）与 3.4（印刷页 104）。  
> 整理日期：2026 年 10 月 15 日。  
> 本文按物理依赖关系整理教材和预习讨论中的全部关键追问：velocity field 与 radiation field 为什么分别按 $R^{-2}$ 和 $R^{-1}$ 衰减、dipole pattern 的几何、为什么偶极频谱含有 $\omega^4|\mathbf d(\omega)|^2$、Thomson differential/total cross section 如何得到、偏振与未偏振光的区别、photon recoil 与 Thomson limit、单次 Coulomb 碰撞如何产生连续制动辐射频谱、impact parameter 积分及其系数、经典与量子 $b_{\min}$、Gaunt factor 的意义，以及两道指定习题的完整解。

## 目录

1. [本次内容的逻辑主线与核心结论](#1-本次内容的逻辑主线与核心结论)
2. [统一符号、单位制与近似条件](#2-统一符号单位制与近似条件)
3. [非相对论运动电荷：velocity field、radiation field 与 Larmor formula](#3-非相对论运动电荷velocity-fieldradiation-field-与-larmor-formula)
4. [电偶极辐射、dipole pattern 与频谱](#4-电偶极辐射dipole-pattern-与频谱)
5. [Thomson scattering：从受迫电子到散射截面](#5-thomson-scattering从受迫电子到散射截面)
6. [偏振、未偏振光与散射偏振](#6-偏振未偏振光与散射偏振)
7. [Photon recoil、Thomson limit 与 Compton 修正](#7-photon-recoilthomson-limit-与-compton-修正)
8. [单次电子—离子碰撞的制动辐射频谱](#8-单次电子离子碰撞的制动辐射频谱)
9. [从单次碰撞到等离子体发射率：impact parameter 积分](#9-从单次碰撞到等离子体发射率impact-parameter-积分)
10. [$b_{\min}$、$b_{\max}$ 与 free-free Gaunt factor](#10-b_minb_max-与-free-free-gaunt-factor)
11. [习题 3.1：旋转中子星的磁偶极辐射](#11-习题-31旋转中子星的磁偶极辐射)
12. [习题 3.4：中心光源周围的电子散射云](#12-习题-34中心光源周围的电子散射云)
13. [量纲检查、极限检验与常见混淆](#13-量纲检查极限检验与常见混淆)
14. [English assignment-ready solutions](#14-english-assignment-ready-solutions)
15. [复习清单与核心公式](#15-复习清单与核心公式)
16. [参考资料](#16-参考资料)

---

## 1. 本次内容的逻辑主线与核心结论

这三节并不是彼此分散的三个主题，而是同一条微观辐射链：

$$
\boxed{
\text{加速电荷辐射}
\longrightarrow
\text{入射电磁波驱动电子振荡：Thomson scattering}
\longrightarrow
\text{离子 Coulomb 场偏转电子：bremsstrahlung}
}.
$$

第一步的基本结果是非相对论加速电荷的 Larmor formula：

$$
\boxed{
\frac{dP}{d\Omega}
=\frac{q^2a^2}{4\pi c^3}\sin^2\theta,
\qquad
P=\frac{2q^2a^2}{3c^3}
}.
$$

对于一个尺寸远小于波长的电荷系统，辐射由总电偶极矩

$$
\mathbf d=\sum_i q_i\mathbf r_i
$$

的二阶时间导数控制：

$$
\boxed{
P=\frac{2|\ddot{\mathbf d}|^2}{3c^3},
\qquad
\frac{dW}{d\omega}
=\frac{8\pi\omega^4}{3c^3}|\mathbf d(\omega)|^2
}.
$$

入射电场使自由电子产生加速度。电子随后作为振荡偶极子重新辐射，给出 Thomson scattering：

$$
\boxed{
\left(\frac{d\sigma}{d\Omega}\right)_{\rm pol}
=r_e^2\sin^2\Theta
},
$$

$$
\boxed{
\left(\frac{d\sigma}{d\Omega}\right)_{\rm unpol}
=\frac{r_e^2}{2}(1+\cos^2\theta),
\qquad
\sigma_T=\frac{8\pi}{3}r_e^2
}.
$$

这里

$$
r_e=\frac{e^2}{m_ec^2}
$$

是 classical electron radius。普通 Thomson limit 要求

$$
\boxed{h\nu\ll m_ec^2=511\ {\rm keV}}.
$$

最后，电子掠过离子时受到短暂 Coulomb acceleration。一次 impact parameter 为 $b$ 的碰撞在低频端给出

$$
\boxed{
\frac{dW(b)}{d\omega}
=\frac{8Z^2e^6}{3\pi c^3m_e^2v^2b^2},
\qquad
\omega\lesssim\frac{v}{b}
}.
$$

对所有电子—离子碰撞和 impact parameter 积分后，得到

$$
\boxed{
\frac{dW}{d\omega\,dV\,dt}
=\frac{16e^6}{3c^3m_e^2v}
n_en_iZ^2
\ln\!\left(\frac{b_{\max}}{b_{\min}}\right)
}.
$$

更完整的结果用 free-free Gaunt factor $g_{\rm ff}$ 表示。

---

## 2. 统一符号、单位制与近似条件

### 2.1 符号表

| 符号 | 含义 | 说明 |
|---|---|---|
| $q$ | 一般带电粒子的电荷 | 可正可负；功率只依赖 $q^2$ |
| $e$ | 基本电荷量的正值 | 电子电荷为 $-e$ |
| $m_e$ | 电子质量 | Thomson 与 free-free 公式中的 $m$ |
| $\mathbf n$ | 源指向观察者的单位向量 | 也是远区辐射传播方向 |
| $R$ | 源到观察点的距离 | 远区场中使用 retarded distance |
| $\mathbf u,\mathbf a$ | 粒子速度、加速度 | $\mathbf a=\dot{\mathbf u}$ |
| $\mathbf d$ | 电偶极矩 | $\mathbf d=\sum_iq_i\mathbf r_i$ |
| $\mathbf m$ | 磁偶极矩 | 不要与粒子质量 $m_e$ 混淆 |
| $\boldsymbol\epsilon$ | 入射光的偏振单位向量 | $\boldsymbol\epsilon\perp\mathbf k$ |
| $\Theta$ | 入射偏振方向与散射方向的夹角 | $\cos\Theta=\boldsymbol\epsilon\cdot\mathbf n$ |
| $\theta$ | 入射传播方向与散射方向的夹角 | 通常称 scattering angle |
| $r_e$ | 经典电子半径 | $e^2/(m_ec^2)$，Gaussian-cgs |
| $\sigma_T$ | Thomson 总截面 | $8\pi r_e^2/3$ |
| $b$ | impact parameter | 未受扰动直线轨迹到离子的最近距离 |
| $n_e,n_i$ | 电子、离子数密度 | 单位通常为 ${\rm cm^{-3}}$ |
| $Z$ | 离子电荷数 | 离子电荷为 $Ze$ |
| $g_{\rm ff}$ | free-free Gaunt factor | 无量纲修正因子 |

### 2.2 Gaussian-cgs 单位制

RL 本节使用 Gaussian-cgs。真空平面波满足

$$
\mathbf B=\hat{\mathbf k}\times\mathbf E,
\qquad
|\mathbf B|=|\mathbf E|,
$$

Poynting vector 为

$$
\boxed{
\mathbf S=\frac{c}{4\pi}\mathbf E\times\mathbf B
}.
$$

若 $E(t)=E_0\sin\omega t$，$E_0$ 是峰值振幅，则

$$
\boxed{
\langle S\rangle=\frac{cE_0^2}{8\pi}
}.
$$

SI 中的 $e$ 与场公式带有 $\epsilon_0$，不能把 SI 与 Gaussian-cgs 的公式或数值直接混用。

### 2.3 本文的主要近似

- §3.3：粒子非相对论，$u/c\ll1$；观察点在源的远区；所有源量原则上取 retarded time。
- 电偶极近似：源尺寸 $L\ll\lambda$，源内不同位置的 retardation phase 可以忽略。
- 本次按课程要求跳过 RL §3.3 中从式 (3.27) 开始的一般 multipole expansion；Problem 3.1 只直接使用磁偶极辐射结果。
- Thomson scattering：电子近似自由、初始静止且非相对论；$h\nu\ll m_ec^2$；入射场不足以驱动相对论振荡。
- RL §5.1：离子近似固定；电子以单一速度 $v$ 运动；小角散射时先把轨迹近似为直线。
- Problem 3.4：云光学薄、单次电子散射、中心源未偏振；云的均匀和球对称假设只在相应小问中使用。

---

## 3. 非相对论运动电荷：velocity field、radiation field 与 Larmor formula

### 3.1 两类场为什么分别是 $R^{-2}$ 与 $R^{-1}$？

Liénard–Wiechert 电场可以分成两类：

$$
\mathbf E_{\rm vel}\propto R^{-2},
\qquad
\mathbf E_{\rm rad}\propto R^{-1}.
$$

非相对论极限下，第一项近似是随电荷运动的 Coulomb-like field：

$$
\mathbf E_{\rm vel}\simeq\frac{q}{R^2}\mathbf n.
$$

它按球面面积 $4\pi R^2$ 摊开，因此场强按 $R^{-2}$ 衰减。

第二项来自加速度：

$$
\boxed{
\mathbf E_{\rm rad}
=\frac{q}{Rc^2}
\mathbf n\times(\mathbf n\times\mathbf a)
}.
$$

它必须在任意大球面上传递同一总功率。因为

$$
S\propto E_{\rm rad}^2,
\qquad
P\sim4\pi R^2S,
$$

有限且与 $R$ 无关的 $P$ 要求

$$
E_{\rm rad}^2\propto R^{-2},
\qquad
E_{\rm rad}\propto R^{-1}.
$$

相反，$E_{\rm vel}^2R^2\propto R^{-2}\to0$，所以 velocity field 不能向无穷远输送有限功率。

### 3.2 近场与远场的量级比较

两项之比为

$$
\frac{E_{\rm rad}}{E_{\rm vel}}
\sim\frac{aR}{c^2}.
$$

若源以典型速度 $u$、频率 $\nu$ 变化，则

$$
a\sim u\nu,
\qquad
\lambda=\frac{c}{\nu},
$$

所以

$$
\boxed{
\frac{E_{\rm rad}}{E_{\rm vel}}
\sim\frac{u}{c}\frac{R}{\lambda}
}.
$$

对于非相对论源，真正让 radiation field 明显占主导通常需要

$$
R\gg\frac{c}{u}\lambda.
$$

### 3.3 辐射场只看横向加速度

利用向量恒等式

$$
\mathbf n\times(\mathbf n\times\mathbf a)
=\mathbf n(\mathbf n\cdot\mathbf a)-\mathbf a
=-\mathbf a_\perp,
$$

得到

$$
|\mathbf E_{\rm rad}|
=\frac{qa}{Rc^2}\sin\theta,
$$

其中 $\theta$ 是 $\mathbf a$ 与 $\mathbf n$ 的夹角。沿加速度方向观察时没有横向加速度，辐射为零；垂直加速度方向观察时辐射最强。

磁场满足

$$
\mathbf B_{\rm rad}=\mathbf n\times\mathbf E_{\rm rad},
$$

因此 $\mathbf E_{\rm rad}$、$\mathbf B_{\rm rad}$ 与 $\mathbf n$ 两两垂直。

### 3.4 Larmor formula

Gaussian-cgs 中

$$
S=\frac{c}{4\pi}E_{\rm rad}^2
=\frac{q^2a^2}{4\pi R^2c^3}\sin^2\theta.
$$

距离 $R$ 处，立体角 $d\Omega$ 对应面积 $dA=R^2d\Omega$，所以

$$
\boxed{
\frac{dP}{d\Omega}
=\frac{q^2a^2}{4\pi c^3}\sin^2\theta
}.
$$

积分

$$
\int\sin^2\theta\,d\Omega
=2\pi\int_0^\pi\sin^3\theta\,d\theta
=\frac{8\pi}{3}
$$

得到

$$
\boxed{
P=\frac{2q^2a^2}{3c^3}
}.
$$

这个结果说明匀速电荷可以有 velocity field，但只有加速电荷才有这里的 $R^{-1}$ radiation field。

---

## 4. 电偶极辐射、dipole pattern 与频谱

### 4.1 电偶极近似

对于尺寸为 $L$ 的多粒子系统，若

$$
L\ll\lambda,
$$

光穿过整个源的时间远小于一个振荡周期，源内 retardation phase 可以忽略。定义

$$
\mathbf d=\sum_iq_i\mathbf r_i,
$$

远区辐射场为

$$
\boxed{
\mathbf E_{\rm rad}
=\frac{\mathbf n\times(\mathbf n\times\ddot{\mathbf d})}
{c^2R}
}.
$$

于是

$$
\boxed{
\frac{dP}{d\Omega}
=\frac{|\ddot{\mathbf d}|^2}{4\pi c^3}\sin^2\theta,
\qquad
P=\frac{2|\ddot{\mathbf d}|^2}{3c^3}
}.
$$

### 4.2 Dipole pattern 是什么？

若偶极矩沿 $z$ 轴振荡，$\theta$ 是观察方向与 $z$ 轴的夹角，则

$$
E_{\rm rad}\propto\sin\theta,
\qquad
\frac{dP}{d\Omega}\propto\sin^2\theta.
$$

- 沿偶极轴，$\theta=0,\pi$，辐射为零。
- 垂直偶极轴，$\theta=\pi/2$，辐射最强。
- 二维截面像“8”字；三维方向图像绕偶极轴的环面。

这里的“8”表示两个强度瓣，不表示其中一瓣功率为负。辐射电场位于天空平面内，是横向线偏振。

### 4.3 为什么频谱含有 $\omega^4|\mathbf d(\omega)|^2$？

采用 RL 的 Fourier convention：

$$
\mathbf d(t)
=\int_{-\infty}^{\infty}
\mathbf d(\omega)e^{-i\omega t}\,d\omega.
$$

时间导数在 Fourier space 中对应

$$
\frac{d}{dt}\longleftrightarrow-i\omega,
$$

所以

$$
\ddot{\mathbf d}(\omega)
=-\omega^2\mathbf d(\omega).
$$

辐射能量与 $|\ddot{\mathbf d}|^2$ 成正比。Parseval relation 因而给出

$$
\boxed{
\frac{dW}{d\omega\,d\Omega}
=\frac{\omega^4}{c^3}|\mathbf d(\omega)|^2\sin^2\theta
},
$$

$$
\boxed{
\frac{dW}{d\omega}
=\frac{8\pi\omega^4}{3c^3}|\mathbf d(\omega)|^2
}.
$$

对单频偶极子 $\mathbf d(t)=\mathbf d_0\cos\omega_0t$，有

$$
\ddot{\mathbf d}=-\omega_0^2\mathbf d_0\cos\omega_0t,
$$

所以固定 $d_0$ 时

$$
\langle P\rangle\propto\omega_0^4d_0^2.
$$

这并不表示真实系统的高频辐射必然无限增强，因为真实的 $|\mathbf d(\omega)|$ 通常随频率下降。

---

## 5. Thomson scattering：从受迫电子到散射截面

### 5.1 入射场驱动电子

令线偏振入射波为

$$
\mathbf E(t)=E_0\boldsymbol\epsilon\sin\omega_0t.
$$

电子运动方程是

$$
m_e\ddot{\mathbf r}=-e\mathbf E.
$$

电子偶极矩为 $\mathbf d=-e\mathbf r$，所以

$$
\boxed{
\ddot{\mathbf d}
=\frac{e^2}{m_e}\mathbf E
=\frac{e^2E_0}{m_e}\boldsymbol\epsilon\sin\omega_0t
}.
$$

一个 $e$ 来自电子受力，另一个 $e$ 来自偶极矩。电子沿入射电场偏振方向振荡，然后作为偶极天线重新辐射。

### 5.2 时间平均散射功率

令 $\Theta$ 是 $\boldsymbol\epsilon$ 与散射方向 $\mathbf n$ 的夹角：

$$
\cos\Theta=\boldsymbol\epsilon\cdot\mathbf n.
$$

瞬时偶极角分布为

$$
\frac{dP}{d\Omega}(t)
=\frac{|\ddot{\mathbf d}(t)|^2}{4\pi c^3}\sin^2\Theta.
$$

代入 $\ddot{\mathbf d}$：

$$
\frac{dP}{d\Omega}(t)
=\frac{e^4E_0^2}{4\pi m_e^2c^3}
\sin^2\omega_0t\sin^2\Theta.
$$

因为 $\langle\sin^2\omega_0t\rangle=1/2$，

$$
\boxed{
\left\langle\frac{dP}{d\Omega}\right\rangle
=\frac{e^4E_0^2}{8\pi m_e^2c^3}\sin^2\Theta
}.
$$

### 5.3 入射能流与微分截面

真空平面波有 $B=E$，所以

$$
\mathbf S=\frac{c}{4\pi}\mathbf E\times\mathbf B
$$

给出

$$
\langle S\rangle
=\frac{cE_0^2}{4\pi}\langle\sin^2\omega_0t\rangle
=\boxed{\frac{cE_0^2}{8\pi}}.
$$

微分截面定义为

$$
\frac{dP}{d\Omega}
=\langle S\rangle\frac{d\sigma}{d\Omega}.
$$

于是

$$
\boxed{
\left(\frac{d\sigma}{d\Omega}\right)_{\rm pol}
=\frac{e^4}{m_e^2c^4}\sin^2\Theta
=r_e^2\sin^2\Theta
}.
$$

下标 ${\rm pol}$ 表示入射光具有已知的线偏振方向；此式已经对两个可能的出射偏振求和。

### 5.4 总 Thomson cross section

对所有方向积分：

$$
\sigma_T
=\int\frac{d\sigma}{d\Omega}\,d\Omega
=r_e^2\int\sin^2\Theta\,d\Omega,
$$

所以

$$
\boxed{
\sigma_T=\frac{8\pi}{3}r_e^2
=6.652\times10^{-25}\ {\rm cm^2}
}.
$$

$\sigma_T$ 是 angular-integrated cross section，不是对角度除以 $4\pi$ 后的平均。单次事件中光子只选择一个方向；截面是重复相同实验时的统计概率量。微分截面决定“散射到哪里”，总截面决定“总共多容易发生散射”。

---

## 6. 偏振、未偏振光与散射偏振

### 6.1 偏振与波动不是同一概念

波动描述物理量随空间和时间振荡、传播；偏振描述矢量波在横向平面内如何振荡。真空电磁波满足

$$
\mathbf E\perp\mathbf k,
\qquad
\mathbf B\perp\mathbf E,
\qquad
\mathbf B\perp\mathbf k.
$$

- 线偏振：$\mathbf E$ 沿固定横向方向振荡。
- 圆偏振：$\mathbf E$ 的方向旋转，端点画圆。
- 椭圆偏振：端点画椭圆。
- 未偏振：横向方向与相位关系随机，没有稳定方向偏好。

未偏振不表示“不振荡”。它仍然是电磁波，只是许多独立发射源的随机偏振状态在统计上混合。

### 6.2 从 polarized 到 unpolarized differential cross section

令入射方向为

$$
\hat{\mathbf k}=\hat{\mathbf z},
$$

散射方向位于 $x$–$z$ 平面：

$$
\mathbf n=(\sin\theta,0,\cos\theta).
$$

未偏振光可视为两个等强、非相干的正交线偏振分量。

垂直于 scattering plane 的分量为

$$
\boldsymbol\epsilon_\perp=\hat{\mathbf y}.
$$

它满足 $\boldsymbol\epsilon_\perp\cdot\mathbf n=0$，因此 $\Theta_\perp=90^\circ$：

$$
\left(\frac{d\sigma}{d\Omega}\right)_\perp=r_e^2.
$$

平行于 scattering plane 的横向分量为

$$
\boldsymbol\epsilon_\parallel=\hat{\mathbf x}.
$$

因为

$$
\cos\Theta_\parallel
=\boldsymbol\epsilon_\parallel\cdot\mathbf n
=\sin\theta,
$$

所以

$$
\sin^2\Theta_\parallel=\cos^2\theta,
$$

以及

$$
\left(\frac{d\sigma}{d\Omega}\right)_\parallel
=r_e^2\cos^2\theta.
$$

非相干平均的是强度而不是振幅：

$$
\boxed{
\left(\frac{d\sigma}{d\Omega}\right)_{\rm unpol}
=\frac12
\left[
\left(\frac{d\sigma}{d\Omega}\right)_\perp
+
\left(\frac{d\sigma}{d\Omega}\right)_\parallel
\right]
=\frac{r_e^2}{2}(1+\cos^2\theta)
}.
$$

### 6.3 散射光的线偏振度

定义

$$
I=I_\perp+I_\parallel,
\qquad
Q=I_\perp-I_\parallel.
$$

一般线偏振度为

$$
\Pi_L=\frac{\sqrt{Q^2+U^2}}{I}.
$$

以 scattering plane 为基准时 $U=0$，而 Thomson scattering 给出

$$
I_\perp\propto1,
\qquad
I_\parallel\propto\cos^2\theta.
$$

因此

$$
\boxed{
\Pi
=\frac{I_\perp-I_\parallel}{I_\perp+I_\parallel}
=\frac{\sin^2\theta}{1+\cos^2\theta}
}.
$$

- $\theta=0$ 或 $\pi$：两个分量相等，$\Pi=0$。
- $\theta=90^\circ$：平行分量消失，$\Pi=1$。

偏振度衡量两个正交偏振分量的不平衡程度，而不是简单的 $I_\perp/I$。未偏振光也可以在任意选定基底中各有一半强度，但因为两者相等，净偏振仍为零。

---

## 7. Photon recoil、Thomson limit 与 Compton 修正

### 7.1 Photon recoil 是什么？

光子具有

$$
E_\gamma=h\nu,
\qquad
p_\gamma=\frac{h\nu}{c}.
$$

光子被电子散射并改变方向时，动量守恒要求电子获得

$$
\mathbf p_e
=\mathbf p_{\gamma,{\rm in}}
-\mathbf p_{\gamma,{\rm out}}.
$$

电子因此得到反冲动能；出射光子能量降低、频率变小。这就是 photon recoil。

### 7.2 Thomson 条件近似了什么？

条件

$$
\boxed{h\nu\ll m_ec^2}
$$

是 Thomson approximation 成立的条件，不是失效条件。典型反冲能量为

$$
K_e\sim\frac{p_e^2}{2m_e}
\sim\frac{(h\nu)^2}{2m_ec^2},
$$

所以

$$
\frac{K_e}{h\nu}
\sim\frac{h\nu}{2m_ec^2}\ll1.
$$

电子仍会得到动量，但其获得的能量相对于光子能量很小，因此可近似

$$
\nu'\simeq\nu.
$$

物理图像是：入射电场驱动一个很重、非相对论的电子振荡；电子以几乎相同的频率重新辐射。

### 7.3 Compton 公式的极限

精确运动学给出

$$
\boxed{
\frac{\nu'}{\nu}
=\frac{1}{1+\dfrac{h\nu}{m_ec^2}(1-\cos\theta)}
}.
$$

若 $x=h\nu/(m_ec^2)\ll1$，则

$$
\frac{\nu'}{\nu}
\simeq1-x(1-\cos\theta).
$$

当 $h\nu\sim511\ {\rm keV}$ 时，recoil 显著，必须改用 Compton/Klein–Nishina cross section；截面不再与频率无关，也会更偏向前向散射。

---

## 8. 单次电子—离子碰撞的制动辐射频谱

### 8.1 Bremsstrahlung 与 free-free emission

Bremsstrahlung 中文通常译为“制动辐射”或“刹车辐射”。它不要求速度大小一定下降；只要速度矢量改变，就有加速度并产生辐射。

$$
e^-+Z^+
\longrightarrow
e^-+Z^++\gamma.
$$

电子在辐射前后都未被束缚，因此也称 free-free emission。

### 8.2 碰撞几何与横向加速度

把离子放在原点。小角直线轨道近似下，电子位置是

$$
\mathbf R(t)=vt\,\hat{\mathbf x}+b\,\hat{\mathbf y},
$$

所以

$$
R(t)=\sqrt{b^2+v^2t^2}.
$$

Coulomb force 为

$$
\mathbf F(t)
=-\frac{Ze^2}{R^3(t)}\mathbf R(t).
$$

垂直于原运动方向的分量是

$$
F_\perp(t)
=-\frac{Ze^2b}{(b^2+v^2t^2)^{3/2}}.
$$

因此加速度大小为

$$
\boxed{
a_\perp(t)
=\frac{Ze^2}{m_e}
\frac{b}{(b^2+v^2t^2)^{3/2}}
}.
$$

在 $t=0$ 时加速度最大；当 $|t|\to\infty$ 时，它按 $|t|^{-3}$ 下降。

### 8.3 总速度变化

积分得到

$$
\Delta v_\perp
=\int_{-\infty}^{\infty}a_\perp(t)\,dt.
$$

令 $u=vt/b$，则

$$
\int_{-\infty}^{\infty}
\frac{b\,dt}{(b^2+v^2t^2)^{3/2}}
=\frac{1}{bv}
\int_{-\infty}^{\infty}\frac{du}{(1+u^2)^{3/2}}
=\frac{2}{bv}.
$$

所以

$$
\boxed{
|\Delta v_\perp|
=\frac{2Ze^2}{m_ebv}
}.
$$

### 8.4 碰撞时间与频率尺度

电子显著受到离子作用的时间约为

$$
\boxed{\tau\sim\frac{b}{v}}.
$$

若 $\omega\tau\ll1$，Fourier phase 在碰撞过程中变化很小，频率 $\omega$ 能看到完整的速度改变。若 $\omega\tau\gg1$，积分中的快速相位振荡使不同时刻的贡献互相抵消。

因此单次碰撞的特征最高频率是

$$
\boxed{\omega_{\max}\sim\frac{v}{b}}.
$$

小 $b$ 碰撞更短、更猛烈，可以产生更高频率；大 $b$ 碰撞缓慢，主要贡献低频。

### 8.5 从 $\Delta v$ 得到单次碰撞频谱

电子偶极矩为 $\mathbf d=-e\mathbf R$，因此

$$
\ddot{\mathbf d}=-e\dot{\mathbf v}.
$$

RL 的 Fourier convention 给出

$$
-\omega^2\mathbf d(\omega)
=-\frac{e}{2\pi}
\int_{-\infty}^{\infty}
\dot{\mathbf v}(t)e^{i\omega t}\,dt.
$$

在 $\omega\tau\ll1$ 时，$e^{i\omega t}\simeq1$，所以

$$
\omega^2|\mathbf d(\omega)|
\simeq\frac{e}{2\pi}|\Delta\mathbf v|.
$$

代入

$$
\frac{dW}{d\omega}
=\frac{8\pi\omega^4}{3c^3}|\mathbf d(\omega)|^2
$$

得到

$$
\boxed{
\frac{dW}{d\omega}
=\frac{2e^2}{3\pi c^3}|\Delta\mathbf v|^2
}.
$$

再代入 $|\Delta v|=2Ze^2/(m_ebv)$：

$$
\boxed{
\frac{dW(b)}{d\omega}
=\frac{8Z^2e^6}{3\pi c^3m_e^2v^2b^2},
\qquad
b\lesssim\frac{v}{\omega}
}.
$$

这里 $dW(b)/d\omega$ 是一次指定 $b$ 的电子—离子相遇在单位角频率区间内辐射的能量，不是单色谱线。一次有限时长的 acceleration pulse 包含许多 Fourier frequencies，所以产生连续频谱。

RL 把高频端的平滑下降近似为 sharp cutoff：

$$
\frac{dW(b)}{d\omega}\simeq0,
\qquad
b\gtrsim\frac{v}{\omega}.
$$

---

## 9. 从单次碰撞到等离子体发射率：impact parameter 积分

### 9.1 单位体积、单位时间的碰撞数

一个电子在时间 $dt$ 内移动距离 $vdt$。impact parameter 位于 $b$ 到 $b+db$ 的碰撞对应圆环面积

$$
dA=2\pi b\,db.
$$

电子扫过的圆环柱体积为

$$
dV_{\rm sweep}=vdt\,2\pi b\,db.
$$

其中的离子数是

$$
dN_i=n_i vdt\,2\pi b\,db.
$$

单位体积中有 $n_e$ 个电子，因此

$$
\boxed{
\frac{dN_{\rm coll}}{dV\,dt}
=n_en_i v\,2\pi b\,db
}.
$$

电子和离子是不同粒子，不需要除以 2。

### 9.2 乘上单次碰撞频谱

$$
\frac{dW}{d\omega\,dV\,dt}
=\int_{b_{\min}}^{b_{\max}}
\frac{dW(b)}{d\omega}
\frac{dN_{\rm coll}}{dV\,dt}.
$$

代入：

$$
\begin{aligned}
\frac{dW}{d\omega\,dV\,dt}
&=\int_{b_{\min}}^{b_{\max}}
\frac{8Z^2e^6}{3\pi c^3m_e^2v^2b^2}
\left(n_en_i v\,2\pi b\,db\right)\\
&=\frac{16Z^2e^6}{3c^3m_e^2v}
n_en_i
\int_{b_{\min}}^{b_{\max}}\frac{db}{b}.
\end{aligned}
$$

积分后：

$$
\boxed{
\frac{dW}{d\omega\,dV\,dt}
=\frac{16e^6}{3c^3m_e^2v}
n_en_iZ^2
\ln\!\left(\frac{b_{\max}}{b_{\min}}\right)
}.
$$

系数来源可以压缩为

$$
\frac{8}{3\pi}\times2\pi=\frac{16}{3}.
$$

### 9.3 为什么自然出现对数？

单次碰撞辐射满足

$$
\frac{dW(b)}{d\omega}\propto b^{-2},
$$

而 $b$ 到 $b+db$ 的碰撞数满足

$$
dN_{\rm coll}\propto b\,db.
$$

相乘得到

$$
b^{-2}\times b\,db=\frac{db}{b}=d\ln b.
$$

所以每个等宽的 $\ln b$ 区间贡献近似相等。这就是 Coulomb logarithm 的物理来源。

---

## 10. $b_{\min}$、$b_{\max}$ 与 free-free Gaunt factor

### 10.1 最大 impact parameter

固定观察频率 $\omega$ 时，只有满足 $\omega b/v\lesssim1$ 的碰撞能有效贡献，因此

$$
\boxed{b_{\max}\sim\frac{v}{\omega}}.
$$

$b>b_{\max}$ 的碰撞过于缓慢，在该频率上的 Fourier phase 抵消。

### 10.2 经典最小 impact parameter

小角度近似给出电子偏转角

$$
\chi\simeq\frac{\Delta v_\perp}{v}
=\frac{2Ze^2}{m_ebv^2}.
$$

把它外推到 $\chi\sim\pi/2$，得到 RL 使用的

$$
\boxed{
b_{\min}^{\rm cl}
\sim\frac{4Ze^2}{\pi m_ev^2}
}.
$$

它是“约 $90^\circ$ 强散射”的尺度，不是精确 Rutherford 结果。精确关系

$$
\tan\frac{\chi}{2}
=\frac{Ze^2}{m_ev^2b}
$$

给出精确的 $90^\circ$ impact parameter

$$
b_{90}=\frac{Ze^2}{m_ev^2}.
$$

两者只差 order-unity coefficient；由于 $b_{\min}$ 只进入对数，简单推导不追求该系数的精确性。

### 10.3 量子最小尺度

电子的 de Broglie wavelength 给出

$$
\boxed{
b_{\min}^{\rm qm}\sim\frac{\hbar}{m_ev}
}.
$$

简单估计取

$$
b_{\min}\sim
\max\!\left(b_{\min}^{\rm cl},b_{\min}^{\rm qm}\right).
$$

### 10.4 Gaunt factor 的定义与物理意义

更完整的结果通常写成

$$
\boxed{
\frac{dW}{d\omega\,dV\,dt}
=\frac{16\pi e^6}{3\sqrt3\,c^3m_e^2v}
n_en_iZ^2g_{\rm ff}(v,\omega)
}.
$$

$g_{\rm ff}$ 是无量纲修正因子：

$$
g_{\rm ff}
\equiv
\frac{\text{更完整的 free-free emissivity}}
{\text{选定的经典基准 emissivity}}.
$$

把简单 cutoff 结果与标准形式比较，得到

$$
\boxed{
g_{\rm ff}
\approx\frac{\sqrt3}{\pi}
\ln\!\left(\frac{b_{\max}}{b_{\min}}\right)
}.
$$

因此 Coulomb logarithm 是粗略经典表示；$g_{\rm ff}$ 是把真实轨道、平滑高频下降、电子波动性与量子 photon-emission matrix element 等效应标准化后的表示。

量子计算原则上求解电子在 Coulomb potential 中的初、末 continuum states，计算

$$
M_{fi}=\langle\psi_f;\gamma|H_{\rm int}|\psi_i\rangle,
$$

再由 Fermi’s golden rule 得到发射率。现代表格中的 $g_{\rm ff}$ 通常来自量子或半经典数值计算；相对论、高磁场或强屏蔽条件还需要进一步修正。

---

## 11. 习题 3.1：旋转中子星的磁偶极辐射

### 11.1 题目在问什么？

把 pulsar 视为磁轴与旋转轴夹角为 $\alpha$ 的旋转中子星。要求：

1. 用 $\omega,R,B_0,\alpha$ 表示磁偶极辐射功率；
2. 假设辐射能来自转动能，求 spin-down timescale；
3. 对题给 $M,R,B_0,\alpha$ 和三个 $\omega$ 计算功率与时间尺度。

### 11.2 磁偶极矩与表面场

Gaussian-cgs 中，磁偶极场为

$$
\mathbf B(\mathbf r)
=\frac{3(\mathbf m\cdot\hat{\mathbf r})\hat{\mathbf r}-\mathbf m}{r^3}.
$$

因此量级上

$$
B_0\sim\frac{m_0}{R^3},
\qquad
m_0\sim B_0R^3.
$$

若 $B_0$ 是赤道场，$m_0=B_0R^3$；若 $B_0$ 明确定义为极区场，则

$$
m_0=\frac12B_0R^3,
$$

因为 $B_{\rm pole}=2m_0/R^3$。以下采用 RL 数量级题中常用的赤道场 convention：

$$
\boxed{m_0=B_0R^3}.
$$

### 11.3 辐射功率

磁偶极矩中平行于旋转轴的分量不变，不辐射；横向分量

$$
m_\perp=m_0\sin\alpha
$$

以角速度 $\omega$ 旋转。因此

$$
|\ddot{\mathbf m}|
=m_0\omega^2\sin\alpha.
$$

磁偶极辐射功率为

$$
P=\frac{2|\ddot{\mathbf m}|^2}{3c^3},
$$

所以

$$
\boxed{
P
=\frac{2m_0^2\omega^4\sin^2\alpha}{3c^3}
=\frac{2B_0^2R^6\omega^4\sin^2\alpha}{3c^3}
}.
$$

极限检查：若 $\alpha=0$，磁轴与旋转轴重合，外部偶极图样不随时间变化，所以 $P=0$；若 $\alpha=90^\circ$，功率最大。

### 11.4 Spin-down timescale

转动能为

$$
E_{\rm rot}=\frac12I\omega^2.
$$

能量守恒给出

$$
I\omega\dot\omega=-P.
$$

若定义瞬时 spin-down timescale

$$
\tau_{\rm sd}\equiv\frac{\omega}{|\dot\omega|},
$$

则

$$
\boxed{
\tau_{\rm sd}=\frac{I\omega^2}{P}
}.
$$

把中子星近似为均匀球：

$$
I=\frac25MR^2.
$$

代入功率：

$$
\boxed{
\tau_{\rm sd}
=\frac{3Mc^3}{5B_0^2R^4\omega^2\sin^2\alpha}
}.
$$

若课程把时间尺度定义为能量损失时间

$$
\tau_E\equiv\frac{E_{\rm rot}}{P},
$$

则

$$
\boxed{\tau_E=\frac12\tau_{\rm sd}}.
$$

两种 convention 相差 2；写答案时应明确使用哪一定义。

### 11.5 数值结果

采用

$$
M=2\times10^{33}\ {\rm g},
\quad
R=10^6\ {\rm cm},
\quad
B_0=10^{12}\ {\rm G},
\quad
\alpha=90^\circ,
$$

以及 $m_0=B_0R^3$、$I=2MR^2/5$：

| $\omega$ (${\rm s^{-1}}$) | $P$ (${\rm erg\,s^{-1}}$) | $\tau_{\rm sd}=\omega/|\dot\omega|$ | $\tau_E=E/P$ |
|---:|---:|---:|---:|
| $10^4$ | $2.47\times10^{44}$ | $10.2\ {\rm yr}$ | $5.12\ {\rm yr}$ |
| $10^3$ | $2.47\times10^{40}$ | $1.02\times10^3\ {\rm yr}$ | $5.12\times10^2\ {\rm yr}$ |
| $10^2$ | $2.47\times10^{36}$ | $1.02\times10^5\ {\rm yr}$ | $5.12\times10^4\ {\rm yr}$ |

最重要的标度是

$$
P\propto B_0^2R^6\omega^4\sin^2\alpha,
\qquad
\tau_{\rm sd}\propto B_0^{-2}R^{-4}\omega^{-2}\sin^{-2}\alpha.
$$

---

## 12. 习题 3.4：中心光源周围的电子散射云

### 12.1 题目设置

一个半径约 $R=1\ {\rm pc}$ 的光学薄电离云包围未偏振中央光源。电子散射是唯一重要的 extinction mechanism。题目分别问：

1. 云未被空间分辨时的净偏振；
2. 云被分辨时，天空上不同位置的偏振方向；
3. 若中央源清楚可见，均匀云的电子密度上限。

### 12.2 (a) 未分辨云的净偏振

单个位置的 Thomson scattered light 通常有偏振，但球对称云的天空投影形成切向偏振图样。若云全部落入同一像素，探测器测量

$$
I_{\rm tot}=\sum_iI_i,
\qquad
Q_{\rm tot}=\sum_iQ_i,
\qquad
U_{\rm tot}=\sum_iU_i.
$$

对切向图样，偏振角 $\psi=\phi+\pi/2$。球对称使不同方位角的权重相同，因此

$$
Q_{\rm tot}\propto\int_0^{2\pi}\cos2\psi\,d\phi=0,
$$

$$
U_{\rm tot}\propto\int_0^{2\pi}\sin2\psi\,d\phi=0.
$$

所以

$$
\boxed{\Pi_{\rm net}=0}.
$$

这不是 destructive interference，也不表示每个位置没有偏振。非相干区域的强度相加；水平方向与竖直方向等偏振强度在 Stokes parameters 中抵消，而总强度仍然为正。

### 12.3 (b) 分辨云的切向偏振图样

令中央源位于原点，观察者在远处 $+z$ 方向。电子位置为

$$
\mathbf r=(x,y,z_e),
$$

散射方向近似为

$$
\mathbf n=\hat{\mathbf z}.
$$

scattering plane 由 $\mathbf r$ 与 $\mathbf n$ 张成。偏振方向垂直于该平面：

$$
\mathbf p\propto\mathbf n\times\mathbf r.
$$

所以

$$
\boxed{
\mathbf p\propto(-y,x,0)
}.
$$

电子在天空上的 projected radial vector 是

$$
\mathbf b=(x,y,0).
$$

二者满足

$$
\mathbf p\cdot\mathbf b=(-y,x,0)\cdot(x,y,0)=0.
$$

因此

$$
\boxed{
\text{每个像素的偏振方向都垂直于投影半径，
即沿以中央源为圆心的圆周切向。}
}
$$

这里的“切向”不是三维球面 tangent plane 中任意一个方向，而是二维天空投影中圆周的唯一切线方向。线偏振没有箭头，所以 $\mathbf p$ 与 $-\mathbf p$ 是同一个方向。

同一像素中不同 $z_e$ 的电子都有 $\mathbf p\propto(-y,x,0)$，所以它们的偏振方向相同；散射角与偏振度可以不同。

投影中心附近主要是 $\theta\simeq0$ 或 $\pi$ 的前、后向散射，$\Pi\simeq0$。接近天空平面、$\theta\simeq90^\circ$ 的位置局部偏振最强。视线积分通常使实际像素偏振度低于单电子的 $100\%$。

### 12.4 (c) 电子密度上限

从中央源到云外经过约一个半径 $R$。Thomson optical depth 为

$$
\tau_T=n_e\sigma_TR.
$$

中央源仍清楚可见至少要求

$$
\tau_T\lesssim1.
$$

因此

$$
\boxed{
n_e\lesssim\frac{1}{\sigma_TR}
}.
$$

取

$$
R=1\ {\rm pc}=3.086\times10^{18}\ {\rm cm},
$$

$$
\sigma_T=6.652\times10^{-25}\ {\rm cm^2},
$$

得到

$$
\boxed{
n_e\lesssim4.9\times10^5\ {\rm cm^{-3}}
}.
$$

这是 $\tau_T=1$ 的绝对上限。如果 “clearly seen” 意味着衰减很小，即 $\tau_T\ll1$，实际密度应明显低于这个数。

---

## 13. 量纲检查、极限检验与常见混淆

### 13.1 Larmor power 的量纲

Gaussian-cgs 中 $e^2$ 的量纲是能量乘长度：

$$
[e^2]=ML^3T^{-2}.
$$

因此

$$
\left[\frac{e^2a^2}{c^3}\right]
=\frac{ML^3T^{-2}\,L^2T^{-4}}{L^3T^{-3}}
=ML^2T^{-3},
$$

正是功率量纲。

### 13.2 截面量纲

$$
r_e=\frac{e^2}{m_ec^2}
$$

具有长度量纲，所以

$$
[\sigma_T]=[r_e^2]=L^2.
$$

### 13.3 Optical depth 量纲

$$
[n_e\sigma_TR]=L^{-3}L^2L=1.
$$

因此 $\tau_T$ 是无量纲概率尺度。

### 13.4 最重要的极限

1. $a\to0$：$E_{\rm rad}\to0$，匀速电荷没有这里的远区辐射。
2. $\theta\to0$：dipole radiation 沿振荡轴消失。
3. $\theta=90^\circ$：Thomson-scattered unpolarized light 达到 $100\%$ 线偏振。
4. $h\nu/(m_ec^2)\to0$：$\nu'\to\nu$，恢复 Thomson limit。
5. $b\to\infty$：Coulomb acceleration、$\Delta v$ 和单次 free-free 辐射都趋于零。
6. $\omega\to\infty$：固定 $b$ 的碰撞满足 $\omega b/v\gg1$，高频 Fourier contributions 相消。
7. $\alpha\to0$：旋转磁偶极图样不随时间变化，pulsar dipole power 趋于零。

### 13.5 最容易混淆的地方

1. **$\Theta$ 与 $\theta$：** $\Theta$ 是入射偏振方向与散射方向的夹角；$\theta$ 是入射传播方向与散射方向的夹角。
2. **场振幅与功率方向图：** $E_{\rm rad}\propto\sin\theta$，但 $dP/d\Omega\propto\sin^2\theta$。
3. **${\rm pol}$ 下标：** 表示入射光的偏振已知，不表示只计算出射光的某一个偏振分量。
4. **总截面与平均截面：** $\sigma_T=\int(d\sigma/d\Omega)d\Omega$ 是对方向积分，不是除以 $4\pi$ 的平均。
5. **未偏振不是没有电场振荡：** 它是随机偏振状态的统计混合。
6. **局部偏振与净偏振：** 球对称云每个 resolved pixel 可以偏振，但 unresolved angular integration 给出 $Q=U=0$。
7. **制动不一定减速：** 方向改变也是加速度，也会辐射。
8. **单次碰撞频谱不是单色谱：** acceleration pulse 有连续 Fourier spectrum。
9. **$b_{\min}^{\rm cl}$ 不是严格的 $90^\circ$ 结果：** 它来自把小角公式外推到强偏转尺度。
10. **Gaunt factor 不是任意拟合数：** 它是相对于标准基准公式的可计算无量纲修正。
11. **$B_0$ convention：** 极区场与赤道场相差 2，因此用同一个符号时会造成辐射功率四倍差异。
12. **时间尺度 convention：** $\omega/|\dot\omega|=2E/P$；若称 $E/P$ 为 characteristic energy-loss time，必须明确相差因子 2。

---

## 14. English assignment-ready solutions

### 14.1 Problem 3.1: magnetic-dipole radiation from a pulsar

Let the magnetic dipole moment have fixed magnitude $m_0$ and make an angle $\alpha$ with the rotation axis. The component parallel to the rotation axis is constant, whereas the perpendicular component rotates with angular frequency $\omega$. Therefore,

$$
|\ddot{\mathbf m}|=m_0\omega^2\sin\alpha.
$$

The magnetic-dipole radiation power in Gaussian-cgs units is

$$
P=\frac{2|\ddot{\mathbf m}|^2}{3c^3},
$$

so that

$$
\boxed{
P=\frac{2m_0^2\omega^4\sin^2\alpha}{3c^3}
}.
$$

Adopting the convention that $B_0$ is the equatorial surface dipole field, $m_0=B_0R^3$, and hence

$$
\boxed{
P=\frac{2B_0^2R^6\omega^4\sin^2\alpha}{3c^3}
}.
$$

If $B_0$ denotes the polar field instead, one should use $m_0=B_0R^3/2$.

The rotational energy is

$$
E_{\rm rot}=\frac12I\omega^2,
$$

and energy conservation gives

$$
I\omega\dot\omega=-P.
$$

Defining the instantaneous spin-down time by $\tau_{\rm sd}=\omega/|\dot\omega|$ gives

$$
\boxed{
\tau_{\rm sd}=\frac{I\omega^2}{P}
}.
$$

For a uniform sphere, $I=2MR^2/5$, so

$$
\boxed{
\tau_{\rm sd}
=\frac{3Mc^3}{5B_0^2R^4\omega^2\sin^2\alpha}
}.
$$

The energy-loss time $E_{\rm rot}/P$ is one half of this value.

For $M=2\times10^{33}\ {\rm g}$, $R=10^6\ {\rm cm}$, $B_0=10^{12}\ {\rm G}$, and $\alpha=90^\circ$:

$$
\begin{array}{c|c|c}
\omega\ ({\rm s^{-1}}) & P\ ({\rm erg\,s^{-1}}) & \tau_{\rm sd}\\ \hline
10^4 & 2.47\times10^{44} & 10.2\ {\rm yr}\\
10^3 & 2.47\times10^{40} & 1.02\times10^3\ {\rm yr}\\
10^2 & 2.47\times10^{36} & 1.02\times10^5\ {\rm yr}
\end{array}
$$

### 14.2 Problem 3.4(a): unresolved cloud

Each point in the optically thin cloud produces polarized Thomson-scattered light. However, for a spherically symmetric cloud illuminated by an unpolarized central source, the polarization pattern is centrosymmetric. If the cloud is unresolved, all azimuths are added in one resolution element. The Stokes parameters cancel by symmetry:

$$
Q_{\rm tot}=U_{\rm tot}=0.
$$

Therefore,

$$
\boxed{\Pi_{\rm net}=0}.
$$

This is cancellation of incoherent Stokes contributions, not destructive interference of the electric fields.

### 14.3 Problem 3.4(b): resolved polarization pattern

Let the observer lie along $+z$ and let an electron be at $\mathbf r=(x,y,z_e)$. The scattering plane is spanned by $\mathbf r$ and $\hat{\mathbf z}$. The polarization direction is normal to this plane:

$$
\mathbf p\propto\hat{\mathbf z}\times\mathbf r=(-y,x,0).
$$

The projected radial vector from the central source is $\mathbf b=(x,y,0)$, and

$$
\mathbf p\cdot\mathbf b=0.
$$

Thus the observed polarization is tangential to circles centered on the luminous source:

$$
\boxed{\text{the resolved polarization pattern is centrosymmetric and tangential}.}
$$

The polarization is weak near the projected center, where the scattering is nearly forward or backward, and strongest for scattering angles near $90^\circ$.

### 14.4 Problem 3.4(c): density upper bound

The optical depth from the central source to the edge of a homogeneous cloud of radius $R$ is

$$
\tau_T=n_e\sigma_TR.
$$

Since the central source is clearly visible, require at least $\tau_T\lesssim1$. Hence

$$
\boxed{
n_e\lesssim\frac{1}{\sigma_TR}
}.
$$

Using $R=1\ {\rm pc}=3.086\times10^{18}\ {\rm cm}$ and $\sigma_T=6.652\times10^{-25}\ {\rm cm^2}$,

$$
\boxed{
n_e\lesssim4.9\times10^5\ {\rm cm^{-3}}
}.
$$

If “clearly visible” is intended to mean negligible attenuation, then the stronger condition $\tau_T\ll1$ should be imposed.

---

## 15. 复习清单与核心公式

### 15.1 应该能够独立解释

- 为什么 $R^{-1}$ 场可以把有限功率带到无穷远，而 $R^{-2}$ 场不可以。
- 为什么 dipole radiation 沿振荡轴为零、垂直振荡轴最强。
- 为什么时间导数在 Fourier space 中带来 $-i\omega$，并最终产生 $\omega^4|d(\omega)|^2$。
- 为什么 Thomson scattering 是“受迫振荡电子的偶极辐射”。
- $\Theta$ 与 $\theta$ 分别是哪两个方向之间的夹角。
- 为什么未偏振光可以分解成两个等强、非相干的正交偏振分量。
- 为什么 $90^\circ$ Thomson scattering 产生完全线偏振。
- 为什么 $h\nu\ll m_ec^2$ 是 Thomson approximation 的成立条件。
- 如何从 Coulomb force 得到 $a_\perp(t)$ 和 $\Delta v_\perp$。
- 为什么碰撞时间 $b/v$ 决定最高频率 $v/b$。
- 为什么 impact-parameter 积分产生 $\ln(b_{\max}/b_{\min})$。
- Gaunt factor 与经典 Coulomb logarithm 的关系。
- 为什么分辨电子云给出切向偏振图样，而未分辨球对称云净偏振为零。

### 15.2 可以直接记住的核心公式

$$
\boxed{
\mathbf E_{\rm rad}
=\frac{q}{Rc^2}\mathbf n\times(\mathbf n\times\mathbf a)
}
$$

$$
\boxed{
\frac{dP}{d\Omega}
=\frac{q^2a^2}{4\pi c^3}\sin^2\theta,
\qquad
P=\frac{2q^2a^2}{3c^3}
}
$$

$$
\boxed{
P_{\rm dip}=\frac{2|\ddot{\mathbf d}|^2}{3c^3},
\qquad
\frac{dW}{d\omega}
=\frac{8\pi\omega^4}{3c^3}|\mathbf d(\omega)|^2
}
$$

$$
\boxed{
\left(\frac{d\sigma}{d\Omega}\right)_{\rm pol}
=r_e^2\sin^2\Theta
}
$$

$$
\boxed{
\left(\frac{d\sigma}{d\Omega}\right)_{\rm unpol}
=\frac{r_e^2}{2}(1+\cos^2\theta),
\qquad
\sigma_T=\frac{8\pi}{3}r_e^2
}
$$

$$
\boxed{
\Pi=\frac{\sin^2\theta}{1+\cos^2\theta}
}
$$

$$
\boxed{
a_\perp(t)
=\frac{Ze^2}{m_e}
\frac{b}{(b^2+v^2t^2)^{3/2}},
\qquad
\Delta v_\perp=\frac{2Ze^2}{m_ebv}
}
$$

$$
\boxed{
\frac{dW(b)}{d\omega}
=\frac{8Z^2e^6}{3\pi c^3m_e^2v^2b^2},
\qquad
b\lesssim\frac{v}{\omega}
}
$$

$$
\boxed{
\frac{dW}{d\omega\,dV\,dt}
=\frac{16\pi e^6}{3\sqrt3\,c^3m_e^2v}
n_en_iZ^2g_{\rm ff}(v,\omega)
}
$$

### 15.3 最短物理总结

$$
\boxed{
\text{加速度决定辐射；
观察方向只看横向加速度；
碰撞持续时间决定频率；
对称性决定净偏振。}
}
$$

---

## 16. 参考资料

1. Rybicki, G. B., & Lightman, A. P., *Radiative Processes in Astrophysics*, §3.3, §3.4, §5.1, Problems 3.1 and 3.4。本课程完整教材文件：[Radiative Processes in Astrophysics](<./Radiative Processes in Astrophysics (George B. Rybicki, Alan P. Lightman) (z-library.sk, 1lib.sk, z-lib.sk).pdf>)。
2. §3.3 的阅读边界：保留 Larmor formula、电偶极近似及式 (3.26)；按课程说明暂时跳过从 “The general multipole expansion” 开始的一般展开。
3. 本文全部基本电动力学与截面公式采用 Gaussian-cgs；使用 SI 时必须恢复相应的 $\epsilon_0$ 与单位换算。
4. Problem 3.1 的数值结果采用 $m_0=B_0R^3$（$B_0$ 为赤道表面场）和均匀球 $I=2MR^2/5$；若课堂采用极区场 convention，磁偶极矩与功率应相应调整。
