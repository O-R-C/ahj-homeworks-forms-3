import field from '@components/field/field'
import checkboxReturn from '@components/checkboxReturn/checkboxReturn'

import styles from './fieldReturn.module.css'

/**
 *@param {(string|string[])=} classes
 * @returns HTMLElement
 */
export const fieldReturn = (classes) => {
  const fieldEl = field([classes, styles.field], 'return', 'Обратно')
  const checkboxEl = checkboxReturn()

  fieldEl.querySelector('label').append(checkboxEl)
  fieldEl.querySelector('input[type="date"]').disabled = true

  return fieldEl
}

export default fieldReturn
