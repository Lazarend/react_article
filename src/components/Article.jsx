import React from 'react';

export const Article = ({ title, text, date }) => {
  const today = date;
  const dateISO = today.toISOString().slice(0, 10);
  const dateLocaleString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

    <>
      <div className="box">
        <h2 className="title" data-cy="title">
          {title}
        </h2>

        <p className="subtitle">
          <time dateTime={dateISO} data-cy="date">
            {dateLocaleString}
          </time>
        </p>

        <p data-cy="text">
          {text}
        </p>
      </div>
    </>;
};