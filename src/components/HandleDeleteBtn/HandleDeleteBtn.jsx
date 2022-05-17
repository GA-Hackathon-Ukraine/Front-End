import savedfilled from '../../../src/savedred.svg'
import './HandleDeleteBtn.styles.css'

const HandleDeleteBtn = ({ elem, handleDelete, showFave }) => {
  
  const DeleteBtn = (
    <div className='red-saved-btn-handle-delete' onClick={(e) => handleDelete(elem.id)}>
        <span className="saved-unfilled-wrapper">
          <img
            alt="swipe-icon"
            className="save-btn-swipe-section-saved"
            src={savedfilled}
          />
        </span>
      </div>
  )
  
  return (
    <>
      
      {showFave ? DeleteBtn : '' }

      
    </>
  )
}

export default HandleDeleteBtn