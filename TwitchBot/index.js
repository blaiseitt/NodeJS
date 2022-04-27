const tmi = require('tmi.js');

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster:  'aws',
        reconnect: true,
    },
    identity: {
        username: 'testbot_ttv123',
        password: 'oauth:ev6i8ds8i0qfrfeg5irlwh6dnoholr',
    },
    channels: ['buarzejoo'],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action('buarzejoo', 'Fly fly dont sleep :)');
});

client.on('chat', (channel, user, message, self) => {
    if (message === '!kappa'){
        client.action('buarzejoo', 'Kappa');
    } else if (message === '!greet'){
        client.action('buarzejoo', `Hello ${user['display-name']}`);
    }
});
