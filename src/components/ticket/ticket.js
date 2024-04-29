import getElement from '@js/getElement'

import styles from './ticket.module.css'

/**
 *
 * @param {String|String[]=} classes классы элемента
 * @returns HTMLElement
 */
export const ticket = (classes) => {
  return getElement({ tag: 'dialog', classes: [styles.ticket, classes] })
}

export default ticket
