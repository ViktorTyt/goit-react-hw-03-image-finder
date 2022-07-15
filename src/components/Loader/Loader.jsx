import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.LoaderBox}>
      <ThreeDots
        color="#00BFFF"
        // justifyContent="center"
        height={80}
        width={80}
      />
    </div>
  );
};

// Oval	<Oval color="#00BFFF" height={80} width={80} />
// Puff	<Puff color="#00BFFF" height={80} width={80} />
// Rings	<Rings color="#00BFFF" height={80} width={80} />
// TailSpin	<TailSpin color="#00BFFF" height={80} width={80} />
// ThreeDots	<ThreeDots color="#00BFFF" height={80} width={80} />
