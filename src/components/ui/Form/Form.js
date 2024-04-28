import getClasses from '@js/getClasses.js'
import getElement from '../../../js/getElement'

import styles from './form.module.css'

/**
 * @typedef {import("../../../js/getElement").props} props
 */

/**
 * @param {props} props свойства элемента
 * @returns элемент
 */
export const form = (props) => {
  const { classes, ...rest } = props

  const classesArr = [...getClasses(classes), styles.form]

  const elementProps = {
    ...rest,
    tag: 'form',
    classes: classesArr,
  }

  const input = getElement(elementProps)

  return input
}

export default form
