import { useSearchParams } from 'react-router-dom';

export const LinkPage = () => {
  const [searchParams] = useSearchParams();
  const linkName = searchParams.get('s');

  const localStyle = {
    color: '#9333ea',
  };

  return (
    <p>
      This <span style={localStyle}>is</span> page for{' '}
      <span style={localStyle}>{linkName}</span>
    </p>
  );
};
