const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa los listeners de eventos
    },
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false, // Desactiva las verificaciones de seguridad
  },
  browser: {
    chrome: {
      args: ['--disable-save-password-bubble'] // Desactiva el pop-up de cambio de contraseña
    }
  }
})
