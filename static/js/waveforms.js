import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js';

const tracks = [
  { id: 1, file: 'static/audio/buildup01.mp3' },
  { id: 2, file: 'static/audio/buildup02.mp3' },
  { id: 3, file: 'static/audio/buildup03.mp3' },
  { id: 4, file: 'static/audio/buildup04.mp3' },
  { id: 5, file: 'static/audio/buildup05.mp3' },
  { id: 6, file: 'static/audio/buildup06.mp3' },
  { id: '6b', file: 'static/audio/buildup06.mp3' },
  { id: 7, file: 'static/audio/buildup07.mp3' },
  { id: 8, file: 'static/audio/buildup08.mp3' },
  { id: 9, file: 'static/audio/buildup09.mp3' },
  { id: 10, file: 'static/audio/buildup10.mp3' },
  { id: 11, file: 'static/audio/buildup11.mp3' },
  { id: 12, file: 'static/audio/buildup12.mp3' },
  
];

tracks.forEach(({ id, file }) => {
  const container = document.getElementById(`waveform${id}`);
  const button = document.getElementById(`playPauseBtn${id}`);

  if (container && button) {
    const ws = WaveSurfer.create({
      container,
      waveColor: '#60a5fa',
      progressColor: '#010101',
      height: id === 6 ? 128 : 48, // keep Alesso taller
      cursorWidth: 1,
      cursorColor: '#fff',
      responsive: true,
    });

    ws.load(file);
    button.addEventListener('click', () => ws.playPause());
  }
});
