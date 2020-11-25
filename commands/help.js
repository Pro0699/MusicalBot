const config = require("../config/bot.json");

exports.run = async (client, message) => {

    message.channel.send({
        embed: {
            color: 'YELLOW',
            author: { name: 'Help pannel' },
            footer: { text: 'bit.ly/musicalbot' },
            fields: [
                { name: 'Bot', value: '`ping` `vote` `invite`' },
                { name: 'Music', value: '`play`, `pause`, `resume`, `queue`, `clear-queue`, `shuffle`, `np`, `loop`, `volume`, `skip`, `stop`, `filter`, `w-filters`' },
                { name: 'Filters', value: '`bassboost`, `8D`, `vaporwave`, `nightcore`, `phaser`, `tremolo`, `vibrato`, `reverse`, `treble`, `normalizer`, `surrounding`, `pulsator`, `subboost`, `karaoke`, `flanger`, `gate`, `haas`, `mcompand`' },
                
            ],
            timestamp: new Date(),
            description: `To use filters, ${config.prefix}filter (the filter). Example : ${config.prefix}filter 8D.`,
        },
    });

};
