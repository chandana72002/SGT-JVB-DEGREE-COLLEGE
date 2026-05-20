import { useEffect } from 'react';
import { setDocumentTitle } from '../utils/site';

function PageTitle({ title }) {
  useEffect(() => {
    setDocumentTitle(title);
  }, [title]);

  return null;
}

export default PageTitle;
