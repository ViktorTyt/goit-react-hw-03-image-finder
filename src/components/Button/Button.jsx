import css from './Button.module.css';

export const Button = ({ loadMore }) => {
  const { Button } = css;

  return (
    <button className={Button} type="button" onClick={loadMore}>
      load more
    </button>
  );
};
