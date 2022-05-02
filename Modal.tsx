export const Modal = (props: any) => {
  return (
    <div className="modal">
      <p>Are you sure</p>
      <button className="btn btn--alt" onClick={props.onConfirm1}>
        Confirm
      </button>
      <button className="btn" onClick={props.onCancel1}>
        Cancel
      </button>
    </div>
  );
};

export default Modal;
