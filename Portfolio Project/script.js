// script.js

// Get elements
const leftPupil = document.querySelector('.left-pupil');
const rightPupil = document.querySelector('.right-pupil');

// Mouse move event
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Get eye position
    const leftEyeRect = leftPupil.parentElement.getBoundingClientRect();
    const rightEyeRect = rightPupil.parentElement.getBoundingClientRect();

    // Calculate movement for left pupil
    const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
    const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;
    const leftAngle = Math.atan2(mouseY - leftEyeCenterY, mouseX - leftEyeCenterX);
    const leftMoveX = Math.cos(leftAngle) * 10;
    const leftMoveY = Math.sin(leftAngle) * 10;

    // Calculate movement for right pupil
    const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
    const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;
    const rightAngle = Math.atan2(mouseY - rightEyeCenterY, mouseX - rightEyeCenterX);
    const rightMoveX = Math.cos(rightAngle) * 10;
    const rightMoveY = Math.sin(rightAngle) * 10;

    // Move pupils
    leftPupil.style.transform = `translate(-50%, -50%) translate(${leftMoveX}px, ${leftMoveY}px)`;
    rightPupil.style.transform = `translate(-50%, -50%) translate(${rightMoveX}px, ${rightMoveY}px)`;
});
