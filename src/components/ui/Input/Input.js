import getClasses from '@js/getClasses.js'
import getElement from '@js/getElement'

import styles from './input.module.css'

/**
 * @typedef {import("../../../js/getElement").props} props
 */

/**
 * @param {props} props свойства элемента
 * @returns HTMLElement
 */
export const input = (props) => {
  const { classes, ...rest } = props

  const classesArr = [...getClasses(classes), styles.input]

  const elementProps = {
    ...rest,
    tag: 'input',
    classes: classesArr,
  }

  const input = getElement(elementProps)

  return input
}

export default input
