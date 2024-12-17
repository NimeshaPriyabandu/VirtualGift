onload = () => {
    document.body.classList.remove("container");
    const lines = document.querySelectorAll('.message .line');
    lines.forEach((line, index) => {
        setTimeout(() => {
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
        }, index * 1000); 
    });
  };