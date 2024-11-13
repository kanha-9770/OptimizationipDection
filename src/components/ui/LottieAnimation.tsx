// components/LottieAnimation.tsx
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LottieAnimationProps {
  animationData:string | object; // You can be more specific with the type if you know the shape of your JSON
  loop?: boolean;
  autoplay?: boolean;
  className?: string; // For applying Tailwind CSS classes
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  className = '',
}) => {
  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      src={animationData}
      className={className}
    />
  );
};

export default LottieAnimation;
