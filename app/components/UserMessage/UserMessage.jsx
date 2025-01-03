import './UserMessage.scss'

export function UserMessage({ className, children }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
