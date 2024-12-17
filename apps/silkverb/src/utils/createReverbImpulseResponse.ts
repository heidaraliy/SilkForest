// this function creates an impulse response for the reverb, which is
// used to create the reverb effect. it's a simple impulse response,
// and achieves a pretty powerful reverb effect, but expanding it
// to a more complex impulse response is a good idea for future work,
// and gives the user more malleability over the reverb effect.
export const createReverbImpulseResponse = (
  audioContext: BaseAudioContext,
  duration: number
): AudioBuffer => {
  const sampleRate = audioContext.sampleRate;
  const length = sampleRate * duration;
  const impulse = audioContext.createBuffer(2, length, sampleRate);
  const left = impulse.getChannelData(0);
  const right = impulse.getChannelData(1);

  for (let i = 0; i < length; i++) {
    const decay = Math.exp((-3 * i) / length);
    left[i] = (Math.random() * 2 - 1) * decay;
    right[i] = (Math.random() * 2 - 1) * decay;
  }

  return impulse;
};
