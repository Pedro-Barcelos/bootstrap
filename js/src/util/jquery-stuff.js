/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/jquery-stuff.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const getjQuery = () => {
  const { jQuery } = window

  if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return jQuery
  }

  return null
}

const defaultJQueryInterface = plugin => {
  return function (config) {
    return this.each(function () {
      const data = plugin.getOrCreateInstance(this, config)

      if (typeof config !== 'string') {
        return
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`)
      }

      data[config]()
    })
  }
}

const getJqueryInterfaceForPlugin = plugin => plugin.jQueryInterface || defaultJQueryInterface(plugin)

export {
  getjQuery,
  getJqueryInterfaceForPlugin
}
