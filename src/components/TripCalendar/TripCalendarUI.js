import getElement from '@js/getElement'
import appEl from '@components/appEl/appEl'
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
    const app = appEl(styles.app)
    const header = getElement({ tag: 'h2', classes: styles.appTitle, textContent: 'Поиск билетов' })
    const ticketFormEl = ticketForm(styles.form)

    app.append(header, ticketFormEl)

    return app
  }

  toggleClassChecked(element) {
    element.classList.toggle(styles.checkboxChecked)
  }
}
