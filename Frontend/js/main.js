// Dummy Data for Features
const featuresData = [
    {
        id: 'ai-companion',
        title: 'AI Study Companion',
        description: 'Upload notes/papers to get AI-generated summaries, revision notes, quizzes, and predicted exam questions using a cloud-based Gemini agent.',
        icon: '💡' // Placeholder icon
    },
    {
        id: 'offline-ai',
        title: 'Offline AI Learning',
        description: 'On-device TensorFlow Lite model personalizes learning and adapts difficulty without internet.',
        icon: '🧠'
    },
    {
        id: 'zeronet-quiz',
        title: 'ZeroNet Quiz Mode',
        description: 'Multiplayer classroom quizzes using WebRTC peer-to-peer mesh, requiring no server or connectivity.',
        icon: '🎮'
    },
    {
        id: 'whatsapp-bot',
        title: 'WhatsApp Learning Bot',
        description: 'Students can ask doubts, get answers, and learn via chat using Flask + Twilio, working smoothly on 2G networks.',
        icon: '💬'
    },
    {
        id: 'multilingual-voice',
        title: 'Multilingual & Voice Support',
        description: 'Google Translate Widget and Web Speech API make learning inclusive and accessible in regional languages.',
        icon: '🗣️'
    },
    {
        id: 'smart-sync',
        title: 'Smart Sync & Dashboard',
        description: 'Offline progress auto-syncs to Firebase once online, keeping teachers updated effortlessly.',
        icon: '📊'
    },
];

// --- Core PWA Service Worker Registration ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/js/service-worker.js') // Path relative to your website root
            .then(registration => {
                console.log('Service Worker registered successfully:', registration);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}

// --- Dynamic Feature Card Generation ---
document.addEventListener('DOMContentLoaded', () => {
    const featuresContainer = document.getElementById('features-container');

    featuresData.forEach(feature => {
        const card = document.createElement('div');
        card.className = 'feature-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer'; // Add hover effects
        card.innerHTML = `
            <div class="text-4xl mb-4 text-blue-600">${feature.icon}</div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">${feature.title}</h3>
            <p class="text-gray-600 mb-4">${feature.description}</p>
            <a href="#" class="text-blue-600 hover:underline learn-more-btn" data-feature-id="${feature.id}">Learn More</a>
        `;
        featuresContainer.appendChild(card);
    });

    // --- Event Listeners for Learn More Buttons ---
    // Using event delegation since cards are added dynamically
    featuresContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('learn-more-btn')) {
            event.preventDefault(); // Prevent default link behavior
            const featureId = event.target.dataset.featureId;
            alert(`You clicked "Learn More" for: ${featureId.replace(/-/g, ' ').toUpperCase()}\n(This would navigate to a detailed page.)`);
            // In a real app, you would navigate to a dedicated detail page or show a modal
            // window.location.href = `feature-details.html?id=${featureId}`;
        }
    });

    // --- Event Listeners for Main Navigation (Placeholders) ---
    document.getElementById('nav-lessons').addEventListener('click', (event) => {
        event.preventDefault();
        alert('Navigating to Lessons page (placeholder).');
        // window.location.href = 'lessons.html';
    });
    document.getElementById('nav-community').addEventListener('click', (event) => {
        event.preventDefault();
        alert('Navigating to Community page (placeholder).');
        // window.location.href = 'community.html';
    });
    document.getElementById('nav-progress').addEventListener('click', (event) => {
        event.preventDefault();
        alert('Navigating to Progress Dashboard (placeholder).');
        // window.location.href = 'progress.html';
    });
    document.getElementById('cta-start-learning').addEventListener('click', (event) => {
        event.preventDefault();
        alert('Welcome! Kicking off your learning journey (placeholder).');
        // window.location.href = 'lessons.html'; // Or direct to signup
    });
});