let highestZ = 1;

class Paper {
  holdingPaper = false;
  startX = 0;
  startY = 0;
  moveX = 0;
  moveY = 0;
  prevX = 0;
  prevY = 0;
  velX = 0;
  velY = 0;
  rotation = Math.random() * 30 - 15;
  currentX = 0;
  currentY = 0;

  init(paper) {
    const updatePosition = (x, y) => {
      this.velX = x - this.prevX;
      this.velY = y - this.prevY;

      if (this.holdingPaper) {
        this.currentX += this.velX;
        this.currentY += this.velY;
        paper.style.transform = `translate(${this.currentX}px, ${this.currentY}px) rotate(${this.rotation}deg)`;
      }

      this.prevX = x;
      this.prevY = y;
    };

    const startInteraction = (x, y) => {
      this.holdingPaper = true;
      paper.style.zIndex = highestZ++;
      this.startX = x;
      this.startY = y;
      this.prevX = x;
      this.prevY = y;
    };

    const endInteraction = () => {
      this.holdingPaper = false;
    };

    const onMove = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      updatePosition(x, y);
    };

    const onStart = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      startInteraction(x, y);
    };

    const onEnd = () => endInteraction();

    paper.addEventListener('mousedown', onStart);
    paper.addEventListener('touchstart', onStart);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchend', onEnd);
  }
}

document.querySelectorAll('.paper').forEach((paper) => {
  const p = new Paper();
  p.init(paper);
});
