<!-- SilkGhost Introduction -->
<h1 id="silk-ghost-introduction">[LOGO:SilkGhost]</h1>

**SilkGhost** is a reverb plugin engineered to help you shape immersive, evocative soundscapes with ease and precision. It's a proprietary creation, built out of a love for smooth, immersive, otherworldly sounds, and a desire to extend that same sound to the world.

With a programmatic approach, SilkGhost offers an unparalleled platform for creating anything from subtle, supportive room tones to immense, atmospheric washes and infinite reverberations. From cinematic sound design and ambient textures to intimate vocal spaces, SilkGhost delivers exceptional realism, musicality, and control at every turn.

---

<!-- SilkGhost Key Features -->
<h2 id="silk-ghost-key-features">Key Features</h2>

### **Powerful Convolution Engine**

Algorithmically, SilkGhost is slightly different. At its core, SilkGhost leverages JUCE's powerful convolution engine, but with a unique twist. We've meticulously crafted custom impulse responses by hand, focusing on creating spaces and textures that bridge the gap between natural acoustics and otherworldly ambience.

### **Dynamic Parameter Control**

At the heart of SilkGhost are the **essential reverb controls**:

- **Decay Time** adjusts the reverb's length,
- **Wet Mix** balances dry and processed signals,
- **Pre-Delay** adds space before reverb onset, and
- **Proximity** shapes the balance between early reflections and late reverb tails.

To **shape the reverb tail**, you can use:

- **High-Pass** and **Low-Pass** filters to fine-tune the tonal balance of your reverbs,
- **Modulation Depth** and **Modulation Rate** to introduce movement to the reverb tail,
- **Post Gain** to ensure optimal output levels,
- **Reverse** to create dramatic pre-swells, giving SilkGhost a unique character and allowing you to create ethereal evolving transitions.

The **Quality Mode** selector allows you to balance fidelity and CPU usage, giving you balance while you're sketching out your ideas, and the ability to crank it up when you're ready to export.

You've also got plenty of presets to get you started, with subtle, supportive room tones to lush, atmospheric washes. Access these in the **Preset** dropdown menu.

---

<!-- Getting Started (SilkGhost) -->
<h2 id="silk-ghost-getting-started">Getting Started</h2>

### System Requirements

- **Operating System**: **macOS 10.11 or later**
  - (We're planning on supporting Windows _very_ soon!)
- **CPU**:
  - For **ARM-based Macs**, we recommend a 64-bit processor with at least 4 cores.
  - For **Intel-based Macs**, we recommend an Intel i5 or equivalent.
- **RAM**: 4 GB minimum
- **Supported Formats**: VST3, AU

### Installation & Authorization

1. **Download the Installer**: Obtain the SilkGhost installer from our official website.
2. **Run the Installer**: Follow on-screen instructions to place the plugin in your DAW’s plugin directory.
3. **Authorization**: Upon first launch in your DAW, enter the license key that was provided to you after downloading the plugin.

### Loading SilkGhost in Your DAW

- **Logic Pro (AU)**: Insert SilkGhost via the Audio FX menu under _Reverb_.
- **Ableton Live (VST3)**: Drag SilkGhost from the Plug-ins browser onto your track.

---

<!-- Parameter Reference -->
<h2 id="silk-ghost-parameter-reference">Parameter Reference</h2>

SilkGhost’s interface is designed to provide quick, intuitive access to all crucial parameters:

[IMAGE:SilkGhostPluginWindow:interface]

### Top Bar Controls

**Preset Dropdown**

- **Range**: Factory and User Presets
- **Function**: Access to curated reverb configurations and your saved settings
- **Sound Design**:
  - Start with presets as inspiration, then deviate based on your source material
  - Save variations of presets for different sections of your song (verse/chorus)
  - Consider creating "character presets" that define your production style

**Signal Quality Selector**

- **Range**: High, Medium, Low, Garbage
- **Function**: Balances processing quality against CPU usage
- **Technical Details**:
  - High: Full-resolution convolution, 96kHz internal processing
  - Medium: Optimized convolution, 48kHz internal processing
  - Low: Reduced-quality convolution, 44.1kHz processing
  - Garbage: Minimal quality, extreme CPU savings
- **Sound Design**:
  - Use Garbage mode while composing - its artifacts can inspire creative decisions
  - Medium mode is often sufficient for most sources
  - Reserve High mode for final renders or particularly detailed sources
- **Pitfalls**:
  - Higher qualities can mask mix issues - verify your choices in Low mode
  - Switching modes can slightly alter the reverb character - plan accordingly

### Left Panel: Convolution & Core Controls

**Decay Time**

- **Range**: 0.1s to 30s
- **Function**: Determines the duration of the reverb tail
- **Sound Design**:
  - 0.1s-0.3s: Tight rooms, drum ambience
  - 0.3s-1.0s: Natural rooms, vocal intimacy
  - 1.0s-3.0s: Halls, churches, performance spaces
  - 3.0s-10s: Cathedrals, atmospheric design
  - 10s-30s: Supernatural spaces, drone design
- **Pitfalls**:
  - Long decays can mask subsequent sections
  - Very short decays may introduce comb filtering
  - CPU usage increases with decay time

**Wet Mix**

- **Range**: 0% to 100%
- **Function**: Balances dry (input) and wet (reverb) signals
- **Sound Design**:
  - 0-20%: Subtle depth, maintain presence
  - 20-40%: Natural room placement
  - 40-70%: Dramatic space, featured reverb
  - 70-100%: Special effects, ambient design
- **Pitfalls**:
  - High wet mix can destroy transient clarity
  - Values above 50% often need pre-delay compensation
  - Monitor in mono to catch phase issues

**Pre-Delay**

- **Range**: 0ms to 500ms
- **Function**: Delays reverb onset relative to dry signal
- **Sound Design**:
  - 0-10ms: Immediate space, drum rooms
  - 10-30ms: Natural separation, vocal clarity
  - 30-100ms: Rhythmic space, tempo-matched ambience
  - 100-500ms: Special effects, reverb rhythms
- **Pitfalls**:
  - Long pre-delays can create unwanted echoes
  - Tempo-synced values may fight with groove
  - Very short values can cause comb filtering

**Proximity**

- **Range**: -100 to +100
- **Function**: Balances early reflections vs. late reverb
- **Sound Design**:
  - -100 to -50: Distant, atmospheric spaces
  - -50 to 0: Natural room placement
  - 0 to +50: Intimate, close spaces
  - +50 to +100: Technical, tight spaces
- **Pitfalls**:
  - Extreme values can sound unnatural
  - Early reflections can create unwanted coloration
  - CPU usage increases with more early reflections

<!-- ### Enhancer Controls

**Duck**
- **Range**: 0% to 100%
- **Function**: Dynamic reverb reduction based on input
- **Sound Design**:
  - 0-30%: Subtle clarity enhancement
  - 30-60%: Vocal intelligibility
  - 60-80%: Dramatic pumping effects
  - 80-100%: Extreme dynamic control
- **Pitfalls**:
  - High values can create pumping artifacts
  - Can mask natural decay patterns
  - May fight with compressors

**Stretch**
- **Range**: 0% to 100%
- **Function**: Temporally smears the reverb, extending and evolving tails.
- **Sound Design**:
  - 0-20%: Subtle character enhancement
  - 20-40%: Natural room placement
  - 40-60%: Dramatic space, featured reverb
  - 60-80%: Special effects, ambient design
  - 80-100%: Extreme character enhancement
- **Pitfalls**:
  - High values can create unnatural artifacts
  - Values below 20% can be too subtle
  - Monitor in mono to catch phase issues

**Separate**
- **Range**: -100 to +100
- **Function**: Controls the stereo image of the reverb.
- **Sound Design**:
  - -100 to -50: Wide, enveloping stereo fields
  - -50 to 0: Natural room placement
  - 0 to +50: More centered, focused reverbs
  - +50 to +100: Technical, tight spaces
- **Pitfalls**:
  - Extreme values can sound unnatural
  - Early reflections can create unwanted coloration
  - CPU usage increases with more early reflections -->

**Modulation Depth**

- **Range**: 0% to 100%
- **Function**: Introduce movement within the reverb tail.
- **Sound Design**:
  - 0-20%: Subtle character enhancement
  - 20-40%: Natural room placement
  - 40-60%: Dramatic space, featured reverb
  - 60-80%: Special effects, ambient design
  - 80-100%: Extreme character enhancement
- **Pitfalls**:
  - High values can create unnatural artifacts
  - Values below 20% can be too subtle
  - Monitor in mono to catch phase issues

**Modulation Rate**

- **Range**: 0.1Hz to 10Hz
- **Function**: Speed of modulation cycles.
- **Sound Design**:
  - 0.1-0.3Hz: Subtle character enhancement
  - 0.3-0.6Hz: Natural room placement
  - 0.6-1Hz: Dramatic space, featured reverb
  - 1-3Hz: Special effects, ambient design
  - 3-10Hz: Extreme character enhancement
- **Pitfalls**:
  - High values can create unnatural artifacts
  - Values below 0.3Hz can be too subtle
  - Monitor in mono to catch phase issues

**Reverse Reverb**

- **Range**: 0% to 100%
- **Function**: Flips the reverb tail, creating unique pre-swell effects.
- **Sound Design**:
  - 0-20%: Subtle character enhancement
  - 20-40%: Natural room placement
  - 40-60%: Dramatic space, featured reverb
  - 60-80%: Special effects, ambient design
  - 80-100%: Extreme character enhancement
- **Pitfalls**:
  - High values can create unnatural artifacts
  - Values below 20% can be too subtle
  - Monitor in mono to catch phase issues

### Right Panel: Frequency Shaping Controls

**Post Gain**

- **Range**: 0dB to 20dB
- **Function**: Final output level after all processing.
- **Sound Design**:
  - 0-10dB: Subtle character enhancement
  - 10-15dB: Natural room placement
  - 15-20dB: Dramatic space, featured reverb
- **Pitfalls**:
  - High values can destroy transient clarity
  - Values above 15dB often need pre-delay compensation
  - Monitor in mono to catch phase issues

**High-Pass Filters**

- **Range**: 0Hz to 20kHz
- **Function**: Remove low-end rumble.
- **Sound Design**:
  - 0-5kHz: Subtle character enhancement
  - 5-10kHz: Natural room placement
  - 10-15kHz: Dramatic space, featured reverb
  - 15-20kHz: Special effects, ambient design
- **Pitfalls**:
  - High values can create unnatural artifacts
  - Values below 5kHz can be too subtle
  - Monitor in mono to catch phase issues

**Low-Pass Filters**

- **Range**: 0Hz to 20kHz
- **Function**: Soften harsh highs, ensuring the reverb sits smoothly in the mix.
- **Sound Design**:
  - 0-5kHz: Subtle character enhancement
  - 5-10kHz: Natural room placement
  - 10-15kHz: Dramatic space, featured reverb
  - 15-20kHz: Special effects, ambient design
- **Pitfalls**:
  - High values can create unnatural artifacts
  - Values below 5kHz can be too subtle
  - Monitor in mono to catch phase issues

<!-- ### Understanding the Signal Flow

SilkGhost's signal path is designed to provide maximum control while maintaining sonic clarity. Understanding this flow helps you make informed decisions about parameter adjustments and their interactions. -->

---

<!-- Creative Applications -->
<h2 id="silk-ghost-creative-applications">Creative Applications</h2>

### Vocal Production & Sound Design

SilkGhost excels at vocal enhancement, offering a range of possibilities from subtle ambience to otherworldly atmospheres. Whether you're crafting intimate, up-close vocals or designing expansive, ethereal textures, understanding how to layer and configure SilkGhost's parameters is key to achieving professional results.

**For natural, intimate vocals, try this foundational approach:**

1. Set a short decay (0.3-0.8s) to establish the basic space
2. Use positive proximity values (40-60) to emphasize early reflections
3. Enable ducking (30-40%) to maintain vocal clarity
4. Apply gentle high-pass filtering around 150Hz to prevent mud
5. Keep modulation minimal (5-10%) for subtle movement

**To create more dramatic vocal effects through chaining:**

1. First SilkGhost Instance (Foundation):

   - Short decay (0.2-0.4s)
   - High proximity (70-90)
   - Minimal modulation
   - Duck against vocal (40-50%)

2. Second SilkGhost Instance (Atmosphere):
   - Longer decay (2-4s)
   - Lower proximity (-20 to -40)
   - Increased modulation depth (30-40%)
   - Lower wet mix (20-30%)

**For backing vocals and vocal pads:**

1. Primary Reverb Layer:

   - Medium decay (1-2s)
   - Moderate proximity (0-20)
   - Subtle modulation (15-20%)

2. Reverse Effect Layer:
   - Reverse setting at 40-60%
   - Longer decay (3-4s)
   - High modulation depth (40-50%)
   - Pan wider than primary layer

This layered approach creates rich, three-dimensional vocal spaces that can be tuned to any style from intimate folk to expansive electronic music. Experiment with automating individual parameters across the different layers to create dynamic, breathing vocal treatments that evolve with your arrangement.

### Drum Room Design & Percussion

Creating convincing drum spaces requires careful attention to early reflections and room characteristics. SilkGhost's proximity control is particularly useful here - negative values emphasize room tone while positive values bring out attack and transient detail.

**For natural drum rooms, try this approach:**

1. Set a short decay (0.2-0.4s) with positive proximity
2. Use high-pass filtering around 100Hz to prevent low-end buildup
3. Apply subtle modulation (10-15%) to add organic movement
4. Chain with a second instance set to longer decay times (1-2s) at very low mix levels (5-10%) for tail extension

This dual-reverb technique creates a more realistic space than a single instance could achieve. The first reverb handles the immediate room response, while the second adds depth and sustain.

### Ambient & Cinematic Sound Design

SilkGhost truly shines in ambient music and film scoring applications. The key to creating massive, evolving soundscapes lies in layering multiple reverb instances with different characteristics. Start with a foundational reverb (4-8s decay) and gradually build complexity:

**Layer 1: Basic Space**

- Long decay with moderate modulation
- High-pass around 200Hz for clarity
- Subtle ducking to maintain definition

**Layer 2: Movement & Texture**

- Second SilkGhost instance with extreme modulation
- Reverse reverb at 40-60%
- Pan the wet signal wider than Layer 1

**Layer 3: Micro-Detail**

- Very short decay (0.1-0.2s)
- High proximity values
- High-pass at 1kHz to add "air"

This layered approach creates rich, three-dimensional spaces that evolve over time. Experiment with automating individual parameters across the different layers to create dynamic, breathing soundscapes.

### Advanced Plugin Chaining Techniques

SilkGhost's versatility really shows when combined with other processing tools. Here are some powerful combinations:

**Stereo Enhancement Chain:**

1. Start with SilkGhost for basic space
2. Add a stereo widener to expand the reverb field
3. Use a second SilkGhost instance with different modulation settings
4. Finish with gentle compression to glue the space together

**Textural Processing:**

1. Begin with heavy modulation in SilkGhost
2. Follow with pitch shifting (+/- 12 semitones)
3. Add another SilkGhost instance with reverse settings
4. Use frequency-dependent processing to separate different parts of the spectrum

**Dynamic Space Design:**

1. Set up SilkGhost with moderate decay
2. Add volume-dependent compression
3. Insert a second SilkGhost with longer decay
4. Use multiband processing to control different frequency ranges independently

**SilkGhost** equips you to sculpt the perfect spatial ambience—from subtle, supportive reverb to colossal, modulated washes. Embrace its intuitive interface, explore its flexible parameters, and let your sonic imagination run free.
