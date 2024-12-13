<!-- Getting Started Section -->
<h1 id="general-introduction">[LOGO:SilkForest]</h1>

Welcome to the SilkForest documentation! Here you'll find everything you need to get started using our plugins and web applications.

---

<!-- SilkGhost Introduction -->
<h1 id="silk-ghost-introduction">[LOGO:SilkGhost]</h1>

SilkGhost is a next-generation reverb plugin designed to help you shape mesmerizing, ethereal soundscapes with precision and flair. By harnessing a world-class convolution engine, a host of tone-shaping parameters, and unique features like ducking, stretching, and stereo separation, SilkGhost empowers producers at all skill levels to craft reverb effects that transcend the ordinary.

From subtle room ambiences to colossal halls, from lush vocal reverbs to cinematic pads that stretch into infinity, SilkGhost ensures that your reverberation remains distinctly musical, emotive, and tailored to your sonic vision.

---

<!-- SilkGhost Key Features -->
<h1 id="silk-ghost-key-features">Key Features</h1>

- **Convolution Engine**: Authentic, realistic reverb derived from impulse responses.
- **Powerful Parametric Control**: Fine-tune every aspect of the reverb, from decay time and filtering to modulation and proximity.
- **Unique Enhancements**:
  - **Ducking**: Automatically reduce the reverb when the dry signal is present, ensuring mix clarity.
  - **Stretching**: Elongate reverb tails into immersive atmospheres.
  - **Separation**: Sculpt the stereo image from wide and enveloping to focused and centered.
- **Quality Modes**: Choose from High, Medium, Low, or "Garbage" modes to balance CPU usage with sound fidelity.
- **Presets for Instant Inspiration**: Quickly dial in professional-grade reverbs with curated presets like Large Hall and Small Room.

---

<!-- Getting Started (SilkGhost) -->
<h1 id="getting-started">Getting Started</h1>

## System Requirements

- OS: macOS (10.11 or later), Windows (7 or later)
- CPU: Intel i5 or equivalent recommended
- RAM: 4 GB minimum
- DAW Compatibility: AU, VST3, AAX compatible hosts

## Installation & Authorization

1. **Download & Extract**: Download the installer for your OS from our official website, then run the installer.
2. **Copy/Install**: Follow the installer prompts to copy the plugin files to your DAW's plugin directory.
3. **Authorization**: For free downloads, simply open the plugin in your DAW. If future updates require a license key, enter it when prompted.

## Loading SilkGhost in Your DAW

- **Logic Pro (AU)**: Open the Audio FX menu on a track, find SilkGhost under Reverb, and insert it.
- **Ableton Live (VST3)**: Access Plug-ins tab in the browser, drag SilkGhost onto a track.
- **Pro Tools (AAX)**: In the insert menu, find SilkGhost in the reverb category.

---

<!-- Interface Overview -->
<h1 id="interface-overview">Interface Overview</h1>

## Sections at a Glance

- **Top Bar**: Preset selection and quality mode controls.
- **Convolution Engine Section**: Primary reverb parameters (Decay, Mix, Pre-Delay, Proximity).
- **Frequency Shaper Section**: Filters (High-Pass, Low-Pass) and Post Gain.
- **Reverb Modulator & Enhancers**: Modulation, Duck, Stretch, and Separate controls.
- **Reverse Reverb & Misc Tools**: Toggle reverse tails and other specialized features.

## Signal Flow & Processing Order

1. **Input Dry Signal**: Enters SilkGhost.
2. **Pre-Delay & Diffusion**: Sets initial reflections and spatial character.
3. **Convolution & Modulation**: Applies the IR-based reverb and introduces movement.
4. **Filtering & Post Gain**: Shapes frequency response and output level.
5. **Ducking, Stretching & Separating**: Adds dynamic, temporal, and stereo imaging enhancements.
6. **Dry/Wet Mix**: Blends processed signal with original input.

---

<!-- Parameter Reference -->
<h1 id="parameter-reference">Parameter Reference</h1>

## Presets

**What**: Curated configurations of all parameters for different acoustic spaces.  
**Use**: Select a preset as a starting point and adjust parameters to taste.

**Examples**:

- Large Hall: Long decays and spacious reflections.
- Small Room: Shorter tails for intimate ambiences.

## Quality Mode

**What**: Adjusts the convolution's detail level and CPU load.  
**Options**: High, Medium, Low, Garbage  
**Tip**: Start on High for best quality; move down to conserve CPU in large projects.

## Decay Time

**What**: Length of the reverb tail.  
**Range**: 0.5s - 10.0s  
**Tip**: Short decays for subtle ambience; longer decays for lush, immersive reverbs.

## Wet Mix

**What**: Balance between dry (original) and wet (reverb) signal.  
**Range**: 0% - 100%  
**Tip**: Keep under 30% for subtle depth, push beyond 50% for more atmospheric washes.

## High-Pass & Low-Pass Filters

**What**: Shape the tonal balance of the reverb.  
**Ranges**:

- HPF: 20 Hz - 1,000 Hz
- LPF: 1,000 Hz - 20,000 Hz  
  **Tip**: High-pass to remove rumble, low-pass to avoid harsh highs.

## Pre-Delay

**What**: Delays the onset of reverb, maintaining clarity on transients.  
**Range**: 0 - 200 ms  
**Tip**: A short pre-delay (10-20 ms) can add separation between the source and the reverb, enhancing intelligibility.

## Reverse Reverb

**What**: Flips the reverb tail, creating a swell before the original sound.  
**Tip**: Perfect for ethereal transitions or dramatic effects, especially on vocals and pads.

## Modulation Depth & Rate

**What**: Adds gentle movement to the reverb tail.  
**Depth Range**: 0.0 - 1.0  
**Rate Range**: 0.1 Hz - 10 Hz  
**Tip**: Low depth and slow rate for a subtle shimmer; higher depths and faster rates for experimental textures.

## Proximity

**What**: Adjusts balance between early reflections and late tails.  
**Range**: 0% (Far) - 100% (Near)  
**Tip**: Increase proximity for a closer, more intimate feel; reduce to push the sound source back into the reverb field.

## Post Gain

**What**: Controls final output level after all processing.  
**Range**: -36 dB to +36 dB  
**Tip**: Use to compensate for loud or quiet tails without altering the plugin's internal balance.

## Duck

**What**: Temporarily reduces reverb level when dry signal is present, ensuring clarity and intelligibility.  
**Range**: 0% - 100%  
**Tip**: High duck settings allow your main elements to cut through, while the reverb blooms in the spaces between.

## Stretch

**What**: Elongates the reverb tail for pads, drones, etc.  
**Range**: 0% - 100%  
**Tip**: Combine Stretch with long decay times and modulation for rich, evolving soundscapes.

## Separate

**What**: Adjusts stereo imaging of the reverberated signal.  
**Range**: -100% (wider) to 100% (more mono)  
**Tip**: Keep near 0% for natural width, push negative for expansive stereo fields, or move positive to focus the reverb in the center.

---

<!-- Working with Presets -->
<h1 id="working-with-presets">Working with Presets</h1>

1. **Loading a Preset**: Select from the Preset dropdown at the top of the interface.
2. **Adjusting to Taste**: Once loaded, tweak parameters to suit your track's specific needs.
3. **Saving Custom Presets**: After dialing in a perfect sound, save it as a user preset for future recall.

---

<!-- Creative Applications -->
<h1 id="creative-applications">Creative Applications</h1>

## Vocal Enhancement & Clarity

- Use a moderate Decay Time (1.5s-2.5s) and subtle Wet Mix (~20%) to add depth.
- Apply Duck so the reverb steps back when the vocalist sings, ensuring clarity.
- A touch of Pre-Delay (10-20 ms) separates the voice from its own reverb.

## Drum Rooms & Ambience

- Short Decay Times (0.8s-1.2s) give drums a sense of space.
- High-Pass Filtering around 200 Hz prevents low-end build-up.
- Slight Stretch can add a unique character, prolonging snare tails.

## Guitar & Instrument Lushness

- Longer Decay Times (3-5s) transform guitars into pad-like textures.
- Modulation adds shimmer and swirl, perfect for ambient genres.
- Experiment with Separate to set how wide the guitar's reverb sits.

## Cinematic Soundscapes

- Crank up Decay Time and Stretch for endless, evolving tails.
- Use Reverse Reverb for transitions and swell-ups before big hits.
- Employ Low-Pass and Proximity to sculpt the reverb depth and focus.

---

<!-- Tips & Techniques -->
<h1 id="tips-techniques">Tips & Techniques</h1>

## Balancing Dry/Wet for Depth

- Start with a low Wet Mix; gradually increase until the sound is lush but clear.
- Use Duck to maintain clarity during complex passages.

## Utilizing Modulation for Movement

- Subtle Depth (~0.1) and slow Rate (~0.2 Hz) create delicate tails.
- Increase Depth and Rate for more experimental, evolving textures.

## Employing Duck for Mix Clarity

- Vocals and leads benefit from higher Duck settings.
- When the source stops, the reverb returns fully, adding depth to silent spaces.

## Stretching Tails for Ambient Pads

- Combine Stretch (50%-100%) with long Decay (5s+) for haunting ambiences.
- Add Modulation for constantly shifting soundscapes.

## Stereo Imaging with Separate

- Negative Separate for a wider stereo image in dense mixes.
- Positive Separate narrows reverb in sparse arrangements.

---

<!-- Additional Resources -->
<h1 id="additional-resources">Additional Resources</h1>

- **Online Tutorials & Courses**: Explore video walkthroughs on our site or YouTube.
- **User Community**: Join our forum and social media groups.
- **Updates & Support**: Check our site for updates, IR packs, and support.

SilkGhost is your key to immersive reverbs that enchant and inspire. Experiment fearlessly, trust your ears, and let your creativity bloom into lush, otherworldly soundscapes.
