import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetchHook } from '../../hooks/useFetchHook';
import { LinkData } from '../../types';

import './style.css';

export const List = () => {
  const [links, setLinks] = useState<LinkData[]>([]);
  const { fetchData, isError, isLoading } = useFetchHook(setLinks);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const linksList = links.map(link => (
    <li className="list__item" key={link.id}>
      <Link
        to={`/single.html?s=${link.link.toLowerCase()}`}
        className="list__link"
      >
        <span className="list__star">*</span>
        {link.link}
      </Link>
    </li>
  ));

  return (
    <>
      {isError && <p> Error 😫</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list">{links && linksList}</ul>
      )}
    </>
  );
};
