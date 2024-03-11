const errorMsg = {
  message:
    'Sorry, there are no images matching  your search query. Please, try again!',
  messageSize: '16',
  messageLineHeight: '24',
  iconUrl: './img/error.svg',
  backgroundColor: 'rgb(239, 64, 64)',
  messageColor: 'rgb(255, 255, 255)',
  titleColor: 'rgb(255, 255, 255)',
  position: 'topRight',
  close: 'rgb(255, 255, 255)',
  maxWidth: '432px',
};

const okMsg = {
  title: 'Ok',
  message: '`We found ${} photos`',
  iconUrl: './img/ok.svg',
  backgroundColor: 'rgb(89, 161, 13)',
  messageColor: 'rgb(255, 255, 255)',
  titleColor: 'rgb(255, 255, 255)',
  position: 'topRight',
  close: 'rgb(255, 255, 255)',
};

const warningMsg = {
  title: 'Caution',
  message: 'You forgot important data',
  iconUrl: './img/warning.svg',
  backgroundColor: 'rgb(255, 160, 0)',
  messageColor: 'rgb(255, 255, 255)',
  titleColor: 'rgb(255, 255, 255)',
  position: 'center',
  close: 'rgb(255, 255, 255)',
};

const hello = {
  title: 'Hello',
  message: 'Welcome!',

  iconUrl: './img/bell.svg',
  backgroundColor: 'rgb(0, 153, 255)',
  messageColor: 'rgb(255, 255, 255)',
  titleColor: 'rgb(255, 255, 255)',
  position: 'center',
  close: 'rgb(255, 255, 255)',
};

export { errorMsg, okMsg, warningMsg, hello };
