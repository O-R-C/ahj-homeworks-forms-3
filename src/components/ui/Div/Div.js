import getElement from '@js/getElement'

import styles from './div.module.css'

/**
 * @typedef {import("../../../js/getElement").props} props
 */

/**
 * @param {props} props свойства элемента
 * @returns HTMLElement
 */
export const div = (props) => {
  const { classes, ...rest } = props

  const elementProps = {
    ...rest,
    tag: 'div',
    classes: [classes, styles.div],
  }

  return getElement(elementProps)
}

export default div
