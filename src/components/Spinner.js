import { css } from '@emotion/css'

const Spinner = ({ loading = true }) => {
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