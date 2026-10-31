---
title: Probe Effect
slug: probe-effect
date: 2026-10-29
excerpt: A p99 probe for my own understanding.
---

Most first posts introduce the author. There’s an about page for that. This one is about what I think a blog is for.

Here’s a number that bothers me: a service with a 1 ms mean latency and a 400 ms p99. By the dashboard it’s fine. For one request in a hundred it’s broken, and those are the requests people remember. The mean hides exactly the part you needed to see.

I think understanding works the same way. My average comprehension of most systems I use looks fine. I can talk about goroutine scheduling, or what a write-ahead log is for, and sound like I know what I’m saying. The problem is the tail: the one case I’ve never had to explain from scratch, where the fluent story I carry around quietly falls apart. You don’t find that tail by feeling confident. You find it by being forced to produce something precise that someone else could check.

That’s what I want this blog to be: a p99 probe for my own understanding.

## Probes cost something

Every instrument you attach to a system is part of the system.

```go
start := time.Now()
doWork()
elapsed := time.Since(start) // two clock reads, now part of what you measured
```

At the scale of doWork() taking seconds, nobody cares. When it takes microseconds, you’re mostly measuring your own ruler. Turn on a runtime tracer in a latency-sensitive Go program and the same thing happens at larger scale: you’re no longer observing the program you had, you’re observing the program-plus-observer. I’m currently digging into how that distortion shows up in tail latency, and I’ll write it up when I have real numbers, not before.

Writing has the same problem. The moment I know I’ll publish an explanation, I understand it differently: more carefully, more defensively, sometimes better. Just because the probe changes the system doesn’t mean I should skip measuring. It means I should account for the overhead and say so.

## Ground rules for myself

- Tails over means. If I only report the case where it worked, the post is useless.
- Numbers or it didn’t happen. Benchmarks, traces, or a clear statement that this is intuition.
- Say what I got wrong. Corrections go in the post, not silently into a rewrite.
- Write while confused, not only after I’ve figured it out. The useful part is the gap.

## What to expect

Notes on concurrency, runtime behavior, and distributed systems, mostly as I hit them. Some of it will be wrong, and I’ll flag that when I find out.

Consider this post the first sample. Overhead acknowledged.
