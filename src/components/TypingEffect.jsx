import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
  return (
    <div style={
      { fontSize: '33px', display: 'inline-block' , fontWeight:600 ,}
      }>
      I'm a{' '}
      <span className="logo">
        <TypeAnimation
          sequence={[
            'Traveller',
            1000,
            'Sketchist',
            1000,
            'Defence Aspirant',
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

// Web Developer, Problem Solver, UI/UX designer
export default TypingEffect;
