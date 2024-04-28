import field from '@components/field/field'

/**
 *@param {(string|string[])=} classes
 * @returns HTMLElement
 */
export const fieldThere = (classes) => {
  return field(classes, 'there', 'Туда')
}

export default fieldThere
