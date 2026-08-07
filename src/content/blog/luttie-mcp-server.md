---
title: "building an mcp server so i can color-grade with agents"
description: "shipping an mcp server for luttie so ai agents can call its color-grading tools directly"
date: "2026-07-28"
published: true
---

I've been building Luttie, a browser-based color grading tool. A few weeks ago, I shipped an MCP server (endpoint at `luttie.app/api/mcp`) that lets Claude, Codex, or any other MCP-compatible agents call Luttie's most popular tools directly.

Here's why, a deeper explanation of what it does, and what I learned building it:

<img src="/blog/luttie-mcp-server/luttie-web-app.png" alt="Luttie web app" width="600" style="margin: 20px auto; display: block;" />
<p style="text-align: center; font-size:12px; font-style: italic; margin-top: -8px; color: #6b7280;">luttie web app</p>

## Why

The reason why is genuinely simple. I wanted to explore whether using agents could speed up color-grading workflows &mdash; not just for me, but for anyone else who might discover this and may be wondering the same thing (or anyone who finds this and happens to be curious).

MCP has matured to make this possible, and Luttie's core operations (a LUT library, color grading engine) mapped cleanly onto tools that the agent could call.

Yeah so basically I built it just to find out if I could.

## Brief MCP explanation (for those who aren't tapped in)

MCP (Model Context Protocol) is an open standard that allows AI agents to call external tools mid-conversation. Instead of clicking through a UI on your own, the agent calls functions, gets structured data as a response, and keeps going until it's finished, or stopped. Luttie's server runs remotely, so all you need to do is add a URL and API Key to your client's MCP config, and the color-grading tools become available.

<img src="/blog/luttie-mcp-server/mcp-explanation.gif" alt="Explanation of MCP (by Daily Dose of Data Science)" width="600" style="margin: 20px auto; display: block;" />
<p style="text-align: center; font-size:12px; font-style: italic; margin-top: -8px; color: #6b7280;">explanation of mcp (by daily dose of data science)</p>

## What Luttie MCP exposes

Luttie MCP provides 5 main tools:

- `list_luts` &mdash; every published individual LUT/pack in the library, with slug, tags, and whether it's Pro-gated or not.
- `get_lut` &mdash; a LUT's metadata and raw `.cube` file by slug
- `ai_grade` &mdash; generates three color grading variants from a text description, optionally connected to a reference image. It uses the same model that is behind Luttie's AI Grade feature in the browser.
- `apply_lut` &mdash; applies a LUT to an image server-side and returns a graded PNG.
- `account_status` &mdash; tier and current hourly usage, since `ai_grade` and `apply_lut` are rate-limited. (20/hour and 60/hour respectively, tracked separately from the web editor).

I resisted the urge to expose all of Luttie's features to the MCP right now since I wanted to make sure everything works correctly first. Also agents don't need to have access to every small function, they just need to handle the functions that make sense as simple stateless calls.

## What it looks like in practice

Inside your agent of choice, once the MCP server is connected you can describe the look you want e.g. "warm cinematic with teal shadows", and the agent will call `ai_grade`, return 3 variants and can then chain that into whatever else you want to do, whether that is naming files, writing a changelog, or doing a batch job across a folder of images. The possibilities are endless, as the agent-driven pipeline makes an isolated service into a piece of something larger.

## A Surprise to Me

It did not take long to do (like at all lol). A large bulk of the MCP server revolves around calling endpoints that have existed in the project for a while, so it only took me an afternoon to get done. Other things like auth decisions took time too, but nothing worth discussing here.

## Try It Now

Setup instructions, the full tool list, and config snippets for Claude Code, Claude Desktop and Codex CLI are available here. Free accounts can browse and apply free LUTs immediately. Pro features like AI grading need a subscription.

<img src="/blog/luttie-mcp-server/unsplash-photo.webp" alt="Photo by Darius Bashar on Unsplash" width="600" style="margin: 20px auto; display: block;" />
<p style="text-align: center; font-size:12px; font-style: italic; margin-top: -8px; color: #6b7280;">Photo by Darius Bashar on Unsplash</p>

If you're building an MCP server for a creative tool, I'd genuinely like to get your insight/compare notes. So feel free to reach out on X or by email.
