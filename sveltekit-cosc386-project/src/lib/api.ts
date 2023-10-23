import ky from 'ky-universal';

const api = ky.create({ prefixUrl: 'https://api.anify.tv/', timeout: 10000 });

export { api };
