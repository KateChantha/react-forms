/**
 * @param {string} status 
 * @param {string} text message
 * @returns htmlElement || null
 */
const Message = ({ status = 'error', text }) => {
  return status && status !== 'loading'
        ? <div className={`message ${status}`}>{text}</div>
        : null
}

export default Message;