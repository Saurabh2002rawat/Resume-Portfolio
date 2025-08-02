import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
  return (
    <div style={
      { fontSize: '33px', display: 'inline-block' , fontWeight:600 ,}
      }>
      I 'm a{' '}
      <span className="logo">
        <TypeAnimation
          sequence={[
            'Web Developer',
            1000,
            'Problem Solver',
            1000,
            'UI/UX designer',
            1000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
        />
      </span>
    </div>
  );
};

export default TypingEffect;
