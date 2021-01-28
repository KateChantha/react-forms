import { css } from '@emotion/css'

/**
 * @param {loading} if status is updated to laoding and in formConfig has property spinner to true
 * loading={status === 'loading' && spinner}
 */
const Spinner = ({ loading }) => {
  return loading ? (
    <img
      src="https://i.imgur.com/01yMDgZ.gif"
      alt="spinner"
      className={css`
        height: 30px;
        display: inline-block;
        margin-left: 10px;
      `}
    />
  ) : null
}

export default Spinner;