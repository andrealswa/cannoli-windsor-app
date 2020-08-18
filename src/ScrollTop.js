import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

export default withRouter(ScrollTop);

/*
Repairs what I think is a bug with react router.
React router sends the user to a seemingly random location vertically on a new page visit.
This will fix the user to the top of the page when the page is changed.
*/
