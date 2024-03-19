export default function ResultModal({ result, targetTime }) {
  return (
    <dialog class="result-modal" open>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <string>X seconds left.</string>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
