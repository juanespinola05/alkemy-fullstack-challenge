import { SubtitleH2 } from './subtitleStyles'

const Subtitle = ({ children, type }) => {
  return (
    <SubtitleH2 variant={type}>
      {children}
    </SubtitleH2>
  )
}

export { Subtitle }
