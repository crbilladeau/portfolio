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

const GalleryChanger = ({ images, mobileImages, desktop }) => {
  const [[page, direction], setPage] = useState([0, 0]);
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
          desktop={desktop}
        />
        <GalleryImageMobile
          key={page}
          src={mobileImages[imageIndex]}
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
          desktop={desktop}
        />
      </AnimatePresence>
      <NextButtonContainer desktop={desktop}>
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
  max-height: 85vh;
  max-width: 40vw;
  @media screen and (max-width: 1440px) {
    top: auto;
    max-height: 70vh;
    max-width: 40vw;
  }
  @media screen and (max-width: 1024px) {
    top: auto;
    max-height: 100vh;
    max-width: 90vw;
  }
  @media screen and (max-width: 768px) {
    display: none;
    max-height: 100vh;
  }
  @media screen and (max-width: 425px) {
    display: none;
    max-height: 70vh;
  }
`;

const GalleryImageMobile = styled(motion.img)`
  display: none;
  position: absolute;
  @media screen and (max-width: 768px) {
    display: flex;
    max-height: 100vh;
  }
  @media screen and (max-width: 425px) {
    max-height: 70vh;
  }
`;

const NextButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.desktop ? '30vw' : '80vh')};
  justify-content: space-between;
  @media screen and (max-width: 1440px) {
    margin-bottom: 110px;
    height: ${(props) => (props.desktop ? '30vw' : '70vh')};
  }
  @media screen and (max-width: 1024px) {
    height: ${(props) => (props.desktop ? '60vw' : '90vh')};
  }
  @media screen and (max-width: 768px) {
    height: 90vh;
  }
  @media screen and (max-width: 425px) {
    height: 70vh;
  }
`;

const NextButton = styled(motion.div)`
  position: relative;
  background: whitesmoke;
  color: magenta;
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
  @media screen and (max-width: 1440px) {
    top: 55px;
  }
`;

export default GalleryChanger;

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
