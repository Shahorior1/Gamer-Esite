// main.js

document.addEventListener("DOMContentLoaded", () => {
    // Watch Now buttons
    const watchNowButtons = document.querySelectorAll('#click-and-watch');

    watchNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Redirecting to video...');
            // You could redirect to a real video URL here if needed
        });
    });

    // Sign In and Go Rogue buttons
    const signInBtn = document.querySelector('.banner-btns button:nth-child(1)');
    const goRogueBtn = document.querySelector('.banner-btns button:nth-child(2)');

    signInBtn.addEventListener('click', () => {
        console.log('Sign In clicked!');
        alert('Sign In feature coming soon!');
    });

    goRogueBtn.addEventListener('click', () => {
        console.log('Go Rogue clicked!');
        alert('Going rogue... hang tight!');
    });

    // Future improvement: mobile nav toggle logic can go here
});
