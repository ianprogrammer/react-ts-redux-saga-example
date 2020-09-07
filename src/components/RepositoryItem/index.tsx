import React from 'react'

// import { Container } from './styles';

interface Props {
  name: string
  description: string
  language: string
  link: string
}
const colors: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  'C#': '#178600',
  TypeScript: '#2b7489'
}
const RepositoryItem: React.FC<Props> = (props: Props) => {
  return (
    <a
      href={props.link}
      className="github-card"
      data-github="Nexmo/nexmo-ruby"
      rel="noopener noreferrer"
      target="_blank"
    >
      <h3>{props.name}</h3>

      <span className="github-card__meta">
        <span
          className="github-card__language-icon"
          style={{ color: colors[props.language] }}
        >
          ●
        </span>{' '}
        {props.language}
      </span>
      <span className="github-card__meta">
        <i className="fa fa-star" aria-hidden="true"></i>
        <span data-stars>
          <i className="fa fa-spinner" aria-hidden="true"></i>
        </span>
      </span>
      <span className="github-card__meta">
        <i className="fa fa-code-fork" aria-hidden="true"></i>
        <span data-forks>
          <i className="fa fa-spinner" aria-hidden="true"></i>
        </span>
      </span>
    </a>
  )
}

export default RepositoryItem
