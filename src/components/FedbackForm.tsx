import { useFeedbackForm } from '../utils/feedback-form';
import classes from '../styles/TallyForm.module.css';

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const TALLY_URL =
  'https://tally.so/embed/pbpopE?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';

export function FeedbackForm() {
  useFeedbackForm();

  return (
    <iframe
      data-tally-src={TALLY_URL}
      title="South Afrifur Furry Convention 2026 Feedback"
      className={classes['tally-embed']}
    />
  );
}
