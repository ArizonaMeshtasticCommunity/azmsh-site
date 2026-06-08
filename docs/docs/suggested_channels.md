---
title: Suggested Channels
---

# Suggested Channels

Channels are how Meshtastic groups conversations on the mesh. Every node listens on a
**primary** channel plus any **secondary** channels you add, and each channel has its own
name and encryption key so the right messages reach the right people.

Adding the channels below lets you join the wider **azmsh.net** community. Chat on the
Arizona channel, watch the weather roll in from rooftop stations, keep an eye on traffic, and
even play a little trivia. Everything here is shared publicly so anyone in the community can
hop on.

!!! tip "Two things to get right"

    - **Channel names are case-sensitive.** `Weather` and `weather` are *not* the same channel.
    - **Keys must match exactly.** Copy the key from the table below character-for-character.
      They're short, public, pre-shared keys (PSKs). That's by design for community channels.

---

## 📲 How to Add a Channel

Pick your platform below. The flow is the same idea everywhere: open the Meshtastic app,
find the **Channels** editor, add a channel, and enter the **Name** and **Key** from the
[table further down](#the-channels) exactly as written.

???+ note "Android"

    1. Open the **Meshtastic** app and make sure your node is connected over Bluetooth.
    2. Tap the **Settings** tab, then open **Channels**.
    3. Tap the **+** (add) button to create a new channel.
    4. Enter the **Channel Name** exactly as shown in the table. Remember it's
       **case-sensitive**.
    5. Enter the **Key** (PSK) from the table. On Android the key size is taken from the
       key you paste, so just paste it in exactly as written.
    6. Leave **Uplink/Downlink** at their defaults unless you have a reason to change them.
    7. Tap **Save** / the send button to write the channel to your node.

    > To use **MediumFast** as your primary channel, you can leave the primary channel's
    > name **blank**. An empty primary name is the `default` channel.

??? note "iOS / iPadOS / macOS"

    1. Open the **Meshtastic** app and connect to your node.
    2. Go to **Settings → Radio Configuration → Channels**.
    3. Tap **Add Channel** (the **+** button).
    4. Enter the **Channel Name** exactly as shown in the table. It's **case-sensitive**.
    5. Set the **Key Size** to match the **Size** column in the table:
        - `Default` → leave the size at **Default (1 byte)**.
        - `1-byte` → choose the **1 byte** size.
    6. Enter the **Key** (PSK) from the table exactly as written.
    7. Tap **Save**, then make sure you **send the configuration** back to your node.

    > To use **MediumFast** as your primary channel, you can leave the primary channel's
    > name **blank**. An empty primary name is the `default` channel.

??? note "Other (Web Client / Apple Watch / CLI)"

    **Web Client ([client.meshtastic.org](https://client.meshtastic.org))**

    1. Connect to your node over Bluetooth, Serial, or HTTP.
    2. Open **Config → Channels** and add a new channel.
    3. Enter the **Name** and **Key** from the table exactly, then save and send.

    **Apple Watch**

    The Watch app mirrors the channels already configured on your paired node. Add channels
    on your iPhone first (see the iOS steps above) and they'll sync to the Watch.

    **Meshtastic CLI**

    If you have the [Meshtastic CLI](https://meshtastic.org/docs/software/python/cli/installation/)
    installed, you can add a secondary channel directly. For example, to add **azmsh**:

    ```
    meshtastic --ch-add azmsh
    meshtastic --ch-index 1 --ch-set psk base64:AQ== --ch-set name azmsh
    ```

    Adjust the `--ch-index` and values for each channel you want. Use the exact names and keys
    from the table. Names are case-sensitive.

---

## The Channels

Add any of these to join the conversation. Keys are shown in monospace so you can tell them
apart at a glance (`AQ==` vs `Ww==`). The table scrolls sideways on small screens. Swipe to
see every column.

| Channel Name (case sensitive) | Key | Size (iOS only) | Description |
|:------------------------------|:----|:----------------|:------------|
| `MediumFast` | `AQ==` | Default | The default primary MediumFast channel. Name can also be left blank. |
| `azmsh` | `AQ==` | Default | The Arizona channel, great for running tests and general chatter. |
| `Weather` | `Ww==` | 1-byte | Users post from their weather stations on their roofs, great for checking the weather every hour and making sure your node is consistently receiving. |
| `Traffic` | `TQ==` | 1-byte | Local traffic reports along with waypoints showing where there is traffic on the map. |
| `Trivia` | `MQ==` | 1-byte | Play trivia with your fellow users. Type `!help` in the channel to learn how to play. |

!!! question "Need a hand?"

    Stuck getting a channel to show up? Hop into our [Discord](https://discord.gg/HrKtyuFEQk)
    or [reach out](../reach_out.md). Someone in the community is always happy to help.
