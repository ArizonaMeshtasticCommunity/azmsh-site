---
title: Privacy Policy
hide:
  - navigation
---

# Privacy Policy

_Last updated: June 8, 2026_

This policy explains what information the Arizona Meshtastic Community handles
when you visit this website (azmsh.net), sign in to our tools, or send traffic
across the mesh that our collectors can see.

We are a volunteer-run community group, not a company. We try to collect as
little as possible and to be clear about the parts of the mesh that are public by
design.

## The short version

- This website does not use cookies, analytics, or trackers.
- To use our tools (like the map and node viewer at view.azmsh.net), you sign in
  with Discord. Discord tells us who you are and which servers you belong to, so
  we can confirm you are part of the community and let you in. We do not see your
  Discord password or read your private messages.
- The mesh data we show (nodes, positions, signal reports, telemetry, and public
  text messages) is collected from the **public Meshtastic channel** over MQTT.
  Traffic on that channel is not private. If you broadcast on it, treat it as
  public.

## Signing in with Discord

Access to our tools is gated behind Discord. We use Discord's OAuth2 sign-in only
to confirm who you are and that you are allowed to use the tools. We do not run
our own password system.

When you sign in, we request three Discord permissions (scopes):

- **identify** lets us see your basic account, such as your Discord user ID,
  username, and avatar.
- **guilds** lets us see the list of Discord servers you belong to.
- **guilds.members.read** lets us see your membership details in a server, such as
  your roles and nickname.

We use these to confirm that you are a member of the Arizona Meshtastic Community
Discord and to check your roles so we can give you the right level of access. We
may keep your Discord user ID to manage your access and your session. We do not
receive your password, and we do not read your direct messages or server messages.

Your use of Discord is also covered by Discord's own terms and privacy policy:

- [Discord Developer Terms of Service](https://support-dev.discord.com/hc/en-us/articles/8562894815383-Discord-Developer-Terms-of-Service)
- [Discord Privacy Policy](https://discord.com/privacy)

You can review or remove our app's access at any time in your Discord account
settings under **Authorized Apps**.

## Mesh network data we collect and display

Our tools display data about the Arizona Meshtastic network. That data is gathered
by ad-hoc MQTT collectors that listen to the network. On the other end of those
MQTT links are Meshtastic radios that people in the community operate.

Meshtastic devices that are set to bridge to MQTT send their traffic to a broker,
where our collectors can receive it. Depending on how a node is configured, that
traffic can include:

- Node information, such as the node ID and the short and long names a user chose
- GPS position and altitude, if the node is set to share location
- Telemetry, such as battery level, voltage, and any attached sensor readings
- Public text messages
- Routing, neighbor, and traceroute information
- Signal data, such as signal-to-noise ratio and received signal strength

We collect this so we can show the health of the network: which nodes are online,
how they connect to each other, and how well the mesh is performing.

### How the data reaches us

A typical packet travels like this:

1. A Meshtastic radio sends a packet over the air.
2. A node on the mesh that is connected to MQTT relays that packet to an MQTT
   broker.
3. Our ingestion tool reads the packet from the broker and decodes it using the
   public default key (AQ==).
4. The decoded data is shown in our tools, such as view.azmsh.net.

Our broker is set up for uploads only. Nodes can send data to it, but downlink is
disabled, so the broker does not send anything back to nodes or the mesh, and
people cannot pull data back out of it. Only our own ingestion tools read from the
broker so we can display the data. **Nothing we run transmits on the network or
changes how your node behaves.**

## Important: public-channel data is not private

Meshtastic's standard channels are secured only with a default encryption key
(AQ==) that ships with every device and is publicly known. This is not unique to
one channel. The same default key is used by the common presets, such as LongFast
and MediumFast, whenever a channel is left on the default key. Because that key is
public, anyone running Meshtastic can read traffic that uses it. It is not
private, even though it is technically "encrypted."

When a node is configured to uplink to MQTT, that traffic can be received by any
collector connected to that broker, including ours and others around the world.
Please keep this in mind:

- Anything you send on the public channel can be seen by other people.
- If your node shares its location, that location can be collected and displayed.
- If you want privacy, do not put sensitive information on the public channel.

If you connect a node to MQTT, please follow best node practices as described in
the [Meshtastic MQTT documentation](https://meshtastic.org/docs/software/integrations/mqtt/).

To learn more about how this works, see the Meshtastic documentation on
[MQTT](https://meshtastic.org/docs/software/integrations/mqtt/) and
[encryption](https://meshtastic.org/docs/overview/encryption/).

## Your choices and control

You control what your own node puts on the air. To limit what can be collected:

- Turn off MQTT uplink on your node if you do not want it bridged to a broker.
- Turn off position sharing, or reduce your location precision, if you do not
  want your location collected.
- Use a private channel with your own key for anything you do not want to be
  public.

If you would like us to remove specific data tied to your node or your Discord
account from our tools, [contact us](#contact-us) and we will do our best to help.
To help us find the right data quickly, please include:

- A screenshot of the node in our tools, if you can get one.
- The node ID and name, along with any other naming information that helps
  identify it.
- What you want removed: location only, text messages only, or all information
  for the node.

Note that we cannot remove data that other collectors or the wider Meshtastic
ecosystem may have already received from the public channel.

## How we share information

We do not sell your information, and we do not share it for advertising. Limited
sharing happens as a normal part of running the site and the network:

- **Discord** handles sign-in, as described above.
- **Our hosting providers** serve the website and run the tools.
- **The public Meshtastic network** is shared by design. Public-channel traffic
  reaches other collectors and viewers beyond us, and we do not control them.

## How long we keep information

Most of our tools keep mesh data for about two weeks and then let it age off
automatically. We keep the Discord account information needed to manage your
access for as long as you have access to the tools. If you would like your
information removed, please reach out.

## Children's privacy

Our website and tools are meant for a general audience and are not directed to
children under 13. Access to our tools requires signing in with Discord, and
Discord's own terms require users to be at least 13 years old (or older where
local law requires it). We do not knowingly collect personal information from
children under 13. If you believe a child has provided us with personal
information through our tools, please [contact us](#contact-us) and we will delete
it.

## By connecting to the network and using our tools

By connecting a node that uplinks to MQTT on the public channel, or by signing in
to and using our tools, you acknowledge and agree that:

- Traffic you send on the public Meshtastic channel is public and may be
  collected, stored, and displayed by us and by others.
- Position, telemetry, and text data your node broadcasts on the public channel
  may appear in our tools.
- You are responsible for configuring your own node, including whether it shares
  location and whether it uplinks to MQTT.
- Our tools are provided by volunteers, as-is, with no guarantee of accuracy or
  availability.
- You will use the tools and the network in line with Meshtastic's guidelines and
  applicable law, and you will not use them to harass others or to disrupt the
  network.

If you do not agree with this, please do not uplink to the public channel or use
our tools.

## Changes to this policy

We may update this policy as the network and our tools change. When we make a
meaningful change, we will update the date at the top of this page.

## Contact us

- **Email:** [contact@azmsh.net](mailto:contact@azmsh.net)
- **Discord:** [Join the Arizona Meshtastic Community Discord](https://discord.gg/HrKtyuFEQk)
