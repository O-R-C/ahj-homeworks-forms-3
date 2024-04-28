import getClasses from '@js/getClasses.js'
import getElement from '@js/getElement'

import styles from './label.module.css'

/**
 * @typedef {import("@js/getElement").props} props
 */

/**
 * @param {props} props свойства элемента
 * @returns HTMLElement
 */
export const label = (props) => {
  const { classes, ...rest } = props

  const classesArr = [...getClasses(classes), styles.label]

  const elementProps = {
    ...rest,
    tag: 'label',
    classes: classesArr,
  }

  return getElement(elementProps)
}

export default label
