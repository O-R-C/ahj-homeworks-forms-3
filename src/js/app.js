import setTitle from './setTitle'
import TripCalendar from '../components/TripCalendar/TripCalendar'

setTitle('Trip Calendar')

const tripCalendar = new TripCalendar('body')
tripCalendar.init()
