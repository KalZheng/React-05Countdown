import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({
  result,
  targetTime,
}, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open(){
                //now this dialog tag can change 
                // to something else and timer 
                // challenge will not need to change 
                // function caller name
                dialog.current.showModal();
            }
        };
    });
  return (
    <dialog ref={dialog} className="result-modal" open>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>x seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
