import div from '../div/div'
import label from '../label/label'
import input from '../input/input'

import styles from './field.module.css'

/**
 *
 * @param {String|String[]} classes классы элемента
 * @param {String} nameID значение атрибутов name и id
 * @param {String} textContent
 * @param {String} inputType
 * @returns HTMLElement
 */
export const field = (classes, nameID, textContent, inputType) => {
  const classesArr = [[classes, 123, true], styles.field]

  const field = div({ classes: classesArr })
  const labelEl = label({ classes: styles.label, for: nameID, textContent })
  const inputEl = input({
    classes: styles.input,
    id: nameID,
    name: nameID,
    type: inputType,
  })

  labelEl.append(inputEl)
  field.append(labelEl)

  return field
}

export default field
