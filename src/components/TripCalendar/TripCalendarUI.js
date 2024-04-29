import getElement from '@js/getElement'
import ticket from '@components/ticket/ticket'
import ticketForm from '@components/ticketForm/ticketForm'

import styles from './TripCalendar.module.css'

export default class TripCalendarUI {
  getElement(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element)
    }

    return element
  }

  get app() {
    const app = getElement({ classes: styles.app, tag: 'div' })
    const ticketEl = ticket()
    const header = getElement({ tag: 'h2', classes: styles.appTitle, textContent: 'Поиск билетов' })
    const ticketFormEl = ticketForm()

    app.append(ticketEl, header, ticketFormEl)

    return app
  }

  toggleReturn(element) {
    this.toggleClassChecked(element)
    this.toggleClassInputActive(element)
  }

  toggleClassChecked(element) {
    element.classList.toggle(styles.checkboxChecked)
  }

  toggleClassInputActive(element) {
    const input = element.closest('[class*="field"]').querySelector('input[type="date"]')
    input.classList.toggle(styles.inputActive)
  }

  /**
   *
   * @param {string} text
   * @returns HTMLElement
   */
  getDiv(text) {
    return getElement({ tag: 'div', textContent: text })
  }
}
