// Write your code here
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <Popup
      modal
      trigger={<img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />}
    >
      {close => (
        <>
          <div>
            <ReactPlayer url={videoUrl} />
          </div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose />
          </button>
        </>
      )}
    </Popup>
  )
}
export default MovieItem
