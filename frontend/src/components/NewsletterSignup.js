import classes from './NewsletterSignup.module.css';
import { useActionData, useFetcher } from 'react-router-dom';

function NewsletterSignup() {
  const fetcher = useFetcher();
  const data = useActionData()

  if(data) {
    window.alert(data.message)
  }

  return (
    <fetcher.Form 
    method="post"
    action='/NewsLetter' // Very Important to know which page you give it the data to work in it's main component
    className={classes.newsletter}>
      <input
        type="email"
        name='email'
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
