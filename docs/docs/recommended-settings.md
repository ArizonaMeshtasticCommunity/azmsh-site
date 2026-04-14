---
title: Recommended Settings
---

# Recommended Settings

These settings are based on real-world experience from the Arizona Meshtastic community. Following them helps keep our shared mesh network healthy and reliable for everyone.

!!! note "Preset and Frequency"
    The Arizona-specific **preset** and **frequency slot** are shared in our Discord server. [Join the Discord](https://discord.gg/HrKtyuFEQk) to get these settings before configuring your device.

---

## Node Roles

Choosing the right role for your device keeps the network clean and efficient.

### Client Mute

**Use for: anything mobile** -- backpacks, vehicles, pocket nodes.

Client Mute nodes can send and receive messages but do **not** rebroadcast other people's traffic. This is the best choice for devices that move around, since mobile rebroadcasters create unpredictable routing and extra congestion.

### Client

**Use for: stationary home or rooftop nodes.**

Client is the standard role. Your node will participate in the mesh by rebroadcasting messages, which helps extend coverage for your neighbors.

!!! tip "When in doubt, client it out"
    Not sure which role to pick? Set your device to **Client Mute** and talk to a community member in Discord. You can always change it later.

### Router and Router Late

!!! danger "DO NOT set your node to Router or Router Late without approval"
    **These roles require explicit approval from the Arizona Meshtastic Infrastructure Team.** Setting your node to Router or Router Late without permission WILL cause problems for the entire mesh network — increased congestion, routing loops, and degraded performance for everyone. This is the #1 way people accidentally break the network. **Contact the Infrastructure Team on [Discord](https://discord.gg/HrKtyuFEQk) BEFORE changing to either of these roles.** No exceptions.

---

## Broadcast Intervals

Keeping broadcast intervals tuned correctly reduces channel congestion and lets everyone's messages get through reliably.

### Mobile Nodes

For devices that move around (in your car, backpack, pocket, etc.):

| Setting | Value | Notes |
|:--------|:------|:------|
| **Node Info Broadcast** | `43200` sec (12 hours) | Your node info rarely changes -- no need to broadcast it often. |
| **Smart Broadcast** | **ON** | Automatically sends position updates when you move. |
| Smart Broadcast Min Distance | `100` meters | Only broadcasts after moving at least 100m. |
| Smart Broadcast Min Interval | `60` seconds | No more than one smart broadcast per minute. |
| **Position Broadcast** | `3600` sec (1 hour) | Fallback interval if GPS is enabled. |
| **GPS Update Interval** | `300` sec (5 minutes) | How often the device checks its own GPS. |
| **Device Metrics** | `3600` sec (1 hour) | Battery, voltage, channel utilization, etc. |
| **Environment Metrics** | `3600` sec (1 hour) | Temperature, humidity, etc. (if sensors attached). |
| **Power Metrics** | `3600` sec (1 hour) | Power monitoring (if sensors attached). |
| **Map Report** | `3600` sec (1 hour) | Sends position to the map server. |

### Stationary Nodes

For devices that stay in one place (rooftop, home base, solar nodes):

| Setting | Value | Notes |
|:--------|:------|:------|
| **Node Info Broadcast** | `43200` sec (12 hours) | Same as mobile -- node info does not change often. |
| **Smart Broadcast** | **OFF** | Your node is not moving, so smart positioning is not needed. |
| **Position Broadcast** | `43200` sec (12 hours) | Only if GPS is enabled. Your position is fixed. |
| **GPS Update Interval** | `21600` sec (6 hours) | Minimal GPS checks since the node does not move. |
| **Device Metrics** | `3600` sec (1 hour) | Still useful for monitoring battery and channel utilization. |
| **Environment Metrics** | `3600` sec (1 hour) | If sensors are attached. |
| **Power Metrics** | `3600` sec (1 hour) | If sensors are attached. |
| **Map Report** | `21600` sec (6 hours) | Less frequent since your position is fixed. |

---

## MQTT

MQTT lets your node upload diagnostic data to a shared server, which helps us monitor network health and see all nodes on the map. It does **not** send your personal messages or private data -- only metadata like position, telemetry, and node info.

!!! info "What MQTT does and does not do"
    - **Does**: Shares your node's position, battery level, signal metrics, and channel utilization with the community map and monitoring tools.
    - **Does not**: Send your private messages, direct messages, or any encrypted channel content to any server.

### How to Enable MQTT

To enable MQTT uplink, you will need the community broker settings (server address, username, and password). **Join the [Discord](https://discord.gg/HrKtyuFEQk) to get them.**

Once you have the broker details:

1. **LoRa Settings**: Enable **"OK to MQTT"** -- this allows your node's data to be uplinked.
2. **MQTT Module**: Enter the broker settings provided in Discord.
3. **Channel Settings** (for each channel you want to uplink):
    - **Uplink**: **ON** -- sends your node's data to the MQTT server.
    - **Downlink**: **OFF** -- prevents MQTT messages from being injected back into the radio mesh.

!!! warning "Always keep Downlink OFF"
    Downlinking from MQTT into the primary channel floods the radio mesh with traffic from the internet. Keep downlink disabled unless you have a specific reason and have discussed it with the community.

---

## Community Links

| Resource | Link |
|:---------|:-----|
| Main Website | [azmsh.net](https://azmsh.net) |
| Contribute | [GitHub](https://github.com/ArizonaMeshtasticCommunity/azmsh-site) |
| Arizona Mesh Map (Liam Maps) | [map.azmsh.net](https://map.azmsh.net) |
| MeshView | [view.azmsh.net](https://view.azmsh.net) |
| Grafana Metrics | [metrics.azmsh.net](https://metrics.azmsh.net) (guest login: `guest` / `&&jgVDW925g9^r`) |
| IRC | [irc.libera.chat #azmsh](https://web.libera.chat/#azmsh) |
| Discord | [discord.gg/HrKtyuFEQk](https://discord.gg/HrKtyuFEQk) |
