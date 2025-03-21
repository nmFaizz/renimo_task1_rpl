import React from "react"
import Button from "../buttons/Button"
import './styles/modal-success.css'

export default function ModalSuccess({
    isSuccess,
    message,
    onClose,
    ...rest
}) {
    if (!isSuccess) return null

    return (
        <dialog open={isSuccess} onClose={onClose} className="modal-success" {...rest}>
            <div className="modal-success-content">
                <div>
                    <h2>Success</h2>
                    <p>{message}</p>
                </div>
                <Button
                    variant="primary"
                    onClick={onClose}
                >
                    Close
                </Button>
            </div>
        </dialog>
    )
}