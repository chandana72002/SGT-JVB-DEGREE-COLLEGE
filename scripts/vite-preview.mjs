import { preview } from 'vite';

const server = await preview({
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
});

server.printUrls();
server.bindCLIShortcuts({ print: true });
