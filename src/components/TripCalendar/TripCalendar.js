import TripCalendarUI from './TripCalendarUI'
import moment from 'moment'

export default class TripCalendar {
  #currentDate = moment().format('YYYY-MM-DD')
  #ui = new TripCalendarUI()
  #app = this.#ui.app
  #ticket
  #element
  #ticketForm
  #inputThere
  #inputReturn
  #wrapperReturn
  #checkboxReturn

  constructor(element) {
    this.#element = this.#ui.getElement(element)
  }

  init() {
    this.#bindToDom()
    this.#addElements()
    this.#addListeners()

    this.#setCurrentDate()
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
    this.#inputThere = this.#app.querySelector('#date-there')
    this.#inputReturn = this.#app.querySelector('#date-return')
    this.#ticket = this.#app.querySelector('dialog[class*="ticket"]')
    this.#ticketForm = this.#app.querySelector('[class*="ticket-form"]')
    this.#checkboxReturn = this.#app.querySelector('input[type="checkbox"]')
    this.#wrapperReturn = this.#app.querySelector('div[class*="checkbox-wrapper"]')
  }

  /**
   * Добавляем прослушку событий
   */
  #addListeners() {
    this.#ticket.addEventListener('close', this.#onCloseTicket)
    this.#ticket.addEventListener('click', this.#onClickTicket)
    this.#inputThere.addEventListener('click', this.#onClickInputDate)
    this.#inputReturn.addEventListener('click', this.#onClickInputDate)
    this.#inputThere.addEventListener('change', this.#onChangeInputThere)
    this.#ticketForm.addEventListener('submit', this.#onSubmitTicketForm)
    this.#wrapperReturn.addEventListener('change', this.#onChangeCheckboxReturn)
  }

  /**
   * Обработка изменения чекбокса "Обратно"
   * @param {Event} e
   */
  #onChangeCheckboxReturn = (e) => {
    this.#ui.toggleReturn(e.currentTarget)
    this.#toggleDisabled()
  }

  /**
   * Обработка события focus на поле ввода
   * @param {Event} e
   */
  #onClickInputDate = (e) => {
    this.#openCalendar(e.currentTarget)
  }

  /**
   * Обработка события submit у формы
   * @param {Event} e
   */
  #onSubmitTicketForm = (e) => {
    e.preventDefault()
    this.#ticket.style.display = 'flex'

    this.#printTicket()
    this.#resetInputs()
  }

  /**
   * Если изменили дату "Туда", то устанавливаем значения в поле "Обратно"
   */
  #onChangeInputThere = () => {
    this.#setReturnDate()
  }

  /**
   * Убирает свойство display при событии close
   * сбрасывает содержимое билета
   */
  #onCloseTicket = () => {
    this.#ticket.style.display = 'none'
    this.#resetTicket()
  }

  /**
   * Закрывает билет при клике в любое место
   */
  #onClickTicket = () => {
    this.#ticket.close()
  }

  /**
   * Открывает календарь
   * @param input input
   */
  #openCalendar(input) {
    input.showPicker()
  }

  /**
   * Переключает доступность поля ввода
   */
  #toggleDisabled() {
    this.#inputReturn.disabled = !this.#inputReturn.disabled
    !this.#inputReturn.disabled && this.#setReturnDate()
  }

  /**
   * Устанавливаем текущую дату минимальным и дефолтным значением
   */
  #setCurrentDate() {
    this.#inputThere.min = this.#currentDate
    this.#inputThere.value = this.#currentDate
  }

  /**
   * Устанавливаем текущую дату минимальным и дефолтным значением
   */
  #setReturnDate() {
    this.#inputReturn.min = this.#inputThere.value
    if (this.#inputReturn.min >= this.#inputReturn.value) {
      this.#inputReturn.value = this.#inputThere.value
    }
  }

  /**
   * Выводит на экран данные билета
   */
  #printTicket() {
    this.#ticket.append(this.#getTicketRow('Туда', this.#inputThere.value))
    if (this.#checkboxReturn.checked) {
      this.#ticket.append(this.#getTicketRow('Обратно', this.#inputReturn.value))
    }
    this.#ticket.showModal()
  }

  /**
   * Возвращает строку билета
   * @param {string} title
   * @param {string} date
   * @returns {HTMLElement}
   */
  #getTicketRow(title, date) {
    const row = this.#ui.getDiv(title)
    row.append(this.#ui.getDiv(this.#getFormattedDate(date)))
    return row
  }

  #getFormattedDate(date) {
    return moment(date).format('DD.MM.YYYY')
  }

  /**
   * Удаляет содержимое билета
   */
  #resetTicket() {
    this.#ticket.innerHTML = ''
  }

  /**
   * Сброс к дефолту всех полей
   */
  #resetInputs() {
    this.#setCurrentDate()
    this.#inputReturn.value = null
    if (this.#checkboxReturn.checked) {
      this.#checkboxReturn.checked = false
      this.#inputReturn.disabled = true
      this.#ui.toggleReturn(this.#wrapperReturn)
    }
  }
}
