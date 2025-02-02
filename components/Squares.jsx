import { useRef, useEffect } from 'react';

const Squares = ({
  borderColor = '#999',
  squareSize = 40,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawGrid();
    };

    // Draw the grid without animation or hover effects
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const numSquaresX = Math.ceil(canvas.width / squareSize) + 1;
      const numSquaresY = Math.ceil(canvas.height / squareSize) + 1;

      // Draw each square
      for (let x = 0; x < numSquaresX; x++) {
        for (let y = 0; y < numSquaresY; y++) {
          const squareX = x * squareSize;
          const squareY = y * squareSize;

          ctx.strokeStyle = borderColor;
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }

      // Optional: If you want to keep the radial gradient:
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2)) / 2
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(1, '#060606');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // draw initially

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [borderColor, squareSize]);

  return <canvas ref={canvasRef} className="w-full h-full border-none block" />;
};

export default Squares;
