import "@styles/components/Modal.scss";
import { useModalContext } from "@/context/ModalContext";
import { formatTime } from "@/lib/utils";

function Modal() {
  const modalContext = useModalContext();
  const { isModalOpen, setIsModalOpen, winData } = modalContext;
  const { time, attempts } = winData;
  return (
    <div className={`${isModalOpen && "active"} modal`}>
      <div
        className="modal__overlay"
        onClick={() => setIsModalOpen(false)}
      ></div>
      <div className="modal__wrapper">
        <h2 className="modal__title">Victory!</h2>
        <p className="modal__body">
          You have achieved victory <br />
          in <span>{formatTime(time)}</span> minutes
          <br />
          and <span>{attempts}</span> attempts.
        </p>
        <button className="modal__button" onClick={() => setIsModalOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
export default Modal;
