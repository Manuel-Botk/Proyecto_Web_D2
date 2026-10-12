import { PiCalendarBlank, PiMotorcycle } from 'react-icons/pi'

function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <span className="pill-gray"><PiCalendarBlank size={16} /> Envío Programado</span>
        <span className="pill-gray"><PiMotorcycle size={16} /> Envío D2 Express</span>
      </div>
    </div>
  )
}

export default TopBar