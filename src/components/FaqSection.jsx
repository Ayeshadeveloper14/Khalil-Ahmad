import React from 'react';
import { FAQ_ITEMS } from '../data/constants';

export default function FaqSection({ openFaqIndex, toggleFaq }) {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <span className="eyebrow">faq</span>
        <h2 className="section-title">Frequently asked questions</h2>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-q"
                  onClick={() => toggleFaq(idx)}
                  type="button"
                >
                  <span>{item.question}</span>
                  <span className="plus">+</span>
                </button>
                <div
                  className="faq-a"
                  style={{
                    maxHeight: isOpen ? '500px' : '0px'
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
