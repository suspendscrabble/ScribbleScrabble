import { Member, System } from '../utils/pk-types'
import CardAvatar from './card-avatar'
import CardBanner from './card-banner'
import CardText from './card-text'
import { BannerPosition, AvatarPosition } from '../utils/types'
import { htmlReactParserOptions } from '../utils/card-utils'

interface CardProps {
  data: Member | System
  bannerPosition: BannerPosition
  avatarPosition: AvatarPosition
}

const Card = (props: CardProps) => {
  const { data, bannerPosition, avatarPosition } = props
  const name = data.name
  const banner = data.banner
  const avatarURL = data.avatar_url
  const color = data.color
  const pronouns = data.pronouns
  const description = data.description
  const displayName = 'display_name' in data ? data.display_name : 'System'
  const birthday = 'birthday' in data ? data.birthday?.replace(/^0{3}4-/, '') : null

  const cardClasses =
    'container max-w-md p-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50 text-center rounded flex flex-col gap-2'
  return (
    <div className={cardClasses}>
      {banner && bannerPosition === 'text' && (
        <CardBanner banner={banner} name={name}>
          {name && (
            <CardText
              className='text-xl font-bold'
              embed={false}
              htmlReactParserOptions={htmlReactParserOptions}
              text={name}
            />
          )}
          {displayName && (
            <CardText
              className='text-lg italic'
              embed={false}
              htmlReactParserOptions={htmlReactParserOptions}
              text={displayName}
            />
          )}
          {pronouns && (
            <CardText
              text={pronouns}
              embed={true}
              htmlReactParserOptions={htmlReactParserOptions}
            />
          )}
          {birthday && <div className='italic'>{birthday}</div>}
        </CardBanner>
      )}
      {banner && bannerPosition === 'top' && (
        <CardBanner name={name} banner={banner} />
      )}
      <div>
        {avatarURL && avatarPosition !== 'none' && (
          <CardAvatar
            name={name}
            avatar_url={avatarURL}
            color={color}
            avatarPosition={avatarPosition}
          />
        )}
        <div>
          {(!banner || bannerPosition !== 'text') && (
            <div>
              {name && (
                <CardText
                  className='text-xl font-bold'
                  embed={false}
                  htmlReactParserOptions={htmlReactParserOptions}
                  text={name}
                />
              )}
              {displayName && (
                <CardText
                  className='text-lg italic'
                  embed={false}
                  htmlReactParserOptions={htmlReactParserOptions}
                  text={displayName}
                />
              )}
              {pronouns && (
                <CardText
                  text={pronouns}
                  embed={true}
                  htmlReactParserOptions={htmlReactParserOptions}
                />
              )}
              {birthday && <div className='italic'>{birthday}</div>}
            </div>
          )}
          {description && (
            <CardText
              text={description}
              embed={true}
              htmlReactParserOptions={htmlReactParserOptions}
              className='text-left'
            />
          )}
        </div>
      </div>
      {banner && bannerPosition === 'bottom' && (
        <CardBanner name={name} banner={banner} />
      )}
    </div>
  )
}

export default Card
