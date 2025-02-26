import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div id="footer">
      Built by{' '}
      <a href="https://paion-data.com" target="_blank">
        Paion Data
      </a>
      . Source code is available on{' '}
      <a href="https://github.com/paion-data/chatbot-ws" target="_blank">
        GitHub
      </a>
      .
    </div>
  );
}
