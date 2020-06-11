import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

const variants = {
  enter: (direction) => {
    return {
      y: direction > 0 ? 50 : -50,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      y: direction < 0 ? 50 : -50,
      opacity: 0,
    };
  },
};

const GalleryChanger = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <GalleryImage
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            y: { type: 'spring', stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 },
          }}
          drag='y'
          dragConstraints={{ up: 0, down: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.y, velocity.y);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <NextButtonContainer>
        <NextButton className='next' onClick={() => paginate(-1)}>
          {'▲'}
        </NextButton>
        <NextButton className='prev' onClick={() => paginate(1)}>
          {'▼'}
        </NextButton>
      </NextButtonContainer>
    </>
  );
};

const GalleryImage = styled(motion.img)`
  border-radius: 3px;
  position: absolute;
  max-height: 100vh;
  max-width: 100vw;
  margin-top: 40px;
`;

const NextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  margin-top: 60px;
  justify-content: space-between;
`;

const NextButton = styled(motion.div)`
  position: relative;
  background: whitesmoke;
  color: #211a23;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
`;

export default GalleryChanger;

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
