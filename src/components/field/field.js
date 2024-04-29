import getElement from '@js/getElement'

import styles from './field.module.css'

/**
 *@param {(string|string[])=} classes
 *@param {string} direction
 *@param {string} title
 * @returns HTMLElement
 */
export const field = (classes, direction, title) => {
  const field = getElement({ tag: 'div', classes: [classes, styles.field] })
  const label = getElement({ tag: 'label', classes: styles.label, for: `date-${direction}`, textContent: title })
  const inputDate = getElement({
    tag: 'input',
    classes: styles.inputDate,
    type: 'date',
    id: `date-${direction}`,
    name: `date-${direction}`,
  })

  field.append(label, inputDate)

  return field
}

export default field
