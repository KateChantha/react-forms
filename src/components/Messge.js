/**
 * @param {string} status 
 * @param {string} text message
 * @returns htmlElement || null
 */
const Message = ({ status, text }) => {
  // initail state of status(in App) is '' that will retrun null
  return status && status !== 'loading'
        ? <div className={`message ${status}`}>{text}</div>
        : null
}

export default Message;