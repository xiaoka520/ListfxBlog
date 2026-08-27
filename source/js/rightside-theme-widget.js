(() => {
  const mountThemeWidget = () => {
    const panel = document.getElementById('rightside-config-hide')
    const nativeToggle = document.getElementById('darkmode')
    if (!panel || !nativeToggle || panel.querySelector('.theme-toggle-widget')) return

    const card = document.createElement('div')
    card.className = 'theme-toggle-widget'
    card.setAttribute('role', 'group')
    card.setAttribute('aria-label', '外观设置')

    const toggle = document.createElement('theme-button')
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    toggle.setAttribute('value', currentTheme)
    toggle.setAttribute('size', '1.8')
    toggle.setAttribute('role', 'switch')
    toggle.setAttribute('aria-label', '切换深色模式')
    toggle.setAttribute('aria-checked', String(currentTheme === 'dark'))

    toggle.addEventListener('change', event => {
      const nextTheme = event.detail === 'dark' ? 'dark' : 'light'
      const activeTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
      if (nextTheme !== activeTheme) nativeToggle.click()
      toggle.setAttribute('aria-checked', String(nextTheme === 'dark'))
    })

    const toggleWrap = document.createElement('div')
    toggleWrap.className = 'theme-toggle-widget__control'
    toggleWrap.appendChild(toggle)
    card.appendChild(toggleWrap)
    panel.appendChild(card)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountThemeWidget, { once: true })
  } else {
    mountThemeWidget()
  }
})()
