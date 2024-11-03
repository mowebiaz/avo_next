import './TitleWithIcon.scss'

export function TitleWithIcon({ title, icon }) {
  return (
    <div className="line-title">
      <div className="icon-container">
        {icon}
      </div>
      {title}
    </div>
  )
}
