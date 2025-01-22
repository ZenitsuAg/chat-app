document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.querySelector('#send-button');
    const messageInput = document.querySelector('#message-input');
    const chatBox = document.querySelector('#chat-box');
    const btnDecide = document.querySelector('.btn-order')

    let isSent = true;

    messageInput.value = ''
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    btnDecide.addEventListener('click', () => {
        isSent = !isSent
        if (isSent) {
            btnDecide.textContent = "Send"
        } else {
            btnDecide.textContent = "Receive"
        }       
    })

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === '') return;

        const messageElement = document.createElement('p');
        messageElement.classList.add('message');
        messageElement.classList.add(isSent ? 'sent' : 'received');
        messageElement.textContent = messageText;
        if (isSent) {
            let sendElem = document.createElement('div')
            sendElem.classList.add('send-elem')
            sendElem.appendChild(messageElement)
            messageElement.classList.add('bg-blue-500', 'text-white')
            chatBox.appendChild(sendElem)
        } else {
            let receiveElem = document.createElement('div')
            receiveElem.classList.add('receive-elem')
            receiveElem.appendChild(messageElement)
            messageElement.classList.add('bg-gray-300')
            chatBox.appendChild(messageElement)
        }

        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
        isSent = !isSent;

        if (isSent) {
            btnDecide.textContent = "Send"
        } else {
            btnDecide.textContent = "Receive"
        }
    }
    
    // ###########################################################
    const svgs = document.querySelectorAll('svg')
    svgs.forEach(svg => {
        svg.classList.add('cursor-pointer')
    } )

    const contactName = document.querySelector('.contact-name')
    const contactSend = document.querySelector('.contact-send')
    const contactChange = document.querySelector('#name')

    contactSend.addEventListener('click', () => {
        contactName.textContent = contactChange.value
        contactChange.value = ''
    })
    contactChange.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            contactName.textContent = contactChange.value
            contactChange.value = ''
        }
    });

    const sentTheme = document.querySelector('.sent-theme')
    const sentThemeBtn = document.querySelector('.sent-theme-btn')
    const sentText = document.querySelector('.sent-text')
    const sentTextBtn = document.querySelector('.sent-text-btn')
    const receivedTheme = document.querySelector('.received-theme')
    const receivedThemeBtn = document.querySelector('.received-theme-btn')
    const receivedTextBtn = document.querySelector('.received-text-btn')
    const receivedText = document.querySelector('.received-text')
        
    sentThemeBtn.addEventListener('click', () => {
        document.querySelectorAll('.sent').forEach(s => {
            if (sentTheme.value == 'white' || sentTheme.value == 'black') {
                s.classList.add(`bg-${sentTheme.value.trim()}`)
            } else {
                s.classList.add(`bg-${sentTheme.value.trim()}-500`)
            }
        })
        sentTheme.value = ''
    })
    receivedThemeBtn.addEventListener('click', () => {
        document.querySelectorAll('.received').forEach(s => {
            if (receivedTheme.value == 'white' || receivedTheme.value == 'black') {
                s.classList.add(`bg-${receivedTheme.value.trim()}`)
            } else {
                s.classList.add(`bg-${receivedTheme.value.trim()}-500`)
            }        
        })
        receivedTheme.value = ''
    })
    sentTextBtn.addEventListener('click', () => {
        document.querySelectorAll('.sent').forEach(s => {
            if (sentText.value == 'white' || sentText.value == 'black') {
                s.classList.add(`text-${sentText.value.trim()}`)
            } else {
                s.classList.add(`text-${sentText.value.trim()}-500`)
            }      
        })
        sentText.value = ''
    })
    receivedTextBtn.addEventListener('click', () => {
        document.querySelectorAll('.received').forEach(s => {
            if (receivedText.value == 'white' || receivedText.value == 'black') {
                s.classList.add(`text-${receivedText.value.trim()}`)
            } else {
                s.classList.add(`text-${receivedText.value.trim()}-500`)
            }
        })
        receivedText.value = ''
    })


    // *********** LAST LAP *******************
    const fontSelect = document.querySelector('#font-select')
    const body = document.querySelector('body')
    fontSelect.addEventListener('change', () => {
        body.classList.add(fontSelect.value)
    })
});
