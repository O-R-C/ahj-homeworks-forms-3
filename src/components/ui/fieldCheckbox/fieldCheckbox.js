import getClasses from '@js/getClasses.js'
import getElement from '../../../js/getElement'

import styles from './fieldCheckbox.module.css'

/**
 *
 * @param {String|String[]} classes классы элемента
 * @param {String} nameID значение атрибутов name и id
 * @returns элемент
 */
export const fieldCheckbox = (classes, nameID, textContent) => {
  const classesArr = [...getClasses(classes), styles.fieldCheckbox]

  const fieldCheckbox = getElement({
    classes: classesArr,
    tag: 'div',
  })

  const label = getElement({
    classes: styles.label,
    tag: 'label',
    for: nameID,
    textContent,
  })

  const inputCheckbox = getElement({
    classes: styles.input,
    tag: 'input',
    type: 'checkbox',
    name: nameID,
    id: nameID,
  })

  label.append(inputCheckbox)
  fieldCheckbox.append(label)

  return fieldCheckbox
}

export default fieldCheckbox
