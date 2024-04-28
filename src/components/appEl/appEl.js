import div from '@ui/div/div'

import styles from './appEl.module.css'

/**
 *
 * @param {String|String[]=} classes классы элемента
 * @returns HTMLElement
 */
export const appEl = (classes) => {
  return div({ classes: [classes, styles.app] })
}

export default appEl
