---
title: Batteries Included
slug: batteries-included
date: 2026-11-06
excerpt: Cinnamon never required me to think about how my desktop worked. Arch eventually did.
---

When I used Linux Mint, I never really thought about what made my desktop work.

Cinnamon was batteries included. I installed Mint, logged in, and had a working desktop. Applications worked, things were where I expected them to be, and I could customise whatever I wanted without understanding every component underneath. No environment flags, no wondering which piece was responsible for what. Most of the time I just used my computer.

That was exactly what I needed back then. My old PC was already struggling with 2GB of RAM and an ageing Intel CPU, and I had bigger problems, like getting Minecraft to run at something resembling a playable framerate.

Then I got a laptop for college and installed Arch.

## Having to put the pieces together

I wanted a particular window manager, compositor and workflow, which meant finding each component, installing it, configuring it, and getting everything to work together.

I didn’t suddenly understand how Linux worked. I just had to start figuring it out, because I was now responsible for things Cinnamon used to take care of.

I started running into stuff I’d never needed to think about. The bootloader. systemd. Services. journalctl. The shell and the terminal. The kernel and its modules. Even the desktop itself had turned into a pile of separate decisions: window manager, compositor, login manager, lockscreen, file manager, and the rest.

I also realised how little I understood some of the terminology I’d been throwing around. I genuinely thought window managers and compositors were basically the same thing. I’d been using the two words interchangeably without thinking about what each one actually did.

My current setup is Wayland with Niri and Noctalia. I also use wayland-satellite for X11 compatibility, and I still end up passing launch flags to applications every now and then. It’s a lot more piecemeal than what I was used to with Cinnamon. I like having control over each part, even when getting everything to behave takes more effort than I’d like.

## Even starting the system became interesting

The rabbit hole didn’t stop at the graphical environment.

I started looking at what actually happens when I turn on my laptop. There are so many processes and services between pressing the power button and getting a usable desktop. I started inspecting what was running, what was being started, and what I could do without.

I also spent some time trying to trim boot times. From what I remember, I got mine down from somewhere around 13 seconds to 5.

I wouldn’t call that a benchmark. I don’t have properly recorded measurements, and I couldn’t tell you how much each individual change contributed. But it got me interested in something I’d never thought about: everything that has to happen before I can even start using my computer.

## Still pulling threads

I eventually moved to CachyOS, but the urge to understand what’s underneath my everyday environment stuck around.

I don’t think a batteries-included desktop is inherently worse. There’s real value in not having to think about every component, and sometimes I just want to open my laptop and get on with my day. But I also like being able to pull something apart, work out what it’s responsible for, and put it back together the way I want.

I still have plenty to learn about the Linux desktop, especially the boot process and how all these pieces interact. I suppose that’s another rabbit hole waiting to happen.

Overhead acknowledged.
