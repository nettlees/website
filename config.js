let customConfig = {}

try {
  Object.assign(customConfig, require('./custom.config.js'))
} catch {}

module.exports = {
  port: Number(process.env.PORT) || 8080,

  api: 'https://api.devcord.com',

  meta: {
    title: 'ayup',
    description: 'Ayup is a community that brings together the platfrom of discord, in this server you will find; a welcoming community, many giveawyas, an active chat, and more!.',
    thumbnail: 'https://media.discordapp.net/attachments/822823693151502356/826835047054311484/ayup.gif',
    themeColor: '#f0134d',
    url: 'https://www.ayup.ga',
  },

  ...customConfig,
}
