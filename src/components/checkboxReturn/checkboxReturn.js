import getElement from '@js/getElement'

import styles from './checkboxReturn.module.css'

export const checkboxReturn = (classes) => {
  const checkboxWrapper = getElement({ tag: 'div', classes: [classes, styles.checkboxWrapper] })
  const checkbox = getElement({ tag: 'input', type: 'checkbox', id: 'checkboxReturn', classes: styles.checkbox })

  checkboxWrapper.append(checkbox)

  return checkboxWrapper
}

export default checkboxReturn
