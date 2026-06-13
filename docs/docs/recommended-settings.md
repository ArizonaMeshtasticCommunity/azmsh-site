---
hide:
  - navigation
title: Recommended Settings
---

# Recommended Settings

These settings are based on real-world experience from the Arizona Meshtastic community. Following them helps keep our shared mesh network healthy and reliable for everyone. If you still need a radio, check our [Recommended Hardware](/docs/recommended-hardware.html) page first.

!!! note "Preset and Frequency"
    The Arizona-specific **preset** and **frequency slot** are shared in our Discord server. Join to get these settings before configuring your device.

    [:fontawesome-brands-discord: Join the Discord to Get Settings](https://discord.gg/HrKtyuFEQk){ .md-button .md-button--primary }

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

!!! warning "Understand Router roles before switching"
    **Router** and **Router Late** are designed for nodes at **high elevation, permanent fixed locations with good line-of-sight** — think hilltops, towers, or mountain repeater sites. They aggressively rebroadcast traffic and are optimized to extend the mesh across long distances.

    Used in the wrong context — a home, an apartment, or a mobile node — these roles can cause increased congestion, routing loops, and degraded performance for everyone on the mesh. Meshtastic's own guidance is to use these roles only where they genuinely improve coverage for the wider network, not just your own reach.

    **Before switching to Router or Router Late, make sure you understand the implications.** If you're unsure whether your location and setup are a good fit, ask the community on Discord — we're happy to help.

    [:fontawesome-brands-discord: Ask the Community on Discord](https://discord.gg/HrKtyuFEQk){ .md-button .md-button--primary }

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

## Neighbor Info

Neighbor Info is a module that periodically broadcasts a list of your node's direct neighbors along with the signal quality (SNR) of each link. When enabled across multiple nodes, the community can build a real picture of how the mesh is connected — which helps identify coverage gaps, optimize node placement, and understand how traffic actually flows through the network.

Neighbor Info packets are small and infrequent, so the channel congestion impact is very low.

**Recommended Update Interval**

| Node type | Interval | Seconds |
|:----------|:---------|:--------|
| **Mobile** | 4 hours | `14400` |
| **Stationary** | 11 hours | `39600` |

4 hours is the minimum the firmware allows. Use the longer interval for stationary nodes since their neighbors rarely change.

??? note "How to Enable on Android"
    Requires Meshtastic app version 2.2.0 or higher.

    1. Open the Meshtastic app and connect to your node.
    2. Tap the **three-dot menu** (vertical ellipsis) in the top-right corner.
    3. Select **Radio Configuration**.
    4. Scroll down and tap **Neighbor Info**.
    5. Toggle **Enabled** to ON.
    6. Set the **Update Interval** to `14400` (mobile) or `39600` (stationary).
    7. Toggle **Transmit Over LoRa** to ON — this sends the neighbor info over the radio mesh and to MQTT.
    8. Tap **Send** to save the settings to your node.

??? note "How to Enable on Web Client"
    1. Open the Meshtastic Web UI and connect to your node (usually at `meshtastic.local` or via USB serial).
    2. Click **Config** in the left sidebar.
    3. Click **Module Config**.
    4. Click **Neighbor Info**.
    5. Toggle **Enabled** to ON.
    6. Set the **Update Interval** to `14400` (mobile) or `39600` (stationary).
    7. Toggle **Transmit Over LoRa** to ON.
    8. Click **Save** to apply the settings.

??? note "How to Enable via CLI"
    Requires the Meshtastic Python CLI version 2.2.0 or higher (`pip install meshtastic`).

    ```bash
    # Enable the module
    meshtastic --set neighbor_info.enabled true

    # Set update interval (seconds) — 14400 = 4 hours, 39600 = 11 hours
    meshtastic --set neighbor_info.update_interval 14400

    # Enable transmit over LoRa (sends over radio AND MQTT)
    meshtastic --set neighbor_info.transmit_over_lora true

    # Verify your settings
    meshtastic --get neighbor_info
    ```

    Run these commands while connected to your node over USB, Bluetooth, or TCP.

!!! warning "iOS: Neighbor Info not currently supported"
    The iOS Meshtastic app does not currently support enabling the Neighbor Info module. iOS users will need to use the Web client or CLI over a TCP/USB connection to configure this setting on their node.

---

## MQTT

MQTT lets your node upload diagnostic data to a shared server, which helps us monitor network health and see all nodes on the map. It does **not** send your personal messages or private data -- only metadata like position, telemetry, and node info.

!!! info "What MQTT does and does not do"
    - **Does**: Shares your node's position, battery level, signal metrics, and channel utilization with the community map and monitoring tools.
    - **Does not**: Send your private messages, direct messages, or any encrypted channel content to any server.

**How to Enable MQTT**

To enable MQTT uplink, you will need the community broker settings (server address, username, and password).

[:fontawesome-brands-discord: Join the Discord for MQTT Settings](https://discord.gg/HrKtyuFEQk){ .md-button .md-button--primary }

Once you have the broker details:

1. **LoRa Settings**: Enable **"OK to MQTT"** -- this allows your node's data to be uplinked.
2. **MQTT Module**: Enter the broker settings provided in Discord.

    <div class="azmsh-locked">
      <div class="azmsh-settings">
        <div class="azmsh-row"><span class="azmsh-label">Server:</span> <span class="azmsh-value">broker.example.net:1883</span></div>
        <div class="azmsh-row"><span class="azmsh-label">Username:</span> <span class="azmsh-value">azmesh_uplink</span></div>
        <div class="azmsh-row"><span class="azmsh-label">Password:</span> <span class="azmsh-value">k7Qx29fNvB4w</span></div>
        <div class="azmsh-row"><span class="azmsh-label">Topic:</span> <span class="azmsh-value">msh/XX/REGION</span></div>
      </div>
      <div class="azmsh-overlay">
        <span class="azmsh-overlay-text">🔒 Broker settings are shared in Discord</span>
        <a class="md-button md-button--primary" href="https://discord.gg/HrKtyuFEQk">Join The Discord</a>
      </div>
    </div>

3. **Channel Settings** (for each channel you want to uplink):
    - **Uplink**: **ON** -- sends your node's data to the MQTT server.
    - **Downlink**: **OFF** -- prevents MQTT messages from being injected back into the radio mesh.

!!! warning "Always keep Downlink OFF"
    Downlinking from MQTT into the primary channel floods the radio mesh with traffic from the internet. Keep downlink disabled unless you have a specific reason and have discussed it with the community.

