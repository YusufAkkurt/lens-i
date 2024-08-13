import ky from 'ky';

const kyInstance = ky.create({ parseJson: (text) => JSON.parse(text, (key, value) => (key.endsWith('At') ? new Date(value) : value)) });

export { kyInstance };
