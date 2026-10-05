# 2010 Rust Rewrite Mashup

MW2 (2009), Minecraft and Skate 3 in one Rust game: MW2 maps with bots, an endless Minecraft world fought with MW2 guns, and skating on any map.

**2010 Rust Rewrite Mashup is made by [chasmlol](https://github.com/chasmlol).** All credit for the mod goes to them. It is built on [vladtrc/iw4L](https://github.com/vladtrc/iw4L) by vladtrc, gitoutofthere, awsms, Intelios, LuaxY, Wet-Shoelace, vmpprotect, johnseth97.

- Original project: https://github.com/chasmlol/2010-rust-rewrite-mashup
- Report bugs and ask questions there: https://github.com/chasmlol/2010-rust-rewrite-mashup/issues
- Upstream release packaged here: [v0.4.0](https://github.com/chasmlol/2010-rust-rewrite-mashup/releases/tag/v0.4.0) (commit [`f608f85`](https://github.com/chasmlol/2010-rust-rewrite-mashup/tree/f608f85e407ff1b7689d54a9aafdd16e95711ac4))

> **Beta.** Nobody at SIGF has played this build yet. Back up your saves.
> Bugs in the mod itself go to the author's issue tracker above; problems with the one-click install go to this repository's issues.

## What you need

- **Call of Duty: Modern Warfare 2 (2009)** ([Steam](https://store.steampowered.com/app/10190/)): PC multiplayer (iw4mp.exe and zone/), tested with the Steam version.
- **Minecraft**: Java Edition 26.3 (client.jar and assets downloaded from Mojang on first run (about 125 MB)).
- **Skate 3 (Xbox 360, optional)** (your own extracted copy (default.xex + data/), converted on your PC; skating needs a controller).
- mw2-multiplayer: Modern Warfare 2 (2009) with multiplayer installed (the folder with iw4mp.exe and zone/); IW4L only reads it (https://store.steampowered.com/app/10180/).
- minecraft-java: own Minecraft: Java Edition; the game downloads 26.3's files from Mojang itself on first run (https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc).
- skate3-xbox360: your own Skate 3 disc or Games on Demand copy, extracted (extract-xiso or Velocity): default.xex with its data folder; ISO files are refused.
- controller: an Xbox controller, needed to skate.
- Windows and the [SIGF app](https://sigf.ai). The app installs  for you.

## Install

In the SIGF app, open **2010 Rust Rewrite Mashup** in the catalog, press **Install**, then **Play**. **Restore** puts your game folders back exactly as they were.
The app follows `mashup.json` in this repository: every download is pinned by sha256. `2010-Rust-Rewrite-Mashup-windows-x64.zip` comes from the author's own release.

### Good to know

- Windows 64-bit. You need Call of Duty: Modern Warfare 2 (2009) on PC with multiplayer installed (Steam works). Skate 3 is optional.
- Start it yourself for now: open this mashup's folder (Open folder in the app) and run iw4l.exe ("Minecraft World.bat" goes straight to the Minecraft map). The app downloads the authors' own release, unchanged.
- First run: confirm your MW2 folder (the one with iw4mp.exe and zone/; IW4L never changes it). It then downloads Minecraft 26.3's files from Mojang (about 125 MB) and plays offline after that.
- Skating (optional): answer Yes and select default.xex inside your own extracted Skate 3 Xbox 360 copy (extract-xiso or Velocity; an .iso is refused). It copies the skater, animations and physics settings into skate-data/ on your PC. Nothing from Skate 3 is shipped. J or both sticks toggle skating (controller needed).
- Minecraft map: Create Game > MINECRAFT tab > overworld. E inventory, 1-9 hotbar, Q drop, ` console.
- Offline with bots, LAN, or IW4L's own servers only: it never connects to MW2's official multiplayer, Steam or VAC.
- Start over: delete .env next to iw4l.exe. Restore deletes the whole folder, including the downloaded Minecraft files and skate-data.
- Beta with open bug reports (invisible skateboard on some maps, missing killcams, skate markers): report bugs to the authors on the upstream issue tracker.

## What this repository holds

The 2010 Rust Rewrite Mashup is Apache-2.0, but its release zip contains Skate 3 engine code from SK8-ENGINE/skate-3-rust-engine, which has no license, so SIGF does not rehost it. This repository holds **only SIGF's own files**, never the author's:

1. This README, `sigf/` (the script that built the recipe, for reference) and `mashup.json` (the SIGF app recipe).
2. Not here: `2010-Rust-Rewrite-Mashup-windows-x64.zip` (sha256 `f7c02cfb4dd5650be29762947a0b17d3e6f9b9f1259025ee89a99bd031e1ebca`). The app downloads it on the player's demand from the author's release, as released: https://github.com/chasmlol/2010-rust-rewrite-mashup/releases/download/v0.4.0/2010-Rust-Rewrite-Mashup-windows-x64.zip
3. The release `v0.4.0`, which has no assets: the recipe's only download is the author's file above.

The sha256 of every file inside the zips is in `mashup.json` (`contents`).

## Licenses

| Part | License | Where |
|---|---|---|
| 2010 Rust Rewrite Mashup (the author's release zip) | Apache-2.0 (with NOTICE), plus bundled skate code with no license. Not stored here; the app downloads it from the author's release | https://github.com/chasmlol/2010-rust-rewrite-mashup |

## Why this repository exists

The SIGF app (https://sigf.ai) installs mods from recipes (`mashup.json`) whose downloads are pinned release files. This repository makes 2010 Rust Rewrite Mashup installable in one click, credited to chasmlol. If you are the author and want anything changed or taken down, open an issue here.
