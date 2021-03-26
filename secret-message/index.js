const { hash } = window.location;
const decoded_message = atob(hash.replace('#',''));
if(decoded_message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide')
    document.querySelector('h1').innerHTML= decoded_message;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const link_input = document.querySelector('#link-input');
    //console.log(link_input.value);

    link_input.value = `${window.location}#${encrypted}`
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');
    link_input.select();
});

