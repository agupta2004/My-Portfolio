// Robot movement
const robotHead = document.querySelector('.robot-head');
const pupils = document.querySelectorAll('.pupil');

document.addEventListener('mousemove', (e) => {
    const rect = robotHead.getBoundingClientRect();
    const headCenterX = rect.left + rect.width / 2;
    const headCenterY = rect.top + rect.height / 2;

    const angleX = (e.clientX - headCenterX) / 50;
    const angleY = (e.clientY - headCenterY) / 50;

    // Head movement
    robotHead.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`;

    // Pupils follow
    pupils.forEach(pupil => {
        pupil.style.transform = `translate(${angleX * 2}px, ${angleY * 2}px)`;
    });
});

