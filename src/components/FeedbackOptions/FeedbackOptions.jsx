export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
        {
            options.map((opt) => <button 
            key={opt} 
            onClick={() => onLeaveFeedback(opt)}>{opt}</button>)
        }
    </div>
  );
}
