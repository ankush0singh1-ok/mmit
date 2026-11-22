
import { useEffect } from 'react';

const useSEO = (title, description) => {
  useEffect(() => {
    document.title = `${title} | MMIT Hariharpur, Gorakhpur`;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);
};

export default useSEO;
