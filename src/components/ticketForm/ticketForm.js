import getElement from '@js/getElement'
import fieldThere from '@components/fieldThere/fieldThere'
import fieldReturn from '@components/fieldReturn/fieldReturn'

import styles from './ticketForm.module.css'

/**
 *
 * @param {String|String[]} classes классы элемента
 * @returns HTMLElement
 */
export const ticketForm = (classes) => {
  const form = getElement({ classes: [classes, styles.form], tag: 'form' })
  const fields = getElement({ classes: styles.fields, tag: 'div' })
  const fieldThereEl = fieldThere()
  const fieldReturnEl = fieldReturn()
  const btnSubmit = getElement({
    classes: styles.btnSubmit,
    tag: 'button',
    type: 'submit',
    textContent: 'Купить билет',
  })

  fields.append(fieldThereEl, fieldReturnEl)
  form.append(fields, btnSubmit)

  return form
}

export default ticketForm
