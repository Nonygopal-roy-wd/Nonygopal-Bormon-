const allowedUsers = [];
const messages = [];

function addFriend() {
    const friendName = document.getElementById('friendName').value.trim();
    if (friendName && !allowedUsers.includes(friendName)) {
        allowedUsers.push(friendName);
        alert(`${friendName} added to the friend list.`);
    } else {
        alert(friendName ? `${friendName} is already added.` : 'Please enter a valid name.');
    }
}

function sendMessage() {
    const message = document.getElementById('message').value.trim();
    const username = prompt('Enter your username:').trim();

    if (!allowedUsers.includes(username)) {
        alert('You are not allowed to send messages.');
        return;
    }

    if (message) {
        messages.push({ username, message });
        loadMessages();
        document.getElementById('message').value = '';
    } else {
        alert('Message cannot be empty!');
    }
}

function loadMessages() {
    const messageContainer = document.getElementById('messages');
    messageContainer.innerHTML = '';
    messages.forEach(msg => {
        const div = document.createElement('div');
        div.className = 'message-box';
        div.innerHTML = `<strong>${msg.username}:</strong> ${msg.message}`;
        messageContainer.appendChild(div);
    });
}