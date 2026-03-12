function DeleteModal({post,onConfirm,onCancel}){

return(
<div className="modal-overlay">
    <div className="modal-content">
        <h3>Are you sure you want to delete this item?</h3>
        <div class="modal-actions">
        <button className="btn-cancel" onClick={onCancel}>Cancel</button>

        <button className="btn-delete" onClick={onConfirm}>Delete</button>
        </div>
    </div>
</div>
)
}

export default DeleteModal;