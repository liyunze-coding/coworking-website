---
title: Music and Audio
layout: "../../layouts/GuideLayout.astro"
description: Learn how to add music or audio for your coworking streams!
order: 1
---

# Music and Audio

Enhance your stream audio!

---

## Microphone quality

Having awful microphone quality on stream would negatively affect the viewer experience. Here's a few tips on how to improve your microphone quality on OBS, using filters!

:::note
To open Filters for your microphone on OBS:
1. Open OBS
2. Find Mic/Aux in your Audio Mixer
3. Click on the 3 dots  &#65049;
4. Select "Filters"
5. On the bottom right, you should see a plus `+` button. Click it to add a new filter.
:::

- ### Noise Suppression

  The Noise suppression filter OBS helps you easily suppression background noise! You have 2 methods to choose from:

  - **RNNoise** (recommended)
    
    Enhances your microphone quality effectively, however has higher CPU usage.

  - **Speex**
    
    Lower CPU usage, low quality, however you can adjust the threshold and may be a better option if you do ASMR such as keyboard ASMR.

- ### Compressor

  Is your microphone at maximum volume yet your viewers can't hear you very well? A compressor filter is used even out the volume levels of your microphone input. It works by reducing the dynamic range of the audio signal, making quieter sounds louder and louder sounds quieter.

  Here's a straightforward [VIDEO](https://youtu.be/ZvX7Ys0ghG4) on how to use the compressor filter.

Be sure to test your audio by recording using your streaming software then listening to it.

---

## Non-DMCA Playlists

> DMCA: Digital Millenium Copyright Act

Non-copyrighted music playlists for you to listen on stream!

### Lofi Girl

- [Spotify](https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM?si=65d4b951673847a2)
- [YouTube (playlist)](https://www.youtube.com/watch?v=CMNyHBx1gak&list=PL6NdkXsPL07KN01gH2vucrHCEyyNmVEx4)
- [SoundCloud](https://soundcloud.com/lofi_girl)

### Lofi Boy (Synthwave)

- [Spotify](https://open.spotify.com/playlist/1YIe34rcmLjCYpY9wJoM2p?si=f5115c5c9b644871)
- [YouTube (video)](https://youtu.be/TlWYgGyNnJo)

### Chillhop

- [Spotify](https://open.spotify.com/user/chillhopmusic?si=b9c63cbb27db45ab&nd=1&dlsi=477657d953294e71)
- [YouTube (playlist)](https://www.youtube.com/watch?v=XuW2hx3h7sE&list=PLt7bG0K25iXgkGK9PLhP3yryqc7S8uHds)
- [SoundCloud](https://soundcloud.com/chillhopdotcom)

### Lud and Schlatts Musical Emporium - Classical

- [YouTube (playlist)](https://youtu.be/VBSP75pr2bg?list=PL2LwrpMfls5K1DVyG5ii_mEGKqzK9EGlr)

:::note
Streaming audio from Spotify to streaming services such as Twitch is against Spotify's Terms of Service (but rarely enforced) so please do so at your own risk! 
:::

---

## How to Display 'Now Playing'

### [6K Labs 🔗](https://6klabs.com/)

<a href="https://6klabs.com/"><img src="/images/music-and-audio/6klabs.webp" alt="6K Labs widget" loading="lazy" /></a>

- Easy to implement
- Available for YouTube Music and Spotify
- Has many design choices and settings:
  - Dark/Light mode
  - Tint colour options
  - Different aesthetic choices:
    - Compact
    - macOS
    - Linux Shell
    - And many more!

### [Pixel Chat 🔗](https://pixelchat.tv/)

<a href="https://pixelchat.tv/"><img src="/images/music-and-audio/pixelchat.webp" alt="Pixel Chat widget" loading="lazy" /></a>

- Shows what you're playing via Spotify, Apple Music etc.
- Includes other widgets for shoutouts, captions and counters

---

## Non-music options

Don't like listening to music? Still worried about DMCA? Want other forms of background audio to stand out amongst other streamers? Don't worry! Here are a few suggestions for your background ambience that doesn't involve music!

The following websites allow you to download audio files, so you can add to your streaming application (e.g. OBS) as a Media Source.

**Note: Please be careful when downloading any files onto your computer.**

- ### [Coffee Shop Ambience 🔗](https://pixabay.com/sound-effects/search/coffee%20shop/)

  The low hum of conversation and coffee shop bustle can provide a focused ambience that aids studying.

- ### [Forest Ambience 🔗](https://pixabay.com/sound-effects/search/forest%20ambience/)

  The calming sounds of nature in a forest ambience can create a peaceful and focused atmosphere.

- ### [Rain Ambience 🔗](https://pixabay.com/sound-effects/search/rain/)

  The steady pitter-patter of rain ambience offers a soothing and concentration-boosting backdrop for studying.

- ### [Ocean Ambience 🔗](https://pixabay.com/sound-effects/search/ocean%20ambience/)

  With its rhythmic waves, provides a calming yet stimulating soundscape that can enhance focus.

- ### [Fireplace Ambience 🔗](https://pixabay.com/sound-effects/search/fireplace/)

  The crackle and warmth of a fireplace ambience create a cozy and concentration-promoting environment for studying.

---

## How to Separate Audio for Twitch VOD

[How to SEPARATE AUDIO for Twitch VOD with OBS studio (NO Voicemeeter) 🔗](https://www.youtube.com/watch?v=0Lj5rkqSp48)

If you’re streaming on Twitch using OBS, you can easily avoid getting your VODs muted by separating audio tracks into VOD audio tracks and stream audio tracks. This way, you can listen to music on your stream without worrying about getting muted.

---

## How to Separate your Audio for meetings/classes

### Easy way (have two different outputs)

<img src="/images/music-and-audio/audio_settings.webp" alt="Audio settings" loading="lazy" />

To do this, you'll need to have two different audio outputs (i.e. two headphones/speakers). For windows users, go to sound settings --> advance sound options --> app volume device preferences (or if you can't find it, search "sound mixer options" in your start) then you should see this:

There you can have your different outputs for different programmes. For example, one pair of headphones is used for zoom, and the other for everything else. In your streaming software, make sure the output is selected for the correct pair of headphones in your mixer!

### Complicated ways

- #### [VoicemeeterBanana](https://vb-audio.com/Voicemeeter/banana.htm) 
  ![Windows Badge](https://img.shields.io/badge/Windows-0078D4?logo=windows&logoColor=fff&style=for-the-badge)

  - Download Voicemeeter Banana (software to route audio sources) and set all the audio sources/inputs you don't want to include on stream into a Voicemeeter input/output source separate from the main routing. 
  - The outputs will show up separately in your Audio Mixer, which you can adjust/mute 
  - Tutorial: [Separate Game Audio, Discord, Music in OBS! (A Voicemeeter Tutorial for Beginners)](https://www.youtube.com/watch?v=XD9sWOjITYU&t=376s)

- #### [BlackHole audio](https://obsproject.com/forum/resources/mac-desktop-audio-using-blackhole.1191/)
  ![macOS Badge](https://img.shields.io/badge/macOS-fff?logo=macos&logoColor=000&style=for-the-badge)
  - Free! Integrates with OBS

- #### [GroundControl Caster](https://gingeraudio.com/groundcontrol-caster/)
  ![macOS Badge](https://img.shields.io/badge/macOS-fff?logo=macos&logoColor=000&style=for-the-badge)
  - Free! Integrates with Twitch, OBS, StreamLabs, Zoom, FaceTime etc.
