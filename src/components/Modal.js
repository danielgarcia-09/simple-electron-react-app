const Modal = ({children, isOpen, setIsOpen}) => {
    return (
        <>
            {isOpen && (
                <div className="modal-container">
                    <div className="modal-close" onClick={() => setIsOpen(false)}>X</div>
                    <div className="modal">
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}
 
export default Modal;