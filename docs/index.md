---
title: Home
hide:
  - toc
  - navigation
---

# Welcome to Arizona's Meshtastic Community!

Meshtastic is a free, open-source mesh network that lets you send text messages, share GPS locations, and communicate off-grid using small, affordable radios. No cell service, no internet, no monthly fees, no license required.

Whether you're brand new to radio or a seasoned operator, this is your hub to get started and connect with the Arizona Meshtastic Community.

<span style="display: flex; align-items: center; justify-content: center; gap: 1rem;">
    [:fontawesome-brands-discord: Join us on Discord](https://discord.gg/HrKtyuFEQk){ .md-button .md-button--primary target="_blank"}
    [:material-information-outline: Learn how to connect](/docs/how-to-connect.html){ .md-button }
</span>

<div class="grid cards" markdown>

-   __Total Nodes: Last 30 Days__

    ---

    <span id="totalNodes" style="display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 50px;"></span>

</div>

<div class="grid cards" markdown>

-   __Nodes Online: Last 30 Mins__

    ---

    <span id="nodes30min" style="display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 50px;"></span>

-   __Nodes Online: Last 2 Hours__

    ---

    <span id="nodes2hr" style="display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 50px;"></span>

-   __Nodes Online: Last 24 Hours__

    ---

    <span id="nodes24hr" style="display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 50px;"></span>

</div>

## Coverage Map

Where the mesh heard node positions in the last 30 days. It is a record, not a prediction: no colour does not mean no coverage, only that no node sent its position from there. No individual nodes are shown.

<iframe class="azmsh-coverage-map" src="https://api.azmsh.net/coverage" title="Arizona Meshtastic coverage map: where the mesh heard node positions in the last 30 days" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
