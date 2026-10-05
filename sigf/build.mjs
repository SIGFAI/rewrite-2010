// 2010 Rust Rewrite Mashup (chasmlol + the IW4L contributors, Apache-2.0): one Rust game (IW4L, a clean rewrite of
// MW2's engine) that plays Modern Warfare 2 (2009) multiplayer maps with bots, an endless Minecraft 26.3 world fought
// with MW2's guns, and Skate 3 skating. It reads MW2's files in place from the player's Steam install, downloads
// Minecraft 26.3's client files from Mojang on first run, and (optional) converts the player's own extracted Skate 3
// Xbox 360 copy on their PC. QC.md (Pj 2026-10-05) allows both.
//
// Upstream fetch (PLATFORM-SPEC section 4), not a rehost: the zip's skate converter (PyInstaller bundle) and the
// skate crates inside iw4l.exe come from SK8-ENGINE/skate-3-rust-engine, which has no license, so SIGF does not
// redistribute them. The app downloads the author's own v0.4.0 zip, pinned, and installs it as released.
// It installs into {app} (a writable folder outside Program Files, as upstream asks); IW4L writes .env,
// iw4l-artifacts\ (Minecraft files) and skate-data\ next to iw4l.exe, so Restore removes everything.
//   node library/rewrite-2010/build.mjs       (outputs: library/lib.mjs)
import { asset, card, dl, emit, pinned } from '../lib.mjs';

const UP = {
  repo: 'https://github.com/chasmlol/2010-rust-rewrite-mashup', tag: 'v0.4.0', commit: 'f608f85e407ff1b7689d54a9aafdd16e95711ac4',
  license: 'Apache-2.0',
  authors: ['chasmlol', 'vladtrc', 'gitoutofthere', 'awsms', 'Intelios', 'LuaxY', 'Wet-Shoelace', 'vmpprotect', 'johnseth97'],
  zip: { file: '2010-Rust-Rewrite-Mashup-windows-x64.zip', sha256: 'f7c02cfb4dd5650be29762947a0b17d3e6f9b9f1259025ee89a99bd031e1ebca' }, // = GitHub digest
  root: '2010-Rust-Rewrite-Mashup',
};
const ID = 'rewrite-2010', VERSION = '0.4.0', NAME = '2010 Rust Rewrite Mashup';
const TAGLINE = 'MW2 (2009), Minecraft and Skate 3 in one Rust game: MW2 maps with bots, an endless Minecraft world fought with MW2 guns, and skating on any map.';

const url = `${UP.repo}/releases/download/${UP.tag}/${UP.zip.file}`;
const zip = asset(UP.zip.file, await pinned(url, UP.zip.sha256), { zipped: true, upstream: url });
if (!zip.contents.some(c => c.path === `${UP.root}/iw4l.exe`)) throw new Error(`${UP.zip.file} has no ${UP.root}/iw4l.exe`);
const assets = [zip];

const make = (urls) => ({
  id: `sigf/${ID}`,
  version: VERSION,
  name: NAME,
  tagline: TAGLINE,
  kind: 'mashup', // a new engine re-plays all three; no game is modded or launched
  games: [
    { game: 'mw2', role: 'host', label: 'Call of Duty: Modern Warfare 2 (2009)', engine: 'IW4L (Rust rewrite of the IW4 engine) reading MW2\'s fastfiles in place',
      apps: { steam: '10190' }, runtime: 'PC multiplayer (iw4mp.exe and zone/), tested with the Steam version', mode: 'bots, LAN or IW4L\'s own servers; never MW2\'s official multiplayer' },
    { game: 'minecraft', role: 'guest', label: 'Minecraft', mc: '26.3', uses: 'client.jar and assets downloaded from Mojang on first run (about 125 MB)' },
    { game: 'skate3', role: 'guest', label: 'Skate 3 (Xbox 360, optional)', uses: 'your own extracted copy (default.xex + data/), converted on your PC; skating needs a controller' },
  ],
  requires: [
    { id: 'mw2-multiplayer', page: 'https://store.steampowered.com/app/10180/', note: 'Modern Warfare 2 (2009) with multiplayer installed (the folder with iw4mp.exe and zone/); IW4L only reads it' },
    { id: 'minecraft-java', page: 'https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc', note: 'own Minecraft: Java Edition; the game downloads 26.3\'s files from Mojang itself on first run' },
    { id: 'skate3-xbox360', optional: true, note: 'your own Skate 3 disc or Games on Demand copy, extracted (extract-xiso or Velocity): default.xex with its data folder; ISO files are refused' },
    { id: 'controller', optional: true, note: 'an Xbox controller, needed to skate' },
  ],
  install: [
    // As released (upstream fetch): only 2010-Rust-Rewrite-Mashup/ of the zip, into this mashup's own folder.
    { game: 'mw2', strategy: 'profile', files: [
      { src: zip.name, dst: '{app}', root: UP.root, unpack: true, contents: zip.contents, ...dl(zip, urls) },
    ] },
  ],
  // Nothing for the app to start yet: the program is {app}/iw4l.exe, not a store game (contract gap, notes.md).
  launch: [],
  files: assets.map(a => ({ name: a.name, ...dl(a, urls) })),
  source: {
    repo: UP.repo, license: 'Apache-2.0 (upstream download)', upstream_license: UP.license, fetch: 'upstream', tag: UP.tag, commit: UP.commit,
    hosted: `https://github.com/SIGFAI/${ID}`, based_on: 'https://github.com/vladtrc/iw4L',
    linked: [
      { name: 'skate crates and converter', repo: 'https://github.com/SK8-ENGINE/skate-3-rust-engine', commit: 'cb79689', license: 'none (not redistributed by SIGF)' },
      { name: 'MinecraftOSS worldgen crates', commit: '4013a68', license: 'not stated in the repo' },
    ],
  },
  media: {},
  built_by: { author: UP.authors[0], authors: UP.authors, packaged_by: 'SIGF' },
  idea_by: UP.authors[0],
  built_at: '2026-10-05T00:00:00.000Z',
  ...card(UP.repo),
  notes: [
    'Windows 64-bit. You need Call of Duty: Modern Warfare 2 (2009) on PC with multiplayer installed (Steam works). Skate 3 is optional.',
    'Start it yourself for now: open this mashup\'s folder (Open folder in the app) and run iw4l.exe ("Minecraft World.bat" goes straight to the Minecraft map). The app downloads the authors\' own release, unchanged.',
    'First run: confirm your MW2 folder (the one with iw4mp.exe and zone/; IW4L never changes it). It then downloads Minecraft 26.3\'s files from Mojang (about 125 MB) and plays offline after that.',
    'Skating (optional): answer Yes and select default.xex inside your own extracted Skate 3 Xbox 360 copy (extract-xiso or Velocity; an .iso is refused). It copies the skater, animations and physics settings into skate-data/ on your PC. Nothing from Skate 3 is shipped. J or both sticks toggle skating (controller needed).',
    'Minecraft map: Create Game > MINECRAFT tab > overworld. E inventory, 1-9 hotbar, Q drop, ` console.',
    'Offline with bots, LAN, or IW4L\'s own servers only: it never connects to MW2\'s official multiplayer, Steam or VAC.',
    'Start over: delete .env next to iw4l.exe. Restore deletes the whole folder, including the downloaded Minecraft files and skate-data.',
    'Beta with open bug reports (invisible skateboard on some maps, missing killcams, skate markers): report bugs to the authors on the upstream issue tracker.',
  ],
});

// No app fixture: the zip is 70 MB and not ours to commit.
emit({ slug: ID, version: VERSION, assets, fixtureAssets: null, make });
