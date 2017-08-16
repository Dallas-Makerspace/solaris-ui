const Horizon = require('@horizon/client');
const db = Horizon({ secure: true, authType: 'anonymous' });

export default db