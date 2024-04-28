import TripCalendarUI from './TripCalendarUI'

export default class TripCalendar {
  #ui = new TripCalendarUI()
  #app = this.#ui.app
  #element
  #checkboxReturn

  constructor(element) {
    this.#element = this.#ui.getElement(element)
  }

  init() {
    this.#bindToDom()
    this.#addElements()
    this.#addListeners()
  }

  /**
   * Добавляем приложение в DOM
   */
  #bindToDom() {
    this.#element.append(this.#app)
  }

  /**
   * Ищем и добавляем необходимые элементы
   */
  #addElements() {
    this.#checkboxReturn = this.#app.querySelector('input[type=checkbox]')
  }

  /**
   * Добавляем прослушку событий
   */
  #addListeners() {
    this.#checkboxReturn.addEventListener('change', this.#onChangeCheckboxReturn)
  }

  /**
   * Обработка изменения чекбокса "Обратно"
   * @param e Event
   */
  #onChangeCheckboxReturn = (e) => {
    this.#ui.toggleClassChecked(e.target.parentElement)
  }
}
